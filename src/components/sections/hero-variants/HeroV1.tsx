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
      <div className="container-custom px-4 py-10 md:py-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-[0.15em]">
                {isEn ? "Google Ads Consultant · USA, UK & Serbia" : "Google Ads Konsultant · USA, UK i Srbija"}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-slate-900 leading-[1.1] tracking-tight mb-5">
              {title}
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed mb-7">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button href={ctaHref} variant="primary" ctaLocation="hero_primary">
                {resolvedCtaText}
              </Button>
              {secondaryCtaText && secondaryCtaHref && (
                <Button href={secondaryCtaHref} variant="secondary">
                  {secondaryCtaText}
                </Button>
              )}
            </div>

            <p className="mt-3 text-[13px] text-gray-500">
              {isEn
                ? "Free and no obligation · I reply within 24h on weekdays"
                : "Besplatno i bez obaveze · Odgovaram u roku od 24h radnim danima"}
            </p>

            {/* Logotipi klijenata: popunjavaju levu kolonu dokazom, ne vazduhom */}
            <div className="mt-7 pt-6 border-t border-gray-100">
              <p className="text-[11px] uppercase tracking-[0.14em] text-gray-500 mb-3.5">
                {isEn ? "Brands I have worked with" : "Brendovi sa kojima sam radio"}
              </p>
              <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
                {[
                  { src: "/client-logos/soundbox-store.svg", alt: "Soundbox Store", h: 26 },
                  { src: "/client-logos/pickbox-hrvatska-logo.svg.webp", alt: "Pickbox", h: 22 },
                  { src: "/client-logos/bestatprinting.co.uk-logo9.webp", alt: "Best at Printing", h: 22 },
                  { src: "/client-logos/everfun.hr-logo74.webp", alt: "Everfun", h: 22 },
                ].map((logo) => (
                  <Image
                    key={logo.src}
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={logo.h}
                    style={{ height: logo.h, width: "auto" }}
                    className="opacity-55 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Right: photo */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-card-lg bg-white">
              <Image
                src="/foto/slobodan-jelisavac-google-ads.webp"
                alt={isEn ? "Slobodan Jelisavac - Google Ads expert" : "Slobodan Jelisavac - Google Ads stručnjak"}
                width={1400}
                height={1400}
                // Without `sizes` the browser assumed 100vw at every DPR and
                // fetched the 3840px variant: LCP 7.5s on mobile, 46 KB where
                // ~20 KB does the job. Half the grid on lg+, full width below.
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-auto"
                priority
                fetchPriority="high"
              />
              {/* Dokazi preko fotografije: nagrada nosi tezinu, brojke je podupiru.
                  Tekst je namerno kratak da se nista ne prelama. */}
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-center gap-2 p-3 md:p-4 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent">
                <div className="flex items-center gap-2 bg-slate-900 text-white rounded-lg px-3 py-2 shadow-lg">
                  <svg className="w-4 h-4 flex-shrink-0 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 5h-2V3H7v2H5a2 2 0 0 0-2 2v1a4 4 0 0 0 3.4 3.95A6 6 0 0 0 11 15.9V18H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-2.1a6 6 0 0 0 4.6-3.95A4 4 0 0 0 21 8V7a2 2 0 0 0-2-2ZM5 8V7h2v3.83A2 2 0 0 1 5 9V8Zm14 1a2 2 0 0 1-2 1.83V7h2v2Z" />
                  </svg>
                  <span className="font-heading font-bold text-[13px] leading-none whitespace-nowrap">
                    3x UK Search Awards
                  </span>
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <span className="font-heading font-bold text-[13px] text-slate-900 leading-none whitespace-nowrap">
                    {isEn ? "10+ years" : "10+ godina"}
                  </span>
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <span className="font-heading font-bold text-[13px] text-slate-900 leading-none whitespace-nowrap">
                    {isEn ? "50+ brands" : "50+ brendova"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal stats strip */}
      <div className="border-t border-gray-100 bg-gray-50/60">
        <div className="container-custom px-4 py-5">
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
