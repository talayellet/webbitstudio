import React, { useState, useRef, useEffect } from 'react';
import * as styles from '../utils/styles';

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[];
  label: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  onChange,
  placeholder,
  options,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.form.fieldContainer}>
      <label className={styles.typography.label}>{label}</label>
      <div ref={containerRef} className={styles.customSelect.wrapper}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={styles.customSelect.trigger}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className={value ? '' : 'text-slate-500'}>
            {value || placeholder}
          </span>
          <svg
            className={`${styles.customSelect.icon} ${
              isOpen ? 'rotate-180' : ''
            } transition-transform`}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isOpen && (
          <ul className={styles.customSelect.menu} role="listbox">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className={`${styles.customSelect.option} ${
                  value === option ? styles.customSelect.optionSelected : ''
                }`}
                role="option"
                aria-selected={value === option}
              >
                {option}
                {value === option && (
                  <svg
                    className="ml-auto h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
