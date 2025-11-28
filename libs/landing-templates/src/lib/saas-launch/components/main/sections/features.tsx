import clsx from 'clsx';
import { STYLES } from '../../../utils';

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features: readonly Feature[];
  addToRefs: (el: HTMLElement | null) => void;
}

export const FeaturesSection = ({
  features,
  addToRefs,
}: FeaturesSectionProps) => {
  return (
    <section className={STYLES.FEATURES_SECTION} id="features">
      <div className={STYLES.CONTAINER}>
        <div
          ref={addToRefs}
          className={clsx(STYLES.FEATURES_GRID, STYLES.REVEAL)}
        >
          {features.map((feature, index) => (
            <div key={index} className={clsx(STYLES.FEATURE_CARD)}>
              <div
                className={clsx(STYLES.ICON_CONTAINER, STYLES.ICON_GRADIENT)}
              >
                {feature.icon}
              </div>
              <h3 className={STYLES.FEATURE_TITLE}>{feature.title}</h3>
              <p className={STYLES.FEATURE_DESCRIPTION}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
