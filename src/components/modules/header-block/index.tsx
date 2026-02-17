import styles from "./styles.module.scss";
import Reveal from "@/components/ui/reveal";

type HeadingLevel = 'h1' | 'h2' | 'h3';
type HeaderVariant = 'dark' | 'light';

interface HeaderBlockProps {
  title: string;
  pretitle?: string;
  description?: string;
  variant?: HeaderVariant;
  as?: HeadingLevel;
  isPageHeader?: boolean;
  noMargin?: boolean;
  className?: string;
}

export default function HeaderBlock({
  title,
  pretitle,
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
      {pretitle && <Reveal><span className={styles.pretitle}>{pretitle}</span></Reveal>}
      <Reveal delay={pretitle ? 100 : 0}><Heading>{title}</Heading></Reveal>
      {description && <Reveal delay={pretitle ? 200 : 100}><p>{description}</p></Reveal>}
    </header>
  );
}
