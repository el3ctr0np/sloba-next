import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";
import { RelatedGlossaryTerms } from "@/components/RelatedGlossaryTerms";
import { buildMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return buildMetadata({
    title: isEn
      ? "ChatGPT Ads Agency | Early-Access Advertising in ChatGPT — Slobodan Jelisavac"
      : "ChatGPT Ads (oglasi u ChatGPT-u) | Early Access - Slobodan Jelisavac",
    description: isEn
      ? "Early-access ChatGPT Ads management: sponsored placements inside AI conversations, captured at peak intent. Context-hint strategy, OAIQ pixel tracking, creative, and landing pages. Senior-led, before your competition arrives."
      : "Early-access upravljanje ChatGPT Ads oglasima: plaćena mesta unutar AI razgovora, tačno u trenutku najveće namere. Strategija konteksta, OAIQ merenje, kreativa i landing stranice. Senior pristup, pre nego što konkurencija stigne.",
    locale,
    path: "/services/chatgpt-ads",
    srPath: "/usluge/chatgpt-ads",
  });
}

export default async function ChatGptAdsPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === "en";

  const differentiators = isEn
    ? [
        {
          title: "Peak intent capture",
          description:
            "When someone asks ChatGPT about a problem, they aren't browsing — they're evaluating a decision, out loud, in full sentences. A sponsored card appears exactly at that moment, while the person is still forming their choice. No other channel reaches a buyer mid-thought like this.",
        },
        {
          title: "Contextual matching, not keywords",
          description:
            "ChatGPT matches ads to the full meaning of the conversation, not to a keyword you bid on. You describe the questions, needs, and situations your buyer brings to the chat, and the model places you where that context actually shows up. Message-to-market fit wins here, not keyword lists.",
        },
        {
          title: "Early-mover advantage",
          description:
            "The self-serve beta opened in 2026 and the auction is still thin. Recommended CPC bids sit at $3–5 and pilot CPMs have been falling. The brands that learn this format now build the account history and creative learnings competitors won't have when the window closes.",
        },
      ]
    : [
        {
          title: "Hvatanje u trenutku najveće namere",
          description:
            "Kada neko pita ChatGPT o svom problemu, taj čovek ne pretražuje - on naglas procenjuje odluku, u punim rečenicama. Sponzorisana kartica se pojavi baš u tom trenutku, dok korisnik još formira izbor. Nijedan drugi kanal ne dolazi do kupca usred razmišljanja na ovaj način.",
        },
        {
          title: "Kontekst, ne ključne reči",
          description:
            "ChatGPT povezuje oglas sa punim značenjem razgovora, ne sa ključnom reči na koju licitirate. Vi opisujete pitanja, potrebe i situacije sa kojima vaš kupac dolazi u chat, a model vas postavlja tamo gde se taj kontekst zaista javlja. Ovde pobeđuje poklapanje poruke i tržišta, ne liste ključnih reči.",
        },
        {
          title: "Prednost ranog ulaska",
          description:
            "Self-serve beta je otvorena tokom 2026. i aukcija je i dalje retka. Preporučeni CPC iznosi su 3-5 dolara, a CPM cene u pilotu padaju. Brendovi koji nauče ovaj format sada grade istoriju naloga i uvide u kreativu koje konkurencija neće imati kada se prozor zatvori.",
        },
      ];

  const deliverables = isEn
    ? [
        {
          title: "Advertiser account & access",
          description:
            "Setup inside OpenAI's Ads Manager beta — billing, budgets, bidding, and pacing configured correctly from day one.",
        },
        {
          title: "Context-hint strategy",
          description:
            "The ChatGPT equivalent of keyword research: I map the questions, needs, and situations your buyer brings to the chat into intent and theme guidance at the ad-group level.",
        },
        {
          title: "Chat-card creative",
          description:
            "Titles, body copy, imagery, and favicon built for the card format and the moment it interrupts — written to fit a decision in progress, not a passive scroll.",
        },
        {
          title: "Landing pages for AI traffic",
          description:
            "Pages built for a visitor who arrived mid-decision from a reasoning engine — matched to the conversation that sent them, not a generic homepage.",
        },
        {
          title: "OAIQ pixel & measurement",
          description:
            "OpenAI's pixel and server-side Conversions API set up with deduplication, so you see real conversions and cost per action instead of guesswork.",
        },
        {
          title: "Product feed & retail catalogs",
          description:
            "For eCommerce: catalog upload so cards generate from your product feed at scale, instead of building each one by hand.",
        },
        {
          title: "Testing & optimization",
          description:
            "CPC vs CPM objectives, bid levels, and context hints tested against your real conversion data — the same discipline I bring to a Google Ads account.",
        },
      ]
    : [
        {
          title: "Nalog i pristup platformi",
          description:
            "Setup unutar OpenAI Ads Manager bete - naplata, budžeti, licitiranje i pacing pravilno podešeni od prvog dana.",
        },
        {
          title: "Strategija konteksta",
          description:
            "ChatGPT ekvivalent istraživanja ključnih reči: pitanja, potrebe i situacije sa kojima vaš kupac dolazi u chat prevodim u smernice po nameri i temi na nivou ad grupe.",
        },
        {
          title: "Kreativa za chat kartice",
          description:
            "Naslovi, tekst, slika i favicon napravljeni za format kartice i trenutak u kom se pojavljuje - pisani za odluku koja je u toku, ne za pasivno skrolovanje.",
        },
        {
          title: "Landing stranice za AI saobraćaj",
          description:
            "Stranice napravljene za posetioca koji je stigao usred odluke iz AI razgovora - usklađene sa razgovorom koji ga je poslao, ne generička početna strana.",
        },
        {
          title: "OAIQ piksel i merenje",
          description:
            "OpenAI piksel i server-side Conversions API sa deduplikacijom, tako da vidite stvarne konverzije i cenu po akciji umesto nagađanja.",
        },
        {
          title: "Product feed i katalozi",
          description:
            "Za eCommerce: upload kataloga tako da se kartice generišu iz vašeg feeda automatski, umesto da se prave jedna po jedna.",
        },
        {
          title: "Testiranje i optimizacija",
          description:
            "CPC vs CPM ciljevi, nivoi licitacije i kontekstualne smernice testirani na vašim stvarnim podacima o konverzijama - ista disciplina koju nosim u Google Ads nalog.",
        },
      ];

  const comparisonRows = isEn
    ? [
        {
          dimension: "Where the user is",
          chatgpt: "Mid-conversation, evaluating a decision out loud",
          google: "Actively searching with a query in mind",
          meta: "Scrolling a feed, interrupted by an ad",
        },
        {
          dimension: "How you're matched",
          chatgpt: "Full meaning of the conversation (context)",
          google: "Keywords and search intent",
          meta: "Interests, behaviors, lookalikes",
        },
        {
          dimension: "Competition right now",
          chatgpt: "Thin — early beta, few advertisers",
          google: "Mature and saturated in most niches",
          meta: "Mature and saturated",
        },
        {
          dimension: "Creative unit",
          chatgpt: "Sponsored chat card below the answer",
          google: "Text ad, Shopping, PMax assets",
          meta: "Image / video in feed and stories",
        },
        {
          dimension: "Best for",
          chatgpt: "Considered purchases, high-intent moments",
          google: "Capturing existing demand",
          meta: "Creating demand, retargeting",
        },
      ]
    : [
        {
          dimension: "Gde je korisnik",
          chatgpt: "Usred razgovora, procenjuje odluku naglas",
          google: "Aktivno pretražuje sa upitom na umu",
          meta: "Skroluje feed, prekinut oglasom",
        },
        {
          dimension: "Kako vas povezuje",
          chatgpt: "Puno značenje razgovora (kontekst)",
          google: "Ključne reči i namera pretrage",
          meta: "Interesovanja, ponašanja, lookalike",
        },
        {
          dimension: "Konkurencija sada",
          chatgpt: "Retka - rana beta, malo oglašivača",
          google: "Zrela i zasićena u većini niša",
          meta: "Zrela i zasićena",
        },
        {
          dimension: "Format oglasa",
          chatgpt: "Sponzorisana kartica ispod odgovora",
          google: "Tekst oglas, Shopping, PMax asseti",
          meta: "Slika / video u feedu i story",
        },
        {
          dimension: "Najbolje za",
          chatgpt: "Promišljene kupovine, momenti visoke namere",
          google: "Hvatanje postojeće tražnje",
          meta: "Stvaranje tražnje, retargeting",
        },
      ];

  const idealClients = isEn
    ? [
        "Considered-purchase brands where buyers research before deciding (B2B, SaaS, premium eCommerce, services)",
        "Advertisers in markets where the format is live (US, UK, and other early-access regions)",
        "Brands that already run Google or Meta and want a genuine first-mover channel",
        "Teams that value being early to a format over waiting for a proven playbook",
      ]
    : [
        "Brendovi sa promišljenom kupovinom gde kupci istražuju pre odluke (B2B, SaaS, premium eCommerce, usluge)",
        "Oglašivači na tržištima gde je format živ (US, UK i druga early-access tržišta)",
        "Brendovi koji već vrte Google ili Meta i žele stvarni first-mover kanal",
        "Timovi kojima je vrednost biti rano na formatu, a ne čekati proveren plan",
      ];

  const notFor = isEn
    ? [
        "You need guaranteed volume today — beta inventory and reach are still limited",
        "You have no verified conversion tracking — without it, a new channel is invisible",
        "You want a channel that runs itself with no testing budget for a young format",
      ]
    : [
        "Treba vam zagarantovan obim odmah - beta inventar i domet su još ograničeni",
        "Nemate verifikovan tracking konverzija - bez toga je novi kanal nevidljiv",
        "Želite kanal koji se vrti sam, bez budžeta za testiranje mladog formata",
      ];

  const faqs = isEn
    ? [
        {
          question: "Are ChatGPT Ads actually live in 2026?",
          answer:
            "Yes. OpenAI moved from a partner-led pilot to a self-serve Ads Manager beta during 2026, and removed the earlier five- and six-figure minimum spend commitments. Ads appear as clearly labeled sponsored cards below ChatGPT responses and don't influence the answer itself. Advertiser access is still expanding market by market, which is exactly why this is an early-access engagement.",
        },
        {
          question: "Can I run ChatGPT Ads from Serbia / the region?",
          answer:
            "Advertiser access during the beta is primarily US-focused, and ads currently reach users in markets like the US, Canada, Australia, and New Zealand. If your customers are there, we can run pilots now. If you're targeting the regional market, I put you on an early-access footing — account, tracking, context-hint strategy, and creative ready — so you launch on day one when it opens here, instead of starting from zero.",
        },
        {
          question: "How is targeting different from Google Ads?",
          answer:
            "There are no keywords to bid on. You give the platform broad intent and theme guidance — descriptions of the questions and situations your buyer brings to the chat — and it matches you on the full meaning of the conversation. It rewards understanding your customer over building keyword lists, which is where a senior strategist matters more, not less.",
        },
        {
          question: "What does it cost to advertise?",
          answer:
            "OpenAI offers CPC and CPM buying. For CPC, the recommended starting max bid is around $3–5 per click, and pilot CPMs have been trending down as inventory grows. The earlier $50,000+ minimum is gone for the self-serve beta, so you can start with a real test budget rather than an enterprise commitment.",
        },
        {
          question: "How do you measure results?",
          answer:
            "OpenAI provides the OAIQ pixel (a first-party cookie with a 30-day window) plus a server-side Conversions API with event deduplication. I set both up so conversions and cost per action are measured properly — the same tracking discipline I apply to every Google Ads account, applied to a channel most people are running blind.",
        },
        {
          question: "Why work with you specifically on this?",
          answer:
            "Because the winning skill here isn't platform button-clicking, it's understanding buyer intent and writing to it — which is what I've done in paid search for 10+ years. I bring that judgment to a format where the playbook is still being written, and I'm honest about what's proven versus what we're testing together.",
        },
      ]
    : [
        {
          question: "Da li ChatGPT Ads zaista postoje u 2026?",
          answer:
            "Da. OpenAI je tokom 2026. prešao sa pilota vođenog kroz partnere na self-serve Ads Manager betu i ukinuo ranije obaveze o minimalnom trošenju od pet i šest cifara. Oglasi se pojavljuju kao jasno označene sponzorisane kartice ispod ChatGPT odgovora i ne utiču na sam odgovor. Pristup za oglašivače se i dalje širi tržište po tržište, i zato je ovo early-access angažman.",
        },
        {
          question: "Mogu li da vrtim ChatGPT Ads iz Srbije / regiona?",
          answer:
            "Pristup za oglašivače je tokom bete pretežno usmeren na US, a oglasi trenutno dolaze do korisnika na tržištima poput US, Kanade, Australije i Novog Zelanda. Ako su vaši kupci tamo, pilote možemo da vrtimo odmah. Ako ciljate regionalno tržište, postavljam vas na early-access poziciju - nalog, tracking, strategija konteksta i kreativa spremni - da krenete prvog dana kada se otvori kod nas, umesto od nule.",
        },
        {
          question: "Kako se targeting razlikuje od Google Ads?",
          answer:
            "Nema ključnih reči na koje se licitira. Platformi dajete široke smernice po nameri i temi - opise pitanja i situacija sa kojima vaš kupac dolazi u chat - a ona vas povezuje na osnovu punog značenja razgovora. Nagrađuje razumevanje kupca više nego pravljenje listi ključnih reči, i tu senior strateg znači više, a ne manje.",
        },
        {
          question: "Koliko košta oglašavanje?",
          answer:
            "OpenAI nudi CPC i CPM kupovinu. Za CPC, preporučena početna maksimalna licitacija je oko 3-5 dolara po kliku, a CPM cene u pilotu opadaju kako raste inventar. Raniji minimum od 50.000 dolara je ukinut za self-serve betu, pa možete da krenete sa stvarnim test budžetom umesto enterprise obavezom.",
        },
        {
          question: "Kako merite rezultate?",
          answer:
            "OpenAI daje OAIQ piksel (first-party kolačić sa prozorom od 30 dana) plus server-side Conversions API sa deduplikacijom događaja. Podešavam oba tako da se konverzije i cena po akciji mere kako treba - ista disciplina merenja koju primenjujem na svaki Google Ads nalog, na kanalu koji većina vrti naslepo.",
        },
        {
          question: "Zašto baš sa vama za ovo?",
          answer:
            "Zato što ključna veština ovde nije kliktanje po platformi, već razumevanje namere kupca i pisanje za nju - a to radim u paid search-u preko 10 godina. Tu procenu nosim u format gde se plan tek piše, i iskren sam oko toga šta je dokazano, a šta zajedno testiramo.",
        },
      ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Slobodan Jelisavac",
    url: "https://www.slobodan-jelisavac.com",
    jobTitle: isEn ? "Google Ads Consultant" : "Google Ads Konsultant",
  };

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
          "Early-access management of advertising inside ChatGPT: context-hint strategy, chat-card creative, OAIQ pixel tracking, and landing pages for considered-purchase brands.",
        provider: {
          "@type": "Person",
          name: "Slobodan Jelisavac",
          url: "https://www.slobodan-jelisavac.com",
        },
        areaServed: ["United States", "United Kingdom", "Australia", "Canada", "Serbia"],
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "1500",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "1500",
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
          "Early-access upravljanje oglašavanjem unutar ChatGPT-a: strategija konteksta, kreativa za chat kartice, OAIQ merenje i landing stranice za brendove sa promišljenom kupovinom.",
        provider: {
          "@type": "Person",
          name: "Slobodan Jelisavac",
          url: "https://www.slobodan-jelisavac.com",
        },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Dark Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Breadcrumb Navigation */}
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
              {isEn ? "ChatGPT Ads Agency — Early Access" : "ChatGPT Ads agencija - Early Access"}
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {isEn
                ? "Where conversations become conversions"
                : "Gde razgovori postaju konverzije"}
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              {isEn ? (
                <>
                  ChatGPT now sells sponsored placements inside its answers — a
                  card that appears the moment someone is reasoning through a
                  decision. It reaches a buyer at peak intent, before they ever
                  open Google. The format is new and the auction is still thin.
                  I help considered-purchase brands get in early, correctly, and
                  measured.
                </>
              ) : (
                <>
                  ChatGPT sada prodaje sponzorisana mesta unutar svojih odgovora
                  - kartica koja se pojavi u trenutku dok neko razmišlja o
                  odluci. Dolazi do kupca u trenutku najveće namere, pre nego što
                  uopšte otvori Google. Format je nov i aukcija je i dalje retka.
                  Pomažem brendovima sa promišljenom kupovinom da uđu rano,
                  ispravno i mereno.
                </>
              )}
            </p>

            <div className="border-l-4 border-primary bg-blue-50 p-4 md:p-5 rounded-r-lg mb-8 text-left">
              <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                <strong>{isEn ? "Quick answer:" : "Brzi odgovor:"}</strong>{" "}
                {isEn
                  ? "ChatGPT Ads are live in a self-serve beta (CPC ~$3–5, no minimum spend). Advertiser access is expanding market by market — I run pilots where it's live and put regional brands on early-access footing so they launch on day one."
                  : "ChatGPT Ads su živi u self-serve beti (CPC ~3-5 dolara, bez minimalnog budžeta). Pristup za oglašivače se širi tržište po tržište - vrtim pilote gde je format živ i postavljam regionalne brendove na early-access poziciju da krenu prvog dana."}
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-slate-800 px-4 py-2 rounded-lg text-sm">
                {isEn ? "Early-mover advantage" : "Prednost ranog ulaska"}
              </div>
              <div className="bg-slate-800 px-4 py-2 rounded-lg text-sm">
                {isEn ? "10+ years in paid search" : "10+ godina u paid search-u"}
              </div>
              <div className="bg-slate-800 px-4 py-2 rounded-lg text-sm">
                {isEn ? "Senior-led, honest scope" : "Senior pristup, iskren opseg"}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kontakt" variant="secondary">
                {isEn ? "Join the early-access list" : "Prijavi se za early access"}
              </Button>
              <Button href="/usluge/google-ads-upravljanje" variant="primary">
                {isEn ? "Google Ads Management" : "Google Ads upravljanje"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Intro Section */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6">
            {isEn ? "A new era of ads" : "Nova era oglašavanja"}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              {isEn ? (
                <>
                  For twenty years, paid advertising followed the same shape: a
                  person types a query, or scrolls a feed, and an ad tries to
                  interrupt them. ChatGPT breaks that shape. People don't search
                  it — they think out loud in it. They describe a problem in full
                  sentences and ask the model to help them decide.
                </>
              ) : (
                <>
                  Dvadeset godina je plaćeno oglašavanje imalo isti oblik: čovek
                  ukuca upit ili skroluje feed, a oglas pokušava da ga prekine.
                  ChatGPT lomi taj oblik. Ljudi ga ne pretražuju - oni u njemu
                  razmišljaju naglas. Opišu problem u punim rečenicama i traže od
                  modela da im pomogne da odluče.
                </>
              )}
            </p>
            <p>
              {isEn ? (
                <>
                  That's the most valuable moment in the entire buying journey,
                  and until 2026 no one could buy space in it. Now you can. A
                  sponsored card can appear at the bottom of the answer, matched
                  to the meaning of the conversation — never changing the answer
                  itself, but reaching the person exactly when they're weighing a
                  choice.
                </>
              ) : (
                <>
                  To je najvredniji trenutak u celom putu kupovine, i do 2026. u
                  njemu se nije mogao kupiti prostor. Sada može. Sponzorisana
                  kartica može da se pojavi na dnu odgovora, povezana sa značenjem
                  razgovora - nikad ne menja sam odgovor, ali dolazi do čoveka
                  tačno kada vaga izbor.
                </>
              )}
            </p>
            <p>
              {isEn ? (
                <>
                  This service is for brands that want to be there first. Not with
                  hype, but with the boring things that make a new channel work:
                  correct account setup, a real strategy for how the model reads
                  intent, creative built for the format, landing pages that match,
                  and tracking that proves it. That's the difference between
                  experimenting and actually learning a channel before everyone
                  else does.
                </>
              ) : (
                <>
                  Ova usluga je za brendove koji žele da budu prvi. Ne sa
                  pompom, već sa dosadnim stvarima koje čine da novi kanal radi:
                  ispravan setup naloga, prava strategija za to kako model čita
                  nameru, kreativa napravljena za format, usklađene landing
                  stranice i merenje koje to dokazuje. To je razlika između
                  eksperimentisanja i stvarnog učenja kanala pre svih ostalih.
                </>
              )}
            </p>
          </div>
        </div>
      </Section>

      {/* Why ChatGPT Ads — 3 differentiators */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "Why ChatGPT Ads" : "Zašto ChatGPT Ads"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isEn
              ? "Three reasons this format is different from anything you're running now."
              : "Tri razloga zašto je ovaj format drugačiji od svega što sada vrtite."}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {differentiators.map((item) => (
            <Card key={item.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Deliverables */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "What's included" : "Šta je uključeno"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isEn
              ? "End to end — from account access to measured conversions."
              : "S kraja na kraj - od pristupa nalogu do merenih konverzija."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item) => (
            <Card key={item.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Comparison table */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "ChatGPT Ads vs Google vs Meta" : "ChatGPT Ads vs Google vs Meta"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isEn
              ? "Not a replacement for your other channels — a different moment in the buying journey."
              : "Nije zamena za vaše druge kanale - to je drugačiji trenutak u putu kupovine."}
          </p>
        </div>
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden text-sm">
            <thead>
              <tr className="bg-slate-900 text-white text-left">
                <th className="px-4 py-3 font-heading font-semibold"></th>
                <th className="px-4 py-3 font-heading font-semibold">ChatGPT Ads</th>
                <th className="px-4 py-3 font-heading font-semibold">{isEn ? "Google Search" : "Google Search"}</th>
                <th className="px-4 py-3 font-heading font-semibold">{isEn ? "Meta" : "Meta"}</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.dimension} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-semibold text-gray-900 align-top">{row.dimension}</td>
                  <td className="px-4 py-3 text-gray-700 align-top border-l-2 border-primary bg-blue-50/40">
                    {row.chatgpt}
                  </td>
                  <td className="px-4 py-3 text-gray-600 align-top">{row.google}</td>
                  <td className="px-4 py-3 text-gray-600 align-top">{row.meta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Ideal clients */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "Who this is for" : "Za koga je ovo"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isEn
              ? "ChatGPT Ads reward intent and message quality — some businesses are a natural fit."
              : "ChatGPT Ads nagrađuju nameru i kvalitet poruke - neki biznisi su prirodno pogodni."}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <ul className="space-y-3 text-gray-700">
              {idealClients.map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-accent mr-3 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <p className="text-base text-gray-500 mt-6">
            {isEn ? (
              <>
                ChatGPT Ads work best as one channel in a coherent strategy. I run
                it alongside{" "}
                <Link href="/usluge/google-ads-upravljanje" className="underline">
                  Google Ads management
                </Link>{" "}
                and{" "}
                <Link href="/usluge/remarketing" className="underline">
                  remarketing
                </Link>{" "}
                so intent captured in one place is followed up in another.
              </>
            ) : (
              <>
                ChatGPT Ads najbolje rade kao jedan kanal u koherentnoj strategiji.
                Vodim ga uz{" "}
                <Link href="/usluge/google-ads-upravljanje" className="underline">
                  Google Ads upravljanje
                </Link>{" "}
                i{" "}
                <Link href="/usluge/remarketing" className="underline">
                  remarketing
                </Link>{" "}
                tako da se namera uhvaćena na jednom mestu isprati na drugom.
              </>
            )}
          </p>
        </div>
      </Section>

      {/* Not for you */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <Card className="h-full border-2 border-red-200 bg-red-50">
            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
              {isEn ? "Not for you if..." : "Nije za vas ako..."}
            </h3>
            <ul className="space-y-3">
              {notFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-red-600 mr-1 mt-1">✕</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              {isEn ? (
                <>
                  If a proven, high-volume channel is what you need right now,
                  start with{" "}
                  <Link href="/usluge/google-ads-upravljanje" className="underline">
                    Google Ads management
                  </Link>{" "}
                  and add ChatGPT Ads as the format matures.
                </>
              ) : (
                <>
                  Ako vam sada treba proveren kanal sa velikim obimom, počnite sa{" "}
                  <Link href="/usluge/google-ads-upravljanje" className="underline">
                    Google Ads upravljanjem
                  </Link>{" "}
                  i dodajte ChatGPT Ads kako format sazreva.
                </>
              )}
            </p>
          </Card>
        </div>
      </Section>

      <RelatedGlossaryTerms
        slugs={["cpc", "cpm", "conversion", "first-party-data", "landing-page", "ctr"]}
        locale={locale}
      />

      {/* FAQ Section - Accordion Style */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "Frequently asked questions" : "Često postavljana pitanja"}
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
              {isEn
                ? "Get in before the window closes"
                : "Uđite pre nego što se prozor zatvori"}
            </h2>
            <p className="text-gray-300 mb-8">
              {isEn
                ? "The advertisers who learn ChatGPT Ads now will own the cheap, uncrowded auction. Let's see if your business fits — and get you on the early-access list."
                : "Oglašivači koji ChatGPT Ads nauče sada držaće jeftinu, nezakrčenu aukciju. Da vidimo da li vaš biznis odgovara - i da vas stavimo na early-access listu."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/kontakt" variant="secondary">
                {isEn ? "Join the early-access list" : "Prijavi se za early access"}
              </Button>
              <Button href="/case-studies" variant="primary">
                {isEn ? "View case studies" : "Pogledajte rezultate"}
              </Button>
            </div>
            <div className="text-sm text-gray-400 mt-8 space-x-3">
              <Link href="/usluge/google-ads-upravljanje" className="hover:text-accent transition-colors">
                {isEn ? "Google Ads management" : "Google Ads upravljanje"}
              </Link>
              <span>•</span>
              <Link href="/usluge/search-kampanje" className="hover:text-accent transition-colors">
                {isEn ? "Search campaigns" : "Search kampanje"}
              </Link>
              <span>•</span>
              <Link href="/usluge/remarketing" className="hover:text-accent transition-colors">
                {isEn ? "Remarketing" : "Remarketing"}
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
