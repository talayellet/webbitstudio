import React from 'react';
import {
  ContactInfo as ContactInfoType,
  ContactFieldsConfig,
  DEFAULT_CONTACT_INFO,
  DEFAULT_CONTACT_FIELDS,
  STYLES,
  LocaleStrings,
  DEFAULT_LOCALE_STRINGS,
} from '../../../../utils';
import { ContactInfo } from './contact-info';
import { ContactForm } from './contact-form';

export interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  contactInfo?: ContactInfoType;
  contactFieldsConfig?: ContactFieldsConfig;
  formTitle?: string;
  locale?: LocaleStrings;
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
  /**
   * Web3Forms access key for easy email delivery (no backend required)
   * Get free key at https://web3forms.com
   */
  web3formsAccessKey?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  subtitle,
  contactInfo = DEFAULT_CONTACT_INFO,
  contactFieldsConfig = DEFAULT_CONTACT_FIELDS,
  formTitle,
  locale,
  onSubmit,
  web3formsAccessKey,
}) => {
  const info = { ...DEFAULT_CONTACT_INFO, ...contactInfo };
  const localeStrings = locale ?? DEFAULT_LOCALE_STRINGS;

  // Always use locale strings as primary source, then fall back to props
  const displayTitle = title ?? localeStrings.contact.title;
  const displaySubtitle = subtitle ?? localeStrings.contact.subtitle;
  const displayFormTitle = formTitle ?? localeStrings.contact.formTitle;

  return (
    <div className={STYLES.CONTACT_SECTION}>
      <div className={STYLES.CONTAINER}>
        <div className={STYLES.CONTACT_SECTION_HEADER}>
          <h2 className={STYLES.CONTACT_SECTION_TITLE}>{displayTitle}</h2>
          <p className={STYLES.CONTACT_SECTION_SUBTITLE}>{displaySubtitle}</p>
        </div>

        <div className={STYLES.CONTACT_GRID}>
          <ContactInfo
            contactInfo={info}
            localeStrings={localeStrings}
            fieldsConfig={contactFieldsConfig}
          />
          <ContactForm
            formTitle={displayFormTitle}
            localeStrings={localeStrings}
            onSubmit={onSubmit}
            web3formsAccessKey={web3formsAccessKey}
          />
        </div>
      </div>
    </div>
  );
};
