import React, { useState, useCallback } from 'react';
import * as faqSectionStyles from '../utils/styles';
import type { LocaleStrings } from '../../../shared';
import { FAQ_SECTION } from '../utils';

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
      id={FAQ_SECTION.ID}
      aria-labelledby={FAQ_SECTION.HEADING_ID}
      className={faqSectionStyles.section.default}
    >
      <div className={faqSectionStyles.combined.sectionIntro}>
        <h2
          id={FAQ_SECTION.HEADING_ID}
          className={faqSectionStyles.typography.h2}
        >
          {content.title}
        </h2>
        <p className={faqSectionStyles.combined.bodyWithSpacing}>
          {content.subtitle}
        </p>
      </div>

      <div className={faqSectionStyles.list.spacing}>
        {content.faqs.map((faq) => {
          const isOpen = openItems.has(faq.question);
          return (
            <details
              key={faq.question}
              className={faqSectionStyles.card.faq}
              open={isOpen}
              onToggle={() => handleToggle(faq.question)}
            >
              <summary
                className={faqSectionStyles.faq.summary}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span className={faqSectionStyles.faq.icon}>
                  {FAQ_SECTION.ICON_COLLAPSED}
                </span>
                <span className={faqSectionStyles.faq.iconOpen}>
                  {FAQ_SECTION.ICON_EXPANDED}
                </span>
              </summary>
              <p className={faqSectionStyles.faq.answer}>{faq.answer}</p>
            </details>
          );
        })}
      </div>
    </section>
  );
};
