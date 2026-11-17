import { statSync } from 'node:fs';
import { describe, expect, it, vi } from 'vitest';

import { getCvLink } from '@helpers/files/getCvLink';
import { getDictionary } from '@lib/i18n/getDictionary';

vi.mock('node:fs', () => ({ statSync: vi.fn() }));

const mockSize = (bytes: number) => vi.mocked(statSync).mockReturnValue({ size: bytes } as ReturnType<typeof statSync>);

describe('getCvLink', () => {
  it('builds the link with the file size in kB', () => {
    mockSize(150 * 1024);

    const { cv } = getDictionary('en').nav;
    const link = getCvLink('en');

    expect(link.href).toBe(cv.file);
    expect(link.label).toBe(cv.label);
    expect(link.title).toBe(`${cv.title} (PDF, 150 kB)`);
    expect(link.hint).toBe(` – ${cv.title} (PDF, 150 kB)`);
  });

  it('formats megabytes with a decimal in Polish', () => {
    mockSize(1.5 * 1024 * 1024);

    expect(getCvLink('pl').title).toContain('PDF, 1,5 MB');
  });

  it('uses the last path segment as the file name', () => {
    mockSize(1024);

    expect(getCvLink('en').fileName).toBe(getDictionary('en').nav.cv.file.split('/').pop());
  });
});
