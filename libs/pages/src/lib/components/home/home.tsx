import * as styles from './utils/styles';
import {
  Header,
  Hero,
  TechStrip,
  PackagesSection,
  ProcessSection,
  WhySection,
  PricingSection,
  FAQSection,
  ContactSection,
  Footer,
  PriceConversionNotice,
} from './components';
import { useLocalizedContent, usePriceConverter, type Locale } from './hooks';
import {
  CurrencyProvider,
  useCurrencyContext,
  WEBBIT_STUDIO_CURRENCY_OPTIONS,
} from '@webbitstudio/shared-utils';
import {
  LanguageSwitcher,
  CurrencySwitcher,
} from '@webbitstudio/ui-components';
import { WEBBIT_STUDIO_LANG_OPTIONS } from '../../utils';

export interface WebbitStudioHomePageProps {
  /**
   * Web3Forms access key for contact form submissions (get free key at https://web3forms.com)
   */
  web3formsAccessKey?: string;
}

const HomePageContent = ({ web3formsAccessKey }: WebbitStudioHomePageProps) => {
  const { locale, setLocale, content } = useLocalizedContent();
  const { currency, setCurrency } = useCurrencyContext();
  const { isLoading, error } = usePriceConverter();

  return (
    <div className={styles.layout.page}>
      <Header
        content={content.header}
        languageSwitcher={
          <LanguageSwitcher
            currentLanguage={locale}
            languages={WEBBIT_STUDIO_LANG_OPTIONS}
            onLanguageChange={setLocale}
            styles={styles.header.languageSwitcherStyles}
          />
        }
        currencySwitcher={
          <CurrencySwitcher
            currentCurrency={currency}
            currencies={WEBBIT_STUDIO_CURRENCY_OPTIONS}
            onCurrencyChange={setCurrency}
            styles={styles.header.desktopCurrencySwitcherStyles}
          />
        }
        mobileCurrencySwitcher={
          <CurrencySwitcher
            currentCurrency={currency}
            currencies={WEBBIT_STUDIO_CURRENCY_OPTIONS}
            onCurrencyChange={setCurrency}
            styles={styles.header.mobileCurrencySwitcherStyles}
          />
        }
        currentLanguage={locale}
        languages={WEBBIT_STUDIO_LANG_OPTIONS}
        onLanguageChange={(lang) => setLocale(lang as Locale)}
      />
      <div className={styles.layout.container}>
        <PriceConversionNotice
          isLoading={isLoading}
          error={error}
          currency={currency}
          content={content.priceConversionNotice}
        />
        <Hero content={content.hero} />
        <TechStrip content={content.techStrip} />
        <PackagesSection content={content.packagesSection} />
        <ProcessSection content={content.processSection} />
        <WhySection content={content.whySection} />
        <PricingSection content={content.pricingSection} />
        <FAQSection content={content.faqSection} />
        <ContactSection
          content={content.contactSection}
          web3formsAccessKey={web3formsAccessKey}
        />
        <Footer content={content.footer} />
      </div>
    </div>
  );
};

export const WebbitStudioHomePage = (props: WebbitStudioHomePageProps) => {
  return (
    <CurrencyProvider>
      <HomePageContent {...props} />
    </CurrencyProvider>
  );
};
