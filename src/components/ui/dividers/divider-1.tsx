import styles from "./styles.module.scss";
import type { DividerProps } from "./types";

export default function Divider1({ size = "md", color = "dark", className }: DividerProps) {
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
      <path
        fill="currentColor"
        d="M0 10h40l5-5 5 5h50M0 10h40l5 5 5-5h50"
        strokeWidth="1"
        stroke="currentColor"
        fillOpacity="0"
      />
    </svg>
  );
}
