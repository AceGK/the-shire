'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import { Pagination, EffectFlip, Controller } from 'swiper/modules';
import { useState } from 'react';
import styles from './styles.module.scss';

export default function Provenance() {
  const blurbs = [
    {
      image: '/images/hobbit-house.jpg',
      alt: 'The Shire',
      title: 'The Shire',
      content:
        '...',
    },
    {
      image: '/images/hobbit-farm.jpg',
      alt: 'The Shire',
      title: '...',
      content:
        "...",
    },
    {
      image: '/images/tradition.jpg',
      alt: 'The Shire',
      title: 'Tradition',
      content:
        "Continuing the legacy of 'Old Toby' Hornblower's pioneering spirit in Longbottom, our farm upholds the deep-rooted traditions of cultivating the finest Southfarthing pipe-weed.",
    },
  ];

  const [controlledSwiper1, setControlledSwiper1] = useState(null);
  const [controlledSwiper2, setControlledSwiper2] = useState(null);

  return (
    <div className="content-grid">
      <div className={styles.about}>

          {/* Image Swiper */}
          <Swiper
            modules={[EffectFlip, Controller]}
            effect="flip"
            grabCursor={true}
            loop={true}
            onSwiper={setControlledSwiper1}
            controller={{ control: controlledSwiper2 }}
            className={styles.imageSwiper}
          >
            {blurbs.map((blurb, index) => (
              <SwiperSlide key={index} className={styles.imageSlide}>
                <div className={styles.imageContainer}>
                  <img src={blurb.image} alt={blurb.alt} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Text Swiper */}
          <Swiper
            modules={[Pagination, Controller]}
            pagination={{ clickable: true }}
            grabCursor={true}
            loop={true}
            onSwiper={setControlledSwiper2}
            controller={{ control: controlledSwiper1 }} 
            className={styles.textSwiper}
          >
            {blurbs.map((blurb, index) => (
              <SwiperSlide key={index}>
                <div className={styles.textSlide}>
                  <h2>{blurb.title}</h2>
                  <p>{blurb.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
   
      </div>
    </div>
  );
}
