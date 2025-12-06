import React from 'react';
import * as techStripStyles from '../utils/styles';
import type { LocaleStrings } from '../../../shared';

interface TechStripProps {
  content: LocaleStrings['techStrip'];
}

export const TechStrip: React.FC<TechStripProps> = ({ content }) => {
  return (
    <section
      className={techStripStyles.techStrip.root}
      aria-label={content.title}
    >
      <div className={techStripStyles.techStrip.container}>
        <p>{content.title}</p>
        <div className={techStripStyles.techStrip.badges}>
          {content.badges.map((badge) => (
            <span key={badge} className={techStripStyles.typography.techBadge}>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
