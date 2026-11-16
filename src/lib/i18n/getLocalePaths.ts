import { defaultLocale, locales } from '@lib/i18n/languages';

export const getLocalePaths = () =>
  locales.map((locale) => ({
    params: { locale: locale === defaultLocale ? undefined : locale },
    props: { locale },
  }));
