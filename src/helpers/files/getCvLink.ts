import { getFileSize } from '@helpers/files/getFileSize';
import { getDictionary } from '@lib/i18n/getDictionary';
import type { Locale } from '@lib/i18n/languages';

export const getCvLink = (locale: Locale) => {
  const { cv } = getDictionary(locale).nav;
  const info = `PDF, ${getFileSize(cv.file, locale)}`;

  return {
    href: cv.file,
    fileName: cv.file.split('/').pop() ?? 'cv.pdf',
    label: cv.label,
    title: `${cv.title} (${info})`,
    hint: ` – ${cv.title} (${info})`,
  };
};
