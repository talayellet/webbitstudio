import * as packagesSectionStyles from '../utils/styles';
import type { LocaleStrings } from '../../../shared';
import { convertPriceRange, PACKAGES_SECTION } from '../utils';
import { usePriceConverter } from '@webbitstudio/data-access';

interface PackagesSectionProps {
  content: LocaleStrings['packagesSection'];
}

export const PackagesSection = ({ content }: PackagesSectionProps) => {
  const { convertPrice } = usePriceConverter();

  return (
    <section
      id={PACKAGES_SECTION.ID}
      aria-labelledby={PACKAGES_SECTION.HEADING_ID}
      className={packagesSectionStyles.section.default}
    >
      <div className={packagesSectionStyles.layout.sectionHeader}>
        <div>
          <h2
            id={PACKAGES_SECTION.HEADING_ID}
            className={packagesSectionStyles.typography.h2}
          >
            {content.title}
          </h2>
          <p className={packagesSectionStyles.combined.bodyWithMaxWidth}>
            {content.subtitle}
          </p>
        </div>
      </div>

      <div className={packagesSectionStyles.layout.grid3Cols}>
        {content.packages.map((pkg) => {
          const startingPrice = convertPrice(pkg.startingPrice);
          const typicalRange = convertPriceRange(
            pkg.typicalRange,
            convertPrice
          );

          return (
            <article
              key={pkg.name}
              className={packagesSectionStyles.card.package}
            >
              <div className={packagesSectionStyles.packageCard.contentWrapper}>
                <div className={packagesSectionStyles.packageCard.header}>
                  <h3 className={packagesSectionStyles.typography.h3Base}>
                    {pkg.name}
                  </h3>
                  <span className={packagesSectionStyles.typography.tagSmall}>
                    {pkg.highlight}
                  </span>
                </div>
                <p className={packagesSectionStyles.packageCard.tagline}>
                  {pkg.tagline}
                </p>
                <p className={packagesSectionStyles.packageCard.description}>
                  {pkg.description}
                </p>

                <ul className={packagesSectionStyles.list.features}>
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className={packagesSectionStyles.list.featureItem}
                    >
                      <span className={packagesSectionStyles.list.bullet} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={packagesSectionStyles.packageCard.pricing}>
                <p className={packagesSectionStyles.colors.slate[200]}>
                  <span
                    className={packagesSectionStyles.packageCard.priceLabel}
                  >
                    {content.pricing.startingFrom}{' '}
                  </span>
                  <data
                    value={startingPrice.original}
                    className={packagesSectionStyles.packageCard.priceAmount}
                  >
                    {startingPrice.converted}
                  </data>
                </p>
                <p className={packagesSectionStyles.packageCard.priceRange}>
                  {content.pricing.typicalRange} {typicalRange}
                </p>
                <p className={packagesSectionStyles.packageCard.priceNote}>
                  {content.pricing.priceNote}
                </p>
              </div>

              <div className={packagesSectionStyles.packageCard.cta}>
                <a
                  href={PACKAGES_SECTION.CONTACT_HREF}
                  className={packagesSectionStyles.button.light}
                >
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
