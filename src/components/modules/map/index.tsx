"use client";

import { useRef, useState, UIEvent } from "react";
import dynamic from "next/dynamic";
import styles from "./styles.module.scss";
import locationsData from "@/lib/retailers.json";
import type { Location } from "@/types";

type MapVariant = 'dark' | 'light';

const locations = locationsData as Location[];

interface MiddleEarthMapRef {
  selectLocation: (index: number) => void;
}

// Dynamically import the map to avoid SSR issues with Leaflet
const MiddleEarthMap = dynamic(() => import("./MiddleEarthMap"), {
  ssr: false,
  loading: () => (
    <div className={styles.mapLoading}>
      <span>Loading map of Middle-earth...</span>
    </div>
  ),
});

interface MapProps {
  variant?: MapVariant;
}

export default function Map({ variant = "dark" }: MapProps) {
  const mapRef = useRef<MiddleEarthMapRef>(null);
  const [scrollState, setScrollState] = useState({
    atTop: true,
    atBottom: false,
  });

  const handleScroll = (e: UIEvent<HTMLUListElement>) => {
    const target = e.target as HTMLUListElement;
    const { scrollTop, scrollHeight, clientHeight } = target;
    setScrollState({
      atTop: scrollTop <= 10,
      atBottom: scrollTop + clientHeight >= scrollHeight - 10,
    });
  };

  const handleLocationClick = (index: number) => {
    if (mapRef.current?.selectLocation) {
      mapRef.current.selectLocation(index);
    }
  };

  return (
    <div className={`${styles.mapSection} ${variant === "light" ? styles.light : ""}`}>
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
