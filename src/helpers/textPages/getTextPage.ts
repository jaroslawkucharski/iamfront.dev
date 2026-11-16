import { getEntry } from 'astro:content';

import type { Locale } from '@lib/i18n/languages';

export const getTextPage = async (id: string, locale: Locale) => {
  const page = await getEntry('textPages', id);

  if (!page) throw new Error(`Missing src/data/textPages/${id}.json`);

  return { ...page.data[locale], updated: page.data.updated };
};
