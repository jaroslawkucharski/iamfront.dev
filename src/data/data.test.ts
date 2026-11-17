import { describe, expect, it } from 'vitest';

import { education as enEducation } from '@data/en/education';
import { experience as enExperience } from '@data/en/experience';
import { hobbies as enHobbies } from '@data/en/hobbies';
import { profile as enProfile } from '@data/en/profile';
import { projects as enProjects } from '@data/en/projects';
import { skillCategories as enCategories, skills as enSkills } from '@data/en/skills';
import { education as plEducation } from '@data/pl/education';
import { experience as plExperience } from '@data/pl/experience';
import { hobbies as plHobbies } from '@data/pl/hobbies';
import { profile as plProfile } from '@data/pl/profile';
import { projects as plProjects } from '@data/pl/projects';
import { skillCategories as plCategories, skills as plSkills } from '@data/pl/skills';

const locales = [
  {
    locale: 'en',
    skills: enSkills,
    categories: enCategories,
    projects: enProjects,
    timeline: [...enExperience, ...enEducation],
  },
  {
    locale: 'pl',
    skills: plSkills,
    categories: plCategories,
    projects: plProjects,
    timeline: [...plExperience, ...plEducation],
  },
];

const ids = (items: { id: string }[]) => items.map((item) => item.id);

describe('data', () => {
  it('has the same entries in the same order in both languages', () => {
    expect(ids(plProjects)).toEqual(ids(enProjects));
    expect(ids(plExperience)).toEqual(ids(enExperience));
    expect(ids(plEducation)).toEqual(ids(enEducation));
    expect(ids(plHobbies)).toEqual(ids(enHobbies));
    expect(Object.keys(plSkills)).toEqual(Object.keys(enSkills));
    expect(plProfile.bio).toHaveLength(enProfile.bio.length);
  });

  it('has unique ids and skill names', () => {
    locales.forEach(({ skills, projects, timeline }) => {
      expect(new Set(ids(projects)).size).toBe(projects.length);
      expect(new Set(ids(timeline)).size).toBe(timeline.length);
      expect(new Set(Object.values(skills)).size).toBe(Object.keys(skills).length);
    });
  });

  it.each(locales)('uses only known skills in $locale', ({ skills, categories, projects, timeline }) => {
    const known = new Set(Object.values(skills));
    const used = [
      ...categories.flatMap((category) => category.skills),
      ...projects.flatMap((project) => project.stack),
      ...timeline.flatMap((entry) => entry.sections ?? []).flatMap((section) => section.stack ?? []),
    ];

    expect(used.filter((skill) => !known.has(skill))).toEqual([]);
  });

  it.each(locales)('links timeline sections to existing projects in $locale', ({ projects, timeline }) => {
    const links = timeline.flatMap((entry) => entry.sections ?? []).flatMap((section) => section.project ?? []);

    expect(links.length).toBeGreaterThan(0);
    expect(links.filter((id) => !ids(projects).includes(id))).toEqual([]);
  });

  it.each(locales)('has valid dates in $locale', ({ projects, timeline }) => {
    const dates = [...projects, ...timeline].flatMap((item) => [item.start, item.end]).filter(Boolean);

    expect(dates.filter((date) => !/^\d{4}(-\d{2})?$/.test(date ?? ''))).toEqual([]);
  });

  it.each(locales)('has HTML paragraphs in every project story in $locale', ({ projects }) => {
    const parts = projects.flatMap((project) => Object.values(project.star));

    expect(parts.filter((part) => !part.startsWith('<p>') || !part.endsWith('</p>'))).toEqual([]);
  });

  it('keeps the experience placeholder in the profile', () => {
    expect(enProfile.bio[0]).toContain('{experience}');
    expect(plProfile.bio[0]).toContain('{experience}');
  });
});
