import styles from "./styles.module.scss";
import type { DividerProps } from "./types";

export default function Divider5({ size = "md", color = "dark", className }: DividerProps) {
  const classes = [styles.divider, styles[size], styles[color], className]
    .filter(Boolean)
    .join(" ");

  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 20"
      aria-hidden="true"
    >
      <circle cx="50" cy="10" r="3" fill="currentColor" />
      <path
        d="M0 10h43M57 10h43"
        strokeWidth="1"
        stroke="currentColor"
      />
    </svg>
  );
}
