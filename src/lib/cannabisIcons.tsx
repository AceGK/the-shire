import type { ReactNode } from 'react';

interface TerpeneData {
  name: string;
  icon: ReactNode;
  color: string;
  description: string;
  effects: string[];
}

interface EffectData {
  name: string;
  icon: ReactNode;
  color: string;
  description: string;
}

interface CannabinoidData {
  name: string;
  fullName: string;
  description: string;
}

// Terpene definitions with icons and descriptions
export const terpenes: Record<string, TerpeneData> = {
  myrcene: {
    name: 'Myrcene',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6C12 6 8 10 8 14C8 16 10 18 12 18C14 18 16 16 16 14C16 10 12 6 12 6Z" fill="currentColor" opacity="0.6"/>
        <path d="M12 8C12 8 10 11 10 13C10 14.5 11 15.5 12 15.5C13 15.5 14 14.5 14 13C14 11 12 8 12 8Z" fill="currentColor"/>
      </svg>
    ),
    color: '#8B4513',
    description: 'Earthy, musky aroma. Found in mangoes and hops.',
    effects: ['Relaxing', 'Sedating', 'Pain relief']
  },
  limonene: {
    name: 'Limonene',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.3"/>
        <path d="M12 6L13.5 10H10.5L12 6Z" fill="currentColor"/>
        <path d="M18 12L14 13.5V10.5L18 12Z" fill="currentColor"/>
        <path d="M12 18L10.5 14H13.5L12 18Z" fill="currentColor"/>
        <path d="M6 12L10 10.5V13.5L6 12Z" fill="currentColor"/>
      </svg>
    ),
    color: '#FFD700',
    description: 'Citrusy, fresh aroma. Found in citrus fruits.',
    effects: ['Uplifting', 'Stress relief', 'Mood enhancement']
  },
  caryophyllene: {
    name: 'Caryophyllene',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 4L14 8L18 8L15 11L16 15L12 13L8 15L9 11L6 8L10 8L12 4Z" fill="currentColor" opacity="0.7"/>
      </svg>
    ),
    color: '#8B0000',
    description: 'Spicy, peppery aroma. Found in black pepper and cloves.',
    effects: ['Anti-inflammatory', 'Pain relief', 'Relaxing']
  },
  pinene: {
    name: 'Pinene',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 4L16 12L14 12L16 18H8L10 12L8 12L12 4Z" fill="currentColor" opacity="0.7"/>
      </svg>
    ),
    color: '#228B22',
    description: 'Fresh pine aroma. Found in pine needles and rosemary.',
    effects: ['Alertness', 'Memory retention', 'Focus']
  },
  linalool: {
    name: 'Linalool',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
        <circle cx="12" cy="6" r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="17" cy="9.5" r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="15.5" cy="16" r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="8.5" cy="16" r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="7" cy="9.5" r="2" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
    color: '#9370DB',
    description: 'Floral, lavender aroma. Found in lavender and mint.',
    effects: ['Calming', 'Anxiety relief', 'Sedating']
  },
  humulene: {
    name: 'Humulene',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="12" cy="10" rx="5" ry="3" fill="currentColor" opacity="0.5"/>
        <ellipse cx="12" cy="14" rx="4" ry="2.5" fill="currentColor" opacity="0.7"/>
        <ellipse cx="12" cy="17" rx="3" ry="2" fill="currentColor"/>
      </svg>
    ),
    color: '#DAA520',
    description: 'Hoppy, earthy aroma. Found in hops and coriander.',
    effects: ['Anti-inflammatory', 'Appetite suppressant', 'Pain relief']
  },
  terpinolene: {
    name: 'Terpinolene',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6C14 6 16 7 17 9C18 11 18 13 17 15C16 17 14 18 12 18C10 18 8 17 7 15C6 13 6 11 7 9C8 7 10 6 12 6Z" fill="currentColor" opacity="0.3"/>
        <path d="M12 8L14 11L12 10L10 11L12 8Z" fill="currentColor"/>
        <path d="M12 16L10 13L12 14L14 13L12 16Z" fill="currentColor"/>
      </svg>
    ),
    color: '#FF69B4',
    description: 'Fruity, floral aroma. Found in apples and cumin.',
    effects: ['Uplifting', 'Creative', 'Antioxidant']
  },
  ocimene: {
    name: 'Ocimene',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 16C8 16 9 12 12 10C15 8 18 8 18 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
        <path d="M6 14C6 14 8 11 12 9C16 7 19 7 19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: '#98FB98',
    description: 'Sweet, herbal aroma. Found in mint and orchids.',
    effects: ['Uplifting', 'Energetic', 'Decongestant']
  },
  bisabolol: {
    name: 'Bisabolol',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.3"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
    color: '#E6E6FA',
    description: 'Sweet, floral aroma. Found in chamomile.',
    effects: ['Soothing', 'Anti-inflammatory', 'Healing']
  }
};

// Effect definitions with icons
export const effects: Record<string, EffectData> = {
  euphoric: {
    name: 'Euphoric',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="9" cy="10" r="1.5" fill="currentColor"/>
        <circle cx="15" cy="10" r="1.5" fill="currentColor"/>
        <path d="M8 14C8 14 9.5 17 12 17C14.5 17 16 14 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 4L13 6H11L12 4Z" fill="currentColor"/>
      </svg>
    ),
    color: '#FFD700',
    description: 'Intense feelings of happiness and well-being'
  },
  relaxing: {
    name: 'Relaxing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 12C7 12 9 14 12 14C15 14 17 12 17 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 9L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 9L14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: '#87CEEB',
    description: 'Calming body and mind relaxation'
  },
  creative: {
    name: 'Creative',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6V8M12 16V18M6 12H8M16 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8.5 8.5L10 10M14 14L15.5 15.5M15.5 8.5L14 10M10 14L8.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
    color: '#FF69B4',
    description: 'Enhanced creativity and artistic thinking'
  },
  energetic: {
    name: 'Energetic',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M13 6L10 12H14L11 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#FFA500',
    description: 'Increased energy and motivation'
  },
  focused: {
    name: 'Focused',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
    color: '#4169E1',
    description: 'Improved concentration and mental clarity'
  },
  happy: {
    name: 'Happy',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="9" cy="10" r="1.5" fill="currentColor"/>
        <circle cx="15" cy="10" r="1.5" fill="currentColor"/>
        <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: '#FFD700',
    description: 'Elevated mood and positive feelings'
  },
  uplifted: {
    name: 'Uplifted',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 16V8M12 8L8 12M12 8L16 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#98FB98',
    description: 'Elevated spirits and positive outlook'
  },
  sleepy: {
    name: 'Sleepy',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 11H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 11H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 15H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 6L17 5L18 6L19 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    color: '#9370DB',
    description: 'Promotes restful sleep and drowsiness'
  },
  calm: {
    name: 'Calm',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 12C6 12 8 10 12 10C16 10 18 12 18 12C18 12 16 14 12 14C8 14 6 12 6 12Z" fill="currentColor" opacity="0.3"/>
        <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: '#B0E0E6',
    description: 'Peaceful mental state and tranquility'
  },
  social: {
    name: 'Social',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="9" cy="10" r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="15" cy="10" r="2" fill="currentColor" opacity="0.6"/>
        <path d="M9 15C9 15 10 16 12 16C14 16 15 15 15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: '#FF6347',
    description: 'Enhanced sociability and conversation'
  },
  hungry: {
    name: 'Hungry',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="12" cy="13" rx="5" ry="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 12V14M12 11V14M15 12V14" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    color: '#FFA07A',
    description: 'Increased appetite and food appreciation'
  },
  talkative: {
    name: 'Talkative',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 10H16M8 14H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="14" r="1" fill="currentColor"/>
      </svg>
    ),
    color: '#20B2AA',
    description: 'Increased desire to communicate'
  },
  giggly: {
    name: 'Giggly',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 10C8 10 8.5 9 9 9C9.5 9 10 10 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 10C14 10 14.5 9 15 9C15.5 9 16 10 16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 14C8 14 9 17 12 17C15 17 16 14 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: '#FFB6C1',
    description: 'Prone to laughter and amusement'
  },
  aroused: {
    name: 'Aroused',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7C12 7 7 10 7 14C7 16.5 9 18 12 18C15 18 17 16.5 17 14C17 10 12 7 12 7Z" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
    color: '#DC143C',
    description: 'Heightened sensory awareness'
  }
};

// Cannabinoid definitions
export const cannabinoids: Record<string, CannabinoidData> = {
  thc: {
    name: 'THC',
    fullName: 'Delta-9-Tetrahydrocannabinol',
    description: 'Primary psychoactive compound'
  },
  cbd: {
    name: 'CBD',
    fullName: 'Cannabidiol',
    description: 'Non-psychoactive, therapeutic benefits'
  },
  cbg: {
    name: 'CBG',
    fullName: 'Cannabigerol',
    description: 'The parent cannabinoid'
  },
  cbn: {
    name: 'CBN',
    fullName: 'Cannabinol',
    description: 'Mildly psychoactive, promotes sleep'
  },
  thcv: {
    name: 'THCV',
    fullName: 'Tetrahydrocannabivarin',
    description: 'Energetic, appetite suppressant'
  }
};

// Helper function to get terpene by key
export function getTerpene(key: string): TerpeneData | null {
  return terpenes[key.toLowerCase()] || null;
}

// Helper function to get effect by key
export function getEffect(key: string): EffectData | null {
  return effects[key.toLowerCase()] || null;
}

// Helper function to get cannabinoid by key
export function getCannabinoid(key: string): CannabinoidData | null {
  return cannabinoids[key.toLowerCase()] || null;
}
