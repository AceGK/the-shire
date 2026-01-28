'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/button';
import styles from './styles.module.scss';

const navItems = [
  { title: "About", link: "/about" },
  { title: "Strains", link: "/strains" },
  { title: "Retailers", link: "/retailers" },
  { title: "Press", link: "/#press" },
  { title: "Reviews", link: "/#reviews" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Don't hide if hovering or at top of page
      if (isHovered || currentScrollY < 100) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setHidden(true);
      } else {
        // Scrolling up
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
        className={`${styles.nav} ${hidden ? styles.hidden : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a href="#main-content" className="header-skip">Skip to content</a>

        <div className={styles.navInner}>
          {/* Logo */}
          <Link href="/#home" className={styles.logo}>
            The Shire
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.navLinks}>
            <ul>
              {navItems.map((item) => (
                <li key={item.title} className={styles.navItem}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <Button href="#buy" variant="primary" hideOnMobile>
            Order Online
          </Button>

          {/* Mobile Menu Button */}
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
      </header>

      {/* Mobile Menu Overlay */}
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
