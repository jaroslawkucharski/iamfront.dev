import { describe, expect, it } from 'vitest';

import { getLocalePaths } from '@lib/i18n/getLocalePaths';

describe('getLocalePaths', () => {
  it('creates a root path for the default locale and a prefix for others', () => {
    expect(getLocalePaths()).toEqual([
      { params: { locale: undefined }, props: { locale: 'en' } },
      { params: { locale: 'pl' }, props: { locale: 'pl' } },
    ]);
  });
});
