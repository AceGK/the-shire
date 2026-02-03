'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import { Pagination, EffectFlip, Controller } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useState } from 'react';
import styles from './styles.module.scss';

interface Blurb {
  image: string;
  alt: string;
  title: string;
  content: string;
}

const blurbs: Blurb[] = [
  {
    image: '/images/the-shire.jpg',
    alt: 'The Shire',
    title: 'The Shire',
    content:
      'Nestled in the rolling green hills of the Southfarthing, our family farm has been cultivating the finest pipe-weed since the days of the Old Took. Here, where the soil is rich and the pace of life is slow, we grow each plant with the patience and care only a Hobbit knows.',
  },
  {
    image: '/images/hobbit-house-4.jpg',
    alt: 'Cultivation',
    title: 'Cultivation',
    content:
      "Every leaf is tended by hand, from seed to harvest. We don't rush the growing season or cut corners—our methods are as unhurried as a second breakfast, ensuring each strain reaches its full potential.",
  },
  {
    image: '/images/tradition.jpg',
    alt: 'Tradition',
    title: 'Tradition',
    content:
      "Continuing the legacy of 'Old Toby' Hornblower's pioneering spirit in Longbottom, our farm upholds the deep-rooted traditions of cultivating the finest Southfarthing pipe-weed.",
  },
];

export default function Provenance() {
  const [controlledSwiper1, setControlledSwiper1] = useState<SwiperType | null>(null);
  const [controlledSwiper2, setControlledSwiper2] = useState<SwiperType | null>(null);

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
