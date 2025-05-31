// src/hooks/useReducedMotion.ts
import { useState, useEffect } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(false); // Default to false initially

  useEffect(() => {
    // Check if window and matchMedia are available (client-side)
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      const mediaQueryList = window.matchMedia(QUERY);
      setReducedMotion(mediaQueryList.matches); // Set initial state based on current preference

      const listener = (event: MediaQueryListEvent) => {
        setReducedMotion(event.matches);
      };

      // It's recommended to use addEventListener/removeEventListener for modern browsers
      // if mediaQueryList.addEventListener is available.
      // Fallback to addListener/removeListener for older browser compatibility if needed,
      // but Next.js typically targets modern browsers.
      if (mediaQueryList.addEventListener) {
        mediaQueryList.addEventListener('change', listener);
        return () => {
          mediaQueryList.removeEventListener('change', listener);
        };
      } else {
        // Fallback for older browsers (e.g., Safari < 14)
        mediaQueryList.addListener(listener);
        return () => {
          mediaQueryList.removeListener(listener);
        };
      }
    }
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return reducedMotion;
}
