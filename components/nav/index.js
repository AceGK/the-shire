import Link from 'next/link';
import styles from './Nav.module.scss';

export default function Nav() {
  return (
    <nav className="content-grid">
      <ul className={styles.nav}>
        <NavItem link="/">
          <img className="logo" src="/logos/the-shire-logo.png" alt="The Shire Logo" />
          <span className="visually-hidden">The Shire</span>
        </NavItem>
        <NavItem title="About" link="#about" />
        <NavItem title="Strains" link="#strains" />
        <NavItem title="Where to Buy" link="#buy" />
        <NavItem title="Visit" link="#visit" />
      </ul>
    </nav>
  );
}


function NavItem({ title, link, children }) {
  return (
    <li>
      <Link href={link} alt={title}>
        {children}
        {title}
      </Link>
    </li>
  );
}