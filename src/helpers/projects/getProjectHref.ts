import { getRelativeLocaleUrl } from 'astro:i18n';

import type { Locale } from '@lib/i18n/languages';

export const getProjectHref = (id: string, locale: Locale) => getRelativeLocaleUrl(locale, `projects/${id}/`);
