import Button from '@/components/ui/button';
import styles from './styles.module.scss';

export default function CtaSection({
  pretitle = "Ready for an adventure?",
  title = "Find Your Perfect Leaf",
  description = "Browse our collection of premium blends or find a retailer near you.",
  primaryButton = { label: "Browse Strains", href: "/strains" },
  secondaryButton = { label: "Find Retailers", href: "/retailers" },
  variant = "light",
}) {
  return (
    <section className={`${styles.cta} ${styles[variant]}`}>
      <div className={styles.inner}>
        {pretitle && <span className={styles.pretitle}>{pretitle}</span>}
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.buttons}>
          {primaryButton && (
            <Button href={primaryButton.href} variant="primary">
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
      </div>
    </section>
  );
}
