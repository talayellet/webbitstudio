import { useEffect } from 'react';

interface UmamiEventData {
  [key: string]: string | number | boolean;
}

interface UmamiWindow extends Window {
  umami?: {
    track: (eventName: string, eventData?: UmamiEventData) => void;
  };
}

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
