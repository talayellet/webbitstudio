import * as privacyPolicyStyles from '../utils/styles';

export interface ContactSectionProps {
  title: string;
  content: string[];
  companyName: string;
  companyEmail: string;
}

export const ContactSection = ({
  title,
  content,
  companyName,
  companyEmail,
}: ContactSectionProps) => {
  return (
    <section className={privacyPolicyStyles.privacyPolicySection}>
      <h2 className={privacyPolicyStyles.privacyPolicySectionTitle}>{title}</h2>
      {content.map((paragraph, index) => (
        <p key={index} className={privacyPolicyStyles.privacyPolicyParagraph}>
          {paragraph}
        </p>
      ))}
      <p className={privacyPolicyStyles.privacyPolicyParagraph}>
        <strong>{companyName}</strong>
        <br />
        Email:{' '}
        <a
          href={`mailto:${companyEmail}`}
          className={privacyPolicyStyles.privacyPolicyEmailLink}
        >
          {companyEmail}
        </a>
      </p>
    </section>
  );
};
