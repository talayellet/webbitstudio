import React from 'react';
import * as styles from '../utils/styles';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '1',
      title: 'Tell us what you need',
      text: "Share your business, goals, and what kind of website you're looking for.",
    },
    {
      step: '2',
      title: 'We design it',
      text: 'We create a clean, modern layout tailored to your brand and audience.',
    },
    {
      step: '3',
      title: 'We build & deploy',
      text: 'We handle development, hosting, and deployment so everything just works.',
    },
    {
      step: '4',
      title: 'You go live - fast',
      text: 'We launch your site, and you start sharing it with your customers.',
    },
  ];

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className={styles.section.withBorder}
    >
      <div className={styles.combined.sectionIntro}>
        <h2 id="process-heading" className={styles.typography.h2}>
          A simple process from idea to live website
        </h2>
        <p className={styles.combined.bodyWithSpacing}>
          We keep things straightforward so you always know what's next. Most
          projects follow this four-step flow.
        </p>
      </div>

      <div className={styles.layout.grid4Cols}>
        {steps.map((item) => (
          <div key={item.step} className={styles.card.process}>
            <div className={styles.processStep.header}>
              <span className={styles.processStep.badge}>{item.step}</span>
              <h3 className={styles.typography.h3Small}>{item.title}</h3>
            </div>
            <p className={styles.processStep.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
