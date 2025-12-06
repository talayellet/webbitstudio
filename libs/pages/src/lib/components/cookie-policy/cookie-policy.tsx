import {
  useLocalizedContent,
  getCookiePolicyContent,
  CookiePolicyContent,
} from '../../shared';
import {
  cookiePolicyPage,
  cookiePolicyContainer,
  cookiePolicyTitle,
  cookiePolicyLastUpdated,
  cookiePolicySection,
  cookiePolicySectionTitle,
  cookiePolicyParagraph,
  cookiePolicySubsection,
  cookiePolicySubsectionTitle,
  cookiePolicySubsectionDescription,
  cookiePolicyList,
  cookiePolicyEmailLink,
} from './utils';

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
    <div className={cookiePolicyPage}>
      <div className={cookiePolicyContainer}>
        <h1 className={cookiePolicyTitle}>{content.title}</h1>
        <p className={cookiePolicyLastUpdated}>{content.lastUpdated}</p>

        {/* Introduction */}
        <section className={cookiePolicySection}>
          <h2 className={cookiePolicySectionTitle}>
            {sections.introduction.title}
          </h2>
          {sections.introduction.content.map((paragraph, index) => (
            <p key={index} className={cookiePolicyParagraph}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* What Are Cookies */}
        <section className={cookiePolicySection}>
          <h2 className={cookiePolicySectionTitle}>
            {sections.whatAreCookies.title}
          </h2>
          {sections.whatAreCookies.content.map((paragraph, index) => (
            <p key={index} className={cookiePolicyParagraph}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* How We Use Cookies */}
        <section className={cookiePolicySection}>
          <h2 className={cookiePolicySectionTitle}>
            {sections.howWeUseCookies.title}
          </h2>
          {sections.howWeUseCookies.content.map((paragraph, index) => (
            <p key={index} className={cookiePolicyParagraph}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* Types of Cookies */}
        <section className={cookiePolicySection}>
          <h2 className={cookiePolicySectionTitle}>
            {sections.typesOfCookies.title}
          </h2>

          {/* Essential Cookies */}
          <div className={cookiePolicySubsection}>
            <h3 className={cookiePolicySubsectionTitle}>
              {sections.typesOfCookies.essential.title}
            </h3>
            <p className={cookiePolicySubsectionDescription}>
              {sections.typesOfCookies.essential.description}
            </p>
            <ul className={cookiePolicyList}>
              {sections.typesOfCookies.essential.examples.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Analytics Cookies */}
          <div className={cookiePolicySubsection}>
            <h3 className={cookiePolicySubsectionTitle}>
              {sections.typesOfCookies.analytics.title}
            </h3>
            <p className={cookiePolicySubsectionDescription}>
              {sections.typesOfCookies.analytics.description}
            </p>
            <ul className={cookiePolicyList}>
              {sections.typesOfCookies.analytics.examples.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Functional Cookies */}
          <div className={cookiePolicySubsection}>
            <h3 className={cookiePolicySubsectionTitle}>
              {sections.typesOfCookies.functional.title}
            </h3>
            <p className={cookiePolicySubsectionDescription}>
              {sections.typesOfCookies.functional.description}
            </p>
            <ul className={cookiePolicyList}>
              {sections.typesOfCookies.functional.examples.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className={cookiePolicySection}>
          <h2 className={cookiePolicySectionTitle}>
            {sections.managingCookies.title}
          </h2>
          {sections.managingCookies.content.map((paragraph, index) => (
            <p key={index} className={cookiePolicyParagraph}>
              {paragraph}
            </p>
          ))}
          <ul className={cookiePolicyList}>
            {sections.managingCookies.browsers.map((browser, index) => (
              <li key={index}>{browser}</li>
            ))}
          </ul>
        </section>

        {/* Third Party Cookies */}
        <section className={cookiePolicySection}>
          <h2 className={cookiePolicySectionTitle}>
            {sections.thirdPartyCookies.title}
          </h2>
          {sections.thirdPartyCookies.content.map((paragraph, index) => (
            <p key={index} className={cookiePolicyParagraph}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* Updates */}
        <section className={cookiePolicySection}>
          <h2 className={cookiePolicySectionTitle}>{sections.updates.title}</h2>
          {sections.updates.content.map((paragraph, index) => (
            <p key={index} className={cookiePolicyParagraph}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* Contact */}
        <section className={cookiePolicySection}>
          <h2 className={cookiePolicySectionTitle}>{sections.contact.title}</h2>
          {sections.contact.content.map((paragraph, index) => (
            <p key={index} className={cookiePolicyParagraph}>
              {paragraph}
            </p>
          ))}
          <p className={cookiePolicyParagraph}>
            <strong>{companyName}</strong>
            <br />
            {sections.contact.emailLabel}{' '}
            <a
              href={`mailto:${companyEmail}`}
              className={cookiePolicyEmailLink}
            >
              {companyEmail}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};
