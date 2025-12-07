import { useLocalizedContent, getPrivacyPolicyContent } from '../../shared';
import * as privacyPolicyStyles from './utils/styles';

export interface PrivacyPolicyPageProps {
  companyName: string;
  companyEmail: string;
}

export const PrivacyPolicyPage = ({
  companyName,
  companyEmail,
}: PrivacyPolicyPageProps) => {
  const { locale } = useLocalizedContent();
  const content = getPrivacyPolicyContent(locale);
  const { sections } = content;

  return (
    <div className={privacyPolicyStyles.privacyPolicyPage}>
      <div className={privacyPolicyStyles.privacyPolicyContainer}>
        <h1 className={privacyPolicyStyles.privacyPolicyTitle}>
          {content.title}
        </h1>
        <p className={privacyPolicyStyles.privacyPolicyLastUpdated}>
          {content.lastUpdated}
        </p>

        {/* Introduction */}
        <section className={privacyPolicyStyles.privacyPolicySection}>
          <h2 className={privacyPolicyStyles.privacyPolicySectionTitle}>
            {sections.introduction.title}
          </h2>
          {sections.introduction.content.map((paragraph, index) => (
            <p
              key={index}
              className={privacyPolicyStyles.privacyPolicyParagraph}
            >
              {paragraph}
            </p>
          ))}
        </section>

        {/* Data Collection */}
        <section className={privacyPolicyStyles.privacyPolicySection}>
          <h2 className={privacyPolicyStyles.privacyPolicySectionTitle}>
            {sections.dataCollection.title}
          </h2>
          {sections.dataCollection.content.map((paragraph, index) => (
            <p
              key={index}
              className={privacyPolicyStyles.privacyPolicyParagraph}
            >
              {paragraph}
            </p>
          ))}
          <ul className={privacyPolicyStyles.privacyPolicyList}>
            {sections.dataCollection.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Data Usage */}
        <section className={privacyPolicyStyles.privacyPolicySection}>
          <h2 className={privacyPolicyStyles.privacyPolicySectionTitle}>
            {sections.dataUsage.title}
          </h2>
          {sections.dataUsage.content.map((paragraph, index) => (
            <p
              key={index}
              className={privacyPolicyStyles.privacyPolicyParagraph}
            >
              {paragraph}
            </p>
          ))}
        </section>

        {/* Cookies */}
        <section className={privacyPolicyStyles.privacyPolicySection}>
          <h2 className={privacyPolicyStyles.privacyPolicySectionTitle}>
            {sections.cookies.title}
          </h2>
          {sections.cookies.content.map((paragraph, index) => (
            <p
              key={index}
              className={privacyPolicyStyles.privacyPolicyParagraph}
            >
              {paragraph}
            </p>
          ))}
        </section>

        {/* Data Sharing */}
        <section className={privacyPolicyStyles.privacyPolicySection}>
          <h2 className={privacyPolicyStyles.privacyPolicySectionTitle}>
            {sections.dataSharing.title}
          </h2>
          {sections.dataSharing.content.map((paragraph, index) => (
            <p
              key={index}
              className={privacyPolicyStyles.privacyPolicyParagraph}
            >
              {paragraph}
            </p>
          ))}
        </section>

        {/* Your Rights */}
        <section className={privacyPolicyStyles.privacyPolicySection}>
          <h2 className={privacyPolicyStyles.privacyPolicySectionTitle}>
            {sections.yourRights.title}
          </h2>
          {sections.yourRights.content.map((paragraph, index) => (
            <p
              key={index}
              className={privacyPolicyStyles.privacyPolicyParagraph}
            >
              {paragraph}
            </p>
          ))}
          <ul className={privacyPolicyStyles.privacyPolicyList}>
            {sections.yourRights.rights.map((right, index) => (
              <li key={index}>{right}</li>
            ))}
          </ul>
        </section>

        {/* Data Retention */}
        <section className={privacyPolicyStyles.privacyPolicySection}>
          <h2 className={privacyPolicyStyles.privacyPolicySectionTitle}>
            {sections.dataRetention.title}
          </h2>
          {sections.dataRetention.content.map((paragraph, index) => (
            <p
              key={index}
              className={privacyPolicyStyles.privacyPolicyParagraph}
            >
              {paragraph}
            </p>
          ))}
          <ul className={privacyPolicyStyles.privacyPolicyList}>
            {sections.dataRetention.periods.map((period, index) => (
              <li key={index}>{period}</li>
            ))}
          </ul>
        </section>

        {/* Data Breach Notification */}
        <section className={privacyPolicyStyles.privacyPolicySection}>
          <h2 className={privacyPolicyStyles.privacyPolicySectionTitle}>
            {sections.dataBreachNotification.title}
          </h2>
          {sections.dataBreachNotification.content.map((paragraph, index) => (
            <p
              key={index}
              className={privacyPolicyStyles.privacyPolicyParagraph}
            >
              {paragraph}
            </p>
          ))}
          <ul className={privacyPolicyStyles.privacyPolicyList}>
            {sections.dataBreachNotification.procedures.map(
              (procedure, index) => (
                <li key={index}>{procedure}</li>
              )
            )}
          </ul>
        </section>

        {/* Data Security */}
        <section className={privacyPolicyStyles.privacyPolicySection}>
          <h2 className={privacyPolicyStyles.privacyPolicySectionTitle}>
            {sections.dataSecurity.title}
          </h2>
          {sections.dataSecurity.content.map((paragraph, index) => (
            <p
              key={index}
              className={privacyPolicyStyles.privacyPolicyParagraph}
            >
              {paragraph}
            </p>
          ))}
        </section>

        {/* Contact */}
        <section className={privacyPolicyStyles.privacyPolicySection}>
          <h2 className={privacyPolicyStyles.privacyPolicySectionTitle}>
            {sections.contact.title}
          </h2>
          {sections.contact.content.map((paragraph, index) => (
            <p
              key={index}
              className={privacyPolicyStyles.privacyPolicyParagraph}
            >
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
      </div>
    </div>
  );
};
