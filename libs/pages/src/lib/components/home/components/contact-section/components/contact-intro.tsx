import * as contactSectionStyles from '../../../utils/styles';
import { LocaleStrings } from '../../../../../shared';
import { CONTACT_SECTION } from '../../../utils';

interface ContactIntroProps {
  content: LocaleStrings['contactSection'];
}

/**
 * ContactIntro displays the introductory section with title and contact points
 */
export const ContactIntro = ({ content }: ContactIntroProps) => {
  return (
    <div>
      <h2
        id={CONTACT_SECTION.HEADING_ID}
        className={contactSectionStyles.typography.h2}
      >
        {content.title}
      </h2>
      <p className={contactSectionStyles.contact.intro}>{content.intro}</p>
      <ul className={contactSectionStyles.list.contactPoints}>
        {content.contactPoints.map((point, index) => (
          <li key={index}>• {point}</li>
        ))}
      </ul>
    </div>
  );
};
