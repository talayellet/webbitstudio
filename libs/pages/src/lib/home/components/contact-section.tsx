import React from 'react';
import * as styles from '../utils/styles';

export const ContactSection: React.FC = () => {
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
              Ready to start your website?
            </h2>
            <p className={styles.contact.intro}>
              Tell us a bit about your business, your location, and what kind of
              website you need. We'll get back with a tailored quote and
              suggested package.
            </p>
            <ul className={styles.list.contactPoints}>
              <li>• Landing page, business website, or Premium CMS</li>
              <li>• Regional pricing for Israel, India, Europe, US & Canada</li>
              <li>• Most projects completed within 3–7 days</li>
            </ul>
          </div>

          <form className={styles.form.root}>
            <div className={styles.form.grid}>
              <div className={styles.form.fieldContainer}>
                <label className={styles.typography.label}>Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className={styles.form.input}
                />
              </div>
              <div className={styles.form.fieldContainer}>
                <label className={styles.typography.label}>Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className={styles.form.input}
                />
              </div>
            </div>

            <div className={styles.form.fieldContainer}>
              <label className={styles.typography.label}>
                Country / Region
              </label>
              <input
                type="text"
                placeholder="Israel, India, Germany, US, Canada..."
                className={styles.form.input}
              />
            </div>

            <div className={styles.form.fieldContainer}>
              <label className={styles.typography.label}>
                What are you looking for?
              </label>
              <select className={styles.form.select} defaultValue="">
                <option value="" disabled>
                  Select a package
                </option>
                <option>Landing Page Package</option>
                <option>Pro Business Website</option>
                <option>Premium Website + Admin Panel (CMS)</option>
                <option>Not sure yet / need help deciding</option>
              </select>
            </div>

            <div className={styles.form.fieldContainer}>
              <label className={styles.typography.label}>Project details</label>
              <textarea
                placeholder="Tell us about your business, pages you need, and any deadlines or special requirements."
                rows={4}
                className={styles.form.textarea}
              />
            </div>

            <button type="button" className={styles.button.lightLarge}>
              Submit inquiry
            </button>

            <p className={styles.form.note}>
              Prefer WhatsApp or a quick call? We can share direct contact
              details in our reply.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
