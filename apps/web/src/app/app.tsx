import { SaasLaunchRouter, LOCALES } from '@webbitstudio/landing-templates';

export function App() {
  return (
    <SaasLaunchRouter
      initialLocale={LOCALES.EN}
      web3formsAccessKey={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
    />
  );
}

export default App;
