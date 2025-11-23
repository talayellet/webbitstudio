import { useCallback, useEffect, useRef } from 'react';
import { DEFAULT_SCROLL_THRESHOLD } from '../utils';

/**
 * Hook for handling scroll-based reveal animations
 * @param threshold - Distance from bottom of viewport before element is revealed (default: 150px)
 * @returns A ref callback to attach to elements that should be revealed on scroll
 */
export const useScrollReveal = (threshold = DEFAULT_SCROLL_THRESHOLD) => {
  const revealRefs = useRef<HTMLElement[]>([]);

  const revealOnScroll = useCallback(() => {
    revealRefs.current.forEach((element) => {
      if (element) {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - threshold) {
          element.classList.add('reveal-active');
        }
      }
    });
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, [revealOnScroll]);

  const addToRefs = useCallback((el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }, []);

  return addToRefs;
};
