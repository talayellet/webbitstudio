import { Routes, Route } from 'react-router-dom';
import {
  WebbitStudioHomePage,
  SinglePageLayout,
  PrivacyPolicyPage,
  TermsOfServicePage,
  CookiePolicyPage,
} from '@webbitstudio/pages';
import { CurrencyProvider } from '@webbitstudio/shared-utils';
import AnalyticsScript from '../components/analytics-script';

const COMPANY_NAME = 'Webbit Studio';
const COMPANY_EMAIL = 'privacy@webbitstudio.com';

export function App() {
  return (
    <CurrencyProvider>
      <AnalyticsScript
        websiteId={import.meta.env.VITE_UMAMI_WEBSITE_ID || ''}
        src={import.meta.env.VITE_UMAMI_SCRIPT_URL}
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
                companyEmail={COMPANY_EMAIL}
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
                companyEmail={COMPANY_EMAIL}
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
                companyEmail={COMPANY_EMAIL}
              />
            </SinglePageLayout>
          }
        />
      </Routes>
    </CurrencyProvider>
  );
}

export default App;
