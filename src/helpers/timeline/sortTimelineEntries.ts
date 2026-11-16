import type { CollectionEntry } from 'astro:content';

type TimelineEntry = CollectionEntry<'experience'> | CollectionEntry<'education'>;

const byDate = ({ id: firstId, data: first }: TimelineEntry, { id: secondId, data: second }: TimelineEntry) =>
  Number(Boolean(first.end)) - Number(Boolean(second.end)) ||
  (second.end ?? '').localeCompare(first.end ?? '') ||
  second.start.localeCompare(first.start) ||
  firstId.localeCompare(secondId);

export const sortTimelineEntries = <Entry extends TimelineEntry>(entries: Entry[]): Entry[] =>
  [...entries].sort(byDate);
