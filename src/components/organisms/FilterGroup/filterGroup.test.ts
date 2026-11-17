import { beforeEach, describe, expect, it } from 'vitest';

import { projects } from '@data/en/projects';
import { skills } from '@data/en/skills';
import { getDictionary } from '@lib/i18n/getDictionary';
import { interpolate } from '@lib/i18n/interpolate';
import { plural } from '@lib/i18n/plural';
import { pageLoad } from '@tests/utils/events';
import { mountPage } from '@tests/utils/render';

import ProjectsPage from '@pages/[...locale]/projects/index.astro';

import '@organisms/FilterGroup/filterGroup';

const { projects: dictionary, projectCount } = getDictionary('en');

const namesWith = (...picked: string[]) =>
  projects.filter((project) => picked.some((skill) => project.stack.includes(skill))).map((project) => project.name);

const shown = (count: number) =>
  interpolate(dictionary.shown, { count: interpolate(plural(projectCount, count, 'en'), { count: String(count) }) });

const chip = (skill: string) => document.querySelector<HTMLButtonElement>(`[data-chip="${skill}"]`)!;
const visibleNames = () =>
  [...document.querySelectorAll<HTMLElement>('#project-list > li')]
    .filter((item) => !item.hidden)
    .map((item) => item.querySelector('h2')?.textContent?.trim());
const status = () => document.querySelector('[data-filter-status]')?.textContent;
const clear = () => document.querySelector<HTMLButtonElement>('[data-filter-clear]')!;
const search = () => document.querySelector<HTMLInputElement>('[data-chips-search]')!;
const toggle = () => document.querySelector<HTMLButtonElement>('[data-chips-toggle]')!;
const more = () => document.getElementById(toggle().getAttribute('aria-controls') ?? '')!;

const typeSearch = (value: string) => {
  search().value = value;
  search().dispatchEvent(new Event('input'));
};

const open = async (query = '') => {
  history.replaceState(null, '', `/projects/${query}`);
  await mountPage(ProjectsPage, {
    props: { locale: 'en' },
    request: new Request(`https://iamfront.dev/projects/${query}`),
  });
  pageLoad();
};

describe('filterGroup script', () => {
  beforeEach(() => open());

  it('shows the filter and all projects', () => {
    expect(document.querySelector<HTMLElement>('[data-filter-group]')?.hidden).toBe(false);
    expect(visibleNames()).toEqual(projects.map((project) => project.name));
  });

  it('filters by picked skills and updates the URL and status', () => {
    chip(skills.tailwind).click();

    expect(chip(skills.tailwind).getAttribute('aria-pressed')).toBe('true');
    expect(visibleNames()).toEqual(namesWith(skills.tailwind));
    expect(new URLSearchParams(location.search).get('skills')).toBe(skills.tailwind);
    expect(status()).toBe(shown(namesWith(skills.tailwind).length));
    expect(clear().hidden).toBe(false);

    chip(skills.astro).click();

    expect(visibleNames()).toEqual(namesWith(skills.tailwind, skills.astro));
    expect(new URLSearchParams(location.search).get('skills')).toBe(`${skills.tailwind},${skills.astro}`);

    chip(skills.tailwind).click();

    expect(visibleNames()).toEqual(namesWith(skills.astro));
  });

  it('moves picked chips next to the search field', () => {
    chip(skills.astro).click();

    expect(document.querySelector('.filter-group__search')?.nextElementSibling).toBe(chip(skills.astro));
  });

  it('restores picked skills from the URL', async () => {
    await open(`?skills=${encodeURIComponent(skills.react)},Missing`);

    expect(chip(skills.react).getAttribute('aria-pressed')).toBe('true');
    expect(visibleNames()).toEqual(namesWith(skills.react));
    expect(status()).toBe('');
  });

  it('clears all picked skills', () => {
    chip(skills.react).click();
    typeSearch('vit');
    clear().click();

    expect(chip(skills.react).getAttribute('aria-pressed')).toBe('false');
    expect(visibleNames()).toHaveLength(projects.length);
    expect(location.search).toBe('');
    expect(search().value).toBe('');
    expect(document.activeElement).toBe(search());
  });

  it('expands and collapses the remaining skills', () => {
    const allSkills = new Set(projects.flatMap((project) => project.stack)).size;
    const firstSkills = document.querySelectorAll('.filter-group__chips > [data-chip]').length;

    toggle().click();

    expect(more().hidden).toBe(false);
    expect(toggle().textContent).toBe(dictionary.showFewerSkills);

    toggle().click();

    expect(more().hidden).toBe(true);
    expect(toggle().textContent).toBe(`${dictionary.showAllSkills} (${allSkills - firstSkills})`);
  });

  it('searches skills ignoring case', () => {
    typeSearch('TAILW');

    expect(chip(skills.tailwind).hidden).toBe(false);
    expect(chip(skills.react).hidden).toBe(true);
    expect(toggle().hidden).toBe(true);

    typeSearch('xyz');

    expect(document.querySelector<HTMLElement>('[data-chips-empty]')?.hidden).toBe(false);
    expect(document.querySelector('[data-chips-empty]')?.textContent?.trim()).toBe(dictionary.skillSearchEmpty);

    typeSearch('');

    expect(chip(skills.react).hidden).toBe(false);
    expect(toggle().hidden).toBe(false);
    expect(more().hidden).toBe(true);
  });

  it('keeps picked skills and expanded list while searching', () => {
    toggle().click();
    chip(skills.react).click();
    typeSearch('tailw');

    expect(chip(skills.react).hidden).toBe(false);

    typeSearch('');

    expect(more().hidden).toBe(false);
  });

  it('picks the best match on Enter', () => {
    typeSearch('reac');
    search().dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));

    expect(chip(skills.react).getAttribute('aria-pressed')).toBe('true');
    expect(search().value).toBe('');

    typeSearch('xyz');
    search().dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    search().dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab' }));

    expect(document.querySelectorAll('[data-chip][aria-pressed="true"]')).toHaveLength(1);
  });

  it('initialises once', () => {
    pageLoad();
    chip(skills.react).click();

    expect(chip(skills.react).getAttribute('aria-pressed')).toBe('true');
  });
});
