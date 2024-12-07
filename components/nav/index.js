import Link from 'next/link';
import styles from './Nav.module.scss';


export default function Nav() {

  return (
    <nav className={styles.nav}>
      <div className="content-grid">
      <span className="visually-hidden">The Shire</span>
      <ul>
        <NavItem title="Home" link="#home" />
        <NavItem title="Strains" link="#strains" />
        <NavItem title="About" link="#about" />
        <NavItem title="Press" link="#press" />
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