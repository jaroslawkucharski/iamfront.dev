import { describe, expect, it } from 'vitest';

import { isNewTabClick } from '@helpers/dom/isNewTabClick';

describe('isNewTabClick', () => {
  it('ignores a plain left click', () => {
    expect(isNewTabClick(new MouseEvent('click', { button: 0 }))).toBe(false);
  });

  it.each([
    { button: 1 },
    { button: 0, metaKey: true },
    { button: 0, ctrlKey: true },
    { button: 0, shiftKey: true },
    { button: 0, altKey: true },
  ])('detects %o as opening a new tab', (init) => {
    expect(isNewTabClick(new MouseEvent('click', init))).toBe(true);
  });
});
