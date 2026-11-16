import { getEntry } from 'astro:content';

import { getExperienceValues } from '@helpers/experience/getExperienceValues';
import { resolveValues } from '@lib/i18n/getDictionary';
import { interpolate } from '@lib/i18n/interpolate';
import type { Locale } from '@lib/i18n/languages';
import { localize } from '@lib/i18n/localize';

export const getProfile = async (locale: Locale) => {
  const profile = await getEntry('profile', 'profile');

  if (!profile) throw new Error('Missing src/data/profile.json');

  const { highlights, bio, contact } = profile.data;
  const values = resolveValues(locale, getExperienceValues());

  return {
    highlights: highlights.map((highlight) => interpolate(localize(highlight, locale), values)),
    bio: bio.map((paragraph) => interpolate(localize(paragraph, locale), values)),
    contact: {
      intro: localize(contact.intro, locale),
      points: contact.points.map((point) => localize(point, locale)),
    },
  };
};
