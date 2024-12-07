import styles from './styles.module.scss';
import TreasureChest from '../../app/icons/treasure-chest-solid.svg';
import Scroll from '../../app/icons/scroll-old-solid.svg';
import Dragon from '../../app/icons/dragon-solid.svg';
import CrystalBall from '../../app/icons/crystal-ball-solid.svg';
import Dungeon from '../../app/icons/dungeon-solid.svg';

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
          <div title="FellowshipBook">
            <Scroll style={{ transform: 'scaleX(-1)' }} />
          </div>
          <div title="InstaGold">
            <TreasureChest />
          </div>
          <div title="X Twitter for Dragons">
            <Dragon />
          </div>
          <div title="Palantir">
            <CrystalBall />
          </div>
          <div title="MyDungeon">
            <Dungeon />
          </div>
        </div>

        &copy; 2025 The Shire
      </div>
    </footer>
  );
}
