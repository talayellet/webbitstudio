import {
  useLocalizedContent,
  getCookiePolicyContent,
  CookiePolicyContent,
} from '../../shared';
import * as cookiePolicyStyles from './utils/styles';

export type { CookiePolicyContent };

export interface CookiePolicyPageProps {
  companyName: string;
  companyEmail: string;
}

export const CookiePolicyPage = ({
  companyName,
  companyEmail,
}: CookiePolicyPageProps) => {
  const { locale } = useLocalizedContent();
  const content = getCookiePolicyContent(locale);
  const { sections } = content;

  return (
    <div className={cookiePolicyStyles.page}>
      <div className={cookiePolicyStyles.container}>
        <h1 className={cookiePolicyStyles.title}>{content.title}</h1>
        <p className={cookiePolicyStyles.lastUpdated}>{content.lastUpdated}</p>

        {/* Introduction */}
        <section className={cookiePolicyStyles.section}>
          <h2 className={cookiePolicyStyles.sectionTitle}>
            {sections.introduction.title}
          </h2>
          {sections.introduction.content.map((paragraph, index) => (
            <p key={index} className={cookiePolicyStyles.paragraph}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* What Are Cookies */}
        <section className={cookiePolicyStyles.section}>
          <h2 className={cookiePolicyStyles.sectionTitle}>
            {sections.whatAreCookies.title}
          </h2>
          {sections.whatAreCookies.content.map((paragraph, index) => (
            <p key={index} className={cookiePolicyStyles.paragraph}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* How We Use Cookies */}
        <section className={cookiePolicyStyles.section}>
          <h2 className={cookiePolicyStyles.sectionTitle}>
            {sections.howWeUseCookies.title}
          </h2>
          {sections.howWeUseCookies.content.map((paragraph, index) => (
            <p key={index} className={cookiePolicyStyles.paragraph}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* Types of Cookies */}
        <section className={cookiePolicyStyles.section}>
          <h2 className={cookiePolicyStyles.sectionTitle}>
            {sections.typesOfCookies.title}
          </h2>

          {/* Essential Cookies */}
          <div className={cookiePolicyStyles.subsection}>
            <h3 className={cookiePolicyStyles.subsectionTitle}>
              {sections.typesOfCookies.essential.title}
            </h3>
            <p className={cookiePolicyStyles.subsectionDescription}>
              {sections.typesOfCookies.essential.description}
            </p>
            <ul className={cookiePolicyStyles.list}>
              {sections.typesOfCookies.essential.examples.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Analytics Cookies */}
          <div className={cookiePolicyStyles.subsection}>
            <h3 className={cookiePolicyStyles.subsectionTitle}>
              {sections.typesOfCookies.analytics.title}
            </h3>
            <p className={cookiePolicyStyles.subsectionDescription}>
              {sections.typesOfCookies.analytics.description}
            </p>
            <ul className={cookiePolicyStyles.list}>
              {sections.typesOfCookies.analytics.examples.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Functional Cookies */}
          <div className={cookiePolicyStyles.subsection}>
            <h3 className={cookiePolicyStyles.subsectionTitle}>
              {sections.typesOfCookies.functional.title}
            </h3>
            <p className={cookiePolicyStyles.subsectionDescription}>
              {sections.typesOfCookies.functional.description}
            </p>
            <ul className={cookiePolicyStyles.list}>
              {sections.typesOfCookies.functional.examples.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className={cookiePolicyStyles.section}>
          <h2 className={cookiePolicyStyles.sectionTitle}>
            {sections.managingCookies.title}
          </h2>
          {sections.managingCookies.content.map((paragraph, index) => (
            <p key={index} className={cookiePolicyStyles.paragraph}>
              {paragraph}
            </p>
          ))}
          <ul className={cookiePolicyStyles.list}>
            {sections.managingCookies.browsers.map((browser, index) => (
              <li key={index}>{browser}</li>
            ))}
          </ul>
        </section>

        {/* Third Party Cookies */}
        <section className={cookiePolicyStyles.section}>
          <h2 className={cookiePolicyStyles.sectionTitle}>
            {sections.thirdPartyCookies.title}
          </h2>
          {sections.thirdPartyCookies.content.map((paragraph, index) => (
            <p key={index} className={cookiePolicyStyles.paragraph}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* Updates */}
        <section className={cookiePolicyStyles.section}>
          <h2 className={cookiePolicyStyles.sectionTitle}>
            {sections.updates.title}
          </h2>
          {sections.updates.content.map((paragraph, index) => (
            <p key={index} className={cookiePolicyStyles.paragraph}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* Contact */}
        <section className={cookiePolicyStyles.section}>
          <h2 className={cookiePolicyStyles.sectionTitle}>
            {sections.contact.title}
          </h2>
          {sections.contact.content.map((paragraph, index) => (
            <p key={index} className={cookiePolicyStyles.paragraph}>
              {paragraph}
            </p>
          ))}
          <p className={cookiePolicyStyles.paragraph}>
            <strong>{companyName}</strong>
            <br />
            {sections.contact.emailLabel}{' '}
            <a
              href={`mailto:${companyEmail}`}
              className={cookiePolicyStyles.emailLink}
            >
              {companyEmail}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};
