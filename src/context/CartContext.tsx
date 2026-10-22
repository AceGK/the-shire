'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from 'react';
import strainsData from '@/lib/strains.json';
import { slugify } from '@/lib/utils';
import { DEFAULT_WEIGHT, getPrice, isWeight } from '@/lib/pricing';
import type { Strain, Weight } from '@/types';

const STORAGE_KEY = 'shire-bag';
export const MAX_QUANTITY = 10;

const strainsBySlug = new Map(
  (strainsData as Strain[]).map((strain) => [slugify(strain.name), strain])
);

/**
 * What gets persisted: slug, weight and quantity, so strain details and prices stay
 * fresh. One strain can appear on several lines, one per weight.
 */
interface StoredItem {
  slug: string;
  weight: Weight;
  quantity: number;
}

/** A bag line resolved against the strain catalogue. */
export interface CartItem extends StoredItem {
  /** Unique per strain and weight; use as the React key. */
  key: string;
  strain: Strain;
  /** Price of one unit at this weight, in pounds. */
  unitPrice: number;
  /** unitPrice × quantity. */
  lineTotal: number;
}

export function lineKey(slug: string, weight: Weight): string {
  return `${slug}:${weight}`;
}

type LineRef = { slug: string; weight: Weight };

type Action =
  | { type: 'replace'; items: StoredItem[] }
  | ({ type: 'add'; quantity: number } & LineRef)
  | ({ type: 'update'; quantity: number } & LineRef)
  | ({ type: 'remove' } & LineRef)
  | { type: 'clear' };

function clampQuantity(quantity: number): number {
  if (!Number.isFinite(quantity)) return 1;
  return Math.max(1, Math.min(MAX_QUANTITY, Math.floor(quantity)));
}

const matches = (item: StoredItem, ref: LineRef) =>
  item.slug === ref.slug && item.weight === ref.weight;

function reducer(state: StoredItem[], action: Action): StoredItem[] {
  switch (action.type) {
    case 'replace':
      return action.items;
    case 'add': {
      const existing = state.find((item) => matches(item, action));
      if (!existing) {
        return [
          ...state,
          { slug: action.slug, weight: action.weight, quantity: clampQuantity(action.quantity) },
        ];
      }
      return state.map((item) =>
        matches(item, action)
          ? { ...item, quantity: clampQuantity(item.quantity + action.quantity) }
          : item
      );
    }
    case 'update':
      return state.map((item) =>
        matches(item, action) ? { ...item, quantity: clampQuantity(action.quantity) } : item
      );
    case 'remove':
      return state.filter((item) => !matches(item, action));
    case 'clear':
      return [];
  }
}

/**
 * Parse stored JSON defensively: drop anything malformed or no longer in the
 * catalogue. Lines saved before weights existed are read as the default weight.
 */
function parseStored(raw: string | null): StoredItem[] {
  if (!raw) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const seen = new Set<string>();
    const items: StoredItem[] = [];
    for (const entry of parsed) {
      if (
        !entry ||
        typeof entry !== 'object' ||
        typeof entry.slug !== 'string' ||
        typeof entry.quantity !== 'number' ||
        !strainsBySlug.has(entry.slug)
      ) {
        continue;
      }
      const weight: Weight = isWeight(entry.weight) ? entry.weight : DEFAULT_WEIGHT;
      const key = lineKey(entry.slug, weight);
      if (seen.has(key)) continue;
      seen.add(key);
      items.push({ slug: entry.slug, weight, quantity: clampQuantity(entry.quantity) });
    }
    return items;
  } catch {
    return [];
  }
}

interface CartContextValue {
  items: CartItem[];
  /** Total units across all lines. */
  count: number;
  /** Sum of every line total, in pounds. */
  subtotal: number;
  /** False until the bag has been read from localStorage on the client. */
  hydrated: boolean;
  addItem: (slug: string, weight: Weight, quantity?: number) => void;
  updateQuantity: (slug: string, weight: Weight, quantity: number) => void;
  removeItem: (slug: string, weight: Weight) => void;
  clear: () => void;
  getQuantity: (slug: string, weight: Weight) => number;
  isOpen: boolean;
  openBag: () => void;
  closeBag: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [stored, dispatch] = useReducer(reducer, []);
  const [hydrated, setHydrated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Load the saved bag once on the client, and follow changes made in other tabs.
  useEffect(() => {
    try {
      dispatch({ type: 'replace', items: parseStored(localStorage.getItem(STORAGE_KEY)) });
    } catch {
      // Storage can be unavailable (private mode, blocked site data); start empty.
    }
    setHydrated(true);

    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        dispatch({ type: 'replace', items: parseStored(e.newValue) });
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // Persist after hydration, so the initial empty state never overwrites a saved bag.
  useEffect(() => {
    if (!hydrated) return;
    try {
      if (stored.length) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // Ignore quota or availability errors; the bag still works for this visit.
    }
  }, [stored, hydrated]);

  const addItem = useCallback((slug: string, weight: Weight, quantity = 1) => {
    if (!strainsBySlug.has(slug) || !isWeight(weight)) return;
    dispatch({ type: 'add', slug, weight, quantity });
  }, []);
  const updateQuantity = useCallback(
    (slug: string, weight: Weight, quantity: number) =>
      dispatch({ type: 'update', slug, weight, quantity }),
    []
  );
  const removeItem = useCallback(
    (slug: string, weight: Weight) => dispatch({ type: 'remove', slug, weight }),
    []
  );
  const clear = useCallback(() => dispatch({ type: 'clear' }), []);
  const openBag = useCallback(() => setIsOpen(true), []);
  const closeBag = useCallback(() => setIsOpen(false), []);

  const value = useMemo<CartContextValue>(() => {
    const items = stored.flatMap((item): CartItem[] => {
      const strain = strainsBySlug.get(item.slug);
      if (!strain) return [];
      const unitPrice = getPrice(strain, item.weight);
      return [
        {
          ...item,
          key: lineKey(item.slug, item.weight),
          strain,
          unitPrice,
          lineTotal: unitPrice * item.quantity,
        },
      ];
    });
    return {
      items,
      count: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: items.reduce((sum, item) => sum + item.lineTotal, 0),
      hydrated,
      addItem,
      updateQuantity,
      removeItem,
      clear,
      getQuantity: (slug, weight) =>
        stored.find((item) => item.slug === slug && item.weight === weight)?.quantity ?? 0,
      isOpen,
      openBag,
      closeBag,
    };
  }, [stored, hydrated, isOpen, addItem, updateQuantity, removeItem, clear, openBag, closeBag]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
