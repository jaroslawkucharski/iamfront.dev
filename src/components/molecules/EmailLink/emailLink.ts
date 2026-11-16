const reverse = (text = '') => [...text].reverse().join('');

document.addEventListener('click', (event) => {
  const button = (event.target as Element).closest<HTMLButtonElement>('[data-email-reveal]');
  const wrapper = button?.closest<HTMLElement>('[data-email-link]');
  const link = wrapper?.querySelector<HTMLAnchorElement>('.email-link__link');

  if (!wrapper || !link) return;

  const address = `${reverse(wrapper.dataset.user)}@${reverse(wrapper.dataset.domain)}`;
  const text = link.querySelector('[data-email-text]');

  link.href = `mailto:${address}`;
  link.title = wrapper.dataset.title ? `${wrapper.dataset.title}: ${address}` : address;

  if (text) text.textContent = address;

  wrapper.dataset.revealed = 'true';
  link.focus();
});
