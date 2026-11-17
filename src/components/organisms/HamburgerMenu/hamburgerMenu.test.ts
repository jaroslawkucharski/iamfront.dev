import { beforeEach, describe, expect, it } from 'vitest';

import { getDictionary } from '@lib/i18n/getDictionary';
import { beforeSwap, createDocument, pageLoad } from '@tests/utils/events';
import { mount, renderToString } from '@tests/utils/render';

import Header from '@organisms/Header/Header.astro';

import '@organisms/HamburgerMenu/hamburgerMenu';

const { nav } = getDictionary('en');
const options = { props: { locale: 'en' }, request: new Request('https://iamfront.dev/') };

const button = () => document.querySelector<HTMLButtonElement>('[data-hamburger-menu]')!;
const navigation = () => document.getElementById('site-nav')!;
const navLink = (label: string) =>
  [...navigation().querySelectorAll('a')].find((link) => link.textContent?.includes(label))!;

describe('hamburgerMenu script', () => {
  beforeEach(async () => {
    await mount(Header, options);
  });

  it('opens and closes the menu', () => {
    pageLoad();

    expect(navigation().dataset.menu).toBe('closed');
    expect(button().title).toBe(nav.menu.open);

    button().click();

    expect(navigation().dataset.menu).toBe('open');
    expect(button().title).toBe(nav.menu.close);
    expect(navigation().style.getPropertyValue('--menu-top')).toBe('0px');
  });

  it('closes after picking a page but not after switching language', () => {
    pageLoad();
    button().click();
    navigation().querySelector<HTMLElement>('[data-language-switch]')?.click();
    navigation().querySelector<HTMLElement>('[data-preference="theme"]')?.click();

    expect(navigation().dataset.menu).toBe('open');

    navLink(nav.items.about.label).click();

    expect(navigation().dataset.menu).toBe('closed');
  });

  it('opens the menu on the next page before it is shown', async () => {
    navigation().style.setProperty('--menu-top', '64px');

    const newDocument = createDocument(await renderToString(Header, options));

    beforeSwap(newDocument, { keepOpen: 'site-nav' });

    const nextNavigation = newDocument.getElementById('site-nav');

    expect(newDocument.querySelector('[data-hamburger-menu]')?.getAttribute('aria-expanded')).toBe('true');
    expect(nextNavigation?.dataset.menu).toBe('open');
    expect(nextNavigation?.dataset.openOnLoad).toBe('');
    expect(nextNavigation?.style.getPropertyValue('--menu-top')).toBe('64px');
  });

  it('ignores navigations without the menu', async () => {
    const newDocument = createDocument(await renderToString(Header, options));

    beforeSwap(newDocument);
    beforeSwap(newDocument, { keepOpen: 'settings-menu' });

    expect(newDocument.getElementById('site-nav')?.dataset.menu).toBeUndefined();
  });

  it('starts open, focuses the language switch and clears the flag on close', () => {
    navigation().dataset.openOnLoad = '';
    pageLoad();

    expect(navigation().dataset.menu).toBe('open');
    expect(document.activeElement).toBe(navigation().querySelector('[data-language-switch]'));

    button().click();

    expect(navigation().dataset.openOnLoad).toBeUndefined();
  });

  it('skips a menu without its panel', () => {
    navigation().remove();

    expect(() => pageLoad()).not.toThrow();
  });
});
