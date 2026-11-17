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
import { skills } from '@data/pl/skills';
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
      live: 'https://iamfront.dev/pl/',
    },
    summary:
      'Moje portfolio, zaprojektowane w Figmie i zbudowane od zera w Astro i TypeScripcie: dwujęzyczna, statyczna strona z jasnym i ciemnym motywem, zgodna z WCAG 2.1 AA.',
    star: {
      situation:
        '<p>Celem było stworzenie własnej strony portfolio – czytelnej, z prostym i przejrzystym interfejsem, pokazującej moje projekty, doświadczenie i umiejętności w jednym miejscu.</p>',
      task: '<p>Celem była szybka, dostępna i łatwa w utrzymaniu strona w dwóch językach, z projektami opisanymi w układzie STAR, filtrowaniem po technologiach i treścią oddzieloną od kodu – tak, żeby w przyszłości przenieść ją do własnego backendu.</p>',
      action:
        '<p>Zaprojektowałem stronę w Figmie, a potem zbudowałem ją w Astro i TypeScripcie zgodnie z atomic design: atomy, molekuły, organizmy i szablony. Wygląd opiera się na design tokens w CSS, z jasnym i ciemnym motywem oraz przełącznikiem animacji.</p><p>Treść – projekty, doświadczenie, umiejętności, bio i strony informacyjne – jest w kolekcjach Astro z wersją polską i angielską obok siebie, sprawdzanych przy każdym buildzie schematami Zod. Tłumaczenia zawierają tylko teksty interfejsu. Umiejętności są jednym źródłem prawdy dla projektów, doświadczenia i filtrów.</p><p>Dostępność traktuję jako wymaganie: obsługa klawiaturą, poprawna semantyka i ARIA, kontrast w obu motywach, działanie bez JavaScriptu. Każdą zmianę sprawdzam w <strong>axe DevTools</strong> i <strong>Lighthouse</strong>. Do tego SEO (canonical, hreflang, JSON-LD, mapa strony), formularz na Netlify Forms z informacją RODO oraz adres e-mail chroniony przed botami. Jakość kodu pilnują TypeScript w trybie strict, ESLint i Prettier.</p>',
      result:
        '<p>Strona ma wynik 100 we wszystkich kategoriach Lighthouse na komputerze i telefonie, a axe DevTools nie zgłasza błędów. Nowy projekt, firmę czy umiejętność dodaję jednym plikiem JSON, bez zmian w komponentach.</p><p>Projekt wciąż się rozwija – kolejne kroki to testy automatyczne, obrazek Open Graph i własny backend do zarządzania treścią.</p>',
    },
    gallery: [
      {
        src: iamfrontHome,
        dark: iamfrontHomeDark,
        alt: 'Strona główna iamfront.dev',
      },
      {
        src: iamfrontAbout,
        dark: iamfrontAboutDark,
        alt: 'Strona „O mnie”',
      },
      {
        src: iamfrontProjects,
        dark: iamfrontProjectsDark,
        alt: 'Lista projektów z filtrem technologii',
      },
      {
        src: iamfrontProject,
        dark: iamfrontProjectDark,
        alt: 'Strona projektu',
      },
    ],
    lighthouse: [
      {
        src: iamfrontLighthouseMobile,
        alt: 'Raport Lighthouse dla strony głównej na telefonie: 100 w kategoriach Performance, Accessibility, Best Practices i SEO',
      },
      {
        src: iamfrontLighthouseDesktop,
        alt: 'Raport Lighthouse dla strony głównej na komputerze: 100 w kategoriach Performance, Accessibility, Best Practices i SEO',
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
      'Stworzenie dwujęzycznej strony internetowej dla firmy meblarskiej LB MEBEL, prezentującej ofertę, informacje o firmie oraz galerie zrealizowanych projektów. Aplikację zbudowałem w Next.js i TypeScript, integrując ją z Contentful CMS.',
    star: {
      situation:
        '<p>Firma LB MEBEL potrzebowała nowoczesnej strony internetowej, która pozwoliłaby zaprezentować ofertę i dotychczasowe realizacje potencjalnym klientom. Ważnym wymaganiem była możliwość samodzielnego aktualizowania treści i dodawania nowych galerii bez konieczności angażowania programisty.</p><p>Strona miała również działać w dwóch językach, szybko ładować galerie zdjęć i być odpowiednio przygotowana pod wyszukiwarki internetowe.</p>',
      task: '<p>Odpowiadałem za samodzielną implementację aplikacji na podstawie dostarczonego projektu graficznego, wybór technologii, konfigurację CMS-a oraz integrację z frontendem. Wybrałem Next.js ze względu na możliwości renderowania i statycznego generowania stron, optymalizację obrazów oraz wsparcie dla SEO. W połączeniu z Incremental Static Regeneration (ISR) pozwoliło to również aktualizować treści z CMS-a bez konieczności ponownego wdrażania aplikacji.</p>',
      action:
        '<p>Zbudowałem responsywny frontend w Next.js (App Router) i TypeScript, odwzorowując dostarczony projekt graficzny przy użyciu Tailwind CSS. Skonfigurowałem Contentful CMS, przygotowując modele treści dla poszczególnych sekcji strony, w tym oferty, informacji o firmie, slidera, realizacji z galeriami i kategoriami oraz kontaktu. Zintegrowałem CMS z aplikacją za pomocą GraphQL, wykorzystując GraphQL Codegen do generowania typów TypeScript.</p><p>Zaimplementowałem ISR z odświeżaniem danych co 10–20 minut, dzięki czemu aktualizacje w CMS-ie mogą pojawiać się na stronie bez ponownego wdrażania aplikacji. W galerii realizacji dodałem filtrowanie po kategoriach, paginację oraz optymalizację zdjęć przez next/image, w tym rozmyty podgląd podczas ładowania.</p><p>Wdrożyłem obsługę dwóch wersji językowych (PL i EN) za pomocą next-intl, uwzględniając tłumaczenia treści i lokalizowane adresy URL. Zadbałem również o SEO, konfigurując metadane, obrazy Open Graph i mapę strony z wersjami językowymi. Dodałem Google Analytics uruchamiane po uzyskaniu zgody użytkownika w banerze cookies oraz monitoring błędów za pomocą Sentry.</p>',
      result:
        '<p>Powstała responsywna, dwujęzyczna strona internetowa prezentująca ofertę i realizacje firmy LB MEBEL. Dzięki integracji z Contentful CMS firma może samodzielnie aktualizować treści, zarządzać ofertą i dodawać nowe galerie bez ingerencji w kod aplikacji.</p><p>ISR umożliwia publikowanie zmian bez ponownego wdrażania strony, a optymalizacja obrazów i konfiguracja SEO wspierają jej wydajność oraz widoczność w wyszukiwarkach.</p>',
    },
    gallery: [
      {
        src: lbMebelHome,
        alt: 'Strona główna LB MEBEL z sekcją mebli kuchennych na wymiar',
      },
      {
        src: lbMebelProjects,
        alt: 'Lista realizacji z filtrowaniem po kategoriach',
      },
      {
        src: lbMebelProject,
        alt: 'Galeria pojedynczej realizacji',
      },
      {
        src: lbMebelOffer,
        alt: 'Strona oferty',
      },
      {
        src: lbMebelMobileHome,
        alt: 'Strona główna na telefonie',
      },
      {
        src: lbMebelMobileProjects,
        alt: 'Filtry realizacji na telefonie',
      },
      {
        src: lbMebelMobileProject,
        alt: 'Realizacja na telefonie',
      },
      {
        src: lbMebelMobileOffer,
        alt: 'Oferta na telefonie',
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
      'Interaktywna mapa podróży, na której użytkownik może zaznaczać odwiedzone kraje, prowadzić ich listę, zapisywać daty wizyt i tworzyć listę miejsc, które chce odwiedzić. Aplikacja działa jako PWA oraz na Androidzie i iOS dzięki Capacitorowi.',
    star: {
      situation:
        '<p>Stworzyłem tę aplikację, żeby nauczyć się TypeScriptu i przejść w praktyce przez cały proces budowy aplikacji w React — od logowania i bazy danych, przez testy i monitoring błędów, po przygotowanie wersji mobilnej.</p>',
      task: '<p>Chciałem zbudować prostą i wygodną aplikację, w której użytkownik zaznacza odwiedzone kraje na mapie świata, prowadzi ich listę i może wrócić do swoich danych na dowolnym urządzeniu.</p>',
      action:
        '<p>Technicznie oparłem aplikację na React, TypeScript i Vite. Mapę przygotowałem w react-simple-maps, dodając przybliżanie oraz możliwość zaznaczania krajów. Kliknięcie kraju dodaje go do listy, a ponowne kliknięcie — po potwierdzeniu w modalu — usuwa go z zapisanych danych.</p><p>Listę krajów oraz dane użytkownika obsłużyłem za pomocą Redux Toolkit i Firebase Realtime Database. Logowanie, rejestrację, reset hasła i edycję profilu z awatarem oparłem na Firebase Auth i Firebase Storage, a formularze przygotowałem z wykorzystaniem Formik i Yup.</p><p>Dodałem jasny i ciemny motyw w styled-components, wersje językowe PL i EN w i18next, osobne menu desktopowe i mobilne, PWA, buildy na Androida i iOS w Capacitorze oraz monitoring błędów w Sentry.</p><p>Po kilku latach wróciłem do projektu, aby zaktualizować go technologicznie i rozbudować o nowe funkcje. Dodałem zapisywanie dat odwiedzin i statystyki roczne, wyszukiwanie krajów, ulubione kraje z licznikiem, powiadomienia przechowywane w Firebase oraz lokalną bazę danych krajów. Usprawniłem interfejs mobilny i przebudowałem część komponentów po usunięciu zewnętrznej biblioteki UI. Poprawiłem dostępność aplikacji, w tym obsługę klawiatury, etykiety dla czytników ekranu i zarządzanie focusem.</p><p>Zaktualizowałem aplikację do React 19 i nowszych wersji bibliotek, dodałem testy jednostkowe i komponentowe oraz testy end-to-end w Cypress. Uporządkowałem konfigurację projektu, zoptymalizowałem grafiki i odświeżyłem dokumentację.</p>',
      result:
        '<p>Powstała kompletna, wieloplatformowa aplikacja do śledzenia podróży, łącząca interaktywną mapę, listy krajów, konto użytkownika i synchronizację danych. Pierwotny projekt pozwolił mi przećwiczyć cały proces budowy aplikacji React, a późniejszy powrót umożliwił modernizację kodu, poprawę dostępności, zwiększenie pokrycia testami i dodanie funkcji przydatnych w codziennym korzystaniu z aplikacji.</p>',
    },
    gallery: [
      {
        src: visitedCountriesMapLight,
        alt: 'Mapa odwiedzonych krajów w jasnym motywie',
      },
      {
        src: visitedCountriesMapDark,
        alt: 'Mapa odwiedzonych krajów w ciemnym motywie',
      },
      {
        src: visitedCountriesMobileMap,
        alt: 'Mapa odwiedzonych krajów na telefonie',
      },
      {
        src: visitedCountriesMobileList,
        alt: 'Lista odwiedzonych krajów na telefonie',
      },
      {
        src: visitedCountriesMobileFavorites,
        alt: 'Ulubione kraje na telefonie',
      },
      {
        src: visitedCountriesMobileProfile,
        alt: 'Profil użytkownika na telefonie',
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
      live: 'https://landingi.com/pl/produkt/solis/',
    },
    summary:
      'Rozwój interfejsu Solisa, agenta AI w Landingi, który analizuje dane z EventTrackera i kontekst landing page’y, automatycznie generując insighty, alerty i rekomendacje optymalizacji. Użytkownicy mogą również zadawać pytania o wyniki swoich stron za pomocą czatu AI.',
    star: {
      situation:
        '<p>EventTracker dostarczał użytkownikom szczegółowych danych o zachowaniu odwiedzających, ale ich interpretacja wymagała samodzielnego analizowania wykresów i zdarzeń. Solis miał ułatwić ten proces, dostarczając automatyczne insighty i rekomendacje oraz umożliwiając zadawanie pytań o wyniki landing page’y.</p><p>Gotowe insighty były już dostępne w aplikacji, natomiast brakowało interfejsu do prowadzenia rozmowy z agentem AI.</p>',
      task: '<p>Wspólnie z drugim frontend developerem odpowiadałem za stworzenie czatu Solisa w aplikacji SPA. Moim głównym zadaniem była integracja z API, obsługa strumieniowanych odpowiedzi, zarządzanie stanem i historią konwersacji oraz zapewnienie płynnego działania interfejsu. Odpowiadałem również za przeniesienie i rozwój istniejących widoków insightów.</p>',
      action:
        '<p>Zbudowałem interfejs czatu w oparciu o useChat z Vercel AI SDK, integrując strumieniowanie odpowiedzi z API Mastry oraz uwierzytelnianie za pomocą JWT. Zaimplementowałem obsługę stanów generowania, stopniowe wyświetlanie odpowiedzi, zatrzymywanie i ponawianie żądań oraz formatowanie treści w Markdown, w tym tabel.</p><p>Zadbałem o zachowanie przewijania podczas streamingu, tak aby użytkownik mógł śledzić generowaną odpowiedź, ale również swobodnie wracać do wcześniejszych wiadomości bez wymuszonego przewijania na dół. Dodałem przywracanie ostatniej konwersacji po ponownym otwarciu panelu lub odświeżeniu strony — frontend pobierał z API identyfikator rozmowy i jej historię, odtwarzał wiadomości oraz umożliwiał kontynuowanie tego samego wątku.</p><p>Rozwinąłem również obsługę nowych konwersacji, podpowiedzi do wiadomości, oceniania i kopiowania odpowiedzi, błędów, kontroli dostępu oraz zdarzeń analitycznych w Mixpanelu.</p><p>Przeniosłem istniejące insighty do panelu Solisa, dodając filtrowanie według typu, licznik nieprzeczytanych i możliwość oceniania. Następnie stworzyłem osobną stronę Insights z widokiem szczegółów, usuwaniem insightów z podaniem powodu oraz nawigacją do powiązanego landing page’a. Kluczowe funkcjonalności objąłem testami automatycznymi w Vitest i Testing Library.</p>',
      result:
        '<p>Powstał zintegrowany interfejs Solisa, w którym użytkownicy mogą przeglądać automatycznie generowane insighty i rekomendacje oraz analizować wyniki landing page’y poprzez rozmowę z agentem AI. Strumieniowanie umożliwia śledzenie odpowiedzi w trakcie generowania, a przywracanie historii pozwala kontynuować wcześniejszą rozmowę bez rozpoczynania analizy od nowa.</p><p>Rozbudowane widoki insightów zapewniają dostęp do rekomendacji, ich szczegółów i powiązanych landing page’y w jednym miejscu.</p>',
    },
    gallery: [
      {
        src: solisChatStats,
        alt: 'Czat Solis z podsumowaniem statystyk landing page’a w tabeli',
      },
      {
        src: solisChatSources,
        alt: 'Odpowiedź Solisa o źródłach ruchu i urządzeniach',
      },
      {
        src: solisInsightsList,
        alt: 'Lista insightów w panelu Solis',
      },
      {
        src: solisChatEmpty,
        alt: 'Pusty czat Solis z podpowiedziami pytań',
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
      live: 'https://landingi.com/pl/produkt/eventtracker/',
    },
    summary:
      'Rozwój interfejsu analitycznego EventTrackera, wbudowanego narzędzia Landingi do monitorowania zachowań użytkowników na landing page’ach. Projekt obejmował migrację EventTrackera do nowej aplikacji SPA oraz rozwój zakładek Overview i Events w dashboardzie landing page’a.',
    star: {
      situation:
        '<p>EventTracker zbierał dane o zachowaniach odwiedzających opublikowane landing page’e, ale użytkownicy potrzebowali wygodnego sposobu ich analizowania bez korzystania z zewnętrznych narzędzi. Dashboard miał prezentować zarówno ogólne wyniki strony, takie jak wizyty, konwersje czy leady, jak i szczegółowe informacje o poszczególnych zdarzeniach.</p><p>Wraz z rozwojem nowej aplikacji SPA konieczne było również przeniesienie istniejących funkcjonalności i dalsza rozbudowa interfejsu analitycznego.</p>',
      task: '<p>Odpowiadałem za przeniesienie EventTrackera do nowej aplikacji SPA oraz rozwój jego interfejsu we współpracy z zespołem. Pracowałem przede wszystkim nad dwiema zakładkami dashboardu: Overview, prezentującą podsumowanie wyników landing page’a, oraz Events, umożliwiającą szczegółową analizę zdarzeń. Moim zadaniem była implementacja nowych widoków, integracja z API, obsługa filtrowania oraz prezentacja danych w tabelach i na wykresach.</p>',
      action:
        '<p>W zakładce Overview zbudowałem panel statystyk urządzeń oraz rozwijałem sekcje Top Events i Scroll Depth, prezentujące najczęstsze zdarzenia i głębokość przewijania strony. Dodałem również możliwość wyboru celu konwersji z dynamicznym doładowywaniem zdarzeń oraz panel średniego czasu spędzonego na stronie, uwzględniający widoczność i aktywność użytkowników z podziałem na urządzenia.</p><p>W zakładce Events rozwijałem interaktywne wykresy zdarzeń i wizyt z wykorzystaniem Recharts oraz tabelę zdarzeń ze stronicowaniem po stronie serwera i rozwijanymi szczegółami. Implementowałem również funkcjonalność Combined Events, umożliwiającą łączenie zdarzeń, wraz z obsługą formularzy, modali i uprawnień użytkowników.</p><p>Zaimplementowałem zarządzanie filtrami i zakresem dat za pomocą parametrów URL, dzięki czemu wybrane ustawienia były współdzielone między zakładkami Overview i Events. Filtrowanie obejmowało m.in. urządzenia, kraje, języki, kampanie UTM, typy stron i warianty testów A/B.</p><p>Rozwijałem również integrację z Google Analytics 4, dodając panel konfiguracji przesyłania zdarzeń. Wdrożyłem eksport danych, interaktywne samouczki w react-joyride oraz testy automatyczne w Vitest i Testing Library.</p>',
      result:
        '<p>Powstał rozbudowany interfejs analityczny w nowej aplikacji SPA, umożliwiający analizowanie wyników landing page’y i zachowań odwiedzających w jednym miejscu. Zakładka Overview zapewnia czytelne podsumowanie wizyt, konwersji, leadów, sprzedaży i zaangażowania użytkowników, a Events pozwala szczegółowo analizować, filtrować, łączyć i eksportować zdarzenia oraz integrować je z Google Analytics 4.</p><p>Wspólne filtrowanie i interaktywne wizualizacje ułatwiają porównywanie danych i analizowanie skuteczności landing page’y.</p>',
    },
    gallery: [
      {
        src: etOverview,
        alt: 'Zakładka Overview: wizyty, konwersje, czas na stronie, wykres wyników i insighty Solis',
      },
      {
        src: etOverviewPanels,
        alt: 'Panele Overview: urządzenia, Top Events, kraje i głębokość przewijania',
      },
      {
        src: etEventsTab,
        alt: 'Zakładka Events: wykres zdarzeń i tabela ze stronicowaniem',
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
      live: 'https://landingi.com/pl/',
    },
    summary:
      'Rozwój nowej aplikacji Landingi w React, budowanej od podstaw w celu zastąpienia starszego systemu opartego na PHP i React 17 z Reduxem. Landingi to platforma SaaS do tworzenia i optymalizacji landing page’y, wykorzystywana przez tysiące klientów w ponad 80 krajach.',
    star: {
      situation:
        '<p>Główna aplikacja Landingi przez lata rozwijała się w dwóch technologiach: PHP oraz React 17 z Reduxem. Utrzymywanie starszych rozwiązań utrudniało rozwój produktu, dlatego w 2021 roku rozpoczęto budowę nowej aplikacji SPA w React, która stopniowo zastępowała dotychczasowy system.</p>',
      task: '<p>Dołączyłem do projektu w 2022 roku. Odpowiadałem za przenoszenie kolejnych obszarów platformy do nowej aplikacji, odtwarzanie i rozwijanie ich funkcjonalności oraz dostosowywanie interfejsu i logiki do nowej architektury.</p>',
      action:
        '<p>Rozwijałem kluczowe moduły platformy, w tym dashboard landing page’a, listę stron oraz zarządzanie testami A/B. Implementowałem m.in. filtrowanie i sortowanie, akcje masowe, zarządzanie grupami, przenoszenie stron między kontami, archiwizację, uprawnienia oraz konfigurację wariantów i podziału ruchu w testach A/B.</p><p>Zbudowałem od podstaw moduł zarządzania domenami, obejmujący dodawanie i konfigurację domen, wykrywanie dostawcy, weryfikację rekordów DNS, instrukcje konfiguracji oraz obsługę limitów, subkont i uprawnień.</p><p>Odpowiadałem również za stworzenie nowej nawigacji aplikacji — sidebara i top bara — wraz z przełączaniem kont, obsługą uprawnień, Whitelabel, komunikatami systemowymi i integracjami z zewnętrznymi narzędziami.</p><p>Przenosiłem także do SPA istniejące moduły, takie jak PageInsider, EventTracker, modale upgrade’u i cennik. Równolegle modernizowałem kod, migrując kolejne fragmenty z JavaScriptu do TypeScriptu, zastępując Yup biblioteką Zod oraz rozwijając testy automatyczne w Vitest i Testing Library.</p>',
      result:
        '<p>Kolejne kluczowe obszary platformy zostały przeniesione do nowej aplikacji SPA, stopniowo ograniczając zależność od starszego systemu. Powstały nowe, spójne moduły obsługujące zarządzanie landing page’ami, domenami, testami A/B i nawigacją. Modernizacja kodu oraz rozwój testów ułatwiły dalsze utrzymanie i rozbudowę aplikacji.</p>',
    },
    gallery: [
      {
        src: landingiSpaLandings,
        alt: 'Lista landing page’y z grupami, statystykami i oznaczeniami testów A/B i harmonogramu',
      },
    ],
  },
  {
    id: 'eventtracker-time-on-page',
    name: 'EventTracker: Czas na stronie',
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
      live: 'https://landingi.com/pl/produkt/eventtracker/',
    },
    summary:
      'Rozwój mechanizmu pomiaru czasu spędzanego na landing page’ach w ramach EventTrackera — narzędzia do analityki behawioralnej w Landingi. Projekt obejmował implementację dwóch niezależnych liczników: czasu widoczności strony oraz faktycznej aktywności użytkownika.',
    star: {
      situation:
        '<p>EventTracker pozwalał analizować zachowania odwiedzających landing page’e, ale brakowało informacji o czasie spędzanym na stronie. Sam pomiar od otwarcia do zamknięcia strony nie odzwierciedlał rzeczywistego zaangażowania, ponieważ użytkownicy mogli przełączać karty, pozostawiać stronę otwartą bez interakcji lub wracać do niej w tej samej sesji.</p>',
      task: '<p>Moim zadaniem było stworzenie mechanizmu pomiaru czasu w skrypcie EventTrackera, który rozróżniałby widoczność strony od aktywności użytkownika, uwzględniał zachowanie przeglądarki i ograniczał liczbę zapytań do API. Odpowiadałem również za prezentację zebranych danych w dashboardzie aplikacji.</p>',
      action:
        '<p>W skrypcie EventTrackera napisanym w TypeScript zaimplementowałem dwa niezależne liczniki: czas widoczności strony oraz czas aktywności użytkownika, wykrywany na podstawie interakcji, takich jak kliknięcia, przewijanie, ruch kursora, klawiatura i dotyk. Po 5 sekundach bezczynności zatrzymywałem licznik aktywności, a po ukryciu karty wstrzymywałem oba pomiary.</p><p>Wprowadziłem adaptacyjny interwał wysyłania danych, który wydłużał się wraz z czasem wizyty (od 1 do 60 sekund), ograniczając liczbę zapytań przy dłuższych sesjach. Przy ukryciu karty lub opuszczeniu strony wykorzystywałem navigator.sendBeacon, z mechanizmem zapasowym opartym na fetch. Dodałem zapisywanie wyników w localStorage, umożliwiające kontynuowanie pomiaru po odświeżeniu strony lub ponownym wejściu w ramach tej samej sesji.</p><p>Uwzględniłem również powroty z pamięci podręcznej przeglądarki (bfcache), zabezpieczenie przed podwójną wysyłką oraz przypadki brzegowe, takie jak wyłączenie pomiaru na stronach z podziękowaniem i zachowanie poprawnej relacji między czasem aktywnym a całkowitym.</p><p>W aplikacji SPA zintegrowałem dane z API i dodałem do dashboardu panel prezentujący średni czas widoczności strony oraz aktywności użytkowników, również z podziałem na urządzenia.</p>',
      result:
        '<p>Użytkownicy Landingi zyskali dostęp do statystyk pokazujących nie tylko czas widoczności landing page’a, ale również faktyczną aktywność odwiedzających, co pozwala lepiej interpretować ich zaangażowanie. Mechanizm uwzględnia przełączanie kart, bezczynność i powroty w ramach sesji, a lokalny zapis danych oraz ich wysyłanie przy opuszczaniu strony ograniczają ryzyko utraty wyników.</p><p>Adaptacyjny interwał pozwala jednocześnie zmniejszyć liczbę zapytań do serwera podczas dłuższych wizyt.</p>',
    },
    gallery: [
      {
        src: timeOnPage,
        alt: 'Średni czas aktywny i całkowity na stronie w statystykach Overview',
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
      live: 'https://landingi.com/pl/produkt/eventtracker/',
    },
    summary:
      'Rozwój modułu Event & Scroll Map w EventTrackerze, umożliwiającego wizualną analizę zachowań użytkowników na landing page’ach. Projekt obejmował stworzenie interaktywnego podglądu strony z naniesionymi zdarzeniami oraz mapą głębokości przewijania.',
    star: {
      situation:
        '<p>EventTracker udostępniał dane o zachowaniach użytkowników w postaci list zdarzeń i statystyk, ale brakowało ich wizualizacji bezpośrednio na landing page’u. Same liczby nie pokazywały, gdzie znajdują się klikane elementy ani do którego miejsca na stronie docierają odwiedzający, co utrudniało interpretację danych.</p>',
      task: '<p>Odpowiadałem za zbudowanie od podstaw modułu Event & Scroll Map w aplikacji SPA, obejmującego nawigację, zarządzanie stanem, podgląd landing page’a oraz mapę przewijania. Mapę zdarzeń rozwijałem we współpracy z drugim frontend developerem.</p>',
      action:
        '<p>Zbudowałem interaktywny podgląd landing page’a w iframe z wykorzystaniem srcDoc, dostosowując jego szerokość do wybranego urządzenia. Zaimplementowałem mechanizm przenoszenia stylów aplikacji do iframe, obejmujący zawężanie selektorów CSS, obsługę importów oraz synchronizację jasnego i ciemnego motywu za pomocą MutationObserver. Nakładki z danymi renderowałem bezpośrednio w dokumencie iframe przy użyciu createPortal.</p><p>Stworzyłem od podstaw mapę przewijania, dzielącą stronę na przedziały głębokości od 10% do 100%. Poszczególne obszary otrzymywały kolory zależne od odsetka użytkowników, którzy dotarli do danego miejsca na stronie.</p><p>W ramach mapy zdarzeń zaimplementowałem możliwość przejścia z listy eventów bezpośrednio do ich lokalizacji na podglądzie strony. Dodałem również okno szczegółów pozycjonowane za pomocą Floating UI oraz obsługę zdarzeń łączonych.</p><p>Zintegrowałem moduł z API przy użyciu SWR i zaimplementowałem zarządzanie filtrami w parametrach URL, obejmującymi urządzenie, typ strony, wariant, zakres dat i wybrany widok. Dodałem także interaktywne samouczki w react-joyride, obsługę ciemnego motywu oraz testy automatyczne w Vitest i Testing Library.</p>',
      result:
        '<p>Powstał moduł umożliwiający wizualną analizę kliknięć, zdarzeń i głębokości przewijania bezpośrednio na podglądzie landing page’a. Użytkownicy mogą sprawdzić, które elementy strony generują interakcje i jak daleko docierają odwiedzający, z uwzględnieniem urządzeń, wariantów i zakresów dat.</p><p>Integracja z listą zdarzeń pozwala szybko przejść od statystyk do konkretnego miejsca na stronie, ułatwiając analizę zachowań i identyfikowanie obszarów wymagających optymalizacji.</p>',
    },
    gallery: [
      {
        src: eventMap,
        alt: 'Mapa zdarzeń z oknem szczegółów kliknięcia w przycisk',
      },
      {
        src: eventMapForm,
        alt: 'Mapa zdarzeń na formularzu kontaktowym',
      },
      {
        src: eventMapScroll,
        alt: 'Mapa przewijania na górze strony',
      },
      {
        src: eventMapScroll2,
        alt: 'Mapa przewijania z granicą 75% strony',
      },
    ],
  },
  {
    id: 'checkout-registration',
    name: 'Checkout i rejestracja',
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
      'Rozwój procesu rejestracji, wyboru planu i płatności w aplikacji Landingi. Jednym z kluczowych elementów była przebudowa Checkoutu, którą sam zaproponowałem i zrealizowałem, aby uprościć logikę cennika i ułatwić dalszy rozwój.',
    star: {
      situation:
        '<p>Proces rejestracji i zakupu planu w Landingi obejmował różne ścieżki użytkownika, warianty subskrypcji, limity, promocje i płatności. Z czasem szczególnie rozbudowała się logika cennika, która była powielona w wielu komponentach. Utrudniało to aktualizacje oferty i zwiększało ryzyko błędów.</p>',
      task: '<p>Rozwijałem frontend rejestracji i Checkoutu w SPA, odpowiadając za formularze, walidację, stany procesu oraz integrację z planami i płatnościami. Dodatkowo sam zaproponowałem przebudowę Checkoutu, aby uprościć jego architekturę i ułatwić dalszy rozwój.</p>',
      action:
        '<p>Implementowałem kolejne etapy rejestracji i zakupu, wybór oraz konfigurację planu, płatności kartą, zmianę subskrypcji i zakup kredytów.</p><p>Przebudowałem Checkout w oparciu o reużywalne komponenty, wydzielając logikę cen, promocji, limitów i funkcjonalności do wspólnych hooków i helperów. Uporządkowałem proces zakupu, dzieląc go na etapy wyboru planu, konfiguracji, płatności i potwierdzenia.</p><p>Dodałem automatyczne obliczanie oszczędności, walidację formularzy, obsługę błędów i przypadków brzegowych, takich jak zachowanie wyboru użytkownika po odświeżeniu strony czy kontrola kolejności kroków. Kluczowe elementy procesu objąłem testami automatycznymi.</p>',
      result:
        '<p>Powstał spójny proces rejestracji i zakupu w SPA, a przebudowa Checkoutu ograniczyła powielanie kodu i uprościła aktualizacje oferty. Rozwiązanie ułatwiło późniejsze wprowadzanie nowych planów, limitów i promocji, zachowując kompatybilność ze starszymi wariantami subskrypcji.</p>',
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
      'Rozwój funkcjonalności AI Variant™ w Landingi, umożliwiającej automatyczne generowanie wariantów landing page’y na potrzeby testów A/B. Rozwiązanie wykorzystywało model uczenia maszynowego do proponowania zmian w tekstach i przyciskach CTA oraz przewidywania współczynnika konwersji.',
    star: {
      situation:
        '<p>W 2022 roku Landingi rozwijało moduł testów A/B, rozszerzając go o funkcjonalności wykorzystujące sztuczną inteligencję. Model uczenia maszynowego miał automatycznie proponować zmiany na landing page’ach i przewidywać ich skuteczność. Użytkownicy potrzebowali interfejsu, który pozwoliłby wygenerować nowy wariant, sprawdzić zaproponowane zmiany i wykorzystać go w istniejącym procesie testowania.</p>',
      task: '<p>Odpowiadałem za samodzielne stworzenie frontendu AI Variant™ w zakładce Optimization, od integracji procesu generowania z interfejsem po prezentację wyników i porównywanie wariantów. Moim zadaniem było również zintegrowanie nowej funkcjonalności z istniejącym modułem testów A/B, uwzględniając stany generowania, ograniczenia dotyczące ponownego tworzenia wariantów oraz możliwość zarządzania wygenerowanymi stronami.</p>',
      action:
        '<p>Zbudowałem w React interfejs AI Variant™ zintegrowany z tabelą wariantów testów A/B. Zaimplementowałem obsługę stanów generowania, informowanie użytkownika o postępie oraz blokadę ponownego generowania wariantu AI dla tej samej wersji landing page’a. Rozszerzyłem tabelę wariantów o miniatury i oznaczenia stron wygenerowanych przez AI oraz możliwość ustawienia ich jako wariantu głównego. Dodałem również prezentację przewidywanego współczynnika konwersji.</p><p>Stworzyłem interaktywny modal porównywania wariantu głównego z wygenerowanym przez AI — użytkownik mógł przeglądać obie wersje obok siebie lub osobno, a także włączać komentarze wskazujące zmiany zaproponowane przez model. Funkcjonalność objąłem testami automatycznymi w Jest i Testing Library.</p><p>W 2024 roku przeniosłem AI Variant™ do nowej aplikacji SPA w React i TypeScript, dostosowując interfejs do nowej architektury i integrując funkcjonalność z przebudowanym procesem dodawania wariantów. W 2025 roku, po podjęciu decyzji o zakończeniu rozwoju AI Variant™, odpowiadałem również za usunięcie funkcjonalności z aplikacji i uporządkowanie powiązanego kodu.</p>',
      result:
        '<p>Powstała funkcjonalność umożliwiająca użytkownikom automatyczne generowanie wariantów landing page’y, przeglądanie zmian zaproponowanych przez AI oraz porównywanie przewidywanej skuteczności z wariantem głównym. Integracja z modułem testów A/B pozwalała wykorzystać wygenerowane strony w istniejącym procesie optymalizacji konwersji, bez konieczności ręcznego przygotowywania alternatywnego wariantu.</p><p>Funkcjonalność została następnie przeniesiona do nowej aplikacji SPA, a w 2025 roku wycofana z produktu decyzją firmy.</p>',
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
      'Sklep internetowy zbudowany w Next.js 14 w ramach kursu Next.js Masters. Aplikacja obejmuje katalog produktów z kategoriami i kolekcjami, wyszukiwarkę, rekomendacje produktów, koszyk, płatności Stripe, konta użytkowników, historię zamówień oraz wersje językowe PL i EN.',
    star: {
      situation:
        '<p>Kurs Next.js Masters zakładał zbudowanie kompletnego sklepu internetowego z wykorzystaniem App Routera w Next.js 14 oraz danych udostępnianych przez gotowe API GraphQL. Projekt obejmował zarówno część zakupową, jak i elementy typowe dla aplikacji produkcyjnej: uwierzytelnianie, płatności, zamówienia, internacjonalizację i zarządzanie pamięcią podręczną.</p>',
      task: '<p>Moim zadaniem było zaprogramowanie sklepu od strony frontendu i serwera Next.js. Odpowiadałem za katalog produktów, wyszukiwarkę, koszyk, proces płatności, konta użytkowników, obsługę zamówień oraz strony treści.</p>',
      action:
        '<p>Zbudowałem aplikację w Next.js 14 z App Routerem, TypeScript i Tailwind CSS. Produkty, kategorie, kolekcje, koszyk oraz zamówienia pobierałem przez GraphQL, korzystając z typów generowanych za pomocą GraphQL Codegen. Pamięć podręczną odświeżałem przy użyciu tagów po zmianach w koszyku oraz endpointu do rewalidacji stron produktów.</p><p>Koszyk oparłem na Server Actions i ciasteczku przechowującym identyfikator koszyka. Dodałem optymistyczną zmianę ilości produktów z użyciem useOptimistic oraz podgląd koszyka w modalu otwieranym przez przechwyconą trasę. Przygotowałem listę produktów ze stronicowaniem i sortowaniem zapisywanym w parametrach URL, wyszukiwarkę z opóźnieniem zapytań oraz rekomendacje produktów z wykorzystaniem Algolii.</p><p>Dodałem również formularz opinii z walidacją w Zod, płatności Stripe z weryfikacją podpisu webhooka oraz logowanie i obsługę kont użytkowników za pomocą Clerk. Zalogowani użytkownicy mogą przeglądać historię swoich zamówień.</p><p>Uzupełniłem aplikację o wersje językowe PL i EN w next-intl, strony treści w MDX oraz generowane obrazy Open Graph dla produktów. Skonfigurowałem środowisko uruchomieniowe i wdrożyłem wersję demonstracyjną na Vercelu.</p>',
      result:
        '<p>Powstał kompletny, działający sklep internetowy z katalogiem produktów, koszykiem, płatnościami, kontami użytkowników, zamówieniami, rekomendacjami i obsługą dwóch języków. Projekt pozwolił mi przećwiczyć w praktyce najważniejsze elementy Next.js App Routera, w tym Server Actions, rewalidację danych, routing, obsługę formularzy i integrację z zewnętrznymi usługami.</p><p>Kod jest dostępny publicznie na GitHubie, a aplikacja ma wersję demo wdrożoną na Vercelu.</p>',
    },
    gallery: [
      {
        src: nextshopHome,
        alt: 'Strona główna NextShop z kolekcjami i produktami',
      },
      {
        src: nextshopProducts,
        alt: 'Lista wszystkich produktów z sortowaniem',
      },
      {
        src: nextshopProduct,
        alt: 'Strona produktu z przyciskiem dodania do koszyka',
      },
      {
        src: nextshopSearch,
        alt: 'Wyniki wyszukiwania',
      },
      {
        src: nextshopMobileHome,
        alt: 'Strona główna na telefonie',
      },
      {
        src: nextshopMobileProducts,
        alt: 'Lista produktów na telefonie',
      },
      {
        src: nextshopMobileProduct,
        alt: 'Produkt na telefonie',
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
      'Rozwój i przebudowa interfejsu PageInsider™ — narzędzia AI w Landingi, które wykorzystywało model uczenia maszynowego do przewidywania, na których elementach landing page’a użytkownicy skupią uwagę. Projekt obejmował modernizację interfejsu, rozwój funkcjonalności analitycznych oraz integrację z modułem testów A/B.',
    star: {
      situation:
        '<p>Do projektu PageInsider™ dołączyłem w 2021 roku, gdy funkcjonalność znajdowała się jeszcze w fazie beta. Analizę landing page’y wykonywał model uczenia maszynowego, natomiast istniejący interfejs w React wymagał poprawy użyteczności i uporządkowania kodu.</p><p>Wraz z rozwojem narzędzia potrzebne było również rozszerzenie możliwości analizy, usprawnienie prezentacji wyników oraz integracja PageInsider™ z pozostałymi funkcjonalnościami optymalizacji landing page’y.</p>',
      task: '<p>Odpowiadałem za rozwój i przebudowę frontendu PageInsider™, obejmującą poprawę UX/UI, reorganizację zarządzania stanem, implementację nowych funkcjonalności oraz rozwój testów automatycznych. Moim zadaniem było także zintegrowanie narzędzia z modułem Optimization i testami A/B, a następnie przeniesienie go do nowej aplikacji SPA.</p>',
      action:
        '<p>Rozpocząłem od usprawnienia interfejsu i treści komunikatów, a następnie przebudowałem moduł w React, przenosząc współdzielony stan do Context API. Stworzyłem od nowa panel boczny prezentujący Clarity Score, przewodnik i rekomendacje oraz górny pasek umożliwiający przełączanie między stroną główną a stroną podziękowania. Rozwinąłem również karuzelę podglądów, zarządzanie warstwami Smart Map oraz obsługę stanów analizy, takich jak generowanie wyników, błędy czy niekompletne zrzuty strony.</p><p>Zaimplementowałem interaktywne zaznaczanie obszarów zainteresowania (AOI), umożliwiające sprawdzanie przewidywanego poziomu uwagi dla konkretnych elementów landing page’a. Dodałem obsługę klawiatury, możliwość przejścia do edytora i porównywania wyników kolejnych analiz, samouczek dla nowych użytkowników oraz dostosowanie interfejsu do kont Whitelabel.</p><p>W zakładce Optimization zbudowałem panel PageInsider™ zintegrowany z testami A/B oraz widok porównania z AI Variant™, uwzględniający przewidywany współczynnik konwersji. Rozwijałem również testy automatyczne w Jest, Enzyme i Testing Library.</p><p>W 2023 roku zintegrowałem PageInsider™ z listą landing page’y i przeniosłem funkcjonalność do nowej aplikacji SPA w React i TypeScript. W 2024 roku, po decyzji o wycofaniu narzędzia, usunąłem je z aplikacji i powiązanego kodu.</p>',
      result:
        '<p>Powstał rozbudowany interfejs umożliwiający użytkownikom analizowanie przewidywanej uwagi odwiedzających jeszcze przed publikacją landing page’a. Dzięki Smart Map, Clarity Score i interaktywnemu zaznaczaniu obszarów zainteresowania użytkownicy mogli sprawdzać, które elementy strony przyciągają uwagę, wprowadzać poprawki w edytorze i porównywać wyniki kolejnych analiz.</p><p>Integracja z modułem Optimization połączyła analizę uwagi z pozostałymi narzędziami optymalizacji landing page’y. Funkcjonalność została następnie przeniesiona do nowej aplikacji SPA, a w 2024 roku wycofana z produktu decyzją firmy.</p>',
    },
    gallery: [
      {
        src: pageinsiderSmartMap,
        alt: 'Smart Map z mapą uwagi, Clarity Score i procentem uwagi dla przycisku',
      },
      {
        src: pageinsiderGuide,
        alt: 'Analiza z panelem przewodnika PageInsider™',
      },
      {
        src: pageinsiderOptimizationTab,
        alt: 'Panel PageInsider™ w zakładce Optimization',
      },
      {
        src: pageinsiderAttention,
        alt: 'Mapa uwagi na stronie z nagłówkiem i przyciskiem CTA',
      },
      {
        src: pageinsiderForm,
        alt: 'Mapa uwagi na stronie z formularzem',
      },
    ],
  },
];
