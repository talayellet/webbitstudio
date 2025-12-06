import React from 'react';
import * as processSectionStyles from '../utils/styles';
import type { LocaleStrings } from '../../../shared';
import { PROCESS_SECTION } from '../utils';

interface ProcessSectionProps {
  content: LocaleStrings['processSection'];
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ content }) => {
  return (
    <section
      id={PROCESS_SECTION.ID}
      aria-labelledby={PROCESS_SECTION.HEADING_ID}
      className={processSectionStyles.section.withBorder}
    >
      <div className={processSectionStyles.combined.sectionIntro}>
        <h2
          id={PROCESS_SECTION.HEADING_ID}
          className={processSectionStyles.typography.h2}
        >
          {content.title}
        </h2>
        <p className={processSectionStyles.combined.bodyWithSpacing}>
          {content.subtitle}
        </p>
      </div>

      <div className={processSectionStyles.layout.grid4Cols}>
        {content.steps.map((item) => (
          <div key={item.number} className={processSectionStyles.card.process}>
            <div className={processSectionStyles.processStep.header}>
              <span className={processSectionStyles.processStep.badge}>
                {item.number}
              </span>
              <h3 className={processSectionStyles.typography.h3Small}>
                {item.title}
              </h3>
            </div>
            <p className={processSectionStyles.processStep.text}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
