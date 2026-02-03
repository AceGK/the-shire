import { useState, useEffect, useRef } from 'react';

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
