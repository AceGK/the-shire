'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.scss';

const navItems = [
  { title: "About", link: "#about" },
  { title: "Process", link: "#process" },
  { title: "Strains", link: "#strains" },
  { title: "Stockists", link: "#buy" },
  { title: "Press", link: "#press" },
  { title: "Reviews", link: "#reviews" },
  { title: "Partners", link: "#partners" },
  // { title: "Visit", link: "#visit" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={styles.nav}>
        <a href="#main-content" className="header-skip">Skip to content</a>

        <div className={styles.navInner}>
          {/* Logo */}
          <Link href="#home" className={styles.logo}>
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
          <Link href="#buy" className={styles.cta}>
            Find Us
          </Link>

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
