import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "en") {
    return {
      title:
        "Performance Max Campaign Management | PMax Google Ads — Slobodan Jelisavac",
      description:
        "Expert Performance Max campaign management for businesses seeking consolidated advertising. Asset group optimization, audience signals, and transparent tracking across all Google channels."
    };
  }
  return {
    title:
      "Performance Max kampanje Srbija | PMax specijalist - Slobodan Jelisavac",
    description:
      "Profesionalno upravljanje Performance Max kampanjama. Za firme koje žele konsolidovano oglašavanje sa jednim budžetom i transparentno praćenje rezultata."
  };
}

export default async function PerformanceMaxPage({ params }: Props) {
  const { locale } = await params;

  const reasons =
    locale === "en"
      ? [
          "You want one consolidated campaign instead of multiple complex ones",
          "You have a limited budget and want coverage across all channels",
          "You don't have time for complex multi-campaign management",
          "You want an expert to run the campaign instead of DIY setup",
          "Your business doesn't require granular control over each channel"
        ]
      : [
          "Želite jednu konsolidovanu kampanju umesto više kompleksnih",
          "Imate ograničen budžet i želite pokrivanje svih kanala",
          "Nemate vremena za kompleksno upravljanje više tipova kampanja",
          "Želite da neko iskusan vodi kampanju umesto da je sami podešavate",
          "Vaš biznis ne zahteva granularnu kontrolu nad svakim kanalom"
        ];

  const challenges =
    locale === "en"
      ? [
          {
            title: "Black box syndrome",
            description:
              "Google doesn't show where budget goes—without proper setup, there's no clear visibility."
          },
          {
            title: "Brand search cannibalization",
            description:
              "PMax steals conversions from Search campaigns and attributes them to itself."
          },
          {
            title: "Poor assets mean poor results",
            description:
              "Automation depends on the quality of images, copy, and videos."
          },
          {
            title: "Wrong audience signals",
            description:
              "Signals are suggestions, not targeting. Without strategy, you attract the wrong audience."
          }
        ]
      : [
          {
            title: "Black box sindrom",
            description:
              "Google ne pokazuje gde ide budžet, pa bez pravilnog setup-a nema jasnog uvida."
          },
          {
            title: "Kanibalizacija brand pretrage",
            description:
              "PMax preuzima konverzije od Search kampanja i pripisuje ih sebi."
          },
          {
            title: "Loši asset-i znače loš rezultat",
            description:
              "Automatizacija zavisi od kvaliteta slika, tekstova i videa."
          },
          {
            title: "Pogrešni audience signali",
            description:
              "Signali su sugestije, ne targeting. Bez strategije privlačite pogrešnu publiku."
          }
        ];

  const approach =
    locale === "en"
      ? [
          {
            title: "Transparency first",
            description:
              "I use scripts and techniques to extract data sources, including search terms and channel breakdown."
          },
          {
            title: "Strategic asset group structure",
            description:
              "Segmentation by categories, intent, or funnel stages for better control."
          },
          {
            title: "Proper audience signals",
            description:
              "I set signals as guidance for automation, not as blind targeting."
          },
          {
            title: "Search themes for control",
            description:
              "I use search themes to keep searches closer to your key focus areas."
          },
          {
            title: "Combination with other campaigns",
            description:
              "When it makes sense, I combine PMax with Search and Standard Shopping campaigns."
          }
        ]
      : [
          {
            title: "Transparentnost pre svega",
            description:
              "Koristim skripte i tehnike za izvore podataka, uključujući search terms i kanal breakdown."
          },
          {
            title: "Strategijska asset grupa struktura",
            description:
              "Segmentacija po kategorijama, intentu ili funnel fazama za bolju kontrolu."
          },
          {
            title: "Pravilni audience signali",
            description:
              "Signale postavljam kao smernice za automatizaciju, ne kao naslepo targetiranje."
          },
          {
            title: "Search themes za kontrolu",
            description:
              "Koristim search themes kako bi pretrage bile bliže vašim ključnim fokusima."
          },
          {
            title: "Kombinacija sa drugim kampanjama",
            description:
              "Kada ima smisla, PMax kombinujem sa Search i Standard Shopping kampanjama."
          }
        ];

  const idealClients =
    locale === "en"
      ? [
          "Small and medium businesses with a budget of $1,000-3,500/month",
          "Companies that want simplicity over complexity",
          "Businesses without an in-house Google Ads specialist",
          "Companies wanting to test advertising with a single campaign"
        ]
      : [
          "Manja i srednja preduzeća sa budžetom od EUR 800-3,000/mesečno",
          "Firme koje žele jednostavnost umesto kompleksnosti",
          "Biznisi bez internog Google Ads specijaliste",
          "Kompanije koje žele da testiraju oglašavanje sa jednom kampanjom"
        ];

  const faqs =
    locale === "en"
      ? [
          {
            question: "Does PMax replace all other campaigns?",
            answer:
              "Not necessarily. For some businesses yes, for others a hybrid approach is better. I analyze the situation and recommend the right solution."
          },
          {
            question: "Can I see which keywords I'm showing for?",
            answer:
              "Partially. Google shows Search Themes insights, and I also use scripts for approximate search terms."
          },
          {
            question: "How much budget is needed for PMax?",
            answer:
              "I recommend a minimum of $1,000/month for a PMax campaign alone."
          },
          {
            question: "How long does the PMax learning phase take?",
            answer: "Realistically 4-6 weeks for stabilization."
          },
          {
            question: "Can I use PMax for lead generation?",
            answer:
              "Yes, but with caution. Lead quality can vary, so I track downstream metrics."
          },
          {
            question: "What's the most common mistake with PMax campaigns?",
            answer:
              "Poor assets. Without quality images, copy, and videos, automation has nothing to work with."
          }
        ]
      : [
          {
            question: "Da li PMax zamenjuje sve ostale kampanje?",
            answer:
              "Ne nužno. Za neke biznise da, za druge je hibridni pristup bolji. Analiziramo situaciju i predlažemo pravo rešenje."
          },
          {
            question: "Mogu li videti za koje ključne reči se prikazujem?",
            answer:
              "Delimično. Google prikazuje Search Themes insights, a koristim i skripte za približne search terms."
          },
          {
            question: "Koliko budžeta treba za PMax?",
            answer: "Minimum preporučujem EUR 800/mesečno samo za PMax kampanju."
          },
          {
            question: "Koliko traje učenje PMax kampanje?",
            answer: "Realno 4-6 nedelja za stabilizaciju."
          },
          {
            question: "Mogu li koristiti PMax za lead generation?",
            answer:
              "Da, ali uz oprez. Lead quality može varirati, zato pratim downstream metrike."
          },
          {
            question: "Šta je najčešća greška sa PMax kampanjama?",
            answer:
              "Loši asset-i. Bez kvalitetnih slika, tekstova i videa, automatizacija nema sa čim da radi."
          }
        ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Slobodan Jelisavac",
    url: "https://www.slobodan-jelisavac.com",
    jobTitle: "Google Ads Strategist"
  };

  const breadcrumbSchema =
    locale === "en"
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.slobodan-jelisavac.com"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.slobodan-jelisavac.com/en/usluge"
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Performance Max",
              item: "https://www.slobodan-jelisavac.com/en/usluge/performance-max"
            }
          ]
        }
      : {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Početna",
              item: "https://www.slobodan-jelisavac.com"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Usluge",
              item: "https://www.slobodan-jelisavac.com/usluge"
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Performance Max",
              item: "https://www.slobodan-jelisavac.com/usluge/performance-max"
            }
          ]
        };

  const serviceSchema =
    locale === "en"
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Performance Max Campaign Management",
          description:
            "Professional Performance Max campaign management for businesses seeking consolidated advertising across all Google channels.",
          provider: {
            "@type": "Person",
            name: "Slobodan Jelisavac",
            url: "https://www.slobodan-jelisavac.com"
          },
          areaServed: [
            "United States",
            "United Kingdom",
            "Australia",
            "Germany",
            "Serbia",
            "Croatia"
          ]
        }
      : {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Performance Max kampanje",
          description:
            "Upravljanje Performance Max kampanjama za firme koje žele konsolidovano oglašavanje.",
          provider: {
            "@type": "Person",
            name: "Slobodan Jelisavac",
            url: "https://www.slobodan-jelisavac.com"
          }
        };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Dark Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Breadcrumb Navigation */}
          <nav className="text-sm mb-8 text-yellow-400">
            <Link href="/" className="hover:underline">
              {locale === "en" ? "Home" : "Početna"}
            </Link>
            {" / "}
            <Link href="/usluge" className="hover:underline">
              {locale === "en" ? "Services" : "Usluge"}
            </Link>
            {" / "}
            <span className="text-white">Performance Max</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {locale === "en"
                ? "Performance Max campaign management for small and medium businesses"
                : "Performance Max - upravljanje kampanjama za manji i srednji biznis"}
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              {locale === "en" ? (
                <>
                  Performance Max campaigns combine Search, Shopping, Display,
                  YouTube, Gmail, and Discover into one automated campaign. This
                  service was created after receiving numerous requests from
                  small and medium businesses seeking consolidated advertising
                  in a single campaign with proper management.
                </>
              ) : (
                <>
                  Performance Max kampanje kombinuju Search, Shopping, Display,
                  YouTube, Gmail i Discover u jednoj automatizovanoj kampanji.
                  Ova usluga je nastala nakon velikog broja upita od manjih i
                  srednjih preduzeća koja žele konsolidovano oglašavanje u
                  jednoj kampanji i pravilno upravljanje.
                </>
              )}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-slate-800 px-4 py-2 rounded-lg text-sm">
                {locale === "en"
                  ? "9+ years experience"
                  : "10+ godina iskustva"}
              </div>
              <div className="bg-slate-800 px-4 py-2 rounded-lg text-sm">
                {locale === "en"
                  ? "UK Search Awards Winner"
                  : "PMax specijalizacija"}
              </div>
              <div className="bg-slate-800 px-4 py-2 rounded-lg text-sm">
                {locale === "en"
                  ? "50+ brands across 6+ countries"
                  : "Transparentno praćenje"}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kontakt" variant="secondary">
                {locale === "en"
                  ? "Schedule a free consultation"
                  : "Kontaktirajte me"}
              </Button>
              <Button href="/usluge/google-ads-upravljanje" variant="primary">
                {locale === "en"
                  ? "Google Ads Management"
                  : "Google Ads upravljanje"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Intro Section */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6">
            {locale === "en"
              ? "Why Performance Max campaigns"
              : "Zašto Performance Max kampanje"}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              {locale === "en" ? (
                <>
                  Performance Max is a Google advertising format that
                  automatically displays your ad across all Google platforms—from
                  Search results and YouTube videos to Gmail inboxes. For many
                  businesses, this is the ideal way to cover all channels with
                  one budget and one campaign.
                </>
              ) : (
                <>
                  Performance Max je format Google oglašavanja koji automatski
                  prikazuje vašu reklamu na svim Google platformama - od Search
                  rezultata, preko YouTube videa, do Gmail inbox-a. Za mnoge
                  biznise, ovo je idealan način da pokriju sve kanale sa jednim
                  budžetom i jednom kampanjom.
                </>
              )}
            </p>
            <p>
              {locale === "en" ? (
                <>
                  However, Performance Max isn't a "set it and forget it"
                  solution. Automation only works with proper setup, quality
                  assets, and transparent tracking. Without these, your campaign
                  burns budget with no clear visibility on where your money
                  goes.
                </>
              ) : (
                <>
                  Međutim, Performance Max nije "set it and forget it" rešenje.
                  Automatizacija funkcioniše samo sa pravilnim podešavanjima,
                  kvalitetnim asset-ima i transparentnim praćenjem rezultata.
                  Bez toga, kampanja troši budžet bez jasnog uvida gde odlaze
                  vaši novci.
                </>
              )}
            </p>
            <p>
              {locale === "en" ? (
                <>
                  This service is designed for companies that want the benefits
                  of PMax campaigns with expert management and transparency. I
                  use advanced scripts and data extraction techniques that give
                  you insights Google doesn't show by default.
                </>
              ) : (
                <>
                  Ova usluga je dizajnirana za firme koje žele prednosti PMax
                  kampanja uz stručno upravljanje i transparentnost. Koristim
                  napredne skripte i tehnike za izvore podataka koje vam daju
                  uvid koji Google standardno ne prikazuje.
                </>
              )}
            </p>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Who is Performance Max service for"
              : "Za koga je Performance Max usluga"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "Sometimes this approach is right, sometimes it isn't. For many companies it simply works—that's why this service exists."
              : "Nekad je ovaj pristup pravi, nekad nije. Za mnoge firme jednostavno funkcioniše - zato je ova usluga i napravljena."}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <ul className="space-y-3 text-gray-700">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">✓</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Challenges with Performance Max campaigns"
              : "Izazovi sa Performance Max kampanjama"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "PMax campaigns come with specific challenges that need to be addressed with the right approach."
              : "PMax kampanje nose specifične izazove koje treba rešiti pravilnim pristupom."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge) => (
            <Card key={challenge.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {challenge.title}
              </h3>
              <p className="text-gray-600">{challenge.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "How I work with Performance Max campaigns"
              : "Kako radim sa Performance Max kampanjama"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "A combination of transparency, strategy, and proper structure."
              : "Kombinacija transparentnosti, strategije i pravilne strukture."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {approach.map((item) => (
            <Card key={item.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en" ? "Ideal clients" : "Idealni klijenti"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "Performance Max works best for specific types of businesses."
              : "Performance Max najbolje funkcioniše za određene tipove biznisa."}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <ul className="space-y-3 text-gray-700">
              {idealClients.map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <p className="text-sm text-gray-500 mt-6">
            {locale === "en" ? (
              <>
                Note: For budgets over $5,000/month and need for granular
                control, I recommend{" "}
                <Link
                  href="/usluge/google-ads-upravljanje"
                  className="underline"
                >
                  full Google Ads management
                </Link>{" "}
                with a combination of multiple campaign types. For eCommerce
                businesses, consider{" "}
                <Link href="/usluge/google-shopping" className="underline">
                  Google Shopping campaigns
                </Link>{" "}
                as an alternative or complement.
              </>
            ) : (
              <>
                Napomena: Za budžete preko EUR 5,000/mesečno i potrebu za
                granularnom kontrolom, preporučujem{" "}
                <Link
                  href="/usluge/google-ads-upravljanje"
                  className="underline"
                >
                  kompletno Google Ads upravljanje
                </Link>{" "}
                sa kombinacijom više tipova kampanja. Za eCommerce biznise,
                razmotrite{" "}
                <Link href="/usluge/google-shopping" className="underline">
                  Google Shopping kampanje
                </Link>{" "}
                kao alternativu ili dopunu.
              </>
            )}
          </p>
        </div>
      </Section>

      {/* FAQ Section - Accordion Style */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Frequently asked questions"
              : "Često postavljana pitanja"}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                {faq.question}
              </summary>
              <div className="px-6 pb-4 pt-2 text-gray-600 border-t border-gray-100">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Dark CTA Section */}
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              {locale === "en"
                ? "Interested in Performance Max management?"
                : "Zainteresovani za Performance Max upravljanje?"}
            </h2>
            <p className="text-gray-300 mb-8">
              {locale === "en"
                ? "Contact me for more information and let's see if this approach is the right choice for your business."
                : "Kontaktirajte me za više informacija i da vidimo da li je ovaj pristup pravi izbor za vaš biznis."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/kontakt" variant="secondary">
                {locale === "en"
                  ? "Get started with PMax"
                  : "Kontaktirajte me za više informacija"}
              </Button>
              <Button href="/case-studies" variant="primary">
                {locale === "en" ? "View case studies" : "Pogledajte rezultate"}
              </Button>
            </div>
            <div className="text-sm text-gray-400 mt-8 space-x-3">
              <Link
                href="/usluge/google-shopping"
                className="hover:text-yellow-400 transition-colors"
              >
                {locale === "en"
                  ? "Google Shopping campaigns"
                  : "Google Shopping kampanje"}
              </Link>
              <span>•</span>
              <Link
                href="/usluge/search-kampanje"
                className="hover:text-yellow-400 transition-colors"
              >
                {locale === "en" ? "Search campaigns" : "Search kampanje"}
              </Link>
              <span>•</span>
              <Link
                href="/blog/performance-max-vodic"
                className="hover:text-yellow-400 transition-colors"
              >
                {locale === "en"
                  ? "Performance Max guide"
                  : "Performance Max vodič"}
              </Link>
              <span>•</span>
              <Link
                href="/usluge/google-ads-upravljanje"
                className="hover:text-yellow-400 transition-colors"
              >
                {locale === "en"
                  ? "Google Ads management"
                  : "Google Ads upravljanje"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
