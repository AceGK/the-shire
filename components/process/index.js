import styles from './styles.module.scss';

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.blurb}>
        <img src="/images/hobbit-farm.jpg" alt="The Shire" />
        <div>
          <h2>Quality</h2>
          <p>
            Quality for us is as essential as a hearty meal. Each leaf and bud is thoroughly inspected with care to ensure our strains are as pure and wholesome as a Hobbit&apos;s pantry.
          </p>
        </div>
      </div>
      <div className={styles.blurb}>
        <img src="/images/hobbit-farm-2.jpg" alt="The Shire" />
        <div>
          <h2>Organic</h2>
          <p>
            Our organic practices ensure that our strains are as natural as the rolling hills of the Shire. We use no pesticides, chemicals, or magic to grow our plants.
          </p>
        </div>
      </div>
      <div className={styles.blurb}>
        <img src="/images/hobbit-farm.jpg" alt="The Shire" />
        <div>
          <h2>Sustainable</h2>
          <p>
            Inspired by the lush greenery of the Shire, our farm is a bastion of sustainable practices. We ensure that our footprint is as light as a Hobbit&apos;s.
          </p>
        </div>
      </div>
    </div>

  );
}