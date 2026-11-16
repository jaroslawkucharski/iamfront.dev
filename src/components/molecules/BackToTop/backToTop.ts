const updateBackToTop = () => {
  const link = document.querySelector<HTMLElement>('[data-back-to-top]');

  if (!link) return;

  const root = document.documentElement;

  link.hidden = root.scrollHeight <= root.clientHeight + 1;
};

document.addEventListener('astro:page-load', updateBackToTop);
window.addEventListener('resize', updateBackToTop);
