import React from 'react';
import { packages } from '../utils';
import * as styles from '../utils/styles';

export const PackagesSection: React.FC = () => {
  return (
    <section
      id="packages"
      aria-labelledby="packages-heading"
      className={styles.section.default}
    >
      <div className={styles.layout.sectionHeader}>
        <div>
          <h2 id="packages-heading" className={styles.typography.h2}>
            Packages for every stage of your business
          </h2>
          <p className={styles.combined.bodyWithMaxWidth}>
            From simple landing pages to full websites with a self-managed admin
            panel, choose the option that fits your current needs.
          </p>
        </div>
        <p className={styles.typography.bodyExtraSmall}>
          Most projects completed in 3–7 days.
        </p>
      </div>

      <div className={styles.layout.grid3Cols}>
        {packages.map((pkg) => (
          <article key={pkg.name} className={styles.card.package}>
            <div className={styles.packageCard.header}>
              <h3 className={styles.typography.h3Base}>{pkg.name}</h3>
              <span className={styles.typography.tagSmall}>
                {pkg.highlight}
              </span>
            </div>
            <p className={styles.packageCard.tagline}>{pkg.tagline}</p>
            <p className={styles.packageCard.description}>{pkg.description}</p>

            <ul className={styles.list.features}>
              {pkg.features.map((feature) => (
                <li key={feature} className={styles.list.featureItem}>
                  <span className={styles.list.bullet} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className={styles.packageCard.pricing}>
              <p className={styles.colors.slate[200]}>
                <span className={styles.packageCard.priceLabel}>
                  Starting from{' '}
                </span>
                <span className={styles.packageCard.priceAmount}>
                  {pkg.startingPrice}
                </span>
              </p>
              <p className={styles.packageCard.priceRange}>
                Typical range: {pkg.typicalRange}
              </p>
              <p className={styles.packageCard.priceNote}>
                Final quote depends on region &amp; project complexity.
              </p>
            </div>

            <div className={styles.packageCard.cta}>
              <a href="#contact" className={styles.button.light}>
                Get a tailored quote
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
