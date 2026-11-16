import { getEntry } from 'astro:content';

import type { Locale } from '@lib/i18n/languages';
import { localize } from '@lib/i18n/localize';

export const getSkillName = async (id: string, locale: Locale): Promise<string> => {
  const skill = await getEntry('skills', id);

  if (!skill) throw new Error(`Unknown skill "${id}" – add it to src/data/skills.json`);

  return localize(skill.data.name, locale);
};
