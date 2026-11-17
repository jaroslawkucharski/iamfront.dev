import { beforeEach, describe, expect, it, vi } from 'vitest';

import { getDictionary } from '@lib/i18n/getDictionary';
import { interpolate } from '@lib/i18n/interpolate';
import { pageLoad } from '@tests/utils/events';
import { mountPage } from '@tests/utils/render';

import Project, { getStaticPaths } from '@pages/[...locale]/projects/[slug].astro';

import '@organisms/Lightbox/lightbox';

const { lightbox } = getDictionary('en');
const projectPath = (id: string) => getStaticPaths().find((path) => path.params.slug === id && !path.params.locale)!;

const dialog = () => document.querySelector<HTMLDialogElement>('dialog')!;
const image = () => document.querySelector<HTMLImageElement>('[data-lightbox-image]')!;
const counter = () => document.querySelector('[data-lightbox-counter]')?.textContent;
const caption = () => document.querySelector('[data-lightbox-caption]')?.textContent;
const links = (group: string) => [...document.querySelectorAll<HTMLAnchorElement>(`a[data-lightbox="${group}"]`)];
const control = (name: string) => document.querySelector<HTMLButtonElement>(`[data-lightbox-${name}]`)!;

const position = (current: number, total: number) =>
  interpolate(lightbox.counter, { current: String(current), total: String(total) });

const open = async (id: string) => {
  const { props } = projectPath(id);

  await mountPage(Project, { props, request: new Request(`https://iamfront.dev/projects/${id}/`) });

  if (dialog()) {
    dialog().showModal = vi.fn(() => dialog().setAttribute('open', ''));
    dialog().close = vi.fn(() => dialog().removeAttribute('open'));
  }

  pageLoad();

  return props.project;
};

describe('lightbox script', () => {
  beforeEach(async () => {
    await open('iamfront-dev');
  });

  it('opens the clicked screenshot with its caption', () => {
    const [, second] = links('project');

    second.click();

    expect(dialog().showModal).toHaveBeenCalled();
    expect(image().src).toBe(second.href);
    expect(image().alt).toBe(second.dataset.caption);
    expect(caption()).toBe(second.dataset.caption);
    expect(counter()).toBe(position(2, links('project').length));
    expect(control('close').getAttribute('aria-label')).toBe(lightbox.close);
  });

  it('moves between screenshots with buttons and arrow keys', () => {
    const total = links('project').length;

    links('project')[0].click();
    control('next').click();

    expect(counter()).toBe(position(2, total));

    control('prev').click();
    control('prev').click();

    expect(counter()).toBe(position(total, total));

    dialog().dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));

    expect(counter()).toBe(position(1, total));

    dialog().dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
    dialog().dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));

    expect(counter()).toBe(position(total, total));
  });

  it('uses the dark screenshot in dark mode', () => {
    const [first] = links('project');

    document.documentElement.style.colorScheme = 'dark';
    first.click();
    document.documentElement.style.colorScheme = '';

    expect(image().getAttribute('src')).toBe(first.dataset.lightboxDark);
  });

  it('closes with the button and the backdrop only', () => {
    links('project')[0].click();
    control('close').click();
    image().click();
    dialog().click();

    expect(dialog().close).toHaveBeenCalledTimes(2);
  });

  it('lets the browser open the screenshot in a new tab', () => {
    links('project')[0].dispatchEvent(new MouseEvent('click', { ctrlKey: true, bubbles: true, cancelable: true }));

    expect(dialog().showModal).not.toHaveBeenCalled();
  });

  it('hides navigation for a single screenshot', async () => {
    const project = await open('landingi-spa');

    expect(project.gallery).toHaveLength(1);

    links('project')[0].click();

    expect(control('prev').hidden).toBe(true);
    expect(control('next').hidden).toBe(true);
  });

  it('initialises once', () => {
    pageLoad();
    links('project')[0].click();

    expect(dialog().showModal).toHaveBeenCalledTimes(1);
  });

  it('does nothing on pages without screenshots', async () => {
    await open('ai-variant');

    expect(dialog()).toBeNull();
    expect(links('project')).toHaveLength(0);
  });
});
