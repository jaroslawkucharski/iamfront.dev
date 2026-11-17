import { beforeEach, describe, expect, it } from 'vitest';

import { getDictionary } from '@lib/i18n/getDictionary';
import { pageLoad } from '@tests/utils/events';
import { mount } from '@tests/utils/render';

import Footer from '@organisms/Footer/Footer.astro';

import '@molecules/BackToTop/backToTop';

const { footer } = getDictionary('en');

const link = () => document.querySelector<HTMLAnchorElement>('[data-back-to-top]')!;

const setHeights = (scrollHeight: number, clientHeight: number) => {
  Object.defineProperty(document.documentElement, 'scrollHeight', { value: scrollHeight, configurable: true });
  Object.defineProperty(document.documentElement, 'clientHeight', { value: clientHeight, configurable: true });
};

describe('backToTop script', () => {
  beforeEach(async () => {
    await mount(Footer, { props: { locale: 'en' } });
  });

  it('hides the link when the page does not scroll', () => {
    setHeights(800, 800);
    pageLoad();

    expect(link().hidden).toBe(true);
    expect(link().textContent?.trim()).toBe(footer.backToTop);
  });

  it('shows the link on long pages after resize', () => {
    setHeights(800, 800);
    pageLoad();
    setHeights(3000, 800);
    window.dispatchEvent(new Event('resize'));

    expect(link().hidden).toBe(false);
  });

  it('does nothing without the link', () => {
    document.body.innerHTML = '';

    expect(() => pageLoad()).not.toThrow();
  });
});
