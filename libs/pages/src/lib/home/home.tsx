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
import { useLocalizedContent } from './hooks';
import { LanguageSwitcher } from '@webbitstudio/landing-templates';

const LANGUAGE_OPTIONS = [
  { code: 'en' as const, flag: '🇺🇸', label: 'English' },
  { code: 'es' as const, flag: '🇪🇸', label: 'Español' },
  { code: 'fr' as const, flag: '🇫🇷', label: 'Français' },
];

export const WebbitStudioHomePage: React.FC = () => {
  const { locale, setLocale, content } = useLocalizedContent();

  return (
    <div className={styles.layout.page}>
      <div className={styles.layout.container}>
        <Header
          content={content.header}
          languageSwitcher={
            <LanguageSwitcher
              currentLanguage={locale}
              languages={LANGUAGE_OPTIONS}
              onLanguageChange={setLocale}
            />
          }
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
