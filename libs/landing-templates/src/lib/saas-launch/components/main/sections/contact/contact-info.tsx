import React from 'react';
import {
  ContactInfo as ContactInfoType,
  ContactFieldsConfig,
  DEFAULT_CONTACT_FIELDS,
  STYLES,
  LocaleStrings,
} from '../../../../utils';
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../../../../../shared/icons';

const cx = (...classes: (string | readonly string[])[]) =>
  classes.flat().join(' ');

export interface ContactInfoProps {
  contactInfo: ContactInfoType;
  localeStrings: LocaleStrings;
  fieldsConfig?: ContactFieldsConfig;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  contactInfo,
  localeStrings,
  fieldsConfig = DEFAULT_CONTACT_FIELDS,
}) => {
  const config = { ...DEFAULT_CONTACT_FIELDS, ...fieldsConfig };
  const socialConfig = {
    ...DEFAULT_CONTACT_FIELDS.socialLinks,
    ...fieldsConfig?.socialLinks,
  };

  return (
    <div className={STYLES.CONTACT_INFO_WRAPPER}>
      <div>
        <h3 className={STYLES.CONTACT_INFO_TITLE}>
          {localeStrings.contact.sectionTitle}
        </h3>
        <div className={STYLES.CONTACT_INFO_LIST}>
          {config.showAddress && contactInfo.address && (
            <div className={STYLES.CONTACT_INFO_ITEM}>
              <div
                className={cx(STYLES.CONTACT_INFO_ICON, STYLES.ICON_GRADIENT)}
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
                  {contactInfo.address?.line1}
                  {contactInfo.address?.line2 && (
                    <>
                      <br />
                      {contactInfo.address.line2}
                    </>
                  )}
                  {contactInfo.address?.line3 && (
                    <>
                      <br />
                      {contactInfo.address.line3}
                    </>
                  )}
                </p>
              </div>
            </div>
          )}

          {config.showEmail && contactInfo.email && (
            <div className={STYLES.CONTACT_INFO_ITEM}>
              <div
                className={cx(STYLES.CONTACT_INFO_ICON, STYLES.ICON_GRADIENT)}
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
                  href={`mailto:${contactInfo.email}`}
                  className={cx(STYLES.CONTACT_INFO_LINK)}
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          )}

          {config.showPhone && contactInfo.phone && (
            <div className={STYLES.CONTACT_INFO_ITEM}>
              <div
                className={cx(STYLES.CONTACT_INFO_ICON, STYLES.ICON_GRADIENT)}
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
                  href={`tel:${contactInfo.phone?.replace(/\s/g, '')}`}
                  className={cx(STYLES.CONTACT_INFO_LINK)}
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          )}

          {config.showSocialMedia && contactInfo.social && (
            <div className={STYLES.CONTACT_INFO_ITEM}>
              <div
                className={cx(STYLES.CONTACT_INFO_ICON, STYLES.ICON_GRADIENT)}
              >
                <span
                  className={STYLES.ICON_TEXT}
                  role="img"
                  aria-label={localeStrings.aria.socialMedia}
                >
                  🌐
                </span>
              </div>
              <div className={STYLES.CONTACT_SOCIAL_GRID}>
                {socialConfig.showTwitter && contactInfo.social?.twitter && (
                  <a
                    href={contactInfo.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cx(STYLES.CONTACT_SOCIAL_LINK)}
                    aria-label={localeStrings.aria.twitter}
                  >
                    <TwitterIcon />
                  </a>
                )}
                {socialConfig.showLinkedin && contactInfo.social?.linkedin && (
                  <a
                    href={contactInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cx(STYLES.CONTACT_SOCIAL_LINK)}
                    aria-label={localeStrings.aria.linkedin}
                  >
                    <LinkedInIcon />
                  </a>
                )}
                {socialConfig.showGithub && contactInfo.social?.github && (
                  <a
                    href={contactInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cx(STYLES.CONTACT_SOCIAL_LINK)}
                    aria-label={localeStrings.aria.github}
                  >
                    <GitHubIcon />
                  </a>
                )}
                {socialConfig.showCustom &&
                  contactInfo.social?.custom &&
                  contactInfo.social.custom}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
