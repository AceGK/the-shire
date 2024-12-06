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
              Made from the resilient leaves of Mallorn trees, our organic bags naturally decompose leaving no environmental trace.

            </div>
          </div>
          <h3>Mallorn Leaf Bags</h3>
        </div>

        <div className={styles.item}>
          <div className={styles.card}>

            <img src="/images/barrel.png" alt="Elven Crafted Jars" />
            <div className={styles.description}>
              Masterfully crafted by Elves, our jars embody the elegance and precision of Rivendell&apos;s finest artisans. Made with ethereal yet durable materials, they ensure the freshness and purity of their contents.

            </div>
          </div>
          <h3>Elven Crafted Jars</h3>
        </div>

        <div className={styles.item}>
          <div className={styles.card}>

            <img src="/images/barrel.png" alt="Dwarven-Made Barrels" />
            <div className={styles.description}>
              Our barrels are the same used for the finest dwarven ales. They are sturdy and reusable, perfect for storing your pipe-weed.
            </div>

          </div>
          <h3>Dwarven-Made Barrels</h3>
        </div>

      </div>
    </div>
  );
}
