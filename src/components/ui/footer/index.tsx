import Link from 'next/link';
import NewsletterForm from '@/components/ui/newsletter-form';
import styles from './styles.module.scss';
import Logo from '@/assets/shire-supply-co-logo.svg';
import TreasureChest from '@/assets/icons/treasure-chest-solid.svg';
import Scroll from '@/assets/icons/scroll-old-solid.svg';
import Dragon from '@/assets/icons/dragon-solid.svg';
import CrystalBall from '@/assets/icons/crystal-ball-solid.svg';
import Dungeon from '@/assets/icons/dungeon-solid.svg';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Strains', href: '/strains' },
  { label: 'Retailers', href: '/#buy' },
  { label: 'Press', href: '/#press' },
  { label: 'Reviews', href: '/#reviews' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="content-grid">
        <div className={styles.header}>
          <Link href="/" className={styles.logo}>
            <Logo />
          </Link>
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.content}>
          <div className={styles.newsletter}>
            <NewsletterForm />
          </div>

          {/* <p className={styles.followLabel}>Follow us</p> */}
          <div className={styles.icons}>
            <a href="https://www.facebook.com/" title="FellowshipBook" target="_blank" rel="noopener noreferrer">
              <Scroll style={{ transform: 'scaleX(-1)' }} />
            </a>
            <a href="https://instagram.com/" title="InstaGold" target="_blank" rel="noopener noreferrer">
              <TreasureChest />
            </a>
            <a href="https://bsky.app/" title="BluëSmaug" target="_blank" rel="noopener noreferrer">
              <Dragon />
            </a>
            <a href="https://linkedin.com/" title="Palantir" target="_blank" rel="noopener noreferrer">
              <CrystalBall />
            </a>
            <a href="https://myspace.com/" title="MyDungeon" target="_blank" rel="noopener noreferrer">
              <Dungeon />
            </a>
          </div>

          <div className={styles.copyright}>
            <span>&copy; {new Date().getFullYear()} The Shire Supply Co.</span>
            <span className={styles.separator}>·</span>
            <Link href="/about-this-site">About this site</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
