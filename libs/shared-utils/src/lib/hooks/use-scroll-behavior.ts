import { useMemo } from 'react';

/**
 * Custom hook to get appropriate scroll behavior based on user's motion preference
 * Respects prefers-reduced-motion for accessibility (WCAG 2.3.3)
 *
 * @returns 'smooth' if user has no motion preference, 'auto' if user prefers reduced motion
 */
export const useScrollBehavior = (): ScrollBehavior => {
  return useMemo(() => {
    if (typeof window === 'undefined') {
      return 'auto';
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    return prefersReducedMotion ? 'auto' : 'smooth';
  }, []);
};
