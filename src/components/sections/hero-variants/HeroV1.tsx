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
 * HeroV1 — Classic split hero
 * Left: eyebrow, H1, sub, 2 CTAs, micro trust row.
 * Right: hero photo (large, rounded, soft shadow, discreet event badge).
 * Stats are NOT in the hero — they belong in a thin strip rendered
 * immediately below by the page (see hero-varijante preview page).
 */
export function HeroV1({
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

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-slate-900 leading-[1.12] tracking-tight mb-6">
              {title}
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed mb-8">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button href={ctaHref} variant="primary" ctaLocation="hero_primary">
                {resolvedCtaText}
              </Button>
              {secondaryCtaText && secondaryCtaHref && (
                <Button href={secondaryCtaHref} variant="secondary">
                  {secondaryCtaText}
                </Button>
              )}
            </div>

            <p className="text-sm text-gray-500">
              {isEn
                ? "10+ years of experience · 3x UK Search Awards · 50+ brands"
                : "10+ godina iskustva · 3x UK Search Awards · 50+ brendova"}
            </p>
          </div>

          {/* Right: photo */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-card-lg bg-white">
              <Image
                src="/hero.webp"
                alt="Slobodan Jelisavac — Ad Mixer Google Ads Event"
                width={1023}
                height={781}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur rounded-lg px-3 py-1.5 shadow-md">
              <span className="text-[11px] font-semibold text-slate-700">
                {isEn ? "Ad Mixer Google Ads Event — Belgrade 2025" : "Ad Mixer Google Ads Event — Beograd 2025"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal stats strip */}
      <div className="border-t border-gray-100 bg-gray-50/60">
        <div className="container-custom px-4 py-6">
          <div className="grid grid-cols-3 gap-4 text-center divide-x divide-gray-200">
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold text-slate-900">£290k+</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                {isEn ? "Shopping revenue (UK)" : "Shopping prihod (UK)"}
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold text-slate-900">1.78x</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                {isEn ? "Average POAS" : "Prosečan POAS"}
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold text-slate-900">-86%</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                {isEn ? "Best CPA cut" : "CPA rekord"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
