import React from 'react';
import clsx from 'clsx';
import { Stat, STYLES } from '../../../utils';

interface StatsSectionProps {
  stats: readonly Stat[];
  addToRefs: (el: HTMLElement | null) => void;
}

export const StatsSection: React.FC<StatsSectionProps> = ({
  stats,
  addToRefs,
}) => {
  return (
    <section
      ref={addToRefs}
      className={clsx(STYLES.STATS_SECTION, STYLES.REVEAL)}
    >
      <div className={STYLES.CONTAINER}>
        <div className={STYLES.STATS_GRID}>
          {stats.map((stat, index) => (
            <div key={index}>
              <div className={STYLES.STAT_NUMBER}>{stat.number}</div>
              <div className={STYLES.STAT_LABEL}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
