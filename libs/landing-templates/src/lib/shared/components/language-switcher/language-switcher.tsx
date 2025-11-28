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
import { ChevronDownIcon } from '../../icons';

export interface LanguageSwitcherProps {
  currentLanguage: string;
  languages: LanguageOption[];
  onLanguageChange: (language: string) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  languages,
  onLanguageChange,
}) => {
  const currentOption = useMemo(
    () => languages.find((lang) => lang.code === currentLanguage),
    [languages, currentLanguage]
  );

  if (!currentOption) {
    return null;
  }

  return (
    <Menu as="div" className={LANGUAGE_SWITCHER_STYLES.CONTAINER}>
      <div className={LANGUAGE_SWITCHER_STYLES.WRAPPER}>
        <MenuButton className={LANGUAGE_SWITCHER_STYLES.BUTTON}>
          <span
            className={LANGUAGE_SWITCHER_STYLES.FLAG}
            role="img"
            aria-label={currentOption.label}
          >
            {currentOption.flag}
          </span>
          <span className={LANGUAGE_SWITCHER_STYLES.LABEL}>
            {currentOption.label}
          </span>
          <ChevronDownIcon />
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
          <MenuItems className={LANGUAGE_SWITCHER_STYLES.MENU_ITEMS}>
            {languages.map((option) => {
              const isActive = option.code === currentLanguage;

              return (
                <MenuItem key={option.code}>
                  {({ focus }) => (
                    <button
                      onClick={() => onLanguageChange(option.code)}
                      className={clsx(
                        LANGUAGE_SWITCHER_STYLES.MENU_ITEM_BUTTON,
                        focus && LANGUAGE_SWITCHER_STYLES.MENU_ITEM_ACTIVE,
                        isActive && LANGUAGE_SWITCHER_STYLES.MENU_ITEM_SELECTED
                      )}
                    >
                      <span
                        className={LANGUAGE_SWITCHER_STYLES.MENU_ITEM_FLAG}
                        role="img"
                        aria-label={option.label}
                      >
                        {option.flag}
                      </span>
                      <span
                        className={clsx(
                          LANGUAGE_SWITCHER_STYLES.MENU_ITEM_LABEL,
                          isActive
                            ? LANGUAGE_SWITCHER_STYLES.MENU_ITEM_LABEL_ACTIVE
                            : LANGUAGE_SWITCHER_STYLES.MENU_ITEM_LABEL_INACTIVE
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
