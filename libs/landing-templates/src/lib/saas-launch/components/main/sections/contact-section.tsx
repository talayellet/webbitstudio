import { useState } from 'react';
import {
  ContactInfo,
  DEFAULT_CONTACT_INFO,
  DEFAULT_CONTACT_SECTION_TITLE,
  DEFAULT_CONTACT_SECTION_SUBTITLE,
  DEFAULT_CONTACT_FORM_TITLE,
  STYLES,
} from '../../../utils';

const cx = (...classes: (string | readonly string[])[]) =>
  classes.flat().join(' ');

export interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  contactInfo?: ContactInfo;
  formTitle?: string;
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

export const DefaultContactSection = ({
  title = DEFAULT_CONTACT_SECTION_TITLE,
  subtitle = DEFAULT_CONTACT_SECTION_SUBTITLE,
  contactInfo = DEFAULT_CONTACT_INFO,
  formTitle = DEFAULT_CONTACT_FORM_TITLE,
  onSubmit,
}: ContactSectionProps = {}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const info = { ...DEFAULT_CONTACT_INFO, ...contactInfo };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    } else {
      // Default behavior if no onSubmit handler provided
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
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
          <h2 className={STYLES.CONTACT_SECTION_TITLE}>{title}</h2>
          <p className={STYLES.CONTACT_SECTION_SUBTITLE}>{subtitle}</p>
        </div>

        <div className={STYLES.CONTACT_GRID}>
          {/* Contact Information */}
          <div className={STYLES.CONTACT_INFO_WRAPPER}>
            <div>
              <h3 className={STYLES.CONTACT_INFO_TITLE}>Contact Information</h3>
              <div className={STYLES.CONTACT_INFO_LIST}>
                <div className={STYLES.CONTACT_INFO_ITEM}>
                  <div
                    className={cx(
                      STYLES.CONTACT_INFO_ICON,
                      STYLES.ICON_GRADIENT
                    )}
                  >
                    <span className="text-xl" role="img" aria-label="location">
                      📍
                    </span>
                  </div>
                  <div>
                    <h4 className={STYLES.CONTACT_INFO_LABEL}>Address</h4>
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
                    <span className="text-xl" role="img" aria-label="email">
                      📧
                    </span>
                  </div>
                  <div>
                    <h4 className={STYLES.CONTACT_INFO_LABEL}>Email</h4>
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
                    <span className="text-xl" role="img" aria-label="phone">
                      📞
                    </span>
                  </div>
                  <div>
                    <h4 className={STYLES.CONTACT_INFO_LABEL}>Phone</h4>
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
                      className="text-xl"
                      role="img"
                      aria-label="social media"
                    >
                      🌐
                    </span>
                  </div>
                  <div>
                    <h4 className={STYLES.CONTACT_INFO_LABEL}>Social Media</h4>
                    <div className={STYLES.CONTACT_SOCIAL_GRID}>
                      {info.social?.twitter && (
                        <a
                          href={info.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cx(STYLES.CONTACT_SOCIAL_LINK)}
                          aria-label="Twitter"
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
                          aria-label="LinkedIn"
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
                          aria-label="GitHub"
                        >
                          <span role="img" aria-label="github">
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
            <h3 className={STYLES.CONTACT_FORM_TITLE}>{formTitle}</h3>
            <form onSubmit={handleSubmit} className={STYLES.CONTACT_FORM}>
              <div>
                <label htmlFor="name" className={STYLES.CONTACT_FORM_LABEL}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={cx(STYLES.CONTACT_FORM_INPUT)}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className={STYLES.CONTACT_FORM_LABEL}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={cx(STYLES.CONTACT_FORM_INPUT)}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className={STYLES.CONTACT_FORM_LABEL}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={cx(STYLES.CONTACT_FORM_TEXTAREA)}
                  placeholder="Tell us about your project..."
                />
              </div>

              <button type="submit" className={cx(STYLES.CONTACT_FORM_BUTTON)}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
