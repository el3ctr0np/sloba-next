import {
  Hero,
  WhyMe,
  ClientLogos,
  CaseStudiesPreview,
  Testimonial,
  FinalCTA
} from "@/components/sections";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return buildMetadata({
      title: "Google Ads Consultant | 9+ Years, 50+ Brands — Slobodan Jelisavac",
      description: "Expert Google Ads management for eCommerce, B2B and SaaS brands. 3.7x average ROAS, 50+ brands across 6+ countries. Book a free consultation.",
      locale,
      path: "",
      ogImage: "/og/homepage.png",
    });
  }

  return buildMetadata({
    title: "Google Ads ekspert sa 9+ godina iskustva | Slobodan Jelisavac",
    description: "Google Ads upravljanje za eCommerce, B2B i SaaS brendove. 3.7x ROAS, 50+ brendova iz 6+ zemalja. Zakažite besplatnu konsultaciju.",
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
            "Google Ads consultant with 9+ years of experience managing campaigns for eCommerce, B2B and SaaS brands across the UK, US and EU.",
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
          sameAs: [
            "https://www.linkedin.com/in/slobodan-jelisavac/",
          ],
        }
      : {
          "@context": "https://schema.org",
          "@type": ["ProfessionalService", "LocalBusiness"],
          "@id": "https://www.slobodan-jelisavac.com/#business",
          name: "Slobodan Jelisavac - Google Ads Strategist",
          description:
            "Google Ads strategist sa decenijom iskustva u radu sa premium brendovima. Specijalizovan za eCommerce, B2B i SaaS.",
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
          priceRange: "€200-€800/mesečno",
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
          sameAs: [
            "https://www.linkedin.com/in/slobodan-jelisavac/",
          ],
        };

  const heroProps =
    locale === "en"
      ? {
          title: "Your search for a Google Ads expert ends here",
          subtitle:
            "No onboarding fees. No long-term contracts. No juniors on your account. AI-powered strategies for maximum results.",
          ctaText: "Book a Free Consultation",
          ctaHref: "/kontakt",
          secondaryCtaText: "View Results",
          secondaryCtaHref: "/case-studies",
          trustBadges: [
            "9+ years of experience",
            "3x UK Search Awards winner",
            "Google Partner (Ad Mixer — official representative)",
            "Partner at Funky Enterprises (omnichannel agency)",
            "50+ brands across 6+ countries",
          ],
        }
      : {
          title: "Vaša potraga za Google Ads ekspertom se završava ovde",
          subtitle:
            "Bez onboarding naknada. Bez dugoročnih ugovora. Bez juniora na vašem nalogu. Uz napredne AI tehnologije za maksimalne rezultate.",
          ctaText: "Zakažite besplatnu konsultaciju",
          ctaHref: "/kontakt",
          secondaryCtaText: "Pogledajte rezultate",
          secondaryCtaHref: "/case-studies",
          trustBadges: [
            "9+ godina iskustva",
            "3x UK Search Awards nagrade",
            "Google Partner (Ad Mixer — zvanični predstavnik)",
            "Partner @ Funky Enterprises",
            "50+ brendova iz 6+ zemalja",
          ],
        };

  const stats =
    locale === "en"
      ? [
          { value: "9+", label: "years of experience" },
          { value: "3.7x", label: "average ROAS" },
          { value: "50+", label: "brands managed" },
          { value: "6+", label: "countries served" },
        ]
      : [
          { value: "9+", label: "godina iskustva" },
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
        ? "Google Ads consultant with 9+ years of experience managing campaigns for eCommerce, B2B and SaaS brands."
        : "Google Ads konsultant sa 9+ godina iskustva u vođenju kampanja za eCommerce, B2B i SaaS brendove.",
    founder: {
      "@type": "Person",
      name: "Slobodan Jelisavac",
      jobTitle: "Google Ads Strategist",
      url: "https://www.slobodan-jelisavac.com",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@slobodan-jelisavac.com",
      contactType: "customer service",
      availableLanguage: ["Serbian", "English"],
    },
    sameAs: [
      "https://www.linkedin.com/in/slobodan-jelisavac/",
    ],
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
      <Hero {...heroProps} />

      {/* Stats Strip */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
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
