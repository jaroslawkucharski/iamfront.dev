import en from '@i18n/en.json';
import pl from '@i18n/pl.json';
import { interpolate } from '@lib/i18n/interpolate';
import type { Locale } from '@lib/i18n/languages';

const dictionaries: Record<Locale, typeof en> = { en, pl };

export const getDictionary = (locale: Locale, values: Record<string, string> = {}) =>
  interpolate(dictionaries[locale], values);
