'use client';

import { useState, useRef, useCallback, MouseEvent } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/button';
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
  { title: "About", link: "/about" },
  { title: "Strains", link: "/strains" },
  { title: "Retailers", link: "/retailers" },
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
  const { hidden, preventHide } = useScrollHide({ isHovered });
  const headerHeight = useHeaderHeight(headerRef, [promoVisible], initialPromoVisible);

  const handleNavLinkClick = useCallback((e: MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.includes('#') ? href.split('#')[1] : null;
    if (!hash) return;

    const target = document.getElementById(hash);
    if (!target) return;

    e.preventDefault();
    preventHide();

    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    window.history.pushState(null, '', `#${hash}`);
  }, [headerHeight, preventHide]);

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

            <Button href="/strains" variant="primary" size="sm" className={styles.navCta}>
              Order Online
            </Button>

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
      </header>

      <div className={styles.headerSpacer} style={{ height: headerHeight }} />

      <MobileMenu
        isOpen={mobileMenu.isOpen}
        navItems={navItems}
        onClose={mobileMenu.close}
        onNavClick={handleNavLinkClick}
      />
    </>
  );
}
