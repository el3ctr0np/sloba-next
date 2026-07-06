import {
  Hero,
  WhyMe,
  WhatYouNeed,
  ClientLogos,
  CaseStudiesPreview,
  Testimonial,
  AskAI,
  FinalCTA
} from "@/components/sections";
import { AnimateOnScroll, CounterAnimation } from "@/components/ui";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PERSON_SAME_AS } from "@/lib/brand";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return buildMetadata({
      title: "Google Ads Consultant | 10+ Years, 50+ Brands — Slobodan Jelisavac",
      description: "Expert Google Ads management for eCommerce, B2B and SaaS brands. 3.7x average ROAS, 50+ brands across 6+ countries. Book a free consultation.",
      locale,
      path: "",
      ogImage: "/og/homepage.png",
    });
  }

  return buildMetadata({
    title: "Google Ads Srbija — vaš Google Ads partner, ne agencija | Slobodan Jelisavac",
    description: "Google Ads Srbija — nezavisni PPC konsultant sa 10+ godina iskustva i 50+ brendova u portfoliju (Srbija, UK, EU). Search, Shopping, Performance Max kampanje. Bez onboarding naknada, bez dugoročnih ugovora.",
    locale,
    path: "",
    ogImage: "/og/homepage.png",
  });
}

export default async function Home({ params }: Props) {
  const { locale } = await params;

  const schema =
    locale === "en"
      ? {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://www.slobodan-jelisavac.com/#business",
          name: "Slobodan Jelisavac - Google Ads Consultant",
          description:
            "Google Ads Consultant with 10+ years of experience managing campaigns for eCommerce, B2B and SaaS brands across the UK, US and EU.",
          priceRange: "from $2,500/month",
          url: "https://www.slobodan-jelisavac.com/en",
          email: "info@slobodan-jelisavac.com",
          image: "https://www.slobodan-jelisavac.com/og/homepage.png",
          areaServed: [
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "United Kingdom" },
            { "@type": "Country", name: "Australia" },
            { "@type": "Country", name: "Germany" },
            { "@type": "Country", name: "Serbia" },
          ],
          serviceType: [
            "Google Ads Management",
            "Google Ads Audit",
            "Google Shopping",
            "Performance Max",
            "Search Campaigns",
            "Remarketing",
            "YouTube Ads",
            "Performance Marketing",
          ],
          knowsAbout: [
            "Google Ads",
            "PPC",
            "eCommerce Marketing",
            "B2B Lead Generation",
            "SaaS Marketing",
          ],
          sameAs: PERSON_SAME_AS,
        }
      : {
          "@context": "https://schema.org",
          "@type": ["ProfessionalService", "LocalBusiness"],
          "@id": "https://www.slobodan-jelisavac.com/#business",
          name: "Slobodan Jelisavac - Google Ads Konsultant",
          description:
            "Google Ads konsultant sa decenijom iskustva u radu sa premium brendovima. Specijalizovan za eCommerce, B2B i SaaS.",
          url: "https://www.slobodan-jelisavac.com/sr",
          telephone: "+381692603998",
          email: "info@slobodan-jelisavac.com",
          image: "https://www.slobodan-jelisavac.com/og/homepage.png",
          address: [
            {
              "@type": "PostalAddress",
              streetAddress: "Majora Gavrilovića 1",
              addressLocality: "Nova Pazova",
              addressRegion: "Vojvodina",
              postalCode: "22330",
              addressCountry: "RS",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "Majora Zorana Radosavljevića 222, stan 16",
              addressLocality: "Batajnica",
              addressRegion: "Beograd",
              postalCode: "11273",
              addressCountry: "RS",
            },
          ],
          geo: {
            "@type": "GeoCoordinates",
            latitude: 44.9439,
            longitude: 20.2200,
          },
          priceRange: "od €700/mesečno",
          areaServed: [
            { "@type": "Country", name: "Serbia" },
            { "@type": "Country", name: "Croatia" },
            { "@type": "Country", name: "Slovenia" },
            { "@type": "Country", name: "Bosnia and Herzegovina" },
            { "@type": "Country", name: "United Kingdom" },
          ],
          serviceType: [
            "Google Ads Management",
            "Google Ads Audit",
            "Google Shopping",
            "Performance Max",
            "Search Campaigns",
            "Remarketing",
            "YouTube Ads",
            "Performance Marketing",
          ],
          knowsAbout: [
            "Google Ads",
            "PPC",
            "eCommerce Marketing",
            "B2B Lead Generation",
            "SaaS Marketing",
          ],
          sameAs: PERSON_SAME_AS,
        };

  const heroProps =
    locale === "en"
      ? {
          title: "Your Google Ads partner, not an agency",
          subtitle:
            "A decade of experience. 3x UK Search Awards. Direct work from strategy to execution. No juniors, no middlemen.",
          ctaText: "Book a free 20-minute call",
          ctaHref: "/kontakt",
          secondaryCtaText: "View Results",
          secondaryCtaHref: "/case-studies",
          trustBadges: [
            "10+ years of experience",
            "3x UK Search Awards winner",
            "Google Partner (Ad Mixer — official representative)",
            "Partner at Funky Enterprises (omnichannel agency)",
            "50+ brands across 6+ countries",
          ],
        }
      : {
          title: "Vaš Google Ads partner, ne agencija",
          subtitle:
            "Decenija iskustva, osvojene 3x UK Search Awards. Direktan rad od strategije do izvršenja. Bez juniora, bez posrednika.",
          ctaText: "Zakažite besplatnih 20 minuta",
          ctaHref: "/kontakt",
          secondaryCtaText: "Pogledajte rezultate",
          secondaryCtaHref: "/case-studies",
          trustBadges: [
            "10+ godina iskustva",
            "3x UK Search Awards nagrade",
            "Google Partner (Ad Mixer — zvanični predstavnik)",
            "Partner @ Funky Enterprises",
            "50+ brendova iz 6+ zemalja",
          ],
        };

  const stats =
    locale === "en"
      ? [
          { value: "10+", label: "years of experience" },
          { value: "3.7x", label: "average ROAS" },
          { value: "50+", label: "brands managed" },
          { value: "6+", label: "countries served" },
        ]
      : [
          { value: "10+", label: "godina iskustva" },
          { value: "3.7x", label: "prosečan ROAS" },
          { value: "50+", label: "brendova" },
          { value: "6+", label: "zemalja" },
        ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.slobodan-jelisavac.com/#organization",
    name: "Slobodan Jelisavac",
    url: "https://www.slobodan-jelisavac.com",
    logo: "https://www.slobodan-jelisavac.com/og/homepage.png",
    description:
      locale === "en"
        ? "Google Ads Consultant with 10+ years of experience managing campaigns for eCommerce, B2B and SaaS brands."
        : "Google Ads konsultant sa 10+ godina iskustva u vođenju kampanja za eCommerce, B2B i SaaS brendove.",
    founder: {
      "@type": "Person",
      name: "Slobodan Jelisavac",
      jobTitle: "Google Ads Consultant",
      url: "https://www.slobodan-jelisavac.com",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@slobodan-jelisavac.com",
      contactType: "customer service",
      availableLanguage: ["Serbian", "English"],
    },
    sameAs: PERSON_SAME_AS,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero {...heroProps} locale={locale} />

      {/* Stats Strip — with counter animations */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <AnimateOnScroll delay={0}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-1">
                <CounterAnimation end={10} suffix="+" />
              </div>
              <p className="text-gray-500 text-sm">{stats[0].label}</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={150}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-1">
                <CounterAnimation end={3.7} suffix="x" decimals={1} />
              </div>
              <p className="text-gray-500 text-sm">{stats[1].label}</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-1">
                <CounterAnimation end={50} suffix="+" />
              </div>
              <p className="text-gray-500 text-sm">{stats[2].label}</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={450}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-1">
                <CounterAnimation end={6} suffix="+" />
              </div>
              <p className="text-gray-500 text-sm">{stats[3].label}</p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <AnimateOnScroll>
        <WhyMe />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhatYouNeed locale={locale} />
      </AnimateOnScroll>
      <ClientLogos />
      <AnimateOnScroll>
        <CaseStudiesPreview locale={locale} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Testimonial />
      </AnimateOnScroll>
      {/*
        Testimonials grid removed (Jun 10 2026): all entries in placeholderTestimonials
        contained visible "[PLACEHOLDER — ...]" text. Re-enable once real client quotes
        are collected (Asana: outreach HERO reviews — Grant, Janko, Mike).
        The single real <Testimonial /> above remains.
      */}
      <AskAI locale={locale} />
      <FinalCTA />
    </>
  );
}
