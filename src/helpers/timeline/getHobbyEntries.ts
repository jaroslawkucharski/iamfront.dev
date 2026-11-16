import { getCollection } from 'astro:content';

import { sortByOrder } from '@helpers/sortByOrder';
import type { Locale } from '@lib/i18n/languages';
import { localize } from '@lib/i18n/localize';

import type { IconName } from '@atoms/Icon/Icon.astro';
import type { EntryData } from '@organisms/Entry/Entry.astro';

export const getHobbyEntries = async (locale: Locale): Promise<EntryData[]> =>
  sortByOrder(await getCollection('hobbies')).map(({ data }) => ({
    name: localize(data.title, locale),
    title: localize(data.description, locale),
    icon: data.icon as IconName | undefined,
  }));
