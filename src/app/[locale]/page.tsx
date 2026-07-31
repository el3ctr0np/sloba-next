import {
  WhyMe,
  ProfitFirstMethod,
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
          title: "A senior Google Ads partner for brands that want results, not overhead and junior staff",
          subtitle:
            "Your account is run personally by a senior specialist, not a junior learning on your budget. A boutique practice: Search, Shopping and Performance Max, managed to profit.",
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
            "Vaš nalog vodi senior stručnjak lično, ne junior koji uči na vašem budžetu. Boutique pristup: Search, Shopping i Performance Max, optimizovani na profit.",
          ctaText: "Zakažite besplatnih 20 minuta",
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
