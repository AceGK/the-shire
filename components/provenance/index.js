'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, EffectFlip, Controller } from 'swiper/modules';
import { useState } from 'react';
import styles from './styles.module.scss';

export default function Provenance() {
  const blurbs = [
    {
      image: '/images/hobbit-house.jpg',
      alt: 'The Shire',
      title: 'Quality',
      content:
        "Quality for us is as essential as a hearty meal. Each leaf and bud is thoroughly inspected with care to ensure our strains are as pure and wholesome as a Hobbit's pantry.",
    },
    {
      image: '/images/hobbit-farm-2.jpg',
      alt: 'The Shire',
      title: 'Organic',
      content:
        'Our organic practices ensure that our strains are as natural as the rolling hills of the Shire. We use no pesticides, chemicals, or magic to grow our plants.',
    },
    {
      image: '/images/hobbit-farm.jpg',
      alt: 'The Shire',
      title: 'Sustainable',
      content:
        "Inspired by the lush greenery of the Shire, our farm is a bastion of sustainable practices. We ensure that our footprint is as light as a Hobbit's.",
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
      <div className={styles.provenanceSlider}>
        <div className={styles.swipersContainer}>
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
                <div className={styles.content}>
                  <h2>{blurb.title}</h2>
                  <p>{blurb.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
