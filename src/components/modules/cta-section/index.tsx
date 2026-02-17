import Button from '@/components/ui/button';
import Reveal from '@/components/ui/reveal';
import styles from './styles.module.scss';

interface CTAButton {
  label: string;
  href: string;
}
type CTAVariant = 'light' | 'dark';

interface CtaSectionProps {
  pretitle?: string;
  title?: string;
  description?: string;
  primaryButton?: CTAButton;
  secondaryButton?: CTAButton;
  variant?: CTAVariant;
}

export default function CtaSection({
  pretitle = "Ready for an adventure?",
  title = "Find Your Perfect Leaf",
  description = "Browse our collection of premium blends or find a retailer near you.",
  primaryButton = { label: "Browse Strains", href: "/strains" },
  secondaryButton = { label: "Find Retailers", href: "/retailers" },
  variant = "light",
}: CtaSectionProps) {
  return (
    <section className={`${styles.cta} ${styles[variant]}`}>
      <div className={styles.inner}>
        {pretitle && <Reveal><span className={styles.pretitle}>{pretitle}</span></Reveal>}
        <Reveal delay={100}><h2 className={styles.title}>{title}</h2></Reveal>
        {description && <Reveal delay={200}><p className={styles.description}>{description}</p></Reveal>}
        <Reveal delay={300}>
          <div className={styles.buttons}>
            {primaryButton && (
              <Button href={primaryButton.href} variant="shimmer">
                {primaryButton.label}
              </Button>
            )}
            {secondaryButton && (
              <Button
                href={secondaryButton.href}
                variant={variant === "dark" ? "outlineLight" : "outline"}
              >
                {secondaryButton.label}
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
