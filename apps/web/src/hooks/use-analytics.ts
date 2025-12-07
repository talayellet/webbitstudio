import { useEffect, useState } from 'react';
import {
  COOKIE_CONSENT_CHANGED_EVENT,
  COOKIE_PREFERENCES_STORAGE_KEY,
  type CookiePreferences,
} from '@webbitstudio/shared-utils';

interface UmamiEventData {
  [key: string]: string | number | boolean;
}

interface UmamiWindow extends Window {
  umami?: {
    track: (eventName: string, eventData?: UmamiEventData) => void;
  };
}

/**
 * Hook to check if user has consented to analytics cookies
 */
export const useAnalyticsConsent = () => {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const stored = localStorage.getItem(COOKIE_PREFERENCES_STORAGE_KEY);
      if (stored) {
        try {
          const preferences = JSON.parse(stored) as CookiePreferences;
          setHasConsent(preferences.analytics === true);
        } catch {
          setHasConsent(false);
        }
      } else {
        setHasConsent(false);
      }
    };

    // Check initially
    checkConsent();

    // Listen for storage changes (consent updates)
    window.addEventListener('storage', checkConsent);

    // Custom event for same-tab updates
    const handleConsentChange = () => checkConsent();
    window.addEventListener(COOKIE_CONSENT_CHANGED_EVENT, handleConsentChange);

    return () => {
      window.removeEventListener('storage', checkConsent);
      window.removeEventListener(
        COOKIE_CONSENT_CHANGED_EVENT,
        handleConsentChange
      );
    };
  }, []);

  return hasConsent;
};

/**
 * Custom hook for Umami analytics tracking
 * Provides a typed interface to track custom events
 */
export const useAnalytics = () => {
  const trackEvent = (eventName: string, eventData?: UmamiEventData) => {
    const win = window as UmamiWindow;
    if (win.umami) {
      win.umami.track(eventName, eventData);
    }
  };

  return { trackEvent };
};

/**
 * Hook to track page views automatically
 * Call this in your main App component or route components
 */
export const usePageTracking = () => {
  useEffect(() => {
    // Umami automatically tracks page views, but you can manually trigger if needed
    const win = window as UmamiWindow;
    if (win.umami) {
      win.umami.track('pageview');
    }
  }, []);
};
