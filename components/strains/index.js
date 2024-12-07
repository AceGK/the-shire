"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import styles from "./styles.module.scss";

export default function Strains() {
  const strains = [
    {
      name: "Old Toby",
      type: "indica",
      lineage: "Hornblower Diesel x Bree Dream",
      description:
        "The finest weed in the Southfarthing. Old Toby is a legendary strain known for its smooth, rich flavor and calming effects. It's perfect for a relaxing evening under the stars or a peaceful afternoon by the river.",
    },
    {
      name: "Longbottom Leaf",
      type: "sativa",
      lineage: "Southfarthing OG x Second Breakfast",
      description:
        "The rare and valuable leaf from Longbottom. Longbottom Leaf is a strain celebrated for its uplifting and energizing qualities. Ideal for creative endeavors or social gatherings.",
    },
    {
      name: "Southern Star",
      "type": "hybrid",
      lineage: "Kingsfoil Kush x Sweet Galenas",
      description: "Southern Star is a harmonious blend that mirrors the beauty and allure of the Southlands. It's celebrated for its balanced effects, offering a burst of creativity and a gentle relaxation."
    },
    {
      name: "Bag End Blend",
      type: "sativa",
      lineage: "Hobbiton Haze x Bilbo's Bud",
      description:
        "Bag End Blend is a tribute to adventurous spirits of the Shire, offering a soothing yet uplifting experience. This strain is perfect for those seeking a peaceful retreat into their thoughts or going on an adventure.",
    },
    {
      name: "Tookies",
      type: "indica",
      lineage: "Tuckborough Tangie x Belladonna Cookies",
      description:
        "Tookies encapsulates the essence of a Hobbit's day, from elevenses to supper, with its sweet aroma and earthy undertones. This strain promises deep relaxation, evoking the serene tranquility of a leisurely afternoon in the Shire.",
    },
    {
      name: "Brandybuck Blend",
      type: "hybrid",
      lineage: "Brandywine Cheese x Buckland Biscotti",
      description: "A unique mix honoring the adventurous spirit of the Brandybuck family, this blend is known for its balanced effects, offering a perfect harmony of relaxation and gentle stimulation."
    },
    {
      name: "Green Dragon",
      type: "hybrid",
      lineage: "Bywater Kush x Smaug's Fire",
      description: "Named after the famous inn, the Green Dragon strain is for those seeking a truly potent experience. It promises a powerful, euphoric journey, much like a night spent in the bustling hobbit pub."
    },
    {
      name: "Mirkwood Mist",
      type: "hybrid",
      lineage: "Mirkwood Haze x Misty Moutain Gold",
      description: "Evoking the mysterious essence of the Mirkwood forest, this strain is known for its deep, earthy aroma and its ability to heighten the senses, perfect for introspective evenings or exploring the outdoors."
    },
    {
      name: "Gardner’s Gift",
      type: "sativa",
      lineage: "Sam's Sage x Lembas Bread",
      description: "Gardner’s Gift, named in honor of Samwise Gamgee's gardening prowess. It is revered for its energizing effects and a flavor that hints at fresh earth and a touch of sweetness. Ideal for outdoor activities or tackling tasks with a renewed sense of vigor and focus."
    },
    {
      name: "Precious OG",
      type: "hybrid",
      lineage: "Gollum Grape x Smeagol Skunk",
      description: "Precious OG is as captivating as the One Ring itself. This hybrid strain is known for its deeply relaxing effects, enveloping the senses much like the depths of the Misty Mountains. Its rich and fruit aroma offers a uniquely profound experience, guiding users to a state of serene introspection and repose."
    },
    {
      name: "Fellowship Fire",
      type: "sativa",
      lineage: "Rivendell Runtz x Bud Of Lórien",
      description: ""
    },
    {
      name: "White Wizard",
      type: "hybrid",
      lineage: "Greendalf x Durin's Bud",
      description: ""
    },
  ];

  return (
    <div className={styles.header}>
      <h2>Our Strains</h2>
      <p>
        From the comforting &apos;Old Toby&apos; to the adventurous
        &apos;Bag End Blend&apos;, each of our strains pays homage to the
        enchanting landscapes of Middle-Earth. You
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
