import { statSync } from 'node:fs';
import { join } from 'node:path';

import { getDictionary } from '@lib/i18n/getDictionary';
import type { Locale } from '@lib/i18n/languages';

const getFileSize = (publicPath: string, locale: Locale) => {
  const kilobytes = statSync(join(process.cwd(), 'public', publicPath)).size / 1024;
  const [value, unit] = kilobytes >= 1024 ? [kilobytes / 1024, 'MB'] : [kilobytes, 'kB'];
  const formatted = new Intl.NumberFormat(locale, { maximumFractionDigits: value < 10 ? 1 : 0 }).format(value);

  return `${formatted} ${unit}`;
};

export const getCvLink = (locale: Locale) => {
  const { cv } = getDictionary(locale).nav;
  const info = `PDF, ${getFileSize(cv.file, locale)}`;

  return {
    href: cv.file,
    fileName: cv.file.split('/').pop(),
    label: cv.label,
    title: `${cv.title} (${info})`,
    hint: ` – ${cv.title} (${info})`,
  };
};
