"use client";

import { Asterisk, Sparkles, Search, ArrowRight } from "lucide-react";
import { trackCtaClick } from "@/lib/track";

interface AskAIProps {
  locale: string;
}

const PROMPT_SR =
  "Poseti sajt slobodan-jelisavac.com i reci mi: ko je Slobodan Jelisavac, kakvo iskustvo ima sa Google Ads kampanjama i po čemu se razlikuje od tipične agencije? Da li bi bio dobar izbor da vodi Google Ads za moj biznis i pomogne mi da skaliram?";

const PROMPT_EN =
  "Visit slobodan-jelisavac.com and tell me: who is Slobodan Jelisavac, what is his Google Ads track record, and how does he differ from a typical agency? Would he be a good choice to run Google Ads and help me scale my business?";

export function AskAI({ locale }: AskAIProps) {
  const prompt = locale === "en" ? PROMPT_EN : PROMPT_SR;
  const encodedPrompt = encodeURIComponent(prompt);

  const content =
    locale === "en"
      ? {
          eyebrow: "DO YOUR HOMEWORK",
          heading: "Ask AI about me",
          sub: "Don't take this site's word for it — ask an independent AI. One click opens a conversation with a ready-made question; the answer comes from the AI, not from me. Feel free to edit the question before sending.",
        }
      : {
          eyebrow: "PROVERITE ME",
          heading: "Pitajte AI o meni",
          sub: "Ne verujte sajtu na reč — pitajte nezavisnu veštačku inteligenciju. Klik otvara razgovor sa spremnim pitanjem, a odgovor formira AI na osnovu onoga što nađe o meni. Slobodno izmenite pitanje pre slanja.",
        };

  const buttons = [
    {
      key: "ask_ai_claude" as const,
      label: locale === "en" ? "Ask Claude" : "Pitaj Claude",
      href: `https://claude.ai/new?q=${encodedPrompt}`,
      base: "https://claude.ai/new",
      Icon: Asterisk,
    },
    {
      key: "ask_ai_chatgpt" as const,
      label: locale === "en" ? "Ask ChatGPT" : "Pitaj ChatGPT",
      href: `https://chatgpt.com/?q=${encodedPrompt}`,
      base: "https://chatgpt.com/",
      Icon: Sparkles,
    },
    {
      key: "ask_ai_perplexity" as const,
      label: locale === "en" ? "Ask Perplexity" : "Pitaj Perplexity",
      href: `https://www.perplexity.ai/search?q=${encodedPrompt}`,
      base: "https://www.perplexity.ai/search",
      Icon: Search,
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent-dark mb-3">
          {content.eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 max-w-2xl">
          {content.heading}
        </h2>
        <p className="text-gray-600 max-w-2xl mb-10">{content.sub}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {buttons.map(({ key, label, href, base, Icon }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick(key, base)}
              className="group flex items-center justify-between gap-4 bg-white border border-gray-200 rounded-xl p-6 hover:border-accent hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-gray-500 group-hover:text-accent-dark transition-colors shrink-0" />
                <span className="uppercase text-sm font-semibold tracking-wide text-gray-900">
                  {label}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-accent-dark group-hover:translate-x-0.5 transition-all shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
