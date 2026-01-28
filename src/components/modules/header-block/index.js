import styles from "./styles.module.scss";

/**
 * HeaderBlock - Centered page/section header with decorative accent line
 *
 * @param {Object} props
 * @param {string} props.title - The heading text
 * @param {string} [props.description] - Optional description paragraph
 * @param {"dark" | "light"} [props.variant="dark"] - Color variant (dark text on light bg, or light text on dark bg)
 * @param {"h1" | "h2" | "h3"} [props.as="h1"] - Heading element to render
 * @param {string} [props.className] - Additional CSS classes
 */
export default function HeaderBlock({
  title,
  description,
  variant = "dark",
  as: Heading = "h1",
  className,
}) {
  const classes = [
    styles.header,
    styles[variant],
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={classes}>
      <Heading>{title}</Heading>
      {description && <p>{description}</p>}
    </header>
  );
}
