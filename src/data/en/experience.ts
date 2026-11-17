import alerabat from '@assets/companies/alerabat.png';
import bugbugDark from '@assets/companies/bugbug-dark.png';
import bugbug from '@assets/companies/bugbug.png';
import landingiDark from '@assets/companies/landingi-dark.png';
import landingi from '@assets/companies/landingi.png';
import tauron from '@assets/companies/tauron.png';
import { skills } from '@data/en/skills';
import type { TimelineEntry } from '@typings/content';

export const experience: TimelineEntry[] = [
  {
    id: 'alerabat',
    featured: true,
    name: 'AleRabat',
    logo: {
      src: alerabat,
    },
    start: '2026-10',
    title: 'Senior Frontend Developer',
    titleNote: 'part-time, contract',
    sections: [
      {
        title: 'Cashback platform and user account development',
        stack: [
          skills.javascript,
          skills.html,
          skills.css,
          skills.react,
          skills.restApi,
          skills.oauth,
          skills.openidConnect,
          skills.pkce,
          skills.webpack,
        ],
        items: [
          '<strong>Develop and maintain the existing AleRabat frontend</strong> and the React-based user account application.',
          'Implement <strong>new features and update existing views</strong> for the user account, cashback, purchase history, payouts and special offers.',
          'Develop <strong>login, registration, password reset and session handling flows</strong>.',
          'Integrate frontend changes with <strong>existing backend APIs and OAuth 2.0 / OpenID Connect using PKCE</strong>.',
          'Extend <strong>forms, data validation, and loading, error and empty states</strong>.',
          'Work with the <strong>existing component, module and frontend bundle architecture</strong>, keeping compatibility with the rest of the platform.',
          'Deliver performance improvements through <strong>code splitting, lazy loading and load-time optimisation</strong>.',
          '<strong>Prepare and deploy changes to production.</strong>',
          'Diagnose and fix <strong>production bugs and issues reported by users and the team</strong>.',
        ],
      },
    ],
    url: 'https://alerabat.com',
  },
  {
    id: 'tauron',
    featured: true,
    name: 'TAURON Obsługa Klienta',
    shortName: 'TAURON',
    logo: {
      src: tauron,
    },
    start: '2026-10',
    title: 'Senior Website Development Specialist',
    sections: [
      {
        title: 'Website development and maintenance',
        stack: [
          skills.javascript,
          skills.html,
          skills.css,
          skills.sitecore,
          skills.wcag,
          skills.seo,
          skills.webAnalytics,
        ],
        items: [
          'Responsible for developing and maintaining <strong>TAURON websites built on Sitecore</strong>, delivering changes from requirements and tickets through implementation, testing and publishing.',
          '<strong>Build and extend JavaScript scripts</strong>, implementing new features and adapting existing solutions to business requirements and user needs.',
          "Prepare and deploy <strong>new pages, forms and interactive elements</strong>, keeping them consistent with the sites' architecture and standards.",
          'Analyse issues reported by users and business teams, <strong>identifying root causes and coordinating fixes</strong> with IT teams and vendors.',
          'Work with business, marketing, IT and communication teams on <strong>planning and delivering website changes and new initiatives</strong>.',
          'Responsible for <strong>quality assurance of deployed changes</strong>, including forms, links, components and user flows.',
          'Develop the websites with <strong>usability, accessibility, SEO and WCAG standards</strong> in mind.',
        ],
      },
      {
        title: 'Digital documents',
        stack: [skills.wcag, skills.indesign],
        items: [
          'Responsible for <strong>preparing and developing digital documents</strong> and interactive PDF forms used in customer service processes.',
          'Design documents and forms in Adobe InDesign, <strong>turning business and process requirements into finished digital materials</strong>.',
          'Create <strong>interactive fields, form layouts and mechanisms</strong> that let customers fill in documents electronically.',
          'Analyse and improve document structure for <strong>usability, accessibility and WCAG compliance</strong>.',
          'Test forms and documents before publishing, checking <strong>fields, validation, layout and behaviour</strong> across devices and PDF readers.',
          'Apply fixes based on <strong>testing, user reports and stakeholder requirements</strong>.',
          'Prepare <strong>final materials for publishing and digital distribution</strong>.',
        ],
      },
    ],
    url: 'https://www.tauron.pl',
  },
  {
    id: 'landingi',
    featured: true,
    name: 'Landingi',
    logo: {
      src: landingi,
      dark: landingiDark,
    },
    start: '2020-10',
    end: '2026-09',
    title: 'Frontend Engineer',
    sections: [
      {
        title: 'Core platform and frontend architecture',
        items: [
          'Built significant parts of a <strong>new React SPA from scratch</strong>, creating a modern frontend foundation for the core Landingi platform.',
          'Gradually <strong>migrated functionality from the legacy application</strong>, including PHP-based areas, to the new React SPA, reducing reliance on legacy code and simplifying further development.',
          'Improved <strong>frontend performance</strong> through code splitting, lazy loading and dependency optimisation, cutting initial load time and the amount of code loaded on startup.',
          'Owned <strong>selected key platform modules</strong>, covering the whole process from technical design and implementation to maintenance, production support and further development.',
          'Took part in <strong>frontend architecture decisions</strong>, code reviews and engineering standards for a global SaaS platform used by thousands of customers in more than 80 countries and handling millions of visits a month.',
        ],
        project: 'landingi-spa',
      },
      {
        title: 'EventTracker – Landing page behavioural analytics',
        items: [
          'Built <strong>key frontend components of EventTracker</strong> – a behavioural analytics platform for analysing how users interact with landing pages, including clicks, scroll depth, time on page and micro-conversions.',
          'Owned <strong>selected EventTracker modules</strong> from technical design and API integration, through testing and deployment, to production support and further development.',
          'Built <strong>analytics interfaces that process and present large volumes of data</strong> while keeping the application highly responsive.',
          'Optimised <strong>rendering and data fetching</strong>, improving load times and the responsiveness of analytics views.',
          'Worked closely with the backend team on <strong>defining API contracts</strong> and integrating complex analytics data flows with the frontend.',
        ],
        project: 'eventtracker',
      },
      {
        title: 'Solis – AI agent for landing page optimisation',
        items: [
          'Built <strong>key frontend features of Solis</strong> – an AI-powered analytics assistant that turns EventTracker data into automated insights, alerts and recommendations.',
          'Built an <strong>interactive AI chat</strong> that lets users analyse behavioural data and ask questions in natural language.',
          'Integrated <strong>asynchronous backend processes and AI-based solutions</strong> with the frontend, also developing selected areas in Node.js/Express.',
          'Owned <strong>selected Solis modules</strong> after the production launch, covering feature development, production issue resolution, maintenance and further improvements.',
          'Improved <strong>the responsiveness and reliability of AI-based processes</strong> by optimising state management and asynchronous data processing.',
        ],
        project: 'solis',
      },
      {
        title: 'UI library, quality and frontend development',
        stack: [
          skills.typescript,
          skills.react,
          skills.vitest,
          skills.reactTestingLibrary,
          skills.docker,
          skills.vite,
          skills.storybook,
          skills.sentry,
        ],
        items: [
          'Built and maintained a <strong>shared Storybook-based component library</strong> used across many areas of the Landingi platform.',
          'Introduced <strong>reusable UI components and frontend patterns</strong>, reducing code duplication and improving consistency across product teams.',
          'Took part in major <strong>React, Vite and frontend dependency upgrades</strong>, making the code easier to maintain, speeding up builds and improving developer experience.',
          'Expanded <strong>automated test coverage</strong> of selected frontend modules with Vitest and React Testing Library.',
          'Diagnosed and resolved <strong>production issues using Sentry</strong> and application monitoring, including performance, rendering and API integration problems.',
          'Worked in a <strong>Continuous Delivery environment</strong> with automated tests and build and deployment pipelines enabling frequent production releases.',
          'Brought Codex, Claude Code and GitHub Copilot into the <strong>day-to-day development process</strong>, using them for implementation, debugging, refactoring and code reviews.',
        ],
      },
    ],
    url: 'https://landingi.com',
  },
  {
    id: 'bugbug',
    name: 'BugBug',
    logo: {
      src: bugbug,
      dark: bugbugDark,
    },
    url: 'https://bugbug.io',
    start: '2021-12',
    end: '2023-06',
    title: 'Frontend Developer',
    titleNote: 'part-time, contract',
    sections: [
      {
        title: 'Product website, app and browser extension',
        stack: [
          skills.react,
          skills.nextjs,
          skills.redux,
          skills.pwa,
          skills.styledComponents,
          skills.restApi,
          skills.strapi,
          skills.jest,
          skills.reactTestingLibrary,
          skills.git,
          skills.docker,
          skills.sentry,
        ],
        items: [
          'Developed and maintained the <strong>Next.js product website</strong> integrated with <strong>Strapi CMS</strong>, working with dynamic content and REST APIs.',
          'Delivered <strong>new features in the React-based application</strong>, supporting further product development.',
          'Contributed to the <strong>BugBug browser extension</strong> for test automation.',
          'Wrote <strong>unit and integration tests</strong> with Jest and React Testing Library.',
        ],
      },
    ],
  },
  {
    id: 'alerabat-junior',
    name: 'AleRabat',
    logo: {
      src: alerabat,
    },
    url: 'https://alerabat.com',
    start: '2020-01',
    end: '2021-01',
    title: 'Junior Frontend Developer',
    titleNote: 'part-time, contract',
    sections: [
      {
        title: 'AleRabat web application development',
        stack: [skills.javascript, skills.html, skills.css, skills.rwd, skills.wcag, skills.git],
        items: [
          'Developed and maintained <strong>frontend features</strong> with HTML, CSS and JavaScript, gaining hands-on experience with <strong>production web applications</strong>.',
          'Delivered <strong>UI changes and new features</strong> in an existing web application, following product and business requirements.',
          'Diagnosed and fixed <strong>frontend issues</strong>, improving application stability and the user experience.',
        ],
      },
    ],
  },
];
