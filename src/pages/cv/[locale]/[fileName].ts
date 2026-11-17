import type { APIRoute, GetStaticPaths } from 'astro';

import { getLocalizedCollection } from '@helpers/content/getLocalizedCollection';
import { locales } from '@lib/i18n/languages';

export const getStaticPaths = (async () => {
  const paths = await Promise.all(
    locales.map(async (locale) => {
      const [profile] = await getLocalizedCollection('profile', locale);

      return profile?.cv ? [{ params: { locale, fileName: profile.cv.fileName }, props: { url: profile.cv.url } }] : [];
    }),
  );

  return paths.flat();
}) satisfies GetStaticPaths;

export const GET: APIRoute<{ url: string }> = async ({ props }) => {
  const response = await fetch(props.url);

  return new Response(await response.arrayBuffer(), { headers: { 'Content-Type': 'application/pdf' } });
};
