import { person } from '@config/site';
import { getDictionary } from '@lib/i18n/getDictionary';
import type { Locale } from '@lib/i18n/languages';
import { plural } from '@lib/i18n/plural';

export const getExperienceText = (locale: Locale, now = new Date()): string => {
  const start = new Date(person.careerStart);
  const months = (now.getUTCFullYear() - start.getUTCFullYear()) * 12 + now.getUTCMonth() - start.getUTCMonth();
  const years = Math.floor(months / 12);
  const { experienceYears } = getDictionary(locale);

  return `${years}${months % 12 > 0 ? '+' : ''} ${plural(experienceYears, years, locale)}`;
};
