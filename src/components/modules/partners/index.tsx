"use client";

import styles from "./styles.module.scss";
import partners from "@/lib/partners.json";

interface Partner {
  name: string;
  location: string;
}

export default function Partners() {
  return (
    <div className={styles.partners}>
      <div className={styles.header}>
        <h2>Support Our Partners</h2>
        <p>
          Our finest Southfarthing leaf is available through these trusted
          establishments across Middle-earth.
        </p>
      </div>
      <ul className={styles.partnerList}>
        {(partners as Partner[]).map((partner, index) => (
          <li key={index} className={styles.partnerCard}>
            <span className={styles.name}>{partner.name}</span>
            <span className={styles.location}>{partner.location}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
