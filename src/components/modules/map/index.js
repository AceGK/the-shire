"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import styles from "./styles.module.scss";
import locations from "@/lib/retailers.json";

// Dynamically import the map to avoid SSR issues with Leaflet
const MiddleEarthMap = dynamic(() => import("./MiddleEarthMap"), {
  ssr: false,
  loading: () => (
    <div className={styles.mapLoading}>
      <span>Loading map of Middle-earth...</span>
    </div>
  ),
});

export default function Map() {
  const mapRef = useRef(null);

  const handleLocationClick = (index) => {
    if (mapRef.current?.selectLocation) {
      mapRef.current.selectLocation(index);
    }
  };

  return (
    <div className={styles.mapSection}>
      <div className={styles.header}>
        <h2>Where to Buy</h2>
        <p>
          Find our premium Southfarthing leaf at these fine establishments
          throughout Middle-earth.
        </p>
      </div>
      <div className={styles.layout}>
        <div className={styles.mapContainer}>
          <MiddleEarthMap ref={mapRef} locations={locations} />
        </div>
        <div className={styles.locationList}>
          <h3>Our Retailers</h3>
          <ul>
            {locations.map((location, index) => (
              <li
                key={index}
                onClick={() => handleLocationClick(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleLocationClick(index);
                  }
                }}
              >
                <span className={styles.storeName}>{location.name}</span>
                <span className={styles.region}>{location.region}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
