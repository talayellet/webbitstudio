import React from 'react';
import * as styles from '../utils/styles';
import type { LocaleStrings } from '../utils/locales';

interface FAQSectionProps {
  content: LocaleStrings['faqSection'];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ content }) => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={styles.section.default}
    >
      <div className={styles.combined.sectionIntro}>
        <h2 id="faq-heading" className={styles.typography.h2}>
          {content.title}
        </h2>
        <p className={styles.combined.bodyWithSpacing}>{content.subtitle}</p>
      </div>

      <div className={styles.list.spacing}>
        {content.faqs.map((faq) => (
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
