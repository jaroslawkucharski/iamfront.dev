import type { CollectionEntry } from 'astro:content';

import { getProjectHref } from '@helpers/projects/getProjectHref';
import { getSkillBadges } from '@helpers/skills/getSkillBadges';
import type { Locale } from '@lib/i18n/languages';
import { localize } from '@lib/i18n/localize';

import type { EntryData } from '@organisms/Entry/Entry.astro';

export const toTimelineEntry = async (
  { id, data }: CollectionEntry<'experience'> | CollectionEntry<'education'>,
  locale: Locale,
): Promise<EntryData> => ({
  id,
  name: localize(data.name, locale),
  logo: data.logo,
  icon: data.icon,
  url: data.url,
  start: data.start,
  end: data.end,
  title: localize(data.title, locale),
  titleNote: data.titleNote && localize(data.titleNote, locale),
  sections:
    data.sections &&
    (await Promise.all(
      data.sections.map(async (section) => ({
        title: localize(section.title, locale),
        stack:
          section.stack &&
          (await getSkillBadges(
            section.stack.map((skill) => skill.id),
            locale,
          )),
        items: section.items.map((item) => localize(item, locale)),
        projectHref: section.project && getProjectHref(section.project.id, locale),
      })),
    )),
});
