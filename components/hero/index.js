import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div
      className={`${styles.hero} full-width`}
      style={{
        backgroundImage: `url("/images/the-shire-hero.jpg")`,
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        
      }}>
      <div className={`${styles.overlay} full-width`} />
      <div className={styles.content}>
        {/* <img className="logo" src="/logos/the-shire.png" alt="The Shire Logo" /> */}
        <h1 className="visually-hidden">The Shire</h1>
        <p>The Finest Pipe-Weed in the Southfarthing</p>
      </div>
    </div>

  );
}