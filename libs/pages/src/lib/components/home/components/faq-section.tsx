import React, { useState, useCallback } from 'react';
import * as styles from '../utils/styles';
import type { LocaleStrings } from '../utils/locales';

interface FAQSectionProps {
  content: LocaleStrings['faqSection'];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ content }) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const handleToggle = useCallback((question: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(question)) {
        next.delete(question);
      } else {
        next.add(question);
      }
      return next;
    });
  }, []);

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
        {content.faqs.map((faq) => {
          const isOpen = openItems.has(faq.question);
          return (
            <details
              key={faq.question}
              className={styles.card.faq}
              open={isOpen}
              onToggle={() => handleToggle(faq.question)}
            >
              <summary className={styles.faq.summary} aria-expanded={isOpen}>
                <span>{faq.question}</span>
                <span className={styles.faq.icon}>+</span>
                <span className={styles.faq.iconOpen}>–</span>
              </summary>
              <p className={styles.faq.answer}>{faq.answer}</p>
            </details>
          );
        })}
      </div>
    </section>
  );
};
