import { getCollection } from 'astro:content';

import { sortTimelineEntries } from '@helpers/timeline/sortTimelineEntries';
import { toTimelineEntry } from '@helpers/timeline/toTimelineEntry';
import type { Locale } from '@lib/i18n/languages';

export const getEducationEntries = async (locale: Locale) =>
  Promise.all(sortTimelineEntries(await getCollection('education')).map((entry) => toTimelineEntry(entry, locale)));
