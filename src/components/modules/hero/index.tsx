"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/ui/button";
import styles from "./styles.module.scss";
import Reveal from "@/components/ui/reveal";

interface HeroProps {
  id?: string;
}

export default function Hero({ id }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !bgRef.current) return;

      const heroRect = heroRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, -heroRect.top / heroRect.height);

      // Scale from 1 to 1.15 as user scrolls through the hero
      const scale = 1 + Math.min(scrollProgress, 1) * 0.15;
      bgRef.current.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`${styles.hero} full-width`} id={id} ref={heroRef}>
      {/* Background layers */}
      <div className={styles.backgroundImage} ref={bgRef}></div>
      <div className={styles.gradientOverlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <Reveal delay={200}>
          <h1 className={styles.title}>
            The Shire <span>Supply Company</span>
          </h1>
        </Reveal>
        <Reveal delay={400}>
          <span className={styles.tagline}>
            The finest pipe-weed in the Southfarthing, cultivated with care from the rolling hills of the Shire.
          </span>
        </Reveal>
        <Reveal delay={600}>
          <div className={styles.ctaGroup}>
            <Button href="#strains" variant="shimmer" size="lg">
              Explore Strains
            </Button>
            <Button href="#about" variant="outlineLight" size="lg">
              Our Story
            </Button>
          </div>
        </Reveal>
      </div>

      
      {/* Scroll indicator */}
      <Reveal delay={800} className={styles.scrollReveal}>
        <a
          className={styles.scrollIndicator}
          href="#about"
          aria-label="Scroll to about section"
        >
          <span>Scroll</span>
          <div className={styles.scrollLine}></div>
        </a>
      </Reveal>
    </section>
  );
}
