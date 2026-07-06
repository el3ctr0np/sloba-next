import Image from "next/image";
import { Button } from "@/components/ui";

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
 * Editorial / Magazine style hero
 * - Top Google accent bar
 * - Meta bar with trust signals
 * - Large editorial title across full width
 * - Below: 3-column grid — stats left, hero photo center (with Google Partner badge), CTAs right
 */
export function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref = "/kontakt",
  secondaryCtaText,
  secondaryCtaHref,
  locale = "sr",
}: HeroProps) {
  const isEn = locale === "en";
  const resolvedCtaText =
    ctaText ?? (isEn ? "Book a free consultation" : "Zakažite besplatnu konsultaciju");

  return (
    <section className="relative overflow-hidden bg-white border-b border-gray-100">
      {/* Top Google accent bar */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500" />

      <div className="container-custom px-4 relative py-12 md:py-16">
        {/* Top meta bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-[0.15em]">
              {isEn ? "Google Ads Consulting • Serbia & UK" : "Google Ads Konsalting • Srbija & UK"}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="hidden md:flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {isEn ? "10+ years of experience" : "10+ godina iskustva"}
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {isEn ? "50+ brands" : "50+ brendova"}
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {isEn ? "Ad Mixer representative" : "Ad Mixer predstavnik"}
            </span>
          </div>
        </div>

        {/* Large editorial title */}
        <div className="max-w-5xl mb-10 md:mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-slate-900 leading-[1.05] mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Photo + Stats + CTA grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr_1fr] gap-6 lg:gap-8 items-center">
          {/* Left: Stats column */}
          <div className="order-2 lg:order-1 space-y-3">
            <div className="border-l-4 border-blue-500 pl-4 py-1">
              <div className="text-3xl font-heading font-bold text-slate-900 leading-none">£290k+</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                {isEn ? "Shopping revenue (UK)" : "Shopping revenue (UK)"}
              </div>
            </div>
            <div className="border-l-4 border-green-500 pl-4 py-1">
              <div className="text-3xl font-heading font-bold text-slate-900 leading-none">1.78x</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                {isEn ? "Average POAS" : "Prosečan POAS"}
              </div>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4 py-1">
              <div className="text-3xl font-heading font-bold text-slate-900 leading-none">-86%</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                {isEn ? "Best CPA cut" : "CPA rekord"}
              </div>
            </div>
          </div>

          {/* Center: Hero photo */}
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-2xl overflow-hidden shadow-card-lg border border-gray-200 bg-white">
              <Image
                src="/hero.webp"
                alt="Slobodan Jelisavac — Ad Mixer Google Ads Event"
                width={1023}
                height={781}
                className="w-full h-auto"
                priority
              />
            </div>
            {/* Google Partner badge overlay */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white border-2 border-slate-900 rounded-full px-4 py-1.5 shadow-xl whitespace-nowrap">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                </div>
                <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                  {isEn ? "Google Ads Event — Belgrade 2025" : "Google Ads Event — Beograd 2025"}
                </span>
              </div>
            </div>
          </div>

          {/* Right: CTA column */}
          <div className="order-3 space-y-3">
            <Button href={ctaHref} variant="primary" className="w-full" ctaLocation="hero_primary">
              {resolvedCtaText}
            </Button>
            {secondaryCtaText && secondaryCtaHref && (
              <Button href={secondaryCtaHref} variant="secondary" className="w-full">
                {secondaryCtaText}
              </Button>
            )}
            <p className="text-xs text-gray-500 text-center pt-2">
              {isEn ? (
                <>No onboarding fees.<br />No long-term contracts.</>
              ) : (
                <>Bez onboarding naknada.<br />Bez dugoročnih ugovora.</>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
