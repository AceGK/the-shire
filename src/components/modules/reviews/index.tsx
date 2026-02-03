'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './styles.module.scss';
import reviews from '@/lib/reviews.json';

export default function Reviews() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div className={styles.reviews}>
      <div className={styles.swiperWrapper}>
        <button
          className={styles.navPrev}
          aria-label="Previous slide"
          onClick={() => swiperInstance?.slidePrev()}
        >
          ‹
        </button>
        <Swiper
          modules={[Pagination]}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={setSwiperInstance}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className={styles.swiper}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.card}>
                <h3>{review.name}</h3>
                <div className={styles.stars}>★★★★★</div>
                <div className={styles.reviewText}>{review.review}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={styles.navNext}
          aria-label="Next slide"
          onClick={() => swiperInstance?.slideNext()}
        >
          ›
        </button>
      </div>
    </div>
  );
}
