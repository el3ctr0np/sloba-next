import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";
import { Banknote, Clock, Frown } from "lucide-react";
import { RelatedGlossaryTerms } from "@/components/RelatedGlossaryTerms";
import { buildMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return buildMetadata({
    title: isEn
      ? "Google Ads Management — Senior Runs Your Account | Slobodan Jelisavac"
      : "Google Ads Usluge - Vođenje Kampanja sa Seniorom | Slobodan Jelisavac",
    description: isEn
      ? "I personally run Google Ads accounts for eCommerce and B2B - 10+ years, 3.7x average ROAS, UK and US markets. No junior handoffs. From $2,500/month. Book a free consultation."
      : "Google Ads usluge iz jedne ruke - deset godina lično vodim naloge za eCommerce i B2B. Bez juniora na nalogu, vođenje kampanja od €700 mesečno.",
    locale,
    path: "/services/google-ads-management",
    srPath: "/usluge/google-ads-upravljanje",
  });
}

export default async function GoogleAdsUpravljanjePage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === "en";

  const iconProps = { size: 28, strokeWidth: 1.5 } as const;
  const ctaLabel = isEn ? "Book a free 20-minute call" : "Zakažite besplatnih 20 minuta";

  const problems: { icon: ReactNode; title: string; description: string }[] = isEn
    ? [
        {
          icon: <Banknote {...iconProps} className="text-gray-900" />,
          title: "Budget spent, no clear results",
          description:
            "Campaigns run, but you don't know what's actually driving conversions, at what cost, or whether it's worth it at all."
        },
        {
          icon: <Clock {...iconProps} className="text-gray-900" />,
          title: "No time to watch the account daily",
          description:
            "Google Ads needs daily attention — auction, budget, and competitor shifts. You run a business, not an ad account."
        },
        {
          icon: <Frown {...iconProps} className="text-gray-900" />,
          title: "An agency that never delivered",
          description:
            "Campaigns got set up, a report showed up every month — but there was never a real strategy or measurable ROI behind it."
        }
      ]
    : [
        {
          icon: <Banknote {...iconProps} className="text-gray-900" />,
          title: "Trošite budžet bez jasnih rezultata",
          description:
            "Kampanje rade, ali ne znate tačno šta donosi konverzije, po kojoj ceni i da li se to uopšte isplati."
        },
        {
          icon: <Clock {...iconProps} className="text-gray-900" />,
          title: "Nemate vremena da pratite nalog svaki dan",
          description:
            "Google Ads traži svakodnevnu pažnju - promene u aukciji, budžetu i konkurenciji. Vi vodite biznis, ne nalog."
        },
        {
          icon: <Frown {...iconProps} className="text-gray-900" />,
          title: "Prošli ste kroz agenciju koja nije isporučila",
          description:
            "Kampanje su podešene, izveštaj je stizao svaki mesec, ali prave strategije i merljivog ROI-ja nikad nije bilo."
        }
      ];

  const whatYouGet: { title: string; description: ReactNode }[] = isEn
    ? [
        {
          title: "Search campaigns",
          description: (
            <>
              Direct targeting of people already searching for what you sell.{" "}
              <Link
                href={{ pathname: "/blog/[slug]", params: { slug: "google-search-campaigns-guide" } }}
                className="text-primary underline"
              >
                Guide →
              </Link>
            </>
          )
        },
        {
          title: "Shopping and Performance Max",
          description: (
            <>
              Feed optimization and PMax run with clear audience signals, not a black box.{" "}
              <Link
                href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-guide" } }}
                className="text-primary underline"
              >
                Shopping guide →
              </Link>{" "}
              <Link
                href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-guide" } }}
                className="text-primary underline"
              >
                PMax guide →
              </Link>
            </>
          )
        },
        {
          title: "Display and remarketing",
          description: (
            <>
              Bringing back visitors who didn&apos;t convert the first time.{" "}
              <Link
                href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-guide" } }}
                className="text-primary underline"
              >
                Guide →
              </Link>
            </>
          )
        },
        {
          title: "YouTube ads",
          description: (
            <>
              Video advertising, when it actually fits your budget and goal.{" "}
              <Link
                href={{ pathname: "/blog/[slug]", params: { slug: "youtube-advertising-guide" } }}
                className="text-primary underline"
              >
                Guide →
              </Link>
            </>
          )
        },
        {
          title: "Daily optimization",
          description: "Bid adjustments, negative keywords, and ad A/B testing every week — not once a month."
        },
        {
          title: "Tracking and monthly reporting",
          description:
            "GA4 and conversion tracking set up correctly, custom dashboards, and a monthly call to walk through results."
        }
      ]
    : [
        {
          title: "Search kampanje",
          description: (
            <>
              Direktno targetiranje kupaca koji već traže vaš proizvod.{" "}
              <Link
                href={{ pathname: "/blog/[slug]", params: { slug: "google-search-kampanje-vodic" } }}
                className="text-primary underline"
              >
                Vodič →
              </Link>
            </>
          )
        },
        {
          title: "Shopping i Performance Max",
          description: (
            <>
              Feed optimizacija i PMax uz jasne audience signale, ne crna kutija.{" "}
              <Link
                href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }}
                className="text-primary underline"
              >
                Shopping vodič →
              </Link>{" "}
              <Link
                href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-vodic" } }}
                className="text-primary underline"
              >
                PMax vodič →
              </Link>
            </>
          )
        },
        {
          title: "Display i remarketing",
          description: (
            <>
              Vraćanje posetilaca koji nisu kupili iz prve.{" "}
              <Link
                href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }}
                className="text-primary underline"
              >
                Vodič →
              </Link>
            </>
          )
        },
        {
          title: "YouTube oglasi",
          description: (
            <>
              Video oglašavanje, kad ima smisla za vaš budžet i cilj.{" "}
              <Link
                href={{ pathname: "/blog/[slug]", params: { slug: "youtube-oglasavanje-vodic" } }}
                className="text-primary underline"
              >
                Vodič →
              </Link>
            </>
          )
        },
        {
          title: "Svakodnevna optimizacija",
          description: "Bid adjustments, negativne ključne reči i A/B testiranje oglasa svake nedelje, ne jednom mesečno."
        },
        {
          title: "Tracking i mesečni report",
          description:
            "Ispravno podešen GA4 i conversion tracking, custom dashboards i mesečni poziv sa pregledom rezultata."
        }
      ];

  const processSteps: { number: number; title: string; description: string }[] = isEn
    ? [
        {
          number: 1,
          title: "Free call",
          description: "20 minutes about your goals and the current state of the account."
        },
        {
          number: 2,
          title: "Audit and strategy",
          description: "Detailed analysis of the existing account with clear projections."
        },
        {
          number: 3,
          title: "Onboarding and setup",
          description: "MCC access, campaign structure, and tracking set up correctly."
        },
        {
          number: 4,
          title: "Optimization and reporting",
          description: "Daily work on the account and a monthly call to review results."
        }
      ]
    : [
        {
          number: 1,
          title: "Besplatan poziv",
          description: "20 minuta o vašim ciljevima i trenutnom stanju naloga."
        },
        {
          number: 2,
          title: "Audit i strategija",
          description: "Detaljna analiza postojećeg naloga sa jasnim projekcijama."
        },
        {
          number: 3,
          title: "Onboarding i setup",
          description: "MCC pristup, struktura kampanja i ispravno podešen tracking."
        },
        {
          number: 4,
          title: "Optimizacija i reporting",
          description: "Svakodnevni rad na nalogu i mesečni poziv sa pregledom rezultata."
        }
      ];

  const faqs: { question: string; answer: string; answerRich?: ReactNode }[] = isEn
    ? [
        {
          question: "How long until I see results?",
          answer:
            "I run the first optimizations right after taking over the account. Visible improvement comes after 4-6 weeks, full optimization takes 2-3 months — that's how long Google's algorithm needs to learn the account."
        },
        {
          question: "Do you need access to my Google Ads account?",
          answer:
            "Yes, admin access is required so I can implement changes. The account stays under your ownership — I get access through MCC (My Client Center)."
        },
        {
          question: "What if I already have campaigns that work?",
          answer:
            "I start with an audit of the current account and look for room to improve before touching anything. I don't tear down what's working — I build on it."
        },
        {
          question: "Do you work with small budgets?",
          answer:
            "I don't take on monthly management under $2,500/month — I can't deliver it at a senior level below that. For smaller budgets there's an audit ($1,500 US / £750 UK) and consulting ($200/hr)."
        },
        {
          question: "How often will we talk?",
          answer:
            "At least one monthly call plus a written report. For anything urgent, I'm reachable by email or Slack within 24 hours."
        },
        {
          question: "Is this the same as hiring a Google Ads agency?",
          answer:
            "Not quite. This page describes the scope of work — what I actually do on your account each month. If you're weighing agency vs. freelancer vs. in-house, that decision is better answered on the Google Ads agency page.",
          answerRich: (
            <>
              Not quite. This page describes the scope of work — what I actually do on your
              account each month. If you&apos;re weighing agency vs. freelancer vs. in-house, that
              decision is better answered on the{" "}
              <Link href="/usluge/google-ads-agencija" className="text-primary underline">
                Google Ads agency page
              </Link>
              .
            </>
          )
        },
        {
          question: "What's the minimum contract length?",
          answer:
            "I recommend a minimum of three months for testing and optimization. No long-term lock-in — results keep me, not contracts."
        }
      ]
    : [
        {
          question: "Koliko vremena treba da se vide rezultati?",
          answer:
            "Prve optimizacije radim odmah po preuzimanju naloga. Vidljiva poboljšanja dolaze posle 4-6 nedelja, a puna optimizacija traži 2-3 meseca - toliko treba Google algoritmu da nauči nalog."
        },
        {
          question: "Da li je potreban pristup mom Google Ads nalogu?",
          answer:
            "Da, admin pristup je neophodan da bih mogao da sprovedem sve izmene. Nalog ostaje u vašem vlasništvu - ja pristupam kroz MCC (My Client Center)."
        },
        {
          question: "Šta ako već imam kampanje koje rade?",
          answer:
            "Počinjem auditom postojećeg stanja i tražim prilike za poboljšanje pre bilo kakve promene. Ono što funkcioniše ne rušim - nadograđujem."
        },
        {
          question: "Da li radite i sa malim budžetima?",
          answer:
            "Mesečno vođenje ispod €700 ne radim - ne mogu da ga isporučim na senior nivou. Za manje budžete tu su audit (€450) i konsultacije (€150/sat)."
        },
        {
          question: "Koliko često ćemo komunicirati?",
          answer:
            "Minimum jedan mesečni poziv i pisani report. Za hitna pitanja dostupan sam mejlom ili preko Slack-a u roku od 24h."
        },
        {
          question: "Da li je ovo isto što i Google Ads agencija?",
          answer:
            "Nije potpuno isto. Ova stranica opisuje obim usluge - šta tačno radim na vašem nalogu svakog meseca. Ako birate između modela saradnje (agencija, freelancer, in-house), tu odluku najbolje rešava stranica o Google Ads agenciji.",
          answerRich: (
            <>
              Nije potpuno isto. Ova stranica opisuje obim usluge - šta tačno radim na vašem
              nalogu svakog meseca. Ako birate između modela saradnje (agencija, freelancer,
              in-house), tu odluku najbolje rešava{" "}
              <Link href="/usluge/google-ads-agencija" className="text-primary underline">
                stranica o Google Ads agenciji
              </Link>
              .
            </>
          )
        },
        {
          question: "Koja je minimalna dužina saradnje?",
          answer:
            "Preporučujem minimum tri meseca za testiranje i optimizaciju. Nema dugoročnih ugovora - rezultati me zadržavaju, ne ugovor."
        }
      ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Slobodan Jelisavac",
    url: "https://www.slobodan-jelisavac.com",
    jobTitle: isEn ? "Google Ads Consultant" : "Google Ads Konsultant"
  };

  const serviceSchema = isEn
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Google Ads Management Services",
        description:
          "Professional Google Ads management for eCommerce and B2B companies globally. Search, Shopping, Performance Max, Display, and YouTube campaigns, run by a senior consultant.",
        provider: {
          "@type": "Person",
          name: "Slobodan Jelisavac",
          url: "https://www.slobodan-jelisavac.com",
          jobTitle: "Google Ads Consultant",
          knowsAbout: [
            "Google Ads",
            "Performance Marketing",
            "eCommerce Advertising",
            "B2B Lead Generation"
          ]
        },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Australia" },
          { "@type": "Country", name: "Germany" },
          { "@type": "Country", name: "Serbia" },
          { "@type": "Country", name: "Croatia" }
        ],
        serviceType: "Google Ads Management",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "2500",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "2500",
            priceCurrency: "USD",
            unitText: "monthly",
            description: "Monthly Google Ads management — from $2,500/month"
          }
        }
      }
    : {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Google oglašavanje - upravljanje Google Ads nalogom",
        alternateName: "Google Ads usluge",
        description:
          "Profesionalne Google Ads usluge - vođenje Google Ads kampanja za eCommerce i B2B kompanije u Srbiji, UK i EU. Search, Shopping, Performance Max, Display i YouTube kampanje, iz jedne senior ruke.",
        provider: {
          "@type": "Person",
          name: "Slobodan Jelisavac",
          url: "https://www.slobodan-jelisavac.com",
          jobTitle: "Google Ads Konsultant",
          knowsAbout: [
            "Google Ads",
            "Performance Marketing",
            "eCommerce Advertising",
            "B2B Lead Generation"
          ]
        },
        areaServed: [
          { "@type": "Country", name: "Serbia" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Germany" },
          { "@type": "Country", name: "Croatia" }
        ],
        serviceType: "Google Ads Management",
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: "700",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "700",
            priceCurrency: "EUR",
            unitText: "mesečno",
            description: "Mesečno vođenje Google Ads naloga - već od €700"
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

  const breadcrumbSchema = isEn
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.slobodan-jelisavac.com" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://www.slobodan-jelisavac.com/en/services"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Google Ads Management",
            item: "https://www.slobodan-jelisavac.com/en/services/google-ads-management"
          }
        ]
      }
    : {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Početna", item: "https://www.slobodan-jelisavac.com" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Usluge",
            item: "https://www.slobodan-jelisavac.com/sr/usluge"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Google Ads upravljanje",
            item: "https://www.slobodan-jelisavac.com/sr/usluge/google-ads-upravljanje"
          }
        ]
      };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero - kome je namenjeno, sta se desava kad me angazujete, jedan dokaz */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {isEn ? "Home" : "Početna"}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/usluge" className="hover:text-white transition-colors">
                  {isEn ? "Services" : "Usluge"}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-accent font-medium">
                {isEn ? "Google Ads Management" : "Google Ads upravljanje"}
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            {!isEn && (
              <p className="text-xs uppercase tracking-wider text-slate-400 mb-3">Google Ads usluge</p>
            )}
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {isEn
                ? "Google Ads management where a senior runs your account — not a team of juniors"
                : "Vođenje Google Ads kampanja: senior na vašem nalogu, ne tim juniora"}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              {isEn ? (
                <>
                  This is for eCommerce and B2B companies that want their Google Ads account run
                  by <strong className="text-white">one senior person</strong> — not a team of
                  juniors learning on your budget. Once I take over, the first 1-2 weeks go into
                  audit and setup, then daily optimization and a monthly report take over.
                </>
              ) : (
                <>
                  Ovo je za eCommerce i B2B firme koje žele da im nalog vodi{" "}
                  <strong className="text-white">jedna senior osoba</strong> - ne tim koji uči na
                  njihovom budžetu. Kad preuzmem nalog, prvih 1-2 nedelje idu na audit i setup, a
                  posle toga sledi svakodnevna optimizacija i mesečni report.
                </>
              )}
            </p>

            {/* Jedan dokaz */}
            <div className="mb-8">
              <p className="text-3xl md:text-4xl font-heading font-bold text-accent">3.7x</p>
              <p className="text-sm text-slate-400 mt-1">
                {isEn
                  ? "average ROAS across eCommerce accounts I run"
                  : "prosečan ROAS u eCommerce nalozima koje vodim"}
              </p>
            </div>

            <Button href="/kontakt" variant="secondary">
              {ctaLabel}
            </Button>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
              <span>{isEn ? "10+ years of experience" : "10+ godina iskustva"}</span>
              <span>3x UK Search Awards{isEn ? " winner" : ""}</span>
              <span>{isEn ? "50+ brands across 6+ countries" : "50+ brendova iz 6+ zemalja"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem - tri stavke */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "Three things I see on most accounts" : "Tri stvari koje najčešće vidim na nalozima"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isEn
              ? "Patterns that repeat regardless of industry or account size."
              : "Obrasci koji se ponavljaju bez obzira na industriju ili veličinu naloga."}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <Card key={problem.title} className="h-full">
              <div className="flex-shrink-0 mb-3">{problem.icon}</div>
              <h3 className="text-lg font-heading font-semibold mb-2">{problem.title}</h3>
              <p className="text-gray-600 text-base">{problem.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Sta dobijate - numerisano */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "What you get" : "Šta dobijate"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isEn
              ? "Campaigns built around your margins and goals — the mix depends on budget and industry."
              : "Kampanje gradim oko vaših marži i ciljeva - kombinacija zavisi od budžeta i industrije."}
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {whatYouGet.map((item, index) => (
            <div
              key={item.title}
              className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-card"
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-heading bg-slate-900 text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600 text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Dokaz - slucaj iz prakse, NDA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            {isEn ? "Proof, not a promise" : "Dokaz, ne obećanje"}
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            {isEn ? (
              <>
                One case from practice: a UK eCommerce client on Shopping campaigns, working
                together for 2+ years and still active. POAS (profit on ad spend) sits at{" "}
                <strong>1.78x</strong>, revenue is in the six-figure range (GBP).
              </>
            ) : (
              <>
                Jedan primer iz prakse: UK eCommerce klijent na Shopping kampanjama, saradnja
                duže od dve godine, i dalje je aktivna. POAS (profit on ad spend) je{" "}
                <strong>1.78x</strong>, prihod je u šestocifrenom rasponu (GBP).
              </>
            )}
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            {isEn
              ? "No client name, no absolute revenue figure — that's an NDA, not a marketing trick. Across the eCommerce accounts I run, average ROAS is 3.7x, and the work has earned 3x UK Search Awards."
              : "Bez imena klijenta i bez apsolutne cifre prihoda - to je NDA, ne marketinški trik. U eCommerce nalozima koje vodim prosečan ROAS je 3.7x, a rad je nagrađen sa tri UK Search Awards."}
          </p>
        </div>
      </Section>

      {/* Cena i proces - vidljivo */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "Price and process" : "Cena i proces"}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-card mb-10">
          <p className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">
            {isEn ? "From $2,500" : "Od €700"}
            <span className="text-sm text-gray-500 font-normal">{isEn ? "/mo" : "/mes"}</span>
          </p>
          <p className="text-gray-600 text-base mb-2">
            {isEn
              ? "For brands with an ad spend budget of $10k+/month."
              : "Za budžete od €1.500+/mesečno ad spend-a."}
          </p>
          <p className="text-gray-500 text-sm">
            {isEn ? (
              <>
                Smaller budget? An audit ($1,500 US / £750 UK) or consulting ($200/hr) — see the{" "}
                <Link href="/usluge/konsultacije" className="text-primary underline">
                  consulting page
                </Link>
                .
              </>
            ) : (
              <>
                Manji budžet? Audit (€450) ili{" "}
                <Link href="/usluge/konsultacije" className="text-primary underline">
                  konsultacije (€150/sat)
                </Link>
                .
              </>
            )}
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-card"
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-heading bg-slate-900 text-white">
                {step.number}
              </span>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-1">{step.title}</h3>
                <p className="text-gray-600 text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/kontakt" variant="secondary">
            {ctaLabel}
          </Button>
        </div>
      </Section>

      <RelatedGlossaryTerms
        slugs={["smart-bidding", "tcpa", "troas", "quality-score", "budget-pacing", "bid-adjustments"]}
        locale={locale}
      />

      {/* FAQ - pitanja koja se stvarno postavljaju */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "Questions people actually ask" : "Pitanja koja se stvarno postavljaju"}
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
              <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
                {faq.answerRich ?? faq.answer}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Final CTA - isti poziv na akciju, treci put */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            {isEn ? "Ready for Google Ads that actually works?" : "Spremni za Google oglašavanje koje zaista radi?"}
          </h2>
          <p className="text-slate-300 mb-8">
            {isEn
              ? "Book a free 20-minute call and let's see if it makes sense to work together. No obligations."
              : "Zakažite besplatnu 20-minutnu konsultaciju i vidimo da li ima smisla da radimo zajedno. Bez obaveza."}
          </p>
          <Button href="/kontakt" variant="secondary">
            {ctaLabel}
          </Button>
        </div>
      </section>
    </>
  );
}
