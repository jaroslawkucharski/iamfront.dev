import { navigate } from 'astro:transitions/client';

import { isNewTabClick } from '@helpers/dom/isNewTabClick';

document.addEventListener('astro:page-load', () => {
  document.querySelectorAll<HTMLAnchorElement>('[data-language-switch]:not([data-ready])').forEach((link) => {
    link.dataset.ready = '';

    link.addEventListener('click', (event) => {
      if (isNewTabClick(event)) return;

      event.preventDefault();

      link.dataset.checked = String(link.dataset.checked !== 'true');

      const knob = link.querySelector<HTMLElement>('.switch__knob');
      const duration = knob ? parseFloat(getComputedStyle(knob).transitionDuration) * 1000 : 0;

      let isDone = false;

      const go = () => {
        if (isDone) return;

        isDone = true;
        navigate(link.href, {
          info: { languageSwitch: true, keepOpen: link.closest<HTMLElement>('[data-keep-open]')?.id },
        });
      };

      if (!knob || !duration) return go();

      knob.addEventListener('transitionend', go, { once: true });
      setTimeout(go, duration + 100);
    });
  });
});

document.addEventListener('astro:before-swap', (event) => {
  if (!event.info?.languageSwitch) return;

  event.viewTransition.ready.catch(() => undefined);
  event.viewTransition.skipTransition();
  event.newDocument.documentElement.dataset.swapping = '';
});

document.addEventListener('astro:page-load', () => {
  if (document.documentElement.dataset.swapping === undefined) return;

  requestAnimationFrame(() => requestAnimationFrame(() => delete document.documentElement.dataset.swapping));
});
