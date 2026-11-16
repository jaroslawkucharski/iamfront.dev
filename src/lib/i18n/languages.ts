export const languages = {
  en: { short: 'EN', switchLabel: 'Switch to English' },
  pl: { short: 'PL', switchLabel: 'Przełącz na polski' },
} as const;

export type Locale = keyof typeof languages;

export const locales = Object.keys(languages) as Locale[];
export const defaultLocale: Locale = 'en';
