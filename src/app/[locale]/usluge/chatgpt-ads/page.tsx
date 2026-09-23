import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";
import { RelatedGlossaryTerms } from "@/components/RelatedGlossaryTerms";
import { buildMetadata } from "@/lib/metadata";
import { PERSON_REF } from "@/lib/brand";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return buildMetadata({
    title: isEn
      ? "ChatGPT Ads Agency | Advertising in ChatGPT (Live in 47 Countries) — Slobodan Jelisavac"
      : "ChatGPT Ads (oglasi u ChatGPT-u) | Živo u 47 zemalja - Slobodan Jelisavac",
    description: isEn
      ? "ChatGPT Ads management: sponsored placements inside AI conversations, live across the US, UK, EU (including Croatia), and 47 countries total. Context-hint strategy, OAIQ pixel tracking, creative, and landing pages. Senior-led pilots for considered-purchase brands."
      : "Upravljanje ChatGPT Ads oglasima: plaćena mesta unutar AI razgovora, živa u SAD, UK, EU (uključujući Hrvatsku) i ukupno 47 zemalja. Strategija konteksta, OAIQ merenje, kreativa i landing stranice. Za firme koje posluju u inostranstvu ili EU vodim pilote već sada.",
    locale,
    path: "/services/chatgpt-ads",
    srPath: "/usluge/chatgpt-ads",
  });
}

export default async function ChatGptAdsPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === "en";

  const ctaLabel = isEn ? "Book a pilot conversation" : "Zakažite razgovor o pilotu";

  const problems = isEn
    ? [
        {
          title: "The old playbook doesn't transfer",
          description:
            "There are no keywords to bid on — the format matches you on the full meaning of the conversation, not a bid. Google Ads habits cost you time here.",
        },
        {
          title: "Measurement is still immature",
          description:
            "There's no native GA4 integration, traffic lands as plain referral, and several agencies have publicly reported a gap between the platform's numbers and their own analytics.",
        },
        {
          title: "The window is closing fast",
          description:
            "OpenAI hit a $1B annualized run rate in under 200 days. Advertisers who learn the format now build account history before the auction matures.",
        },
      ]
    : [
        {
          title: "Klasičan pristup ne radi",
          description:
            "Nema ključnih reči na koje se licitira - format vas povezuje na osnovu punog značenja razgovora, ne bida. Ko dođe sa Google Ads navikama, gubi vreme.",
        },
        {
          title: "Merenje je još nezrelo",
          description:
            "Nema native GA4 integracije, saobraćaj stiže kao običan referral, a nekoliko agencija javno prijavljuje jaz između brojki platforme i sopstvene analitike.",
        },
        {
          title: "Prozor se zatvara brzo",
          description:
            "OpenAI je za manje od 200 dana dostigao run rate prihoda od milijardu dolara godišnje. Ko format nauči sada, gradi istoriju naloga pre nego što aukcija sazri.",
        },
      ];

  const deliverables = isEn
    ? [
        {
          title: "Account & access",
          description: "Setup inside OpenAI's Ads Manager, plus a category eligibility check before we launch anything.",
        },
        {
          title: "Context-hint strategy",
          description: "The ChatGPT equivalent of keyword research: your buyer's questions and situations translated into intent guidance.",
        },
        {
          title: "Chat-card creative",
          description: "Titles, copy, imagery, and favicon written for the moment the card appears, not for a passive scroll.",
        },
        {
          title: "OAIQ pixel & measurement",
          description: "Server-side Conversions API with deduplication — your analytics is the source of truth, not the platform's dashboard.",
        },
        {
          title: "Testing & optimization",
          description: "CPC, CPM, and oCPC objectives and bids tested against your real conversion data.",
        },
      ]
    : [
        {
          title: "Nalog i pristup",
          description: "Setup u OpenAI Ads Manageru, uz proveru kategorije i podobnosti pre nego što krenemo.",
        },
        {
          title: "Strategija konteksta",
          description: "ChatGPT ekvivalent istraživanja ključnih reči: pitanja i situacije vašeg kupca prevodim u smernice po nameri.",
        },
        {
          title: "Kreativa za chat kartice",
          description: "Naslov, tekst, slika i favicon pisani za trenutak u kom se kartica pojavljuje, ne za pasivno skrolovanje.",
        },
        {
          title: "OAIQ piksel i merenje",
          description: "Server-side Conversions API sa deduplikacijom - vaša analitika je izvor istine, ne panel platforme.",
        },
        {
          title: "Testiranje i optimizacija",
          description: "CPC, CPM i oCPC ciljevi i licitacija testirani na vašim stvarnim podacima o konverzijama.",
        },
      ];

  const processSteps = isEn
    ? [
        "Call and eligibility check — legal entity, market, category.",
        "Account setup and context-hint strategy.",
        "Pilot launch — creative, landing pages, measurement from the first click.",
        "Iteration on real data — bids, context hints, creative.",
      ]
    : [
        "Poziv i provera podobnosti - pravni entitet, tržište, kategorija.",
        "Setup naloga i strategije konteksta.",
        "Lansiranje pilota - kreativa, landing stranice, merenje od prvog klika.",
        "Iteracija na stvarnim podacima - licitacija, smernice, kreativa.",
      ];

  const faqs = isEn
    ? [
        {
          question: "Are ChatGPT Ads actually live in 2026?",
          answer:
            "Yes, fully live. The rollout moved fast: a US pilot from February 9, UK/Japan/Brazil/Mexico/Korea live by August 11, and the EU (27 member states plus Iceland, Liechtenstein, Norway, and Switzerland) from August 24. Self-serve advertiser access opened across 47 countries by August 31. Ads only appear to logged-in Free and Go users, as sponsored cards below the answer — they never change the answer itself.",
        },
        {
          question: "Can I run ChatGPT Ads from Serbia?",
          answer:
            "Not as a Serbian entity — Serbia isn't on OpenAI's supported list, on either side. It works through a real legal entity in a supported market (the EU, UK, or US — Croatia and Slovenia are both on the list) or through a client's own entity if they operate there. If your business already has that footing, I can run a pilot now.",
        },
        {
          question: "How is targeting different from Google Ads?",
          answer:
            "There are no keywords. You give the platform context hints — descriptions of the questions and situations your buyer brings to the chat — and it matches you on the full meaning of the conversation. In the EU and Switzerland there's no personalization layer at all: nothing about past chats or ad history factors in, just the live conversation, rough location, and language.",
        },
        {
          question: "How do you measure results?",
          answer:
            "The OAIQ pixel plus a server-side Conversions API with deduplication — I set both up properly. There's no native GA4 integration, so I treat your own analytics as the source of truth, not the platform's numbers.",
        },
        {
          question: "Why work with you on this specifically?",
          answer:
            "Because the winning skill here isn't platform button-clicking, it's understanding buyer intent — which is what I've done in paid search for 10+ years. The ChatGPT Ads playbook is still being written; I bring measurement discipline and a straight answer about what's proven versus what we're testing together.",
        },
      ]
    : [
        {
          question: "Da li ChatGPT Ads zaista postoje u 2026?",
          answer:
            "Da, potpuno je živ. Rollout je bio brz: US pilot od 9. februara, UK/Japan/Brazil/Meksiko/Koreja živi do 11. avgusta, a EU (27 zemalja članica plus Island, Lihtenštajn, Norveška i Švajcarska) od 24. avgusta. Self-serve pristup se do 31. avgusta otvorio u 47 zemalja. Oglase vide samo ulogovani Free i Go korisnici, kao sponzorisane kartice ispod odgovora - nikad ne menjaju sam odgovor.",
        },
        {
          question: "Mogu li da vrtim ChatGPT Ads iz Srbije?",
          answer:
            "Ne kao srpska firma - Srbija nije na OpenAI-jevoj listi, ni za oglase korisnicima ni za naloge oglašivača. Radi kroz stvaran pravni entitet na podržanom tržištu (EU, UK ili SAD - Hrvatska i Slovenija su obe na listi) ili kroz entitet klijenta ako tamo posluje. Ako vaša firma već ima tu poziciju, mogu da pokrenem pilot odmah.",
        },
        {
          question: "Kako se targeting razlikuje od Google Ads?",
          answer:
            "Nema ključnih reči. Platformi dajete kontekstualne smernice - opise pitanja i situacija sa kojima vaš kupac dolazi u chat - a ona vas povezuje na osnovu punog značenja tekućeg razgovora. U EU i Švajcarskoj nema sloja personalizacije uopšte: ništa od prošlih razgovora ni istorije oglasa ne ulazi u igru, samo tekući razgovor, gruba lokacija i jezik.",
        },
        {
          question: "Kako merite rezultate?",
          answer:
            "OAIQ piksel plus server-side Conversions API sa deduplikacijom - oba podešavam kako treba. Nema native GA4 integracije, pa vašu analitiku tretiram kao izvor istine, ne brojke iz panela platforme.",
        },
        {
          question: "Zašto baš sa vama za ovo?",
          answer:
            "Zato što ključna veština ovde nije kliktanje po platformi, već razumevanje namere kupca - a to radim u paid search-u preko 10 godina. Playbook za ChatGPT Ads se tek piše; donosim disciplinu merenja i iskren odgovor o tome šta je dokazano, a šta zajedno testiramo.",
        },
      ];


  const breadcrumbSchema = isEn
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.slobodan-jelisavac.com" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.slobodan-jelisavac.com/en/services" },
          {
            "@type": "ListItem",
            position: 3,
            name: "ChatGPT Ads",
            item: "https://www.slobodan-jelisavac.com/en/services/chatgpt-ads",
          },
        ],
      }
    : {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Početna", item: "https://www.slobodan-jelisavac.com" },
          { "@type": "ListItem", position: 2, name: "Usluge", item: "https://www.slobodan-jelisavac.com/sr/usluge" },
          {
            "@type": "ListItem",
            position: 3,
            name: "ChatGPT Ads",
            item: "https://www.slobodan-jelisavac.com/sr/usluge/chatgpt-ads",
          },
        ],
      };

  const serviceSchema = isEn
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "ChatGPT Ads Management",
        serviceType: "ChatGPT Ads Agency",
        description:
          "Management of advertising inside ChatGPT, live across 47 countries: context-hint strategy, chat-card creative, OAIQ pixel tracking, and landing pages for considered-purchase brands.",
        provider: PERSON_REF,
        areaServed: ["United States", "United Kingdom", "European Union", "Croatia", "Canada", "Australia"],
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "2500",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "2500",
            priceCurrency: "USD",
            unitText: "MONTH",
          },
        },
      }
    : {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "ChatGPT Ads upravljanje",
        serviceType: "ChatGPT Ads agencija",
        description:
          "Upravljanje oglašavanjem unutar ChatGPT-a, živo u 47 zemalja: strategija konteksta, kreativa za chat kartice, OAIQ merenje i landing stranice za brendove sa promišljenom kupovinom.",
        provider: PERSON_REF,
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: "700",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "700",
            priceCurrency: "EUR",
            unitText: "MONTH",
          },
        },
      };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* 1. Hero — kome je namenjeno, šta se dešava kad me angažujete, jedan dokaz */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav className="text-sm mb-8 text-accent">
            <Link href="/" className="hover:underline">
              {isEn ? "Home" : "Početna"}
            </Link>
            {" / "}
            <Link href="/usluge" className="hover:underline">
              {isEn ? "Services" : "Usluge"}
            </Link>
            {" / "}
            <span className="text-white">ChatGPT Ads</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-accent font-semibold uppercase tracking-wide text-sm mb-4">
              {isEn ? "ChatGPT Ads Agency — Live in the EU, UK & US" : "ChatGPT Ads agencija - živo u EU, UK i SAD"}
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {isEn ? "Where conversations become conversions" : "Gde razgovori postaju konverzije"}
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              {isEn ? (
                <>
                  I work with considered-purchase brands — B2B, SaaS, premium eCommerce,
                  services — that have a legal entity or operate in a supported market
                  (the EU, UK, US; Croatia and Slovenia are on the list, Serbia isn&apos;t
                  yet). When you bring me in, I set up the account, build the
                  context-hint strategy and creative, and launch a pilot that&apos;s
                  measured from day one — not from month three.
                </>
              ) : (
                <>
                  Radim sa brendovima kod kojih kupci istražuju pre odluke - B2B, SaaS,
                  premium eCommerce, usluge - i koji imaju pravni entitet ili posluju na
                  podržanom tržištu (EU, UK, SAD; Hrvatska i Slovenija su na listi, Srbija
                  još nije). Kad me angažujete, postavljam nalog, gradim strategiju
                  konteksta i kreativu, i pokrećem pilot koji se meri od prvog dana - ne
                  od trećeg meseca.
                </>
              )}
            </p>

            <div className="inline-block bg-slate-800 px-4 py-2 rounded-lg text-sm mb-8">
              {isEn ? "10+ years in paid search" : "10+ godina u paid search-u"}
            </div>

            <div>
              <Button href="/kontakt" variant="secondary">
                {ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem u tri stavke */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "Why the old playbook doesn't work" : "Zašto stari pristup ne prolazi"}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item) => (
            <Card key={item.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 3. Šta dobijate, numerisano */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">{isEn ? "What you get" : "Šta dobijate"}</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5">
          {deliverables.map((item, index) => (
            <Card key={item.title} className="h-full flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-heading font-semibold text-sm">
                {index + 1}
              </span>
              <div>
                <h3 className="text-base font-heading font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 4. Dokaz: brojka i slučaj iz prakse (NDA) */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6 text-center">
            {isEn ? "Track record" : "Dokaz"}
          </h2>
          <Card className="h-full">
            <p className="text-gray-700">
              {isEn ? (
                <>
                  ChatGPT Ads is a young channel — there isn&apos;t enough history yet
                  for anyone to promise results on it, and I won&apos;t. What I bring to
                  the pilot is the measurement discipline from the Google Ads accounts I
                  run: an average <strong>3.7x ROAS</strong> on eCommerce accounts, and a
                  UK Shopping client at six-figure revenue (GBP), <strong>1.78x POAS</strong>,
                  over more than two years (name under NDA). The same discipline carries
                  into ChatGPT Ads.
                </>
              ) : (
                <>
                  ChatGPT Ads je mlad kanal - još nema dovoljno istorije da bilo ko
                  obeća rezultate na njemu, i ja to neću da radim. Ono što nosim u pilot
                  je disciplina merenja iz Google Ads naloga koje vodim: prosečan{" "}
                  <strong>ROAS 3.7x</strong> na eCommerce nalozima, i UK Shopping
                  klijent sa šestocifrenim prihodom (GBP), <strong>POAS 1.78x</strong>,
                  kroz više od dve godine (ime pod NDA). Ista disciplina ide i u
                  ChatGPT Ads.
                </>
              )}
            </p>
          </Card>
        </div>
      </Section>

      {/* 5. Cena i proces, vidljivo */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6 text-center">
            {isEn ? "Price and process" : "Cena i proces"}
          </h2>
          <Card className="h-full mb-6">
            <p className="text-gray-700">
              {isEn ? (
                <>
                  Pricing follows my standard model for paid campaign management:{" "}
                  <strong>from $2,500/month</strong> (from €700/month for EU clients),
                  with a recommended ad budget of at least €1,500/month (or the
                  equivalent) so the platform has enough data to learn.
                </>
              ) : (
                <>
                  Cena prati moj standardni model za vođenje plaćenih kampanja:{" "}
                  <strong>od €700/mesečno</strong> (od $2.500/mesečno za SAD/UK
                  klijente), uz preporučen ad budžet od najmanje €1.500/mesečno (ili
                  ekvivalent) da bi platforma imala dovoljno podataka za učenje.
                </>
              )}
            </p>
          </Card>
          <ol className="max-w-2xl mx-auto space-y-3">
            {processSteps.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-heading font-semibold text-xs mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ol>
          <div className="text-center mt-8">
            <Button href="/kontakt" variant="primary">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </Section>

      {/* 6. Pitanja koja se stvarno postavljaju */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "Questions people actually ask" : "Pitanja koja se stvarno postavljaju"}
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
              <div className="px-6 pb-4 pt-2 text-gray-600 border-t border-gray-100">{faq.answer}</div>
            </details>
          ))}
        </div>
      </Section>

      <RelatedGlossaryTerms
        slugs={["cpc", "cpm", "conversion", "first-party-data", "landing-page", "ctr"]}
        locale={locale}
      />

      {/* 7. Jedan poziv na akciju, treći put isti */}
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              {isEn ? "Get in before the window closes" : "Uđite pre nego što se prozor zatvori"}
            </h2>
            <p className="text-gray-300 mb-8">
              {isEn
                ? "Advertisers who learn ChatGPT Ads now are building account history and creative learnings while the auction is still young. Let's see if your business fits."
                : "Oglašivači koji ChatGPT Ads nauče sada grade istoriju naloga i uvide u kreativu dok je aukcija još mlada. Da vidimo da li vaš biznis odgovara."}
            </p>
            <Button href="/kontakt" variant="secondary">
              {ctaLabel}
            </Button>
            <div className="text-sm text-gray-400 mt-8 space-x-3">
              <Link
                href={{ pathname: "/blog/[slug]", params: { slug: isEn ? "chatgpt-ads-guide" : "chatgpt-ads-vodic" } }}
                className="hover:text-accent transition-colors"
              >
                {isEn ? "ChatGPT Ads guide" : "ChatGPT Ads vodič"}
              </Link>
              <span>•</span>
              <Link
                href={{ pathname: "/blog/[slug]", params: { slug: "chatgpt-ads-vs-google-ads" } }}
                className="hover:text-accent transition-colors"
              >
                {isEn ? "ChatGPT Ads vs Google Ads" : "ChatGPT Ads vs Google Ads"}
              </Link>
              <span>•</span>
              <Link
                href={{ pathname: "/blog/[slug]", params: { slug: isEn ? "chatgpt-ads-europe" : "chatgpt-ads-evropa" } }}
                className="hover:text-accent transition-colors"
              >
                {isEn ? "ChatGPT Ads in Europe" : "ChatGPT Ads u Evropi"}
              </Link>
              <span>•</span>
              <Link
                href={{ pathname: "/blog/[slug]", params: { slug: isEn ? "google-search-campaigns-guide" : "google-search-kampanje-vodic" } }}
                className="hover:text-accent transition-colors"
              >
                {isEn ? "Search campaigns guide" : "Vodič za Search kampanje"}
              </Link>
              <span>•</span>
              <Link
                href={{ pathname: "/blog/[slug]", params: { slug: isEn ? "remarketing-guide" : "remarketing-vodic" } }}
                className="hover:text-accent transition-colors"
              >
                {isEn ? "Remarketing guide" : "Vodič za remarketing"}
              </Link>
              <span>•</span>
              <Link href="/usluge/google-ads-upravljanje" className="hover:text-accent transition-colors">
                {isEn ? "Google Ads management" : "Google Ads upravljanje"}
              </Link>
              <span>•</span>
              <Link href="/recnik" className="hover:text-accent transition-colors">
                {isEn ? "PPC glossary" : "PPC rečnik"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
