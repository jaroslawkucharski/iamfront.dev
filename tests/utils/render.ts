import { experimental_AstroContainer as AstroContainer } from 'astro/container';

import config from '../../astro.config.mjs';

type Component = Parameters<AstroContainer['renderToString']>[0];
type Options = Parameters<AstroContainer['renderToString']>[1];

export const renderToString = async (component: Component, options: Options = {}) => {
  const container = await AstroContainer.create({ astroConfig: { site: config.site, i18n: config.i18n } });

  return container.renderToString(component, options);
};

export const mount = async (component: Component, options: Options = {}) => {
  document.body.innerHTML = await renderToString(component, options);

  return document.body;
};

export const mountPage = async (page: Component, options: Options = {}) => {
  const html = await renderToString(page, { ...options, partial: false });
  const parsed = new DOMParser().parseFromString(html, 'text/html');

  parsed.querySelectorAll('script').forEach((script) => script.remove());

  document.documentElement.lang = parsed.documentElement.lang;
  document.head.innerHTML = parsed.head.innerHTML;
  document.body.innerHTML = parsed.body.innerHTML;

  return document.body;
};
