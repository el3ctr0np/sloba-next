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
                {isEn ? "Google Ads Consultant · USA, UK & Serbia" : "Google Ads Konsultant · USA, UK i Srbija"}
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

            {/* Trust traka: nagrada nosi glavnu tezinu, godine i brendovi je podupiru */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
              <div className="flex-[1.4] flex items-center gap-3 bg-slate-900 text-white rounded-xl px-4 py-3">
                <svg
                  className="w-7 h-7 flex-shrink-0 text-yellow-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 5h-2V3H7v2H5a2 2 0 0 0-2 2v1a4 4 0 0 0 3.4 3.95A6 6 0 0 0 11 15.9V18H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-2.1a6 6 0 0 0 4.6-3.95A4 4 0 0 0 21 8V7a2 2 0 0 0-2-2ZM5 8V7h2v3.83A2 2 0 0 1 5 9V8Zm14 1a2 2 0 0 1-2 1.83V7h2v2Z" />
                </svg>
                <span>
                  <span className="block font-heading font-bold text-base leading-tight">
                    3x UK Search Awards
                  </span>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-[0.06em] mt-0.5">
                    {isEn ? "award-winning Google Ads work" : "nagrađivan Google Ads rad"}
                  </span>
                </span>
              </div>
              <div className="flex gap-3 flex-1">
                <div className="flex-1 border border-gray-200 bg-gray-50 rounded-xl px-3.5 py-3">
                  <span className="block font-heading font-bold text-base leading-tight text-slate-900">
                    {isEn ? "10+ years" : "10+ godina"}
                  </span>
                  <span className="block text-[11px] text-gray-500 mt-0.5">
                    {isEn ? "in Google Ads" : "u Google Ads-u"}
                  </span>
                </div>
                <div className="flex-1 border border-gray-200 bg-gray-50 rounded-xl px-3.5 py-3">
                  <span className="block font-heading font-bold text-base leading-tight text-slate-900">
                    {isEn ? "50+ brands" : "50+ brendova"}
                  </span>
                  <span className="block text-[11px] text-gray-500 mt-0.5">
                    {isEn ? "across 6+ countries" : "u 6+ zemalja"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: photo */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-card-lg bg-white">
              <Image
                src="/foto/slobodan-jelisavac-google-ads.webp"
                alt={isEn ? "Slobodan Jelisavac - Google Ads expert" : "Slobodan Jelisavac - Google Ads stručnjak"}
                width={1400}
                height={1400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal stats strip */}
      <div className="border-t border-gray-100 bg-gray-50/60">
        <div className="container-custom px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center md:divide-x divide-gray-200">
            <div className="px-2">
              <div className="text-sm md:text-base font-heading font-semibold text-slate-900 leading-snug">
                {isEn
                  ? "Six-figure revenue driven directly through Google Ads"
                  : "Šestocifreni prihodi direktno iz Google Ads kanala"}
              </div>
            </div>
            <div className="px-2">
              <div className="text-sm md:text-base font-heading font-semibold text-slate-900 leading-snug">
                {isEn ? "Focused on profit, not ROAS" : "Fokus na profit, ne na ROAS"}
              </div>
            </div>
            <div className="px-2">
              <div className="text-sm md:text-base font-heading font-semibold text-slate-900 leading-snug">
                {isEn
                  ? "I verify measurement before the first optimization — on every account"
                  : "Merenje proveravam pre prve optimizacije - na svakom nalogu"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
