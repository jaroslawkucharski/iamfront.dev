import wsti from '@assets/education/wsti.png';
import { skills } from '@data/en/skills';
import type { TimelineEntry } from '@typings/content';

export const education: TimelineEntry[] = [
  {
    id: 'wsti',
    name: 'University of Information Technology in Katowice',
    start: '2014',
    end: '2018',
    title: "Graphic Design (Specialisation: Multimedia) – Bachelor's degree",
    url: 'https://wsti.pl',
    logo: {
      src: wsti,
    },
    sections: [
      {
        title: 'Programme overview',
        stack: [
          skills.graphics,
          skills.dtp,
          skills.typography,
          skills.photography,
          skills.multimedia,
          skills.animation,
        ],
        items: [
          'Graphic design, composition and <strong>typography</strong>',
          'Raster and vector graphics, preparing assets for print and the web',
          '<strong>Multimedia</strong>: animation, video and 3D graphics basics',
          'Web and interface design – where my path to frontend began',
        ],
      },
    ],
  },
];
