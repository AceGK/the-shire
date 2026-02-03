import styles from "./styles.module.scss";
import { Divider2 } from "@/components/ui/dividers";
/**
 * HeaderBlock - Centered page/section header with decorative accent line
 *
 * @param {Object} props
 * @param {string} props.title - The heading text
 * @param {string} [props.description] - Optional description paragraph
 * @param {"dark" | "light"} [props.variant="dark"] - Color variant (dark text on light bg, or light text on dark bg)
 * @param {"h1" | "h2" | "h3"} [props.as="h1"] - Heading element to render
 * @param {boolean} [props.isPageHeader=false] - If true, adds extra top padding for page headers
 * @param {string} [props.className] - Additional CSS classes
 */
export default function HeaderBlock({
  title,
  description,
  variant = "dark",
  as: Heading = "h1",
  isPageHeader = false,
  className,
}) {
  const classes = [
    styles.header,
    styles[variant],
    isPageHeader ? styles.pageHeader : styles.sectionHeader,
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
