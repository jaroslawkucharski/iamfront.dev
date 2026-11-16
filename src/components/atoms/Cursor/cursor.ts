const root = document.documentElement;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const forcedColors = window.matchMedia('(forced-colors: active)');
const INTERACTIVE = 'a, button, [role="switch"], input, select, textarea, label, summary';
const EASING = 0.35;

let pointerX = -100;
let pointerY = -100;
let cursorX = pointerX;
let cursorY = pointerY;
let frame = 0;

const getCursor = () => document.querySelector<HTMLElement>('[data-cursor]');
const isEnabled = () => finePointer.matches && !forcedColors.matches && root.dataset.motion !== 'off';

const render = () => {
  const cursor = getCursor();

  if (!cursor) return;

  cursorX += (pointerX - cursorX) * EASING;
  cursorY += (pointerY - cursorY) * EASING;
  cursor.style.translate = `${cursorX}px ${cursorY}px`;

  const isMoving = Math.abs(pointerX - cursorX) + Math.abs(pointerY - cursorY) > 0.1;

  frame = isMoving ? requestAnimationFrame(render) : 0;
};

const update = () => {
  const enabled = isEnabled();

  root.classList.toggle('has-custom-cursor', enabled);

  if (!enabled) getCursor()?.classList.remove('cursor--visible');
};

document.addEventListener('pointermove', (event) => {
  if (event.pointerType !== 'mouse' || !isEnabled()) return;

  pointerX = event.clientX;
  pointerY = event.clientY;

  const cursor = getCursor();

  if (!cursor) return;

  if (!cursor.classList.contains('cursor--visible')) {
    cursorX = pointerX;
    cursorY = pointerY;

    cursor.classList.add('cursor--visible');
  }

  const target = event.target instanceof Element ? event.target : null;

  cursor.classList.toggle('cursor--active', Boolean(target?.closest(INTERACTIVE)));

  if (!frame) frame = requestAnimationFrame(render);
});

root.addEventListener('pointerleave', () => getCursor()?.classList.remove('cursor--visible'));
document.addEventListener('pointerdown', () => getCursor()?.classList.add('cursor--pressed'));
document.addEventListener('pointerup', () => getCursor()?.classList.remove('cursor--pressed'));

new MutationObserver(update).observe(root, { attributes: true, attributeFilter: ['data-motion'] });
finePointer.addEventListener('change', update);
forcedColors.addEventListener('change', update);
document.addEventListener('astro:page-load', update);

update();
