import etEventsTab from '@assets/projects/et-events-tab.webp';
import etOverviewPanels from '@assets/projects/et-overview-panels.webp';
import etOverview from '@assets/projects/et-overview.webp';
import eventMapForm from '@assets/projects/event-map-form.webp';
import eventMapScroll2 from '@assets/projects/event-map-scroll-2.webp';
import eventMapScroll from '@assets/projects/event-map-scroll.webp';
import eventMap from '@assets/projects/event-map.webp';
import iamfrontAboutDark from '@assets/projects/iamfront-about-dark.webp';
import iamfrontAbout from '@assets/projects/iamfront-about.webp';
import iamfrontHomeDark from '@assets/projects/iamfront-home-dark.webp';
import iamfrontHome from '@assets/projects/iamfront-home.webp';
import iamfrontLighthouseDesktop from '@assets/projects/iamfront-lighthouse-desktop.webp';
import iamfrontLighthouseMobile from '@assets/projects/iamfront-lighthouse-mobile.webp';
import iamfrontProjectDark from '@assets/projects/iamfront-project-dark.webp';
import iamfrontProject from '@assets/projects/iamfront-project.webp';
import iamfrontProjectsDark from '@assets/projects/iamfront-projects-dark.webp';
import iamfrontProjects from '@assets/projects/iamfront-projects.webp';
import landingiSpaLandings from '@assets/projects/landingi-spa-landings.webp';
import lbMebelHome from '@assets/projects/lb-mebel-home.webp';
import lbMebelMobileHome from '@assets/projects/lb-mebel-mobile-home.webp';
import lbMebelMobileOffer from '@assets/projects/lb-mebel-mobile-offer.webp';
import lbMebelMobileProject from '@assets/projects/lb-mebel-mobile-project.webp';
import lbMebelMobileProjects from '@assets/projects/lb-mebel-mobile-projects.webp';
import lbMebelOffer from '@assets/projects/lb-mebel-offer.webp';
import lbMebelProject from '@assets/projects/lb-mebel-project.webp';
import lbMebelProjects from '@assets/projects/lb-mebel-projects.webp';
import nextshopHome from '@assets/projects/nextshop-home.webp';
import nextshopMobileHome from '@assets/projects/nextshop-mobile-home.webp';
import nextshopMobileProduct from '@assets/projects/nextshop-mobile-product.webp';
import nextshopMobileProducts from '@assets/projects/nextshop-mobile-products.webp';
import nextshopProduct from '@assets/projects/nextshop-product.webp';
import nextshopProducts from '@assets/projects/nextshop-products.webp';
import nextshopSearch from '@assets/projects/nextshop-search.webp';
import pageinsiderAttention from '@assets/projects/pageinsider-attention.webp';
import pageinsiderForm from '@assets/projects/pageinsider-form.webp';
import pageinsiderGuide from '@assets/projects/pageinsider-guide.webp';
import pageinsiderOptimizationTab from '@assets/projects/pageinsider-optimization-tab.webp';
import pageinsiderSmartMap from '@assets/projects/pageinsider-smart-map.webp';
import solisChatEmpty from '@assets/projects/solis-chat-empty.webp';
import solisChatSources from '@assets/projects/solis-chat-sources.webp';
import solisChatStats from '@assets/projects/solis-chat-stats.webp';
import solisInsightsList from '@assets/projects/solis-insights-list.webp';
import timeOnPage from '@assets/projects/time-on-page.webp';
import visitedCountriesMapDark from '@assets/projects/visited-countries-map-dark.webp';
import visitedCountriesMapLight from '@assets/projects/visited-countries-map-light.webp';
import visitedCountriesMobileFavorites from '@assets/projects/visited-countries-mobile-favorites.webp';
import visitedCountriesMobileList from '@assets/projects/visited-countries-mobile-list.webp';
import visitedCountriesMobileMap from '@assets/projects/visited-countries-mobile-map.webp';
import visitedCountriesMobileProfile from '@assets/projects/visited-countries-mobile-profile.webp';
import { skills } from '@data/en/skills';
import type { Project } from '@typings/content';

export const projects: Project[] = [
  {
    id: 'iamfront-dev',
    name: 'iamfront.dev',
    types: ['private'],
    start: '2026-11',
    stack: [
      skills.typescript,
      skills.css,
      skills.astro,
      skills.zod,
      skills.restApi,
      skills.coreWebVitals,
      skills.lighthouse,
      skills.wcag,
      skills.seo,
      skills.git,
      skills.eslint,
      skills.prettier,
      skills.figma,
      skills.netlify,
    ],
    links: {
      live: 'https://iamfront.dev/',
    },
    summary:
      'My portfolio, designed in Figma and built from scratch in Astro and TypeScript: a bilingual static site with light and dark themes, conformant with WCAG 2.1 AA.',
    star: {
      situation:
        '<p>The goal was to create my own portfolio website – clear, with a simple, uncluttered interface, presenting my projects, experience and skills in one place.</p>',
      task: '<p>The goal was a fast, accessible, easy-to-maintain site in two languages, with projects described in the STAR format, filtering by technology and content kept separate from the code – so it can later move to my own backend.</p>',
      action:
        '<p>I designed the site in Figma, then built it in Astro and TypeScript following atomic design: atoms, molecules, organisms and templates. The look is driven by CSS design tokens, with a light and a dark theme and an animation switch.</p><p>Content – projects, experience, skills, bio and information pages – lives in Astro content collections with the Polish and English text side by side, validated with Zod schemas on every build. Translations hold only interface text. Skills are the single source of truth for projects, experience and filters.</p><p>I treat accessibility as a requirement: keyboard support, correct semantics and ARIA, contrast in both themes, and a site that works without JavaScript. I check every change with <strong>axe DevTools</strong> and <strong>Lighthouse</strong>. On top of that: SEO (canonical, hreflang, JSON-LD, sitemap), a Netlify Forms contact form with a GDPR notice and an email address protected from bots. Strict TypeScript, ESLint and Prettier keep the code consistent.</p>',
      result:
        '<p>The site scores 100 in every Lighthouse category on desktop and mobile, and axe DevTools reports no issues. Adding a new project, company or skill takes a single JSON file, with no component changes.</p><p>The project is still evolving – next steps are automated tests, an Open Graph image and my own backend for managing content.</p>',
    },
    gallery: [
      {
        src: iamfrontHome,
        dark: iamfrontHomeDark,
        alt: 'iamfront.dev home page',
      },
      {
        src: iamfrontAbout,
        dark: iamfrontAboutDark,
        alt: '“About me” page',
      },
      {
        src: iamfrontProjects,
        dark: iamfrontProjectsDark,
        alt: 'Project list with the technology filter',
      },
      {
        src: iamfrontProject,
        dark: iamfrontProjectDark,
        alt: 'Project page',
      },
    ],
    lighthouse: [
      {
        src: iamfrontLighthouseMobile,
        alt: 'Lighthouse report for the home page on mobile: 100 in Performance, Accessibility, Best Practices and SEO',
      },
      {
        src: iamfrontLighthouseDesktop,
        alt: 'Lighthouse report for the home page on desktop: 100 in Performance, Accessibility, Best Practices and SEO',
      },
    ],
  },
  {
    id: 'lb-mebel',
    name: 'LB MEBEL',
    types: ['commercial', 'private'],
    start: '2024-04',
    stack: [
      skills.typescript,
      skills.nextjs,
      skills.tailwind,
      skills.nextIntl,
      skills.graphql,
      skills.contentful,
      skills.coreWebVitals,
      skills.git,
      skills.sentry,
    ],
    links: {
      live: 'https://lbmebel.pl',
      repo: 'https://github.com/iamfront-dev/lb-mebel-public',
    },
    summary:
      'Building a bilingual website for the furniture company LB MEBEL, presenting the offer, company information and galleries of completed projects. I built the app in Next.js and TypeScript, integrating it with Contentful CMS.',
    star: {
      situation:
        '<p>LB MEBEL needed a modern website to present its offer and completed projects to potential customers. A key requirement was the ability to update content and add new galleries independently, without involving a developer.</p><p>The site also had to work in two languages, load photo galleries quickly and be properly prepared for search engines.</p>',
      task: '<p>I was solely responsible for implementing the application from a supplied design, choosing the technology stack, configuring the CMS and integrating it with the frontend. I chose Next.js for its server rendering and static generation capabilities, built-in image optimisation and SEO support. Combined with Incremental Static Regeneration (ISR), this also allowed CMS content to be updated without redeploying the application.</p>',
      action:
        '<p>I built a responsive frontend in Next.js (App Router) and TypeScript, implementing the supplied design using Tailwind CSS. I configured Contentful CMS, creating content models for each section of the site, including the offer, company information, slider, projects with galleries and categories, and contact. I integrated the CMS with the application via GraphQL, using GraphQL Codegen to generate TypeScript types.</p><p>I implemented ISR with a 10–20 minute refresh interval so that CMS updates appear on the site without redeploying. In the project gallery I added category filtering, pagination and image optimisation via next/image, including a blurred placeholder on load.</p><p>I implemented bilingual support (PL and EN) using next-intl, covering content translations and localised URLs. I also handled SEO, configuring metadata, Open Graph images and a sitemap with language variants. I added Google Analytics that activates only after the user gives consent in the cookie banner, and error monitoring with Sentry.</p>',
      result:
        "<p>The result is a responsive, bilingual website presenting LB MEBEL's offer and completed projects. Thanks to the Contentful CMS integration, the company can update content, manage the offer and add new galleries without touching the application code.</p><p>ISR allows publishing changes without redeploying, and image optimisation combined with SEO configuration support the site's performance and search engine visibility.</p>",
    },
    gallery: [
      {
        src: lbMebelHome,
        alt: 'LB MEBEL home page with the custom kitchen furniture section',
      },
      {
        src: lbMebelProjects,
        alt: 'Projects list with category filters',
      },
      {
        src: lbMebelProject,
        alt: 'Single project gallery',
      },
      {
        src: lbMebelOffer,
        alt: 'Offer page',
      },
      {
        src: lbMebelMobileHome,
        alt: 'Home page on a phone',
      },
      {
        src: lbMebelMobileProjects,
        alt: 'Project filters on a phone',
      },
      {
        src: lbMebelMobileProject,
        alt: 'Project on a phone',
      },
      {
        src: lbMebelMobileOffer,
        alt: 'Offer on a phone',
      },
    ],
  },
  {
    id: 'visited-countries',
    name: 'VisitedCountries',
    types: ['private'],
    start: '2022-12',
    end: '2026-10',
    stack: [
      skills.typescript,
      skills.react,
      skills.capacitor,
      skills.formik,
      skills.pwa,
      skills.reduxToolkit,
      skills.yup,
      skills.i18next,
      skills.reactSimpleMaps,
      skills.styledComponents,
      skills.restApi,
      skills.firebase,
      skills.vitest,
      skills.reactTestingLibrary,
      skills.cypress,
      skills.git,
      skills.vite,
      skills.sentry,
    ],
    links: {
      live: 'https://visited-countries.vercel.app/',
      repo: 'https://github.com/jaroslawkucharski/visited-countries',
    },
    summary:
      'An interactive travel map where users can mark visited countries, keep a list, record visit dates and build a wish list of places to visit. It runs as a PWA and on Android and iOS through Capacitor.',
    star: {
      situation:
        '<p>I built this app to learn TypeScript and work through the full process of building a React app in practice — from authentication and a database, through testing and error monitoring, to preparing a mobile version.</p>',
      task: '<p>I wanted to build a simple, convenient app where users can mark visited countries on a world map, keep a personal list and access their data on any device.</p>',
      action:
        '<p>The app is built with React, TypeScript and Vite. I made the map with react-simple-maps, adding zoom and country selection. Clicking a country adds it to the list; clicking it again removes it after confirming in a modal.</p><p>I managed the country list and user data with Redux Toolkit and Firebase Realtime Database. Sign-in, sign-up, password reset and profile editing with an avatar are based on Firebase Auth and Firebase Storage, and forms on Formik and Yup.</p><p>I added light and dark themes in styled-components, PL and EN language versions in i18next, separate desktop and mobile menus, a PWA, Android and iOS builds with Capacitor and error monitoring in Sentry.</p><p>After several years I returned to the project to modernise the technology and add new features. I added visit date tracking and yearly statistics, country search, a favourites list with a counter, Firebase-backed notifications and a local country database. I improved the mobile interface and rebuilt several components after removing an external UI library. I improved accessibility — keyboard navigation, screen reader labels and focus management.</p><p>I updated the app to React 19 and newer library versions, added unit and component tests and end-to-end tests in Cypress. I also cleaned up the project configuration, optimised assets and refreshed the documentation.</p>',
      result:
        '<p>The result is a complete, cross-platform travel tracking app combining an interactive map, country lists, a user account and data synchronisation. The original project let me practise the full React app development process, and returning to it later allowed me to modernise the code, improve accessibility, increase test coverage and add features that are useful in everyday use.</p>',
    },
    gallery: [
      {
        src: visitedCountriesMapLight,
        alt: 'Visited countries map in light theme',
      },
      {
        src: visitedCountriesMapDark,
        alt: 'Visited countries map in dark theme',
      },
      {
        src: visitedCountriesMobileMap,
        alt: 'Visited countries map on mobile',
      },
      {
        src: visitedCountriesMobileList,
        alt: 'Visited countries list on mobile',
      },
      {
        src: visitedCountriesMobileFavorites,
        alt: 'Favorite countries on mobile',
      },
      {
        src: visitedCountriesMobileProfile,
        alt: 'User profile on mobile',
      },
    ],
  },
  {
    id: 'solis',
    name: 'Solis',
    types: ['commercial'],
    featured: true,
    company: 'Landingi',
    start: '2026-05',
    end: '2026-09',
    stack: [
      skills.typescript,
      skills.react,
      skills.sass,
      skills.swr,
      skills.reactMarkdown,
      skills.nodejs,
      skills.restApi,
      skills.mixpanel,
      skills.vitest,
      skills.reactTestingLibrary,
      skills.git,
      skills.vercelAiSdk,
      skills.mastra,
      skills.codeReview,
      skills.ciCd,
      skills.agile,
    ],
    links: {
      live: 'https://landingi.com/product/solis/',
    },
    summary:
      'Development of the Solis interface, an AI agent in Landingi that analyzes EventTracker data and landing page context, automatically generating insights, alerts and optimization recommendations. Users can also ask questions about their page results through an AI chat.',
    star: {
      situation:
        '<p>EventTracker gave users detailed data about visitor behaviour, but interpreting it required manually analysing charts and events. Solis was meant to simplify that process by delivering automatic insights and recommendations and letting users ask questions about their landing page results.</p><p>Ready-made insights were already available in the app, but there was no interface for having a conversation with the AI agent.</p>',
      task: '<p>Together with another frontend developer I was responsible for building the Solis chat in the SPA. My main focus was API integration, handling streamed responses, managing conversation state and history, and keeping the interface smooth. I was also responsible for migrating and developing the existing insights views.</p>',
      action:
        '<p>I built the chat interface using useChat from the Vercel AI SDK, integrating response streaming from the Mastra API and JWT authentication. I implemented generation state handling, progressive response rendering, request cancellation and retry, and Markdown formatting including tables.</p><p>I managed scroll behaviour during streaming so users could follow the response being generated while still being able to scroll back to earlier messages without being forced to the bottom. I added conversation restoration when the panel is reopened or the page is refreshed — the frontend fetched the conversation ID and its history from the API, replayed the messages and allowed continuing the same thread.</p><p>I also developed new conversation handling, message suggestions, response rating and copying, error handling, access control and Mixpanel analytics events.</p><p>I moved the existing insights to the Solis panel, adding type filtering, an unread counter and rating. I then built a separate Insights page with a detail view, insight deletion with a reason, and navigation to the related landing page. I covered key functionality with automated tests in Vitest and Testing Library.</p>',
      result:
        '<p>The result is an integrated Solis interface where users can browse automatically generated insights and recommendations and analyse their landing page results through a conversation with the AI agent. Streaming lets users follow responses as they are generated, and conversation history restoration means they can continue a previous analysis without starting over.</p><p>The expanded insights views bring recommendations, their details and related landing pages together in one place.</p>',
    },
    gallery: [
      {
        src: solisChatStats,
        alt: 'Solis chat with a landing page stats summary in a table',
      },
      {
        src: solisChatSources,
        alt: 'Solis answer about traffic sources and devices',
      },
      {
        src: solisInsightsList,
        alt: 'Insights list in the Solis panel',
      },
      {
        src: solisChatEmpty,
        alt: 'Empty Solis chat with suggested questions',
      },
    ],
  },
  {
    id: 'eventtracker',
    name: 'EventTracker: Dashboard',
    types: ['commercial'],
    company: 'Landingi',
    start: '2023-11',
    end: '2026-09',
    stack: [
      skills.typescript,
      skills.react,
      skills.reactRouter,
      skills.sass,
      skills.swr,
      skills.recharts,
      skills.i18next,
      skills.restApi,
      skills.axios,
      skills.vitest,
      skills.reactTestingLibrary,
      skills.git,
      skills.codeReview,
      skills.ciCd,
      skills.agile,
    ],
    links: {
      live: 'https://landingi.com/product/eventtracker/',
    },
    summary:
      'Development of the EventTracker analytics interface, Landingi’s built-in tool for monitoring user behaviour on landing pages. The project covered migrating EventTracker to the new SPA and developing the Overview and Events tabs in the landing page dashboard.',
    star: {
      situation:
        '<p>EventTracker collected behavioural data from published landing pages, but users needed a convenient way to analyse it without relying on external tools. The dashboard had to present both high-level page results — visits, conversions and leads — and detailed information about individual events.</p><p>As the new SPA grew, the existing functionality also needed to be migrated and the analytics interface further developed.</p>',
      task: '<p>I was responsible for migrating EventTracker to the new SPA and developing its interface together with the team. I worked primarily on two dashboard tabs: Overview, presenting a summary of landing page results, and Events, enabling detailed event analysis. My task was to implement new views, integrate with the API, handle filtering and present data in tables and charts.</p>',
      action:
        '<p>On the Overview tab I built the device statistics panel and developed the Top Events and Scroll Depth sections, showing the most frequent events and page scroll depth. I also added conversion goal selection with dynamic event loading and an average time-on-page panel covering both visibility and user activity, broken down by device.</p><p>On the Events tab I developed interactive event and visit charts using Recharts and an event table with server-side pagination and expandable row details. I also implemented Combined Events functionality for grouping events, with form handling, modals and user permission support.</p><p>I implemented filter and date range management via URL parameters so the selected settings were shared between the Overview and Events tabs. Filtering covered devices, countries, languages, UTM campaigns, page types and A/B test variants.</p><p>I also developed the Google Analytics 4 integration, adding an event forwarding configuration panel. I implemented data export, interactive tours with react-joyride and automated tests in Vitest and Testing Library.</p>',
      result:
        '<p>The result is a comprehensive analytics interface in the new SPA that lets users analyse landing page results and visitor behaviour in one place. The Overview tab provides a clear summary of visits, conversions, leads, sales and user engagement, while Events allows detailed filtering, combining and exporting of events and integration with Google Analytics 4.</p><p>Shared filtering and interactive visualisations make it easier to compare data and evaluate landing page performance.</p>',
    },
    gallery: [
      {
        src: etOverview,
        alt: 'Overview tab: visits, conversions, time on page, results chart and Solis insights',
      },
      {
        src: etOverviewPanels,
        alt: 'Overview panels: devices, Top Events, countries and scroll depth',
      },
      {
        src: etEventsTab,
        alt: 'Events tab: events chart and paginated table',
      },
    ],
  },
  {
    id: 'landingi-spa',
    name: 'Landingi SPA',
    types: ['commercial'],
    featured: true,
    company: 'Landingi',
    start: '2022-06',
    end: '2026-09',
    stack: [
      skills.typescript,
      skills.javascript,
      skills.html,
      skills.css,
      skills.react,
      skills.reactRouter,
      skills.sass,
      skills.swr,
      skills.reduxToolkit,
      skills.zod,
      skills.restApi,
      skills.axios,
      skills.php,
      skills.vitest,
      skills.reactTestingLibrary,
      skills.git,
      skills.docker,
      skills.storybook,
      skills.codeReview,
      skills.ciCd,
      skills.agile,
    ],
    links: {
      live: 'https://landingi.com/',
    },
    summary:
      'Development of Landingi’s new React app, built from scratch to replace the legacy system based on PHP and React 17 with Redux. Landingi is a SaaS platform for building and optimizing landing pages, used by thousands of customers in over 80 countries.',
    star: {
      situation:
        '<p>Landingi’s main application had grown over the years across two technologies: PHP and React 17 with Redux. Maintaining the legacy system made product development harder, so in 2021 the team began building a new React SPA to gradually replace it.</p>',
      task: '<p>I joined the project in 2022. I was responsible for migrating successive areas of the platform to the new app, rebuilding and extending their functionality, and adapting the UI and logic to the new architecture.</p>',
      action:
        '<p>I developed key platform modules, including the landing page dashboard, the pages list and A/B test management. I implemented filtering and sorting, bulk actions, group management, moving pages between accounts, archiving, permissions and variant configuration with traffic allocation for A/B tests.</p><p>I built the domain management module from scratch, covering domain addition and configuration, provider detection, DNS record verification, configuration instructions and handling of limits, subaccounts and permissions.</p><p>I also created the new application navigation — sidebar and top bar — with account switching, permission handling, Whitelabel support, system messages and integrations with external tools.</p><p>I migrated existing modules to the SPA, including PageInsider, EventTracker, upgrade modals and the pricing page. In parallel I modernised the codebase by migrating JavaScript to TypeScript, replacing Yup with Zod and expanding automated tests in Vitest and Testing Library.</p>',
      result:
        '<p>All key platform areas were migrated to the new SPA, progressively reducing dependence on the legacy system. New, consistent modules now handle landing page management, domains, A/B testing and navigation. Code modernisation and expanded test coverage made the application easier to maintain and extend.</p>',
    },
    gallery: [
      {
        src: landingiSpaLandings,
        alt: 'Landing pages list with groups, stats and A/B test and schedule labels',
      },
    ],
  },
  {
    id: 'eventtracker-time-on-page',
    name: 'EventTracker: Time on Page',
    types: ['commercial'],
    featured: true,
    company: 'Landingi',
    start: '2025-10',
    end: '2026-08',
    stack: [
      skills.typescript,
      skills.beaconApi,
      skills.pageVisibilityApi,
      skills.localstorage,
      skills.restApi,
      skills.vitest,
      skills.git,
      skills.vite,
      skills.codeReview,
      skills.ciCd,
      skills.agile,
    ],
    links: {
      live: 'https://landingi.com/product/eventtracker/',
    },
    summary:
      'Development of a time-measurement mechanism for landing pages within EventTracker, Landingi’s behavioural analytics tool. The project involved implementing two independent counters: page visibility time and actual user activity time.',
    star: {
      situation:
        '<p>EventTracker let users analyse visitor behaviour on landing pages, but there was no data on how long visitors actually spent on them. Measuring from page open to close alone did not reflect real engagement, because users could switch tabs, leave the page open without interacting, or return to it within the same session.</p>',
      task: '<p>My task was to build a time-measurement mechanism in the EventTracker script that distinguished page visibility from user activity, accounted for browser behaviour and kept API request volume low. I was also responsible for presenting the collected data in the application dashboard.</p>',
      action:
        '<p>In the EventTracker script written in TypeScript I implemented two independent counters: page visibility time and user activity time, detected from interactions such as clicks, scrolling, cursor movement, keyboard and touch. After 5 seconds of inactivity I paused the activity counter, and when the tab was hidden I paused both counters.</p><p>I introduced an adaptive data-sending interval that lengthened with visit duration (from 1 to 60 seconds), reducing request volume during longer sessions. When the tab was hidden or the page was left I used navigator.sendBeacon with a fetch fallback. I added localStorage persistence so measurement could continue after a page refresh or re-entry within the same session.</p><p>I also handled back/forward cache (bfcache) returns, guarded against duplicate sends and covered edge cases such as disabling measurement on thank-you pages and keeping the active time from exceeding the total.</p><p>In the SPA I integrated the API data and added a dashboard panel showing average page visibility time and user activity time, also broken down by device.</p>',
      result:
        '<p>Landingi users gained access to statistics showing not only how long their landing pages were visible, but also the actual activity of visitors, giving a clearer picture of engagement. The mechanism accounts for tab switching, inactivity and within-session returns, while local data persistence and on-leave sending reduce the risk of losing results.</p><p>The adaptive interval also cuts server request volume during longer visits.</p>',
    },
    gallery: [
      {
        src: timeOnPage,
        alt: 'Average active and absolute time on page in the Overview stats',
      },
    ],
  },
  {
    id: 'eventtracker-event-map',
    name: 'EventTracker: Event Map',
    types: ['commercial'],
    featured: true,
    company: 'Landingi',
    start: '2025-09',
    end: '2026-07',
    stack: [
      skills.typescript,
      skills.react,
      skills.reactRouter,
      skills.sass,
      skills.swr,
      skills.floatingUi,
      skills.motion,
      skills.restApi,
      skills.axios,
      skills.vitest,
      skills.reactTestingLibrary,
      skills.git,
      skills.codeReview,
      skills.ciCd,
      skills.agile,
    ],
    links: {
      live: 'https://landingi.com/product/eventtracker/',
    },
    summary:
      'Development of the Event & Scroll Map module in EventTracker, enabling visual analysis of user behaviour on landing pages. The project involved building an interactive page preview with overlaid events and a scroll depth map.',
    star: {
      situation:
        '<p>EventTracker provided user behaviour data as event lists and statistics, but there was no way to visualise that data directly on the landing page. Numbers alone did not show where clickable elements were located or how far visitors scrolled, which made the data harder to interpret.</p>',
      task: '<p>I was responsible for building the Event & Scroll Map module from scratch in the SPA, covering navigation, state management, the landing page preview and the scroll map. I developed the event map in collaboration with another frontend developer.</p>',
      action:
        '<p>I built an interactive landing page preview in an iframe using srcDoc, adjusting its width to match the selected device. I implemented a mechanism for transferring application styles into the iframe, covering CSS selector scoping, import handling and light/dark theme synchronisation via MutationObserver. Data overlays were rendered directly into the iframe document using createPortal.</p><p>I built the scroll map from scratch, dividing the page into depth bands from 10% to 100% and colouring each area based on the percentage of users who reached it.</p><p>Within the event map I implemented the ability to jump from the event list directly to the corresponding location on the page preview. I also added a details panel positioned with Floating UI and support for combined events.</p><p>I integrated the module with the API using SWR and implemented filter state management in URL parameters, covering device, page type, variant, date range and selected view. I also added interactive tours with react-joyride, dark theme support and automated tests in Vitest and Testing Library.</p>',
      result:
        '<p>The result is a module for visually analysing clicks, events and scroll depth directly on the landing page preview. Users can see which page elements generate interactions and how far visitors get, filtered by device, variant and date range.</p><p>The integration with the event list makes it quick to go from a statistic to the exact spot on the page, helping users analyse behaviour and identify areas that need optimisation.</p>',
    },
    gallery: [
      {
        src: eventMap,
        alt: 'Event map with click details for a button',
      },
      {
        src: eventMapForm,
        alt: 'Event map on a contact form',
      },
      {
        src: eventMapScroll,
        alt: 'Scroll map at the top of the page',
      },
      {
        src: eventMapScroll2,
        alt: 'Scroll map with the 75% boundary',
      },
    ],
  },
  {
    id: 'checkout-registration',
    name: 'Checkout & Registration',
    types: ['commercial'],
    company: 'Landingi',
    start: '2025-04',
    end: '2026-06',
    stack: [
      skills.typescript,
      skills.react,
      skills.sass,
      skills.swr,
      skills.formik,
      skills.yup,
      skills.restApi,
      skills.vitest,
      skills.reactTestingLibrary,
      skills.git,
      skills.codeReview,
      skills.ciCd,
      skills.agile,
    ],
    links: {},
    summary:
      'Development of the registration, plan selection and payment flow in Landingi. A key part of the project was a Checkout rebuild I proposed and led myself to simplify the pricing logic and make future development easier.',
    star: {
      situation:
        '<p>The registration and plan-purchase flow in Landingi covered different user paths, subscription variants, limits, promotions and payments. Over time, the pricing logic in particular had grown complex and was duplicated across many components. This made offer updates harder and increased the risk of bugs.</p>',
      task: '<p>I developed the registration and Checkout front end in the SPA, responsible for forms, validation, process states and integration with plans and payments. I also proposed the Checkout rebuild myself to simplify its architecture and make future development easier.</p>',
      action:
        "<p>I implemented registration and purchase steps, plan selection and configuration, card payments, subscription changes and credit purchases.</p><p>I rebuilt the Checkout using reusable components, extracting pricing, promotion, limit and feature logic into shared hooks and helpers. I structured the purchase flow into clear stages: plan selection, configuration, payment and confirmation.</p><p>I added automatic savings calculation, form validation, error handling and edge case coverage — such as preserving the user's selection after a page refresh and enforcing step order. I covered key parts of the flow with automated tests.</p>",
      result:
        '<p>The result is a consistent registration and purchase flow in the SPA. The Checkout rebuild reduced code duplication and simplified offer updates, making it easier to introduce new plans, limits and promotions while maintaining compatibility with legacy subscription variants.</p>',
    },
    gallery: [],
  },
  {
    id: 'ai-variant',
    name: 'AI Variant™',
    types: ['commercial'],
    archived: true,
    company: 'Landingi',
    start: '2022-03',
    end: '2025-06',
    stack: [
      skills.typescript,
      skills.react,
      skills.sass,
      skills.swr,
      skills.contextApi,
      skills.niceModal,
      skills.reactIntl,
      skills.i18next,
      skills.restApi,
      skills.jest,
      skills.reactTestingLibrary,
      skills.git,
      skills.codeReview,
      skills.ciCd,
      skills.agile,
    ],
    links: {},
    summary:
      'Development of the AI Variant™ feature in Landingi, enabling automatic generation of landing page variants for A/B testing. The solution used a machine learning model to propose changes to copy and CTA buttons and predict conversion rates.',
    star: {
      situation:
        '<p>In 2022 Landingi was extending its A/B testing module with AI-powered features. A machine learning model was to automatically suggest changes to landing pages and predict their effectiveness. Users needed an interface to generate a new variant, review the proposed changes and use it within the existing testing flow.</p>',
      task: '<p>I was solely responsible for building the AI Variant™ frontend on the Optimization tab, from integrating the generation process with the interface to presenting results and comparing variants. I also had to integrate the new feature with the existing A/B testing module, handling generation states, restrictions on regenerating variants and the ability to manage generated pages.</p>',
      action:
        "<p>I built the AI Variant™ interface in React, integrated with the A/B test variants table. I implemented generation state handling, progress feedback and a lock preventing regeneration of an AI variant for the same landing page version. I extended the variants table with thumbnails and AI labels for generated pages and the ability to set them as the main variant. I also added a predicted conversion rate display.</p><p>I built an interactive modal for comparing the main variant with the AI-generated one — users could view both versions side by side or separately and toggle comments highlighting the model's proposed changes. I covered the feature with automated tests in Jest and Testing Library.</p><p>In 2024 I migrated AI Variant™ to the new React and TypeScript SPA, adapting the interface to the new architecture and integrating the feature with the rebuilt variant-addition flow. In 2025, after the decision to discontinue AI Variant™, I was also responsible for removing the feature from the application and cleaning up related code.</p>",
      result:
        '<p>The feature let users automatically generate landing page variants, review the AI-proposed changes and compare predicted performance against the main variant. Integration with the A/B testing module meant generated pages could be used directly in the existing conversion optimisation flow, without manually preparing an alternative variant.</p><p>The feature was later migrated to the new SPA and retired from the product in 2025 by company decision.</p>',
    },
    gallery: [],
  },
  {
    id: 'nextshop',
    name: 'NextShop',
    types: ['private'],
    archived: true,
    start: '2024-02',
    end: '2024-03',
    stack: [
      skills.typescript,
      skills.react,
      skills.nextjs,
      skills.tailwind,
      skills.mdx,
      skills.zod,
      skills.nextIntl,
      skills.graphql,
      skills.algolia,
      skills.clerk,
      skills.graphqlCodegen,
      skills.stripe,
      skills.git,
      skills.vercel,
    ],
    links: {
      live: 'https://nextjs14masters-course.vercel.app/',
      repo: 'https://github.com/jaroslawkucharski/nextjs14masters',
    },
    summary:
      'An online store built in Next.js 14 as part of the Next.js Masters course. The app covers a product catalogue with categories and collections, search, product recommendations, a cart, Stripe payments, user accounts, order history and PL/EN language versions.',
    star: {
      situation:
        '<p>The Next.js Masters course involved building a complete online store using the App Router in Next.js 14 and data from a ready-made GraphQL API. The project covered both the shopping experience and elements typical of a production app: authentication, payments, orders, internationalisation and cache management.</p>',
      task: '<p>My task was to build the store from the frontend and Next.js server side. I was responsible for the product catalogue, search, cart, payment flow, user accounts, order handling and content pages.</p>',
      action:
        '<p>I built the app in Next.js 14 with the App Router, TypeScript and Tailwind CSS. Products, categories, collections, cart and orders were fetched through GraphQL using types generated with GraphQL Codegen. I revalidated the cache with tags after cart changes and through an endpoint for revalidating product pages.</p><p>The cart is based on Server Actions and a cookie storing the cart ID. I added optimistic quantity updates using useOptimistic and a cart preview in a modal opened via an intercepted route. I built a product list with pagination and sorting saved in URL parameters, a debounced search and product recommendations using Algolia.</p><p>I also added a review form with Zod validation, Stripe payments with webhook signature verification and sign-in with user account management via Clerk. Signed-in users can browse their order history.</p><p>I completed the app with PL and EN language versions in next-intl, content pages in MDX and generated Open Graph images for products. I set up the runtime environment and deployed a demo on Vercel.</p>',
      result:
        '<p>The result is a complete, working online store with a product catalogue, cart, payments, user accounts, orders, recommendations and two-language support. The project let me practise the key elements of the Next.js App Router in a real setting, including Server Actions, data revalidation, routing, form handling and integration with external services.</p><p>The code is publicly available on GitHub and the app has a live demo deployed on Vercel.</p>',
    },
    gallery: [
      {
        src: nextshopHome,
        alt: 'NextShop home page with collections and products',
      },
      {
        src: nextshopProducts,
        alt: 'All products list with sorting',
      },
      {
        src: nextshopProduct,
        alt: 'Product page with an add-to-cart button',
      },
      {
        src: nextshopSearch,
        alt: 'Search results',
      },
      {
        src: nextshopMobileHome,
        alt: 'Home page on a phone',
      },
      {
        src: nextshopMobileProducts,
        alt: 'Product list on a phone',
      },
      {
        src: nextshopMobileProduct,
        alt: 'Product on a phone',
      },
    ],
  },
  {
    id: 'pageinsider',
    name: 'PageInsider™',
    types: ['commercial'],
    archived: true,
    company: 'Landingi',
    start: '2021-04',
    end: '2024-01',
    stack: [
      skills.typescript,
      skills.react,
      skills.redux,
      skills.reactRouter,
      skills.sass,
      skills.contextApi,
      skills.reactIntl,
      skills.reactJoyride,
      skills.reactImageAnnotation,
      skills.restApi,
      skills.jest,
      skills.reactTestingLibrary,
      skills.enzyme,
      skills.git,
      skills.codeReview,
      skills.ciCd,
      skills.agile,
    ],
    links: {},
    summary:
      'Development and rebuild of the PageInsider™ interface — an AI tool in Landingi that used a machine learning model to predict which elements of a landing page visitors would pay attention to. The project covered modernising the interface, developing analytics features and integrating with the A/B testing module.',
    star: {
      situation:
        '<p>I joined the PageInsider™ project in 2021 while the feature was still in beta. Page analysis was handled by a machine learning model, but the existing React interface needed usability improvements and the code needed to be brought into order.</p><p>As the tool evolved, it also needed broader analysis capabilities, improved result presentation and integration with other landing page optimisation features.</p>',
      task: '<p>I was responsible for developing and rebuilding the PageInsider™ frontend, covering UX/UI improvements, state management reorganisation, new feature implementation and automated test development. I also had to integrate the tool with the Optimization module and A/B tests, then migrate it to the new SPA.</p>',
      action:
        '<p>I started by improving the interface and message copy, then rebuilt the module in React, moving shared state to the Context API. I rewrote the side panel presenting the Clarity Score, guide and recommendations, and the top bar for switching between the main page and the thank-you page. I also developed the preview carousel, Smart Map layer management and analysis state handling — including result generation, errors and incomplete screenshots.</p><p>I implemented interactive area of interest (AOI) selection, letting users check the predicted attention level for specific landing page elements. I added keyboard support, the ability to jump to the editor and compare results across analyses, a tour for new users and Whitelabel account support.</p><p>On the Optimization tab I built the PageInsider™ panel integrated with A/B tests and a comparison view with AI Variant™ including a predicted conversion rate. I also developed automated tests in Jest, Enzyme and Testing Library.</p><p>In 2023 I integrated PageInsider™ with the landing pages list and migrated the feature to the new React and TypeScript SPA. In 2024, after the decision to retire the tool, I removed it from the application and cleaned up the related code.</p>',
      result:
        '<p>The result was a comprehensive interface letting users analyse predicted visitor attention before publishing a landing page. With Smart Map, Clarity Score and interactive area selection, users could see which page elements drew attention, make changes in the editor and compare results across analyses.</p><p>Integration with the Optimization module brought attention analysis together with the other landing page optimisation tools. The feature was later migrated to the new SPA and retired from the product in 2024 by company decision.</p>',
    },
    gallery: [
      {
        src: pageinsiderSmartMap,
        alt: 'Smart Map with an attention heatmap, Clarity Score and attention percentage for a button',
      },
      {
        src: pageinsiderGuide,
        alt: 'Analysis with the PageInsider™ guide panel',
      },
      {
        src: pageinsiderOptimizationTab,
        alt: 'PageInsider™ panel on the Optimization tab',
      },
      {
        src: pageinsiderAttention,
        alt: 'Attention map on a page with a headline and CTA button',
      },
      {
        src: pageinsiderForm,
        alt: 'Attention map on a page with a form',
      },
    ],
  },
];
