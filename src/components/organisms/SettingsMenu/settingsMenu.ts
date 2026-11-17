import { initDisclosure } from '@helpers/dom/initDisclosure';

document.addEventListener('astro:before-swap', (event) => {
  const root = event.newDocument.querySelector<HTMLElement>('[data-settings]');

  if (!root || event.info?.keepOpen !== root.id) return;

  root.dataset.open = 'true';
  root.dataset.openOnLoad = '';
  root.querySelector('[data-settings-button]')?.setAttribute('aria-expanded', 'true');
  root.querySelector('[data-settings-panel]')?.removeAttribute('hidden');
});

document.addEventListener('astro:page-load', () => {
  const root = document.querySelector<HTMLElement>('[data-settings]');
  const button = root?.querySelector<HTMLButtonElement>('[data-settings-button]');
  const panel = root?.querySelector<HTMLElement>('[data-settings-panel]');

  if (!root || !button || !panel || root.dataset.ready !== undefined) return;

  root.dataset.ready = '';

  const menu = initDisclosure({
    root,
    button,
    open: root.dataset.openOnLoad !== undefined,
    render: (open) => {
      root.dataset.open = String(open);
      panel.hidden = !open;

      if (!open) delete root.dataset.openOnLoad;
    },
  });

  if (menu.isOpen()) panel.querySelector<HTMLElement>('[data-language-switch]')?.focus();
});
