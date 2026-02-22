import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";
import { HelpCircle, Banknote, BookOpen, Clock } from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title:
        "Google Ads Starter Package from €500 | Professional Campaign Setup — Slobodan Jelisavac",
      description:
        "Professional Google Ads setup for beginners. Campaigns that work from day one + training for self-management. Packages starting at €500 with tracking, training, and 30-day support."
    };
  }

  return {
    title:
      "Google Ads Starter Paket od €300 | Profesionalni Setup — Slobodan Jelisavac",
    description:
      "Profesionalni Google Ads setup za početnike. Kampanje koje rade od prvog dana + edukacija za samostalno vođenje. Paketi od €300."
  };
}

export default async function StarterPaketPage({ params }: Props) {
  const { locale } = await params;

  const idealFor =
    locale === "en"
      ? [
          "You're new to Google Ads",
          "You want professional campaign structure without monthly contracts",
          "You have time to monitor and optimize campaigns yourself",
          "You want to learn how Google Ads works",
          "You plan to manage campaigns yourself after initial setup"
        ]
      : [
          "Tek počinjete sa Google Ads-om",
          "Želite profesionalnu strukturu kampanja bez mesečnog ugovora",
          "Imate vremena da sami pratite i optimizujete kampanje",
          "Želite da naučite kako Google Ads funkcioniše",
          "Planirate sami voditi kampanje nakon početnog setup-a"
        ];

  const notFor =
    locale === "en"
      ? [
          "You don't have time to monitor campaigns (you need ongoing management)",
          "Your ad budget exceeds €1,500/month (full management is better)",
          "You prefer results without learning the platform",
          "You're looking for an agency to handle everything"
        ]
      : [
          "Nemate vremena za praćenje kampanja (potreban vam je ongoing management)",
          "Budžet za ads je preko €1,500 mesečno (bolje vam je full upravljanje)",
          "Ne želite da učite već samo rezultate",
          "Tražite agenciju koja će sve voditi umesto vas"
        ];

  const iconProps = { size: 28, strokeWidth: 1.5 } as const;

  const problems: { icon: ReactNode; title: string; description: string }[] =
    locale === "en"
      ? [
          {
            icon: <HelpCircle {...iconProps} className="text-gray-900" />,
            title: "Don't know where to start",
            description:
              "The Google Ads interface is confusing. Campaigns, ad groups, keywords, bidding — everything seems complicated."
          },
          {
            icon: <Banknote {...iconProps} className="text-gray-900" />,
            title: "Fear of wasting budget",
            description:
              "You're worried about launching campaigns that burn budget without results. You've read the horror stories."
          },
          {
            icon: <BookOpen {...iconProps} className="text-gray-900" />,
            title: "Too many YouTube tutorials",
            description:
              "Every tutorial says something different. You don't know what actually works and what's outdated."
          },
          {
            icon: <Clock {...iconProps} className="text-gray-900" />,
            title: "Agencies are too expensive",
            description:
              "€500+ monthly for management is out of budget, but you want a professional approach."
          }
        ]
      : [
          {
            icon: <HelpCircle {...iconProps} className="text-gray-900" />,
            title: "Ne znate odakle da počnete",
            description:
              "Google Ads interfejs je konfuzan. Kampanje, ad grupe, ključne reči, bidding — sve izgleda komplikovano."
          },
          {
            icon: <Banknote {...iconProps} className="text-gray-900" />,
            title: "Strah od bacanja budžeta",
            description:
              "Plaši vas da pokrenete kampanje koje će spaliti budžet bez rezultata. Čitali ste priče o neuspesima."
          },
          {
            icon: <BookOpen {...iconProps} className="text-gray-900" />,
            title: "Previše YouTube tutorijala",
            description:
              "Svaki tutorial kaže nešto različito. Ne znate šta zaista funkcioniše a šta je već zastarelo."
          },
          {
            icon: <Clock {...iconProps} className="text-gray-900" />,
            title: "Agencija je preskupa",
            description:
              "€500+ mesečno za upravljanje je van budžeta, ali želite profesionalan pristup."
          }
        ];

  const solutions =
    locale === "en"
      ? [
          {
            title: "Proven campaign structure",
            description:
              "You get campaigns set up according to best practices proven in real accounts — not generic YouTube tutorials."
          },
          {
            title: "Properly configured tracking",
            description:
              "GTM, conversion tracking, GA4 linking — everything set up correctly so you know exactly what's working."
          },
          {
            title: "Hands-on training with Q&A",
            description:
              "45-60 minute 1-on-1 training where I walk you through everything, answer your questions, and make sure you can manage campaigns independently."
          },
          {
            title: "30 days support for questions",
            description:
              "After setup you get email support for questions while you're learning to manage campaigns yourself."
          }
        ]
      : [
          {
            title: "Proven struktura kampanja",
            description:
              "Dobijate kampanje postavljene prema best practice-ima koji se dokazano pokazuju u realnim nalozima — ne prema generičkim YouTube tutorijalima."
          },
          {
            title: "Pravilno podešen tracking",
            description:
              "GTM, conversion tracking, GA4 linking — sve pravilno setup-ovano da tačno znate šta radi i šta ne."
          },
          {
            title: "Live edukacija sa proverom razumevanja",
            description:
              "45-60 minuta 1-on-1 training gde ne samo objašnjavam kako šta radi, već proveravamo da razumete i možete sami dalje."
          },
          {
            title: "30 dana podrške za pitanja",
            description:
              "Nakon setup-a dobijate email podršku za pitanja dok se ne osposobite da samostalno vodite kampanje."
          }
        ];

  const inclusions =
    locale === "en"
      ? [
          {
            title: "Google Ads setup",
            items: [
              "Professional campaign structure tailored to your business",
              "Search campaign with 20-50 keywords",
              "Responsive Search Ads (2-3 per ad group)",
              "Extensions setup (sitelinks, callouts, structured snippets)",
              "Initial negative keyword list",
              "Basic remarketing setup"
            ]
          },
          {
            title: "Conversion tracking",
            items: [
              "Google Tag Manager setup",
              "2-3 conversion actions (purchase, lead, phone call)",
              "Google Analytics 4 integration",
              "Verification that tracking works correctly"
            ]
          },
          {
            title: "Training and documentation",
            items: [
              "1-on-1 live training session (45-60 min)",
              "Written documentation specific to your account",
              "Weekly optimization checklist",
              "Video recording of training session (for reference)"
            ]
          },
          {
            title: "Follow-up support",
            items: [
              "30 days email support for questions",
              "Responses within 24h on business days"
            ]
          }
        ]
      : [
          {
            title: "Google Ads setup",
            items: [
              "Profesionalna struktura kampanja prilagođena vašem biznisu",
              "Search kampanja sa 20-50 ključnih reči",
              "Responsive Search Ads (2-3 po ad grupi)",
              "Extensions setup (sitelinks, callouts, structured snippets)",
              "Početna lista negativnih ključnih reči",
              "Basic remarketing setup"
            ]
          },
          {
            title: "Conversion tracking",
            items: [
              "Google Tag Manager setup",
              "2-3 conversion actions (purchase, lead, phone call)",
              "Google Analytics 4 integracija",
              "Provera da tracking tačno radi"
            ]
          },
          {
            title: "Edukacija i dokumentacija",
            items: [
              "1-on-1 live training session (45-60 min)",
              "Pisana dokumentacija specifična za vaš nalog",
              "Checklist za nedeljnu optimizaciju",
              "Video snimak training sesije (za podsetnik)"
            ]
          },
          {
            title: "Follow-up podrška",
            items: [
              "30 dana email podrške za pitanja",
              "Odgovori u roku od 24h radnim danima"
            ]
          }
        ];

  const processSteps =
    locale === "en"
      ? [
          {
            number: 1,
            title: "Kickoff call and discovery",
            description:
              "15-30 min conversation about your business, goals, budget and current state (if you already have campaigns)."
          },
          {
            number: 2,
            title: "Research and planning",
            description:
              "Keyword research, competitor analysis and creating campaign structure tailored to your industry."
          },
          {
            number: 3,
            title: "Campaign and tracking setup",
            description:
              "Creating campaigns, ad groups, ads, extensions and configuring conversion tracking."
          },
          {
            number: 4,
            title: "Live training session",
            description:
              "45-60 min 1-on-1 training where we go through the account, I explain what's been done and how to optimize going forward."
          },
          {
            number: 5,
            title: "Campaigns live + 30 days support",
            description:
              "Campaigns are active, you monitor performance. I'm available for questions via email for the next month."
          }
        ]
      : [
          {
            number: 1,
            title: "Kickoff poziv i discovery",
            description:
              "15-30 min razgovor o vašem biznisu, ciljevima, budžetu i trenutnom stanju (ako već imate kampanje)."
          },
          {
            number: 2,
            title: "Istraživanje i planiranje",
            description:
              "Keyword research, analiza konkurencije i kreiranje strukture kampanja prilagođene vašoj industriji."
          },
          {
            number: 3,
            title: "Setup kampanja i trackinga",
            description:
              "Kreiranje kampanja, ad grupa, oglasa, extensions-a i podešavanje conversion trackinga."
          },
          {
            number: 4,
            title: "Live training session",
            description:
              "45-60 min 1-on-1 edukacija gde prolazimo kroz nalog, objašnjavam šta je urađeno i kako dalje optimizovati."
          },
          {
            number: 5,
            title: "Kampanje live + 30 dana podrške",
            description:
              "Kampanje su aktivne, vi pratite performanse. Dostupan sam za pitanja putem email-a narednih mesec dana."
          }
        ];

  const results =
    locale === "en"
      ? [
          {
            value: "€500",
            label: "from — professional entry point to Google Ads"
          },
          { value: "45-60min", label: "live training tailored to your account" },
          { value: "30 days", label: "email support after setup" }
        ]
      : [
          {
            value: "€300",
            label: "od — ulazna tačka u Google Ads sa profesionalnim pristupom"
          },
          { value: "45-60min", label: "live edukacije prilagođene vašem nalogu" },
          { value: "30 dana", label: "email podrške nakon setup-a" }
        ];

  const faqs =
    locale === "en"
      ? [
          {
            question: "Do I need previous Google Ads experience?",
            answer:
              "No. The Starter Package is designed for complete beginners. The training session covers the basics needed to run campaigns, and written documentation stays with you as a reference."
          },
          {
            question: "What ad budget do I need?",
            answer:
              "I recommend a minimum of €500 monthly for ad spend. Ideally €800-1,000 to start so Google's algorithm has enough data to learn. The Starter Package is a one-time fee — this is your ad spend budget."
          },
          {
            question: "Can I upgrade to full management later?",
            answer:
              "Yes. Many clients start with the Starter Package, and when campaigns grow or they need more time, they move to ongoing management. The setup I do stays — we just build on it."
          },
          {
            question: "How much time weekly is needed for campaign maintenance?",
            answer:
              "For basic maintenance, count on 30-60 minutes weekly. This includes checking performance, adding negative keywords, and minor bid adjustments."
          },
          {
            question: "What if my campaigns don't deliver results?",
            answer:
              "Google Ads isn't magic — results depend on product, offer, pricing, competition and budget. My job is to set up a structure that eliminates common mistakes and gives you the best chance of success. The training session covers what to track and how to optimize."
          },
          {
            question: "Do you work with eCommerce campaigns?",
            answer:
              "Yes. The eCommerce Starter Package (€700) includes Search + Shopping campaigns, basic feed review and feed optimization recommendations."
          },
          {
            question: "How long from start to live campaigns?",
            answer:
              "Usually 5-7 business days from kickoff call to live campaigns. Depends on how quickly you can provide account access and additional information if needed."
          },
          {
            question: "What if I already have poorly performing campaigns?",
            answer:
              "I start with a quick audit of the current state. If the structure can be fixed, I optimize it. If it's better to start fresh, we create new campaigns with proper structure. Either way, you get a clean setup and understanding of what's next."
          }
        ]
      : [
          {
            question: "Da li mi treba prethodno iskustvo sa Google Ads-om?",
            answer:
              "Ne. Starter paket je dizajniran za potpune početnike. Training sesija pokriva osnove potrebne za vođenje kampanja, a pisana dokumentacija ostaje uz vas kao referenca."
          },
          {
            question: "Koliki budžet za oglase treba da imam?",
            answer:
              "Preporučujem minimum €500 mesečno za ad spend. Idealno je €800-1,000 za početak kako bi Google-ov algoritam imao dovoljno podataka za učenje. Starter paket je jednokratna cena — ovo je vaš ad spend budžet."
          },
          {
            question: "Da li mogu kasnije da nadogradim na full management?",
            answer:
              "Da. Mnogi klijenti počnu sa Starter paketom, a kada kampanje porastu ili im zatreba više vremena, pređu na ongoing upravljanje. Setup koji radim ostaje — samo nadograđujemo."
          },
          {
            question: "Koliko vremena nedeljno treba za održavanje kampanja?",
            answer:
              "Za basic maintenance računajte na 30-60 minuta nedeljno. To uključuje proveru performansi, dodavanje negativnih ključnih reči i minor bid adjustments."
          },
          {
            question: "Šta ako mi kampanje ne donesu rezultate?",
            answer:
              "Google Ads nije magija — rezultati zavise od proizvoda, ponude, cena, konkurencije i budžeta. Moj zadatak je da postavim strukturu koja eliminiše najčešće greške i daje vam najbolje šanse za uspeh. Training sesija pokriva šta da pratite i kako da optimizujete."
          },
          {
            question: "Da li radite i eCommerce kampanje?",
            answer:
              "Da. eCommerce Starter paket (€700) uključuje Search + Shopping kampanju, basic feed review i preporuke za optimizaciju feed-a."
          },
          {
            question: "Koliko traje proces od početka do live kampanja?",
            answer:
              "Obično 5-7 radnih dana od kickoff poziva do live kampanja. Zavisi od toga koliko brzo možete da obezbedite pristup nalogu i dodatne informacije ako zatreba."
          },
          {
            question: "Šta ako već imam kampanje koje rade loše?",
            answer:
              "Počinjem sa quick auditom postojećeg stanja. Ako struktura može da se popravi, radim optimizaciju. Ako je bolje krenuti iznova, kreiramo nove kampanje sa pravilnom strukturom. U oba slučaja dobijate čist setup i razumevanje šta dalje."
          }
        ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Slobodan Jelisavac",
    url: "https://www.slobodan-jelisavac.com",
    jobTitle: "Google Ads Strategist"
  };

  const serviceSchema =
    locale === "en"
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Google Ads Starter Package",
          description:
            "Starter package for beginners with professional Google Ads setup, conversion tracking and training for self-management. Three packages: Basic €500, Standard €700, eCommerce €900.",
          provider: {
            "@type": "Person",
            name: "Slobodan Jelisavac",
            url: "https://www.slobodan-jelisavac.com",
            jobTitle: "Google Ads Strategist",
            knowsAbout: [
              "Google Ads",
              "Google Ads Setup",
              "Conversion Tracking",
              "Campaign Structure"
            ]
          },
          areaServed: [
            { "@type": "Country", name: "Serbia" },
            { "@type": "Country", name: "United Kingdom" },
            { "@type": "Country", name: "Germany" },
            { "@type": "Country", name: "Croatia" },
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "Australia" }
          ],
          serviceType: "Google Ads Setup and Training",
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: "500",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "500",
              priceCurrency: "EUR",
              unitText: "one-time",
              description: "Prices start at €500 for Basic Starter Package"
            }
          }
        }
      : {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Google Ads Starter paket",
          description:
            "Starter paket za početnike sa profesionalnim Google Ads setup-om, conversion trackingom i edukacijom za samostalno vođenje kampanja. Tri paketa: Basic €300, Standard €500, eCommerce €700.",
          provider: {
            "@type": "Person",
            name: "Slobodan Jelisavac",
            url: "https://www.slobodan-jelisavac.com",
            jobTitle: "Google Ads Strategist",
            knowsAbout: [
              "Google Ads",
              "Google Ads Setup",
              "Conversion Tracking",
              "Campaign Structure"
            ]
          },
          areaServed: [
            { "@type": "Country", name: "Serbia" },
            { "@type": "Country", name: "United Kingdom" },
            { "@type": "Country", name: "Germany" },
            { "@type": "Country", name: "Croatia" }
          ],
          serviceType: "Google Ads Setup and Training",
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: "300",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "300",
              priceCurrency: "EUR",
              unitText: "jednokratno",
              description: "Cene počinju od €300 za Basic Starter paket"
            }
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
              item: "https://www.slobodan-jelisavac.com/usluge"
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Starter Package",
              item: "https://www.slobodan-jelisavac.com/usluge/starter-paket"
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
              name: "Starter paket",
              item: "https://www.slobodan-jelisavac.com/usluge/starter-paket"
            }
          ]
        };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero — dark, impact-driven */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-slate-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                >
                  {locale === "en" ? "Home" : "Početna"}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/usluge"
                  className="hover:text-white transition-colors"
                >
                  {locale === "en" ? "Services" : "Usluge"}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-yellow-400 font-medium">
                {locale === "en" ? "Starter Package" : "Starter paket"}
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {locale === "en"
                ? "Google Ads Starter Package — professional setup for self-management"
                : "Google Ads Starter paket — profesionalni setup za samostalno vođenje"}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              {locale === "en" ? (
                <>
                  Want to launch <strong className="text-white">Google Ads</strong> but don't have
                  budget for monthly management? The Starter Package delivers professional
                  campaign structure, properly configured tracking and training for
                  self-management. Instead of learning by trial and error, you get a{" "}
                  <strong className="text-white">proven setup that works from day one</strong>.
                </>
              ) : (
                <>
                  Želite da pokrenete <strong className="text-white">Google Ads</strong> ali nemate budžet za mesečno
                  upravljanje? Starter paket donosi profesionalnu strukturu kampanja, pravilno
                  podešen tracking i edukaciju za samostalno vođenje. Umesto učenja metodom
                  pokušaja i greške, dobijate <strong className="text-white">proven setup koji funkcioniše od prvog dana</strong>.
                </>
              )}
            </p>

            {/* Results — social proof odmah u heroju */}
            <div className="grid grid-cols-3 gap-6 mb-10 max-w-lg">
              {results.map((result) => (
                <div key={result.label}>
                  <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">
                    {result.value}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    {result.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kontakt" variant="secondary">
                {locale === "en"
                  ? "Request Starter Package"
                  : "Zatražite Starter paket"}
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
              <span>
                {locale === "en"
                  ? "9+ years of experience"
                  : "10+ godina iskustva"}
              </span>
              <span>3x UK Search Awards</span>
              <span>
                {locale === "en"
                  ? "50+ campaigns set up"
                  : "50+ setup-ovanih kampanja"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Intro */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            {locale === "en" ? (
              <>
                The <strong>Google Ads Starter Package</strong> is designed for business owners and
                marketers who want to launch Google advertising professionally — without monthly
                management contracts. You get fully configured campaigns, conversion tracking
                and training for self-management.
              </>
            ) : (
              <>
                <strong>Google Ads Starter paket</strong> je dizajniran za vlasnike preduzeća i
                marketare koji žele da pokrenu Google oglašavanje profesionalno — bez mesečnih
                ugovora za upravljanje. Dobijate kompletno podešene kampanje, conversion tracking
                i edukaciju za samostalno vođenje.
              </>
            )}
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {locale === "en"
              ? "This is your entry point to Google Ads. Instead of wasting time and budget on experimentation, you start with a structure proven in real campaigns — from local service businesses to eCommerce stores."
              : "Ovo je vaša ulazna tačka u Google Ads. Umesto da gubite vreme i budžet na eksperimentisanje, počinjete sa strukturom koja se dokazala u stvarnim kampanjama — od lokalne uslužne delatnosti do eCommerce prodavnica."}
          </p>
        </div>
      </section>

      {/* Problem — PAS framework */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Sound familiar?"
              : "Prepoznajete li se u ovome?"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "Most people who start with Google Ads on their own hit the same obstacles. Don't waste time and budget — start right away with the proper approach."
              : "Većina ljudi koji krenu sami sa Google Ads-om nailazi na iste prepreke. Ne gubite vreme i budžet — krenite odmah sa pravilnim pristupom."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <Card key={problem.title} className="h-full">
              <div className="mb-3">{problem.icon}</div>
              <h3 className="text-lg font-heading font-semibold mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600 text-sm">{problem.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Solution */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "What You Get with the Starter Package"
              : "Šta dobijate sa Starter paketom"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "Proven approach to campaign setup that eliminates common beginner mistakes and sets you on the path to success."
              : "Proven pristup setup-u kampanja koji eliminiše najčešće greške početnika i postavlja vas na put uspeha."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution) => (
            <Card key={solution.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {solution.title}
              </h3>
              <p className="text-gray-600">{solution.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* What's included */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "What's Included"
              : "Šta je uključeno u Starter paket"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "Everything you need to launch Google Ads the right way — from campaign setup to training and support."
              : "Sve što vam treba da pokrenete Google Ads na pravi način — od setup-a kampanja do edukacije i podrške."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {inclusions.map((block) => (
            <Card key={block.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-4">
                {block.title}
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Who is this for — ICP targeting */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Is the Starter Package Right for You?"
              : "Da li je Starter paket za vas?"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "The Starter Package works best for certain client profiles. Check if you're a fit before requesting."
              : "Starter paket najbolje funkcioniše za određene profile klijenata. Proverite da li odgovarate pre nego što zatražite."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white border-2 border-gray-900 rounded-xl p-6 shadow-card">
            <h3 className="font-heading font-bold text-lg mb-4">
              {locale === "en"
                ? "The Starter Package is ideal if"
                : "Starter paket je idealan ako"}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {idealFor.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-green-600 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border-2 border-gray-900 rounded-xl p-6 shadow-card">
            <h3 className="font-heading font-bold text-lg mb-4">
              {locale === "en"
                ? "The Starter Package is not for you if"
                : "Starter paket nije za vas ako"}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {notFor.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            {locale === "en" ? (
              <>
                If you need ongoing management, check out{" "}
                <Link
                  href="/usluge/google-ads-upravljanje"
                  className="text-primary underline"
                >
                  Google Ads Management →
                </Link>
              </>
            ) : (
              <>
                Ako vam treba ongoing upravljanje, pogledajte{" "}
                <Link
                  href="/usluge/google-ads-upravljanje"
                  className="text-primary underline"
                >
                  Google Ads upravljanje →
                </Link>
              </>
            )}
          </p>
        </div>
      </Section>

      {/* Process — sequential, not grid */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "How the Starter Package Works"
              : "Kako izgleda proces Starter paketa"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "From first call to live campaigns — transparent process in 5 steps."
              : "Od prvog poziva do live kampanja — transparentan proces u 5 koraka."}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex items-start gap-4 bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card"
              >
                <span
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-heading ${
                    index === processSteps.length - 1
                      ? "bg-yellow-400 text-gray-900"
                      : "bg-gray-900 text-white"
                  }`}
                >
                  {step.number}
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Choose the Right Package"
              : "Izaberite paket koji vam odgovara"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "Transparent pricing with no hidden fees. All options include fully configured campaigns, tracking and training."
              : "Transparentne cene bez skrivenih troškova. Sve opcije uključuju kompletno podešene kampanje, tracking i edukaciju."}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Basic Starter */}
          <Card className="h-full">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              {locale === "en" ? "For local business" : "Za lokalni biznis"}
            </p>
            <h3 className="text-xl font-heading font-bold mb-1">
              Basic Starter
            </h3>
            <p className="text-2xl font-heading font-bold text-primary mb-3">
              {locale === "en" ? "€500" : "€300"}
              <span className="text-sm text-gray-500 font-normal">
                {" "}
                {locale === "en" ? "one-time" : "jednokratno"}
              </span>
            </p>
            <p className="text-gray-600 text-sm mb-4">
              {locale === "en"
                ? "For simple services, local business and smaller companies that want simple setup without complications."
                : "Za jednostavne usluge, lokalni biznis i manja preduzeća koja žele jednostavan setup bez komplikovanja."}
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-5">
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "1 Search campaign (up to 3 ad groups)"
                  : "1 Search kampanja (do 3 ad grupe)"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "Up to 30 keywords"
                  : "Do 30 ključnih reči"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Basic conversion tracking
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                45-min training session
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "2 weeks email support"
                  : "2 nedelje email support"}
              </li>
            </ul>
            <Button href="/kontakt" variant="primary">
              {locale === "en"
                ? "Request Basic Package"
                : "Zatražite Basic paket"}
            </Button>
          </Card>

          {/* Standard Starter */}
          <div className="bg-white border-2 border-yellow-400 rounded-lg p-6 shadow-card relative">
            <span className="absolute -top-3 left-6 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded">
              {locale === "en" ? "Most Popular" : "Najpopularniji"}
            </span>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              {locale === "en"
                ? "For most small businesses"
                : "Za većinu malih biznisa"}
            </p>
            <h3 className="text-xl font-heading font-bold mb-1">
              Standard Starter
            </h3>
            <p className="text-2xl font-heading font-bold text-primary mb-3">
              {locale === "en" ? "€700" : "€500"}
              <span className="text-sm text-gray-500 font-normal">
                {" "}
                {locale === "en" ? "one-time" : "jednokratno"}
              </span>
            </p>
            <p className="text-gray-600 text-sm mb-4">
              {locale === "en"
                ? "For most small businesses and lead generation. Professional setup with all necessary components for successful start."
                : "Za većinu malih biznisa i lead generation. Profesionalan setup sa svim potrebnim komponentama za uspešan start."}
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-5">
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "2 Search campaigns (up to 6 ad groups)"
                  : "2 Search kampanje (do 6 ad grupa)"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "Up to 50 keywords"
                  : "Do 50 ključnih reči"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Basic remarketing setup
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Full conversion tracking + GA4 linking
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                60-min training session
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en" ? "30 days email support" : "30 dana email support"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "Complete documentation"
                  : "Kompletna dokumentacija"}
              </li>
            </ul>
            <Button href="/kontakt" variant="secondary">
              {locale === "en"
                ? "Request Standard Package"
                : "Zatražite Standard paket"}
            </Button>
          </div>

          {/* eCommerce Starter */}
          <Card className="h-full">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              {locale === "en" ? "For online stores" : "Za online prodavnice"}
            </p>
            <h3 className="text-xl font-heading font-bold mb-1">
              eCommerce Starter
            </h3>
            <p className="text-2xl font-heading font-bold text-primary mb-3">
              {locale === "en" ? "€900" : "€700"}
              <span className="text-sm text-gray-500 font-normal">
                {" "}
                {locale === "en" ? "one-time" : "jednokratno"}
              </span>
            </p>
            <p className="text-gray-600 text-sm mb-4">
              {locale === "en"
                ? "For small online stores that want professional Search + Shopping campaign setup with basic feed optimization."
                : "Za male online prodavnice koje žele profesionalan setup Search + Shopping kampanja sa osnovnom feed optimizacijom."}
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-5">
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Search + Shopping {locale === "en" ? "campaigns (basic setup)" : "kampanja (basic setup)"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "Basic feed review and recommendations"
                  : "Basic feed review i preporuke"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Remarketing setup
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                eCommerce tracking (purchase, add to cart)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "90-min training (2 sessions)"
                  : "90-min training (2 sesije)"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en" ? "30 days email support" : "30 dana email support"}
              </li>
            </ul>
            <Button href="/kontakt" variant="primary">
              {locale === "en"
                ? "Request eCommerce Package"
                : "Zatražite eCommerce paket"}
            </Button>
          </Card>
        </div>
      </Section>

      {/* What happens after */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "What Happens When Campaigns Grow?"
              : "Šta kada kampanje porastu?"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "The Starter Package prepares you for self-management. When you need help or campaigns outgrow your time, the following options are available."
              : "Starter paket vas osposobljava za samostalno vođenje. Kada zatreba pomoć ili kampanje prerastu vaše vreme, dostupne su sledeće opcije."}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="h-full">
            <h3 className="text-lg font-heading font-semibold mb-3">
              {locale === "en"
                ? "No time for optimization?"
                : "Nemate vremena za optimizaciju?"}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {locale === "en"
                ? "Switch to monthly management where I handle all optimizations, reporting and scaling."
                : "Pređite na mesečno upravljanje gde preuzimam sve optimizacije, reporting i skaliranje."}
            </p>
            <Link
              href="/usluge/google-ads-upravljanje"
              className="text-primary font-semibold text-sm"
            >
              {locale === "en"
                ? "Google Ads Management →"
                : "Google Ads upravljanje →"}
            </Link>
          </Card>
          <Card className="h-full">
            <h3 className="text-lg font-heading font-semibold mb-3">
              {locale === "en"
                ? "Have questions after support period?"
                : "Imate pitanja nakon support perioda?"}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {locale === "en"
                ? "Book a 1-on-1 consultation for specific questions, audit or optimization help."
                : "Zakažite 1-on-1 konsultaciju za specifična pitanja, audit ili pomoć oko optimizacija."}
            </p>
            <Link
              href="/usluge/konsultacije"
              className="text-primary font-semibold text-sm"
            >
              {locale === "en"
                ? "1-on-1 consultations →"
                : "1-on-1 konsultacije →"}
            </Link>
          </Card>
          <Card className="h-full">
            <h3 className="text-lg font-heading font-semibold mb-3">
              {locale === "en"
                ? "Campaigns growing and need scaling?"
                : "Kampanje rastu i treba skaliranje?"}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {locale === "en"
                ? "Let's talk about ongoing partnership — setup stays, we just upgrade the strategy."
                : "Razgovarajmo o ongoing partnership-u — setup ostaje, samo nadograđujemo strategiju."}
            </p>
            <Link href="/kontakt" className="text-primary font-semibold text-sm">
              {locale === "en"
                ? "Let's discuss partnership →"
                : "Razgovarajmo o partnerstvu →"}
            </Link>
          </Card>
        </div>
      </Section>

      {/* FAQ — proper accordion */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Frequently Asked Questions About the Starter Package"
              : "Često postavljana pitanja o Starter paketu"}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="bg-white border-2 border-gray-200 rounded-xl group"
              open={index === 0 ? true : undefined}
            >
              <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
                {faq.question}
                <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
                  &#9660;
                </span>
              </summary>
              <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Ready to launch Google Ads the right way?"
              : "Spremni da pokrenete Google Ads na pravi način?"}
          </h2>
          <p className="text-slate-300 mb-8">
            {locale === "en"
              ? "Book a free consultation and let's check which Starter Package fits you. No commitment."
              : "Zakažite besplatnu konsultaciju i proverimo koji Starter paket vam odgovara. Bez obaveza."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              {locale === "en"
                ? "Request Starter Package"
                : "Zatražite Starter paket"}
            </Button>
            <Link
              href="/usluge/konsultacije"
              className="text-slate-300 hover:text-white underline text-sm self-center transition-colors"
            >
              {locale === "en"
                ? "Or book a consultation →"
                : "Ili zakažite konsultaciju →"}
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
            <Link
              href="/usluge/google-ads-upravljanje"
              className="hover:text-white transition-colors underline"
            >
              {locale === "en"
                ? "Google Ads Management"
                : "Google Ads upravljanje"}
            </Link>
            <Link
              href="/usluge/konsultacije"
              className="hover:text-white transition-colors underline"
            >
              {locale === "en"
                ? "1-on-1 Consultations"
                : "1-on-1 konsultacije"}
            </Link>
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }}
              className="hover:text-white transition-colors underline"
            >
              {locale === "en"
                ? "How much does Google Ads cost?"
                : "Koliko košta Google Ads?"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
