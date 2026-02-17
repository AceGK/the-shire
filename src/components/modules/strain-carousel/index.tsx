"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper/modules";
import styles from "./styles.module.scss";
import strainsData from "@/lib/strains.json";
import StrainCard from "@/components/ui/strain-card";
import Button from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import type { Strain } from "@/types";

const strains = strainsData as Strain[];

export default function StrainCarousel() {
  return (
    <Reveal>
      <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={20}
        slidesPerView={1.5}
        slidesPerGroup={1}
        navigation
        scrollbar={{ draggable: true }}
        breakpoints={{
          520: {
            slidesPerView: 2.5,
            slidesPerGroup: 1,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 2.98,
            slidesPerGroup: 3,
            spaceBetween: 30,
          },
        }}
        className={styles.swiperContainer}
        style={{ overflow: "hidden" }}
      >
        {strains.map((strain, id) => (
          <SwiperSlide key={id}>
            <Reveal delay={id < 3 ? id * 100 : 0}>
              <StrainCard strain={strain} />
            </Reveal>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.viewAll}>
        <Button href="/strains" variant="outline" size="lg">View All Strains</Button>
      </div>
    </Reveal>
  );
}
