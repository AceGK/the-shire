import { MouseEvent } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import type { NavLink } from '@/types';

interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavLink[];
  onClose: () => void;
  onNavClick: (e: MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export default function MobileMenu({ isOpen, navItems, onClose, onNavClick }: MobileMenuProps) {
  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    onNavClick(e, href);
    onClose();
  };

  return (
    <div id="mobile-menu" className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.closeBtn}
        onClick={onClose}
        aria-label="Close menu"
      />
      <ul>
        <li>
          <Link
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
          >
            Home
          </Link>
        </li>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
