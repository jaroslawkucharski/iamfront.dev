import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { getDictionary } from '@lib/i18n/getDictionary';
import { beforeSwap, createDocument, pageLoad } from '@tests/utils/events';
import { mount, renderToString } from '@tests/utils/render';

import SettingsList from '@organisms/SettingsList/SettingsList.astro';

import '@molecules/PreferenceToggle/preferenceToggle';

const { theme, motion } = getDictionary('en');
const options = { props: { id: 'settings', locale: 'en' }, request: new Request('https://iamfront.dev/') };

const toggle = (name: string, root: Document = document) =>
  root.querySelector<HTMLButtonElement>(`[data-preference="${name}"]`)!;

describe('preferenceToggle script', () => {
  beforeEach(async () => {
    delete document.documentElement.dataset.theme;
    delete document.documentElement.dataset.motion;
    localStorage.clear();
    await mount(SettingsList, options);
    pageLoad();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('reflects the system preference', () => {
    expect(toggle('theme').getAttribute('aria-checked')).toBe('false');
    expect(toggle('theme').title).toBe(theme.toDark);
  });

  it('switches and saves the theme', () => {
    toggle('theme').click();

    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(toggle('theme').getAttribute('aria-checked')).toBe('true');
    expect(toggle('theme').title).toBe(theme.toLight);

    toggle('theme').click();

    expect(document.documentElement.dataset.theme).toBe('light');
    expect(toggle('theme').title).toBe(theme.toDark);
  });

  it('switches animations', () => {
    document.documentElement.dataset.motion = 'on';
    toggle('motion').click();

    expect(document.documentElement.dataset.motion).toBe('off');
    expect(localStorage.getItem('motion')).toBe('off');
    expect(toggle('motion').title).toBe(motion.resume);
  });

  it('still switches when storage is blocked', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });

    toggle('theme').click();

    expect(document.documentElement.dataset.theme).toBe('dark');
  });

  it('syncs toggles on the next page before the swap', async () => {
    const newDocument = createDocument(await renderToString(SettingsList, options));

    newDocument.documentElement.dataset.theme = 'dark';
    beforeSwap(newDocument);

    expect(toggle('theme', newDocument).getAttribute('aria-checked')).toBe('true');
    expect(toggle('theme', newDocument).title).toBe(theme.toLight);
  });
});
