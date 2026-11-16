import { statSync } from 'node:fs';
import { join } from 'node:path';

import type { Locale } from '@lib/i18n/languages';

export const getFileSize = (publicPath: string, locale: Locale): string => {
  const kilobytes = statSync(join(process.cwd(), 'public', publicPath)).size / 1024;
  const [value, unit] = kilobytes >= 1024 ? [kilobytes / 1024, 'MB'] : [kilobytes, 'kB'];
  const formatted = new Intl.NumberFormat(locale, { maximumFractionDigits: value < 10 ? 1 : 0 }).format(value);

  return `${formatted} ${unit}`;
};
