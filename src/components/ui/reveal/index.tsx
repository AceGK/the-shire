"use client";

import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

// Scroll-triggered fade-up animations. Set to true to turn them back on.
// While false, every <Reveal> still renders its wrapper and className (so layouts
// are unchanged) but content shows immediately with no fade, slide or delay.
const REVEAL_ANIMATIONS_ENABLED = false;

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
  stagger?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
  stagger = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!REVEAL_ANIMATIONS_ENABLED) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!REVEAL_ANIMATIONS_ENABLED) {
    return <Tag className={className || undefined}>{children}</Tag>;
  }

  const classes = [
    styles.reveal,
    stagger && styles.stagger,
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={classes}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
