import React from 'react';
import * as styles from '../utils/styles';

export const WhySection: React.FC = () => {
  const benefits = [
    {
      title: 'Fast delivery',
      text: 'Most landing pages are finished in 2–4 days. Pro and Premium websites typically ship within a week.',
    },
    {
      title: 'Global-friendly pricing',
      text: 'We serve clients in Israel, India, Europe, the US & Canada, and adjust final quotes based on region and business size.',
    },
    {
      title: 'Modern technology',
      text: 'React, TypeScript, Tailwind, and modern hosting platforms keep your site fast and reliable.',
    },
    {
      title: 'Designed for conversion',
      text: 'Each page is structured to guide visitors toward contacting you or using your service.',
    },
    {
      title: 'Flexible content management',
      text: 'Choose simple one-time build packages, or go Premium and manage your own content through a custom admin panel.',
    },
    {
      title: 'Clear communication',
      text: 'Reach us via email, WhatsApp, or video call. We keep you updated from start to launch.',
    },
  ];

  return (
    <section aria-labelledby="why-heading" className={styles.section.default}>
      <div className={styles.combined.sectionIntro}>
        <h2 id="why-heading" className={styles.typography.h2}>
          Why Webbit Studio?
        </h2>
        <p className={styles.combined.bodyWithSpacing}>
          We focus on modern technology, clean design, and timelines that
          actually work for busy business owners.
        </p>
      </div>

      <div className={styles.layout.grid3Cols}>
        {benefits.map((item) => (
          <div key={item.title} className={styles.card.default}>
            <h3 className={styles.typography.h3Small}>{item.title}</h3>
            <p className={styles.combined.cardTextWithSpacing}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
