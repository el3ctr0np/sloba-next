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
            "ChatGPT matches ads to the full meaning of the conversation, not to a keyword you bid on. In the EU and Switzerland there's no personalization layer at all right now — no memory, no past conversations, no ad history — just the current chat, broad location, and language. Context hints and creative carry the entire match. Message-to-market fit wins here, not audience targeting.",
        },
        {
          title: "Early-mover advantage",
          description:
            "The channel is about seven months old and self-serve access only just opened across the EU. The auction is still far from saturated, but the window is closing fast — OpenAI hit a $1B annualized run rate in under 200 days. Brands that learn the format now build the account history and creative learnings that show up as an advantage once the auction matures.",
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
            "ChatGPT povezuje oglas sa punim značenjem razgovora, ne sa ključnom reči na koju licitirate. U EU i Švajcarskoj trenutno nema sloja personalizacije - nema memorije, prošlih razgovora, ni istorije oglasa - samo tekući razgovor, gruba lokacija i jezik. Kontekstualne smernice i kreativa nose ceo mehanizam poklapanja. Ovde pobeđuje poklapanje poruke i tržišta, ne targetiranje publike.",
        },
        {
          title: "Prednost ranog ulaska",
          description:
            "Kanal ima oko sedam meseci, a self-serve pristup se u EU tek otvorio. Aukcija je i dalje daleko od zasićene, ali se prozor brzo zatvara - OpenAI je za manje od 200 dana dostigao run rate prihoda od milijardu dolara na godišnjem nivou. Brendovi koji format nauče sada grade istoriju naloga i uvide u kreativu koji postaju prednost kad aukcija sazri.",
        },
      ];

  const deliverables = isEn
    ? [
        {
          title: "Advertiser account & access",
          description:
            "Setup inside OpenAI's Ads Manager — billing, budgets, bidding, and pacing configured correctly from day one, plus a category eligibility check (consumer categories only; finance, healthcare, and legal are US-only for now).",
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
            "CPC, CPM, and oCPC objectives, bid levels, and context hints tested against your real conversion data — the same discipline I bring to a Google Ads account.",
        },
      ]
    : [
        {
          title: "Nalog i pristup platformi",
          description:
            "Setup unutar OpenAI Ads Manager-a - naplata, budžeti, licitiranje i pacing pravilno podešeni od prvog dana, uz proveru kategorije i podobnosti (samo consumer kategorije; finansije, zdravstvo i pravne usluge su za sada samo za SAD).",
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
            "CPC, CPM i oCPC ciljevi, nivoi licitacije i kontekstualne smernice testirani na vašim stvarnim podacima o konverzijama - ista disciplina koju nosim u Google Ads nalog.",
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
          chatgpt: "Young — tens of thousands of advertisers vs Google's millions",
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
          chatgpt: "Mlada - desetine hiljada oglašivača naspram miliona na Google-u",
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
        "Advertisers with a legal entity or operations in a supported market — US, UK, EU (including Croatia and Slovenia), Canada, Australia, and 40+ other countries",
        "Businesses in an allowed consumer category — eCommerce, travel, digital products, education, or local services",
        "Brands that already run Google or Meta and want a genuine first-mover channel",
        "Teams that value being early to a format over waiting for a proven playbook",
      ]
    : [
        "Brendovi sa promišljenom kupovinom gde kupci istražuju pre odluke (B2B, SaaS, premium eCommerce, usluge)",
        "Oglašivači sa pravnim entitetom ili poslovanjem na podržanom tržištu - SAD, UK, EU (uključujući Hrvatsku i Sloveniju), Kanada, Australija i još 40+ zemalja",
        "Biznisi u dozvoljenoj consumer kategoriji - eCommerce, putovanja, digitalni proizvodi, edukacija ili lokalne usluge",
        "Brendovi koji već vrte Google ili Meta i žele stvarni first-mover kanal",
        "Timovi kojima je vrednost biti rano na formatu, a ne čekati proveren plan",
      ];

  const notFor = isEn
    ? [
        "You need guaranteed volume today — beta inventory and reach are still limited",
        "You have no verified conversion tracking — without it, a new channel is invisible",
        "You want a channel that runs itself with no testing budget for a young format",
        "You're in finance, healthcare, or legal outside the US — OpenAI currently restricts these categories to US advertisers",
      ]
    : [
        "Treba vam zagarantovan obim odmah - beta inventar i domet su još ograničeni",
        "Nemate verifikovan tracking konverzija - bez toga je novi kanal nevidljiv",
        "Želite kanal koji se vrti sam, bez budžeta za testiranje mladog formata",
        "Bavite se finansijama, zdravstvom ili pravnim uslugama van SAD - OpenAI trenutno dozvoljava ove kategorije samo oglašivačima iz SAD",
      ];

  const faqs = isEn
    ? [
        {
          question: "Are ChatGPT Ads actually live in 2026?",
          answer:
            "Yes, fully live. The rollout moved fast: a US pilot from February 9, UK/Japan/Brazil/Mexico/Korea confirmed live by August 11, and the EU (all 27 member states plus Iceland, Liechtenstein, Norway, and Switzerland) live from August 24. By August 31, self-serve advertiser access had opened across 47 countries, and OpenAI reported a $1B annualized run rate reached in under 200 days. Ads only appear to logged-in Free and Go users, as clearly labeled sponsored cards below the answer — they never change the answer itself, and Plus, Pro, Business, Enterprise, and Edu users don't see them at all.",
        },
        {
          question: "Can I run ChatGPT Ads from Serbia / the region?",
          answer:
            "Honestly, not as a Serbian entity — Serbia isn't on OpenAI's supported list, on either side: ads don't reach Serbian users and a Serbian business can't open an advertiser account. Registering somewhere else purely to get around that isn't a gray area either — OpenAI's policy explicitly prohibits misrepresenting your business location. What does work: advertising through a real legal entity in a supported market (the EU, UK, or US — Croatia and Slovenia are both on the list) or through a client's own entity if they operate there. If your business already has that footing, I can run a pilot now.",
        },
        {
          question: "How is targeting different from Google Ads?",
          answer:
            "There are no keywords to bid on. You give the platform context hints — broad descriptions of the questions and situations your buyer brings to the chat — and it matches you on the full meaning of the current conversation. In the EU and Switzerland it's even more contextual right now: there's no personalization layer at all, so nothing about a user's past chats, memory, or ad history factors in — just the live conversation, rough location, and language. There's also no keyword lists, no demographic targeting, no site-visitor retargeting, and no query-level reporting (you won't see which prompt triggered your ad). It rewards understanding your customer over building keyword lists, which is where a senior strategist matters more, not less.",
        },
        {
          question: "What does it cost to advertise?",
          answer:
            "There's no minimum spend anymore — that requirement (once $200–250K, later $50K) was dropped in May. OpenAI recommends a starting max CPC around $3–5, but independent tests tell a more honest story: real CPCs have ranged from $1.72 to $12 depending on vertical and competition. CPM and a newer oCPC (conversion-optimized) model are also available. My honest framing for a first pilot: treat the budget as a research budget, not a guaranteed-return media buy — that's true of any young ad channel.",
        },
        {
          question: "How do you measure results?",
          answer:
            "OpenAI provides the OAIQ pixel (a first-party cookie with a roughly 30-day window) plus a server-side Conversions API with event deduplication. I set both up properly. What I'm upfront about: there's no native GA4 integration — traffic lands as plain referral — and several agencies have publicly reported a real gap between the clicks OpenAI's dashboard shows and the sessions analytics actually records (the cause isn't established; I won't call it fraud or double-counting, because neither is proven). My standard, agreed before we launch anything: your own analytics is the source of truth, not the platform's own numbers.",
        },
        {
          question: "Why work with you specifically on this?",
          answer:
            "Because the winning skill here isn't platform button-clicking, it's understanding buyer intent and writing to it — which is what I've done in paid search for 10+ years. The ChatGPT Ads playbook is still being written; nobody has a proven formula yet. What I bring is the measurement discipline from running Google Ads accounts, applied honestly to a channel where most advertisers are still flying blind, and a straight answer about what's proven versus what we're testing together.",
        },
      ]
    : [
        {
          question: "Da li ChatGPT Ads zaista postoje u 2026?",
          answer:
            "Da, potpuno je živ. Rollout je bio brz: US pilot od 9. februara, UK/Japan/Brazil/Meksiko/Koreja potvrđeno živi do 11. avgusta, a EU (svih 27 zemalja članica plus Island, Lihtenštajn, Norveška i Švajcarska) živa od 24. avgusta. Do 31. avgusta se self-serve pristup za oglašivače otvorio u 47 zemalja, a OpenAI je objavio da je za manje od 200 dana dostigao run rate prihoda od milijardu dolara na godišnjem nivou. Oglase vide samo ulogovani Free i Go korisnici, kao jasno označene sponzorisane kartice ispod odgovora - nikad ne menjaju sam odgovor, a Plus, Pro, Business, Enterprise i Edu korisnici ih uopšte ne vide.",
        },
        {
          question: "Mogu li da vrtim ChatGPT Ads iz Srbije / regiona?",
          answer:
            "Iskreno, ne kao srpska firma - Srbija nije na OpenAI-jevoj listi podržanih tržišta, sa nijedne strane: oglasi ne dolaze do srpskih korisnika i srpska firma ne može da otvori advertiser nalog. Registracija negde drugde samo da bi se to zaobišlo nije siva zona - OpenAI-jeva pravila izričito zabranjuju lažno predstavljanje lokacije biznisa. Ono što radi: oglašavanje kroz stvaran pravni entitet na podržanom tržištu (EU, UK ili SAD - Hrvatska i Slovenija su obe na listi) ili kroz entitet klijenta ako tamo posluje. Ako vaša firma već ima takvu poziciju, mogu da pokrenem pilot odmah.",
        },
        {
          question: "Kako se targeting razlikuje od Google Ads?",
          answer:
            "Nema ključnih reči na koje se licitira. Platformi dajete kontekstualne smernice - opise pitanja i situacija sa kojima vaš kupac dolazi u chat - a ona vas povezuje na osnovu punog značenja tekućeg razgovora. U EU i Švajcarskoj je to trenutno još izraženije: nema sloja personalizacije uopšte, pa ništa od prošlih razgovora, memorije ili istorije oglasa ne ulazi u igru - samo tekući razgovor, gruba lokacija i jezik. Nema ni listi ključnih reči, ni demografskog targetiranja, ni retargetinga posetilaca sajta, ni izveštaja na nivou upita (nećete videti koji prompt je okinuo vaš oglas). Nagrađuje razumevanje kupca više nego pravljenje listi ključnih reči, i tu senior strateg znači više, a ne manje.",
        },
        {
          question: "Koliko košta oglašavanje?",
          answer:
            "Minimalnog budžeta više nema - ta obaveza (nekad 200-250 hiljada dolara, kasnije 50 hiljada) ukinuta je u maju. OpenAI preporučuje početnu maksimalnu CPC licitaciju od oko 3-5 dolara, ali nezavisni testovi daju iskreniju sliku: realni CPC-evi su se kretali od 1,72 do 12 dolara zavisno od vertikale i konkurencije. Postoje i CPM i noviji oCPC model (optimizacija ka konverziji). Moj iskren okvir za prvi pilot: budžet tretirati kao istraživački, ne kao medijski budžet sa zagarantovanim povraćajem - to važi za svaki mlad oglasni kanal.",
        },
        {
          question: "Kako merite rezultate?",
          answer:
            "OpenAI daje OAIQ piksel (first-party kolačić sa prozorom od otprilike 30 dana) plus server-side Conversions API sa deduplikacijom događaja. Oba podešavam kako treba. Ono oko čega sam iskren unapred: nema native GA4 integracije - saobraćaj stiže kao običan referral - i nekoliko agencija je javno prijavilo stvaran jaz između broja klikova koje pokazuje OpenAI-jev panel i sesija koje analitika stvarno beleži (uzrok nije utvrđen, ne zovem to prevarom ni dvostrukim brojanjem jer nijedno nije dokazano). Moj standard, dogovoren pre nego što bilo šta lansiramo: vaša sopstvena analitika je izvor istine, ne brojke same platforme.",
        },
        {
          question: "Zašto baš sa vama za ovo?",
          answer:
            "Zato što ključna veština ovde nije kliktanje po platformi, već razumevanje namere kupca i pisanje za nju - a to radim u paid search-u preko 10 godina. Playbook za ChatGPT Ads se tek piše, niko još nema dokazanu formulu. Ono što donosim je disciplina merenja iz vođenja Google Ads naloga, primenjena iskreno na kanal na kom većina oglašivača i dalje leti naslepo, i iskren odgovor o tome šta je dokazano, a šta zajedno testiramo.",
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
          "Management of advertising inside ChatGPT, live across 47 countries: context-hint strategy, chat-card creative, OAIQ pixel tracking, and landing pages for considered-purchase brands.",
        provider: {
          "@type": "Person",
          name: "Slobodan Jelisavac",
          url: "https://www.slobodan-jelisavac.com",
        },
        areaServed: ["United States", "United Kingdom", "European Union", "Croatia", "Canada", "Australia"],
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
          "Upravljanje oglašavanjem unutar ChatGPT-a, živo u 47 zemalja: strategija konteksta, kreativa za chat kartice, OAIQ merenje i landing stranice za brendove sa promišljenom kupovinom.",
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
              {isEn ? "ChatGPT Ads Agency — Live in the EU, UK & US" : "ChatGPT Ads agencija - živo u EU, UK i SAD"}
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
                  open Google. The channel is young — self-serve access opened
                  across 47 countries by the end of August 2026 — and the
                  auction is still far from mature. I help considered-purchase
                  brands get in now, correctly, and measured.
                </>
              ) : (
                <>
                  ChatGPT sada prodaje sponzorisana mesta unutar svojih odgovora
                  - kartica koja se pojavi u trenutku dok neko razmišlja o
                  odluci. Dolazi do kupca u trenutku najveće namere, pre nego što
                  uopšte otvori Google. Kanal je mlad - self-serve pristup se do
                  kraja avgusta 2026. otvorio u 47 zemalja - i aukcija je i dalje
                  daleko od zrele. Pomažem brendovima sa promišljenom kupovinom
                  da uđu sada, ispravno i mereno.
                </>
              )}
            </p>

            <div className="border-l-4 border-primary bg-blue-50 p-4 md:p-5 rounded-r-lg mb-8 text-left">
              <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                <strong>{isEn ? "Quick answer:" : "Brzi odgovor:"}</strong>{" "}
                {isEn
                  ? "ChatGPT Ads are live in a self-serve beta across 47 countries, including the US, UK, and EU (Croatia and Slovenia included) — no minimum spend. Recommended starting CPC is $3–5, though independent tests show real CPCs from $1.72 up to $12 depending on vertical. Serbia isn't on the supported list yet. I run pilots for brands with a legal entity in a supported market."
                  : "ChatGPT Ads su živi u self-serve beti u 47 zemalja, uključujući SAD, UK i EU (Hrvatska i Slovenija su na listi) - bez minimalnog budžeta. Preporučeni početni CPC je 3-5 dolara, ali nezavisni testovi pokazuju realne CPC-eve od 1,72 do 12 dolara zavisno od vertikale. Srbija još nije na listi podržanih tržišta. Vodim pilote za brendove sa pravnim entitetom na podržanom tržištu."}
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
                {isEn ? "Book a pilot conversation" : "Zakažite razgovor o pilotu"}
              </Button>
              <Button href="/usluge/google-ads-upravljanje" variant="primary">
                {isEn ? "Google Ads Management" : "Google Ads upravljanje"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SR-only availability box - gde ChatGPT Ads rade danas (1.9.2026) */}
      {!isEn && (
        <Section>
          <div className="max-w-3xl mx-auto">
            <div className="border-l-4 border-primary bg-blue-50 p-4 md:p-5 rounded-r-lg text-left">
              <p className="font-heading font-semibold text-gray-900 mb-3">
                Dostupnost: gde ChatGPT Ads rade danas
              </p>
              <ul className="space-y-2 text-gray-800 text-sm md:text-base leading-relaxed">
                <li>
                  <strong>Srbija:</strong> još nije dostupno - ni oglasi korisnicima, ni nalozi za oglašivače.
                </li>
                <li>
                  <strong>EU, uključujući Hrvatsku i Sloveniju:</strong> dostupno - oglasi korisnicima od 24.8, self-serve nalozi za oglašivače od 31.8.2026.
                </li>
                <li>
                  <strong>Ako vaša firma ima pravni entitet u EU, UK ili SAD, ili posluje na tim tržištima:</strong>{" "}
                  primenljivo odmah - to je tačno profil sa kojim radim.
                </li>
              </ul>
            </div>
          </div>
        </Section>
      )}

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
            <p>
              {isEn ? (
                <>
                  If you want the full picture before we talk, I keep a{" "}
                  <Link href={{ pathname: "/blog/[slug]", params: { slug: "chatgpt-ads-guide" } }} className="underline">
                    complete ChatGPT Ads guide
                  </Link>{" "}
                  with verified numbers, a{" "}
                  <Link href={{ pathname: "/blog/[slug]", params: { slug: "chatgpt-ads-vs-google-ads" } }} className="underline">
                    comparison with Google Ads
                  </Link>
                  , and a breakdown of{" "}
                  <Link href={{ pathname: "/blog/[slug]", params: { slug: "chatgpt-ads-europe" } }} className="underline">
                    how the rules differ in Europe
                  </Link>
                  .
                </>
              ) : (
                <>
                  Ako želite celu sliku pre razgovora, održavam{" "}
                  <Link href={{ pathname: "/blog/[slug]", params: { slug: "chatgpt-ads-vodic" } }} className="underline">
                    kompletan ChatGPT Ads vodič
                  </Link>{" "}
                  sa verifikovanim brojkama,{" "}
                  <Link href={{ pathname: "/blog/[slug]", params: { slug: "chatgpt-ads-vs-google-ads" } }} className="underline">
                    poređenje sa Google Ads-om
                  </Link>{" "}
                  i pregled toga{" "}
                  <Link href={{ pathname: "/blog/[slug]", params: { slug: "chatgpt-ads-evropa" } }} className="underline">
                    kako se pravila razlikuju u Evropi
                  </Link>
                  .
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
                ? "The advertisers who learn ChatGPT Ads now are building account history and creative learnings while the auction is still young. Let's see if your business fits — and get a pilot running."
                : "Oglašivači koji ChatGPT Ads nauče sada grade istoriju naloga i uvide u kreativu dok je aukcija još mlada. Da vidimo da li vaš biznis odgovara - i pokrenemo pilot."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/kontakt" variant="secondary">
                {isEn ? "Book a pilot conversation" : "Zakažite razgovor o pilotu"}
              </Button>
              <Button href="/case-studies" variant="primary">
                {isEn ? "View case studies" : "Pogledajte rezultate"}
              </Button>
            </div>
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
