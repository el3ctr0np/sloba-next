import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as "sr" | "en")) {
    return { messages: {} };
  }

  const messages = (await import(`../messages/${locale}.json`)).default;

  return { messages };
});
