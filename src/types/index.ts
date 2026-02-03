import type { ReactNode } from 'react';

// ===================
// Domain/Data Models
// ===================

// Strain types
export interface Strain {
  name: string;
  type: 'indica' | 'sativa' | 'hybrid';
  lineage: string;
  description?: string;
  image: string;
  cannabinoids?: {
    thc?: number;
    cbd?: number;
    cbg?: number;
    cbn?: number;
    thcv?: number;
  };
  terpenes?: string[];
  totalTerpenes?: string;
  effects?: string[];
}

// Retailer/Location types
export interface Location {
  name: string;
  region: string;
  coords: [number, number];
}

// Review types
export interface Review {
  name: string;
  review: string;
}

// Press/Logo types
export interface PressItem {
  name: string;
  logo: string;
  url: string;
}

// Partner types
export interface Partner {
  name: string;
  location: string;
}

// ===================
// Cannabis Data Types
// ===================

export interface Terpene {
  name: string;
  icon: ReactNode;
  color: string;
  description: string;
  effects: string[];
}

export interface Effect {
  name: string;
  icon: ReactNode;
  color: string;
  description: string;
}

export interface Cannabinoid {
  name: string;
  fullName: string;
  description: string;
}
