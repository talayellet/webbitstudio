import React from 'react';
import * as styles from '../utils/styles';
import type { LocaleStrings } from '../utils/locales';
import { usePriceConverter } from '../hooks';

interface PackagesSectionProps {
  content: LocaleStrings['packagesSection'];
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  content,
}) => {
  const { convertPrice } = usePriceConverter();

  return (
    <section
      id="packages"
      aria-labelledby="packages-heading"
      className={styles.section.default}
    >
      <div className={styles.layout.sectionHeader}>
        <div>
          <h2 id="packages-heading" className={styles.typography.h2}>
            {content.title}
          </h2>
          <p className={styles.combined.bodyWithMaxWidth}>{content.subtitle}</p>
        </div>
      </div>

      <div className={styles.layout.grid3Cols}>
        {content.packages.map((pkg) => {
          const startingPrice = convertPrice(pkg.startingPrice);
          const typicalRange = pkg.typicalRange
            .split('–')
            .map((price) => convertPrice(price.trim()).converted)
            .join('–');

          return (
            <article key={pkg.name} className={styles.card.package}>
              <div className={styles.packageCard.contentWrapper}>
                <div className={styles.packageCard.header}>
                  <h3 className={styles.typography.h3Base}>{pkg.name}</h3>
                  <span className={styles.typography.tagSmall}>
                    {pkg.highlight}
                  </span>
                </div>
                <p className={styles.packageCard.tagline}>{pkg.tagline}</p>
                <p className={styles.packageCard.description}>
                  {pkg.description}
                </p>

                <ul className={styles.list.features}>
                  {pkg.features.map((feature) => (
                    <li key={feature} className={styles.list.featureItem}>
                      <span className={styles.list.bullet} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.packageCard.pricing}>
                <p className={styles.colors.slate[200]}>
                  <span className={styles.packageCard.priceLabel}>
                    {content.pricing.startingFrom}{' '}
                  </span>
                  <span className={styles.packageCard.priceAmount}>
                    {startingPrice.converted}
                  </span>
                </p>
                <p className={styles.packageCard.priceRange}>
                  {content.pricing.typicalRange} {typicalRange}
                </p>
                <p className={styles.packageCard.priceNote}>
                  {content.pricing.priceNote}
                </p>
              </div>

              <div className={styles.packageCard.cta}>
                <a href="#contact" className={styles.button.light}>
                  {content.pricing.cta}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
