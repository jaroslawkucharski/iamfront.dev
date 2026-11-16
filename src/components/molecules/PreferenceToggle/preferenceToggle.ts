const root = document.documentElement;

const isOn = (toggle: HTMLElement, html: HTMLElement = root) => {
  const value = html.dataset[toggle.dataset.preference ?? ''];

  return value ? value === toggle.dataset.onValue : window.matchMedia(toggle.dataset.media ?? '').matches;
};

const save = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    return;
  }
};

const sync = (doc: Document = document) =>
  doc.querySelectorAll<HTMLElement>('[data-preference]').forEach((toggle) => {
    const on = isOn(toggle, doc.documentElement);

    toggle.setAttribute('aria-checked', String(on));
    toggle.title = (on ? toggle.dataset.titleOff : toggle.dataset.titleOn) ?? '';
  });

document.addEventListener('astro:page-load', () => {
  document.querySelectorAll<HTMLElement>('[data-preference]').forEach((toggle) =>
    toggle.addEventListener('click', () => {
      const key = toggle.dataset.preference ?? '';
      const next = (isOn(toggle) ? toggle.dataset.offValue : toggle.dataset.onValue) ?? '';

      root.dataset[key] = next;
      save(key, next);
      sync();
    }),
  );

  sync();
});

document.addEventListener('astro:before-swap', (event) => sync(event.newDocument));

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => sync());
