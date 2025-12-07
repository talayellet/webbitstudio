import { useState, useEffect, useCallback } from 'react';
import {
  COOKIE_CONSENT_CHANGED_EVENT,
  COOKIE_PREFERENCES_STORAGE_KEY,
  DEFAULT_PREFERENCES,
  type CookiePreferences,
} from '../constants';
import { COOKIE_CATEGORY } from '../types';

const isBrowser = typeof window !== 'undefined';

export interface UseGranularConsentResponse {
  /**
   * Current cookie preferences
   */
  preferences: CookiePreferences;
  /**
   * Whether the consent banner should be visible (no preferences stored)
   */
  isVisible: boolean;
  /**
   * Accept all cookie categories
   */
  acceptAll: () => void;
  /**
   * Reject all non-essential cookies
   */
  rejectAll: () => void;
  /**
   * Save custom preferences
   */
  savePreferences: (prefs: CookiePreferences) => void;
  /**
   * Update a single cookie category preference
   */
  updatePreference: (category: keyof CookiePreferences, value: boolean) => void;
}

/**
 * Custom hook to manage granular cookie consent with localStorage persistence
 * Provides fine-grained control over cookie categories (essential, analytics, marketing)
 * Essential cookies are always enabled and cannot be disabled
 *
 * @returns Object with preferences state and handler functions
 */
export const useGranularConsent = (): UseGranularConsentResponse => {
  const [preferences, setPreferences] =
    useState<CookiePreferences>(DEFAULT_PREFERENCES);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isBrowser) {
      const stored = localStorage.getItem(COOKIE_PREFERENCES_STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as CookiePreferences;
          // Ensure essential is always true
          setPreferences({ ...parsed, essential: true });
          setIsVisible(false);
        } catch {
          // Invalid JSON, show banner
          setIsVisible(true);
        }
      } else {
        // No preferences stored, show banner
        setIsVisible(true);
      }
    }
  }, []);

  const saveToStorage = useCallback((prefs: CookiePreferences) => {
    if (isBrowser) {
      // Ensure essential is always true
      const prefsToSave = { ...prefs, essential: true };
      localStorage.setItem(
        COOKIE_PREFERENCES_STORAGE_KEY,
        JSON.stringify(prefsToSave)
      );
      // Dispatch custom event to notify other components
      window.dispatchEvent(new Event(COOKIE_CONSENT_CHANGED_EVENT));
    }
  }, []);

  const acceptAll = useCallback(() => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    setIsVisible(false);
    saveToStorage(allAccepted);
  }, [saveToStorage]);

  const rejectAll = useCallback(() => {
    const onlyEssential: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(onlyEssential);
    setIsVisible(false);
    saveToStorage(onlyEssential);
  }, [saveToStorage]);

  const savePreferences = useCallback(
    (prefs: CookiePreferences) => {
      // Ensure essential is always true
      const safePrefs = { ...prefs, essential: true };
      setPreferences(safePrefs);
      setIsVisible(false);
      saveToStorage(safePrefs);
    },
    [saveToStorage]
  );

  const updatePreference = useCallback(
    (category: keyof CookiePreferences, value: boolean) => {
      // Essential cannot be disabled
      if (category === COOKIE_CATEGORY.ESSENTIAL) {
        return;
      }
      setPreferences((prev) => ({
        ...prev,
        [category]: value,
      }));
    },
    []
  );

  return {
    preferences,
    isVisible,
    acceptAll,
    rejectAll,
    savePreferences,
    updatePreference,
  };
};
