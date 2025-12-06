import {
  useLocalizedContent,
  getTermsOfServiceContent,
  type TermsOfServiceContent,
} from '../../shared';
import { TERMS_OF_SERVICE_STYLES } from './utils';

export type { TermsOfServiceContent };

export interface TermsOfServicePageProps {
  companyName: string;
  companyEmail: string;
}

export const TermsOfServicePage = ({
  companyName,
  companyEmail,
}: TermsOfServicePageProps) => {
  const { locale } = useLocalizedContent();
  const content = getTermsOfServiceContent(locale);
  const { sections } = content;

  return (
    <div className={TERMS_OF_SERVICE_STYLES.container}>
      <div className={TERMS_OF_SERVICE_STYLES.contentWrapper}>
        <h1 className={TERMS_OF_SERVICE_STYLES.title}>{content.title}</h1>
        <p className={TERMS_OF_SERVICE_STYLES.lastUpdated}>
          {content.lastUpdated}
        </p>

        {/* Acceptance */}
        <section className={TERMS_OF_SERVICE_STYLES.section}>
          <h2 className={TERMS_OF_SERVICE_STYLES.sectionTitle}>
            {sections.acceptance.title}
          </h2>
          {sections.acceptance.content.map((paragraph, index) => (
            <p key={index} className={TERMS_OF_SERVICE_STYLES.paragraph}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* Services */}
        <section className={TERMS_OF_SERVICE_STYLES.section}>
          <h2 className={TERMS_OF_SERVICE_STYLES.sectionTitle}>
            {sections.services.title}
          </h2>
          {sections.services.content.map((paragraph, index) => (
            <p key={index} className={TERMS_OF_SERVICE_STYLES.paragraph}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* User Responsibilities */}
        <section className={TERMS_OF_SERVICE_STYLES.section}>
          <h2 className={TERMS_OF_SERVICE_STYLES.sectionTitle}>
            {sections.userResponsibilities.title}
          </h2>
          {sections.userResponsibilities.content.map((paragraph, index) => (
            <p key={index} className={TERMS_OF_SERVICE_STYLES.paragraph}>
              {paragraph}
            </p>
          ))}
          <ul className={TERMS_OF_SERVICE_STYLES.list}>
            {sections.userResponsibilities.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Intellectual Property */}
        <section className={TERMS_OF_SERVICE_STYLES.section}>
          <h2 className={TERMS_OF_SERVICE_STYLES.sectionTitle}>
            {sections.intellectualProperty.title}
          </h2>
          {sections.intellectualProperty.content.map((paragraph, index) => (
            <p key={index} className={TERMS_OF_SERVICE_STYLES.paragraph}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* Payment */}
        <section className={TERMS_OF_SERVICE_STYLES.section}>
          <h2 className={TERMS_OF_SERVICE_STYLES.sectionTitle}>
            {sections.payment.title}
          </h2>
          {sections.payment.content.map((paragraph, index) => (
            <p key={index} className={TERMS_OF_SERVICE_STYLES.paragraph}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* Termination */}
        <section className={TERMS_OF_SERVICE_STYLES.section}>
          <h2 className={TERMS_OF_SERVICE_STYLES.sectionTitle}>
            {sections.termination.title}
          </h2>
          {sections.termination.content.map((paragraph, index) => (
            <p key={index} className={TERMS_OF_SERVICE_STYLES.paragraph}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* Warranties */}
        <section className={TERMS_OF_SERVICE_STYLES.section}>
          <h2 className={TERMS_OF_SERVICE_STYLES.sectionTitle}>
            {sections.warranties.title}
          </h2>
          {sections.warranties.content.map((paragraph, index) => (
            <p key={index} className={TERMS_OF_SERVICE_STYLES.paragraph}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* Limitation */}
        <section className={TERMS_OF_SERVICE_STYLES.section}>
          <h2 className={TERMS_OF_SERVICE_STYLES.sectionTitle}>
            {sections.limitation.title}
          </h2>
          {sections.limitation.content.map((paragraph, index) => (
            <p key={index} className={TERMS_OF_SERVICE_STYLES.paragraph}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* Modifications */}
        <section className={TERMS_OF_SERVICE_STYLES.section}>
          <h2 className={TERMS_OF_SERVICE_STYLES.sectionTitle}>
            {sections.modifications.title}
          </h2>
          {sections.modifications.content.map((paragraph, index) => (
            <p key={index} className={TERMS_OF_SERVICE_STYLES.paragraph}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* Contact */}
        <section className={TERMS_OF_SERVICE_STYLES.section}>
          <h2 className={TERMS_OF_SERVICE_STYLES.sectionTitle}>
            {sections.contact.title}
          </h2>
          {sections.contact.content.map((paragraph, index) => (
            <p key={index} className={TERMS_OF_SERVICE_STYLES.paragraph}>
              {paragraph}
            </p>
          ))}
          <p className={TERMS_OF_SERVICE_STYLES.paragraph}>
            <strong>{companyName}</strong>
            <br />
            Email:{' '}
            <a
              href={`mailto:${companyEmail}`}
              className={TERMS_OF_SERVICE_STYLES.link}
            >
              {companyEmail}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};
