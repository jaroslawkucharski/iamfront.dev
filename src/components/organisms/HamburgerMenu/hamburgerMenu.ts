import { initDisclosure } from '@helpers/dom/initDisclosure';

const getCommonAncestor = (first: Element, second: Element) => {
  let ancestor = first.parentElement;

  while (ancestor && !ancestor.contains(second)) ancestor = ancestor.parentElement;

  return ancestor;
};

const initHamburgerMenu = () => {
  document.querySelectorAll<HTMLButtonElement>('[data-hamburger-menu]:not([data-ready])').forEach((button) => {
    const panel = document.getElementById(button.getAttribute('aria-controls') ?? '');
    const root = panel && getCommonAncestor(button, panel);

    if (!panel || !root) return;

    button.dataset.ready = '';

    const menu = initDisclosure({
      root,
      button,
      closeOnOutsideClick: false,
      render: (open) => {
        if (open) panel.style.setProperty('--menu-top', `${root.getBoundingClientRect().bottom}px`);

        panel.dataset.menu = open ? 'open' : 'closed';
      },
    });

    panel.addEventListener('click', (event) => {
      if ((event.target as Element).closest('a:not([data-language-switch])')) menu.setOpen(false);
    });

    if (panel.dataset.openOnLoad === undefined) return;

    delete panel.dataset.openOnLoad;
    menu.setOpen(true);
    panel.querySelector<HTMLElement>('[data-language-switch]')?.focus();
  });
};

document.addEventListener('astro:page-load', initHamburgerMenu);
