import { navigate } from 'astro:transitions/client';

import { isNewTabClick } from '@helpers/isNewTabClick';

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
        navigate(link.href);
      };

      if (!knob || !duration) return go();

      knob.addEventListener('transitionend', go, { once: true });
      setTimeout(go, duration + 100);
    });
  });
});
