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
      return;
    }

    // Check if script already exists
    const existingScript = document.querySelector(
      `script[data-website-id="${websiteId}"]`
    );
    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.defer = true;
    script.src = src;
    script.setAttribute('data-website-id', websiteId);

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
