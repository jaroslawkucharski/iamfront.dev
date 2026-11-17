import { beforeEach, describe, expect, it } from 'vitest';

import { person } from '@config/site';
import { getDictionary } from '@lib/i18n/getDictionary';
import { mount } from '@tests/utils/render';

import ContactLinks from '@organisms/ContactLinks/ContactLinks.astro';

import '@molecules/EmailLink/emailLink';

const { contactLinks } = getDictionary('en');

const link = () => document.querySelector<HTMLAnchorElement>('.email-link__link')!;
const reveal = () => document.querySelector<HTMLButtonElement>('[data-email-reveal]')!;

describe('emailLink script', () => {
  beforeEach(async () => {
    await mount(ContactLinks, { props: { locale: 'en' } });
  });

  it('hides the address until revealed', () => {
    expect(document.body.innerHTML).not.toContain(person.email);
    expect(link().textContent?.trim()).toBe(contactLinks.emailFallback);
    expect(reveal().textContent?.trim()).toBe(contactLinks.emailReveal);
  });

  it('reveals the address on click', () => {
    reveal().click();

    expect(link().getAttribute('href')).toBe(`mailto:${person.email}`);
    expect(link().title).toBe(`${contactLinks.email}: ${person.email}`);
    expect(link().textContent?.trim()).toBe(person.email);
    expect(document.querySelector<HTMLElement>('[data-email-link]')?.dataset.revealed).toBe('true');
    expect(document.activeElement).toBe(link());
  });

  it('ignores other clicks', () => {
    document.querySelector<HTMLAnchorElement>('a[rel="me noopener noreferrer"]')?.click();

    expect(link().getAttribute('href')).toBe('/#contact');
  });
});
