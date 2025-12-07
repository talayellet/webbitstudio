import { useEffect } from 'react';
import { KEYBOARD_KEYS } from '../constants';

/**
 * Hook to handle Escape key press
 * Useful for closing modals, dropdowns, tooltips, etc.
 *
 * @param callback - Function to call when Escape is pressed
 * @param isActive - Whether the listener should be active
 *
 * @example
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false);
 * useEscapeKey(() => setIsOpen(false), isOpen);
 * ```
 */
export const useEscapeKey = (callback: () => void, isActive = true) => {
  useEffect(() => {
    if (!isActive) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === KEYBOARD_KEYS.ESCAPE) {
        callback();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [callback, isActive]);
};
