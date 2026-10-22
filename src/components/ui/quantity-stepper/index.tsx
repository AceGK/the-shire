'use client';

import MinusIcon from '@/assets/icons/minus.svg';
import PlusIcon from '@/assets/icons/plus.svg';
import styles from './styles.module.scss';

interface QuantityStepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  /** Used in the button labels, e.g. "Decrease quantity of Old Toby". */
  label?: string;
  size?: 'sm' | 'md';
}

export default function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 10,
  label,
  size = 'md',
}: QuantityStepperProps) {
  const suffix = label ? ` of ${label}` : '';

  return (
    <div className={`${styles.stepper} ${styles[size]}`} role="group" aria-label={`Quantity${suffix}`}>
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
        aria-label={`Decrease quantity${suffix}`}
      >
        <MinusIcon width={14} height={14} />
      </button>
      <output aria-live="polite">{value}</output>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        aria-label={`Increase quantity${suffix}`}
      >
        <PlusIcon width={14} height={14} />
      </button>
    </div>
  );
}
