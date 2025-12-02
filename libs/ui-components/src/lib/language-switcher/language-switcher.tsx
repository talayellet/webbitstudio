import { Fragment, useMemo } from 'react';
import React from 'react';
import clsx from 'clsx';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { LanguageOption, LANGUAGE_SWITCHER_STYLES, TRANSITION } from './utils';

export interface LanguageSwitcherProps<T = string> {
  currentLanguage: T;
  languages: LanguageOption<T>[];
  onLanguageChange: (language: T) => void;
  chevronIcon?: React.ReactNode;
  styles?: Partial<typeof LANGUAGE_SWITCHER_STYLES>;
}

export const LanguageSwitcher = <T extends string = string>({
  currentLanguage,
  languages,
  onLanguageChange,
  chevronIcon,
  styles = {},
}: LanguageSwitcherProps<T>) => {
  const mergedStyles = { ...LANGUAGE_SWITCHER_STYLES, ...styles };

  const currentOption = useMemo(
    () => languages.find((lang) => lang.code === currentLanguage),
    [languages, currentLanguage]
  );

  if (!currentOption) {
    return null;
  }

  const defaultChevron = (
    <svg
      className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );

  return (
    <Menu as="div" className={mergedStyles.CONTAINER}>
      <div className={mergedStyles.WRAPPER}>
        <MenuButton className={mergedStyles.BUTTON}>
          <span
            className={mergedStyles.FLAG}
            role="img"
            aria-label={currentOption.label}
          >
            {currentOption.flag}
          </span>
          <span className={mergedStyles.LABEL}>{currentOption.label}</span>
          {chevronIcon || defaultChevron}
        </MenuButton>

        <Transition
          as={Fragment}
          enter={TRANSITION.ENTER}
          enterFrom={TRANSITION.ENTER_FROM}
          enterTo={TRANSITION.ENTER_TO}
          leave={TRANSITION.LEAVE}
          leaveFrom={TRANSITION.LEAVE_FROM}
          leaveTo={TRANSITION.LEAVE_TO}
        >
          <MenuItems className={mergedStyles.MENU_ITEMS}>
            {languages.map((option) => {
              const isActive = option.code === currentLanguage;

              return (
                <MenuItem key={option.code}>
                  {({ focus }) => (
                    <button
                      onClick={() => onLanguageChange(option.code)}
                      className={clsx(
                        mergedStyles.MENU_ITEM_BUTTON,
                        focus && mergedStyles.MENU_ITEM_ACTIVE,
                        isActive && mergedStyles.MENU_ITEM_SELECTED
                      )}
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
                  )}
                </MenuItem>
              );
            })}
          </MenuItems>
        </Transition>
      </div>
    </Menu>
  );
};
