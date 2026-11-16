import type { ImageMetadata } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

import { sortSkills } from '@helpers/skills/sortSkills';
import type { Locale } from '@lib/i18n/languages';
import { localize } from '@lib/i18n/localize';

type ProjectTypes = 'commercial' | 'private';
type StoryParts = 'situation' | 'task' | 'action' | 'result';

export interface ProjectImage {
  src: ImageMetadata;
  dark?: ImageMetadata;
  alt: string;
}

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
  gallery: readonly ProjectImage[];
  lighthouse: readonly ProjectImage[];
}

const localizeImage = (
  image: CollectionEntry<'projects'>['data']['gallery'][number],
  locale: Locale,
): ProjectImage => ({
  ...image,
  alt: localize(image.alt, locale),
});

const toProject = async ({ id, data }: CollectionEntry<'projects'>, locale: Locale): Promise<Project> => ({
  ...data,
  id,
  name: localize(data.name, locale),
  company: data.company && localize(data.company, locale),
  stack: await sortSkills(data.stack.map((skill) => skill.id)),
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
  gallery: data.gallery.map((image) => localizeImage(image, locale)),
  lighthouse: (data.lighthouse ?? []).map((image) => localizeImage(image, locale)),
});

const compareDates = (first?: string, second?: string) => {
  if (first === second) return 0;

  if (!first) return -1;

  if (!second) return 1;

  return second.localeCompare(first);
};

const byStatus = (first: Project, second: Project) =>
  Number(Boolean(first.archived)) - Number(Boolean(second.archived)) ||
  compareDates(first.end, second.end) ||
  compareDates(first.start, second.start);

export const getProjects = async (locale: Locale): Promise<Project[]> =>
  (await Promise.all((await getCollection('projects')).map((entry) => toProject(entry, locale)))).sort(byStatus);
