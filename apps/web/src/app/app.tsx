import { WebbitStudioHomePage } from '@webbitstudio/pages';
import AnalyticsScript from '../components/analytics-script';

export function App() {
  return (
    <>
      <AnalyticsScript
        websiteId={import.meta.env.VITE_UMAMI_WEBSITE_ID || ''}
        src={import.meta.env.VITE_UMAMI_SCRIPT_URL}
      />
      <WebbitStudioHomePage
        web3formsAccessKey={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
      />
    </>
  );
}

export default App;
