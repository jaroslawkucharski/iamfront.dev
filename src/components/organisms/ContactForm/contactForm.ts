import { navigate } from 'astro:transitions/client';

import { interpolate } from '@lib/i18n/interpolate';

type Field = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

document.addEventListener('astro:page-load', () => {
  document.querySelectorAll<HTMLFormElement>('[data-contact-form]:not([data-ready])').forEach((form) => {
    form.dataset.ready = '';

    const status = form.querySelector<HTMLElement>('[data-form-status]');
    const submit = form.querySelector<HTMLButtonElement>('[data-submit]');
    const fields = [...form.querySelectorAll<Field>('[data-errors]')];

    const emailShape = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const setStatus = (text: string, state = '') => {
      if (!status) return;

      status.textContent = text;
      status.dataset.state = state;
    };

    const problemOf = (field: Field) => {
      const value = field.value.trim();
      const min = Number(field.getAttribute('minlength') ?? 0);
      const max = Number(field.getAttribute('maxlength') ?? Infinity);

      if (field.required && !value) return 'valueMissing';
      if (value && min && value.length < min) return 'tooShort';
      if (value.length > max) return 'tooLong';
      if (value && field.getAttribute('type') === 'email' && !emailShape.test(value)) return 'typeMismatch';

      return '';
    };

    const check = (field: Field) => {
      const messages: Record<string, string> = JSON.parse(field.dataset.errors ?? '{}');
      const problem = problemOf(field);
      const error = document.getElementById(`${field.id}-error`);

      if (problem) field.setAttribute('aria-invalid', 'true');
      else field.removeAttribute('aria-invalid');

      if (error) error.textContent = problem ? (messages[problem] ?? '') : '';

      return !problem;
    };

    const updateCounter = (field: Field) => {
      const counter = document.getElementById(`${field.id}-counter`);

      if (!counter) return;

      counter.textContent = interpolate(counter.dataset.counter ?? '', {
        count: String(field.value.length),
        max: counter.dataset.max ?? '',
      });
    };

    fields.forEach((field) => {
      field.addEventListener('blur', () => {
        if (field.value.trim() || field.getAttribute('aria-invalid') === 'true') check(field);
      });

      const onChange = () => {
        updateCounter(field);

        if (field.getAttribute('aria-invalid') === 'true') check(field);
      };

      field.addEventListener('input', onChange);
      field.addEventListener('change', onChange);
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const invalid = fields.filter((field) => !check(field));

      if (invalid.length) {
        setStatus(interpolate(form.dataset.errorsSummary ?? '', { count: String(invalid.length) }), 'error');
        invalid[0].focus();

        return;
      }

      submit?.setAttribute('aria-busy', 'true');
      setStatus(form.dataset.sending ?? '', 'sending');

      try {
        const entries = [...new FormData(form)].map(([name, value]) => [name, String(value)]);
        const body = new URLSearchParams(entries).toString();
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body,
        });

        if (!response.ok) throw new Error(String(response.status));

        await navigate(form.action);
      } catch {
        setStatus(form.dataset.failure ?? '', 'error');
      } finally {
        submit?.removeAttribute('aria-busy');
      }
    });
  });
});
