import React from 'react';
import clsx from 'clsx';
import { ICON_STYLES } from './utils';

export interface ChevronDownIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({
  className,
  ...props
}) => (
  <svg
    {...props}
    className={clsx(ICON_STYLES.CHEVRON_DOWN, className)}
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
