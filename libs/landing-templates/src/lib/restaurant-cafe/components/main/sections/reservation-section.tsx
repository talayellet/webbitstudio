import { STYLES } from '../../../utils';

interface ReservationSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  buttonOnClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * Reservation/CTA section component for restaurant-cafe template
 */
export const ReservationSection = ({
  title,
  description,
  buttonText,
  buttonHref,
  buttonOnClick,
}: ReservationSectionProps) => {
  return (
    <section className={STYLES.CTA_SECTION} aria-label="Make a reservation">
      <div className={STYLES.CONTAINER}>
        <h2 className={STYLES.CTA_TITLE}>{title}</h2>
        <div className={STYLES.ORNAMENT} aria-hidden="true"></div>
        <p className={STYLES.CTA_DESCRIPTION}>{description}</p>
        <a
          href={buttonHref}
          className={STYLES.BTN}
          onClick={buttonOnClick}
          aria-label={`${buttonText} - ${title}`}
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};
