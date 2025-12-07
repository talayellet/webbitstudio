import { useEffect, useState } from 'react';
import {
  COOKIE_PREFERENCES_STORAGE_KEY,
  COOKIE_CONSENT_CHANGED_EVENT,
  STORAGE_EVENT,
} from '../constants';

/**
 * Hook to check if user has made any cookie consent decision
 * Returns true if user has either accepted or rejected cookies
 * This is used to gate external API requests until user has given consent
 *
 * @returns boolean indicating if user has made a consent decision
 *
 * @example
 * ```tsx
 * const hasConsent = useHasConsentDecision();
 *
 * useQuery({
 *   queryKey: ['data'],
 *   queryFn: fetchData,
 *   enabled: hasConsent, // Only run query after consent
 * });
 * ```
 */
export const useHasConsentDecision = () => {
  const [hasDecision, setHasDecision] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const stored = localStorage.getItem(COOKIE_PREFERENCES_STORAGE_KEY);
      setHasDecision(!!stored);
    };

    checkConsent();

    // Listen for consent changes
    const handleStorageChange = () => checkConsent();
    window.addEventListener(STORAGE_EVENT, handleStorageChange);
    window.addEventListener(COOKIE_CONSENT_CHANGED_EVENT, handleStorageChange);

    return () => {
      window.removeEventListener(STORAGE_EVENT, handleStorageChange);
      window.removeEventListener(
        COOKIE_CONSENT_CHANGED_EVENT,
        handleStorageChange
      );
    };
  }, []);

  return hasDecision;
};
