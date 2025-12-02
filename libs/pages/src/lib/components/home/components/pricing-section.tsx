import React from 'react';
import * as styles from '../utils/styles';
import type { LocaleStrings } from '../utils/locales';
import { usePriceConverter } from '../hooks';

interface PricingSectionProps {
  content: LocaleStrings['pricingSection'];
}

export const PricingSection: React.FC<PricingSectionProps> = ({ content }) => {
  const { convertPrice } = usePriceConverter();

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
        {content.packages.map((pkg) => {
          const startingPrice = convertPrice(pkg.startingPrice);
          const typicalRange = pkg.typicalRange
            .split('–')
            .map((price) => convertPrice(price.trim()).converted)
            .join('–');

          return (
            <div key={pkg.name}>
              <h3 className={styles.typography.h3Pricing}>{pkg.name}</h3>
              <p className={styles.pricing.item}>
                <span className={styles.pricing.label}>
                  {content.labels.startingFrom}{' '}
                </span>
                <span className={styles.pricing.amount}>
                  {startingPrice.converted}
                </span>{' '}
                <span className={styles.typography.bodyExtraSmall}>
                  ({content.labels.typicalRange} {typicalRange})
                </span>
              </p>
              <p className={styles.pricing.note}>{pkg.note}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
