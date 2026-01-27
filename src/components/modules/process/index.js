import styles from './styles.module.scss';

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.blurb}>
        <div className={styles.imageFrame}>
          <img src="/images/hobbit-house-2.jpg" alt="The Shire" />
          <span className={styles.corner} data-pos="tl">❦</span>
          <span className={styles.corner} data-pos="tr">❦</span>
          <span className={styles.corner} data-pos="bl">❦</span>
          <span className={styles.corner} data-pos="br">❦</span>
        </div>
        <div>
          <h2>Quality</h2>
          <div className={styles.divider}>
            <span className={styles.dot}></span>
            <span className={styles.line}></span>
            <span className={styles.dot}></span>
          </div>
          <p>
            Quality for us is as essential as a hearty meal. Each leaf and bud is thoroughly inspected with care to ensure our strains are as pure and wholesome as a Hobbit&apos;s pantry.
          </p>
          <div className={styles.flourish}>❧</div>
        </div>
      </div>
      <div className={styles.blurb}>
        <div className={styles.imageFrame}>
          <img src="/images/hobbit-house-3.jpg" alt="The Shire" />
          <span className={styles.corner} data-pos="tl">❦</span>
          <span className={styles.corner} data-pos="tr">❦</span>
          <span className={styles.corner} data-pos="bl">❦</span>
          <span className={styles.corner} data-pos="br">❦</span>
        </div>
        <div>
          <h2>Organic</h2>
          <div className={styles.divider}>
            <span className={styles.dot}></span>
            <span className={styles.line}></span>
            <span className={styles.dot}></span>
          </div>
          <p>
            Our organic practices ensure that our strains are as natural as the rolling hills of the Shire. We use no pesticides, chemicals, or magic to grow our plants.
          </p>
          <div className={styles.flourish}>❧</div>
        </div>
      </div>
      <div className={styles.blurb}>
        <div className={styles.imageFrame}>
          <img src="/images/the-shire-3.jpg" alt="The Shire" />
          <span className={styles.corner} data-pos="tl">❦</span>
          <span className={styles.corner} data-pos="tr">❦</span>
          <span className={styles.corner} data-pos="bl">❦</span>
          <span className={styles.corner} data-pos="br">❦</span>
        </div>
        <div>
          <h2>Sustainable</h2>
          <div className={styles.divider}>
            <span className={styles.dot}></span>
            <span className={styles.line}></span>
            <span className={styles.dot}></span>
          </div>
          <p>
            Inspired by the lush greenery of the Shire, our farm is a bastion of sustainable practices. We ensure that our footprint is as light as a Hobbit&apos;s.
          </p>
          <div className={styles.flourish}>❧</div>
        </div>
      </div>
    </div>

  );
}