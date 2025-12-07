import {
  useLocalizedContent,
  WEBBIT_STUDIO_EMAIL,
  AccessibilityStatementContent,
} from '../../shared';
import { ACCESSIBILITY_STATEMENT_STYLES } from './utils';
import {
  accessibilityStatementEn,
  accessibilityStatementEs,
  accessibilityStatementFr,
  accessibilityStatementDe,
  accessibilityStatementHe,
} from '../../shared/locales/legal-content/accessibility-statement';

export interface AccessibilityStatementPageProps {
  contactEmail?: string;
}

const LOCALE_CONTENT: Record<string, AccessibilityStatementContent> = {
  en: accessibilityStatementEn,
  es: accessibilityStatementEs,
  fr: accessibilityStatementFr,
  de: accessibilityStatementDe,
  he: accessibilityStatementHe,
};

export const AccessibilityStatementPage = ({
  contactEmail = WEBBIT_STUDIO_EMAIL,
}: AccessibilityStatementPageProps) => {
  const { locale } = useLocalizedContent();
  const content = LOCALE_CONTENT[locale] || accessibilityStatementEn;
  const { sections } = content;

  return (
    <div className={ACCESSIBILITY_STATEMENT_STYLES.container}>
      <div className={ACCESSIBILITY_STATEMENT_STYLES.contentWrapper}>
        <h1 className={ACCESSIBILITY_STATEMENT_STYLES.title}>
          {content.title}
        </h1>
        <p className={ACCESSIBILITY_STATEMENT_STYLES.lastUpdated}>
          {content.lastUpdated}
        </p>

        {/* Commitment */}
        <section className={ACCESSIBILITY_STATEMENT_STYLES.section}>
          <h2 className={ACCESSIBILITY_STATEMENT_STYLES.sectionTitle}>
            {sections.commitment.title}
          </h2>
          {sections.commitment.content.map(
            (paragraph: string, index: number) => (
              <p
                key={index}
                className={ACCESSIBILITY_STATEMENT_STYLES.paragraph}
              >
                {paragraph}
              </p>
            )
          )}
        </section>

        {/* Conformance Status */}
        <section className={ACCESSIBILITY_STATEMENT_STYLES.section}>
          <h2 className={ACCESSIBILITY_STATEMENT_STYLES.sectionTitle}>
            {sections.conformance.title}
          </h2>
          {sections.conformance.content.map(
            (paragraph: string, index: number) => (
              <p
                key={index}
                className={ACCESSIBILITY_STATEMENT_STYLES.paragraph}
              >
                {paragraph}
              </p>
            )
          )}
          <p className={ACCESSIBILITY_STATEMENT_STYLES.paragraph}>
            <strong>{sections.conformance.standardLabel}</strong>{' '}
            {sections.conformance.standard}
          </p>
          <p className={ACCESSIBILITY_STATEMENT_STYLES.paragraph}>
            {sections.conformance.level}
          </p>
        </section>

        {/* Features */}
        <section className={ACCESSIBILITY_STATEMENT_STYLES.section}>
          <h2 className={ACCESSIBILITY_STATEMENT_STYLES.sectionTitle}>
            {sections.features.title}
          </h2>
          <p className={ACCESSIBILITY_STATEMENT_STYLES.paragraph}>
            {sections.features.content}
          </p>
          <ul className={ACCESSIBILITY_STATEMENT_STYLES.list}>
            {sections.features.items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Known Issues */}
        <section className={ACCESSIBILITY_STATEMENT_STYLES.section}>
          <h2 className={ACCESSIBILITY_STATEMENT_STYLES.sectionTitle}>
            {sections.knownIssues.title}
          </h2>
          <p className={ACCESSIBILITY_STATEMENT_STYLES.paragraph}>
            {sections.knownIssues.content}
          </p>
          <ul className={ACCESSIBILITY_STATEMENT_STYLES.list}>
            {sections.knownIssues.items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Feedback */}
        <section className={ACCESSIBILITY_STATEMENT_STYLES.section}>
          <h2 className={ACCESSIBILITY_STATEMENT_STYLES.sectionTitle}>
            {sections.feedback.title}
          </h2>
          {sections.feedback.content.map((paragraph: string, index: number) => (
            <p key={index} className={ACCESSIBILITY_STATEMENT_STYLES.paragraph}>
              {paragraph}
            </p>
          ))}
          <p className={ACCESSIBILITY_STATEMENT_STYLES.paragraph}>
            <strong>{sections.feedback.emailLabel}</strong>{' '}
            <a
              href={`mailto:${contactEmail}`}
              className={ACCESSIBILITY_STATEMENT_STYLES.link}
            >
              {contactEmail}
            </a>
          </p>
        </section>

        {/* Technical Specifications */}
        <section className={ACCESSIBILITY_STATEMENT_STYLES.section}>
          <h2 className={ACCESSIBILITY_STATEMENT_STYLES.sectionTitle}>
            {sections.compatibility.title}
          </h2>
          <p className={ACCESSIBILITY_STATEMENT_STYLES.paragraph}>
            {sections.compatibility.content}
          </p>

          <div className={ACCESSIBILITY_STATEMENT_STYLES.subsection}>
            <h3 className={ACCESSIBILITY_STATEMENT_STYLES.subsectionTitle}>
              {sections.compatibility.browsersLabel}
            </h3>
            <ul className={ACCESSIBILITY_STATEMENT_STYLES.list}>
              {sections.compatibility.browsers.map(
                (browser: string, index: number) => (
                  <li key={index}>{browser}</li>
                )
              )}
            </ul>
          </div>

          <div className={ACCESSIBILITY_STATEMENT_STYLES.subsection}>
            <h3 className={ACCESSIBILITY_STATEMENT_STYLES.subsectionTitle}>
              {sections.compatibility.screenReadersLabel}
            </h3>
            <ul className={ACCESSIBILITY_STATEMENT_STYLES.list}>
              {sections.compatibility.screenReaders.map(
                (reader: string, index: number) => (
                  <li key={index}>{reader}</li>
                )
              )}
            </ul>
          </div>
        </section>

        {/* Limitations */}
        <section className={ACCESSIBILITY_STATEMENT_STYLES.section}>
          <h2 className={ACCESSIBILITY_STATEMENT_STYLES.sectionTitle}>
            {sections.limitations.title}
          </h2>
          <p className={ACCESSIBILITY_STATEMENT_STYLES.paragraph}>
            {sections.limitations.content}
          </p>
        </section>

        {/* Assessment */}
        <section className={ACCESSIBILITY_STATEMENT_STYLES.section}>
          <h2 className={ACCESSIBILITY_STATEMENT_STYLES.sectionTitle}>
            {sections.improvements.title}
          </h2>
          {sections.improvements.content.map(
            (paragraph: string, index: number) => (
              <p
                key={index}
                className={ACCESSIBILITY_STATEMENT_STYLES.paragraph}
              >
                {paragraph}
              </p>
            )
          )}
        </section>
      </div>
    </div>
  );
};
