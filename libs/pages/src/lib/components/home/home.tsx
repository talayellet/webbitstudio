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
  useHashNavigation,
  useGeoFilteredLanguages,
  captureException,
  LOG_LEVELS,
  GEOLOCATION_ERROR_MESSAGES,
  SENTRY_TAGS,
  DEFAULT_LANGUAGE_FILTERS,
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
  const { locale, setLocale, content, isRTL } = useLocalizedContent();
  const { currency, setCurrency } = useCurrencyContext();
  const { isLoading, error } = usePriceConverter();
  const { languages: filteredLanguages, error: geoError } =
    useGeoFilteredLanguages({
      languages: WEBBIT_STUDIO_LANG_OPTIONS,
      filters: DEFAULT_LANGUAGE_FILTERS,
    });

  // Log geolocation errors to Sentry
  if (geoError) {
    captureException(geoError, {
      message: GEOLOCATION_ERROR_MESSAGES.DETECTION_FAILED,
      level: LOG_LEVELS.WARNING,
      tags: { feature: SENTRY_TAGS.FEATURE.GEOLOCATION },
    });
  }

  useHashNavigation();

  return (
    <div className={styles.layout.page} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header
        content={content.header}
        languageSwitcher={
          <LanguageSwitcher
            currentLanguage={locale}
            languages={filteredLanguages}
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
        languages={filteredLanguages}
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
