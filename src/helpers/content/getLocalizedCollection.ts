import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content';

import type { Locale } from '@lib/i18n/languages';

export const getLocalizedCollection = async <Collection extends CollectionKey>(
  collection: Collection,
  locale: Locale,
): Promise<CollectionEntry<Collection>['data'][]> => {
  const entries: CollectionEntry<Collection>[] = await getCollection(collection);

  return entries
    .map(({ data }) => data)
    .filter((data) => data.locale === locale)
    .sort((first, second) => first.order - second.order);
};
