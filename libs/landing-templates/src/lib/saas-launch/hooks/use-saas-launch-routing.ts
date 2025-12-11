import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Locale, LOCALES } from '../../shared';
import type { Feature } from '../utils';

interface UseSaasLaunchRoutingResponse {
  currentLocale: Locale;
  handleFeatureClick: (feature: Feature) => void;
  handleLocaleChange: (locale: Locale) => void;
}

/**
 * Hook that manages routing and locale state for SaaS launch template.
 * Provides handlers for feature navigation and locale switching.
 */
export const useSaasLaunchRouting = (
  initialLocale: Locale = LOCALES.EN
): UseSaasLaunchRoutingResponse => {
  const navigate = useNavigate();
  const [currentLocale, setCurrentLocale] = useState<Locale>(initialLocale);

  const handleFeatureClick = useCallback(
    (feature: Feature) => {
      if (feature.routePath) {
        // Use relative path for nested routing
        const relativePath = feature.routePath.startsWith('/')
          ? feature.routePath.substring(1)
          : feature.routePath;
        navigate(relativePath);
      }
    },
    [navigate]
  );

  const handleLocaleChange = useCallback((locale: Locale) => {
    setCurrentLocale(locale);
  }, []);

  return {
    currentLocale,
    handleFeatureClick,
    handleLocaleChange,
  };
};
