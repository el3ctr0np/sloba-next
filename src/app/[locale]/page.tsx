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
      title: "Google Ads Consultant, 10+ Years | Slobodan Jelisavac",
      description: "Expert Google Ads management for eCommerce, B2B and SaaS brands. 3.7x average ROAS, 50+ brands across 6+ countries. Book a free consultation.",
      locale,
      path: "",
      ogImage: "/og/homepage.png",
    });
  }

  return buildMetadata({
    title: "Google Ads Srbija - Partner, Ne Agencija | S. Jelisavac",
    description: "Nezavisni Google Ads konsultant, 10+ godina iskustva, 50+ brendova (Srbija, UK, EU). Search, Shopping i Performance Max. Bez onboarding naknada.",
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
