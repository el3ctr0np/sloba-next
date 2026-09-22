import {
  WhyMe,
  ProfitFirstMethod,
  WhatYouNeed,
  ClientLogos,
  CaseStudiesPreview,
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
      title: "Slobodan Jelisavac — Senior Google Ads Expert & Agency",
      description: "I personally run every Google Ads account — 10+ years, 3x UK Search Awards. Search, Shopping and Performance Max, managed to profit for eCommerce and B2B brands.",
      locale,
      path: "",
      ogImage: "/og/homepage.png",
    });
  }

  return buildMetadata({
    title: "Slobodan Jelisavac - Senior Google Ads Stručnjak i Agencija",
    description: "Lično vodim svaki Google Ads nalog - 10+ godina iskustva, 3x UK Search Awards. Search, Shopping i Performance Max, optimizovani na profit za eCommerce i B2B brendove.",
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
          title: "Google advertising, done right.",
          subtitle:
            "10+ years of running Google Ads projects for companies across the US, UK, and Serbia. From strategy to execution, backed by an AI system. No junior layer, no middlemen.",
          ctaText: "Book a free consultation",
          ctaHref: "/kontakt",
          secondaryCtaText: "See the results",
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
          title: "Google oglašavanje na pravi način.",
          subtitle:
            "10+ godina vodim Google Ads projekte za firme iz USA, UK i Srbije. Od strategije do operative, uz AI sistem. Bez junior sloja i bez posrednika.",
          ctaText: "Zakažite besplatnu konsultaciju",
          ctaHref: "/kontakt",
          secondaryCtaText: "Pogledajte rezultate",
          secondaryCtaHref: "/case-studies",
          trustBadges: [
            "10+ godina iskustva",
            "3x UK Search Awards nagrade",
            "Google Partner (Ad Mixer - zvanični predstavnik)",
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
        <ProfitFirstMethod locale={locale} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhatYouNeed locale={locale} />
      </AnimateOnScroll>
      <ClientLogos />
      <AnimateOnScroll>
        <CaseStudiesPreview locale={locale} />
      </AnimateOnScroll>
      {/*
        Testimonials removed (NDA faza 2b, 23.9.2026): the single real
        <Testimonial /> named a client (Jason M., CEO at Mobelaris) with no
        written permission to publish, alongside a since-retracted ROI figure.
        The placeholder grid was already off (Jun 10 2026 — visible
        "[PLACEHOLDER — ...]" text, real quotes never collected).
      */}
      <AskAI locale={locale} />
      <FinalCTA />
    </>
  );
}
