export const languages = {
  en: { short: 'EN', switchLabel: 'Switch to English', ogLocale: 'en_US' },
  pl: { short: 'PL', switchLabel: 'Przełącz na polski', ogLocale: 'pl_PL' },
} as const;

export type Locale = keyof typeof languages;
export const locales = Object.keys(languages) as Locale[];
export const defaultLocale: Locale = 'en';
