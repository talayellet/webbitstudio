import clsx from 'clsx';
import { STYLES } from '../utils';

export interface Stat {
  number: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
  addToRefs: (el: HTMLElement | null) => void;
}

export const StatsSection = ({ stats, addToRefs }: StatsSectionProps) => {
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
