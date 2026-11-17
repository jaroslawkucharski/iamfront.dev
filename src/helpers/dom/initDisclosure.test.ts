import { beforeEach, describe, expect, it, vi } from 'vitest';

import { initDisclosure } from '@helpers/dom/initDisclosure';
import { getDictionary } from '@lib/i18n/getDictionary';
import { renderToString } from '@tests/utils/render';

import Footer from '@organisms/Footer/Footer.astro';
import SettingsMenu from '@organisms/SettingsMenu/SettingsMenu.astro';

const { settings } = getDictionary('en');

const root = () => document.querySelector<HTMLElement>('[data-settings]')!;
const button = () => document.querySelector<HTMLButtonElement>('[data-settings-button]')!;
const inside = () => document.querySelector<HTMLElement>('[data-language-switch]')!;
const outside = () => document.querySelector<HTMLElement>('footer a')!;

const setup = (options: { closeOnOutsideClick?: boolean; open?: boolean } = {}) => {
  const render = vi.fn();
  const menu = initDisclosure({ root: root(), button: button(), render, ...options });

  return { render, menu };
};

describe('initDisclosure', () => {
  beforeEach(async () => {
    document.body.innerHTML = [
      await renderToString(SettingsMenu, { props: { locale: 'en' }, request: new Request('https://iamfront.dev/') }),
      await renderToString(Footer, { props: { locale: 'en' } }),
    ].join('');
  });

  it('starts closed and toggles on click', () => {
    const { render, menu } = setup();

    expect(button().getAttribute('aria-expanded')).toBe('false');
    expect(button().title).toBe(settings.open);
    expect(render).toHaveBeenLastCalledWith(false);

    button().click();

    expect(menu.isOpen()).toBe(true);
    expect(button().getAttribute('aria-expanded')).toBe('true');
    expect(button().title).toBe(settings.close);
    expect(render).toHaveBeenLastCalledWith(true);
  });

  it('can start open', () => {
    expect(setup({ open: true }).menu.isOpen()).toBe(true);
  });

  it('closes on Escape and returns focus', () => {
    const { menu } = setup({ open: true });

    inside().dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));

    expect(menu.isOpen()).toBe(false);
    expect(document.activeElement).toBe(button());
  });

  it('ignores other keys and Escape when closed', () => {
    const { render } = setup();

    render.mockClear();
    root().dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    root().dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));

    expect(render).not.toHaveBeenCalled();
  });

  it('closes when focus moves outside but not when it is lost', () => {
    const { menu } = setup({ open: true });

    root().dispatchEvent(new FocusEvent('focusout', { relatedTarget: null, bubbles: true }));
    expect(menu.isOpen()).toBe(true);

    root().dispatchEvent(new FocusEvent('focusout', { relatedTarget: inside(), bubbles: true }));
    expect(menu.isOpen()).toBe(true);

    root().dispatchEvent(new FocusEvent('focusout', { relatedTarget: outside(), bubbles: true }));
    expect(menu.isOpen()).toBe(false);
  });

  it('closes on outside click', () => {
    const { menu } = setup({ open: true });

    inside().dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(menu.isOpen()).toBe(true);

    outside().click();
    expect(menu.isOpen()).toBe(false);
  });

  it('keeps open on outside click when disabled', () => {
    const { menu } = setup({ open: true, closeOnOutsideClick: false });

    outside().click();

    expect(menu.isOpen()).toBe(true);
  });

  it('stops listening once the menu is removed', () => {
    const { render } = setup({ open: true });

    root().remove();
    render.mockClear();
    outside().click();
    outside().click();

    expect(render).not.toHaveBeenCalled();
  });
});
