'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
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

  return (
    <div className={styles.carousel}>
      <Swiper
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
