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
 * HeroV2 — Centered editorial hero (premium typographic)
 * Everything centered, max-w-4xl, no photo — lots of white space.
 * Below the CTAs: 3 stat pills in a row.
 */
export function HeroV2({
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

  const statPills = isEn
    ? ["£290k+ Shopping revenue UK", "1.78x POAS", "3x UK Search Awards"]
    : ["£290k+ Shopping prihod UK", "1.78x POAS", "3x UK Search Awards"];

  return (
    <section className="relative overflow-hidden bg-white border-b border-gray-100">
      <div className="container-custom px-4 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 justify-center">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-[0.15em]">
              {isEn ? "Google Ads Consulting • Serbia & UK" : "Google Ads Konsalting • Srbija & UK"}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 leading-[1.05] mb-8">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Button href={ctaHref} variant="primary" ctaLocation="hero_primary">
              {resolvedCtaText}
            </Button>
            {secondaryCtaText && secondaryCtaHref && (
              <Button href={secondaryCtaHref} variant="secondary">
                {secondaryCtaText}
              </Button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {statPills.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
