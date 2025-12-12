import React, { ReactNode, useMemo, useState } from 'react';
import {
  DEFAULT_TEMPLATE,
  getLocaleStrings,
  DEFAULT_LOCALE,
  DEFAULT_LANGUAGE_OPTIONS,
  ContentOverrides,
  ColorScheme,
  FooterSection,
  LanguageOption,
} from './utils';
import { useScrollReveal, useLocalizedContent } from './hooks';
import { Main, RestaurantLayout } from './components';
import {
  type Locale,
  THEME_NAMES,
  ThemeName,
  PageUnderConstruction,
} from '../shared';

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
  restaurantName = DEFAULT_TEMPLATE.restaurantName,
  content,
  footerSections,
  languageOptions = DEFAULT_LANGUAGE_OPTIONS,
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

  // Manage locale internally if not controlled
  const [internalLocale, setInternalLocale] = useState<Locale>(locale);
  const currentLocale = locale !== DEFAULT_LOCALE ? locale : internalLocale;

  // Handle locale changes from LanguageSwitcher
  const handleLocaleChange = (newLocale: Locale) => {
    if (locale === DEFAULT_LOCALE) {
      setInternalLocale(newLocale);
    }
    onLocaleChange?.(newLocale);
  };

  // Get locale strings based on current locale
  const localeStrings = useMemo(
    () => getLocaleStrings(currentLocale),
    [currentLocale]
  );

  // Get localized content with overrides
  const displayContent = useLocalizedContent(localeStrings, content);

  return (
    <RestaurantLayout
      restaurantName={restaurantName}
      logo={logo}
      colors={colors}
      theme={theme}
      locale={currentLocale}
      onLocaleChange={handleLocaleChange}
      languageOptions={languageOptions}
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
          restaurantName={restaurantName}
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
