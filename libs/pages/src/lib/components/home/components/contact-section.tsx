import React, { useState } from 'react';
import * as styles from '../utils/styles';
import type { LocaleStrings } from '../utils/locales';
import { CustomSelect } from '@webbitstudio/ui-components';

interface ContactSectionProps {
  content: LocaleStrings['contactSection'];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ content }) => {
  const [selectedPackage, setSelectedPackage] = useState('');

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
                <label
                  htmlFor="contact-name"
                  className={styles.typography.label}
                >
                  {content.form.name.label}
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder={content.form.name.placeholder}
                  className={styles.form.input}
                  required
                  aria-required="true"
                />
              </div>
              <div className={styles.form.fieldContainer}>
                <label
                  htmlFor="contact-email"
                  className={styles.typography.label}
                >
                  {content.form.email.label}
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder={content.form.email.placeholder}
                  className={styles.form.input}
                  required
                  aria-required="true"
                />
              </div>
            </div>

            <div className={styles.form.fieldContainer}>
              <label
                htmlFor="contact-country"
                className={styles.typography.label}
              >
                {content.form.country.label}
              </label>
              <input
                type="text"
                id="contact-country"
                name="country"
                placeholder={content.form.country.placeholder}
                className={styles.form.input}
              />
            </div>

            <CustomSelect
              value={selectedPackage}
              onChange={setSelectedPackage}
              placeholder={content.form.package.placeholder}
              options={content.form.package.options}
              label={content.form.package.label}
              fieldContainerClassName={styles.form.fieldContainer}
              labelClassName={styles.typography.label}
              wrapperClassName={styles.customSelect.wrapper}
              triggerClassName={styles.customSelect.trigger}
              iconClassName={styles.customSelect.icon}
              menuClassName={styles.customSelect.menu}
              optionClassName={styles.customSelect.option}
              optionSelectedClassName={styles.customSelect.optionSelected}
            />

            <div className={styles.form.fieldContainer}>
              <label
                htmlFor="contact-details"
                className={styles.typography.label}
              >
                {content.form.details.label}
              </label>
              <textarea
                id="contact-details"
                name="details"
                placeholder={content.form.details.placeholder}
                rows={4}
                className={styles.form.textarea}
              />
            </div>

            <button type="submit" className={styles.button.lightLarge}>
              {content.form.submit}
            </button>

            <p className={styles.form.note}>{content.form.note}</p>
          </form>
        </div>
      </div>
    </section>
  );
};
