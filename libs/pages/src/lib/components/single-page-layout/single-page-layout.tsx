import type { ReactNode } from 'react';
import { Header, Footer, MAIN_CONTENT_ID } from '../home';
import { useLocalizedContent, WEBBIT_STUDIO_LANG_OPTIONS } from '../../shared';
import {
  useCurrencyContext,
  WEBBIT_STUDIO_CURRENCY_OPTIONS,
  useGeoFilteredLanguages,
  useGeoFilteredCurrencies,
  DEFAULT_LANGUAGE_FILTERS,
  DEFAULT_CURRENCY_FILTERS,
  type CountryCode,
} from '@webbitstudio/shared-utils';
import {
  LanguageSwitcher,
  CurrencySwitcher,
  CookieConsentBanner,
} from '@webbitstudio/ui-components';
import * as homeStyles from '../home/utils/styles';
import * as singlePageLayoutstyles from '../../shared/styles/single-page-layout-styles';

interface SinglePageLayoutProps {
  children: ReactNode;
}

export const SinglePageLayout = ({ children }: SinglePageLayoutProps) => {
  const { locale, setLocale, content, isRTL, isLocaleReady } =
    useLocalizedContent();
  const { currency, setCurrency } = useCurrencyContext();

  const { languages: filteredLanguages } = useGeoFilteredLanguages({
    languages: WEBBIT_STUDIO_LANG_OPTIONS,
    filters: DEFAULT_LANGUAGE_FILTERS,
  });
  const { currencies: filteredCurrencies } = useGeoFilteredCurrencies({
    currencies: WEBBIT_STUDIO_CURRENCY_OPTIONS,
    filters: DEFAULT_CURRENCY_FILTERS,
  });

  return (
    <div className={homeStyles.layout.page} dir={isRTL ? 'rtl' : 'ltr'}>
      <a
        href={`#${MAIN_CONTENT_ID}`}
        className={homeStyles.accessibility.skipLink}
      >
        {content.accessibility.skipToContent}
      </a>

      <Header
        content={content.header}
        isRTL={isRTL}
        languageSwitcher={
          <LanguageSwitcher
            currentLanguage={locale}
            languages={filteredLanguages}
            onLanguageChange={setLocale}
            styles={homeStyles.header.languageSwitcherStyles}
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
            styles={homeStyles.header.desktopCurrencySwitcherStyles}
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
            styles={homeStyles.header.mobileCurrencySwitcherStyles}
            ariaLabel={`${content.accessibility.currencySwitcher} ${
              filteredCurrencies.find((c) => c.code === currency)?.label
            }`}
          />
        }
        currentLanguage={locale}
        languages={filteredLanguages}
        onLanguageChange={(lang) => setLocale(lang as CountryCode)}
      />

      <main
        id={MAIN_CONTENT_ID}
        className={`${homeStyles.layout.container} ${singlePageLayoutstyles.mainContent}`}
        key={locale}
      >
        {isLocaleReady ? children : null}
      </main>

      <Footer content={content.footer} />

      <CookieConsentBanner
        message={content.cookieConsent.message}
        acceptButtonText={content.cookieConsent.acceptButton}
        rejectButtonText={content.cookieConsent.rejectButton}
        customizeButtonText={content.cookieConsent.customizeButton}
        savePreferencesButtonText={content.cookieConsent.savePreferencesButton}
        closeButtonAriaLabel={content.cookieConsent.closeButton}
        preferencesTitle={content.cookieConsent.preferencesTitle}
        categoriesGroupLabel={content.cookieConsent.categoriesGroupLabel}
        categories={content.cookieConsent.categories}
        privacyPolicyText={content.cookieConsent.privacyPolicyLink}
        privacyPolicyLink="/privacy-policy"
      />
    </div>
  );
};
