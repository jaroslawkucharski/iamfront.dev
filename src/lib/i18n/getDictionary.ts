import en from '@/i18n/en.json';
import pl from '@/i18n/pl.json';
import type { Locale } from '@/lib/i18n/languages';
import type { PluralForms } from '@/lib/i18n/plural';

type Shape<T> = Omit<T, 'experienceYears'> & { experienceYears: PluralForms };
export type Dictionary = Shape<typeof en>;

const dictionaries = { en, pl } satisfies Record<Locale, Shape<typeof en> & Shape<typeof pl>>;

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
