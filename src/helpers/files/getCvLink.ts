import { getLocalizedCollection } from '@helpers/content/getLocalizedCollection';
import { getDictionary } from '@lib/i18n/getDictionary';
import type { Locale } from '@lib/i18n/languages';

const formatFileSize = (bytes: number, locale: Locale) => {
  const kilobytes = bytes / 1024;
  const [value, unit] = kilobytes >= 1024 ? [kilobytes / 1024, 'MB'] : [kilobytes, 'kB'];
  const formatted = new Intl.NumberFormat(locale, { maximumFractionDigits: value < 10 ? 1 : 0 }).format(value);

  return `${formatted} ${unit}`;
};

export const getCvLink = async (locale: Locale) => {
  const [profile] = await getLocalizedCollection('profile', locale);

  if (!profile?.cv) return undefined;

  const { cv } = getDictionary(locale).nav;
  const info = `PDF, ${formatFileSize(profile.cv.size, locale)}`;

  return {
    href: `/cv/${locale}/${profile.cv.fileName}`,
    fileName: profile.cv.fileName,
    label: cv.label,
    title: `${cv.title} (${info})`,
    hint: ` – ${cv.title} (${info})`,
  };
};
