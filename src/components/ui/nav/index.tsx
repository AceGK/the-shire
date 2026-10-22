'use client';

import { useState, useRef, useCallback, useEffect, MouseEvent } from 'react';
import Link from 'next/link';
import ShoppingBagIcon from '@/assets/icons/shopping-bag.svg';
import BagDrawer from '@/components/ui/bag-drawer';
import { useCart } from '@/context/CartContext';
import { prefersReducedMotion } from '@/lib/reducedMotion';
import { setHeaderOffset } from '@/lib/headerOffset';
import PromoBar from './PromoBar';
import MobileMenu from './MobileMenu';
import { useScrollHide, useHeaderHeight, useMobileMenu } from './hooks';
import styles from './styles.module.scss';
import Logo from "@/assets/shire-supply-co-logo.svg";

interface NavItem {
  title: string;
  link: string;
}

const navItems: NavItem[] = [
  { title: "Strains", link: "/strains" },
  { title: "Retailers", link: "/retailers" },
  { title: "About", link: "/about" },
  { title: "Press", link: "/#press" },
  { title: "Reviews", link: "/#reviews" },
];

const PROMO_COOKIE_NAME = 'promo_dismissed';
const PROMO_COOKIE_HOURS = 1;

function setCookie(name: string, value: string, hours: number): void {
  const expires = new Date(Date.now() + hours * 36e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

interface NavProps {
  promoMessage?: string;
  initialPromoDismissed?: boolean;
}

export default function Nav({ promoMessage, initialPromoDismissed = false }: NavProps) {
  const initialPromoVisible = !!promoMessage && !initialPromoDismissed;
  const [promoVisible, setPromoVisible] = useState(initialPromoVisible);
  const [isHovered, setIsHovered] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const mobileMenu = useMobileMenu();
  const { count, hydrated, isOpen: bagOpen, openBag } = useCart();
  const { hidden, preventHide } = useScrollHide({ isHovered });
  const headerHeight = useHeaderHeight(headerRef, [promoVisible], initialPromoVisible);

  // Publish how much of the header is on screen, for sticky elements site-wide.
  useEffect(() => {
    setHeaderOffset(hidden ? 0 : headerHeight);
  }, [hidden, headerHeight]);

  const handleNavLinkClick = useCallback((e: MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.includes('#') ? href.split('#')[1] : null;
    if (!hash) return;

    const target = document.getElementById(hash);
    if (!target) return;

    e.preventDefault();
    preventHide();

    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: targetPosition, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    window.history.pushState(null, '', `#${hash}`);
  }, [headerHeight, preventHide]);

  const handleBagClick = () => {
    mobileMenu.close();
    openBag();
  };

  const bagLabel = hydrated && count > 0
    ? `Open bag, ${count} ${count === 1 ? 'item' : 'items'}`
    : 'Open bag';

  const handlePromoDismiss = () => {
    setCookie(PROMO_COOKIE_NAME, '1', PROMO_COOKIE_HOURS);
    setPromoVisible(false);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`${styles.nav} ${hidden ? styles.hidden : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {promoMessage && promoVisible && (
          <PromoBar message={promoMessage} onClose={handlePromoDismiss} />
        )}

        <div className={styles.navBar}>
          <a href="#main-content" className="header-skip">Skip to content</a>

          <div className={styles.navInner}>
            <Link href="/" className={styles.logo}>
              <Logo />
            </Link>

            <nav className={styles.navLinks}>
              <ul>
                {navItems.map((item) => (
                  <li key={item.title} className={styles.navItem}>
                    <Link
                      href={item.link}
                      onClick={(e) => handleNavLinkClick(e, item.link)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.navActions}>
              <button
                type="button"
                className={styles.bagButton}
                onClick={handleBagClick}
                aria-label={bagLabel}
                aria-haspopup="dialog"
                aria-expanded={bagOpen}
                aria-controls="bag-drawer"
              >
                <ShoppingBagIcon width={22} height={22} strokeWidth={1.5} aria-hidden="true" />
                {hydrated && count > 0 && (
                  <span className={styles.bagCount} aria-hidden="true">
                    {count > 99 ? '99+' : count}
                  </span>
                )}
              </button>

              <button
                type="button"
                className={`${styles.burger} ${mobileMenu.isOpen ? styles.open : ''}`}
                onClick={mobileMenu.toggle}
                aria-label="Toggle menu"
                aria-expanded={mobileMenu.isOpen}
                aria-controls="mobile-menu"
              >
                <span className={styles.bar} />
                <span className={styles.bar} />
                <span className={styles.bar} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.headerSpacer} style={{ height: headerHeight }} />

      <MobileMenu
        isOpen={mobileMenu.isOpen}
        navItems={navItems}
        onClose={mobileMenu.close}
        onNavClick={handleNavLinkClick}
      />

      <BagDrawer />
    </>
  );
}
