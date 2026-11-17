import { navigate } from 'astro:transitions/client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { getDictionary } from '@lib/i18n/getDictionary';
import { interpolate } from '@lib/i18n/interpolate';
import { pageLoad } from '@tests/utils/events';
import { mount } from '@tests/utils/render';

import ContactForm from '@organisms/ContactForm/ContactForm.astro';

import '@organisms/ContactForm/contactForm';

vi.mock('astro:transitions/client', () => ({ navigate: vi.fn() }));

const { contact } = getDictionary('en');
const { fields } = contact;

const field = (name: string) => document.getElementById(`contact-${name}`) as HTMLInputElement;
const topic = () => document.getElementById('contact-topic') as HTMLSelectElement;
const error = (name: string) => document.getElementById(`contact-${name}-error`)?.textContent;
const status = () => document.querySelector<HTMLElement>('[data-form-status]')!;
const submit = () => document.querySelector<HTMLButtonElement>('[data-submit]')!;
const flush = () => new Promise((resolve) => setTimeout(resolve));

const type = (name: string, value: string) => {
  field(name).value = value;
  field(name).dispatchEvent(new Event('input'));
};

const fillValid = () => {
  type('name', 'Jan Kowalski');
  type('email', 'jan@example.com');
  topic().selectedIndex = 1;
  topic().dispatchEvent(new Event('change'));
  type('message', 'Hello, I have a project for you.');
};

describe('contactForm script', () => {
  beforeEach(async () => {
    vi.mocked(navigate).mockClear();
    await mount(ContactForm, { props: { locale: 'en' } });
    pageLoad();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('lists all errors and focuses the first invalid field', () => {
    submit().click();

    expect(status().textContent).toBe(interpolate(contact.errorsSummary, { count: '4' }));
    expect(status().dataset.state).toBe('error');
    expect(error('name')).toBe(fields.name.required);
    expect(error('email')).toBe(fields.email.required);
    expect(error('topic')).toBe(fields.topic.required);
    expect(error('message')).toBe(fields.message.required);
    expect(field('name').getAttribute('aria-invalid')).toBe('true');
    expect(document.activeElement).toBe(field('name'));
  });

  it.each([
    ['name', 'J', interpolate(fields.name.tooShort, { min: '2' })],
    ['name', 'J'.repeat(101), interpolate(fields.name.tooLong, { max: '100' })],
    ['email', 'jan@example', fields.email.invalid],
    ['message', 'Hi', interpolate(fields.message.tooShort, { min: '10' })],
  ])('validates %s on blur', (name, value, message) => {
    field(name).value = value;
    field(name).dispatchEvent(new Event('blur'));

    expect(error(name)).toBe(message);
  });

  it('skips blur validation for untouched empty fields', () => {
    field('name').dispatchEvent(new Event('blur'));

    expect(field('name').hasAttribute('aria-invalid')).toBe(false);
  });

  it('clears an error while typing a valid value', () => {
    submit().click();
    type('name', 'Jan');

    expect(field('name').hasAttribute('aria-invalid')).toBe(false);
    expect(error('name')).toBe('');
  });

  it('counts message characters', () => {
    type('message', 'Hello');

    expect(document.getElementById('contact-message-counter')?.textContent).toBe(
      interpolate(contact.counter, { count: '5', max: '2000' }),
    );
  });

  it('sends the form and goes to the thanks page', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });

    vi.stubGlobal('fetch', fetchMock);
    fillValid();
    submit().click();

    expect(status().textContent).toBe(contact.sending);
    expect(submit().getAttribute('aria-busy')).toBe('true');

    await flush();

    const body = new URLSearchParams(fetchMock.mock.calls[0][1].body);

    expect(fetchMock.mock.calls[0][0]).toBe('/');
    expect(body.get('form-name')).toBe('contact');
    expect(body.get('subject')).toBe('Nowa wiadomość z iamfront.dev');
    expect(body.get('name')).toBe('Jan Kowalski');
    expect(body.get('topic')).toBe('client');
    expect(navigate).toHaveBeenCalledWith(document.querySelector('form')?.action);
    expect(submit().hasAttribute('aria-busy')).toBe(false);
  });

  it.each([
    ['a server error', vi.fn().mockResolvedValue({ ok: false, status: 500 })],
    ['a network error', vi.fn().mockRejectedValue(new Error('offline'))],
  ])('shows a failure after %s', async (_, fetchMock) => {
    vi.stubGlobal('fetch', fetchMock);
    fillValid();
    submit().click();
    await flush();

    expect(status().textContent).toBe(contact.failure);
    expect(status().dataset.state).toBe('error');
    expect(navigate).not.toHaveBeenCalled();
  });

  it('initialises the form once', () => {
    pageLoad();
    submit().click();

    expect(status().textContent).toBe(interpolate(contact.errorsSummary, { count: '4' }));
  });
});
