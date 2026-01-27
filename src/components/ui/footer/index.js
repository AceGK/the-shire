import styles from './styles.module.scss';
import TreasureChest from '@/app/icons/treasure-chest-solid.svg';
import Scroll from '@/app/icons/scroll-old-solid.svg';
import Dragon from '@/app/icons/dragon-solid.svg';
import CrystalBall from '@/app/icons/crystal-ball-solid.svg';
import Dungeon from '@/app/icons/dungeon-solid.svg';

export default function Footer() {
  return (
    <footer className="content-grid bg-color">
      <div className={styles.footer}>

        <div className={styles.newsletter}>
          <form>
            <label htmlFor="email">Sign up for our newsletter</label>
            <div>
              <input type="email" placeholder="Your email address" />
              <button type="submit">Sign Up</button>
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

        &copy; {new Date().getFullYear()} The Shire
      </div>
    </footer>
  );
}
