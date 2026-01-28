"use client";

import { useRef, useState } from "react";
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

export default function Map({ variant = "dark" }) {
  const mapRef = useRef(null);
  const [scrollState, setScrollState] = useState({
    atTop: true,
    atBottom: false,
  });

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    setScrollState({
      atTop: scrollTop <= 10,
      atBottom: scrollTop + clientHeight >= scrollHeight - 10,
    });
  };

  const handleLocationClick = (index) => {
    if (mapRef.current?.selectLocation) {
      mapRef.current.selectLocation(index);
    }
  };

  return (
    <div className={`${styles.mapSection} ${variant === "light" ? styles.light : ""}`}>
      <div className={styles.header}>
        <h2>Where to Buy</h2>
        <p>
          Find our premium Southfarthing leaf at these fine establishments. You don't need to go to Mordor and back to find such fine pipeweed.
        </p>
      </div>
      <div className={styles.layout}>
        <div className={styles.mapContainer}>
          <MiddleEarthMap ref={mapRef} locations={locations} />
        </div>
        <div
            className={`${styles.locationList} ${scrollState.atTop ? styles.atTop : ""} ${scrollState.atBottom ? styles.atBottom : ""}`}
          >
          <h3>Our Retailers</h3>
          <ul onScroll={handleScroll}>
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
