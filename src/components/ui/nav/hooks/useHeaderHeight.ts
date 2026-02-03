import { useState, useEffect, RefObject } from 'react';

export function useHeaderHeight(headerRef: RefObject<HTMLElement | null>, deps: unknown[] = []) {
  const [headerHeight, setHeaderHeight] = useState(68);

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
