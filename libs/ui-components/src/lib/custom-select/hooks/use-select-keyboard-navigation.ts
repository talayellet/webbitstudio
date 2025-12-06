import React from 'react';
import { KEYBOARD_KEYS } from '@webbitstudio/shared-utils';

interface UseSelectKeyboardNavigationProps {
  isOpen: boolean;
  focusedIndex: number;
  options: string[];
  value: string;
  setIsOpen: (isOpen: boolean) => void;
  setFocusedIndex: (index: number | ((prev: number) => number)) => void;
  onSelect: (option: string) => void;
}

/**
 * Hook to handle keyboard navigation for the select component
 */
export const useSelectKeyboardNavigation = ({
  isOpen,
  focusedIndex,
  options,
  value,
  setIsOpen,
  setFocusedIndex,
  onSelect,
}: UseSelectKeyboardNavigationProps) => {
  const handleButtonKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case KEYBOARD_KEYS.ENTER:
      case KEYBOARD_KEYS.SPACE:
        e.preventDefault();
        setIsOpen(!isOpen);
        if (!isOpen) {
          const currentIndex = options.indexOf(value);
          setFocusedIndex(currentIndex >= 0 ? currentIndex : 0);
        }
        break;
      case KEYBOARD_KEYS.ESCAPE:
        if (isOpen) {
          e.preventDefault();
          setIsOpen(false);
          setFocusedIndex(-1);
        }
        break;
      case KEYBOARD_KEYS.ARROW_DOWN:
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        }
        break;
      case KEYBOARD_KEYS.ARROW_UP:
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(options.length - 1);
        }
        break;
    }
  };

  const handleListKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case KEYBOARD_KEYS.ARROW_DOWN:
        e.preventDefault();
        setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
        break;
      case KEYBOARD_KEYS.ARROW_UP:
        e.preventDefault();
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
        break;
      case KEYBOARD_KEYS.ENTER:
      case KEYBOARD_KEYS.SPACE:
        e.preventDefault();
        if (focusedIndex >= 0) {
          onSelect(options[focusedIndex]);
        }
        break;
      case KEYBOARD_KEYS.ESCAPE:
        e.preventDefault();
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
      case KEYBOARD_KEYS.HOME:
        e.preventDefault();
        setFocusedIndex(0);
        break;
      case KEYBOARD_KEYS.END:
        e.preventDefault();
        setFocusedIndex(options.length - 1);
        break;
    }
  };

  return { handleButtonKeyDown, handleListKeyDown };
};
