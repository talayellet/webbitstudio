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

export const WebbitStudioHomePage: React.FC = () => {
  return (
    <div className={styles.layout.page}>
      {/* Page wrapper */}
      <div className={styles.layout.container}>
        <Header />
        <Hero />
        <TechStrip />
        <PackagesSection />
        <ProcessSection />
        <WhySection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};
