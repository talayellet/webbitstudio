import { useMemo, useState, useRef, ReactNode } from 'react';
import clsx from 'clsx';
import { CURRENCY_SWITCHER_STYLES } from './utils';
import { DefaultChevronIcon } from '../svg-icons';
import { CurrencyOption, useClickOutside } from '@webbitstudio/shared-utils';

export interface CurrencySwitcherProps<T = string> {
  currentCurrency: T;
  currencies: CurrencyOption<T>[];
  onCurrencyChange: (currency: T) => void;
  chevronIcon?: ReactNode;
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
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentOption = useMemo(
    () => currencies.find((curr) => curr.code === currentCurrency),
    [currencies, currentCurrency]
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
        >
          <span className={mergedStyles.SYMBOL}>{currentOption.symbol}</span>
          <span className={mergedStyles.LABEL}>{currentOption.code}</span>
          {chevronIcon || (
            <DefaultChevronIcon className={mergedStyles.CHEVRON_ICON} />
          )}
        </button>

        {isOpen && (
          <div className={mergedStyles.MENU_ITEMS}>
            {currencies.map((option) => {
              const isActive = option.code === currentCurrency;

              return (
                <button
                  key={option.code}
                  onClick={() => {
                    onCurrencyChange(option.code as T);
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
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
