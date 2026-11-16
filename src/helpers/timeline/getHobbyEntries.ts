import { getCollection } from 'astro:content';

import { sortByOrder } from '@helpers/collections/sortByOrder';
import type { Locale } from '@lib/i18n/languages';
import { localize } from '@lib/i18n/localize';

import type { EntryData } from '@organisms/Entry/Entry.astro';

export const getHobbyEntries = async (locale: Locale): Promise<EntryData[]> =>
  sortByOrder(await getCollection('hobbies')).map(({ id, data }) => ({
    id,
    name: localize(data.title, locale),
    title: localize(data.description, locale),
    icon: data.icon,
  }));
