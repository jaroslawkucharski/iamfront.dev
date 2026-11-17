import { getRelativeLocaleUrl } from 'astro:i18n';

import { getDictionary } from '@lib/i18n/getDictionary';
import { interpolate } from '@lib/i18n/interpolate';
import type { Locale } from '@lib/i18n/languages';
import { plural } from '@lib/i18n/plural';
import type { BadgeItem } from '@typings/badge';
import type { Project } from '@typings/content';

export const getSkillBadges = (skills: string[], projects: Project[], locale: Locale): BadgeItem[] => {
  const { projectCount } = getDictionary(locale);

  return skills.map((label) => {
    const count = projects.filter((project) => project.stack.includes(label)).length;

    if (!count) return { label };

    const hint = ` – ${interpolate(plural(projectCount, count, locale), { count: String(count) })}`;

    return {
      label,
      href: `${getRelativeLocaleUrl(locale, 'projects/')}?skills=${encodeURIComponent(label)}`,
      title: `${label}${hint}`,
      hint,
    };
  });
};
