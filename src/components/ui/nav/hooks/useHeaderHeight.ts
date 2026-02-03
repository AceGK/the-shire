import { useState, useEffect, RefObject } from 'react';

const NAV_HEIGHT = 74;
const PROMO_HEIGHT = 41;

export function useHeaderHeight(
  headerRef: RefObject<HTMLElement | null>,
  deps: unknown[] = [],
  includePromo: boolean = false
) {
  const initialHeight = includePromo ? NAV_HEIGHT + PROMO_HEIGHT : NAV_HEIGHT;
  const [headerHeight, setHeaderHeight] = useState(initialHeight);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeight = () => {
      const height = header.offsetHeight;
      setHeaderHeight(height);
      document.documentElement.style.setProperty('--header-height', `${height}px`);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(header);

    return () => resizeObserver.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return headerHeight;
}
