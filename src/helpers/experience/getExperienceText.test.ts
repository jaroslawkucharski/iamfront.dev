import { describe, expect, it } from 'vitest';

import { person } from '@config/site';
import { getExperienceText } from '@helpers/experience/getExperienceText';
import { getDictionary } from '@lib/i18n/getDictionary';
import { plural } from '@lib/i18n/plural';

const [startYear, startMonth] = person.careerStart.split('-').map(Number);
const after = (years: number, months = 0) => new Date(Date.UTC(startYear + years, startMonth - 1 + months, 15));
const years = (count: number, locale: 'en' | 'pl') => plural(getDictionary(locale).experienceYears, count, locale);

describe('getExperienceText', () => {
  it('counts full years since the career start', () => {
    expect(getExperienceText('en', after(6))).toBe(`6 ${years(6, 'en')}`);
  });

  it('adds a plus when months are left over', () => {
    expect(getExperienceText('en', after(6, 10))).toBe(`6+ ${years(6, 'en')}`);
  });

  it('uses Polish plural forms', () => {
    expect(getExperienceText('pl', after(1))).toBe(`1 ${years(1, 'pl')}`);
    expect(getExperienceText('pl', after(5, 2))).toBe(`5+ ${years(5, 'pl')}`);
  });

  it('defaults to today', () => {
    expect(getExperienceText('en')).toMatch(/^\d+\+? /);
  });
});
