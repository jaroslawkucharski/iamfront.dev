import { beforeEach, describe, expect, it } from 'vitest';

import { getDictionary } from '@lib/i18n/getDictionary';
import { pageLoad } from '@tests/utils/events';
import { mount } from '@tests/utils/render';

import Disclosure from '@molecules/Disclosure/Disclosure.astro';

import '@molecules/Disclosure/disclosure';

const { disclosure } = getDictionary('en');
const title = 'Core platform';

const button = () => document.querySelector<HTMLButtonElement>('.disclosure__button')!;
const icon = () => document.querySelector<HTMLElement>('.disclosure__icon')!;
const panel = () => document.getElementById('section-panel')!;

describe('disclosure script', () => {
  beforeEach(async () => {
    await mount(Disclosure, { props: { id: 'section', title, locale: 'en' }, slots: { default: 'Body' } });
    pageLoad();
  });

  it('opens and closes the panel', () => {
    button().click();

    expect(button().getAttribute('aria-expanded')).toBe('true');
    expect(panel().hasAttribute('hidden')).toBe(false);
    expect(button().title).toBe(`${disclosure.collapse}: ${title}`);
    expect(icon().title).toBe(disclosure.collapse);

    button().click();

    expect(button().getAttribute('aria-expanded')).toBe('false');
    expect(panel().getAttribute('hidden')).toBe('until-found');
    expect(button().title).toBe(`${disclosure.expand}: ${title}`);
    expect(icon().title).toBe(disclosure.expand);
  });

  it('marks the button open when the browser reveals the panel', () => {
    panel().dispatchEvent(new Event('beforematch'));

    expect(button().getAttribute('aria-expanded')).toBe('true');
    expect(button().title).toBe(`${disclosure.collapse}: ${title}`);
  });

  it('opens every panel before printing', () => {
    window.dispatchEvent(new Event('beforeprint'));

    expect(panel().hasAttribute('hidden')).toBe(false);
  });

  it('initialises each disclosure once', () => {
    pageLoad();
    button().click();

    expect(button().getAttribute('aria-expanded')).toBe('true');
  });
});
