import alerabat from '@assets/companies/alerabat.png';
import bugbugDark from '@assets/companies/bugbug-dark.png';
import bugbug from '@assets/companies/bugbug.png';
import landingiDark from '@assets/companies/landingi-dark.png';
import landingi from '@assets/companies/landingi.png';
import tauron from '@assets/companies/tauron.png';
import { skills } from '@data/pl/skills';
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
    titleNote: 'część etatu, kontrakt',
    sections: [
      {
        title: 'Rozwój platformy cashbackowej i panelu użytkownika',
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
          '<strong>Rozwijam i utrzymuję istniejący frontend platformy AleRabat</strong> oraz aplikację konta użytkownika opartą na React.',
          'Implementuję <strong>nowe funkcje i modyfikuję istniejące widoki</strong> związane z kontem użytkownika, cashbackiem, historią zakupów, wypłatami i ofertami specjalnymi.',
          'Rozwijam <strong>przepływy logowania, rejestracji, resetowania hasła i obsługi sesji użytkownika</strong>.',
          'Integruję zmiany frontendowe z <strong>istniejącymi backendowymi API oraz systemem OAuth 2.0 / OpenID Connect z wykorzystaniem PKCE</strong>.',
          'Rozbudowuję <strong>formularze, walidację danych, obsługę stanów ładowania, błędów i pustych widoków</strong>.',
          'Pracuję z <strong>istniejącą architekturą komponentów, modułów i bundli frontendowych</strong>, zachowując kompatybilność z pozostałymi częściami platformy.',
          'Wprowadzam poprawki wydajnościowe związane z <strong>code splittingiem, lazy loadingiem i optymalizacją ładowania aplikacji</strong>.',
          '<strong>Przygotowuję i wdrażam zmiany na środowisko produkcyjne.</strong>',
          'Diagnozuję i rozwiązuję <strong>błędy produkcyjne oraz problemy zgłaszane przez użytkowników i zespół</strong>.',
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
    title: 'Starszy specjalista ds. tworzenia i edycji stron www',
    sections: [
      {
        title: 'Rozwój i bieżąca obsługa serwisów internetowych',
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
          'Odpowiadam za rozwój i utrzymanie <strong>serwisów internetowych TAURON opartych na Sitecore</strong>, realizując zmiany od analizy wymagań i zgłoszeń po implementację, testy i publikację.',
          '<strong>Tworzę i rozwijam skrypty JavaScript</strong>, implementując nowe funkcjonalności oraz dostosowując istniejące rozwiązania do wymagań biznesowych i potrzeb użytkowników.',
          'Przygotowuję i wdrażam <strong>nowe podstrony, formularze oraz elementy interaktywne</strong>, dbając o spójność z architekturą i standardami serwisów.',
          'Prowadzę analizę problemów zgłaszanych przez użytkowników i zespoły biznesowe, <strong>identyfikując przyczyny oraz koordynując ich rozwiązanie</strong> z zespołami IT i dostawcami.',
          'Współpracuję z zespołami biznesowymi, marketingowymi, IT i komunikacji przy <strong>planowaniu oraz realizacji zmian i nowych inicjatyw internetowych</strong>.',
          'Odpowiadam za <strong>weryfikację jakości wdrażanych zmian</strong>, w tym poprawności działania formularzy, linków, komponentów i przepływów użytkownika.',
          'Rozwijam serwisy z uwzględnieniem <strong>użyteczności, dostępności, SEO i standardów WCAG</strong>.',
        ],
      },
      {
        title: 'Dokumenty cyfrowe',
        stack: [skills.wcag, skills.indesign],
        items: [
          'Odpowiadam za <strong>przygotowywanie i rozwój dokumentów cyfrowych</strong> oraz interaktywnych formularzy PDF wykorzystywanych w procesach obsługi klienta.',
          'Projektuję dokumenty i formularze w Adobe InDesign, <strong>przekładając wymagania biznesowe oraz procesowe na gotowe materiały cyfrowe</strong>.',
          'Tworzę <strong>interaktywne pola, układy formularzy i mechanizmy</strong> umożliwiające klientom elektroniczne uzupełnianie dokumentów.',
          'Analizuję i poprawiam strukturę dokumentów pod kątem <strong>użyteczności, dostępności i zgodności ze standardami WCAG</strong>.',
          'Testuję formularze i dokumenty przed publikacją, weryfikując <strong>poprawność pól, walidacji, układu oraz działania</strong> na różnych urządzeniach i w różnych czytnikach PDF.',
          'Wprowadzam poprawki wynikające z <strong>testów, zgłoszeń użytkowników i wymagań interesariuszy</strong>.',
          'Przygotowuję <strong>finalne materiały do publikacji i dystrybucji cyfrowej</strong>.',
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
        title: 'Główna platforma i architektura frontendu',
        items: [
          'Zbudowałem znaczące części <strong>nowej aplikacji SPA opartej na React od podstaw</strong>, tworząc nowoczesny fundament frontendowy głównej platformy Landingi.',
          'Stopniowo <strong>migrowałem funkcjonalności ze starszej aplikacji</strong>, w tym obszary oparte na PHP, do nowej aplikacji React SPA, ograniczając zależność od legacy code i upraszczając dalszy rozwój platformy.',
          'Poprawiłem <strong>wydajność frontendu</strong> poprzez code splitting, lazy loading oraz optymalizację zależności, skracając czas początkowego ładowania aplikacji i ograniczając ilość kodu ładowanego przy jej uruchomieniu.',
          'Odpowiadałem za <strong>wybrane kluczowe moduły platformy</strong>, obejmując cały proces od projektu technicznego i implementacji po utrzymanie, wsparcie produkcyjne i dalszy rozwój.',
          'Brałem udział w <strong>podejmowaniu decyzji dotyczących architektury frontendu</strong>, code review oraz standardów inżynierskich globalnej platformy SaaS wykorzystywanej przez tysiące klientów w ponad 80 krajach i obsługującej miliony wizyt miesięcznie.',
        ],
        project: 'landingi-spa',
      },
      {
        title: 'EventTracker – Analityka behawioralna landing page’y',
        items: [
          'Zbudowałem <strong>kluczowe komponenty frontendowe EventTrackera</strong> – platformy analityki behawioralnej pozwalającej analizować interakcje użytkowników z landing page’ami, m.in. kliknięcia, głębokość scrollowania, czas na stronie i mikrokonwersje.',
          'Odpowiadałem za <strong>wybrane moduły EventTrackera</strong> od projektu technicznego i integracji z API, przez testowanie i wdrożenie, po wsparcie produkcyjne i dalszy rozwój.',
          'Tworzyłem <strong>interfejsy analityczne przetwarzające i prezentujące duże ilości danych</strong>, zachowując wysoką responsywność aplikacji.',
          'Optymalizowałem <strong>renderowanie i pobieranie danych</strong>, poprawiając czas ładowania i responsywność widoków analitycznych.',
          'Ściśle współpracowałem z zespołem backendowym przy <strong>definiowaniu kontraktów API</strong> i integracji złożonych przepływów danych analitycznych z aplikacją frontendową.',
        ],
        project: 'eventtracker',
      },
      {
        title: 'Solis – Agent AI do optymalizacji landing page’y',
        items: [
          'Zbudowałem <strong>kluczowe funkcjonalności frontendowe Solis</strong> – asystenta analitycznego opartego na AI, który przekształca dane z EventTrackera w automatyczne analizy, alerty i rekomendacje.',
          'Tworzyłem <strong>interaktywny czat AI</strong>, umożliwiający użytkownikom analizowanie danych behawioralnych i zadawanie pytań w języku naturalnym.',
          'Integrowałem z frontendem <strong>asynchroniczne procesy backendowe i rozwiązania oparte na AI</strong>, rozwijając również wybrane obszary w Node.js/Express.',
          'Odpowiadałem za <strong>wybrane moduły Solis</strong> po wdrożeniu produkcyjnym, obejmując rozwój funkcjonalności, rozwiązywanie problemów produkcyjnych, utrzymanie i dalsze usprawnienia.',
          'Poprawiałem <strong>responsywność i niezawodność procesów opartych na AI</strong> poprzez optymalizację zarządzania stanem oraz asynchronicznego przetwarzania danych.',
        ],
        project: 'solis',
      },
      {
        title: 'Biblioteka UI, jakość i rozwój frontendu',
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
          'Zbudowałem i utrzymywałem <strong>współdzieloną bibliotekę komponentów opartą na Storybooku</strong>, wykorzystywaną w wielu obszarach platformy Landingi.',
          'Wprowadzałem <strong>reużywalne komponenty UI i wzorce frontendowe</strong>, ograniczając duplikację kodu i poprawiając spójność między zespołami produktowymi.',
          'Uczestniczyłem w dużych <strong>aktualizacjach Reacta, Vite oraz zależności frontendowych</strong>, ułatwiając utrzymanie kodu, zwiększając wydajność procesu budowania aplikacji i poprawiając komfort pracy programistów.',
          'Rozszerzałem <strong>pokrycie testami automatycznymi</strong> wybranych modułów frontendowych z wykorzystaniem Vitest i React Testing Library.',
          'Diagnozowałem i rozwiązywałem problemy <strong>produkcyjne z wykorzystaniem Sentry</strong> i monitoringu aplikacji, w tym problemy związane z wydajnością, renderowaniem i integracją API.',
          'Pracowałem w <strong>środowisku Continuous Delivery</strong> z automatycznymi testami oraz procesami budowania i wdrażania aplikacji, umożliwiającymi częste wdrożenia produkcyjne.',
          'Włączyłem Codex, Claude Code i GitHub Copilot do <strong>codziennego procesu tworzenia oprogramowania</strong>, wykorzystując je przy implementacji, debugowaniu, refaktoryzacji i przeglądach kodu.',
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
    titleNote: 'część etatu, kontrakt',
    sections: [
      {
        title: 'Strona produktowa, aplikacja i rozszerzenie przeglądarkowe',
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
          'Rozwijałem i utrzymywałem <strong>stronę produktową opartą na Next.js</strong>, zintegrowaną ze <strong>Strapi CMS</strong>, pracując z dynamicznymi treściami i REST API.',
          'Wdrażałem <strong>nowe funkcjonalności w aplikacji opartej na React</strong>, wspierając dalszy rozwój produktu.',
          'Uczestniczyłem w rozwoju <strong>rozszerzenia przeglądarkowego BugBug</strong> służącego do automatyzacji testów.',
          'Tworzyłem <strong>testy jednostkowe i integracyjne</strong> z wykorzystaniem Jest i React Testing Library.',
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
    titleNote: 'część etatu, kontrakt',
    sections: [
      {
        title: 'Rozwój aplikacji internetowej AleRabat',
        stack: [skills.javascript, skills.html, skills.css, skills.rwd, skills.wcag, skills.git],
        items: [
          'Rozwijałem i utrzymywałem <strong>funkcjonalności frontendowe</strong> z wykorzystaniem HTML, CSS i JavaScript, zdobywając praktyczne doświadczenie w pracy z <strong>produkcyjnymi aplikacjami webowymi</strong>.',
          'Wdrażałem <strong>zmiany w interfejsie oraz nowe funkcjonalności</strong> w istniejącej aplikacji internetowej zgodnie z wymaganiami produktowymi i biznesowymi.',
          'Diagnozowałem i rozwiązywałem <strong>problemy frontendowe</strong>, poprawiając stabilność aplikacji i doświadczenie użytkownika.',
        ],
      },
    ],
  },
];
