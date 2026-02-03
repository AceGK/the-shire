'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/button';
import PromoBar from './PromoBar';
import styles from './styles.module.scss';
import Logo from "@/assets/shire-supply-co-logo.svg";

const navItems = [
  { title: "About", link: "/about" },
  { title: "Strains", link: "/strains" },
  { title: "Retailers", link: "/retailers" },
  { title: "Press", link: "/#press" },
  { title: "Reviews", link: "/#reviews" },
];

const PROMO_COOKIE_NAME = 'promo_dismissed';
const PROMO_COOKIE_HOURS = 1;

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function setCookie(name, value, hours) {
  const expires = new Date(Date.now() + hours * 36e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

export default function Nav({ promoMessage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [promoVisible, setPromoVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(104);
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);
  const preventHideRef = useRef(false);

  // Check cookie on mount to determine promo visibility
  useEffect(() => {
    const dismissed = getCookie(PROMO_COOKIE_NAME);
    if (!dismissed) {
      setPromoVisible(true);
    }
  }, []);

  // Track header height with ResizeObserver
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeight = () => {
      const height = header.offsetHeight;
      setHeaderHeight(height);
      document.documentElement.style.setProperty('--header-height', `${height}px`);
    };

    // Initial measurement
    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(header);

    return () => resizeObserver.disconnect();
  }, [promoVisible]);

  // Prevent nav hiding during hash navigation (for on-page anchor links)
  useEffect(() => {
    const handleHashChange = () => {
      preventHideRef.current = true;
      setHidden(false);
      setTimeout(() => {
        preventHideRef.current = false;
      }, 1000);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (preventHideRef.current || isHovered || currentScrollY < 100) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHovered]);

  // Handle nav link clicks with offset for fixed header
  const handleNavLinkClick = useCallback((e, href) => {
    const hash = href.includes('#') ? href.split('#')[1] : null;
    if (!hash) return;

    const target = document.getElementById(hash);
    if (!target) return;

    e.preventDefault();
    preventHideRef.current = true;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });

    // Update URL hash without triggering another scroll
    window.history.pushState(null, '', `#${hash}`);

    setTimeout(() => {
      preventHideRef.current = false;
    }, 1000);
  }, [headerHeight]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
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
          <PromoBar
            message={promoMessage}
            onClose={() => {
              setCookie(PROMO_COOKIE_NAME, '1', PROMO_COOKIE_HOURS);
              setPromoVisible(false);
            }}
          />
        )}
        <div className={styles.navBar}>
          <a href="#main-content" className="header-skip">Skip to content</a>

          <div className={styles.navInner}>
            <Link
              href="/#home"
              className={styles.logo}
              onClick={(e) => handleNavLinkClick(e, '/#home')}
            >
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

            <Button href="/strains" variant="primary" className={styles.navCta}>
              Order Online
            </Button>

            <button
              type="button"
              className={`${styles.burger} ${mobileMenuOpen ? styles.open : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to push content below fixed header */}
      <div
        className={styles.headerSpacer}
        style={{ height: headerHeight }}
      />

      <div id="mobile-menu" className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
        <button
          className={styles.closeBtn}
          onClick={closeMobileMenu}
          aria-label="Close menu"
        />
        <ul>
          <li>
            <Link
              href="#home"
              onClick={(e) => {
                handleNavLinkClick(e, '#home');
                closeMobileMenu();
              }}
            >
              Home
            </Link>
          </li>
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.link}
                onClick={(e) => {
                  handleNavLinkClick(e, item.link);
                  closeMobileMenu();
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          href="/strains"
          variant="primary"
          className={styles.mobileMenuCta}
          onClick={closeMobileMenu}
        >
          Order Online
        </Button>
      </div>
    </>
  );
}
