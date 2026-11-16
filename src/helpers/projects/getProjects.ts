import { getCollection, type CollectionEntry } from 'astro:content';

import type { Locale } from '@lib/i18n/languages';
import { localize } from '@lib/i18n/localize';

type ProjectTypes = 'commercial' | 'private';
type StoryParts = 'situation' | 'task' | 'action' | 'result';

export interface Project {
  id: string;
  name: string;
  types: readonly ProjectTypes[];
  featured?: boolean;
  archived?: boolean;
  planned?: boolean;
  company?: string;
  start?: string;
  end?: string;
  stack: readonly string[];
  links: { live?: string; repo?: string };
  summary: string;
  star: Record<StoryParts, string>;
}

const toProject = ({ id, data }: CollectionEntry<'projects'>, locale: Locale): Project => ({
  ...data,
  id,
  name: localize(data.name, locale),
  company: data.company && localize(data.company, locale),
  stack: data.stack.map((skill) => skill.id),
  links: {
    live: data.links.live && localize(data.links.live, locale),
    repo: data.links.repo && localize(data.links.repo, locale),
  },
  summary: localize(data.summary, locale),
  star: {
    situation: localize(data.star.situation, locale),
    task: localize(data.star.task, locale),
    action: localize(data.star.action, locale),
    result: localize(data.star.result, locale),
  },
});

const byStatus = (first: Project, second: Project) =>
  Number(Boolean(first.archived)) - Number(Boolean(second.archived)) ||
  (second.end ?? '9999-12').localeCompare(first.end ?? '9999-12') ||
  (second.start ?? '9999-12').localeCompare(first.start ?? '9999-12');

export const getProjects = async (locale: Locale): Promise<Project[]> =>
  (await getCollection('projects')).map((entry) => toProject(entry, locale)).sort(byStatus);
