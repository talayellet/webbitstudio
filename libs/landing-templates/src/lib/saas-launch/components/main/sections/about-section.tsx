import {
  STYLES,
  LocaleStrings,
  DEFAULT_LOCALE_STRINGS,
  DEFAULT_ABOUT_SECTION_TITLE,
  DEFAULT_ABOUT_SECTION_PARAGRAPH_1,
  DEFAULT_ABOUT_SECTION_PARAGRAPH_2,
} from '../../../utils';

export interface AboutSectionProps {
  title?: string;
  paragraph1?: string;
  paragraph2?: string;
  locale?: LocaleStrings;
}

export const AboutSection = ({
  title,
  paragraph1,
  paragraph2,
  locale = DEFAULT_LOCALE_STRINGS,
}: AboutSectionProps = {}) => {
  // Use props if provided, otherwise use locale, otherwise use defaults
  const displayTitle =
    title ?? locale.about.title ?? DEFAULT_ABOUT_SECTION_TITLE;
  const displayParagraph1 =
    paragraph1 ?? locale.about.paragraph1 ?? DEFAULT_ABOUT_SECTION_PARAGRAPH_1;
  const displayParagraph2 =
    paragraph2 ?? locale.about.paragraph2 ?? DEFAULT_ABOUT_SECTION_PARAGRAPH_2;

  return (
    <div className={STYLES.ABOUT_SECTION}>
      <div className={STYLES.CONTAINER}>
        <div className={STYLES.ABOUT_SECTION_CONTENT}>
          <h2 className={STYLES.ABOUT_SECTION_TITLE}>{displayTitle}</h2>
          <p className={STYLES.ABOUT_SECTION_PARAGRAPH_1}>
            {displayParagraph1}
          </p>
          <p className={STYLES.ABOUT_SECTION_PARAGRAPH_2}>
            {displayParagraph2}
          </p>
        </div>
      </div>
    </div>
  );
};
