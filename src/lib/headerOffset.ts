import { useSyncExternalStore } from 'react';

/**
 * How much of the fixed site header is on screen, in pixels: the full header
 * height while it is showing, 0 while it has slid away on scroll.
 *
 * The nav publishes it in two forms, so sticky or fixed elements can sit just
 * below the header and follow it as it shows and hides:
 *
 * - CSS:  the `--header-offset` custom property on <html>. In SCSS, prefer the
 *         `sticky-below-header` mixin, which also animates in step with the nav.
 * - JS:   the `useHeaderOffset()` hook, for components that position themselves
 *         in script.
 */

export const HEADER_OFFSET_VAR = '--header-offset';

let offset: number | null = null;
const listeners = new Set<() => void>();

/** Called by the nav whenever its visibility or height changes. */
export function setHeaderOffset(next: number) {
  if (next === offset) return;
  offset = next;
  document.documentElement.style.setProperty(HEADER_OFFSET_VAR, `${next}px`);
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/**
 * Pixels of header currently on screen. Returns `fallback` until the nav has
 * reported, including during server rendering.
 */
export function useHeaderOffset(fallback = 0): number {
  return useSyncExternalStore(
    subscribe,
    () => offset ?? fallback,
    () => fallback
  );
}
