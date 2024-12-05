import styles from './styles.module.scss';

export default function Packaging() {
  return (
    <div className={styles.packaging}>
      <h2>Our Packaging</h2>
      <div>
        {/* <img src="/images/mallorn-leaf.jpg" alt="The Shire" width="100%" height="100%"/> */}
        <ul>
          <li>
            <h3>Mallorn Leaf Bags</h3>
            <div>Made from the resilient leaves of Mallorn trees, our organic bags naturally decompose leaving no environmental trace.</div>
          </li>
          <li>
            <h3>Elven Crafted Jars</h3>
            <div>Masterfully crafted by Elves, our jars embody the elegance and precision of Rivendell&apos;s finest artisans. Made with ethereal yet durable materials, they ensure the freshness and purity of their contents.</div>
            {/* <div>Masterfully crafted by Elves, our jars embody the elegance and precision of Rivendell's finest artisans. Made with ethereal yet durable materials, they ensure the freshness and purity of their contents, much like the lasting beauty of Lothlórien.</div> */}
          </li>
          <li>
            <h3>Dwarven-Made Barrels</h3>
            <div>Our barrels are the same used for the finest dwarven ales. They are sturdy and reusable, perfect for storing your pipe-weed.</div>
          </li>

        </ul>
      </div>
    </div>
  );
}