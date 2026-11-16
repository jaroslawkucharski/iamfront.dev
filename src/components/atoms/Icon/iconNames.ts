export const lucideIconNames = [
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'chevron-down',
  'briefcase',
  'download',
  'git-branch',
  'mail',
  'menu',
  'close',
  'sun',
  'moon',
  'play',
  'pause',
  'plus',
  'search',
  'settings',
  'dice',
  'disc',
  'guitar',
  'droplet',
  'sparkles',
] as const;

export const customIconNames = ['external'] as const;

export const iconNames = [...lucideIconNames, ...customIconNames] as const;

export type LucideIconName = (typeof lucideIconNames)[number];
export type CustomIconName = (typeof customIconNames)[number];
export type IconName = (typeof iconNames)[number];
