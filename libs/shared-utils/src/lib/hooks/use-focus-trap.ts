import { useEffect, useRef } from 'react';

/**
 * Hook to trap focus within a container and prevent body scroll
 * Useful for modals, dialogs, and other overlay components
 *
 * @param isActive - Whether the focus trap should be active
 * @param containerRef - Optional ref to the container element to focus
 *
 * @example
 * ```tsx
 * const modalRef = useRef<HTMLDivElement>(null);
 * useFocusTrap(isOpen, modalRef);
 * ```
 */
export const useFocusTrap = (
  isActive: boolean,
  containerRef?: React.RefObject<HTMLElement | null>
) => {
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isActive) {
      // Store currently focused element
      previousActiveElement.current = document.activeElement as HTMLElement;

      // Prevent body scroll
      document.body.style.overflow = 'hidden';

      // Focus the container if provided
      containerRef?.current?.focus();
    } else {
      // Restore body scroll
      document.body.style.overflow = '';

      // Restore focus to previous element
      previousActiveElement.current?.focus();
    }

    return () => {
      // Cleanup: always restore body scroll
      document.body.style.overflow = '';
    };
  }, [isActive, containerRef]);
};
