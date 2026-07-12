import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";
import { UserCheck, KeyRound, FileBarChart, Coins } from "lucide-react";
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
      ? "Google Ads Agency — Senior-Led Boutique | Digital Jelisavac"
      : "Google Ads Agencija Srbija - Senior Vodi Vaš Nalog | Digital Jelisavac",
    description: isEn
      ? "Digital Jelisavac is a senior-led boutique Google Ads agency run personally by Slobodan Jelisavac — no junior account managers, transparent reporting, you own the account. 3.7x average ROAS (eCommerce), 3x UK Search Awards. From $2,500/month."
      : "Digital Jelisavac je boutique Google Ads agencija koju lično vodi Slobodan Jelisavac - bez junior account managera, transparentan izveštaj, vi ste vlasnik naloga. 3.7x prosečan ROAS (eCommerce), 3x UK Search Awards. Vođenje kampanja od €700/mes.",
    locale,
    path: "/services/google-ads-agency",
    srPath: "/usluge/google-ads-agencija",
  });
}

export default async function GoogleAdsAgencijaPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === "en";

  const iconProps = { size: 28, strokeWidth: 1.5 } as const;

  // What you get — deliverables
  const deliverables: { icon: ReactNode; title: string; description: string }[] = isEn
    ? [
        {
          icon: <UserCheck {...iconProps} className="text-gray-900" />,
          title: "A senior runs your account, not a junior",
          description:
            "Strategy and execution are handled by one senior specialist. No account passed between trainees learning on your budget, no manager acting as a go-between."
        },
        {
          icon: <FileBarChart {...iconProps} className="text-gray-900" />,
          title: "Reporting you can actually read",
          description:
            "Every month you see exactly where the budget went and what it returned. The report is the invoice — no vanity metrics, no black box."
        },
        {
          icon: <KeyRound {...iconProps} className="text-gray-900" />,
          title: "You own your account",
          description:
            "Ad account, conversion history, and audiences stay in your name. If we ever part ways, you keep everything. No hostage situations."
        },
        {
          icon: <Coins {...iconProps} className="text-gray-900" />,
          title: "Profit-First, not ROAS theatre",
          description:
            "I optimize toward profit and margin, not a revenue number that looks good in a slide but loses money on low-margin products."
        }
      ]
    : [
        {
          icon: <UserCheck {...iconProps} className="text-gray-900" />,
          title: "Nalog vodi senior, ne junior",
          description:
            "Strategiju i izvršenje radi jedna senior osoba. Nema naloga koji se predaje pripravnicima na uvežbavanje, nema account managera kao posrednika."
        },
        {
          icon: <FileBarChart {...iconProps} className="text-gray-900" />,
          title: "Izveštaj koji se stvarno čita",
          description:
            "Svakog meseca vidite tačno gde je otišao budžet i šta je vratio. Izveštaj je račun - bez vanity metrika, bez crne kutije."
        },
        {
          icon: <KeyRound {...iconProps} className="text-gray-900" />,
          title: "Vi ste vlasnik svog naloga",
          description:
            "Ad nalog, istorija konverzija i publike ostaju na vaše ime. Ako se ikada raziđemo, sve zadržavate vi. Nema situacije da vam je nalog talac agencije."
        },
        {
          icon: <Coins {...iconProps} className="text-gray-900" />,
          title: "Profit-First, ne ROAS teatar",
          description:
            "Optimizujem na profit i maržu, ne na prihod koji lepo izgleda u slajdu a gubi novac na proizvodima sa niskom maržom."
        }
      ];

  // Process — 4 steps
  const processSteps = isEn
    ? [
        {
          number: 1,
          title: "Free consultation",
          description:
            "A 20-minute call about your goals, current account state, and what growth would actually mean for the business."
        },
        {
          number: 2,
          title: "Audit and strategy",
          description:
            "I review the account, find where money leaks, and lay out a prioritized plan with clear, honest projections — no promised percentages."
        },
        {
          number: 3,
          title: "Onboarding and setup",
          description:
            "MCC access, tracking verification, and agreed reporting cadence. You get a shared document with goals and an access checklist before we start."
        },
        {
          number: 4,
          title: "Optimization and scaling",
          description:
            "Continuous senior-level optimization, monthly reporting with a live call, and scaling of what already works."
        }
      ]
    : [
        {
          number: 1,
          title: "Besplatna konsultacija",
          description:
            "20-minutni poziv o vašim ciljevima, trenutnom stanju naloga i tome šta bi rast konkretno značio za biznis."
        },
        {
          number: 2,
          title: "Audit i strategija",
          description:
            "Pregledam nalog, nađem gde curi novac i postavim prioritizovan plan sa jasnim, iskrenim projekcijama - bez obećanih procenata."
        },
        {
          number: 3,
          title: "Onboarding i setup",
          description:
            "MCC pristup, provera trackinga i dogovorena dinamika reportinga. Pre početka dobijate zajednički dokument sa ciljevima i checklistom pristupa."
        },
        {
          number: 4,
          title: "Optimizacija i skaliranje",
          description:
            "Kontinuirana optimizacija na senior nivou, mesečni izveštaj sa live pozivom i skaliranje onoga što već radi."
        }
      ];

  // Comparison rows — boutique vs big agency vs freelancer
  const comparisonRows = isEn
    ? [
        {
          criterion: "Who runs your account",
          boutique: "One senior specialist, start to finish",
          bigAgency: "Junior account manager, senior only on calls",
          freelancer: "One person, seniority varies widely"
        },
        {
          criterion: "Account ownership",
          boutique: "Yours — account stays in your name",
          bigAgency: "Often held by the agency",
          freelancer: "Usually yours"
        },
        {
          criterion: "Reporting",
          boutique: "Transparent — the report is the invoice",
          bigAgency: "Polished dashboards, often vanity metrics",
          freelancer: "Depends on the person"
        },
        {
          criterion: "Contract lock-in",
          boutique: "Month-to-month, no long-term tie",
          bigAgency: "6-12 month contracts common",
          freelancer: "Flexible, but continuity risk"
        },
        {
          criterion: "Decision speed",
          boutique: "Direct, no layers",
          bigAgency: "Slower — layers and approvals",
          freelancer: "Fast"
        },
        {
          criterion: "Continuity risk",
          boutique: "Low — same person over time",
          bigAgency: "Staff turnover, account handoffs",
          freelancer: "High if they get sick or busy"
        }
      ]
    : [
        {
          criterion: "Ko vodi vaš nalog",
          boutique: "Jedna senior osoba, od početka do kraja",
          bigAgency: "Junior account manager, senior samo na pozivima",
          freelancer: "Jedna osoba, nivo iskustva varira"
        },
        {
          criterion: "Vlasništvo naloga",
          boutique: "Vaše - nalog ostaje na vaše ime",
          bigAgency: "Često drži agencija",
          freelancer: "Obično vaše"
        },
        {
          criterion: "Izveštavanje",
          boutique: "Transparentno - izveštaj je račun",
          bigAgency: "Uglancani dashboardi, često vanity metrike",
          freelancer: "Zavisi od osobe"
        },
        {
          criterion: "Vezivanje ugovorom",
          boutique: "Mesec po mesec, bez dugoročnog vezivanja",
          bigAgency: "Česti ugovori na 6-12 meseci",
          freelancer: "Fleksibilno, ali rizik kontinuiteta"
        },
        {
          criterion: "Brzina odluka",
          boutique: "Direktno, bez slojeva",
          bigAgency: "Sporije - slojevi i odobrenja",
          freelancer: "Brzo"
        },
        {
          criterion: "Rizik kontinuiteta",
          boutique: "Nizak - ista osoba tokom vremena",
          bigAgency: "Fluktuacija kadra, predaja naloga",
          freelancer: "Visok ako se razboli ili zatrpa"
        }
      ];

  // Who we do / don't fit — qualification block
  const goodFit = isEn
    ? [
        "You have a real product or service and want long-term, measurable growth",
        "You spend (or are ready to spend) $10k+/month on ads",
        "You value a direct line to the person doing the work over a big-name logo",
        "You want to own your account and your data, permanently",
        "eCommerce, B2B lead gen, or SaaS where results are measurable"
      ]
    : [
        "Imate stvaran proizvod ili uslugu i želite dugoročan, merljiv rast",
        "Ulažete (ili ste spremni da ulažete) €1.500+ mesečno u oglase",
        "Više vam znači direktna linija sa osobom koja radi nego veliki logo",
        "Želite da trajno budete vlasnik svog naloga i svojih podataka",
        "eCommerce, B2B lead gen ili SaaS gde se rezultat može meriti"
      ];

  const badFit = isEn
    ? [
        "You want the cheapest possible management and treat ads as a commodity",
        "You expect guaranteed percentages before anyone has seen the account",
        "You are not ready to invest a serious monthly budget yet",
        "You want a big team of names on a slide rather than one accountable senior",
        "You need a channel I don't focus on as the core of the work"
      ]
    : [
        "Tražite najjeftinije moguće vođenje i tretirate oglase kao robu",
        "Očekujete garantovane procente pre nego što je iko video nalog",
        "Još niste spremni da uložite ozbiljan mesečni budžet",
        "Želite veliki tim imena na slajdu, a ne jednu odgovornu senior osobu",
        "Treba vam kanal koji nije u fokusu ovog posla"
      ];

  // Proofs
  const results = isEn
    ? [
        { value: "3.7x", label: "average ROAS (eCommerce)" },
        { value: "3x", label: "UK Search Awards" },
        { value: "20+", label: "accounts managed" }
      ]
    : [
        { value: "3.7x", label: "prosečan ROAS (eCommerce)" },
        { value: "3x", label: "UK Search Awards" },
        { value: "20+", label: "vođenih naloga" }
      ];

  // FAQ
  const faqs = isEn
    ? [
        {
          question: "How much does a Google Ads agency cost?",
          answer:
            "It depends on account scope and ad spend. Monthly management with this boutique agency starts from $2,500/month and scales with spend and complexity. For smaller needs there are one-off audits and consultations. You get an exact number after I've reviewed the account, not a promised outcome upfront."
        },
        {
          question: "Google Ads agency or freelancer — which is better?",
          answer:
            "A senior-led boutique gives you the direct access of a freelancer with the reliability of an agency: one accountable senior on the work, but with documented process, backup, and continuity. A pure freelancer is cheaper but carries continuity risk; a big agency adds layers and often hands your account to juniors."
        },
        {
          question: "Do I lose access to my account if I leave?",
          answer:
            "No. The ad account, conversion history, and audiences stay in your name from day one. If we ever part ways, you keep everything — no hostage situations, no exit fees to reclaim your own data."
        },
        {
          question: "How long is the contract?",
          answer:
            "Month-to-month, no long-term lock-in. I recommend a minimum of 3 months so there's enough data for real optimization, but that's a recommendation, not a requirement. Results keep clients, not contracts."
        },
        {
          question: "Do you work with small budgets?",
          answer:
            "Monthly management makes sense above roughly $10k/month in ad spend. Below that, a consultation or a Kickstart setup is usually a better fit — you get a plan you or your team can execute."
        },
        {
          question: "What's the difference between you and a big agency?",
          answer:
            "With a big agency, your account often gets passed between junior account managers while the senior appears only on calls. Here, one senior handles strategy and execution directly. Fewer layers means faster decisions, transparent reporting, and clear accountability for the results."
        },
        {
          question: "Which markets and industries do you work with?",
          answer:
            "Serbia-based, working with eCommerce, B2B lead gen, and SaaS brands across the UK, EU, and US. The common thread is measurable results — revenue, leads, or trial conversions — not vanity metrics."
        },
        {
          question: "What does onboarding look like?",
          answer:
            "After the free call and account audit, I request MCC access, verify tracking, agree KPIs and reporting cadence, then implement the strategy in the first 1-2 weeks. You get a shared document with goals, timeline, and an access checklist before we start."
        }
      ]
    : [
        {
          question: "Koliko košta Google Ads agencija u Srbiji?",
          answer:
            "Zavisi od obima naloga i ad spend-a. Mesečno vođenje kampanja u ovoj boutique agenciji počinje od €700 i raste sa budžetom i kompleksnošću. Za manje potrebe tu su jednokratni auditi i konsultacije. Tačnu cifru dobijate posle uvida u nalog, ne unapred obećan rezultat."
        },
        {
          question: "Google Ads agencija ili freelancer?",
          answer:
            "Senior-led boutique agencija vam daje direktnost freelancera uz pouzdanost agencije: jedna odgovorna senior osoba na poslu, ali sa dokumentovanim procesom i kontinuitetom. Čist freelancer je jeftiniji ali nosi rizik kontinuiteta; velika agencija dodaje slojeve i često predaje nalog juniorima."
        },
        {
          question: "Da li gubim pristup nalogu ako odem?",
          answer:
            "Ne. Ad nalog, istorija konverzija i publike ostaju na vaše ime od prvog dana. Ako se ikada raziđemo, sve zadržavate vi - nema situacije da vam je nalog talac, nema naknade da povratite sopstvene podatke."
        },
        {
          question: "Koliko traje ugovor?",
          answer:
            "Mesec po mesec, bez dugoročnog vezivanja. Preporučujem minimum 3 meseca da bude dovoljno podataka za pravu optimizaciju, ali to je preporuka, ne obaveza. Klijente zadržavaju rezultati, ne ugovori."
        },
        {
          question: "Radite li sa malim budžetima?",
          answer:
            "Mesečno vođenje ima smisla iznad otprilike €1.500 mesečnog ad spend-a. Ispod toga, konsultacija ili Kickstart setup su obično bolji izbor - dobijate plan koji vi ili vaš tim možete sami da izvršite."
        },
        {
          question: "Šta je razlika između vas i velikih agencija?",
          answer:
            "Kod velike agencije vaš nalog često prolazi kroz junior account managere, dok se senior pojavljuje samo na pozivima. Ovde jedna senior osoba vodi i strategiju i izvršenje direktno. Manje slojeva znači brže odluke, transparentan izveštaj i jasnu odgovornost za rezultat."
        },
        {
          question: "Sa kojim tržištima i industrijama radite?",
          answer:
            "Baza je u Srbiji, radim sa eCommerce, B2B lead gen i SaaS brendovima u Srbiji, regionu, UK-u i EU. Zajednička nit je merljiv rezultat - prihod, lead-ovi ili trial konverzije - a ne vanity metrike."
        },
        {
          question: "Kako izgleda onboarding?",
          answer:
            "Nakon besplatnog poziva i audita naloga, tražim MCC pristup, proverim tracking, dogovaramo KPI-jeve i dinamiku reportinga, pa implementiram strategiju u prve 1-2 nedelje. Pre početka dobijate zajednički dokument sa ciljevima, rokovima i checklistom pristupa."
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
        name: "Google Ads Agency — Senior-Led Boutique",
        description:
          "Senior-led boutique Google Ads agency run personally by Slobodan Jelisavac. Transparent reporting, account ownership stays with the client, no junior account managers. Search, Shopping, Performance Max, and remarketing for eCommerce and B2B.",
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
        name: "Google Ads agencija - senior-led boutique",
        description:
          "Boutique Google Ads agencija koju lično vodi Slobodan Jelisavac. Transparentan izveštaj, vlasništvo naloga ostaje kod klijenta, bez junior account managera. Search, Shopping, Performance Max i remarketing za eCommerce i B2B u Srbiji, UK i EU.",
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
            description: "Mesečno vođenje Google Ads kampanja, već od €700"
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
            item: "https://www.slobodan-jelisavac.com/en/services"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Google Ads Agency",
            item: "https://www.slobodan-jelisavac.com/en/services/google-ads-agency"
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
            item: "https://www.slobodan-jelisavac.com/sr/usluge"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Google Ads agencija",
            item: "https://www.slobodan-jelisavac.com/sr/usluge/google-ads-agencija"
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
                {isEn ? "Google Ads Agency" : "Google Ads agencija"}
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {isEn
                ? "A Google Ads agency where a senior runs your account — not juniors"
                : "Google Ads agencija koju vodi senior, ne juniori"}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              {isEn ? (
                <>
                  <strong className="text-white">Digital Jelisavac</strong> is a{" "}
                  <strong className="text-white">senior-led boutique Google Ads agency</strong>,
                  run personally by Slobodan Jelisavac. Serbia-based, working with eCommerce and
                  B2B brands across the UK, EU, and US. No junior account managers, no black-box
                  reporting, and you own your account. Focus:{" "}
                  <strong className="text-white">profit, not ROAS theatre</strong>.
                </>
              ) : (
                <>
                  <strong className="text-white">Digital Jelisavac</strong> je{" "}
                  <strong className="text-white">senior-led boutique Google Ads agencija</strong>{" "}
                  koju lično vodi Slobodan Jelisavac. Za eCommerce i B2B kompanije u Srbiji, regionu
                  i inostranstvu. Bez junior account managera, bez izveštaja iz crne kutije, i vi ste
                  vlasnik svog naloga. Fokus:{" "}
                  <strong className="text-white">profit, ne ROAS teatar</strong>.
                </>
              )}
            </p>

            {/* Results — social proof odmah u heroju */}
            <div className="grid grid-cols-3 gap-6 mb-10 max-w-lg">
              {results.map((result) => (
                <div key={result.label}>
                  <p className="text-2xl md:text-3xl font-heading font-bold text-accent">
                    {result.value}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{result.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kontakt" variant="secondary">
                {isEn ? "Book a free 20-minute call" : "Zakažite besplatnih 20 minuta"}
              </Button>
              <Link
                href="/usluge/google-ads-audit"
                className="text-slate-300 hover:text-white underline text-sm self-center transition-colors"
              >
                {isEn ? "Or start with a Google Ads audit →" : "Ili počnite Google Ads auditom →"}
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
              <span>{isEn ? "10+ years of experience" : "10+ godina iskustva"}</span>
              <span>3x UK Search Awards</span>
              <span>{isEn ? "20+ accounts managed" : "20+ vođenih naloga"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Intro */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            {isEn ? (
              <>
                Choosing a <strong>Google Ads agency</strong> usually means choosing between a big
                agency that hands your account to a junior, or a solo freelancer with no backup. A{" "}
                <strong>senior-led boutique agency</strong> is the third option: the direct access of a
                freelancer, with the process and reliability of an agency.
              </>
            ) : (
              <>
                Izbor <strong>Google Ads agencije</strong> obično znači biranje između velike agencije
                koja vaš nalog daje junioru, i solo freelancera bez zamene. <strong>Senior-led boutique
                agencija</strong> je treća opcija: direktnost freelancera uz proces i pouzdanost
                agencije.
              </>
            )}
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            {isEn ? (
              <>
                I&apos;m Slobodan Jelisavac. For 10+ years I&apos;ve run Google Ads campaigns for
                eCommerce and B2B brands, with a 3.7x average ROAS in eCommerce and campaigns that won
                3 UK Search Awards. When you work with this agency, you work directly with me — the
                person actually making the decisions on your account.
              </>
            ) : (
              <>
                Ja sam Slobodan Jelisavac. Preko 10 godina vodim Google Ads kampanje za eCommerce i B2B
                brendove, sa 3.7x prosečnim ROAS-om u eCommerce-u i kampanjama koje su osvojile 3 UK
                Search Awards nagrade. Kada radite sa ovom agencijom, radite direktno sa mnom - osobom
                koja stvarno donosi odluke na vašem nalogu.
              </>
            )}
          </p>
        </div>
      </section>

      {/* What you get — deliverables */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn
              ? "What you get with a boutique Google Ads agency"
              : "Šta dobijate sa boutique Google Ads agencijom"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isEn
              ? "Four things a big agency rarely gives you: a senior on the work, a report you can read, ownership of your account, and optimization toward profit."
              : "Četiri stvari koje velika agencija retko daje: senior na poslu, izveštaj koji se čita, vlasništvo naloga i optimizacija na profit."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((item) => (
            <Card key={item.title} className="h-full">
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-base">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Comparison — boutique vs big agency vs freelancer */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn
              ? "Boutique agency vs big agency vs freelancer"
              : "Boutique agencija naspram velike agencije i freelancera"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isEn
              ? "Same budget, very different experience. Here's how the three options actually compare."
              : "Isti budžet, potpuno drugačije iskustvo. Evo kako se tri opcije stvarno porede."}
          </p>
        </div>
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-heading font-semibold text-gray-900">
                  {isEn ? "Criterion" : "Kriterijum"}
                </th>
                <th className="text-left py-3 px-4 text-sm font-heading font-semibold text-primary">
                  {isEn ? "Boutique (Digital Jelisavac)" : "Boutique (Digital Jelisavac)"}
                </th>
                <th className="text-left py-3 px-4 text-sm font-heading font-semibold text-gray-900">
                  {isEn ? "Big agency" : "Velika agencija"}
                </th>
                <th className="text-left py-3 px-4 text-sm font-heading font-semibold text-gray-900">
                  {isEn ? "Freelancer" : "Freelancer"}
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.criterion} className="border-b border-gray-100 align-top">
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">{row.criterion}</td>
                  <td className="py-3 px-4 text-sm text-gray-900 bg-blue-50/50">{row.boutique}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{row.bigAgency}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{row.freelancer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-8">
          <p className="text-base text-gray-500">
            {isEn ? (
              <>
                Still weighing it up?{" "}
                <Link
                  href={{ pathname: "/blog/[slug]", params: { slug: "agencija-vs-freelancer" } }}
                  className="text-primary underline"
                >
                  Read the full agency vs freelancer breakdown →
                </Link>
              </>
            ) : (
              <>
                Još vagate?{" "}
                <Link
                  href={{ pathname: "/blog/[slug]", params: { slug: "agencija-vs-freelancer" } }}
                  className="text-primary underline"
                >
                  Pročitajte detaljno poređenje agencija naspram freelancera →
                </Link>
              </>
            )}
          </p>
        </div>
      </Section>

      {/* Process — 4 steps */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "How working with us looks" : "Kako izgleda rad sa nama"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isEn
              ? "From first call to measurable results — a simple, transparent process in 4 steps."
              : "Od prvog poziva do merljivih rezultata - jednostavan i transparentan proces u 4 koraka."}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-card"
              >
                <span
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-heading ${
                    index === processSteps.length - 1
                      ? "bg-accent text-gray-900"
                      : "bg-slate-900 text-white"
                  }`}
                >
                  {step.number}
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Who we (don't) fit — qualification block */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "Who we fit — and who we don't" : "Kome odgovaramo, a kome ne"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isEn
              ? "An honest filter. A boutique agency isn't for everyone, and pretending otherwise wastes everyone's time."
              : "Iskren filter. Boutique agencija nije za svakoga, a pretvarati se drugačije samo troši svima vreme."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-card">
            <h3 className="font-heading font-bold text-lg mb-4">
              {isEn ? "A good fit if…" : "Odgovaramo vam ako..."}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-green-600 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-card">
            <h3 className="font-heading font-bold text-lg mb-4">
              {isEn ? "Not a fit if…" : "Ne odgovaramo vam ako..."}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {badFit.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gray-400 flex-shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "Transparent pricing" : "Transparentne cene"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isEn
              ? "No hidden fees, no setup traps. You get an exact number after I've reviewed the account."
              : "Bez skrivenih naknada, bez zamki u setupu. Tačnu cifru dobijate posle uvida u nalog."}
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 items-stretch">
          {/* Management card */}
          <div className="flex flex-col h-full bg-white border-2 border-accent rounded-xl p-6 md:p-8 shadow-card relative">
            <span className="absolute -top-3 left-6 bg-accent text-gray-900 text-xs font-bold px-3 py-1 rounded-md">
              {isEn ? "Core service" : "Osnovna usluga"}
            </span>
            <h3 className="text-xl font-heading font-bold mb-1">
              {isEn ? "Google Ads management" : "Vođenje Google Ads kampanja"}
            </h3>
            <p className="text-2xl font-heading font-bold text-primary mb-1">
              {isEn ? "from $2,500" : "od €700"}
              <span className="text-sm text-gray-500 font-normal">{isEn ? "/mo" : "/mes"}</span>
            </p>
            <p className="text-sm text-gray-500 mb-3">
              {isEn
                ? "Makes sense above ~$10k/month in ad spend — fee scales with spend and complexity."
                : "Ima smisla iznad ~€1.500 mesečnog ad spend-a - cena zavisi od budžeta i kompleksnosti."}
            </p>
            <p className="text-gray-600 text-base mb-4">
              {isEn
                ? "Complete senior-led management: strategy, campaign structure, daily optimization, and monthly reporting with a live call."
                : "Kompletno senior-led vođenje: strategija, struktura kampanja, svakodnevna optimizacija i mesečni izveštaj sa live pozivom."}
            </p>
            <Link
              href="/usluge/google-ads-upravljanje"
              className="text-primary font-semibold text-sm mb-5"
            >
              {isEn ? "See full management details →" : "Vidite sve detalje vođenja →"}
            </Link>
            <Button href="/kontakt" variant="secondary" className="mt-auto w-full">
              {isEn ? "Book a free 20-minute call" : "Zakažite besplatnih 20 minuta"}
            </Button>
          </div>

          {/* Audit / smaller card */}
          <div className="flex flex-col h-full bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-card relative">
            <span className="absolute -top-3 left-6 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-md">
              {isEn ? "Start smaller" : "Počnite manje"}
            </span>
            <h3 className="text-xl font-heading font-bold mb-1">
              {isEn ? "Audit & consultation" : "Audit i konsultacija"}
            </h3>
            <p className="text-2xl font-heading font-bold text-primary mb-1">
              {isEn ? "from $500" : "od €450"}
            </p>
            <p className="text-sm text-gray-500 mb-3">
              {isEn
                ? "For smaller budgets or a second opinion — no monthly commitment."
                : "Za manje budžete ili second opinion - bez mesečne obaveze."}
            </p>
            <p className="text-gray-600 text-base mb-4">
              {isEn
                ? "An independent account review with a written, prioritized action plan you or your team can execute."
                : "Nezavisna analiza naloga sa pisanim, prioritizovanim akcionim planom koji vi ili vaš tim možete sami da izvršite."}
            </p>
            <Link
              href="/usluge/google-ads-audit"
              className="text-primary font-semibold text-sm mb-5"
            >
              {isEn ? "See audit details →" : "Vidite detalje audita →"}
            </Link>
            <Button href="/usluge/google-ads-audit" variant="primary" className="mt-auto w-full">
              {isEn ? "Learn about the audit" : "Saznajte o auditu"}
            </Button>
          </div>
        </div>
      </Section>

      {/* Google Shopping Serbia note */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-card">
          <h2 className="text-xl md:text-2xl font-heading font-bold mb-3">
            {isEn ? "Ready for Google Shopping in Serbia" : "Spremni za Google Shopping u Srbiji"}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            {isEn ? (
              <>
                Google Shopping is arriving in Serbia from November 2026, and the setup is ready to
                move on day one.{" "}
                <Link href="/usluge/google-shopping" className="text-primary underline">
                  See how we approach Google Shopping →
                </Link>
              </>
            ) : (
              <>
                Google Shopping stiže u Srbiju od novembra 2026, a setup je spreman da krene od prvog
                dana.{" "}
                <Link href="/usluge/google-shopping" className="text-primary underline">
                  Vidite kako pristupamo Google Shopping-u →
                </Link>
              </>
            )}
          </p>
        </div>
      </Section>

      <RelatedGlossaryTerms
        slugs={["troas", "poas", "quality-score", "smart-bidding", "budget-pacing", "tcpa"]}
        locale={locale}
      />

      {/* FAQ — proper accordion */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn
              ? "Frequently asked questions about our Google Ads agency"
              : "Često postavljana pitanja o Google Ads agenciji"}
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
            {isEn
              ? "Looking for a Google Ads agency that actually shows up?"
              : "Tražite Google Ads agenciju koja se zaista posveti?"}
          </h2>
          <p className="text-slate-300 mb-8">
            {isEn
              ? "Book a free 20-minute consultation and let's see if a senior-led boutique is the right fit. No obligations."
              : "Zakažite besplatnu 20-minutnu konsultaciju i proverimo da li je senior-led boutique pravi izbor za vas. Bez obaveza."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              {isEn ? "Book a free 20-minute call" : "Zakažite besplatnih 20 minuta"}
            </Button>
            <Link
              href="/usluge/google-ads-audit"
              className="text-slate-300 hover:text-white underline text-sm self-center transition-colors"
            >
              {isEn ? "Or schedule a Google Ads audit →" : "Ili zakažite Google Ads audit →"}
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: "kako-izabrati-google-ads-konsultanta" } }}
              className="hover:text-white transition-colors underline"
            >
              {isEn ? "How to choose a Google Ads consultant" : "Kako izabrati Google Ads konsultanta"}
            </Link>
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: "agencija-vs-freelancer" } }}
              className="hover:text-white transition-colors underline"
            >
              {isEn ? "Agency vs freelancer" : "Agencija ili freelancer"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
