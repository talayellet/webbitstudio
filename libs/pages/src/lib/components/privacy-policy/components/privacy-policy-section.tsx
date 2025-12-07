import * as privacyPolicyStyles from '../utils/styles';

export interface PrivacyPolicySectionProps {
  title: string;
  content: string[];
  listItems?: string[];
}

export const PrivacyPolicySection = ({
  title,
  content,
  listItems,
}: PrivacyPolicySectionProps) => {
  return (
    <section className={privacyPolicyStyles.privacyPolicySection}>
      <h2 className={privacyPolicyStyles.privacyPolicySectionTitle}>{title}</h2>
      {content.map((paragraph, index) => (
        <p key={index} className={privacyPolicyStyles.privacyPolicyParagraph}>
          {paragraph}
        </p>
      ))}
      {listItems && (
        <ul className={privacyPolicyStyles.privacyPolicyList}>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
};
