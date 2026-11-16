import { getExperience } from '@helpers/experience/getExperience';

export const getExperienceValues = () => {
  const experience = getExperience();

  return {
    experience,
    years: { plural: 'experienceYears' as const, count: Number.parseInt(experience) },
  };
};
