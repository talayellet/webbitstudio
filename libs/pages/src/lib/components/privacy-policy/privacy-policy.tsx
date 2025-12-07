import { useLocalizedContent, getPrivacyPolicyContent } from '../../shared';
import * as privacyPolicyStyles from './utils/styles';
import {
  PrivacyPolicySection,
  ThirdPartyProcessorsSection,
  ContactSection,
} from './components';

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

        <PrivacyPolicySection
          title={sections.introduction.title}
          content={sections.introduction.content}
        />

        <PrivacyPolicySection
          title={sections.dataCollection.title}
          content={sections.dataCollection.content}
          listItems={sections.dataCollection.items}
        />

        <PrivacyPolicySection
          title={sections.dataUsage.title}
          content={sections.dataUsage.content}
        />

        <PrivacyPolicySection
          title={sections.cookies.title}
          content={sections.cookies.content}
        />

        <PrivacyPolicySection
          title={sections.dataSharing.title}
          content={sections.dataSharing.content}
        />

        <ThirdPartyProcessorsSection section={sections.thirdPartyProcessors} />

        <PrivacyPolicySection
          title={sections.yourRights.title}
          content={sections.yourRights.content}
          listItems={sections.yourRights.rights}
        />

        <PrivacyPolicySection
          title={sections.dataRetention.title}
          content={sections.dataRetention.content}
          listItems={sections.dataRetention.periods}
        />

        <PrivacyPolicySection
          title={sections.dataBreachNotification.title}
          content={sections.dataBreachNotification.content}
          listItems={sections.dataBreachNotification.procedures}
        />

        <PrivacyPolicySection
          title={sections.dataSecurity.title}
          content={sections.dataSecurity.content}
        />

        <ContactSection
          title={sections.contact.title}
          content={sections.contact.content}
          companyName={companyName}
          companyEmail={companyEmail}
        />
      </div>
    </div>
  );
};
