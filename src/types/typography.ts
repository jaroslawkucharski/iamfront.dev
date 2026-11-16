export type Sizes = 'xs' | 'sm' | 'md' | 'lg';
export type Weights = 'regular' | 'medium' | 'semibold';
export type Colors = 'default' | 'strong' | 'muted';
export type Trackings = 'normal' | 'label' | 'wide';

export interface TypographyProps {
  size?: Sizes;
  weight?: Weights;
  color?: Colors;
  tracking?: Trackings;
  uppercase?: boolean;
}
