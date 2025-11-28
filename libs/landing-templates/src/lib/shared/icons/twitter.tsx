import React from 'react';
import clsx from 'clsx';
import { DEFAULT_SOCIAL_MEDIA_ICON_SIZE, SocialMediaIconProps } from './utils';

export const TwitterIcon: React.FC<SocialMediaIconProps> = ({
  className,
  size = DEFAULT_SOCIAL_MEDIA_ICON_SIZE,
  ...props
}) => {
  const { height, width } = DEFAULT_SOCIAL_MEDIA_ICON_SIZE;
  return (
    <svg
      {...props}
      height={height}
      width={width}
      className={clsx(className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
};
