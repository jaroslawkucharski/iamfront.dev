import type { CollectionEntry } from 'astro:content';

type Project = CollectionEntry<'projects'>['data'];

const ongoing = '9999-12';

export const sortProjects = (projects: Project[]) =>
  [...projects].sort(
    (first, second) =>
      Number(Boolean(first.archived)) - Number(Boolean(second.archived)) ||
      (second.end ?? ongoing).localeCompare(first.end ?? ongoing) ||
      (second.start ?? ongoing).localeCompare(first.start ?? ongoing),
  );
