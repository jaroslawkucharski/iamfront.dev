import { getEntry, type CollectionEntry } from 'astro:content';

import { getProjectHref } from '@helpers/projects/getProjectHref';
import { getSkillBadges } from '@helpers/skills/getSkillBadges';
import { sortSkills } from '@helpers/skills/sortSkills';
import type { Locale } from '@lib/i18n/languages';
import { localize } from '@lib/i18n/localize';

import type { EntryData } from '@organisms/Entry/Entry.astro';

type Section = NonNullable<CollectionEntry<'experience'>['data']['sections']>[number];

const getSectionStack = async ({ stack, project }: Section) => {
  if (stack) return sortSkills(stack.map((skill) => skill.id));

  if (!project) return undefined;

  const entry = await getEntry(project);

  if (!entry) throw new Error(`Unknown project "${project.id}" – check src/data/projects/`);

  return sortSkills(entry.data.stack.map((skill) => skill.id));
};

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
      data.sections.map(async (section) => {
        const stack = await getSectionStack(section);

        return {
          title: localize(section.title, locale),
          stack: stack && (await getSkillBadges(stack, locale)),
          items: section.items.map((item) => localize(item, locale)),
          projectHref: section.project && getProjectHref(section.project.id, locale),
        };
      }),
    )),
});
