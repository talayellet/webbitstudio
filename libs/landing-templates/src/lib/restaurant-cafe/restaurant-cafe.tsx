import React, { ReactNode, useMemo, useState } from 'react';
import {
  DEFAULT_TEMPLATE,
  getLocaleStrings,
  DEFAULT_LOCALE,
  DEFAULT_LANGUAGE_OPTIONS,
  DEFAULT_LANGUAGE_FILTERS,
  ContentOverrides,
  ColorScheme,
  FooterSection,
} from './utils';
import { type LanguageOption } from '@webbitstudio/shared-utils';
import {
  useScrollReveal,
  useLocalizedContent,
  useTemplateLocale,
} from './hooks';
import { Main, RestaurantLayout } from './components';
import {
  type Locale,
  THEME_NAMES,
  ThemeName,
  PageUnderConstruction,
} from '../shared';
import {
  useGeoFilteredLanguages,
  type LanguageFilter,
} from '@webbitstudio/shared-utils';

export interface RestaurantCafeProps {
  // Brand/Company
  restaurantName?: string;
  logo?: ReactNode;

  // Content overrides (optional - falls back to locale strings)
  content?: ContentOverrides;

  // Theme
  theme?: ThemeName;

  // Color scheme (overrides theme colors)
  colors?: ColorScheme;

  // Language switcher
  showLanguageSwitcher?: boolean;
  locale?: Locale;
  onLocaleChange?: (locale: Locale) => void;
  languageOptions?: LanguageOption[];
  languageFilters?: LanguageFilter[];

  // Theme switcher
  showThemeSwitcher?: boolean;

  // Footer
  showFooter?: boolean;
  footerSections?: FooterSection[];
}

/**
 * RestaurantCafe - A restaurant/cafe landing page template
 * Features elegant design with hero, about, menu, info, and reservation sections
 */
export const RestaurantCafe: React.FC<RestaurantCafeProps> = ({
  colors,
  restaurantName,
  content,
  footerSections,
  languageOptions = DEFAULT_LANGUAGE_OPTIONS,
  languageFilters = DEFAULT_LANGUAGE_FILTERS,
  locale = DEFAULT_LOCALE,
  logo = DEFAULT_TEMPLATE.logo,
  onLocaleChange,
  showFooter = true,
  showLanguageSwitcher = true,
  showThemeSwitcher = true,
  theme = THEME_NAMES.WARM,
}) => {
  const addToRefs = useScrollReveal();

  // State to track current page
  const [currentPage, setCurrentPage] = useState<string | null>(null);

  // Manage locale state (reads from URL params, handles controlled/uncontrolled)
  const { currentLocale, handleLocaleChange } = useTemplateLocale({
    locale,
    defaultLocale: DEFAULT_LOCALE,
    onLocaleChange,
  });

  // Filter languages based on user's geographic location
  const { languages: filteredLanguages } = useGeoFilteredLanguages({
    languages: languageOptions,
    filters: languageFilters,
  });

  // Get locale strings based on current locale
  const localeStrings = useMemo(
    () => getLocaleStrings(currentLocale),
    [currentLocale]
  );

  // Use localized default restaurant name if not provided
  const displayRestaurantName =
    restaurantName ?? localeStrings.defaultRestaurantName;

  // Get localized content with overrides
  const displayContent = useLocalizedContent(localeStrings, content);

  return (
    <RestaurantLayout
      restaurantName={displayRestaurantName}
      logo={logo}
      colors={colors}
      theme={theme}
      locale={currentLocale}
      onLocaleChange={handleLocaleChange}
      languageOptions={filteredLanguages}
      showLanguageSwitcher={showLanguageSwitcher}
      showThemeSwitcher={showThemeSwitcher}
      showFooter={showFooter}
      footerSections={footerSections}
    >
      {currentPage ? (
        <PageUnderConstruction
          pageName={currentPage}
          onBackClick={() => setCurrentPage(null)}
          locale={localeStrings.pageUnderConstruction}
        />
      ) : (
        <Main
          heroSubtitle={displayContent.heroSubtitle}
          heroTitle={displayContent.heroTitle}
          heroDescription={displayContent.heroDescription}
          heroCta={displayContent.heroCta}
          heroCtaHref="#"
          heroCtaOnClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            setCurrentPage(displayContent.heroCta);
          }}
          aboutTitle={displayContent.aboutTitle}
          aboutParagraph1={displayContent.aboutParagraph1}
          aboutParagraph2={displayContent.aboutParagraph2}
          restaurantName={displayRestaurantName}
          menuTitle={displayContent.menuTitle}
          menuDescription={displayContent.menuDescription}
          menuItems={displayContent.menuItems}
          hoursTitle={displayContent.hoursTitle}
          hours={displayContent.hours}
          locationTitle={displayContent.locationTitle}
          location={displayContent.location}
          contactTitle={displayContent.contactTitle}
          contact={displayContent.contact}
          reservationTitle={displayContent.reservationTitle}
          reservationDescription={displayContent.reservationDescription}
          reservationButton={displayContent.reservationButton}
          reservationHref="#"
          reservationOnClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            setCurrentPage(displayContent.reservationButton);
          }}
          addToRefs={addToRefs}
          locale={localeStrings}
        />
      )}
    </RestaurantLayout>
  );
};

export default RestaurantCafe;
