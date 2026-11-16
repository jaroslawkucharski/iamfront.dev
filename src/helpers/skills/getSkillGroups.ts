import { getCollection } from 'astro:content';

import { getSkillBadges } from '@helpers/skills/getSkillBadges';
import { sortByOrder } from '@helpers/sortByOrder';
import type { Locale } from '@lib/i18n/languages';
import { localize } from '@lib/i18n/localize';

export const getSkillGroups = async (locale: Locale) => {
  const categories = sortByOrder(await getCollection('skillCategories'));
  const featured = sortByOrder(await getCollection('skills')).filter((skill) => skill.data.featured);

  const groups = await Promise.all(
    categories.map(async (category) => ({
      label: localize(category.data.label, locale),
      items: await getSkillBadges(
        featured.filter((skill) => skill.data.category.id === category.id).map((skill) => skill.id),
        locale,
      ),
    })),
  );

  return groups.filter((group) => group.items.length > 0);
};
