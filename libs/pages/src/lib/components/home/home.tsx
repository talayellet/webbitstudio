import React from 'react';
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
} from './components';
import { useLocalizedContent, useCurrency, type Locale } from './hooks';
import {
  LanguageSwitcher,
  CurrencySwitcher,
} from '@webbitstudio/ui-components';
import { WEBBIT_STUDIO_LANG_OPTIONS } from '../../utils';
import { WEBBIT_STUDIO_CURRENCY_OPTIONS } from '@webbitstudio/shared-utils';

export const WebbitStudioHomePage: React.FC = () => {
  const { locale, setLocale, content } = useLocalizedContent();
  const { currency, setCurrency } = useCurrency();

  return (
    <div className={styles.layout.page}>
      <div className={styles.layout.container}>
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
            />
          }
          currentLanguage={locale}
          languages={WEBBIT_STUDIO_LANG_OPTIONS}
          onLanguageChange={(lang) => setLocale(lang as Locale)}
        />
        <Hero content={content.hero} />
        <TechStrip content={content.techStrip} />
        <PackagesSection content={content.packagesSection} />
        <ProcessSection content={content.processSection} />
        <WhySection content={content.whySection} />
        <PricingSection content={content.pricingSection} />
        <FAQSection content={content.faqSection} />
        <ContactSection content={content.contactSection} />
        <Footer content={content.footer} />
      </div>
    </div>
  );
};
