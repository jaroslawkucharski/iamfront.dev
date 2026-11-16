import { getAbsoluteLocaleUrl } from 'astro:i18n';

import { defaultLocale, locales } from '@lib/i18n/languages';
import { stripLocale } from '@lib/i18n/stripLocale';

export const getAlternates = (pathname: string) => {
  const path = stripLocale(pathname).replace(/^\//, '');

  const alternates = locales.map((locale) => ({ lang: locale, href: getAbsoluteLocaleUrl(locale, path) }));

  return [...alternates, { lang: 'x-default', href: getAbsoluteLocaleUrl(defaultLocale, path) }];
};
