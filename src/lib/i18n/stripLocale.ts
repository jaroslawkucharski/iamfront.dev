import { defaultLocale, locales } from '@/lib/i18n/languages';

const prefixed = locales.filter((locale) => locale !== defaultLocale).join('|');
const localePrefix = new RegExp(`^/(${prefixed})(?=/|$)`);

export const stripLocale = (pathname: string): string => pathname.replace(localePrefix, '') || '/';
