import { Routes, Route } from 'react-router-dom';
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
import {
  SaasLaunchRouter,
  RestaurantCafe,
} from '@webbitstudio/landing-templates';
import { CurrencyProvider } from '@webbitstudio/shared-utils';
import { PageUnderConstruction } from '@webbitstudio/ui-components';
import { AnalyticsScript } from '../components';
import { useAnalyticsConsent, useLocale } from '../hooks';
import { COMPANY_NAME, ROUTES } from '../utils';

export function App() {
  const hasAnalyticsConsent = useAnalyticsConsent();
  const locale = useLocale();

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
          path={ROUTES.TEMPLATES_RESTAURANT_CAFE}
          element={<RestaurantCafe />}
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
