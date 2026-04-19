import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Standard "do not crawl" paths apply to all crawlers
  const disallow = ["/studio", "/portal", "/klijenti-login", "/api/"];

  return {
    rules: [
      // Default rule for all crawlers (Googlebot, Bingbot, etc.)
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },

      // ─── AI training & search crawlers — explicit Allow for clarity ───
      // Many AI crawlers default to a conservative crawl rate without
      // explicit Allow directives, so we list them explicitly to maximize
      // AI search visibility (ChatGPT, Claude, Perplexity, Gemini, etc.).

      // OpenAI — ChatGPT search & training
      { userAgent: "GPTBot", allow: "/", disallow },
      { userAgent: "ChatGPT-User", allow: "/", disallow },
      { userAgent: "OAI-SearchBot", allow: "/", disallow },

      // Anthropic — Claude
      { userAgent: "ClaudeBot", allow: "/", disallow },
      { userAgent: "Claude-Web", allow: "/", disallow },
      { userAgent: "anthropic-ai", allow: "/", disallow },

      // Google AI — Gemini & AI Overviews (separate from Googlebot)
      { userAgent: "Google-Extended", allow: "/", disallow },

      // Perplexity
      { userAgent: "PerplexityBot", allow: "/", disallow },
      { userAgent: "Perplexity-User", allow: "/", disallow },

      // Microsoft / Bing AI
      { userAgent: "Bingbot", allow: "/", disallow },

      // Apple (Spotlight / Siri suggestions)
      { userAgent: "Applebot", allow: "/", disallow },
      { userAgent: "Applebot-Extended", allow: "/", disallow },

      // Meta AI
      { userAgent: "Meta-ExternalAgent", allow: "/", disallow },
      { userAgent: "Meta-ExternalFetcher", allow: "/", disallow },

      // Common Crawl (used by many AI training datasets)
      { userAgent: "CCBot", allow: "/", disallow },

      // Mistral / You.com / Cohere
      { userAgent: "MistralAI-User", allow: "/", disallow },
      { userAgent: "YouBot", allow: "/", disallow },
      { userAgent: "cohere-ai", allow: "/", disallow },
    ],
    sitemap: "https://www.slobodan-jelisavac.com/sitemap.xml",
    host: "https://www.slobodan-jelisavac.com",
  };
}
