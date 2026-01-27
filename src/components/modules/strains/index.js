"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import styles from "./styles.module.scss";
import strains from "@/lib/strains.json";

export default function Strains() {
  return (
    <div className={styles.header}>
      <h2>Our Strains</h2>
      <p>
        Each of our strains pays homage to the
        enchanting world of Middle-Earth. You
        don&apos;t need to go to Mordor and back to find such fine pipeweed.
      </p>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        slidesPerGroup={3}
        navigation
        className={styles.swiperContainer}
        style={{ overflow: "hidden" }}
      >
        {strains.map((strain, id) => (
          <SwiperSlide key={id} className={styles.card}>
          <img src="/images/nug.png" alt={`${strain.name} nug`} />
          <p>{strain.description}</p> {/* Overlay description */}
          <span className={styles.name}>{strain.name}</span>
          <span className={`${styles.strain} ${styles[strain.type]}`}>
            {strain.type}
          </span>
          <span className={styles.lineage}>{strain.lineage}</span>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
