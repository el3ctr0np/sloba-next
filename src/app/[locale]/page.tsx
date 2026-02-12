import {
  Hero,
  WhyMe,
  ClientLogos,
  CaseStudiesPreview,
  Testimonial,
  FinalCTA
} from "@/components/sections";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Google Ads ekspert sa 9+ godina iskustva | Slobodan Jelisavac",
    description:
      "Google Ads upravljanje za eCommerce, B2B i SaaS brendove. 3.7x ROAS, 50+ brendova iz 6+ zemalja. Zakažite besplatnu konsultaciju."
  };
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Slobodan Jelisavac - Google Ads Strategist",
    description:
      "Google Ads strategist sa decenijom iskustva u radu sa premium brendovima.",
    url: "https://slobodan-jelisavac.com",
    areaServed: [
      "Serbia",
      "Croatia",
      "Slovenia",
      "Bosnia and Herzegovina",
      "UK",
      "EU"
    ],
    serviceType: [
      "Google Ads Management",
      "Google Shopping",
      "Performance Max",
      "Search Campaigns",
      "Remarketing",
      "YouTube Ads"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero
        title="Vaša potraga za Google Ads ekspertom se završava ovde"
        subtitle="Bez onboarding naknada. Bez dugoročnih ugovora. Bez juniora na vašem nalogu. Uz napredne AI tehnologije za maksimalne rezultate."
        ctaText="Zakažite besplatnu konsultaciju"
        ctaHref="/kontakt"
        secondaryCtaText="Pogledajte rezultate"
        secondaryCtaHref="/case-studies"
        trustBadges={[
          "9+ godina iskustva",
          "3x UK Search Awards nagrade",
          "Google Partner (Ad Mixer — zvanični predstavnik)",
          "Partner @ Funky Enterprises",
          "50+ brendova iz 6+ zemalja"
        ]}
      />

      {/* Stats Strip */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-1">
                9+
              </div>
              <p className="text-gray-500 text-sm">godina iskustva</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-1">
                3.7x
              </div>
              <p className="text-gray-500 text-sm">prosečan ROAS</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-1">
                50+
              </div>
              <p className="text-gray-500 text-sm">brendova</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-1">
                6+
              </div>
              <p className="text-gray-500 text-sm">zemalja</p>
            </div>
          </div>
        </div>
      </section>

      <WhyMe />
      <ClientLogos />
      <CaseStudiesPreview />
      <Testimonial />
      <FinalCTA />
    </>
  );
}
