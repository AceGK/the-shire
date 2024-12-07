import styles from './styles.module.scss';

export default function Hero() {
  return (
    <div
      className={`${styles.hero} full-width`}
      style={{
        backgroundImage: `url("/images/the-shire-hero.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        alignItems: "end",
      }}
    >
    </div>
  );
}
