import { person } from '@data/site';

export const getPersonSchema = (site: URL) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: person.name,
  jobTitle: person.jobTitle,
  url: site.href,
  address: {
    '@type': 'PostalAddress',
    addressLocality: person.city,
    addressCountry: person.country,
  },
  sameAs: [person.github, person.linkedin],
});
