import { useMemo, useState, useRef } from 'react';
import React from 'react';
import clsx from 'clsx';
import {
  LanguageOption,
  LANGUAGE_SWITCHER_STYLES,
  LANGUAGE_SWITCHER_DEFAULTS,
} from './utils';
import { DefaultChevronIcon } from '../svg-icons';
import { useClickOutside } from '@webbitstudio/shared-utils';

export interface LanguageSwitcherProps<T = string> {
  currentLanguage: T;
  languages: LanguageOption<T>[];
  onLanguageChange: (language: T) => void;
  chevronIcon?: React.ReactNode;
  styles?: Partial<typeof LANGUAGE_SWITCHER_STYLES>;
  /**
   * Optional aria-label for the button. If not provided, falls back to a default English label.
   * For proper localization, this should be provided by the parent component.
   */
  ariaLabel?: string;
}

export const LanguageSwitcher = <T extends string = string>({
  currentLanguage,
  languages,
  onLanguageChange,
  chevronIcon,
  styles = {},
  ariaLabel,
}: LanguageSwitcherProps<T>) => {
  const mergedStyles = { ...LANGUAGE_SWITCHER_STYLES, ...styles };
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentOption = useMemo(
    () => languages.find((lang) => lang.code === currentLanguage),
    [languages, currentLanguage]
  );

  useClickOutside(containerRef, () => setIsOpen(false), isOpen);

  if (!currentOption) {
    return null;
  }

  return (
    <div ref={containerRef} className={mergedStyles.CONTAINER}>
      <div className={mergedStyles.WRAPPER}>
        <button
          className={mergedStyles.BUTTON}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label={
            ariaLabel ||
            `${LANGUAGE_SWITCHER_DEFAULTS.ARIA_LABEL} ${currentOption.label}`
          }
        >
          <span
            className={mergedStyles.FLAG}
            role="img"
            aria-label={currentOption.label}
          >
            {currentOption.flag}
          </span>
          <span className={mergedStyles.LABEL}>{currentOption.label}</span>
          {chevronIcon || (
            <DefaultChevronIcon className={mergedStyles.CHEVRON_ICON} />
          )}
        </button>

        {isOpen && (
          <div className={mergedStyles.MENU_ITEMS}>
            {languages.map((option) => {
              const isActive = option.code === currentLanguage;

              return (
                <button
                  key={option.code}
                  onClick={() => {
                    onLanguageChange(option.code);
                    setIsOpen(false);
                  }}
                  className={clsx(
                    mergedStyles.MENU_ITEM_BUTTON,
                    isActive && mergedStyles.MENU_ITEM_SELECTED
                  )}
                  onMouseEnter={(e) =>
                    e.currentTarget.classList.add(mergedStyles.MENU_ITEM_ACTIVE)
                  }
                  onMouseLeave={(e) =>
                    e.currentTarget.classList.remove(
                      mergedStyles.MENU_ITEM_ACTIVE
                    )
                  }
                >
                  <span
                    className={mergedStyles.MENU_ITEM_FLAG}
                    role="img"
                    aria-label={option.label}
                  >
                    {option.flag}
                  </span>
                  <span
                    className={clsx(
                      mergedStyles.MENU_ITEM_LABEL,
                      isActive
                        ? mergedStyles.MENU_ITEM_LABEL_ACTIVE
                        : mergedStyles.MENU_ITEM_LABEL_INACTIVE
                    )}
                  >
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
