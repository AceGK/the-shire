import Button from '@/components/ui/button';
import styles from './styles.module.scss';

interface HeroProps {
  id?: string;
}

export default function Hero({ id }: HeroProps) {
  return (
    <section className={`${styles.hero} full-width`} id={id}>
      {/* Background layers */}
      <div className={styles.backgroundImage}></div>
      <div className={styles.gradientOverlay}></div>

      {/* Content */}
      <div className={styles.content}>

        <h1 className={styles.title}>The Shire <span>Supply Company</span></h1>

        {/* <div className={styles.divider}></div> */}

        {/* <p className={styles.tagline}>
          The finest pipe-weed in the Southfarthing
        </p> */}

        <span className={styles.tagline}>
          The finest pipe-weed in the Southfarthing
        </span>

        <div className={styles.ctaGroup}>
          <Button href="#strains" variant="primary" size="lg">
            Explore Strains
          </Button>
          <Button href="#about" variant="outlineLight" size="lg">
            Our Story
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        className={styles.scrollIndicator}
        href="#about"
        aria-label="Scroll to about section"
      >
        <span>Discover</span>
        <div className={styles.scrollLine}></div>
      </a>
    </section>
  );
}
