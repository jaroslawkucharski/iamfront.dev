import { getRelativeLocaleUrl } from 'astro:i18n';

import { getProjects } from '@helpers/projects/getProjects';
import { getSkillName } from '@helpers/skills/getSkillName';
import { getDictionary } from '@lib/i18n/getDictionary';
import { interpolate } from '@lib/i18n/interpolate';
import type { Locale } from '@lib/i18n/languages';
import { plural } from '@lib/i18n/plural';

import type { BadgeItem } from '@molecules/BadgeList/BadgeList.astro';

export const getSkillBadges = async (ids: readonly string[], locale: Locale): Promise<BadgeItem[]> => {
  const { projectCount } = getDictionary(locale);
  const projects = await getProjects(locale);

  return Promise.all(
    ids.map(async (id) => {
      const label = await getSkillName(id, locale);
      const count = projects.filter((project) => project.stack.includes(id)).length;

      if (!count) return { label };

      const hint = ` – ${interpolate(plural(projectCount, count, locale), { count: String(count) })}`;

      return {
        label,
        href: `${getRelativeLocaleUrl(locale, 'projects/')}?skills=${id}`,
        title: `${label}${hint}`,
        hint,
      };
    }),
  );
};
