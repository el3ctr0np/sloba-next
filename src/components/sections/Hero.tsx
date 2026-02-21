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
}

export function Hero({
  title,
  subtitle,
  ctaText = "Zakažite besplatnu konsultaciju",
  ctaHref = "/kontakt",
  secondaryCtaText,
  secondaryCtaHref,
  trustBadges = []
}: HeroProps) {
  return (
    <section className="relative py-12 md:py-20 px-4 bg-gray-50 overflow-hidden">
      <Image
        src="/hero-bg.webp"
        alt=""
        fill
        className="object-cover object-right-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/50 to-transparent" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-slate-200 mb-6">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button href={ctaHref} variant="secondary">
                {ctaText}
              </Button>
              {secondaryCtaText && secondaryCtaHref && (
                <Button href={secondaryCtaHref} variant="primary">
                  {secondaryCtaText}
                </Button>
              )}
            </div>

            {/* Trust Badges */}
            {trustBadges.length > 0 && (
              <div className="flex flex-wrap gap-4 items-center text-sm text-slate-200">
                {trustBadges.map((badge, index) => (
                  <span key={index} className="flex items-center gap-2">
                    <span className="text-secondary">✓</span> {badge}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center">
            <div
              className="relative w-full max-w-xl border border-white/20 rounded-lg overflow-hidden bg-slate-950/40 backdrop-blur-sm shadow-card"
              style={{ aspectRatio: "1023 / 781" }}
            >
              <Image
                src="/hero.webp"
                alt="Slobodan Jelisavac"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
