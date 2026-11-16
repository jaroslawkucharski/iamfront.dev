// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://iamfront.dev',
  build: { inlineStylesheets: 'always' },
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    // Sitemap: sitemap-index.xml with hreflang pairs (EN and PL).
    // Left out (noindex): 404 pages (/404/, /pl/404/) and the contact form thank-you page (/contact/thanks/, /pl/contact/thanks/).
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', pl: 'pl' } },
      filter: (page) => !/\/(contact\/thanks|404)\/?$/.test(page),
    }),
  ],
});
