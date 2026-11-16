import { person } from '@data/site';

export const getExperience = (now = new Date()): string => {
  const start = new Date(person.careerStart);
  const months = (now.getUTCFullYear() - start.getUTCFullYear()) * 12 + now.getUTCMonth() - start.getUTCMonth();
  const years = Math.floor(months / 12);

  return months % 12 > 0 ? `${years}+` : `${years}`;
};
