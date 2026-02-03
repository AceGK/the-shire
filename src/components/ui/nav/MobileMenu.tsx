import { MouseEvent } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/button';
import styles from './styles.module.scss';

interface NavItem {
  title: string;
  link: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItem[];
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
          <li key={item.title}>
            <Link
              href={item.link}
              onClick={(e) => handleLinkClick(e, item.link)}
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
        onClick={onClose}
      >
        Order Online
      </Button>
    </div>
  );
}
