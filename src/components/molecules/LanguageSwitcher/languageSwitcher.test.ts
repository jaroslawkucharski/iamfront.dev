import { navigate } from 'astro:transitions/client';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { languages } from '@lib/i18n/languages';
import { beforeSwap, createDocument, pageLoad } from '@tests/utils/events';
import { mount } from '@tests/utils/render';

import SettingsMenu from '@organisms/SettingsMenu/SettingsMenu.astro';

import '@molecules/LanguageSwitcher/languageSwitcher';

vi.mock('astro:transitions/client', () => ({ navigate: vi.fn() }));

const switchLink = () => document.querySelector<HTMLAnchorElement>('[data-language-switch]')!;
const nextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve));

describe('languageSwitcher script', () => {
  beforeEach(async () => {
    vi.mocked(navigate).mockClear();
    await mount(SettingsMenu, { props: { locale: 'en' }, request: new Request('https://iamfront.dev/about/') });
    pageLoad();
  });

  it('links to the other language', () => {
    expect(switchLink().getAttribute('href')).toBe('/pl/about/');
    expect(switchLink().title).toBe(`${languages.pl.short} – ${languages.pl.switchLabel}`);
  });

  it('animates the switch and navigates keeping the settings open', async () => {
    switchLink().click();

    expect(switchLink().dataset.checked).toBe('true');

    switchLink().querySelector('.switch__knob')?.dispatchEvent(new Event('transitionend'));
    await new Promise((resolve) => setTimeout(resolve, 150));

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(switchLink().href, {
      info: { languageSwitch: true, keepOpen: 'settings-menu' },
    });
  });

  it('lets the browser open a new tab', () => {
    switchLink().dispatchEvent(new MouseEvent('click', { metaKey: true, bubbles: true, cancelable: true }));

    expect(navigate).not.toHaveBeenCalled();
  });

  it('skips the page transition and pauses animations for one frame', async () => {
    const newDocument = createDocument('');
    const viewTransition = beforeSwap(newDocument, { languageSwitch: true });

    expect(viewTransition.skipTransition).toHaveBeenCalled();
    expect(newDocument.documentElement.dataset.swapping).toBe('');

    document.documentElement.dataset.swapping = '';
    pageLoad();
    await nextFrame();
    await nextFrame();

    expect(document.documentElement.dataset.swapping).toBeUndefined();
  });

  it('leaves other navigations alone', () => {
    const newDocument = createDocument('');
    const viewTransition = beforeSwap(newDocument);

    expect(viewTransition.skipTransition).not.toHaveBeenCalled();
    expect(newDocument.documentElement.dataset.swapping).toBeUndefined();
  });
});
