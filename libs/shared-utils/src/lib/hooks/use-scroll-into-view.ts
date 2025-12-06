import { useEffect } from 'react';

interface UseScrollIntoViewProps<T extends HTMLElement> {
  /**
   * Whether the element should be scrolled into view
   */
  isActive: boolean;
  /**
   * Index of the element to scroll to
   */
  index: number;
  /**
   * Ref array containing the elements
   */
  elementsRef: React.MutableRefObject<(T | null)[]>;
  /**
   * Scroll behavior (default: 'nearest')
   */
  block?: ScrollLogicalPosition;
}

/**
 * Hook to scroll a focused element into view
 * Useful for dropdown menus, autocomplete lists, and other scrollable containers
 */
export const useScrollIntoView = <T extends HTMLElement>({
  isActive,
  index,
  elementsRef,
  block = 'nearest',
}: UseScrollIntoViewProps<T>) => {
  useEffect(() => {
    if (isActive && index >= 0 && elementsRef.current[index]) {
      elementsRef.current[index]?.scrollIntoView({
        block,
      });
    }
  }, [index, isActive, elementsRef, block]);
};
