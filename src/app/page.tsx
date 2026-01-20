import {
  Hero,
  WhyMe,
  ServicesPreview,
  CaseStudiesPreview,
  Testimonial,
  Newsletter,
  FinalCTA
} from "@/components/sections";

export default function Home() {
  return (
    <>
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

