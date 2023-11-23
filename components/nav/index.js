import Link from 'next/link';
import styles from './Nav.module.scss';


export default function Nav() {

  return (
    <nav className="content-grid nav glass-border-bottom">
      <div className={styles.nav}>
      <Link href="/">
        <img className={styles.logo} src="/logos/the-shire-logo-light.png" alt="The Shire Logo" />
      </Link>
      <span className="visually-hidden">The Shire</span>
      <ul>
        <NavItem title="About" link="#about" />
        <NavItem title="Strains" link="#strains" />
        <NavItem title="Where to Buy" link="#buy" />
        <NavItem title="Visit" link="#visit" />
      </ul>
      <button className={styles.hamburger}><img src="/icons/menu.svg" /></button>
    </div>
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