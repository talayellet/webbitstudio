export interface SocialMediaIconSize {
  height?: number;
  width?: number;
}

export interface SocialMediaIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: SocialMediaIconSize;
}
