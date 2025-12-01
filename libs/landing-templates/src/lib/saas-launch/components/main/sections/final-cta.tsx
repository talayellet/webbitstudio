import React from 'react';
import clsx from 'clsx';
import { STYLES } from '../../../utils';

interface FinalCtaSectionProps {
  finalCtaTitle: string;
  finalCtaDescription: string;
  finalCtaButton: string;
  finalCtaHref: string;
  finalCtaOnClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  addToRefs: (el: HTMLElement | null) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  finalCtaTitle,
  finalCtaDescription,
  finalCtaButton,
  finalCtaHref,
  finalCtaOnClick,
  addToRefs,
}) => {
  return (
    <section
      ref={addToRefs}
      className={clsx(STYLES.FINAL_CTA_SECTION, STYLES.REVEAL)}
    >
      <div className={STYLES.CONTAINER}>
        <h2 className={clsx(STYLES.FINAL_CTA_TITLE, STYLES.TEXT_GRADIENT)}>
          {finalCtaTitle}
        </h2>
        <p className={STYLES.FINAL_CTA_DESCRIPTION}>{finalCtaDescription}</p>
        <a
          href={finalCtaHref}
          onClick={finalCtaOnClick}
          className={clsx(STYLES.PRIMARY_BUTTON)}
        >
          {finalCtaButton}
        </a>
      </div>
    </section>
  );
};
