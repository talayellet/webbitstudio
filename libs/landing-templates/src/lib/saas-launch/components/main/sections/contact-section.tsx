import { useState } from 'react';
import {
  ContactInfo,
  DEFAULT_CONTACT_INFO,
  STYLES,
  LocaleStrings,
  DEFAULT_LOCALE_STRINGS,
} from '../../../utils';

const cx = (...classes: (string | readonly string[])[]) =>
  classes.flat().join(' ');

export interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  contactInfo?: ContactInfo;
  formTitle?: string;
  locale?: LocaleStrings;
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

export const DefaultContactSection = ({
  title,
  subtitle,
  contactInfo = DEFAULT_CONTACT_INFO,
  formTitle,
  locale,
  onSubmit,
}: ContactSectionProps = {}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const info = { ...DEFAULT_CONTACT_INFO, ...contactInfo };
  const localeStrings = locale ?? DEFAULT_LOCALE_STRINGS;

  // Always use locale strings as primary source, then fall back to props
  const displayTitle = title ?? localeStrings.contact.title;
  const displaySubtitle = subtitle ?? localeStrings.contact.subtitle;
  const displayFormTitle = formTitle ?? localeStrings.contact.formTitle;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    } else {
      // Default behavior if no onSubmit handler provided
      console.log('Form submitted:', formData);
      alert(localeStrings.contact.form.successMessage);
    }
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={STYLES.CONTACT_SECTION}>
      <div className={STYLES.CONTAINER}>
        <div className={STYLES.CONTACT_SECTION_HEADER}>
          <h2 className={STYLES.CONTACT_SECTION_TITLE}>{displayTitle}</h2>
          <p className={STYLES.CONTACT_SECTION_SUBTITLE}>{displaySubtitle}</p>
        </div>

        <div className={STYLES.CONTACT_GRID}>
          {/* Contact Information */}
          <div className={STYLES.CONTACT_INFO_WRAPPER}>
            <div>
              <h3 className={STYLES.CONTACT_INFO_TITLE}>
                {localeStrings.contact.sectionTitle}
              </h3>
              <div className={STYLES.CONTACT_INFO_LIST}>
                <div className={STYLES.CONTACT_INFO_ITEM}>
                  <div
                    className={cx(
                      STYLES.CONTACT_INFO_ICON,
                      STYLES.ICON_GRADIENT
                    )}
                  >
                    <span
                      className={STYLES.ICON_TEXT}
                      role="img"
                      aria-label={localeStrings.aria.location}
                    >
                      📍
                    </span>
                  </div>
                  <div>
                    <h4 className={STYLES.CONTACT_INFO_LABEL}>
                      {localeStrings.contact.labels.address}
                    </h4>
                    <p className={STYLES.CONTACT_INFO_TEXT}>
                      {info.address?.line1}
                      {info.address?.line2 && (
                        <>
                          <br />
                          {info.address.line2}
                        </>
                      )}
                      {info.address?.line3 && (
                        <>
                          <br />
                          {info.address.line3}
                        </>
                      )}
                    </p>
                  </div>
                </div>

                <div className={STYLES.CONTACT_INFO_ITEM}>
                  <div
                    className={cx(
                      STYLES.CONTACT_INFO_ICON,
                      STYLES.ICON_GRADIENT
                    )}
                  >
                    <span
                      className={STYLES.ICON_TEXT}
                      role="img"
                      aria-label={localeStrings.aria.email}
                    >
                      📧
                    </span>
                  </div>
                  <div>
                    <h4 className={STYLES.CONTACT_INFO_LABEL}>
                      {localeStrings.contact.labels.email}
                    </h4>
                    <a
                      href={`mailto:${info.email}`}
                      className={cx(STYLES.CONTACT_INFO_LINK)}
                    >
                      {info.email}
                    </a>
                  </div>
                </div>

                <div className={STYLES.CONTACT_INFO_ITEM}>
                  <div
                    className={cx(
                      STYLES.CONTACT_INFO_ICON,
                      STYLES.ICON_GRADIENT
                    )}
                  >
                    <span
                      className={STYLES.ICON_TEXT}
                      role="img"
                      aria-label={localeStrings.aria.phone}
                    >
                      📞
                    </span>
                  </div>
                  <div>
                    <h4 className={STYLES.CONTACT_INFO_LABEL}>
                      {localeStrings.contact.labels.phone}
                    </h4>
                    <a
                      href={`tel:${info.phone?.replace(/\s/g, '')}`}
                      className={cx(STYLES.CONTACT_INFO_LINK)}
                    >
                      {info.phone}
                    </a>
                  </div>
                </div>

                <div className={STYLES.CONTACT_INFO_ITEM}>
                  <div
                    className={cx(
                      STYLES.CONTACT_INFO_ICON,
                      STYLES.ICON_GRADIENT
                    )}
                  >
                    <span
                      className={STYLES.ICON_TEXT}
                      role="img"
                      aria-label={localeStrings.aria.socialMedia}
                    >
                      🌐
                    </span>
                  </div>
                  <div>
                    <h4 className={STYLES.CONTACT_INFO_LABEL}>
                      {localeStrings.contact.labels.socialMedia}
                    </h4>
                    <div className={STYLES.CONTACT_SOCIAL_GRID}>
                      {info.social?.twitter && (
                        <a
                          href={info.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cx(STYLES.CONTACT_SOCIAL_LINK)}
                          aria-label={localeStrings.aria.twitter}
                        >
                          𝕏
                        </a>
                      )}
                      {info.social?.linkedin && (
                        <a
                          href={info.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cx(STYLES.CONTACT_SOCIAL_LINK)}
                          aria-label={localeStrings.aria.linkedin}
                        >
                          in
                        </a>
                      )}
                      {info.social?.github && (
                        <a
                          href={info.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cx(STYLES.CONTACT_SOCIAL_LINK)}
                          aria-label={localeStrings.aria.github}
                        >
                          <span
                            role="img"
                            aria-label={localeStrings.aria.github}
                          >
                            ⚡
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={cx(STYLES.CONTACT_FORM_WRAPPER)}>
            <h3 className={STYLES.CONTACT_FORM_TITLE}>{displayFormTitle}</h3>
            <form onSubmit={handleSubmit} className={STYLES.CONTACT_FORM}>
              <div>
                <label htmlFor="name" className={STYLES.CONTACT_FORM_LABEL}>
                  {localeStrings.contact.form.name.label}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={cx(STYLES.CONTACT_FORM_INPUT)}
                  placeholder={localeStrings.contact.form.name.placeholder}
                />
              </div>

              <div>
                <label htmlFor="email" className={STYLES.CONTACT_FORM_LABEL}>
                  {localeStrings.contact.form.email.label}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={cx(STYLES.CONTACT_FORM_INPUT)}
                  placeholder={localeStrings.contact.form.email.placeholder}
                />
              </div>

              <div>
                <label htmlFor="message" className={STYLES.CONTACT_FORM_LABEL}>
                  {localeStrings.contact.form.message.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={cx(STYLES.CONTACT_FORM_TEXTAREA)}
                  placeholder={localeStrings.contact.form.message.placeholder}
                />
              </div>

              <button type="submit" className={cx(STYLES.CONTACT_FORM_BUTTON)}>
                {localeStrings.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
