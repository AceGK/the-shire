'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/button';
import PromoBar from './PromoBar';
import styles from './styles.module.scss';
import Logo from "@/assets/the-shire-supply-co.svg";

const navItems = [
  { title: "About", link: "/about" },
  { title: "Strains", link: "/strains" },
  { title: "Retailers", link: "/retailers" },
  { title: "Press", link: "/#press" },
  { title: "Reviews", link: "/#reviews" },
];

export default function Nav({ promoMessage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [promoVisible, setPromoVisible] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(104); // Initial estimate: navBar (~68px) + promoBar (~36px)
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isHovered || currentScrollY < 100) {
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
            onClose={() => setPromoVisible(false)}
          />
        )}
        <div className={styles.navBar}>
          <a href="#main-content" className="header-skip">Skip to content</a>

          <div className={styles.navInner}>
            <Link href="/#home" className={styles.logo}>
              <Logo />
            </Link>

            <nav className={styles.navLinks}>
              <ul>
                {navItems.map((item) => (
                  <li key={item.title} className={styles.navItem}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Button href="/strains" variant="primary" hideOnMobile>
              Order Online
            </Button>

            <button
              className={styles.mobileMenuBtn}
              onClick={toggleMobileMenu}
              aria-label="Open menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to push content below fixed header */}
      <div
        className={styles.headerSpacer}
        style={{ height: headerHeight }}
      />

      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
        <button
          className={styles.closeBtn}
          onClick={closeMobileMenu}
          aria-label="Close menu"
        />
        <ul>
          <li>
            <Link href="#home" onClick={closeMobileMenu}>Home</Link>
          </li>
          {navItems.map((item) => (
            <li key={item.title}>
              <Link href={item.link} onClick={closeMobileMenu}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
