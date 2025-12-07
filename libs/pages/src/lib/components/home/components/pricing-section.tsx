import * as pricingSectionStyles from '../utils/styles';
import type { LocaleStrings } from '../../../shared';
import { convertPriceRange, PRICING_SECTION } from '../utils';
import { usePriceConverter } from '@webbitstudio/data-access';

interface PricingSectionProps {
  content: LocaleStrings['pricingSection'];
}

export const PricingSection = ({ content }: PricingSectionProps) => {
  const { convertPrice } = usePriceConverter();

  return (
    <section
      id={PRICING_SECTION.ID}
      aria-labelledby={PRICING_SECTION.HEADING_ID}
      className={pricingSectionStyles.section.withBorderLarge}
    >
      <div className={pricingSectionStyles.pricing.container}>
        <div>
          <h2
            id={PRICING_SECTION.HEADING_ID}
            className={pricingSectionStyles.typography.h2}
          >
            {content.title}
          </h2>
          <p className={pricingSectionStyles.combined.pricingIntro}>
            {content.intro}
          </p>
        </div>
      </div>

      <div className={pricingSectionStyles.pricing.list}>
        {content.packages.map((pkg) => {
          const startingPrice = convertPrice(pkg.startingPrice);
          const typicalRange = convertPriceRange(
            pkg.typicalRange,
            convertPrice
          );

          return (
            <div key={pkg.name}>
              <h3 className={pricingSectionStyles.typography.h3Pricing}>
                {pkg.name}
              </h3>
              <p className={pricingSectionStyles.pricing.item}>
                <span className={pricingSectionStyles.pricing.label}>
                  {content.labels.startingFrom}{' '}
                </span>
                <data
                  value={startingPrice.original}
                  className={pricingSectionStyles.pricing.amount}
                >
                  {startingPrice.converted}
                </data>{' '}
                <span
                  className={pricingSectionStyles.typography.bodyExtraSmall}
                >
                  ({content.labels.typicalRange} {typicalRange})
                </span>
              </p>
              <p className={pricingSectionStyles.pricing.note}>{pkg.note}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
