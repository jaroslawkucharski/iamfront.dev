import { initDisclosure } from '@helpers/dom/initDisclosure';

document.addEventListener('astro:page-load', () => {
  const root = document.querySelector<HTMLElement>('[data-settings]');
  const button = root?.querySelector<HTMLButtonElement>('[data-settings-button]');
  const panel = root?.querySelector<HTMLElement>('[data-settings-panel]');

  if (!root || !button || !panel || root.dataset.ready !== undefined) return;

  root.dataset.ready = '';

  const menu = initDisclosure({
    root,
    button,
    render: (open) => {
      root.dataset.open = String(open);
      panel.hidden = !open;
    },
  });

  if (root.dataset.openOnLoad === undefined) return;

  delete root.dataset.openOnLoad;
  menu.setOpen(true);
  panel.querySelector<HTMLElement>('[data-language-switch]')?.focus();
});
