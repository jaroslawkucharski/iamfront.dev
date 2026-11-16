import { getCollection } from 'astro:content';

import { sortTimelineEntries } from '@helpers/timeline/sortTimelineEntries';
import { toTimelineEntry } from '@helpers/timeline/toTimelineEntry';
import type { Locale } from '@lib/i18n/languages';

export const getExperienceEntries = async (locale: Locale) =>
  Promise.all(sortTimelineEntries(await getCollection('experience')).map((entry) => toTimelineEntry(entry, locale)));
