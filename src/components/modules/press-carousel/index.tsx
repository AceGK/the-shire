'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import Image from 'next/image';
import styles from './styles.module.scss';
import logos from '@/lib/press.json';

interface PressItem {
  name: string;
  logo: string;
  url: string;
}

export default function PressCarousel() {
  const pressLogos = logos as PressItem[];
  const swiperRef = useRef<SwiperType | null>(null);

  const handleMouseEnter = () => {
    swiperRef.current?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current?.autoplay?.start();
  };

  return (
    <div
      className={styles.carousel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay, FreeMode]}
        spaceBetween={48}
        slidesPerView="auto"
        loop={true}
        grabCursor={true}
        allowTouchMove={true}
        freeMode={{
          enabled: true,
          momentum: true,
          momentumRatio: 0.5,
        }}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, 
        }}
        breakpoints={{
          768: {
            spaceBetween: 64,
          },
          1024: {
            spaceBetween: 80,
          },
        }}
        className={styles.swiper}
      >
        {pressLogos.map((item, id) => (
          <SwiperSlide key={id} className={styles.slide}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={styles.item}
              title={item.name}
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={160}
                height={70}
                className={styles.logo}
                unoptimized
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
