import { describe, expect, it } from 'vitest';

import { plural } from '@lib/i18n/plural';

const polish = { one: 'projekt', few: 'projekty', many: 'projektów', other: 'projektu' };

describe('plural', () => {
  it.each([
    [1, 'projekt'],
    [3, 'projekty'],
    [5, 'projektów'],
    [22, 'projekty'],
  ])('picks the Polish form for %i', (count, expected) => {
    expect(plural(polish, count, 'pl')).toBe(expected);
  });

  it('falls back to the other form', () => {
    expect(plural({ other: 'projects' }, 1, 'en')).toBe('projects');
  });
});
