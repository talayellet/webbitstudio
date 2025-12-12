import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  WebbitStudioHomePage,
  SinglePageLayout,
  PrivacyPolicyPage,
  TermsOfServicePage,
  CookiePolicyPage,
  AccessibilityStatementPage,
  TemplatesCatalog,
  WEBBIT_STUDIO_EMAIL,
} from '@webbitstudio/pages';
import { SaasLaunchRouter } from '@webbitstudio/landing-templates';
import {
  CurrencyProvider,
  LOCALE_STORAGE_KEY,
  DEFAULT_LANGUAGE,
} from '@webbitstudio/shared-utils';
import { PageUnderConstruction } from '@webbitstudio/ui-components';
import { AnalyticsScript } from '../components';
import { useAnalyticsConsent } from '../hooks';
import { ROUTES } from '../utils';

const COMPANY_NAME = 'Webbit Studio';

export function App() {
  const hasAnalyticsConsent = useAnalyticsConsent();
  const [locale, setLocale] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return (
        window.localStorage.getItem(LOCALE_STORAGE_KEY) || DEFAULT_LANGUAGE
      );
    }
    return DEFAULT_LANGUAGE;
  });

  // Listen for locale changes in localStorage
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === LOCALE_STORAGE_KEY && e.newValue) {
        setLocale(e.newValue);
      }
    };

    // Also check localStorage periodically in case changes happen in same tab
    const checkLocale = () => {
      if (typeof window !== 'undefined') {
        const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
        if (storedLocale && storedLocale !== locale) {
          setLocale(storedLocale);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    const interval = setInterval(checkLocale, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [locale]);

  return (
    <CurrencyProvider>
      <AnalyticsScript
        websiteId={import.meta.env.VITE_UMAMI_WEBSITE_ID || ''}
        src={import.meta.env.VITE_UMAMI_SCRIPT_URL}
        hasConsent={hasAnalyticsConsent}
      />
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <WebbitStudioHomePage
              web3formsAccessKey={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
            />
          }
        />
        <Route path={ROUTES.TEMPLATES} element={<TemplatesCatalog />} />
        <Route
          path={ROUTES.TEMPLATES_SAAS_LAUNCH}
          element={<SaasLaunchRouter />}
        />
        <Route
          path={ROUTES.TEMPLATES_PORTFOLIO_CREATIVE}
          element={
            <PageUnderConstruction backUrl={ROUTES.TEMPLATES} locale={locale} />
          }
        />
        <Route
          path={ROUTES.TEMPLATES_BUSINESS_PRO}
          element={
            <PageUnderConstruction backUrl={ROUTES.TEMPLATES} locale={locale} />
          }
        />
        <Route
          path={ROUTES.PRIVACY_POLICY}
          element={
            <SinglePageLayout>
              <PrivacyPolicyPage
                companyName={COMPANY_NAME}
                companyEmail={WEBBIT_STUDIO_EMAIL}
              />
            </SinglePageLayout>
          }
        />
        <Route
          path={ROUTES.TERMS_OF_SERVICE}
          element={
            <SinglePageLayout>
              <TermsOfServicePage
                companyName={COMPANY_NAME}
                companyEmail={WEBBIT_STUDIO_EMAIL}
              />
            </SinglePageLayout>
          }
        />
        <Route
          path={ROUTES.COOKIE_POLICY}
          element={
            <SinglePageLayout>
              <CookiePolicyPage
                companyName={COMPANY_NAME}
                companyEmail={WEBBIT_STUDIO_EMAIL}
              />
            </SinglePageLayout>
          }
        />
        <Route
          path={ROUTES.ACCESSIBILITY_STATEMENT}
          element={
            <SinglePageLayout>
              <AccessibilityStatementPage />
            </SinglePageLayout>
          }
        />
      </Routes>
    </CurrencyProvider>
  );
}

export default App;
