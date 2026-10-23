import { useState, useEffect, useRef } from 'react';

// Hide the nav on scroll down and bring it back on scroll up. Set to true to turn
// it back on. While false, the nav always stays visible.
const SCROLL_HIDE_ENABLED = false;

interface UseScrollHideOptions {
  threshold?: number;
  isHovered?: boolean;
}

export function useScrollHide({ threshold = 100, isHovered = false }: UseScrollHideOptions = {}) {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const preventHideRef = useRef(false);

  // Temporarily prevent hiding (useful for hash navigation)
  const preventHide = (duration = 1000) => {
    preventHideRef.current = true;
    setHidden(false);
    setTimeout(() => {
      preventHideRef.current = false;
    }, duration);
  };

  useEffect(() => {
    if (!SCROLL_HIDE_ENABLED) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (preventHideRef.current || isHovered || currentScrollY < threshold) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHovered, threshold]);

  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => preventHide();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return { hidden, preventHide };
}
