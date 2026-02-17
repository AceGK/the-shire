import Reveal from "@/components/ui/reveal";
import styles from "./styles.module.scss";

interface QuoteProps {
  children: string;
  attribution?: string;
}

export default function Quote({ children, attribution }: QuoteProps) {
  return (
    <figure className={styles.quote}>
      <Reveal>
        <span className={styles.mark} aria-hidden="true">{"\u201C"}</span>
      </Reveal>
      <Reveal delay={100}>
        <blockquote className={styles.text}>{children}</blockquote>
      </Reveal>
      {attribution && (
        <Reveal delay={200}>
          <figcaption className={styles.attribution}>— {attribution}</figcaption>
        </Reveal>
      )}
    </figure>
  );
}
