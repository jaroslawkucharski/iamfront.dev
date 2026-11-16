import type { Project } from '@helpers/projects/getProjects';
import { getSkillName } from '@helpers/skills/getSkillName';
import type { Locale } from '@lib/i18n/languages';

export const getSkillFilterOptions = async (projects: readonly Project[], locale: Locale) => {
  const counts = new Map<string, number>();

  projects.forEach((project) => project.stack.forEach((id) => counts.set(id, (counts.get(id) ?? 0) + 1)));

  const options = await Promise.all(
    [...counts].map(async ([id, count]) => ({ value: id, count, label: await getSkillName(id, locale) })),
  );

  return options.sort((first, second) => second.count - first.count || first.label.localeCompare(second.label, locale));
};
