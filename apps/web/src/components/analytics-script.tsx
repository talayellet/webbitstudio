import { useEffect } from 'react';

interface AnalyticsScriptProps {
  websiteId: string;
  src?: string;
}

/**
 * Component to load Umami analytics script
 * Place this in your App component to enable analytics tracking
 */
const AnalyticsScript = ({
  websiteId,
  src = 'https://cloud.umami.is/script.js',
}: AnalyticsScriptProps) => {
  useEffect(() => {
    if (!websiteId) {
      console.warn('Umami analytics: No website ID provided');
      return;
    }

    console.log('Umami analytics: Initializing with website ID:', websiteId);

    // Check if script already exists
    const existingScript = document.querySelector(
      `script[data-website-id="${websiteId}"]`
    );
    if (existingScript) {
      console.log('Umami analytics: Script already loaded');
      return;
    }

    const script = document.createElement('script');
    script.defer = true;
    script.src = src;
    script.setAttribute('data-website-id', websiteId);

    script.onload = () => {
      console.log('Umami analytics: Script loaded successfully');
    };
    script.onerror = () => {
      console.error('Umami analytics: Failed to load script');
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [websiteId, src]);

  return null;
};

export default AnalyticsScript;
