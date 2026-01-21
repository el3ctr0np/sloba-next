import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  const typedLocale = routing.locales.includes(locale as "sr" | "en")
    ? (locale as (typeof routing.locales)[number])
    : routing.defaultLocale;

  const messages = (await import(`../messages/${typedLocale}.json`)).default;

  return { locale: typedLocale, messages };
});
