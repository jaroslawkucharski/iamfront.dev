import { describe, expect, it } from 'vitest';

import en from '@i18n/en.json';
import pl from '@i18n/pl.json';
import { getDictionary } from '@lib/i18n/getDictionary';

type Tree = { [key: string]: string | string[] | Tree };

const keys = (tree: Tree, prefix = ''): string[] =>
  Object.entries(tree).flatMap(([key, value]) =>
    typeof value === 'object' && !Array.isArray(value) ? keys(value, `${prefix}${key}.`) : [`${prefix}${key}`],
  );

const pluralKeys = /^(experienceYears|projectCount)\./;

describe('getDictionary', () => {
  it('returns the dictionary for the locale', () => {
    expect(getDictionary('en').nav.label).toBe(en.nav.label);
    expect(getDictionary('pl').nav.label).toBe(pl.nav.label);
  });

  it('interpolates values', () => {
    expect(getDictionary('en', { name: 'Jan' }).about.meta.title).toBe('About me – Jan');
  });

  it('has the same keys in both languages', () => {
    const english = keys(en).filter((key) => !pluralKeys.test(key));
    const polish = keys(pl).filter((key) => !pluralKeys.test(key));

    expect(polish).toEqual(english);
  });

  it('has the plural forms each language needs', () => {
    expect(Object.keys(en.projectCount)).toEqual(['one', 'other']);
    expect(Object.keys(pl.projectCount)).toEqual(['one', 'few', 'many', 'other']);
  });
});
