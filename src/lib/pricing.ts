import type { Strain, Weight } from '@/types';

export interface WeightOption {
  id: Weight;
  /** Short label for compact pickers, e.g. "1/8 oz". */
  short: string;
  /** Full label for bag lines and screen readers, e.g. "Eighth ounce". */
  label: string;
}

/** Every weight we sell, smallest first. */
export const WEIGHTS: WeightOption[] = [
  { id: 'gram', short: '1 g', label: 'Gram' },
  { id: 'eighth', short: '1/8 oz', label: 'Eighth ounce' },
  { id: 'quarter', short: '1/4 oz', label: 'Quarter ounce' },
  { id: 'half', short: '1/2 oz', label: 'Half ounce' },
  { id: 'ounce', short: '1 oz', label: 'Ounce' },
];

export const DEFAULT_WEIGHT: Weight = 'eighth';

const weightIds = new Set<string>(WEIGHTS.map((w) => w.id));

export function isWeight(value: unknown): value is Weight {
  return typeof value === 'string' && weightIds.has(value);
}

export function getWeightOption(id: Weight): WeightOption {
  return WEIGHTS.find((w) => w.id === id) ?? WEIGHTS[0];
}

export function getPrice(strain: Strain, weight: Weight): number {
  return strain.prices[weight];
}

/** Lowest price a strain sells for, for "from" labels. */
export function getStartingPrice(strain: Strain): number {
  return Math.min(...WEIGHTS.map((w) => strain.prices[w.id]));
}

/**
 * Prices show in pounds sterling, a nod to Tolkien's England. All price text goes
 * through here, so changing the symbol only needs a change to CURRENCY_SYMBOL.
 *
 * formatPrice(12)  -> "£12"
 */
export const CURRENCY_SYMBOL = '£';

export function formatPrice(amount: number): string {
  return `${CURRENCY_SYMBOL}${amount}`;
}
