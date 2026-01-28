import Button from '@/components/ui/button';
import styles from './styles.module.scss';

export default function Hero() {
  return (
    <section className={`${styles.hero} full-width`} id="home">
      {/* Background layers */}
      <div className={styles.backgroundImage}></div>
      <div className={styles.gradientOverlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.decorBorder}></div>

        <h1 className={styles.title}>The Shire</h1>

        <p className={styles.tagline}>
          The finest pipe-weed in the Southfarthing
        </p>

        <span className={styles.subtitle}>
          Artisanally Crafted &nbsp;|&nbsp; Since the Third Age
        </span>

        <div className={styles.ctaGroup}>
          <Button href="#strains" variant="primary">
            Explore Strains
          </Button>
          <Button href="#about" variant="outlineLight">
            Our Story
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span>Discover</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}
