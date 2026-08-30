/**
 * Audit engine — string interpolation.
 *
 * The copy objects are handed from a Server Component to a Client Component, so
 * they have to be plain serialisable data. That rules out functions: templates
 * carry {token} placeholders and plural forms instead, and get filled here.
 */

/** Plural forms keyed by CLDR category. Serbian needs one/few/other. */
export type PluralForms = {
  one: string;
  few?: string;
  many?: string;
  other: string;
};

export function fill(
  template: string,
  vars: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match,
  );
}

export function plural(
  locale: string,
  n: number,
  forms: PluralForms,
  vars: Record<string, string | number> = {},
): string {
  let category: Intl.LDMLPluralRule = "other";
  try {
    category = new Intl.PluralRules(locale).select(n);
  } catch {
    category = n === 1 ? "one" : "other";
  }
  const template =
    (category === "one" && forms.one) ||
    (category === "few" && forms.few) ||
    (category === "many" && forms.many) ||
    forms.other;
  return fill(template, { n, ...vars });
}
