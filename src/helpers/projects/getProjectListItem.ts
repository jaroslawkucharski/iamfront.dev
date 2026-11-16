import { getProjectHref } from '@helpers/projects/getProjectHref';
import type { Project } from '@helpers/projects/getProjects';
import { getSkillName } from '@helpers/skills/getSkillName';
import { getDictionary } from '@lib/i18n/getDictionary';
import type { Locale } from '@lib/i18n/languages';

import type { MediaListItemData } from '@organisms/MediaListItem/MediaListItem.astro';

export const getProjectListItem = async (project: Project, locale: Locale): Promise<MediaListItemData> => {
  const { projects } = getDictionary(locale);

  return {
    title: project.name,
    href: getProjectHref(project.id, locale),
    description: project.summary,
    start: project.start,
    end: project.end,
    archived: Boolean(project.archived),
    labels: [...(project.archived ? [projects.archived] : []), ...(project.planned ? [projects.planned] : [])],
    skills: project.stack,
    tech: await Promise.all(project.stack.map((id) => getSkillName(id, locale))),
  };
};
