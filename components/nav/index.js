import Link from 'next/link';
import styles from './Nav.module.scss';


export default function Nav() {

  return (
    <header className={styles.nav}>
      <a href="#main-content" className="header-skip">Skip to content</a>
      <span className="visually-hidden">The Shire</span>
      <ul>
        <NavItem title="Home" link="#home" />
        <NavItem title="Strains" link="#strains" />
        <NavItem title="About" link="#about" />
        <NavItem title="Press" link="#press" />
        <NavItem title="Where to Buy" link="#buy" />
        <NavItem title="Reviews" link="#reviews" />
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