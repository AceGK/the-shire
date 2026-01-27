import styles from './styles.module.scss';

export default function Packaging() {
  return (
    <div className={styles.packaging}>
      <h2>Our Packaging</h2>
      <div className={styles.grid}>

        <div className={styles.item}>
          <div className={styles.card}>
            <img src="/images/barrel.png" alt="Mallorn Leaf Bags" />
            <div className={styles.description}>
              <span className={styles.corner} data-pos="tl">◆</span>
              <span className={styles.corner} data-pos="tr">◆</span>
              <span className={styles.corner} data-pos="bl">◆</span>
              <span className={styles.corner} data-pos="br">◆</span>
              <p>Made from the resilient leaves of Mallorn trees, our organic bags naturally decompose leaving no environmental trace.</p>
            </div>
          </div>
          <h3 className={styles.framedTitle}>
            <span className={styles.label}>Mallorn Leaf</span>
            <span className={styles.script}>Bags</span>
          </h3>
        </div>

        <div className={styles.item}>
          <div className={styles.card}>
            <img src="/images/jar.png" alt="Elven Crafted Jars" />
            <div className={styles.description}>
              <span className={styles.corner} data-pos="tl">◆</span>
              <span className={styles.corner} data-pos="tr">◆</span>
              <span className={styles.corner} data-pos="bl">◆</span>
              <span className={styles.corner} data-pos="br">◆</span>
              <p>Masterfully crafted by Elves, our jars embody the elegance and precision of Rivendell&apos;s finest artisans. Made with ethereal yet durable materials, they ensure the freshness and purity of their contents.</p>
            </div>
          </div>
          <h3 className={styles.framedTitle}>
            <span className={styles.label}>Elven Crafted</span>
            <span className={styles.script}>Jars</span>
          </h3>
        </div>

        <div className={styles.item}>
          <div className={styles.card}>
            <img src="/images/barrel.png" alt="Dwarven-Made Barrels" />
            <div className={styles.description}>
              <span className={styles.corner} data-pos="tl">◆</span>
              <span className={styles.corner} data-pos="tr">◆</span>
              <span className={styles.corner} data-pos="bl">◆</span>
              <span className={styles.corner} data-pos="br">◆</span>
              <p>Our barrels are the same used for the finest dwarven ales. They are sturdy and reusable, perfect for storing your pipe-weed.</p>
            </div>
          </div>
          <h3 className={styles.framedTitle}>
            <span className={styles.label}>Dwarven-Made</span>
            <span className={styles.script}>Barrels</span>
          </h3>
        </div>

      </div>
    </div>
  );
}
