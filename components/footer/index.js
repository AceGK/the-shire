import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className="content-grid">
      <div className={styles.footer}>

        <div className={styles.icons}>
          <img src="/icons/dragon-solid.svg" width="100%" alt="xXTwitter for DragonsXx" />
          <img src="/icons/treasure-chest-solid.svg" width="100%" alt="InstaGold" />
          <img src="/icons/scroll-old-solid.svg" width="100%" alt="FellowshipBook" />
          <img src="/icons/crystal-ball-solid.svg" width="100%" alt="Palant-íri" />
        </div>

        Copywrite &copy; 2023 The Shire
      </div>
    </footer>
  );
}
