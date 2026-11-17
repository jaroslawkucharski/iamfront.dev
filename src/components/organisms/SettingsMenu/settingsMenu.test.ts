import { beforeEach, describe, expect, it } from 'vitest';

import { getDictionary } from '@lib/i18n/getDictionary';
import { beforeSwap, createDocument, pageLoad } from '@tests/utils/events';
import { mount, renderToString } from '@tests/utils/render';

import SettingsMenu from '@organisms/SettingsMenu/SettingsMenu.astro';

import '@organisms/SettingsMenu/settingsMenu';

const { settings } = getDictionary('en');
const options = { props: { locale: 'en' }, request: new Request('https://iamfront.dev/') };

const root = () => document.querySelector<HTMLElement>('[data-settings]')!;
const button = () => document.querySelector<HTMLButtonElement>('[data-settings-button]')!;
const panel = () => document.querySelector<HTMLElement>('[data-settings-panel]')!;

describe('settingsMenu script', () => {
  beforeEach(async () => {
    await mount(SettingsMenu, options);
  });

  it('opens and closes the panel', () => {
    pageLoad();

    expect(button().title).toBe(settings.open);

    button().click();

    expect(root().dataset.open).toBe('true');
    expect(panel().hidden).toBe(false);
    expect(button().title).toBe(settings.close);

    button().click();

    expect(panel().hidden).toBe(true);
  });

  it('opens the menu on the next page before it is shown', async () => {
    const newDocument = createDocument(await renderToString(SettingsMenu, options));

    beforeSwap(newDocument, { keepOpen: 'settings-menu' });

    expect(newDocument.querySelector<HTMLElement>('[data-settings]')?.dataset.openOnLoad).toBe('');
    expect(newDocument.querySelector('[data-settings-button]')?.getAttribute('aria-expanded')).toBe('true');
    expect(newDocument.querySelector('[data-settings-panel]')?.hasAttribute('hidden')).toBe(false);
  });

  it('ignores other navigations', async () => {
    const newDocument = createDocument(await renderToString(SettingsMenu, options));

    beforeSwap(newDocument);

    expect(newDocument.querySelector<HTMLElement>('[data-settings]')?.dataset.openOnLoad).toBeUndefined();
  });

  it('starts open, focuses the language switch and clears the flag on close', () => {
    root().dataset.openOnLoad = '';
    pageLoad();

    expect(panel().hidden).toBe(false);
    expect(document.activeElement).toBe(document.querySelector('[data-language-switch]'));

    button().click();

    expect(root().dataset.openOnLoad).toBeUndefined();
  });

  it('initialises once', () => {
    pageLoad();
    pageLoad();
    button().click();

    expect(panel().hidden).toBe(false);
  });
});
