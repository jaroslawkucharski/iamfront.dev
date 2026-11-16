import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

import { iconNames } from '@atoms/Icon/iconNames';

const localized = z.union([z.string(), z.object({ en: z.string(), pl: z.string() })]);
const localizedUrl = z.union([z.url(), z.object({ en: z.url(), pl: z.url() })]);
const withOrder = (text: string) =>
  (JSON.parse(text) as Record<string, unknown>[]).map((item, order) => ({ ...item, order }));

const ordered = { parser: withOrder };

const isoDate = z.string().regex(/^\d{4}(-\d{2})?$/, 'date must be "YYYY" or "YYYY-MM"');

const timelineEntry = z.object({
  name: localized,
  shortName: localized.optional(),
  logo: z.string().optional(),
  icon: z.enum(iconNames).optional(),
  url: z.url().optional(),
  start: isoDate,
  end: isoDate.optional(),
  title: localized,
  titleNote: localized.optional(),
  sections: z
    .array(
      z.object({
        title: localized,
        stack: z.array(reference('skills')).optional(),
        items: z.array(localized),
        project: reference('projects').optional(),
      }),
    )
    .optional(),
});

const skillCategories = defineCollection({
  loader: file('src/data/skillCategories.json', ordered),
  schema: z.object({ label: localized, order: z.number() }),
});

const skills = defineCollection({
  loader: file('src/data/skills.json', ordered),
  schema: z.object({
    name: localized,
    category: reference('skillCategories'),
    featured: z.boolean().optional(),
    order: z.number(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/data/projects' }),
  schema: z.object({
    name: localized,
    types: z.array(z.enum(['commercial', 'private'])),
    featured: z.boolean().optional(),
    archived: z.boolean().optional(),
    planned: z.boolean().optional(),
    company: localized.optional(),
    start: isoDate.optional(),
    end: isoDate.optional(),
    stack: z.array(reference('skills')),
    links: z.object({ live: localizedUrl.optional(), repo: localizedUrl.optional() }),
    summary: localized,
    star: z.object({ situation: localized, task: localized, action: localized, result: localized }),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/data/experience' }),
  schema: timelineEntry,
});

const education = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/data/education' }),
  schema: timelineEntry,
});

const hobbies = defineCollection({
  loader: file('src/data/hobbies.json', ordered),
  schema: z.object({ title: localized, description: localized, icon: z.enum(iconNames).optional(), order: z.number() }),
});

const profile = defineCollection({
  loader: glob({ pattern: 'profile.json', base: './src/data' }),
  schema: z.object({
    highlights: z.array(localized),
    bio: z.array(localized),
    contact: z.object({ intro: localized, points: z.array(localized) }),
  }),
});

const textPage = z.object({
  title: z.string(),
  intro: z.string(),
  sections: z.array(
    z.object({
      heading: z.string(),
      paragraphs: z.array(z.string()).optional(),
      items: z.array(z.string()).optional(),
    }),
  ),
});

const textPages = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/data/textPages' }),
  schema: z.object({ updated: z.iso.date(), en: textPage, pl: textPage }),
});

export const collections = {
  skillCategories,
  skills,
  projects,
  experience,
  education,
  hobbies,
  profile,
  textPages,
};
