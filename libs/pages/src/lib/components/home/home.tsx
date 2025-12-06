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
  useGeoFilteredCurrencies,
  captureException,
  LOG_LEVELS,
  GEOLOCATION_ERROR_MESSAGES,
  SENTRY_TAGS,
  DEFAULT_LANGUAGE_FILTERS,
  DEFAULT_CURRENCY_FILTERS,
} from '@webbitstudio/shared-utils';
import {
  LanguageSwitcher,
  CurrencySwitcher,
} from '@webbitstudio/ui-components';
import { WEBBIT_STUDIO_LANG_OPTIONS } from '../../utils';
import { MAIN_CONTENT_ID } from './utils/constants';

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
  const { currencies: filteredCurrencies } = useGeoFilteredCurrencies({
    currencies: WEBBIT_STUDIO_CURRENCY_OPTIONS,
    filters: DEFAULT_CURRENCY_FILTERS,
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
      {/* Skip to main content link for accessibility */}
      <a href={`#${MAIN_CONTENT_ID}`} className={styles.accessibility.skipLink}>
        {content.accessibility.skipToContent}
      </a>
      <Header
        content={content.header}
        languageSwitcher={
          <LanguageSwitcher
            currentLanguage={locale}
            languages={filteredLanguages}
            onLanguageChange={setLocale}
            styles={styles.header.languageSwitcherStyles}
            ariaLabel={`${content.accessibility.languageSwitcher} ${
              filteredLanguages.find((l) => l.code === locale)?.label
            }`}
          />
        }
        currencySwitcher={
          <CurrencySwitcher
            currentCurrency={currency}
            currencies={filteredCurrencies}
            onCurrencyChange={(curr) => setCurrency(curr, true)}
            styles={styles.header.desktopCurrencySwitcherStyles}
            ariaLabel={`${content.accessibility.currencySwitcher} ${
              filteredCurrencies.find((c) => c.code === currency)?.label
            }`}
          />
        }
        mobileCurrencySwitcher={
          <CurrencySwitcher
            currentCurrency={currency}
            currencies={filteredCurrencies}
            onCurrencyChange={(curr) => setCurrency(curr, true)}
            styles={styles.header.mobileCurrencySwitcherStyles}
            ariaLabel={`${content.accessibility.currencySwitcher} ${
              filteredCurrencies.find((c) => c.code === currency)?.label
            }`}
          />
        }
        currentLanguage={locale}
        languages={filteredLanguages}
        onLanguageChange={(lang) => setLocale(lang as Locale)}
      />
      <div id={MAIN_CONTENT_ID} className={styles.layout.container}>
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
