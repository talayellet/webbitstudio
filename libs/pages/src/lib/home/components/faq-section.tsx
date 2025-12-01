import React from 'react';
import { faqs } from '../utils';
import * as styles from '../utils/styles';

export const FAQSection: React.FC = () => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={styles.section.default}
    >
      <div className={styles.combined.sectionIntro}>
        <h2 id="faq-heading" className={styles.typography.h2}>
          Frequently asked questions
        </h2>
        <p className={styles.combined.bodyWithSpacing}>
          If you don't see your question here, you can always reach out directly
          and we'll be happy to help.
        </p>
      </div>

      <div className={styles.list.spacing}>
        {faqs.map((faq) => (
          <details key={faq.question} className={styles.card.faq}>
            <summary className={styles.faq.summary}>
              <span>{faq.question}</span>
              <span className={styles.faq.icon}>+</span>
              <span className={styles.faq.iconOpen}>–</span>
            </summary>
            <p className={styles.faq.answer}>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};
