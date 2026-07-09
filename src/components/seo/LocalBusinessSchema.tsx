import { PERSON_SAME_AS, PERSON_SCHEMA } from "@/lib/brand";

/**
 * Site-wide entity graph — rendered on every page via the locale layout.
 * Single source of truth for the three canonical nodes, de-duplicated so no
 * two <script> blocks ever share an @id (that would feed AI/Google a merged,
 * contradictory entity):
 *   #website      → WebSite
 *   #organization → ProfessionalService / LocalBusiness (the business)
 *   #person       → Slobodan Jelisavac (referenced by blog author/publisher)
 *
 * Homepage/About pages must NOT re-emit #organization or #person — they
 * inherit these nodes from here.
 */
export function LocalBusinessSchema({ locale }: { locale: string }) {
  const isEn = locale === "en";

  const areaServed = isEn
    ? [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Australia" },
        { "@type": "Country", name: "Germany" },
        { "@type": "Country", name: "Serbia" },
      ]
    : [
        { "@type": "Country", name: "Serbia" },
        { "@type": "Country", name: "Croatia" },
        { "@type": "Country", name: "Slovenia" },
        { "@type": "Country", name: "Bosnia and Herzegovina" },
        { "@type": "Country", name: "United Kingdom" },
      ];

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.slobodan-jelisavac.com/#website",
        url: "https://www.slobodan-jelisavac.com",
        name: "Slobodan Jelisavac - Google Ads",
        inLanguage: ["sr", "en"],
        publisher: { "@id": "https://www.slobodan-jelisavac.com/#person" },
      },
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": "https://www.slobodan-jelisavac.com/#organization",
        name: "Digital Jelisavac",
        alternateName: "Slobodan Jelisavac - Google Ads",
        url: "https://www.slobodan-jelisavac.com",
        logo: "https://www.slobodan-jelisavac.com/logo.png",
        image: "https://www.slobodan-jelisavac.com/og/homepage.png",
        slogan: isEn
          ? "Senior-led Google Ads for brands that want results, not overhead."
          : "Senior-led Google Ads za brendove koji žele rezultate, ne troškove.",
        description: isEn
          ? "Digital Jelisavac is a senior-led boutique Google Ads agency, led personally by Slobodan Jelisavac. Specialized in Search, Shopping, and Performance Max for eCommerce, B2B and SaaS brands."
          : "Digital Jelisavac je senior-led boutique Google Ads agencija koju lično vodi Slobodan Jelisavac. Specijalizovana za Search, Shopping i Performance Max za eCommerce, B2B i SaaS brendove.",
        email: "info@slobodan-jelisavac.com",
        foundingDate: "2020-01-01",
        founder: { "@id": "https://www.slobodan-jelisavac.com/#person" },
        address: [
          {
            "@type": "PostalAddress",
            streetAddress: "Majora Gavrilovića 1",
            addressLocality: "Nova Pazova",
            postalCode: "22330",
            addressRegion: "Vojvodina",
            addressCountry: "RS",
          },
          {
            "@type": "PostalAddress",
            streetAddress: "Majora Zorana Radosavljevića 222, stan 16",
            addressLocality: "Batajnica",
            postalCode: "11273",
            addressRegion: "Beograd",
            addressCountry: "RS",
          },
        ],
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.9439,
          longitude: 20.2200,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
        priceRange: "$$",
        areaServed,
        knowsAbout: [
          "Google Ads",
          "PPC",
          "Google Shopping",
          "Performance Max",
          "eCommerce Marketing",
          "B2B Lead Generation",
          "SaaS Marketing",
          "Conversion Tracking",
        ],
        serviceType: [
          "Google Ads Management",
          "Google Shopping Campaigns",
          "Performance Max Campaigns",
          "Google Ads Audit",
          "PPC Consulting",
        ],
        sameAs: PERSON_SAME_AS,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEn ? "Google Ads Services" : "Google Ads Usluge",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: isEn
                  ? "Google Ads Management"
                  : "Upravljanje Google Ads Nalogom",
                url: isEn
                  ? "https://www.slobodan-jelisavac.com/en/services/google-ads-management"
                  : "https://www.slobodan-jelisavac.com/sr/usluge/google-ads-upravljanje",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Google Ads Audit",
                url: isEn
                  ? "https://www.slobodan-jelisavac.com/en/services/google-ads-audit"
                  : "https://www.slobodan-jelisavac.com/sr/usluge/google-ads-audit",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: isEn ? "PPC Consulting" : "PPC Konsultacije",
                url: isEn
                  ? "https://www.slobodan-jelisavac.com/en/services/consultations"
                  : "https://www.slobodan-jelisavac.com/sr/usluge/konsultacije",
              },
            },
          ],
        },
      },
      {
        ...PERSON_SCHEMA,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
