import { vi } from 'vitest';

export const pageLoad = () => document.dispatchEvent(new Event('astro:page-load'));

export const beforeSwap = (newDocument: Document, info?: unknown) => {
  const viewTransition = { ready: Promise.resolve(), skipTransition: vi.fn() };
  const event = Object.assign(new Event('astro:before-swap'), { newDocument, info, viewTransition });

  document.dispatchEvent(event);

  return viewTransition;
};

export const createDocument = (html: string) => {
  const newDocument = document.implementation.createHTMLDocument();

  newDocument.body.innerHTML = html;

  return newDocument;
};
