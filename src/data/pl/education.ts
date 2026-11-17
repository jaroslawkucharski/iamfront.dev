import wsti from '@assets/education/wsti.png';
import { skills } from '@data/pl/skills';
import type { TimelineEntry } from '@typings/content';

export const education: TimelineEntry[] = [
  {
    id: 'wsti',
    name: 'Wyższa Szkoła Technologii Informatycznych w Katowicach',
    start: '2014',
    end: '2018',
    title: 'Grafika (specjalizacja: Multimedia) – studia I stopnia',
    url: 'https://wsti.pl',
    logo: {
      src: wsti,
    },
    sections: [
      {
        title: 'Zakres studiów',
        stack: [
          skills.graphics,
          skills.dtp,
          skills.typography,
          skills.photography,
          skills.multimedia,
          skills.animation,
        ],
        items: [
          'Projektowanie graficzne, kompozycja i <strong>typografia</strong>',
          'Grafika rastrowa i wektorowa, przygotowanie materiałów do druku i internetu',
          '<strong>Multimedia</strong>: animacja, wideo i podstawy grafiki 3D',
          'Projektowanie stron WWW i interfejsów – początek mojej drogi do frontendu',
        ],
      },
    ],
  },
];
