import { defineCollection } from 'astro:content';
import type { Document } from '@contentful/rich-text-types';
import { z } from 'astro/zod';

import { createRichTextRenderer } from '@helpers/richText/createRichTextRenderer';
import { contentfulClient } from '@lib/contentful/contentfulClient';
import { locales } from '@lib/i18n/languages';

import type { IconName } from '@atoms/Icon/iconNames';

const contentfulLoader = (contentType: string) => async () => {
  const entries = await Promise.all(
    locales.map(async (locale) => {
      const { items } = await contentfulClient.getEntries({
        content_type: contentType,
        locale,
        include: 3,
        limit: 1000,
      });

      return items.map(({ sys, fields }) => ({ ...fields, id: `${locale}/${sys.id}`, locale }));
    }),
  );

  return entries.flat();
};

const meta = {
  locale: z.enum(locales),
  order: z.number().default(0),
};

const richText = z.custom<Document>((value) => typeof value === 'object');

const skillNames = z
  .array(z.object({ fields: z.object({ name: z.string() }) }))
  .transform((skills) => skills.map(({ fields }) => fields.name));

const asset = z
  .object({
    fields: z.object({
      file: z.object({
        url: z.string(),
        details: z.object({ image: z.object({ width: z.number(), height: z.number() }) }),
      }),
    }),
  })
  .transform(({ fields: { file } }) => ({ src: `https:${file.url}`, ...file.details.image }));

const themedImage = z
  .object({ fields: z.object({ image: asset, imageDark: asset.optional(), alt: z.string().default('') }) })
  .transform(({ fields }) => ({ src: fields.image, dark: fields.imageDark, alt: fields.alt }));

const file = z
  .object({
    fields: z.object({
      file: z.object({ url: z.string(), fileName: z.string(), details: z.object({ size: z.number() }) }),
    }),
  })
  .transform(({ fields: { file } }) => ({
    url: `https:${file.url}`,
    fileName: file.fileName,
    size: file.details.size,
  }));

const projects = defineCollection({
  loader: contentfulLoader('project'),
  schema: z
    .object({
      locale: meta.locale,
      slug: z.string(),
      name: z.string(),
      types: z.array(z.enum(['commercial', 'private'])),
      featured: z.boolean().optional(),
      archived: z.boolean().optional(),
      company: z.string().optional(),
      start: z.string().optional(),
      end: z.string().optional(),
      stack: skillNames,
      liveUrl: z.string().optional(),
      repoUrl: z.string().optional(),
      summary: richText,
      situation: richText,
      task: richText,
      action: richText,
      result: richText,
      gallery: z.array(themedImage).default([]),
      lighthouse: z.array(themedImage).optional(),
    })
    .transform(({ slug, liveUrl, repoUrl, summary, situation, task, action, result, ...project }) => {
      const render = createRichTextRenderer(project.locale);

      return {
        ...project,
        id: slug,
        links: { live: liveUrl, repo: repoUrl },
        summary: render.text(summary),
        star: {
          situation: render.html(situation),
          task: render.html(task),
          action: render.html(action),
          result: render.html(result),
        },
      };
    }),
});

const timeline = defineCollection({
  loader: contentfulLoader('timelineEntry'),
  schema: z
    .object({
      ...meta,
      slug: z.string(),
      kind: z.enum(['experience', 'education', 'hobby']),
      featured: z.boolean().optional(),
      name: z.string(),
      shortName: z.string().optional(),
      logo: themedImage.optional(),
      icon: z.custom<IconName>((value) => typeof value === 'string').optional(),
      url: z.string().optional(),
      start: z.string().optional(),
      end: z.string().optional(),
      title: richText,
      titleNote: z.string().optional(),
      sections: z
        .array(
          z.object({
            fields: z.object({
              title: z.string(),
              stack: skillNames.optional(),
              items: richText,
              project: z.object({ fields: z.object({ slug: z.string() }) }).optional(),
            }),
          }),
        )
        .optional(),
    })
    .transform(({ slug, title, sections, ...entry }) => {
      const render = createRichTextRenderer(entry.locale);

      return {
        ...entry,
        id: slug,
        title: render.text(title),
        sections: sections?.map(({ fields }) => ({
          title: fields.title,
          stack: fields.stack,
          items: render.items(fields.items),
          project: fields.project?.fields.slug,
        })),
      };
    }),
});

const skillCategories = defineCollection({
  loader: contentfulLoader('skillCategory'),
  schema: z.object({
    ...meta,
    label: z.string(),
    skills: skillNames,
  }),
});

const profile = defineCollection({
  loader: contentfulLoader('profile'),
  schema: z
    .object({
      ...meta,
      highlights: z.array(z.string()),
      bio: richText,
      contactIntro: z.string(),
      contactPoints: richText,
      cv: file.optional(),
    })
    .transform(({ bio, contactIntro, contactPoints, ...profile }) => {
      const render = createRichTextRenderer(profile.locale);

      return {
        ...profile,
        bio: render.paragraphs(bio),
        contact: { intro: contactIntro, points: render.items(contactPoints) },
      };
    }),
});

export const collections = { projects, timeline, skillCategories, profile };
