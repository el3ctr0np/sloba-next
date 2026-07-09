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

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return buildMetadata({
      title: "Digital Jelisavac — Senior Google Ads Agency | Slobodan Jelisavac",
      description: "Digital Jelisavac is a senior-led boutique Google Ads agency, led personally by Slobodan Jelisavac (10+ years, 3x UK Search Awards). Search, Shopping and Performance Max, managed to profit.",
      locale,
      path: "",
      ogImage: "/og/homepage.png",
    });
  }

  return buildMetadata({
    title: "Digital Jelisavac - Senior Google Ads Agencija | S. Jelisavac",
    description: "Digital Jelisavac je senior-led boutique Google Ads agencija koju lično vodi Slobodan Jelisavac (10+ godina, 3x UK Search Awards). Search, Shopping i Performance Max, optimizovani na profit.",
    locale,
    path: "",
    ogImage: "/og/homepage.png",
  });
}

export default async function Home({ params }: Props) {
  const { locale } = await params;

  // NOTE: WebSite, #organization and #person JSON-LD are emitted site-wide by
  // <LocalBusinessSchema /> in the locale layout. The homepage must NOT re-emit
  // #organization or a duplicate business node — doing so caused an @id collision.

  const heroProps =
    locale === "en"
      ? {
          title: "A senior Google Ads partner for brands that want results, not overhead and junior staff",
          subtitle:
            "Digital Jelisavac is a senior-led boutique Google Ads practice. Your account is run by a senior specialist, not a junior learning on your budget. Search, Shopping and Performance Max, managed to profit.",
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
          title: "Senior Google Ads partner za brendove koji žele rezultate, ne troškove i juniore",
          subtitle:
            "Digital Jelisavac je senior-led boutique Google Ads agencija. Vaš nalog vodi senior stručnjak lično, ne junior koji uči na vašem budžetu. Search, Shopping i Performance Max, optimizovani na profit.",
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

  return (
    <>
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
