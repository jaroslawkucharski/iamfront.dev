export type PluralForms = Partial<Record<Intl.LDMLPluralRule, string>> & { other: string };

export const plural = (forms: PluralForms, count: number, locale: string): string =>
  forms[new Intl.PluralRules(locale).select(count)] ?? forms.other;
