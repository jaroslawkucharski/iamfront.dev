import { describe, expect, it } from 'vitest';

import { projects as enProjects } from '@data/en/projects';
import { skills as enSkills } from '@data/en/skills';
import { projects as plProjects } from '@data/pl/projects';
import { skills as plSkills } from '@data/pl/skills';
import { getSkillBadges } from '@helpers/skills/getSkillBadges';
import { getDictionary } from '@lib/i18n/getDictionary';
import { interpolate } from '@lib/i18n/interpolate';
import { plural } from '@lib/i18n/plural';

const countFor = (skill: string) => enProjects.filter((project) => project.stack.includes(skill)).length;

describe('getSkillBadges', () => {
  it('links skills used in projects to the filtered project list', () => {
    const count = countFor(enSkills.react);
    const hint = ` – ${interpolate(plural(getDictionary('en').projectCount, count, 'en'), { count: String(count) })}`;

    expect(getSkillBadges([enSkills.react], enProjects, 'en')).toEqual([
      {
        label: enSkills.react,
        href: `/projects/?skills=${encodeURIComponent(enSkills.react)}`,
        title: `${enSkills.react}${hint}`,
        hint,
      },
    ]);
  });

  it('uses the locale in links and plural forms', () => {
    const [badge] = getSkillBadges([plSkills.astro], plProjects, 'pl');
    const count = plProjects.filter((project) => project.stack.includes(plSkills.astro)).length;

    expect(badge.href).toBe(`/pl/projects/?skills=${encodeURIComponent(plSkills.astro)}`);
    expect(badge.hint).toBe(
      ` – ${interpolate(plural(getDictionary('pl').projectCount, count, 'pl'), { count: String(count) })}`,
    );
  });

  it('returns a plain label for skills without projects', () => {
    const unused = Object.values(enSkills).find((skill) => countFor(skill) === 0)!;

    expect(getSkillBadges([unused], enProjects, 'en')).toEqual([{ label: unused }]);
  });

  it('keeps the given order', () => {
    const order = [enSkills.typescript, enSkills.react, enSkills.astro];

    expect(getSkillBadges(order, enProjects, 'en').map((badge) => badge.label)).toEqual(order);
  });
});
