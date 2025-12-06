import React from 'react';
import * as whySectionStyles from '../utils/styles';
import type { LocaleStrings } from '../../../shared';
import { WHY_SECTION } from '../utils';

interface WhySectionProps {
  content: LocaleStrings['whySection'];
}

export const WhySection: React.FC<WhySectionProps> = ({ content }) => {
  return (
    <section
      aria-labelledby={WHY_SECTION.HEADING_ID}
      className={whySectionStyles.section.default}
    >
      <div className={whySectionStyles.combined.sectionIntro}>
        <h2
          id={WHY_SECTION.HEADING_ID}
          className={whySectionStyles.typography.h2}
        >
          {content.title}
        </h2>
        <p className={whySectionStyles.combined.bodyWithSpacing}>
          {content.subtitle}
        </p>
      </div>

      <div className={whySectionStyles.layout.grid3Cols}>
        {content.benefits.map((item) => (
          <div key={item.title} className={whySectionStyles.card.default}>
            <h3 className={whySectionStyles.typography.h3Small}>
              {item.title}
            </h3>
            <p className={whySectionStyles.combined.cardTextWithSpacing}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
