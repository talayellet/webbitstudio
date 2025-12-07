import type { PrivacyPolicyContent } from '../../../shared/types';
import * as privacyPolicyStyles from '../utils/styles';

export interface ThirdPartyProcessorsSectionProps {
  section: PrivacyPolicyContent['sections']['thirdPartyProcessors'];
}

export const ThirdPartyProcessorsSection = ({
  section,
}: ThirdPartyProcessorsSectionProps) => {
  return (
    <section className={privacyPolicyStyles.privacyPolicySection}>
      <h2 className={privacyPolicyStyles.privacyPolicySectionTitle}>
        {section.title}
      </h2>
      {section.content.map((paragraph, index) => (
        <p key={index} className={privacyPolicyStyles.privacyPolicyParagraph}>
          {paragraph}
        </p>
      ))}
      <div className={privacyPolicyStyles.privacyPolicyList}>
        {section.processors.map((processor, index) => (
          <div
            key={index}
            className={privacyPolicyStyles.privacyPolicyProcessorItem}
          >
            <h3 className={privacyPolicyStyles.privacyPolicyProcessorName}>
              {processor.name}
            </h3>
            <p className={privacyPolicyStyles.privacyPolicyParagraph}>
              <strong>{section.labels.purpose}:</strong> {processor.purpose}
            </p>
            <p className={privacyPolicyStyles.privacyPolicyParagraph}>
              <strong>{section.labels.dataProcessed}:</strong>{' '}
              {processor.dataProcessed}
            </p>
            <p className={privacyPolicyStyles.privacyPolicyParagraph}>
              <strong>{section.labels.location}:</strong> {processor.location}
            </p>
            <p className={privacyPolicyStyles.privacyPolicyParagraph}>
              <strong>{section.labels.safeguards}:</strong>{' '}
              {processor.safeguards}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
