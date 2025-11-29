import { Routes, Route } from 'react-router-dom';
import { SaasLaunch } from './saas-launch';
import { FeaturePageWrapper } from './components';
import { useRouteScroll, useSaasLaunchRouting } from './hooks';
import { Locale, LOCALES } from '../shared/utils/types';

interface SaasLaunchRouterProps {
  initialLocale?: Locale;
  /**
   * Web3Forms access key for contact form email delivery
   * Get free key at https://web3forms.com
   */
  web3formsAccessKey?: string;
}

/**
 * Router component for SaaS Launch template.
 * Handles all routing configuration including home page and feature detail pages.
 * Use this component in your app to set up the complete SaaS template with routing.
 */
export function SaasLaunchRouter({
  initialLocale = LOCALES.EN,
  web3formsAccessKey,
}: SaasLaunchRouterProps) {
  // Handle scroll behavior on route changes
  useRouteScroll();

  // Manage routing and locale state
  const { currentLocale, handleFeatureClick, handleLocaleChange } =
    useSaasLaunchRouting(initialLocale);

  return (
    <Routes>
      {/* Home page */}
      <Route
        path="/"
        element={
          <SaasLaunch
            onFeatureClick={handleFeatureClick}
            locale={currentLocale}
            onLocaleChange={handleLocaleChange}
            web3formsAccessKey={web3formsAccessKey}
          />
        }
      />

      {/* Feature detail pages */}
      <Route
        path="/features/:featureSlug"
        element={
          <FeaturePageWrapper
            locale={currentLocale}
            onLocaleChange={handleLocaleChange}
          />
        }
      />
    </Routes>
  );
}
