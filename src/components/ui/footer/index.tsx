import Button from '@/components/ui/button';
import styles from './styles.module.scss';
import TreasureChest from '@/assets/icons/treasure-chest-solid.svg';
import Scroll from '@/assets/icons/scroll-old-solid.svg';
import Dragon from '@/assets/icons/dragon-solid.svg';
import CrystalBall from '@/assets/icons/crystal-ball-solid.svg';
import Dungeon from '@/assets/icons/dungeon-solid.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="content-grid">
        <div className={styles.content}>
          <div className={styles.newsletter}>
          <form>
            <label htmlFor="email">Join the Fellowship</label>
            <div>
              <input type="email" placeholder="Your email address" />
              <Button type="submit" variant="primary" size="sm">Sign Up</Button>
            </div>
          </form>
        </div>

        <p>Follow us</p>
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

          <span>&copy; {new Date().getFullYear()} The Shire Supply Co.</span>
        </div>
      </div>
    </footer>
  );
}
