import {
  Hero,
  WhyMe,
  ServicesPreview,
  CaseStudiesPreview,
  Testimonial,
  Newsletter,
  FinalCTA
} from "@/components/sections";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Slobodan Jelisavac - Google Ads Strategist",
    description:
      "Google Ads strategist sa decenijom iskustva. AI-first optimizacije za eCommerce, B2B i SaaS brendove."
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
    areaServed: ["Serbia", "Croatia", "Slovenia", "Bosnia and Herzegovina", "UK", "EU"],
    serviceType: [
      "Google Ads Management",
      "Performance Marketing",
      "SEO",
      "Meta Advertising"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero
        title="Google Ads Strategist sa Decenijom Iskustva"
        subtitle="AI-first optimizacije za eCommerce, B2B i SaaS brendove. Maksimizujte ROI sa strategijama koje donose merljive rezultate."
        ctaText="Zakažite Besplatnu Konsultaciju"
        ctaHref="/kontakt"
        trustBadges={[
          "10+ Godina Iskustva",
          "UK Search Awards",
          "Google Partner"
        ]}
      />
      <WhyMe />
      <ServicesPreview />
      <CaseStudiesPreview />
      <Testimonial />
      <Newsletter />
      <FinalCTA />
    </>
  );
}

