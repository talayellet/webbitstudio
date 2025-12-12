import {
  HeroSection,
  AboutSection,
  MenuSection,
  InfoSection,
  ReservationSection,
} from './sections';
import {
  LocaleStrings,
  ShowSections,
  DEFAULT_SHOW_SECTIONS,
  MenuItem,
  Hours,
  Location,
  Contact,
} from '../../utils';

interface MainProps {
  // Hero Section
  heroSubtitle: string;
  heroTitle: string;
  heroDescription: string;
  heroCta: string;
  heroCtaHref: string;
  heroCtaOnClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;

  // About Section
  aboutTitle: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  restaurantName: string;

  // Menu Section
  menuTitle: string;
  menuDescription: string;
  menuItems: MenuItem[];

  // Info Section
  hoursTitle: string;
  hours: Hours;
  locationTitle: string;
  location: Location;
  contactTitle: string;
  contact: Contact;

  // Reservation Section
  reservationTitle: string;
  reservationDescription: string;
  reservationButton: string;
  reservationHref: string;
  reservationOnClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;

  // Infrastructure
  addToRefs: (el: HTMLElement | null) => void;
  locale: LocaleStrings;
  showSections?: ShowSections;
}

/**
 * Main component for restaurant-cafe template
 * Contains all the sections of the landing page
 */
export const Main = ({
  heroSubtitle,
  heroTitle,
  heroDescription,
  heroCta,
  heroCtaHref,
  heroCtaOnClick,
  aboutTitle,
  aboutParagraph1,
  aboutParagraph2,
  restaurantName,
  menuTitle,
  menuDescription,
  menuItems,
  hoursTitle,
  hours,
  locationTitle,
  location,
  contactTitle,
  contact,
  reservationTitle,
  reservationDescription,
  reservationButton,
  reservationHref,
  reservationOnClick,
  addToRefs,
  showSections = DEFAULT_SHOW_SECTIONS,
}: MainProps) => {
  return (
    <main id="main-content" aria-label="Main content">
      {showSections.hero !== false && (
        <HeroSection
          subtitle={heroSubtitle}
          title={heroTitle}
          description={heroDescription}
          ctaText={heroCta}
          ctaHref={heroCtaHref}
          ctaOnClick={heroCtaOnClick}
          addToRefs={addToRefs}
        />
      )}

      {showSections.about !== false && (
        <AboutSection
          title={aboutTitle}
          paragraph1={aboutParagraph1}
          paragraph2={aboutParagraph2}
          restaurantName={restaurantName}
          addToRefs={addToRefs}
        />
      )}

      {showSections.menu !== false && (
        <MenuSection
          title={menuTitle}
          description={menuDescription}
          menuItems={menuItems}
          addToRefs={addToRefs}
        />
      )}

      {showSections.info !== false && (
        <InfoSection
          hoursTitle={hoursTitle}
          hours={hours}
          locationTitle={locationTitle}
          location={location}
          contactTitle={contactTitle}
          contact={contact}
          addToRefs={addToRefs}
        />
      )}

      {showSections.reservation !== false && (
        <ReservationSection
          title={reservationTitle}
          description={reservationDescription}
          buttonText={reservationButton}
          buttonHref={reservationHref}
          buttonOnClick={reservationOnClick}
        />
      )}
    </main>
  );
};
