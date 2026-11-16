import { isNewTabClick } from '@helpers/dom/isNewTabClick';
import { interpolate } from '@lib/i18n/interpolate';

document.addEventListener('astro:page-load', () => {
  const dialog = document.querySelector<HTMLDialogElement>('[data-lightbox-dialog]');

  if (!dialog || dialog.dataset.ready !== undefined) return;

  dialog.dataset.ready = '';

  const image = dialog.querySelector<HTMLImageElement>('[data-lightbox-image]');
  const caption = dialog.querySelector<HTMLElement>('[data-lightbox-caption]');
  const counter = dialog.querySelector<HTMLElement>('[data-lightbox-counter]');
  const previous = dialog.querySelector<HTMLButtonElement>('[data-lightbox-prev]');
  const next = dialog.querySelector<HTMLButtonElement>('[data-lightbox-next]');

  if (!image || !caption || !counter || !previous || !next) return;

  let items: HTMLAnchorElement[] = [];
  let index = 0;

  const show = (position: number) => {
    index = (position + items.length) % items.length;

    const item = items[index];
    const dark = getComputedStyle(document.documentElement).colorScheme === 'dark';

    image.src = (dark && item.dataset.lightboxDark) || item.href;
    image.alt = item.dataset.caption ?? '';
    caption.textContent = item.dataset.caption ?? '';
    counter.textContent = interpolate(dialog.dataset.counter ?? '', {
      current: String(index + 1),
      total: String(items.length),
    });
    previous.hidden = next.hidden = items.length < 2;
  };

  document.querySelectorAll<HTMLAnchorElement>('a[data-lightbox]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (isNewTabClick(event)) return;

      event.preventDefault();
      items = [...document.querySelectorAll<HTMLAnchorElement>(`a[data-lightbox="${link.dataset.lightbox}"]`)];
      show(items.indexOf(link));
      dialog.showModal();
    });
  });

  previous.addEventListener('click', () => show(index - 1));
  next.addEventListener('click', () => show(index + 1));
  dialog.querySelector('[data-lightbox-close]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(index - 1);
    if (event.key === 'ArrowRight') show(index + 1);
  });

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
});
