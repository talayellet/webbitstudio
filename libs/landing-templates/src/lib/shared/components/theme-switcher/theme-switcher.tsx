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
import {
  DEFAULT_THEME,
  DEFAULT_THEMES,
  ThemeSwitcherProps,
  THEME_SWITCHER_STYLES,
  ThemeName,
  THEME_POSITIONS,
  THEME_TRANSITION,
} from './utils';
import { ChevronDownIcon } from '../../icons';

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  currentTheme = DEFAULT_THEME.name,
  themes = DEFAULT_THEMES,
  onThemeChange,
  position = THEME_POSITIONS.TOP_RIGHT,
}) => {
  const currentOption = useMemo(
    () => themes.find((theme) => theme.name === currentTheme),
    [themes, currentTheme]
  );

  if (!currentOption) {
    return null;
  }

  const handleThemeChange = (themeName: ThemeName) => {
    onThemeChange?.(themeName);
  };

  return (
    <Menu
      as="div"
      className={clsx(
        THEME_SWITCHER_STYLES.CONTAINER,
        THEME_SWITCHER_STYLES.POSITION[position]
      )}
    >
      <div className={THEME_SWITCHER_STYLES.WRAPPER}>
        <MenuButton className={THEME_SWITCHER_STYLES.BUTTON}>
          <span
            className={THEME_SWITCHER_STYLES.ICON}
            role="img"
            aria-label={currentOption.label}
          >
            {currentOption.icon}
          </span>
          <span className={THEME_SWITCHER_STYLES.LABEL}>
            {currentOption.label}
          </span>
          <ChevronDownIcon />
        </MenuButton>

        <Transition
          as={Fragment}
          enter={THEME_TRANSITION.ENTER}
          enterFrom={THEME_TRANSITION.ENTER_FROM}
          enterTo={THEME_TRANSITION.ENTER_TO}
          leave={THEME_TRANSITION.LEAVE}
          leaveFrom={THEME_TRANSITION.LEAVE_FROM}
          leaveTo={THEME_TRANSITION.LEAVE_TO}
        >
          <MenuItems className={THEME_SWITCHER_STYLES.MENU_ITEMS}>
            {themes.map((option) => {
              const isActive = option.name === currentTheme;

              return (
                <MenuItem key={option.name}>
                  {({ focus }) => (
                    <button
                      onClick={() => handleThemeChange(option.name)}
                      className={clsx(
                        THEME_SWITCHER_STYLES.MENU_ITEM_BUTTON,
                        focus && THEME_SWITCHER_STYLES.MENU_ITEM_ACTIVE,
                        isActive && THEME_SWITCHER_STYLES.MENU_ITEM_SELECTED
                      )}
                    >
                      <span
                        className={THEME_SWITCHER_STYLES.MENU_ITEM_ICON}
                        role="img"
                        aria-label={option.label}
                      >
                        {option.icon}
                      </span>
                      <span
                        className={clsx(
                          THEME_SWITCHER_STYLES.MENU_ITEM_LABEL,
                          isActive
                            ? THEME_SWITCHER_STYLES.MENU_ITEM_LABEL_ACTIVE
                            : THEME_SWITCHER_STYLES.MENU_ITEM_LABEL_INACTIVE
                        )}
                      >
                        {option.label}
                      </span>
                      {isActive && (
                        <span className={THEME_SWITCHER_STYLES.MENU_ITEM_CHECK}>
                          ✓
                        </span>
                      )}
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
