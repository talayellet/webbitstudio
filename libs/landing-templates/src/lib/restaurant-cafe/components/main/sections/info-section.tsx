import { STYLES, Hours, Location, Contact } from '../../../utils';

interface InfoSectionProps {
  hoursTitle: string;
  hours: Hours;
  locationTitle: string;
  location: Location;
  contactTitle: string;
  contact: Contact;
  addToRefs: (el: HTMLElement | null) => void;
}

/**
 * Info section component for restaurant-cafe template (Hours, Location, Contact)
 */
export const InfoSection = ({
  hoursTitle,
  hours,
  locationTitle,
  location,
  contactTitle,
  contact,
  addToRefs,
}: InfoSectionProps) => {
  return (
    <section className={STYLES.INFO_SECTION} id="contact">
      <div className={STYLES.CONTAINER}>
        <div className={STYLES.INFO_GRID}>
          <div
            className={`${STYLES.INFO_CARD} ${STYLES.FADE_IN}`}
            ref={addToRefs}
          >
            <h3 className={STYLES.INFO_TITLE}>{hoursTitle}</h3>
            <div className={STYLES.ORNAMENT} aria-hidden="true"></div>
            <div className={STYLES.INFO_CONTENT}>
              <p>{hours.line1}</p>
              <p>{hours.line2}</p>
              <p>{hours.line3}</p>
            </div>
          </div>
          <div
            className={`${STYLES.INFO_CARD} ${STYLES.FADE_IN}`}
            ref={addToRefs}
          >
            <h3 className={STYLES.INFO_TITLE}>{locationTitle}</h3>
            <div className={STYLES.ORNAMENT} aria-hidden="true"></div>
            <div className={STYLES.INFO_CONTENT}>
              <p>
                {location.line1}
                <br />
                {location.line2}
                <br />
                {location.line3}
              </p>
            </div>
          </div>
          <div
            className={`${STYLES.INFO_CARD} ${STYLES.FADE_IN}`}
            ref={addToRefs}
          >
            <h3 className={STYLES.INFO_TITLE}>{contactTitle}</h3>
            <div className={STYLES.ORNAMENT} aria-hidden="true"></div>
            <div className={STYLES.INFO_CONTENT}>
              <p>
                <a href={`tel:${contact.phone}`} className={STYLES.INFO_LINK}>
                  {contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${contact.email}`}
                  className={STYLES.INFO_LINK}
                >
                  {contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
