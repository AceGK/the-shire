import styles from './Nav.module.scss';

export default function Nav() {
  return (
    <nav className="content-grid">
      <ul className={styles.nav}>
        <li><img className="logo" src="/logos/the-shire-logo.png" alt="The Shire Logo" /></li>
        <li>About</li>
        <li>Strains</li>
        <li>Where to Buy</li>
        <li>Visit</li>
      </ul>
    </nav>
  );
}