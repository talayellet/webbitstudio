import React from 'react';
import clsx from 'clsx';
import { Feature, STYLES } from '../../../utils';

interface FeaturesSectionProps {
  features: readonly Feature[];
  addToRefs: (el: HTMLElement | null) => void;
  title?: string;
  sectionId?: string;
  className?: string;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  features,
  addToRefs,
  title,
  sectionId = 'features',
  className,
}) => {
  return (
    <section
      className={clsx(STYLES.FEATURES_SECTION, className)}
      id={sectionId}
    >
      <div className={STYLES.CONTAINER}>
        {title && (
          <div className={STYLES.FEATURES_SECTION_HEADER}>
            <h2 className={clsx(STYLES.FEATURES_SECTION_TITLE)}>{title}</h2>
          </div>
        )}
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
