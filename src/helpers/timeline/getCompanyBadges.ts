import { getCollection } from 'astro:content';
import { getRelativeLocaleUrl } from 'astro:i18n';

import { sortTimelineEntries } from '@helpers/timeline/sortTimelineEntries';
import { getDictionary } from '@lib/i18n/getDictionary';
import { interpolate } from '@lib/i18n/interpolate';
import type { Locale } from '@lib/i18n/languages';
import { localize } from '@lib/i18n/localize';

import type { BadgeItem } from '@molecules/BadgeList/BadgeList.astro';

export const getCompanyBadges = async (locale: Locale): Promise<BadgeItem[]> => {
  const { hero } = getDictionary(locale);

  const companies = sortTimelineEntries(await getCollection('experience')).map(({ id, data }) => {
    const name = localize(data.shortName ?? data.name, locale);

    return {
      label: name,
      href: `${getRelativeLocaleUrl(locale, 'about/')}#${id}`,
      title: interpolate(hero.companyTitle, { name }),
      muted: true,
    };
  });

  return companies.filter((company, index) => companies.findIndex(({ label }) => label === company.label) === index);
};
