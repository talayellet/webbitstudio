import React from 'react';
import * as styles from '../utils/styles';
import type { LocaleStrings } from '../utils/locales';

interface PricingSectionProps {
  content: LocaleStrings['pricingSection'];
}

export const PricingSection: React.FC<PricingSectionProps> = ({ content }) => {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className={styles.section.withBorderLarge}
    >
      <div className={styles.pricing.container}>
        <div>
          <h2 id="pricing-heading" className={styles.typography.h2}>
            {content.title}
          </h2>
          <p className={styles.combined.pricingIntro}>{content.intro}</p>
        </div>
      </div>

      <div className={styles.pricing.list}>
        {content.packages.map((pkg) => (
          <div key={pkg.name}>
            <h3 className={styles.typography.h3Pricing}>{pkg.name}</h3>
            <p className={styles.pricing.item}>
              <span className={styles.pricing.label}>Starting from </span>
              <span className={styles.pricing.amount}>
                {pkg.startingPrice}
              </span>{' '}
              <span className={styles.typography.bodyExtraSmall}>
                (typical range: {pkg.typicalRange})
              </span>
            </p>
            <p className={styles.pricing.note}>{pkg.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
