import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className="content-grid">
      <div className={styles.footer}>

        <div className={styles.icons}>
          <img src="/icons/treasure-chest-solid.svg" width="100%" title="InstaGold" />
          <img src="/icons/scroll-old-solid.svg" width="100%" title="FellowshipBook" />
          <img src="/icons/dragon-solid.svg" width="100%" title="xXTwitter for DragonsXx" />
          {/* <img src="/icons/crystal-ball-solid.svg" width="100%" title="PalantIr" /> */}
          <img src="/icons/dungeon-solid.svg" width="100%" title="MyDungeon" />
        </div>

        Copywrite &copy; 2023 The Shire
      </div>
    </footer>
  );
}
