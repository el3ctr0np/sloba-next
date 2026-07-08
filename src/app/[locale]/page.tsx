import {
  WhyMe,
  WhatYouNeed,
  ClientLogos,
  CaseStudiesPreview,
  Testimonial,
  AskAI,
  FinalCTA
} from "@/components/sections";
import { HeroV1 } from "@/components/sections/hero-variants/HeroV1";
import { AnimateOnScroll } from "@/components/ui";
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
          title: "Your Google Ads report looks great. Does your bank account agree?",
          subtitle:
            "I'm Slobodan — a senior Google Ads consultant. On the accounts I take over, I usually find 20–40% of the budget doing nothing, and tracking that overstates the results. I fix the truth first, then scale what actually earns.",
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
          title: "Vaš Google Ads izveštaj izgleda odlično. Da li i vaš račun?",
          subtitle:
            "Ja sam Slobodan — senior Google Ads konsultant. Na nalozima koje preuzmem najčešće nađem 20–40% budžeta koji ne radi ništa, i merenje koje prijavljuje bolje rezultate nego što ih ima. Prvo sredim istinu, pa skaliram ono što stvarno zarađuje.",
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
      <HeroV1 {...heroProps} locale={locale} />


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
