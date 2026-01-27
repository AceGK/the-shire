import Link from 'next/link';
import styles from './Nav.module.scss';


export default function Nav() {

  return (
    <header className={styles.nav}>
      <a href="#main-content" className="header-skip">Skip to content</a>
      <span className="visually-hidden">The Shire</span>
      <ul>
        <NavItem title="Home" link="#home" />
        <NavItem title="About" link="#about" />
        <NavItem title="Process" link="#process" />
        <NavItem title="Strains" link="#strains" />
        <NavItem title="Visit" link="#visit" />
        <NavItem title="Where to Buy" link="#buy" />
        <NavItem title="Press" link="#press" />
      </ul>
    </header>
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