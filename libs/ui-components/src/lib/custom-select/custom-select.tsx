import { useState, useRef, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import {
  generateUniqueId,
  useScrollIntoView,
} from '@webbitstudio/shared-utils';
import { CUSTOM_SELECT_STYLES, CUSTOM_SELECT_ID_PREFIXES } from './utils';
import { ChevronDownIcon, CheckIcon } from '../svg-icons';
import { useSelectKeyboardNavigation } from './hooks';

export interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[];
  label?: string;
  labelClassName?: string;
  fieldContainerClassName?: string;
  wrapperClassName?: string;
  triggerClassName?: string;
  iconClassName?: string;
  menuClassName?: string;
  optionClassName?: string;
  optionSelectedClassName?: string;
}

export const CustomSelect = ({
  value,
  onChange,
  placeholder,
  options,
  label,
  labelClassName = '',
  fieldContainerClassName = '',
  wrapperClassName = CUSTOM_SELECT_STYLES.WRAPPER,
  triggerClassName = '',
  iconClassName = '',
  menuClassName = '',
  optionClassName = '',
  optionSelectedClassName = '',
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<(HTMLLIElement | null)[]>([]);

  const buttonId = useMemo(
    () => generateUniqueId(CUSTOM_SELECT_ID_PREFIXES.BUTTON),
    []
  );
  const labelId = useMemo(
    () => generateUniqueId(CUSTOM_SELECT_ID_PREFIXES.LABEL),
    []
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  const { handleButtonKeyDown, handleListKeyDown } =
    useSelectKeyboardNavigation({
      isOpen,
      focusedIndex,
      options,
      value,
      setIsOpen,
      setFocusedIndex,
      onSelect: handleSelect,
    });

  useScrollIntoView({
    isActive: isOpen,
    index: focusedIndex,
    elementsRef: optionsRef,
  });

  return (
    <div className={fieldContainerClassName}>
      {label && (
        <label id={labelId} className={labelClassName}>
          {label}
        </label>
      )}
      <div ref={containerRef} className={wrapperClassName}>
        <button
          id={buttonId}
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) {
              const currentIndex = options.indexOf(value);
              setFocusedIndex(currentIndex >= 0 ? currentIndex : 0);
            }
          }}
          onKeyDown={handleButtonKeyDown}
          className={triggerClassName}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={label ? labelId : undefined}
          aria-label={!label ? placeholder : undefined}
        >
          <span className={value ? '' : CUSTOM_SELECT_STYLES.PLACEHOLDER}>
            {value || placeholder}
          </span>
          <ChevronDownIcon
            className={clsx(
              iconClassName,
              isOpen && CUSTOM_SELECT_STYLES.CHEVRON_ROTATED,
              CUSTOM_SELECT_STYLES.CHEVRON_TRANSITION
            )}
          />
        </button>
        {isOpen && (
          <ul
            className={menuClassName}
            role="listbox"
            aria-labelledby={label ? labelId : undefined}
            onKeyDown={handleListKeyDown}
            tabIndex={-1}
          >
            {options.map((option, index) => (
              <li
                key={index}
                ref={(el) => {
                  optionsRef.current[index] = el;
                }}
                onClick={() => handleSelect(option)}
                className={clsx(
                  optionClassName,
                  value === option && optionSelectedClassName,
                  focusedIndex === index && CUSTOM_SELECT_STYLES.FOCUSED_OPTION
                )}
                role="option"
                aria-selected={value === option}
                tabIndex={-1}
              >
                {option}
                {value === option && (
                  <CheckIcon className={CUSTOM_SELECT_STYLES.CHECK_ICON} />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
