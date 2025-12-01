import React from 'react';
import * as styles from '../utils/styles';
import type { LocaleStrings } from '../utils/locales';

interface ContactSectionProps {
  content: LocaleStrings['contactSection'];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ content }) => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={styles.section.contact}
    >
      <div className={styles.card.contact}>
        <div className={styles.contact.grid}>
          <div>
            <h2 id="contact-heading" className={styles.typography.h2}>
              {content.title}
            </h2>
            <p className={styles.contact.intro}>{content.intro}</p>
            <ul className={styles.list.contactPoints}>
              {content.contactPoints.map((point, index) => (
                <li key={index}>• {point}</li>
              ))}
            </ul>
          </div>

          <form className={styles.form.root}>
            <div className={styles.form.grid}>
              <div className={styles.form.fieldContainer}>
                <label className={styles.typography.label}>
                  {content.form.name.label}
                </label>
                <input
                  type="text"
                  placeholder={content.form.name.placeholder}
                  className={styles.form.input}
                />
              </div>
              <div className={styles.form.fieldContainer}>
                <label className={styles.typography.label}>
                  {content.form.email.label}
                </label>
                <input
                  type="email"
                  placeholder={content.form.email.placeholder}
                  className={styles.form.input}
                />
              </div>
            </div>

            <div className={styles.form.fieldContainer}>
              <label className={styles.typography.label}>
                {content.form.country.label}
              </label>
              <input
                type="text"
                placeholder={content.form.country.placeholder}
                className={styles.form.input}
              />
            </div>

            <div className={styles.form.fieldContainer}>
              <label className={styles.typography.label}>
                {content.form.package.label}
              </label>
              <select className={styles.form.select} defaultValue="">
                <option value="" disabled>
                  {content.form.package.placeholder}
                </option>
                {content.form.package.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className={styles.form.fieldContainer}>
              <label className={styles.typography.label}>
                {content.form.details.label}
              </label>
              <textarea
                placeholder={content.form.details.placeholder}
                rows={4}
                className={styles.form.textarea}
              />
            </div>

            <button type="button" className={styles.button.lightLarge}>
              {content.form.submit}
            </button>

            <p className={styles.form.note}>{content.form.note}</p>
          </form>
        </div>
      </div>
    </section>
  );
};
