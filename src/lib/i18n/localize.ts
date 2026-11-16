import type { Locale } from '@lib/i18n/languages';

export type Localized = string | Record<Locale, string>;

export const localize = (value: Localized, locale: Locale): string =>
  typeof value === 'string' ? value : value[locale];
