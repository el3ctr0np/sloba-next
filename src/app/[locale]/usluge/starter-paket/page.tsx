import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";
import { Layers, ShieldCheck, ListChecks, Handshake } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return buildMetadata({
    title: isEn
      ? "Google Ads Kickstart — Senior Setup from $990 — Slobodan Jelisavac"
      : "Google Ads Kickstart — senior setup od €690",
    description: isEn
      ? "Senior Google Ads setup for teams with an in-house owner who takes it from there. Architecture, keywords, RSAs, tracking spec, 60-day plan, handover session. From $990."
      : "Senior Google Ads setup za timove koji imaju osobu za dalje vođenje kampanja. Arhitektura naloga, ključne reči, RSA oglasi, tracking specifikacija, 60-dnevni plan, handover sesija. Od €690.",
    locale,
    path: "/services/starter-package",
    srPath: "/usluge/starter-paket",
  });
}

export default async function StarterPaketPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === "en";

  const idealFor = isEn
    ? [
        "You have an in-house person (or you're the founder) who will run campaigns going forward",
        "Planned ad budget of $2,000+/month",
        "A functional website that can support conversion tracking",
        "You want a senior setup once, not a monthly retainer",
        "You can handle day-to-day optimization after handover"
      ]
    : [
        "Imate in-house osobu (ili ste vi founder) koja će voditi kampanje dalje",
        "Planirani ad budžet €1.000+/mesečno",
        "Funkcionalan sajt koji može da podrži conversion tracking",
        "Želite senior setup jednom, ne mesečni retainer",
        "Možete da preuzmete svakodnevnu optimizaciju posle handover-a"
      ];

  const notFor = isEn
    ? [
        "You want someone else to run the account long-term (see Google Ads Management)",
        "No one on your team has time to own campaigns after launch",
        "You need tracking implementation done for you (see below — that's a separate step)",
        "Ad budget under $2,000/month — start with a consultation instead"
      ]
    : [
        "Želite da neko drugi dugoročno vodi nalog (pogledajte Google Ads upravljanje)",
        "Niko u vašem timu nema vremena da preuzme kampanje posle launcha",
        "Treba vam da neko implementira tracking umesto vas (vidi ispod — to je poseban korak)",
        "Ad budžet ispod €1.000/mesečno — krenite radije sa konsultacijom"
      ];

  const iconProps = { size: 28, strokeWidth: 1.5 } as const;

  const pillars: { icon: ReactNode; title: string; description: string }[] = isEn
    ? [
        {
          icon: <Layers {...iconProps} className="text-gray-900" />,
          title: "Account architecture, not templates",
          description:
            "Campaign and ad group structure built around how your business actually sells — not a generic template pulled from a tutorial."
        },
        {
          icon: <ListChecks {...iconProps} className="text-gray-900" />,
          title: "Written keyword and negative strategy",
          description:
            "Full keyword lists with match types, plus a negative keyword list to stop budget leaking on irrelevant searches from day one."
        },
        {
          icon: <ShieldCheck {...iconProps} className="text-gray-900" />,
          title: "A tracking gate, not a guess",
          description:
            "I don't launch anything until conversions are verified. If your tracking isn't ready, the launch waits — that's the point."
        },
        {
          icon: <Handshake {...iconProps} className="text-gray-900" />,
          title: "Handover built for a real handoff",
          description:
            "A 60-minute session and a 60-day plan so whoever owns the account next knows exactly what to do and why."
        }
      ]
    : [
        {
          icon: <Layers {...iconProps} className="text-gray-900" />,
          title: "Arhitektura naloga, ne template",
          description:
            "Struktura kampanja i ad grupa napravljena prema tome kako vaš biznis stvarno prodaje — ne generički template iz tutorijala."
        },
        {
          icon: <ListChecks {...iconProps} className="text-gray-900" />,
          title: "Pisana keyword i negative strategija",
          description:
            "Kompletne liste ključnih reči sa match types, plus lista negativnih reči da budžet ne curi na irelevantne pretrage od prvog dana."
        },
        {
          icon: <ShieldCheck {...iconProps} className="text-gray-900" />,
          title: "Tracking gate, ne pretpostavka",
          description:
            "Ne puštam ništa live dok konverzije nisu verifikovane. Ako tracking nije spreman, launch čeka — to je poenta."
        },
        {
          icon: <Handshake {...iconProps} className="text-gray-900" />,
          title: "Handover napravljen za realnu predaju",
          description:
            "60-minutna sesija i 60-dnevni plan da osoba koja preuzima nalog tačno zna šta da radi i zašto."
        }
      ];

  const inclusions = isEn
    ? [
        {
          title: "Account & campaign architecture",
          items: [
            "Campaign and ad group structure tailored to your business model",
            "Keyword research with match types",
            "Negative keyword lists",
            "Extensions setup (sitelinks, callouts, structured snippets)"
          ]
        },
        {
          title: "Ad copy",
          items: [
            "Written Responsive Search Ads per ad group",
            "Headline and description variations aligned to search intent",
            "Feed review for eCommerce accounts (Shopping/PMax readiness)"
          ]
        },
        {
          title: "Tracking specification & verification",
          items: [
            "Precise specification of what must be measured and how",
            "Verification of conversions before anything goes live",
            "Implementation itself is not included — see note below"
          ]
        },
        {
          title: "Plan and handover",
          items: [
            "Strategy consultation before the build (included — otherwise $200/hr)",
            "60-day action plan for the account owner",
            "60-minute handover session (recorded)",
            "Written documentation specific to your account"
          ]
        }
      ]
    : [
        {
          title: "Arhitektura naloga i kampanja",
          items: [
            "Struktura kampanja i ad grupa prilagođena vašem biznis modelu",
            "Keyword research sa match types",
            "Liste negativnih ključnih reči",
            "Extensions setup (sitelinks, callouts, structured snippets)"
          ]
        },
        {
          title: "Oglasi",
          items: [
            "Napisani Responsive Search Ads po ad grupi",
            "Varijacije naslova i opisa usklađene sa search intent-om",
            "Feed review za eCommerce naloge (Shopping/PMax spremnost)"
          ]
        },
        {
          title: "Tracking specifikacija i verifikacija",
          items: [
            "Precizna specifikacija šta mora da se meri i kako",
            "Verifikacija konverzija pre nego što bilo šta ide live",
            "Sama implementacija nije uključena — vidi napomenu ispod"
          ]
        },
        {
          title: "Plan i handover",
          items: [
            "Strategijska konsultacija pre setupa (uključena — inače €150/sat)",
            "60-dnevni akcioni plan za osobu koja vodi nalog",
            "60-minutna handover sesija (snimljena)",
            "Pisana dokumentacija specifična za vaš nalog"
          ]
        }
      ];

  const processSteps = isEn
    ? [
        {
          number: 1,
          title: "20-minute scoping call",
          description:
            "We confirm fit — budget, in-house ownership, site readiness — and define the exact scope before any quote."
        },
        {
          number: 2,
          title: "Research and architecture",
          description:
            "Keyword research, competitor review, and account/campaign structure built for your specific business."
        },
        {
          number: 3,
          title: "Ad copy and tracking spec",
          description:
            "RSAs written per ad group, plus a written tracking specification covering exactly what needs to be measured."
        },
        {
          number: 4,
          title: "Tracking verification gate",
          description:
            "Your team (or your vendor) implements tracking. I verify it's firing correctly before campaigns launch — no exceptions."
        },
        {
          number: 5,
          title: "Handover session",
          description:
            "60-minute session walking through the account, the 60-day plan, and what to watch in the first weeks."
        }
      ]
    : [
        {
          number: 1,
          title: "20-minutni scoping poziv",
          description:
            "Potvrđujemo fit — budžet, in-house vlasništvo naloga, spremnost sajta — i definišemo tačan obim pre bilo kakve ponude."
        },
        {
          number: 2,
          title: "Istraživanje i arhitektura",
          description:
            "Keyword research, pregled konkurencije i struktura naloga/kampanja napravljena za vaš specifičan biznis."
        },
        {
          number: 3,
          title: "Oglasi i tracking specifikacija",
          description:
            "RSA oglasi napisani po ad grupi, plus pisana tracking specifikacija koja pokriva tačno šta treba da se meri."
        },
        {
          number: 4,
          title: "Tracking verification gate",
          description:
            "Vaš tim (ili vaš vendor) implementira tracking. Ja verifikujem da radi ispravno pre nego što kampanje krenu live — bez izuzetka."
        },
        {
          number: 5,
          title: "Handover sesija",
          description:
            "60-minutna sesija kroz nalog, 60-dnevni plan i šta da pratite u prvim nedeljama."
        }
      ];

  const faqs = isEn
    ? [
        {
          question: "Who is Kickstart built for?",
          answer:
            "Teams or founders who already have someone to own the account day-to-day — you just need it built right the first time. If you need someone to run it long-term, that's Google Ads Management, not Kickstart."
        },
        {
          question: "Why isn't tracking implementation included?",
          answer:
            "Tracking implementation touches your site's codebase and varies wildly by platform (Shopify, custom stack, WordPress, headless). I don't do that work — vetted vendors I work with do, billed separately. What I guarantee is the specification of exactly what must be measured, and I verify it works before anything launches. That's a senior gate, not a gap."
        },
        {
          question: "What ad budget do I need?",
          answer:
            "Plan for at least $2,000/month in ad spend. Below that, Google's algorithm doesn't get enough signal for Smart Bidding to work, and a full architecture is overkill — a consultation is a better starting point."
        },
        {
          question: "How is the final price determined?",
          answer:
            "Kickstart starts from $990. The final quote depends on scope — number of campaigns, whether Shopping/PMax is involved, and complexity of your account — confirmed after the 20-minute call."
        },
        {
          question: "What if I want ongoing management instead?",
          answer:
            "If you'd rather I run the account long-term instead of handing it off, check out Google Ads Management. Some clients start with Kickstart and move to management later once they see what running it well actually takes."
        },
        {
          question: "How long from kickoff to handover?",
          answer:
            "Usually 10-15 business days, depending on how quickly tracking gets implemented and verified on your side — that's typically the pacing factor, not my work."
        },
        {
          question: "What if I already have campaigns running?",
          answer:
            "I start with a quick review of the current state. If the structure is salvageable, I rebuild around it. If not, we start clean. Either way, you get a proper architecture and a plan for what's next."
        },
        {
          question: "Is this a one-time fee?",
          answer:
            "Yes — one payment, no contract. You get the architecture, copy, tracking spec, plan, and handover, then you run it. If you want to switch to ongoing management later, that's a separate conversation with no obligation."
        }
      ]
    : [
        {
          question: "Za koga je Kickstart napravljen?",
          answer:
            "Za timove ili osnivače koji već imaju nekoga da svakodnevno vodi nalog — samo treba da bude napravljen kako treba od prvog dana. Ako vam treba neko da ga vodi dugoročno, to je Google Ads upravljanje, ne Kickstart."
        },
        {
          question: "Zašto implementacija trackinga nije uključena?",
          answer:
            "Implementacija trackinga dira kod vašeg sajta i drastično se razlikuje po platformi (Shopify, custom stack, WordPress, headless). Taj posao ne radim ja — rade ga provereni vendori sa kojima sarađujem, naplaćuje se posebno. Ono što garantujem je specifikacija šta tačno mora da se meri, i verifikacija da radi pre nego što bilo šta ide live. To je senior gate, ne rupa u usluzi."
        },
        {
          question: "Koliki ad budžet mi treba?",
          answer:
            "Planirajte minimum €1.000 mesečno za ad spend. Ispod toga Google-ov algoritam nema dovoljno signala da Smart Bidding radi kako treba, a kompletna arhitektura je overkill — konsultacija je bolja polazna tačka."
        },
        {
          question: "Kako se određuje konačna cena?",
          answer:
            "Kickstart počinje od €690. Konačna ponuda zavisi od obima — broja kampanja, da li je uključen Shopping/PMax i kompleksnosti naloga — potvrđuje se posle 20-minutnog poziva."
        },
        {
          question: "Šta ako želim ongoing upravljanje umesto ovoga?",
          answer:
            "Ako želite da ja dugoročno vodim nalog umesto da vam ga predam, pogledajte Google Ads upravljanje. Neki klijenti krenu sa Kickstart-om pa pređu na upravljanje kasnije kada vide šta zaista treba da bi se nalog vodio kako treba."
        },
        {
          question: "Koliko traje od kickoff-a do handover-a?",
          answer:
            "Obično 10-15 radnih dana, zavisno od toga koliko brzo se tracking implementira i verifikuje sa vaše strane — to je obično faktor koji određuje tempo, ne moj rad."
        },
        {
          question: "Šta ako već imam kampanje koje rade?",
          answer:
            "Počinjem sa brzim pregledom trenutnog stanja. Ako se struktura može spasiti, gradim oko nje. Ako ne, krećemo iznova. U oba slučaja dobijate pravu arhitekturu i plan za dalje."
        },
        {
          question: "Da li je ovo jednokratna cena?",
          answer:
            "Da — jedna uplata, bez ugovora. Dobijate arhitekturu, oglase, tracking specifikaciju, plan i handover, a onda vodite dalje. Ako kasnije poželite da pređete na ongoing upravljanje, to je poseban razgovor bez obaveze."
        }
      ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Slobodan Jelisavac",
    url: "https://www.slobodan-jelisavac.com",
    jobTitle: "Google Ads Consultant"
  };

  const serviceSchema = isEn
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Google Ads Kickstart",
        description:
          "Senior Google Ads setup project for teams with an in-house owner. Account architecture, keyword and negative strategy, RSA copy, tracking specification and verification, 60-day plan, handover session.",
        provider: {
          "@type": "Person",
          name: "Slobodan Jelisavac",
          url: "https://www.slobodan-jelisavac.com",
          jobTitle: "Google Ads Consultant",
          knowsAbout: [
            "Google Ads",
            "Google Ads Setup",
            "Conversion Tracking",
            "Campaign Structure"
          ]
        },
        areaServed: [
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Germany" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "Australia" }
        ],
        serviceType: "Google Ads Setup and Handover",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "990",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "990",
            priceCurrency: "USD",
            unitText: "one-time",
            description: "Final quote based on scope, from $990"
          }
        }
      }
    : {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Google Ads Kickstart",
        description:
          "Senior Google Ads setup projekat za timove koji imaju in-house osobu za dalje vođenje. Arhitektura naloga, keyword i negative strategija, RSA oglasi, tracking specifikacija i verifikacija, 60-dnevni plan, handover sesija.",
        provider: {
          "@type": "Person",
          name: "Slobodan Jelisavac",
          url: "https://www.slobodan-jelisavac.com",
          jobTitle: "Google Ads Consultant",
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
        serviceType: "Google Ads Setup and Handover",
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: "690",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "690",
            priceCurrency: "EUR",
            unitText: "jednokratno",
            description: "Konačna ponuda po obimu, od €690"
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
            name: "Kickstart",
            item: "https://www.slobodan-jelisavac.com/en/services/starter-package"
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
            name: "Kickstart projekat",
            item: "https://www.slobodan-jelisavac.com/sr/usluge/starter-paket"
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
              <li className="text-yellow-400 font-medium">
                {isEn ? "Kickstart" : "Kickstart paket"}
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {isEn
                ? "Google Ads Kickstart — senior setup, you take it from there"
                : "Google Ads Kickstart — senior setup, vi vodite dalje"}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              {isEn ? (
                <>
                  You have someone in-house who will run the account — you just need it
                  built right the first time. Kickstart delivers account architecture,
                  written ad copy, and a verified tracking foundation, then hands it
                  over with a <strong className="text-white">60-day plan</strong>. No
                  monthly retainer required.
                </>
              ) : (
                <>
                  Imate nekoga in-house ko će voditi nalog — samo treba da bude
                  napravljen kako treba od prvog dana. Kickstart donosi arhitekturu
                  naloga, napisane oglase i verifikovan tracking temelj, pa ga predaje
                  uz <strong className="text-white">60-dnevni plan</strong>. Bez
                  mesečnog retainera.
                </>
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kontakt" variant="secondary">
                {isEn ? "Book a 20-minute scoping call" : "Zakažite 20-min razgovor"}
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
              <span>{isEn ? "10+ years of experience" : "10+ godina iskustva"}</span>
              <span>3x UK Search Awards</span>
              <span>
                {isEn ? "50+ brands across 6+ countries" : "50+ brendova iz 6+ zemalja"}
              </span>
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
                <strong>Google Ads Kickstart</strong> is a one-time project for teams
                that already have someone to own the account — an in-house marketer or
                the founder — and just need a senior-level foundation to build on.
                It's not a beginner package and it's not a monthly contract.
              </>
            ) : (
              <>
                <strong>Google Ads Kickstart</strong> je jednokratan projekat za timove
                koji već imaju nekoga da vodi nalog — in-house marketara ili osnivača —
                i samo im treba senior temelj na kome će graditi. Nije paket za
                početnike i nije mesečni ugovor.
              </>
            )}
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            {isEn
              ? "You get the architecture, the copy, and a verified tracking setup — the parts that are hardest to get right and most expensive to fix later. What you do with it after handover is up to you."
              : "Dobijate arhitekturu, oglase i verifikovan tracking setup — delove koje je najteže napraviti kako treba i najskuplje popraviti kasnije. Šta radite sa tim posle handover-a, to je na vama."}
          </p>
        </div>
      </section>

      {/* Pillars */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "What Kickstart actually delivers" : "Šta Kickstart zaista donosi"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isEn
              ? "Four things that are easy to get wrong without senior oversight — and expensive to fix once campaigns are live."
              : "Četiri stvari koje je lako pogrešno napraviti bez senior nadzora — i skupo popraviti kada su kampanje već live."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="h-full">
              <div className="mb-3">{pillar.icon}</div>
              <h3 className="text-lg font-heading font-semibold mb-2">
                {pillar.title}
              </h3>
              <p className="text-gray-600 text-base">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Tracking gate callout */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-2 border-slate-900 rounded-xl p-6 md:p-8 shadow-card">
            <h3 className="font-heading font-bold text-lg mb-3">
              {isEn
                ? "About tracking — read this before you ask"
                : "O trackingu — pročitajte pre nego što pitate"}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed mb-3">
              {isEn ? (
                <>
                  Tracking implementation is <strong>not included</strong> in Kickstart —
                  it's done by vetted vendors I work with, billed separately. What I
                  guarantee: you get a precise specification of exactly what must be
                  measured, and I don't launch campaigns until conversions are verified.
                </>
              ) : (
                <>
                  Tracking implementaciju <strong>ne radim</strong> u okviru Kickstart-a
                  — nju rade provereni vendori sa kojima sarađujem, naplaćuje se posebno.
                  Ono što garantujem: dobijate preciznu specifikaciju šta mora da se meri,
                  i ne puštam kampanje live dok konverzije nisu verifikovane.
                </>
              )}
            </p>
            <p className="text-gray-500 text-sm">
              {isEn
                ? "This is a senior gate, not a shortcut — campaigns built on broken tracking waste budget from day one."
                : "Ovo je senior gate, ne prečica — kampanje izgrađene na pokvarenom trackingu troše budžet od prvog dana."}
            </p>
          </div>
        </div>
      </Section>

      {/* What's included */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "What's Included" : "Šta je uključeno u Kickstart"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isEn
              ? "A single senior-built package — architecture, copy, tracking specification, and a clean handover."
              : "Jedan senior paket — arhitektura, oglasi, tracking specifikacija i čist handover."}
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
                    <span className="text-green-600 mt-0.5 flex-shrink-0">✓</span>
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
            {isEn ? "Is Kickstart Right for You?" : "Da li je Kickstart za vas?"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isEn
              ? "Kickstart works for a specific profile. Check if you're a fit before booking a call."
              : "Kickstart funkcioniše za specifičan profil. Proverite da li odgovarate pre nego što zakažete poziv."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-card">
            <h3 className="font-heading font-bold text-lg mb-4">
              {isEn ? "Kickstart is a fit if" : "Kickstart je za vas ako"}
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
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-card">
            <h3 className="font-heading font-bold text-lg mb-4">
              {isEn ? "Kickstart is not for you if" : "Kickstart nije za vas ako"}
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
            {isEn ? (
              <>
                If you need someone to run the account long-term, check out{" "}
                <Link href="/usluge/google-ads-upravljanje" className="text-primary underline">
                  Google Ads Management →
                </Link>
              </>
            ) : (
              <>
                Ako vam treba neko da dugoročno vodi nalog, pogledajte{" "}
                <Link href="/usluge/google-ads-upravljanje" className="text-primary underline">
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
            {isEn ? "How Kickstart Works" : "Kako izgleda proces Kickstart-a"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isEn
              ? "From scoping call to handover — transparent process in 5 steps."
              : "Od scoping poziva do handover-a — transparentan proces u 5 koraka."}
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
                  <p className="text-gray-600 text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing — single package */}
      <Section background="gray">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "Pricing" : "Cena"}
          </h2>
          <div className="bg-white border-2 border-yellow-400 rounded-xl p-8 shadow-card mt-8">
            <h3 className="text-xl font-heading font-bold mb-2">
              Google Ads Kickstart
            </h3>
            <p className="text-3xl font-heading font-bold text-primary mb-4">
              {isEn ? "from $990" : "od €690"}
            </p>
            <p className="text-gray-600 text-base mb-6">
              {isEn
                ? "Final quote based on scope, after a 20-minute call."
                : "Konačna ponuda po obimu, posle 20-min razgovora."}
            </p>
            <Button href="/kontakt" variant="secondary">
              {isEn ? "Book a 20-minute scoping call" : "Zakažite 20-min razgovor"}
            </Button>
          </div>
        </div>
      </Section>

      {/* What happens after */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "What Happens After Handover?" : "Šta se dešava posle handover-a?"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isEn
              ? "Kickstart sets your team up to run the account. If your needs change later, here's what's available."
              : "Kickstart osposobljava vaš tim da vodi nalog. Ako se vaše potrebe promene kasnije, dostupne su sledeće opcije."}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="h-full">
            <h3 className="text-lg font-heading font-semibold mb-3">
              {isEn ? "No time to run it after all?" : "Ipak nemate vremena da vodite?"}
            </h3>
            <p className="text-gray-600 text-base mb-4">
              {isEn
                ? "Switch to monthly management where I handle all optimizations, reporting and scaling."
                : "Pređite na mesečno upravljanje gde preuzimam sve optimizacije, reporting i skaliranje."}
            </p>
            <Link href="/usluge/google-ads-upravljanje" className="text-primary font-semibold text-sm">
              {isEn ? "Google Ads Management →" : "Google Ads upravljanje →"}
            </Link>
          </Card>
          <Card className="h-full">
            <h3 className="text-lg font-heading font-semibold mb-3">
              {isEn ? "Have questions after handover?" : "Imate pitanja posle handover-a?"}
            </h3>
            <p className="text-gray-600 text-base mb-4">
              {isEn
                ? "Book a 1-on-1 consultation for specific questions, a review, or optimization help."
                : "Zakažite 1-on-1 konsultaciju za specifična pitanja, review ili pomoć oko optimizacija."}
            </p>
            <Link href="/usluge/konsultacije" className="text-primary font-semibold text-sm">
              {isEn ? "1-on-1 consultations →" : "1-on-1 konsultacije →"}
            </Link>
          </Card>
          <Card className="h-full">
            <h3 className="text-lg font-heading font-semibold mb-3">
              {isEn ? "Growing and need to scale?" : "Rastete i treba skaliranje?"}
            </h3>
            <p className="text-gray-600 text-base mb-4">
              {isEn
                ? "Let's talk about ongoing partnership — the architecture stays, we just upgrade the strategy."
                : "Razgovarajmo o ongoing partnership-u — arhitektura ostaje, samo nadograđujemo strategiju."}
            </p>
            <Link href="/kontakt" className="text-primary font-semibold text-sm">
              {isEn ? "Let's discuss partnership →" : "Razgovarajmo o partnerstvu →"}
            </Link>
          </Card>
        </div>
      </Section>

      {/* FAQ — proper accordion */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn
              ? "Frequently Asked Questions About Kickstart"
              : "Često postavljana pitanja o Kickstart-u"}
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
              ? "Ready for a senior setup you can take from there?"
              : "Spremni za senior setup koji dalje vodite sami?"}
          </h2>
          <p className="text-slate-300 mb-8">
            {isEn
              ? "Book a 20-minute call and let's confirm Kickstart is the right fit. No commitment."
              : "Zakažite 20-minutni poziv i proverimo da li vam Kickstart odgovara. Bez obaveza."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              {isEn ? "Book a 20-minute scoping call" : "Zakažite 20-min razgovor"}
            </Button>
            <Link
              href="/usluge/konsultacije"
              className="text-slate-300 hover:text-white underline text-sm self-center transition-colors"
            >
              {isEn ? "Or book a consultation →" : "Ili zakažite konsultaciju →"}
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
            <Link
              href="/usluge/google-ads-upravljanje"
              className="hover:text-white transition-colors underline"
            >
              {isEn ? "Google Ads Management" : "Google Ads upravljanje"}
            </Link>
            <Link
              href="/usluge/konsultacije"
              className="hover:text-white transition-colors underline"
            >
              {isEn ? "1-on-1 Consultations" : "1-on-1 konsultacije"}
            </Link>
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }}
              className="hover:text-white transition-colors underline"
            >
              {isEn ? "How much does Google Ads cost?" : "Koliko košta Google Ads?"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
