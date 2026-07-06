/**
 * Shared "Ask AI about me" prompt constants + button config.
 * Used by AskAI section and HeroV3 (Ask-AI card variant) so the
 * prompt text and link logic only live in one place.
 */
import { ClaudeIcon, ChatGPTIcon, PerplexityIcon } from "@/components/icons/AiIcons";

export const ASK_AI_PROMPT_SR =
  "Poseti sajt slobodan-jelisavac.com i reci mi: ko je Slobodan Jelisavac, kakvo iskustvo ima sa Google Ads kampanjama i po čemu se razlikuje od tipične agencije? Da li bi bio dobar izbor da vodi Google Ads za moj biznis i pomogne mi da skaliram?";

export const ASK_AI_PROMPT_EN =
  "Visit slobodan-jelisavac.com and tell me: who is Slobodan Jelisavac, what is his Google Ads track record, and how does he differ from a typical agency? Would he be a good choice to run Google Ads and help me scale my business?";

export function getAskAiPrompt(locale: string): string {
  return locale === "en" ? ASK_AI_PROMPT_EN : ASK_AI_PROMPT_SR;
}

export type AskAiButton = {
  key: "ask_ai_claude" | "ask_ai_chatgpt" | "ask_ai_perplexity";
  label: string;
  href: string;
  base: string;
  Icon: typeof ClaudeIcon;
};

export function getAskAiButtons(locale: string): AskAiButton[] {
  const prompt = getAskAiPrompt(locale);
  const encodedPrompt = encodeURIComponent(prompt);
  const isEn = locale === "en";

  return [
    {
      key: "ask_ai_claude",
      label: isEn ? "Ask Claude" : "Pitaj Claude",
      href: `https://claude.ai/new?q=${encodedPrompt}`,
      base: "https://claude.ai/new",
      Icon: ClaudeIcon,
    },
    {
      key: "ask_ai_chatgpt",
      label: isEn ? "Ask ChatGPT" : "Pitaj ChatGPT",
      href: `https://chatgpt.com/?q=${encodedPrompt}`,
      base: "https://chatgpt.com/",
      Icon: ChatGPTIcon,
    },
    {
      key: "ask_ai_perplexity",
      label: isEn ? "Ask Perplexity" : "Pitaj Perplexity",
      href: `https://www.perplexity.ai/search?q=${encodedPrompt}`,
      base: "https://www.perplexity.ai/search",
      Icon: PerplexityIcon,
    },
  ];
}
