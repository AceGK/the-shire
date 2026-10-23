"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./styles.module.scss";
import ChevronDownIcon from "@/assets/icons/chevron-down.svg";
import locationsData from "@/lib/retailers.json";
import { prefersReducedMotion } from "@/lib/reducedMotion";
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
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({
    atTop: true,
    atBottom: false,
  });

  const listRef = useRef<HTMLUListElement>(null);

  // Drives the edge fades and the "More retailers" cue. A list that fits without
  // scrolling counts as both at the top and at the bottom, so neither shows.
  const updateScrollState = useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    const { scrollTop, scrollHeight, clientHeight } = list;
    const atTop = scrollTop <= 10;
    const atBottom = scrollTop + clientHeight >= scrollHeight - 10;
    setScrollState((prev) =>
      prev.atTop === atTop && prev.atBottom === atBottom ? prev : { atTop, atBottom }
    );
  }, []);

  // Measure on mount and whenever the list resizes (breakpoints, the retailers dialog).
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    updateScrollState();
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(list);
    return () => observer.disconnect();
  }, [updateScrollState]);

  const scrollListDown = () => {
    const list = listRef.current;
    if (!list) return;
    list.scrollBy({
      top: list.clientHeight * 0.7,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  const handleLocationClick = (index: number) => {
    if (mapRef.current?.selectLocation) {
      mapRef.current.selectLocation(index);
    }
    revealMap();
  };

  // On mobile the list sits below the map, so a tapped retailer could fly into
  // view off screen. Scroll back up to the map when its top has scrolled out of
  // view (or the whole map is off screen). A map that is only clipped at the
  // bottom, as on desktop where the list sits beside it, is left alone. Its
  // scroll-margin (see styles) keeps it clear of the fixed header, and inside the
  // retailers dialog scrollIntoView scrolls the dialog rather than the page.
  const revealMap = () => {
    const container = mapContainerRef.current;
    if (!container) return;

    const dialog = container.closest("dialog");
    const topLimit = dialog
      ? dialog.getBoundingClientRect().top
      : parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-offset")) || 0;
    const bottomLimit = dialog ? dialog.getBoundingClientRect().bottom : window.innerHeight;
    const rect = container.getBoundingClientRect();

    if (rect.top < topLimit || rect.top >= bottomLimit) {
      container.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className={`${styles.mapSection} ${variant === "light" ? styles.light : ""}`}>
      <div className={styles.layout}>
        <div ref={mapContainerRef} className={styles.mapContainer}>
          <MiddleEarthMap ref={mapRef} locations={locations} />
        </div>
        <div
            className={`${styles.locationList} ${scrollState.atTop ? styles.atTop : ""} ${scrollState.atBottom ? styles.atBottom : ""}`}
          >
          <h3>Our Retailers</h3>
          <ul ref={listRef} onScroll={updateScrollState}>
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
          {/* Visual cue only: every retailer is already reachable with Tab, so it stays out of the tab order. */}
          <button
            type="button"
            className={styles.moreCue}
            onClick={scrollListDown}
            data-hidden={scrollState.atBottom}
            aria-hidden="true"
            tabIndex={-1}
          >
            More retailers
            <ChevronDownIcon width={14} height={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
