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
  CURRENCY_SWITCHER_STYLES,
  CURRENCY_SWITCHER_TRANSITION,
} from './utils';
import { DefaultChevronIcon } from '../svg-icons';
import { CurrencyOption } from '@webbitstudio/shared-utils';

export interface CurrencySwitcherProps<T = string> {
  currentCurrency: T;
  currencies: CurrencyOption<T>[];
  onCurrencyChange: (currency: T) => void;
  chevronIcon?: React.ReactNode;
  styles?: Partial<typeof CURRENCY_SWITCHER_STYLES>;
}

export const CurrencySwitcher = <T extends string = string>({
  currentCurrency,
  currencies,
  onCurrencyChange,
  chevronIcon,
  styles = {},
}: CurrencySwitcherProps<T>) => {
  const mergedStyles = { ...CURRENCY_SWITCHER_STYLES, ...styles };

  const currentOption = useMemo(
    () => currencies.find((curr) => curr.code === currentCurrency),
    [currencies, currentCurrency]
  );

  if (!currentOption) {
    return null;
  }

  return (
    <Menu as="div" className={mergedStyles.CONTAINER}>
      <div className={mergedStyles.WRAPPER}>
        <MenuButton className={mergedStyles.BUTTON}>
          <span className={mergedStyles.SYMBOL}>{currentOption.symbol}</span>
          <span className={mergedStyles.LABEL}>{currentOption.code}</span>
          {chevronIcon || (
            <DefaultChevronIcon className={mergedStyles.CHEVRON_ICON} />
          )}
        </MenuButton>

        <Transition
          as={Fragment}
          enter={CURRENCY_SWITCHER_TRANSITION.ENTER}
          enterFrom={CURRENCY_SWITCHER_TRANSITION.ENTER_FROM}
          enterTo={CURRENCY_SWITCHER_TRANSITION.ENTER_TO}
          leave={CURRENCY_SWITCHER_TRANSITION.LEAVE}
          leaveFrom={CURRENCY_SWITCHER_TRANSITION.LEAVE_FROM}
          leaveTo={CURRENCY_SWITCHER_TRANSITION.LEAVE_TO}
        >
          <MenuItems className={mergedStyles.MENU_ITEMS}>
            {currencies.map((option) => {
              const isActive = option.code === currentCurrency;

              return (
                <MenuItem key={option.code}>
                  {({ focus }) => (
                    <button
                      onClick={() => onCurrencyChange(option.code as T)}
                      className={clsx(
                        mergedStyles.MENU_ITEM_BUTTON,
                        focus && mergedStyles.MENU_ITEM_ACTIVE,
                        isActive && mergedStyles.MENU_ITEM_SELECTED
                      )}
                    >
                      <span className={mergedStyles.MENU_ITEM_SYMBOL}>
                        {option.symbol}
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
