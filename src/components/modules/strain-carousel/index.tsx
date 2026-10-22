"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import styles from "./styles.module.scss";
import strainsData from "@/lib/strains.json";
import StrainCard from "@/components/ui/strain-card";
import Button from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import type { Strain } from "@/types";

const strains = strainsData as Strain[];

export default function StrainCarousel() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [snapCount, setSnapCount] = useState(0);
  const [activeSnap, setActiveSnap] = useState(0);

  // Mirror the Swiper state that drives the arrows and dots. React skips
  // re-renders when the values are unchanged, so this is cheap to call often.
  const sync = (s: SwiperType) => {
    setIsBeginning(s.isBeginning);
    setIsEnd(s.isEnd);
    setSnapCount(s.snapGrid.length);
    setActiveSnap(s.snapIndex);
  };

  return (
    <Reveal className={styles.carousel}>
      <div className={styles.swiperWrapper}>
        <button
          type="button"
          className={styles.navPrev}
          aria-label="Previous strains"
          disabled={isBeginning}
          onClick={() => swiper?.slidePrev()}
        >
          ‹
        </button>

        <Swiper
          spaceBetween={20}
          slidesPerView={1.5}
          slidesPerGroup={1}
          breakpoints={{
            520: {
              slidesPerView: 2.5,
              slidesPerGroup: 1,
              spaceBetween: 24,
            },
            // The gap is a few pixels wider than the slider's 40px side padding
            // (see styles). The padding gives the hover shadow room; the extra
            // gap keeps neighbouring cards past the clip edge even when slide
            // positions land on fractional pixels and round the wrong way.
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 48,
            },
          }}
          onSwiper={(s) => {
            setSwiper(s);
            sync(s);
          }}
          onProgress={sync}
          onSnapIndexChange={sync}
          onSnapGridLengthChange={sync}
          className={styles.swiperContainer}
          style={{ overflow: "hidden" }}
        >
          {strains.map((strain, id) => (
            <SwiperSlide key={id}>
              <StrainCard strain={strain} className={styles.card} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          className={styles.navNext}
          aria-label="Next strains"
          disabled={isEnd}
          onClick={() => swiper?.slideNext()}
        >
          ›
        </button>
      </div>

      <div className={styles.footer}>
        {/* Dot pagination: mobile only (arrows take over from tablet up) */}
        {snapCount > 1 && (
          <div className={styles.pagination}>
            {Array.from({ length: snapCount }, (_, i) => (
              <button
                key={i}
                type="button"
                className={`${styles.bullet} ${i === activeSnap ? styles.bulletActive : ""}`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === activeSnap ? "true" : undefined}
                onClick={() =>
                  swiper?.slideTo(i * (swiper.params.slidesPerGroup ?? 1))
                }
              />
            ))}
          </div>
        )}

        <div className={styles.viewAll}>
          <Button href="/strains" variant="outline" size="lg" className={styles.viewAllButton}>
            View All Strains
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
