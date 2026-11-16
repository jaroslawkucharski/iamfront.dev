import { getProjects } from '@helpers/projects/getProjects';
import { defaultLocale, locales } from '@lib/i18n/languages';

export const getProjectPaths = async () => {
  const paths = await Promise.all(
    locales.map(async (locale) =>
      (await getProjects(locale)).map((project) => ({
        params: { locale: locale === defaultLocale ? undefined : locale, slug: project.id },
        props: { locale, project },
      })),
    ),
  );

  return paths.flat();
};
