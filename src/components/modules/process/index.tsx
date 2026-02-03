import styles from './styles.module.scss';

interface Blurb {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const blurbs: Blurb[] = [
  {
    image: "/images/hobbit-house-2.jpg",
    alt: "The Shire",
    title: "Quality",
    description: "Quality for us is as essential as a hearty meal. Each leaf and bud is thoroughly inspected with care to ensure our strains are as pure and wholesome as a Hobbit's pantry."
  },
  {
    image: "/images/the-shire-3.jpg",
    alt: "The Shire",
    title: "Organic",
    description: "Our organic practices ensure that our strains are as natural as the rolling hills of the Shire. We use no pesticides, chemicals, or magic to grow our plants."
  },
];

export default function Process() {
  return (
    <div className={styles.process}>
      {blurbs.map((blurb, index) => (
        <div key={index} className={styles.blurb}>
          <div className={styles.imageFrame}>
            <img src={blurb.image} alt={blurb.alt} />
            <span className={styles.corner} data-pos="tl">❦</span>
            <span className={styles.corner} data-pos="tr">❦</span>
            <span className={styles.corner} data-pos="bl">❦</span>
            <span className={styles.corner} data-pos="br">❦</span>
          </div>
          <div>
            <h2>{blurb.title}</h2>
            <div className={styles.divider}>
              <span className={styles.dot}></span>
              <span className={styles.line}></span>
              <span className={styles.dot}></span>
            </div>
            <p>{blurb.description}</p>
            <div className={styles.flourish}>❧</div>
          </div>
        </div>
      ))}
    </div>
  );
}
