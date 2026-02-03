import styles from "./styles.module.scss";

type HeadingLevel = 'h1' | 'h2' | 'h3';
type HeaderVariant = 'dark' | 'light';

interface HeaderBlockProps {
  title: string;
  description?: string;
  variant?: HeaderVariant;
  as?: HeadingLevel;
  isPageHeader?: boolean;
  noMargin?: boolean;
  className?: string;
}

export default function HeaderBlock({
  title,
  description,
  variant = "dark",
  as: Heading = "h1",
  isPageHeader = false,
  noMargin = false,
  className,
}: HeaderBlockProps) {
  const classes = [
    styles.header,
    styles[variant],
    isPageHeader ? styles.pageHeader : styles.sectionHeader,
    noMargin && styles.noMargin,
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={classes}>
      <Heading>{title}</Heading>
      {/* <Divider2 size="lg" color="gold" /> */}
      {description && <p>{description}</p>}
    </header>
  );
}
