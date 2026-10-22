import type { ReactNode } from 'react';

// Phosphor duotone icons (MIT), saved as local SVGs. See src/assets/icons/LICENSE-phosphor.txt.
import MyrceneIcon from '@/assets/icons/terpenes/myrcene.svg';
import LimoneneIcon from '@/assets/icons/terpenes/limonene.svg';
import CaryophylleneIcon from '@/assets/icons/terpenes/caryophyllene.svg';
import PineneIcon from '@/assets/icons/terpenes/pinene.svg';
import LinaloolIcon from '@/assets/icons/terpenes/linalool.svg';
import HumuleneIcon from '@/assets/icons/terpenes/humulene.svg';
import TerpinoleneIcon from '@/assets/icons/terpenes/terpinolene.svg';
import OcimeneIcon from '@/assets/icons/terpenes/ocimene.svg';
import BisabololIcon from '@/assets/icons/terpenes/bisabolol.svg';

import EuphoricIcon from '@/assets/icons/effects/euphoric.svg';
import RelaxingIcon from '@/assets/icons/effects/relaxing.svg';
import CreativeIcon from '@/assets/icons/effects/creative.svg';
import EnergeticIcon from '@/assets/icons/effects/energetic.svg';
import FocusedIcon from '@/assets/icons/effects/focused.svg';
import HappyIcon from '@/assets/icons/effects/happy.svg';
import UpliftedIcon from '@/assets/icons/effects/uplifted.svg';
import SleepyIcon from '@/assets/icons/effects/sleepy.svg';
import CalmIcon from '@/assets/icons/effects/calm.svg';
import SocialIcon from '@/assets/icons/effects/social.svg';
import HungryIcon from '@/assets/icons/effects/hungry.svg';
import TalkativeIcon from '@/assets/icons/effects/talkative.svg';
import GigglyIcon from '@/assets/icons/effects/giggly.svg';
import ArousedIcon from '@/assets/icons/effects/aroused.svg';

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
    icon: <MyrceneIcon />,
    color: '#8B4513',
    description: 'Earthy, musky aroma. Found in mangoes and hops.',
    effects: ['Relaxing', 'Sedating', 'Pain relief']
  },
  limonene: {
    name: 'Limonene',
    icon: <LimoneneIcon />,
    color: '#FFD700',
    description: 'Citrusy, fresh aroma. Found in citrus fruits.',
    effects: ['Uplifting', 'Stress relief', 'Mood enhancement']
  },
  caryophyllene: {
    name: 'Caryophyllene',
    icon: <CaryophylleneIcon />,
    color: '#8B0000',
    description: 'Spicy, peppery aroma. Found in black pepper and cloves.',
    effects: ['Anti-inflammatory', 'Pain relief', 'Relaxing']
  },
  pinene: {
    name: 'Pinene',
    icon: <PineneIcon />,
    color: '#228B22',
    description: 'Fresh pine aroma. Found in pine needles and rosemary.',
    effects: ['Alertness', 'Memory retention', 'Focus']
  },
  linalool: {
    name: 'Linalool',
    icon: <LinaloolIcon />,
    color: '#9370DB',
    description: 'Floral, lavender aroma. Found in lavender and mint.',
    effects: ['Calming', 'Anxiety relief', 'Sedating']
  },
  humulene: {
    name: 'Humulene',
    icon: <HumuleneIcon />,
    color: '#DAA520',
    description: 'Hoppy, earthy aroma. Found in hops and coriander.',
    effects: ['Anti-inflammatory', 'Appetite suppressant', 'Pain relief']
  },
  terpinolene: {
    name: 'Terpinolene',
    icon: <TerpinoleneIcon />,
    color: '#FF69B4',
    description: 'Fruity, floral aroma. Found in apples and cumin.',
    effects: ['Uplifting', 'Creative', 'Antioxidant']
  },
  ocimene: {
    name: 'Ocimene',
    icon: <OcimeneIcon />,
    color: '#98FB98',
    description: 'Sweet, herbal aroma. Found in mint and orchids.',
    effects: ['Uplifting', 'Energetic', 'Decongestant']
  },
  bisabolol: {
    name: 'Bisabolol',
    icon: <BisabololIcon />,
    color: '#4A7FB5',
    description: 'Sweet, floral aroma. Found in chamomile.',
    effects: ['Soothing', 'Anti-inflammatory', 'Healing']
  }
};

// Effect definitions with icons
export const effects: Record<string, EffectData> = {
  euphoric: {
    name: 'Euphoric',
    icon: <EuphoricIcon />,
    color: '#FFD700',
    description: 'Intense feelings of happiness and well-being'
  },
  relaxing: {
    name: 'Relaxing',
    icon: <RelaxingIcon />,
    color: '#87CEEB',
    description: 'Calming body and mind relaxation'
  },
  creative: {
    name: 'Creative',
    icon: <CreativeIcon />,
    color: '#FF69B4',
    description: 'Enhanced creativity and artistic thinking'
  },
  energetic: {
    name: 'Energetic',
    icon: <EnergeticIcon />,
    color: '#FFA500',
    description: 'Increased energy and motivation'
  },
  focused: {
    name: 'Focused',
    icon: <FocusedIcon />,
    color: '#4169E1',
    description: 'Improved concentration and mental clarity'
  },
  happy: {
    name: 'Happy',
    icon: <HappyIcon />,
    color: '#FFD700',
    description: 'Elevated mood and positive feelings'
  },
  uplifted: {
    name: 'Uplifted',
    icon: <UpliftedIcon />,
    color: '#98FB98',
    description: 'Elevated spirits and positive outlook'
  },
  sleepy: {
    name: 'Sleepy',
    icon: <SleepyIcon />,
    color: '#9370DB',
    description: 'Promotes restful sleep and drowsiness'
  },
  calm: {
    name: 'Calm',
    icon: <CalmIcon />,
    color: '#B0E0E6',
    description: 'Peaceful mental state and tranquility'
  },
  social: {
    name: 'Social',
    icon: <SocialIcon />,
    color: '#FF6347',
    description: 'Enhanced sociability and conversation'
  },
  hungry: {
    name: 'Hungry',
    icon: <HungryIcon />,
    color: '#FFA07A',
    description: 'Increased appetite and food appreciation'
  },
  talkative: {
    name: 'Talkative',
    icon: <TalkativeIcon />,
    color: '#20B2AA',
    description: 'Increased desire to communicate'
  },
  giggly: {
    name: 'Giggly',
    icon: <GigglyIcon />,
    color: '#FFB6C1',
    description: 'Prone to laughter and amusement'
  },
  aroused: {
    name: 'Aroused',
    icon: <ArousedIcon />,
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
