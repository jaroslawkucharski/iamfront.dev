import { initDisclosure } from '@helpers/initDisclosure';

const getParts = () => {
  const header = document.querySelector<HTMLElement>('[data-header]');
  const button = header?.querySelector<HTMLButtonElement>('[data-menu-button]');
  const nav = header?.querySelector<HTMLElement>('.header__nav');

  return { header, button, nav };
};

const initMenu = () => {
  const { header, button, nav } = getParts();

  if (!header || !button || !nav || header.dataset.ready !== undefined) return;

  header.dataset.ready = '';

  const menu = initDisclosure({
    root: header,
    button,
    closeOnOutsideClick: false,
    render: (open) => {
      if (open) header.style.setProperty('--header-bottom', `${header.getBoundingClientRect().bottom}px`);

      header.dataset.menu = open ? 'open' : 'closed';
    },
  });

  nav.addEventListener('click', (event) => {
    if ((event.target as Element).closest('a')) menu.setOpen(false);
  });
};

document.addEventListener('astro:page-load', initMenu);
