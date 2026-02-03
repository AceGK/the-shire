"use client";

import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./styles.module.scss";
import type { Location } from "@/types";

// Middle Earth map image
const MAP_IMAGE = "/images/middle-earth-map.jpg";

// Image bounds matching the original map dimensions
// Format: [[south, west], [north, east]]
const IMAGE_BOUNDS: L.LatLngBoundsExpression = [[0, 0], [4334, 5000]];

interface MiddleEarthMapProps {
  locations: Location[];
}

export interface MiddleEarthMapRef {
  selectLocation: (index: number) => void;
}

const MiddleEarthMap = forwardRef<MiddleEarthMapRef, MiddleEarthMapProps>(function MiddleEarthMap({ locations }, ref) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  // Expose selectLocation method to parent
  useImperativeHandle(ref, () => ({
    selectLocation: (index: number) => {
      const marker = markersRef.current[index];
      const map = mapInstanceRef.current;
      if (marker && map) {
        const coords = locations[index].coords;
        // Close any open popups first
        map.closePopup();
        // Fly to the location with animation, then open popup
        map.flyTo(coords, 1, {
          animate: true,
          duration: 0.8,
        });
        // Open popup after animation completes
        setTimeout(() => {
          marker.openPopup();
        }, 800);
      }
    },
  }));

  useEffect(() => {
    if (mapInstanceRef.current) return; // Already initialized
    if (!mapRef.current) return;

    // Create map with simple CRS (for non-geographic images)
    const map = L.map(mapRef.current, {
      crs: L.CRS.Simple,
      minZoom: -2,
      maxZoom: 2,
      zoomControl: true,
      attributionControl: false,
      maxBounds: IMAGE_BOUNDS,
      maxBoundsViscosity: 1.0,
      scrollWheelZoom: false,
      doubleClickZoom: false,
    });

    // Add the Middle Earth map image as an overlay
    const imageOverlay = L.imageOverlay(MAP_IMAGE, IMAGE_BOUNDS, {
      opacity: 1,
      interactive: false,
    });
    imageOverlay.addTo(map);

    // Fit the map to show the entire image, then zoom to show The Shire region
    map.fitBounds(IMAGE_BOUNDS);

    // Center on The Shire area initially
    map.setView([2800, 1800], -1);

    // Custom marker icon
    const markerIcon = L.divIcon({
      className: styles.customMarker,
      html: `<div class="${styles.markerInner}"></div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });

    // Add markers for each location
    markersRef.current = locations.map((location) => {
      const marker = L.marker(location.coords, { icon: markerIcon });

      // Create popup content
      const popupContent = `
        <div class="${styles.popup}">
          <strong>${location.name}</strong>
          <span>${location.region}</span>
        </div>
      `;

      marker.bindPopup(popupContent, {
        className: styles.customPopup,
        closeButton: false,
      });

      marker.addTo(map);
      return marker;
    });

    mapInstanceRef.current = map;

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        markersRef.current = [];
      }
    };
  }, [locations]);

  return <div ref={mapRef} className={styles.map} />;
});

export default MiddleEarthMap;
