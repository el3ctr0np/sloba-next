import Image from "next/image";
import { Button } from "@/components/ui";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  trustBadges?: string[];
}

export function Hero({
  title,
  subtitle,
  ctaText = "Zakažite Konsultaciju",
  ctaHref = "/kontakt",
  trustBadges = []
}: HeroProps) {
  return (
    <section
      className="py-20 md:py-32 px-4 bg-gray-50 bg-cover bg-right"
      style={{ backgroundImage: "url('/hero-bg.webp')" }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button href={ctaHref} variant="secondary">
                {ctaText}
              </Button>
              <Button href="/case-studies" variant="primary">
                Pogledajte Rezultate
              </Button>
            </div>

            {/* Trust Badges */}
            {trustBadges.length > 0 && (
              <div className="flex flex-wrap gap-4 items-center text-sm text-gray-600">
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
            <div className="relative w-full max-w-md h-96 border-2 border-gray-900 rounded-lg overflow-hidden shadow-card">
              <Image
                src="/hero.webp"
                alt="Slobodan Jelisavac"
                fill
                className="object-cover object-left"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
