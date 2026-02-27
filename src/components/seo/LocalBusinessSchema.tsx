export function LocalBusinessSchema({ locale }: { locale: string }) {
  const isEn = locale === "en";

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.slobodan-jelisavac.com/#organization",
    name: "Slobodan Jelisavac - Google Ads Expert",
    alternateName: "Digital Jelisavac",
    url: "https://www.slobodan-jelisavac.com",
    logo: "https://www.slobodan-jelisavac.com/logo.png",
    image: "https://www.slobodan-jelisavac.com/og/homepage.png",
    description: isEn
      ? "Professional Google Ads management for eCommerce and B2B companies. Specialized in Search, Shopping, and Performance Max campaigns."
      : "Profesionalno upravljanje Google Ads kampanjama za eCommerce i B2B firme. Specijalizovan za Search, Shopping i Performance Max kampanje.",
    telephone: "+381692603998",
    email: "info@slobodan-jelisavac.com",
    foundingDate: "2020",
    founder: {
      "@type": "Person",
      name: "Slobodan Jelisavac",
      jobTitle: "Google Ads Strategist",
      url: "https://www.slobodan-jelisavac.com",
      sameAs: [
        "https://www.linkedin.com/in/slobodan-jelisavac/",
      ],
    },
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
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
    priceRange: "$$",
    areaServed: [
      { "@type": "Country", name: "Serbia" },
      { "@type": "Country", name: "Croatia" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "United States" },
    ],
    serviceType: [
      "Google Ads Management",
      "Google Shopping Campaigns",
      "Performance Max Campaigns",
      "Google Ads Audit",
      "PPC Consulting",
    ],
    sameAs: [
      "https://www.linkedin.com/in/slobodan-jelisavac/",
    ],
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
