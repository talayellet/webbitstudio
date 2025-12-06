import { useState, useEffect } from 'react';
import { COOKIES_CONSENT_VALUE, type ConsentValue } from '../constants';

const isBrowser = typeof window !== 'undefined';

export interface UseLocalStorageConsentOptions {
  /**
   * The localStorage key to use for storing consent
   */
  storageKey: string;
  /**
   * Callback when user accepts
   */
  onAccept?: () => void;
  /**
   * Callback when user rejects
   */
  onReject?: () => void;
}

export interface UseLocalStorageConsentReturn {
  /**
   * Current consent value from localStorage
   */
  consent: ConsentValue;
  /**
   * Whether the consent UI should be visible
   */
  isVisible: boolean;
  /**
   * Function to accept and store consent
   */
  accept: () => void;
  /**
   * Function to reject and store consent
   */
  reject: () => void;
}

/**
 * Custom hook to manage consent state with localStorage persistence
 * Handles reading consent from localStorage, showing UI when no consent exists,
 * and saving consent decisions
 *
 * @param options - Configuration options
 * @returns Object with consent state and handler functions
 */
export const useLocalStorageConsent = ({
  storageKey,
  onAccept,
  onReject,
}: UseLocalStorageConsentOptions): UseLocalStorageConsentReturn => {
  const [consent, setConsent] = useState<ConsentValue>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isBrowser) {
      const stored = localStorage.getItem(storageKey) as ConsentValue;
      if (
        stored === COOKIES_CONSENT_VALUE.ACCEPTED ||
        stored === COOKIES_CONSENT_VALUE.REJECTED
      ) {
        setConsent(stored);
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }
  }, [storageKey]);

  const accept = () => {
    if (isBrowser) {
      localStorage.setItem(storageKey, COOKIES_CONSENT_VALUE.ACCEPTED);
    }
    setConsent(COOKIES_CONSENT_VALUE.ACCEPTED);
    setIsVisible(false);
    onAccept?.();
  };

  const reject = () => {
    if (isBrowser) {
      localStorage.setItem(storageKey, COOKIES_CONSENT_VALUE.REJECTED);
    }
    setConsent(COOKIES_CONSENT_VALUE.REJECTED);
    setIsVisible(false);
    onReject?.();
  };

  return {
    consent,
    isVisible,
    accept,
    reject,
  };
};
