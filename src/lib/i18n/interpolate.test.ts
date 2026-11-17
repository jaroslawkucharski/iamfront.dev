import { describe, expect, it } from 'vitest';

import { interpolate } from '@lib/i18n/interpolate';

describe('interpolate', () => {
  it('replaces placeholders with values', () => {
    expect(interpolate('{name} – {role}', { name: 'Jan', role: 'Dev' })).toBe('Jan – Dev');
  });

  it('keeps placeholders without a value', () => {
    expect(interpolate('Hello {name}', {})).toBe('Hello {name}');
  });

  it('returns other values unchanged', () => {
    expect(interpolate({ count: 2, empty: null }, { count: '3' })).toEqual({ count: 2, empty: null });
  });

  it('replaces placeholders in nested objects and arrays', () => {
    const value = { title: 'About {name}', items: ['{name} 1', '{name} 2'] };

    expect(interpolate(value, { name: 'Jan' })).toEqual({ title: 'About Jan', items: ['Jan 1', 'Jan 2'] });
  });
});
