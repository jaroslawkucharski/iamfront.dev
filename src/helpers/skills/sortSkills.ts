import { getCollection } from 'astro:content';

import { sortByOrder } from '@helpers/collections/sortByOrder';

export const sortSkills = async (ids: readonly string[]): Promise<string[]> => {
  const categories = sortByOrder(await getCollection('skillCategories')).map((category) => category.id);
  const skills = await getCollection('skills');

  const rank = new Map(
    skills.map((skill) => [skill.id, categories.indexOf(skill.data.category.id) * 1000 + skill.data.order]),
  );

  return [...ids].sort((first, second) => (rank.get(first) ?? Infinity) - (rank.get(second) ?? Infinity));
};
