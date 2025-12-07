import { Routes, Route } from 'react-router-dom';
import {
  WebbitStudioHomePage,
  SinglePageLayout,
  PrivacyPolicyPage,
  TermsOfServicePage,
  CookiePolicyPage,
  AccessibilityStatementPage,
  WEBBIT_STUDIO_EMAIL,
} from '@webbitstudio/pages';
import { CurrencyProvider } from '@webbitstudio/shared-utils';
import { AnalyticsScript } from '../components';
import { useAnalyticsConsent } from '../hooks';

const COMPANY_NAME = 'Webbit Studio';

export function App() {
  const hasAnalyticsConsent = useAnalyticsConsent();

  return (
    <CurrencyProvider>
      <AnalyticsScript
        websiteId={import.meta.env.VITE_UMAMI_WEBSITE_ID || ''}
        src={import.meta.env.VITE_UMAMI_SCRIPT_URL}
        hasConsent={hasAnalyticsConsent}
      />
      <Routes>
        <Route
          path="/"
          element={
            <WebbitStudioHomePage
              web3formsAccessKey={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
            />
          }
        />
        <Route
          path="/privacy-policy"
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
          path="/terms-of-service"
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
          path="/cookie-policy"
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
          path="/accessibility-statement"
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
