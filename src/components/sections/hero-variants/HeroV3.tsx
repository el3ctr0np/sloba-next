"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { trackCtaClick } from "@/lib/track";
import { getAskAiButtons } from "@/lib/askAiPrompts";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  trustBadges?: string[];
  locale?: string;
}

/**
 * HeroV3 — Split hero with an "Ask AI about me" card instead of a photo.
 * Left: eyebrow, H1, sub, primary CTA, micro trust row.
 * Right: compact featured card with 3 mini Ask-AI buttons (Claude/ChatGPT/Perplexity),
 * reusing the same prompt constants as the AskAI section (src/lib/askAiPrompts.ts).
 */
export function HeroV3({
  title,
  subtitle,
  ctaText,
  ctaHref = "/kontakt",
  locale = "sr",
}: HeroProps) {
  const isEn = locale === "en";
  const resolvedCtaText =
    ctaText ?? (isEn ? "Book a free consultation" : "Zakažite besplatnu konsultaciju");
  const buttons = getAskAiButtons(locale);

  return (
    <section className="relative overflow-hidden bg-white border-b border-gray-100">
      <div className="container-custom px-4 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-[0.15em]">
                {isEn ? "Google Ads Consulting • Serbia & UK" : "Google Ads Konsalting • Srbija & UK"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-[1.05] mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed mb-8">
              {subtitle}
            </p>

            <div className="mb-6">
              <Button href={ctaHref} variant="primary" ctaLocation="hero_primary">
                {resolvedCtaText}
              </Button>
            </div>

            <p className="text-sm text-gray-500">
              {isEn
                ? "10+ years of experience · 3x UK Search Awards · 50+ brands"
                : "10+ godina iskustva · 3x UK Search Awards · 50+ brendova"}
            </p>
          </div>

          {/* Right: Ask-AI featured card */}
          <div className="border-2 border-accent rounded-xl bg-white p-6 shadow-card">
            <span className="inline-block bg-accent text-slate-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
              {isEn ? "Independent check" : "Nezavisna provera"}
            </span>
            <h2 className="text-xl font-heading font-bold text-slate-900 mb-4">
              {isEn ? "Don't take our word for it" : "Ne verujte nama na reč"}
            </h2>

            <div className="space-y-3 mb-4">
              {buttons.map(({ key, label, href, base, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCtaClick(key, base)}
                  className="group flex items-center justify-between gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3 hover:border-accent hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-gray-500 group-hover:text-accent-dark transition-colors shrink-0" />
                    <span className="text-sm font-semibold text-gray-900">{label}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-accent-dark group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>
              ))}
            </div>

            <p className="text-xs text-gray-500">
              {isEn ? "The answer is formed by the AI, not by us." : "Odgovor formira AI, ne mi."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
