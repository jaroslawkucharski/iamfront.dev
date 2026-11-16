const setTitles = (button: HTMLButtonElement, open: boolean) => {
  const icon = button.querySelector<HTMLElement>('.disclosure__icon');

  [button, icon].forEach((element) => {
    if (element) element.title = (open ? element.dataset.titleCollapse : element.dataset.titleExpand) ?? '';
  });
};

const toggle = (button: HTMLButtonElement, open: boolean) => {
  const panel = document.getElementById(button.getAttribute('aria-controls') ?? '');

  button.setAttribute('aria-expanded', String(open));
  setTitles(button, open);

  if (!panel) return;

  if (open) panel.removeAttribute('hidden');
  else panel.setAttribute('hidden', 'until-found');
};

document.addEventListener('astro:page-load', () => {
  document.querySelectorAll<HTMLElement>('[data-disclosure]:not([data-ready])').forEach((item) => {
    item.dataset.ready = '';

    const button = item.querySelector<HTMLButtonElement>('.disclosure__button');
    const panel = item.querySelector<HTMLElement>('.disclosure__panel');

    if (!button || !panel) return;

    button.addEventListener('click', () => toggle(button, button.getAttribute('aria-expanded') !== 'true'));

    panel.addEventListener('beforematch', () => {
      button.setAttribute('aria-expanded', 'true');
      setTitles(button, true);
    });
  });
});

window.addEventListener('beforeprint', () =>
  document.querySelectorAll<HTMLButtonElement>('.disclosure__button').forEach((button) => toggle(button, true)),
);
