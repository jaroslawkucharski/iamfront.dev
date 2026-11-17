import { initDisclosure } from '@helpers/dom/initDisclosure';

const getCommonAncestor = (first: Element, second: Element) => {
  let ancestor = first.parentElement;

  while (ancestor && !ancestor.contains(second)) ancestor = ancestor.parentElement;

  return ancestor;
};

document.addEventListener('astro:before-swap', (event) => {
  const keepOpen: unknown = event.info?.keepOpen;

  if (typeof keepOpen !== 'string') return;

  const button = event.newDocument.querySelector(`[data-hamburger-menu][aria-controls='${keepOpen}']`);
  const panel = event.newDocument.getElementById(keepOpen);

  if (!button || !panel) return;

  button.setAttribute('aria-expanded', 'true');
  panel.dataset.menu = 'open';
  panel.dataset.openOnLoad = '';
  panel.style.setProperty('--menu-top', document.getElementById(keepOpen)?.style.getPropertyValue('--menu-top') ?? '');
});

document.addEventListener('astro:page-load', () => {
  document.querySelectorAll<HTMLButtonElement>('[data-hamburger-menu]:not([data-ready])').forEach((button) => {
    const panel = document.getElementById(button.getAttribute('aria-controls') ?? '');
    const root = panel && getCommonAncestor(button, panel);

    if (!panel || !root) return;

    button.dataset.ready = '';

    const menu = initDisclosure({
      root,
      button,
      closeOnOutsideClick: false,
      open: panel.dataset.openOnLoad !== undefined,
      render: (open) => {
        if (open) panel.style.setProperty('--menu-top', `${root.getBoundingClientRect().bottom}px`);

        panel.dataset.menu = open ? 'open' : 'closed';

        if (!open) delete panel.dataset.openOnLoad;
      },
    });

    panel.addEventListener('click', (event) => {
      if ((event.target as Element).closest('a:not([data-language-switch])')) menu.setOpen(false);
    });

    if (menu.isOpen()) panel.querySelector<HTMLElement>('[data-language-switch]')?.focus();
  });
});
