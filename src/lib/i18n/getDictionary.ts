import en from '@/i18n/en.json';
import pl from '@/i18n/pl.json';
import { interpolate } from '@/lib/i18n/interpolate';
import type { Locale } from '@/lib/i18n/languages';
import { plural, type PluralForms } from '@/lib/i18n/plural';

type Shape<T> = Omit<T, 'experienceYears'> & { experienceYears: PluralForms };
export type Dictionary = Shape<typeof en>;

type PluralKey = { [Key in keyof Dictionary]: Dictionary[Key] extends PluralForms ? Key : never }[keyof Dictionary];
type Value = string | { plural: PluralKey; count: number };

const dictionaries = { en, pl } satisfies Record<Locale, Shape<typeof en> & Shape<typeof pl>>;

export const getDictionary = (locale: Locale, values: Record<string, Value> = {}): Dictionary => {
  const dictionary: Dictionary = dictionaries[locale];
  const resolved = Object.fromEntries(
    Object.entries(values).map(([name, value]) => [
      name,
      typeof value === 'string' ? value : plural(dictionary[value.plural], value.count, locale),
    ]),
  );

  return interpolate(dictionary, resolved);
};
