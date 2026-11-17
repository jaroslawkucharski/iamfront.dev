import { describe, expect, it } from 'vitest';

import { stripLocale } from '@lib/i18n/stripLocale';

describe('stripLocale', () => {
  it.each([
    ['/pl/', '/'],
    ['/pl', '/'],
    ['/pl/about/', '/about/'],
    ['/about/', '/about/'],
    ['/players/', '/players/'],
  ])('turns %s into %s', (pathname, expected) => {
    expect(stripLocale(pathname)).toBe(expected);
  });
});
