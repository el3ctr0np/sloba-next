import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { notFound, permanentRedirect } from "next/navigation";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { AuthorBox } from "@/components/blog/AuthorBox";
import { ReadingProgressBar } from "@/components/blog/ReadingProgressBar";
import { MobileTOC } from "@/components/blog/MobileTOC";
import {
  getPost,
  getNextPost,
  getAllSlugs,
  getCanonicalSlug,
  getAlternateSlug,
  getBlogCtaTarget,
  slugMap
} from "./posts";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { ReadNext } from "@/components/blog/ReadNext";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  // Return both SR and EN slugs so both URL variants are pre-rendered
  const srSlugs = getAllSlugs("sr");
  const enSlugs = getAllSlugs("en");
  const allSlugs = [...new Set([...srSlugs, ...enSlugs])];
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = getPost(slug, locale);

  if (!post) {
    return {
      title:
        locale === "en"
          ? "Blog Post Not Found | Slobodan Jelisavac"
          : "Blog Post Nije Pronađen | Slobodan Jelisavac",
      description:
        locale === "en"
          ? "The requested blog post was not found."
          : "Traženi blog post nije pronađen."
    };
  }

  const srSlug =
    locale === "sr" ? slug : getAlternateSlug(slug, "sr");
  const enSlug =
    locale === "en" ? slug : getAlternateSlug(slug, "en");

  const ogImageUrl = post.featuredImage
    ? `https://www.slobodan-jelisavac.com${post.featuredImage}`
    : `https://www.slobodan-jelisavac.com/og/homepage.png`;

  // Suffix only when it still fits the ~60-char title budget - most post
  // titles already use that budget for the hook/year, so it usually doesn't.
  const withSuffix = `${post.title} | Slobodan Jelisavac`;
  const pageTitle = withSuffix.length <= 60 ? withSuffix : post.title;

  return {
    title: pageTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.slobodan-jelisavac.com/${locale}/blog/${slug}`,
      languages: {
        sr: `https://www.slobodan-jelisavac.com/sr/blog/${srSlug}`,
        en: `https://www.slobodan-jelisavac.com/en/blog/${enSlug}`,
        "x-default": `https://www.slobodan-jelisavac.com/en/blog/${enSlug}`
      }
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://www.slobodan-jelisavac.com/${locale}/blog/${slug}`,
      siteName: "Slobodan Jelisavac",
      locale: locale === "en" ? "en_US" : "sr_RS",
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [ogImageUrl],
    },
  };
}

/* ── FAQ Schemas ── */

// --- chatgpt-ads-vodic / chatgpt-ads-guide + klaster ---

const faqSchemaChatGptAdsSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Da li ChatGPT Ads stvarno postoje i gde se prikazuju?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, postoje od februara 2026. Prikazuju se kao sponzorisane kartice ispod kraja odgovora u ChatGPT-u, jasno označene i vizuelno odvojene, i to samo ulogovanim korisnicima na Free i Go planovima. Plus, Pro, Business, Enterprise i Edu planovi su bez oglasa, kao i korisnici ispod 18 godina, Temporary Chats i Atlas browser. Ne postoji sidebar plasman, ne postoji display mreža, i ne postoje konverzacioni formati u kojima bi oglas bio deo dijaloga, iako su najavljeni kao namera. Do 31. avgusta 2026. oglasi se prikazuju u 41 tržištu."
      }
    },
    {
      "@type": "Question",
      name: "Mogu li da se oglašavam iz Srbije?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne, zaključno sa 1. septembrom 2026. Srbija nije na listi od 47 zemalja u kojima firma može da otvori advertiser nalog, niti na listi tržišta u kojima se oglasi prikazuju korisnicima. Isto važi za Bosnu i Hercegovinu, Crnu Goru, Severnu Makedoniju, Albaniju i Kosovo. Od ex-Yu tržišta dostupne su Hrvatska i Slovenija, kao članice EU. Firma sa stvarnim pravnim entitetom koji posluje u EU, UK ili SAD može da se oglašava kroz taj entitet. Lažno predstavljanje lokacije biznisa radi zaobilaženja bloka OpenAI izričito zabranjuje kroz policy."
      }
    },
    {
      "@type": "Question",
      name: "Koliko koštaju ChatGPT Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimalni ulazni budžet više ne postoji; ukinut je 5. maja 2026. Naplata ide po CPM, CPC ili oCPC modelu, kroz relevance-weighted second-price aukciju. OpenAI preporučuje početni CPC od 3 do 5 dolara, ali nezavisni testovi sa objavljenim spendom pokazuju realizovan CPC od 1,72 do 12 dolara, zavisno od vertikale. U jednom testu bid od 3 dolara nije doneo nijednu impresiju. Minimalni budžeti kampanje postoje po tržištu, na primer 25 dolara u SAD i 15 funti u UK. Zvanični iznosi u evrima nisu objavljeni ni u jednom izvoru."
      }
    },
    {
      "@type": "Question",
      name: "Kako se meri učinak ChatGPT oglasa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kroz OpenAI merni piksel sa first-party kolačićem koji traje oko 30 dana, kroz Conversions API sa server-side slanjem i deduplikacijom po event ID-u, i kroz UTM parametre koji prolaze na klik. Native integracije sa GA4 nema, pa saobraćaj u analitici stiže kao običan referral i mora se obeležiti UTM parametrima pre lansiranja. Izveštaj na nivou upita ne postoji, dakle ne vidi se koji je prompt okinuo oglas. Više imenovanih agencija je tokom leta 2026. prijavilo da platforma broji osetno više klikova nego što analitika vidi sesija; uzrok te razlike nije javno utvrđen, a jaz se kroz avgust smanjivao."
      }
    },
    {
      "@type": "Question",
      name: "Da li oglasi utiču na odgovore ChatGPT-a?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne. Oglas se pojavljuje kao zasebna, jasno označena kartica ispod završenog odgovora i ne menja sadržaj tog odgovora. Oglašivač ne može da plati da ChatGPT preporuči njegov proizvod unutar teksta odgovora. Ako korisnik iskoristi opciju da oglas ubaci nazad u razgovor i pita nešto o njemu, oglašivač ni tada ne kontroliše šta će model odgovoriti. Oglašivač takođe nikada ne dobija sadržaj razgovora, istoriju, memorije, ime, email, preciznu lokaciju ni IP adresu korisnika, nego samo agregirane podatke o učinku kampanje."
      }
    },
    {
      "@type": "Question",
      name: "Da li su OpenAI Ads i ChatGPT Ads isto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da. OpenAI Ads je naziv platforme za oglašivače na ads.openai.com; ChatGPT Ads je kako većina ljudi, pa i sam OpenAI help centar, naziva oglase koji se pojavljuju u ChatGPT-u. Isti proizvod."
      }
    },
    {
      "@type": "Question",
      name: "Koliki budžet izdvojiti za test ChatGPT Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tretiram ga kao testiranje svakog drugog kanala: oko 10% budžeta, izdvojeno dodatno na ono što već trošite, ne preusmereno iz kanala koji radi. Nezavisno od toga, važe minimalni budžeti kampanje po tržištu - 25 dolara u SAD, 15 funti u UK, i ostali pragovi navedeni u kako se kupuju - pa 10% mora da pređe te minimume da bi test uopšte bio izvodljiv."
      }
    }
  ]
};

const faqSchemaChatGptAdsEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do ChatGPT Ads actually exist, and where do they appear?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, they have existed since February 2026. They appear as sponsored cards below the end of an answer in ChatGPT, clearly labelled and visually separated, and only to logged-in users on the Free and Go plans. Plus, Pro, Business, Enterprise and Edu plans are ad-free, as are users under 18, Temporary Chats and the Atlas browser. There is no sidebar placement, no display network, and no conversational ad format in which the ad becomes part of the dialogue, although such formats have been announced as intent. As of 31 August 2026 ads serve across 41 markets."
      }
    },
    {
      "@type": "Question",
      name: "Can I advertise if my country is not supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only through a genuine legal entity that actually operates in a supported market, or through a client entity that already does. As of 1 September 2026 businesses can open self-serve advertiser accounts in 47 countries, including the US, the UK and all EU member states. In an unsupported country you can begin creating an account and leave your details to be notified when it opens, but that gives you no earlier access and no queue priority. OpenAI policy explicitly prohibits misrepresenting a business location or its eligibility for a market, so incorporating somewhere purely to bypass the restriction is a policy violation rather than a workaround."
      }
    },
    {
      "@type": "Question",
      name: "How much do ChatGPT Ads cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no minimum entry spend any more; it was removed on 5 May 2026. Billing runs on CPM, CPC or oCPC through a relevance-weighted second-price auction. OpenAI recommends an opening CPC of $3 to $5, but independent tests with published spend show realised CPC between $1.72 and $12 depending on the vertical, and in one test a $3 bid produced no impressions at all. Per-market campaign minimums do exist, for example $25 in the US and £15 in the UK. No official euro amounts have been published in any source."
      }
    },
    {
      "@type": "Question",
      name: "How is ChatGPT Ads performance measured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Through the OpenAI measurement pixel with a first-party cookie lasting around 30 days, through a server-side Conversions API with event-ID deduplication, and through UTM parameters that pass on click. There is no native GA4 integration, so the traffic arrives in analytics as plain referral traffic and has to be tagged with UTM parameters before launch. Query-level reporting does not exist, meaning you cannot see which prompt triggered an ad. Several named agencies reported during summer 2026 that the platform counted materially more clicks than analytics recorded sessions; the cause of that gap has not been publicly established, and the gap narrowed through August."
      }
    },
    {
      "@type": "Question",
      name: "Do ads influence ChatGPT's answers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The ad appears as a separate, clearly labelled card below a completed answer and does not change the content of that answer. An advertiser cannot pay to have ChatGPT recommend its product inside the answer text. If a user pulls an ad back into the conversation to ask about it, the advertiser still has no control over what the model says. Advertisers also never receive conversation content, history, memories, name, email, precise location or IP address, only aggregated campaign performance data."
      }
    },
    {
      "@type": "Question",
      name: "Are OpenAI Ads and ChatGPT Ads the same thing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. OpenAI Ads is the name of the advertiser platform at ads.openai.com; ChatGPT Ads is what most people, including OpenAI's own help centre, call the ads that show up inside ChatGPT. Same product."
      }
    },
    {
      "@type": "Question",
      name: "How much budget should I set aside to test ChatGPT Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I treat it like testing any other channel: roughly 10% of budget, set aside on top of what you already spend, not diverted from a channel that is working. Separately, per-market campaign minimums still apply - $25 in the US, £15 in the UK, and the other floors listed under how to buy them - so the 10% has to clear those minimums before it is a workable test."
      }
    }
  ]
};

const faqSchemaChatGptVsGoogleSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Da li ChatGPT Ads zamenjuju Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne. Google Search hvata tražnju koja već postoji, i za većinu naloga koje vodim to je i dalje kanal koji nosi najveći deo konverzija. ChatGPT Ads targetira potpuno drugačiji trenutak - korisnika čije je pitanje već rešeno gotovim odgovorom. Tretiram ga kao dodatak, ne zamenu, i budžet za Search ne diram dok se ChatGPT test ne pokaže."
      }
    },
    {
      "@type": "Question",
      name: "Koliki budžet za prvi test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tretiram ga kao istraživački trošak, ne kao kampanju sa garantovanim povratom - budžet dovoljno mali da gubitak ne boli, dovoljno velik da se prikupi nekoliko nedelja podataka o klikovima i sesijama. Minimum spend istorijski ne postoji (ukinut u maju 2026), ali za smislen zaključak i dalje treba prostora da algoritam prođe kroz learning fazu."
      }
    },
    {
      "@type": "Question",
      name: "Zašto je CTR toliko niži nego na Search-u?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zato što oglas stiže posle odgovora, ne pre njega. Na Search-u je oglas deo procesa traženja rešenja - korisnik ga vidi dok još odlučuje. Na ChatGPT-ju je odgovor već isporučen, pitanje je zatvoreno u glavi korisnika, i kartica ispod odgovora traži dodatni korak pažnje koji nije nužan da bi korisnik dobio ono zbog čega je došao. Nezavisni testovi konvergiraju na 0,65-1,3%, i to se ponavlja kroz više izvora - nije greška u podešavanju kampanje."
      }
    },
    {
      "@type": "Question",
      name: "Mogu li da vodim oba kanala istovremeno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, i to je uobičajen setup za naloge koji su već prošli osnovnu Search fazu. Preduslov je da imate GA4 postavljen i da pratite sesije nezavisno od Ads Manager izveštaja - zbog klik-diskrepance opisane gore, brojevi unutar ChatGPT platforme sami po sebi nisu dovoljan signal za odluku o budžetu. Ako GA4 nije čist, prvo to sredite, na bilo kom kanalu."
      }
    }
  ]
};

const faqSchemaChatGptVsGoogleEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do ChatGPT Ads replace Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Google Search captures demand that already exists, and for most accounts I run, it's still the channel carrying the bulk of conversions. ChatGPT Ads targets a completely different moment — a user whose question has already been resolved by a finished answer. I treat it as an addition, not a replacement, and I don't touch the Search budget until a ChatGPT test proves itself."
      }
    },
    {
      "@type": "Question",
      name: "How much budget for a first test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I treat a first test as a research cost, not a campaign with a guaranteed return — small enough that losing it doesn't hurt, large enough for a few weeks of click and session data. There's no historical minimum spend anymore (removed May 2026), but a meaningful conclusion still needs room for the algorithm to get through a learning phase."
      }
    },
    {
      "@type": "Question",
      name: "Why is the CTR so much lower than Search?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because the ad arrives after the answer, not before it. On Search, the ad is part of finding a solution — the user sees it while still deciding. On ChatGPT, the answer is already delivered, the question is closed, and a card below it asks for extra attention that isn't necessary to get what the user came for. Independent tests converge on 0.65-1.3% across multiple sources — it's not a campaign setup mistake."
      }
    },
    {
      "@type": "Question",
      name: "Can I run both channels at the same time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and it's a common setup for accounts that have already gone through a solid Search phase. The precondition is GA4 tracking sessions independently of Ads Manager reporting — given the click discrepancy described above, ChatGPT's own numbers alone aren't a sufficient signal for a budget decision. If GA4 isn't clean, fix that first, on either channel."
      }
    }
  ]
};

const faqSchemaChatGptEvropaSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "U kojim evropskim zemljama ChatGPT Ads rade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "U svih 27 članica Evropske unije plus Island, Lihtenštajn, Norveška i Švajcarska - ukupno 31 tržište. Oglasi su korisnicima počeli da se prikazuju 24.8.2026, a self-serve nalozi za oglašivače su otvoreni od 31.8.2026. Van te liste, u regionu, ostaju Srbija i ceo ne-EU Zapadni Balkan."
      }
    },
    {
      "@type": "Question",
      name: "Da li mogu da targetiram po publikama u EU?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne na način na koji ste navikli iz drugih platformi. U Evropskom ekonomskom prostoru i Švajcarskoj oglasi se trenutno biraju bez personalizacije - samo po tekućem razgovoru, gruboj lokaciji i jeziku. Nema memorije, prošlih razgovora niti ad istorije koje bi ušle u izbor. Ono što oglašivač i dalje kontroliše su context hints na nivou ad grupe i geo targeting, ali oba su znatno grublji alat nego audience targeting na koji ste navikli."
      }
    },
    {
      "@type": "Question",
      name: "Šta je DSA registar oglasa i kada stiže?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evropska komisija je 31.8.2026 designirala ChatGPT kao Very Large Online Search Engine po Digital Services Act-u, sa rokom usklađivanja do kraja decembra 2026. Deo obaveza je javni ad repository - registar koji čuva sadržaj oglasa, ime oglašivača, period prikazivanja, targeting parametre i domet, dostupan javno godinu dana. U praksi je to slično onome što Meta Ad Library radi za Facebook i Instagram oglase, samo za ChatGPT."
      }
    },
    {
      "@type": "Question",
      name: "Može li firma iz Srbije da se oglašava?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Direktno ne. Srbija nije na listi ni za prikazivanje oglasa ni za otvaranje advertiser naloga, kao ni ostatak ne-EU Zapadnog Balkana. Hrvatska i Slovenija jesu dostupne. Ako firma ima stvaran pravni entitet u jednoj od podržanih zemalja - na primer u EU ili UK - može da se oglašava kroz taj entitet. Registracija firme negde drugde samo da bi se zaobišao blok nije dozvoljena po policy-ju, koji izričito zabranjuje lažno predstavljanje lokacije biznisa."
      }
    }
  ]
};

const faqSchemaChatGptEvropaEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which European countries do ChatGPT Ads run in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All 27 EU member states plus Iceland, Liechtenstein, Norway, and Switzerland — 31 markets in total. Ads started showing to users on August 24, 2026, and self-serve accounts for advertisers opened on August 31, 2026. Outside that list, in the region, that leaves Serbia and the rest of the non-EU Western Balkans."
      }
    },
    {
      "@type": "Question",
      name: "Can I target by audience in the EU?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not the way you're used to on other platforms. Inside the European Economic Area and Switzerland, ads are currently selected without personalization — only the current conversation, rough location, and language factor in. There's no memory, past conversation, or ad history feeding the choice. What an advertiser still controls is context hints at the ad group level and geo targeting, but both are a much blunter tool than the audience targeting you're likely used to."
      }
    },
    {
      "@type": "Question",
      name: "What is the DSA ad repository, and when is it coming?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On August 31, 2026, the European Commission designated ChatGPT a Very Large Online Search Engine under the Digital Services Act, with a compliance deadline of end of December 2026. Part of that obligation is a public ad repository — a registry that stores ad content, advertiser name, the period an ad ran, targeting parameters, and reach, kept publicly available for a year. In practice it's similar to what Meta Ad Library does for Facebook and Instagram ads, just for ChatGPT."
      }
    },
    {
      "@type": "Question",
      name: "What if my country isn't on the supported list?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can still advertise if your business has a real legal entity registered in a supported market — for example, an EU or UK entity. Registering a shell entity elsewhere purely to get around a geographic block isn't allowed under the policy, which explicitly prohibits misrepresenting a business's location. There's no waitlist for unsupported countries either — an account can be created with a notification for when the market opens, but that doesn't grant earlier access."
      }
    }
  ]
};


// --- product-feed-optimizacija-scorecard / merchant-center-feed-scorecard ---
const faqSchemaFeedScorecardSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kako da ocenim svoj feed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Skinite feed iz Merchant Center-a (Products → Feeds → Download), otvorite ga u tabeli, za svaku kolonu izbrojte popunjeno naspram ukupnog broja proizvoda, pretvorite u procenat i usrednjite. Ceo postupak je opisan korak po korak u sekciji \"Kako da ocenite svoj feed\" iznad."
      }
    },
    {
      "@type": "Question",
      name: "Koliko karaktera sme naslov?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google dozvoljava do 150 karaktera. Praktično se najviše čita i prikazuje u prvih 60 do 70, pa je tu fokus, ali ostatak prostora nije bez svrhe - u ovom katalogu prosečan naslov koristi samo 51 karakter, trećinu dozvoljenog."
      }
    },
    {
      "@type": "Question",
      name: "Šta je GTIN i da li mi treba?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GTIN je zvanični barkod broj proizvoda (EAN, UPC i slično), obično ga dodeljuje proizvođač. Ako vaš proizvod ima barkod, taj broj ide u ovo polje. Ako ga stvarno nema - privatna etiketa, ručno rađen proizvod - onda umesto da ga izmišljate, postavite identifier_exists na false i time eksplicitno kažete Google-u da nedostatak nije greška."
      }
    },
    {
      "@type": "Question",
      name: "Zašto mi se set poredi sa jednim proizvodom?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bez is_bundle i multipack oznaka, benchmark cenovne konkurentnosti tretira artikal kao jedan proizvod, pa se poredi sa pojedinačnim komponentama i cena izgleda nesrazmerno visoka."
      }
    },
    {
      "@type": "Question",
      name: "Koja polja su obavezna?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "id, title, description, link, image_link, availability, price i brand. Ovih osam Google traži da bi proizvod uopšte prošao odobrenje, i skoro svaka platforma za e-trgovinu ih popunjava automatski."
      }
    },
    {
      "@type": "Question",
      name: "Da li vredi popunjavati baš sve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne. Cilj ocenjivanja nije 100 od 100, nego prepoznavanje koja polja stvarno menjaju nešto za vašu kategoriju. Materijal, na primer, u skincare nosi skoro nula vrednosti. Boja je druga priča - za čist skincare nevažna, ali čim se u katalogu nađe i šminka sa nijansama, vredi je popuniti tamo. Vreme uloženo u polja koja ne važe za vaš katalog je vreme koje niste uložili u naslove ili u oznake za setove."
      }
    },
    {
      "@type": "Question",
      name: "Koliko često treba ponovo oceniti feed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Feed nije nešto što se namesti pa zaboravi. Svaka veća serija novih proizvoda menja pokrivenost, pa je ocenjivanje na svaka dva do tri meseca dovoljno da uhvatite pad pre nego što postane trend."
      }
    },
    {
      "@type": "Question",
      name: "Da li je 33 od 100 loša ocena?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tretirajte je kao početno merenje, ne kao ocenu u školskom smislu - ovu metodu još nisam primenio na dovoljno naloga da bih objavio poredbeni prosek. Važan je oblik: obavezna polja skoro puna, pojačivači na pola, treći sloj na nuli. Ako vaš sopstveni audit pokaže isti oblik, redosled popravki iz ovog teksta važi bez obzira na to koji broj vama izađe."
      }
    }
  ]
};

const faqSchemaFeedScorecardEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I score my own feed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Download your feed from Merchant Center → Products → Feeds, open it in a spreadsheet, count filled cells per column with COUNTA divided by total rows, then average the resulting percentages across every attribute you check. The full step-by-step is in the \"How to score your own feed\" section above."
      }
    },
    {
      "@type": "Question",
      name: "How many characters can a Google Shopping title be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "150 characters. In the catalogue I audited the average title used only 51 of those, and 89% of titles sat under 70 characters - meaning most of the available match space simply wasn't claimed."
      }
    },
    {
      "@type": "Question",
      name: "What is a GTIN, and do I need one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A GTIN (Global Trade Item Number) is the barcode-level identifier - UPC, EAN, or ISBN depending on the market - that uniquely identifies a manufactured product. If your product genuinely has one, submit it; it strengthens Google's matching and is required for many branded products to be fully eligible. If it genuinely doesn't have one, set identifier_exists to false rather than leaving both fields blank."
      }
    },
    {
      "@type": "Question",
      name: "Why is my bundle being compared to a single product?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because is_bundle isn't set to true on the listing. Without it, the price-competitiveness benchmark treats the item as a single product, so it gets compared against single-item listings and can come out looking overpriced. Set is_bundle and, where relevant, multipack, on every set."
      }
    },
    {
      "@type": "Question",
      name: "Which feed fields are actually required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The core set is id, title, description, link, image_link, availability, price, and brand - most platforms populate these automatically, which is why they're rarely the actual problem. Some categories add further required fields (certain apparel or media attributes), but for most retail catalogues these eight are the baseline."
      }
    },
    {
      "@type": "Question",
      name: "Is it actually worth filling in every attribute?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, and that's the point of the \"what not to bother with\" section above. Fill in what applies to your category and skip what doesn't - a material field on a face cream isn't doing anything, but the same field on a jacket is load-bearing."
      }
    },
    {
      "@type": "Question",
      name: "Is 33/100 a bad score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Treat it as a starting measurement, not a grade - I haven't run this method across enough accounts to publish a benchmark. What matters is the shape covered above; if your own audit produces the same one, the fix order in this post applies directly regardless of what your overall number comes out to."
      }
    },
    {
      "@type": "Question",
      name: "How often should a feed be re-scored?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every sizeable batch of new products changes attribute coverage, because new items arrive with whatever the platform fills in by default rather than with whatever you fixed by hand. Re-scoring every two to three months is enough to catch a decline while it is still a handful of products rather than a trend."
      }
    }
  ]
};

const faqSchemaGoogleVsMetaSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koji kanal je bolji za početnike?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Search je obično lakši za merenje direktnog ROI-a jer korisnici imaju visoku nameru. Meta zahteva jaku kreativu i dublje razumevanje audience-a. Ali zavisi od vašeg biznisa - ako prodajete vizuelno privlačne proizvode, Meta može biti prirodniji početak. Preporučujem da startujete sa onom platformom koja ima jasniju vezu između oglasa i prodaje."
      }
    },
    {
      "@type": "Question",
      name: "Koliki budžet treba za testiranje obe platforme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum €800-1,500 ukupno (€500+ Google, €300+ Meta) za 60-90 dana da biste dobili smislene podatke za odlučivanje. Ispod ovoga, rezultati su često statistički besmisleni. Ako vam je budžet manji, startujte sa jednom platformom, optimizujte je, pa dodajte drugu kasnije."
      }
    },
    {
      "@type": "Question",
      name: "Da li mi treba agencija koja radi obe platforme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Idealno da, jer strategija treba biti koordinisana - Meta puni levak, Google zatvara prodaje, remarketing se overlap-uje. Ali specijalizovani freelanceri ili manje agencije za svaki kanal mogu biti bolji u egzekuciji od generalist agencije koja radi \"sve\". Važnije je da neko razume vašu industriju nego da ima pristup svim platformama. Vidite više na agencija vs freelancer."
      }
    },
    {
      "@type": "Question",
      name: "Šta ako moj proizvod nije vizuelan - da li Meta ima smisla?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meta i dalje može raditi kroz UGC content, testimonijale, before/after comparison, ili storytelling videe. B2B SaaS i tehnički proizvodi uspešno koriste Meta za thought leadership i webinar promocije. Ali realno, ako nemate vizuelnu priču, Google će verovatno biti efikasniji kanal."
      }
    },
    {
      "@type": "Question",
      name: "Kako merim cross-channel uticaj?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bez nezavisnog tracking sistema, teško je. Google Analytics 4 je dobar početak (Advertising → Attribution → Conversion paths), ali ima ograničenja. Za ozbiljno multi-platform oglašavanje, razmotrite dedicated attribution tool poput Rockerbox, Triple Whale ili Northbeam. Alternativa: pratite ukupan biznis performance, ne samo individualne platforme."
      }
    },
    {
      "@type": "Question",
      name: "Da li Facebook Ads još uvek rade posle iOS 14 update-a?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, ali nisu isti kao pre. iOS 14+ je smanjio tracking mogućnosti, što otežava atribuciju i targetiranje. Ali Meta i dalje radi - samo zahteva drugačiji pristup (Conversions API, server-side tracking, širi targeting). Mnogi biznisi i dalje imaju profitabilne Meta kampanje, posebno za remarketing i brand awareness."
      }
    }
  ]
};

const faqSchemaGoogleVsMetaEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which channel is better for beginners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Search is usually easier to measure direct ROI because users have high intent. Meta requires strong creative and deeper understanding of audience. But depends on your business — if you sell visually attractive products, Meta might be more natural start. I recommend starting with platform that has clearer connection between ad and sale."
      }
    },
    {
      "@type": "Question",
      name: "How much budget for testing both platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum $1,500-2,500 total ($1,000+ Google, $500+ Meta) for 60-90 days to get meaningful data for decision-making. Below this, results are often statistically meaningless. If your budget is smaller, start with one platform, optimize it, then add second later."
      }
    },
    {
      "@type": "Question",
      name: "Do I need agency that runs both platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ideally yes, because strategy should be coordinated — Meta fills funnel, Google closes sales, remarketing overlaps. But specialized freelancers or smaller agencies for each channel can be better at execution than generalist agency that does \"everything\". More important that someone understands your industry than has access to all platforms. See more at agency vs freelancer."
      }
    },
    {
      "@type": "Question",
      name: "What if my product isn't visual — does Meta make sense?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meta can still work through UGC content, testimonials, before/after comparison, or storytelling videos. B2B SaaS and technical products successfully use Meta for thought leadership and webinar promotion. But realistically, if you don't have visual story, Google will likely be more efficient channel."
      }
    },
    {
      "@type": "Question",
      name: "How to measure cross-channel impact?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Without independent tracking system, it's difficult. Google Analytics 4 is good start (Advertising → Attribution → Conversion paths), but has limitations. For serious multi-platform advertising, consider dedicated attribution tool like Rockerbox, Triple Whale, or Northbeam. Alternative: track overall business performance, not just individual platforms."
      }
    },
    {
      "@type": "Question",
      name: "Do Facebook Ads still work after iOS 14 update?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but not the same as before. iOS 14+ reduced tracking capabilities, making attribution and targeting harder. But Meta still works — just requires different approach (Conversions API, server-side tracking, broader targeting). Many businesses still have profitable Meta campaigns, especially for remarketing and brand awareness."
      }
    }
  ]
};

const faqSchemaRemarketingSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koliko traje remarketing lista?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Možete postaviti trajanje od 1 do 540 dana. Podrazumevano je 30 dana. Za eCommerce, preporučujem 7 dana za napuštene korpe, 30 dana za opšte posetioce i 180 dana za bivše kupce."
      }
    },
    {
      "@type": "Question",
      name: "Koliko korisnika treba da imam na listi za početak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum je 100 korisnika za Display kampanje i 1.000 za Search (RLSA) i YouTube. Ako vaš sajt ima mali saobraćaj, počnite sa Display remarketing-om dok lista naraste dovoljno za RLSA."
      }
    },
    {
      "@type": "Question",
      name: "Da li remarketing funkcioniše nakon iOS ograničenja privatnosti?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, ali sa određenim ograničenjima. First-party podaci (vaš sajt, vaš tag) i dalje funkcionišu pouzdano. Third-party tracking je ograničen na Apple uređajima. Preporučujem kombinaciju Google Ads taga, GA4 audience-a i Customer Match-a za najbolju pokrivenost."
      }
    },
    {
      "@type": "Question",
      name: "Da li je remarketing napadan za korisnike?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Može biti - ako je loše postavljen. Tri stvari sprečavaju negativan utisak: frequency cap (3-5 prikazivanja dnevno), relevantne poruke prilagođene segmentu i redovno osvežavanje kreativa."
      }
    },
    {
      "@type": "Question",
      name: "Koja je razlika između remarketing-a i retargeting-a?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Praktično nikakva. Google koristi termin \"remarketing\", Meta (Facebook/Instagram) koristi \"retargeting\". Princip je identičan - prikazujete oglase ljudima koji su već bili u kontaktu sa vašim biznisom."
      }
    },
    {
      "@type": "Question",
      name: "Mogu li koristiti remarketing za B2B, ne samo za online prodavnice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apsolutno. B2B remarketing je izuzetno efikasan jer su prodajni ciklusi duži (30-90+ dana), pa je potrebno više kontaktnih tačaka pre konverzije. Kombinacija RLSA kampanja i Display remarketing-a sa stručnim sadržajem (case study, vodič, webinar) odlično funkcioniše za B2B."
      }
    }
  ]
};

const faqSchemaRemarketingEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a remarketing list last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can set duration from 1 to 540 days. Default is 30 days. For eCommerce, I recommend 7 days for abandoned carts, 30 days for general visitors, and 180 days for former customers."
      }
    },
    {
      "@type": "Question",
      name: "How many users do I need on list to start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum is 100 users for Display campaigns and 1,000 for Search (RLSA) and YouTube. If your site has low traffic, start with Display remarketing while list grows enough for RLSA."
      }
    },
    {
      "@type": "Question",
      name: "Does remarketing work after iOS privacy restrictions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but with certain limitations. First-party data (your site, your tag) still works reliably. Third-party tracking is limited on Apple devices. I recommend combination of Google Ads tag, GA4 audiences, and Customer Match for best coverage."
      }
    },
    {
      "@type": "Question",
      name: "Is remarketing intrusive to users?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Can be — if poorly set up. Three things prevent negative impression: frequency cap (3-5 impressions daily), relevant messages tailored to segment, and regular creative refresh."
      }
    },
    {
      "@type": "Question",
      name: "What is the difference between remarketing and retargeting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Practically none. Google uses term \"remarketing\", Meta (Facebook/Instagram) uses \"retargeting\". Principle is identical — you show ads to people who have already interacted with your business."
      }
    },
    {
      "@type": "Question",
      name: "Can I use remarketing for B2B, not just online stores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. B2B remarketing is extremely effective because sales cycles are longer (30-90+ days), so more touchpoints are needed before conversion. Combination of RLSA campaigns and Display remarketing with expert content (case study, guide, webinar) works excellently for B2B."
      }
    }
  ]
};

const faqSchemaKolikoKostaSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koliko minimalno treba uložiti u Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tehnički minimum je €1 dnevno, ali za smislene rezultate računajte na minimum €300-500 mesečno za lokalne biznise i €1,000+ za eCommerce ili B2B."
      }
    },
    {
      "@type": "Question",
      name: "Da li se Google Ads isplati za mali biznis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, ako imate jasnu vrednost po kupcu i konkurentne marže. Male firme često imaju prednost jer su fleksibilnije i mogu brže optimizovati."
      }
    },
    {
      "@type": "Question",
      name: "Koliko vremena treba da Google Ads počne da donosi rezultate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prve indikacije vidite za 2-4 nedelje. Prave rezultate i optimizovan nalog za 2-3 meseca. Stabilne performanse za 4-6 meseci."
      }
    },
    {
      "@type": "Question",
      name: "Zašto su cene toliko različite po industrijama?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zbog konkurencije i vrednosti konverzije. Advokat može da plati €50 za klik jer jedan klijent vredi €5,000. Prodavnica majica ne može."
      }
    },
    {
      "@type": "Question",
      name: "Da li Google Ads košta više nego Meta Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generalno da, CPC na Google-u je viši. Ali intent korisnika je jači - neko ko pretražuje \"kupi X\" je bliži kupovini od nekoga ko scrolla Instagram. Više o ovome u Google Ads vs Meta Ads poređenju."
      }
    }
  ]
};

const faqSchemaKolikoKostaEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the minimum investment for Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Technical minimum is $1 per day, but for meaningful results expect $1,000-1,500 monthly for local businesses and $3,000+ for eCommerce or B2B."
      }
    },
    {
      "@type": "Question",
      name: "Is Google Ads worth it for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if you have clear customer value and competitive margins. Small businesses often have an advantage because they're more agile and can optimize faster."
      }
    },
    {
      "@type": "Question",
      name: "How long before Google Ads starts delivering results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First indicators in 2-4 weeks. Real results and optimized account in 2-3 months. Stable performance in 4-6 months."
      }
    },
    {
      "@type": "Question",
      name: "Why do prices vary so much by industry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because of competition and conversion value. A lawyer can pay $50 per click because one client is worth $5,000. A t-shirt store can't."
      }
    },
    {
      "@type": "Question",
      name: "Does Google Ads cost more than Meta Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally yes, CPC on Google is higher. But user intent is stronger — someone searching \"buy X\" is closer to purchase than someone scrolling Instagram."
      }
    }
  ]
};

// ── FAQ Schema: Ključne reči vodič ──

const faqSchemaKljucneReciSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koliko ključnih reči je potrebno za početak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Za jednu kampanju: 30-50 ključnih reči organizovanih u 3-5 Ad Groups. Bolje je početi sa manje i proširiti na osnovu podataka nego pokrenuti previše odjednom bez fokusa."
      }
    },
    {
      "@type": "Question",
      name: "Exact ili Phrase match za početak kampanje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Preporučujem Phrase match za početak. Daje dobar balans kontrole i discovery-ja - vidite šta ljudi zapravo traže. Exact match dodajte kasnije za dokazane performere."
      }
    },
    {
      "@type": "Question",
      name: "Koliko često pregledati Search Terms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum jednom nedeljno. U prva 30 dana nove kampanje - svaka 2-3 dana. Za zrele kampanje sa niskim wasted spend-om, nedeljno je sasvim dovoljno."
      }
    },
    {
      "@type": "Question",
      name: "Šta ako ključna reč ima 0 pretraga u Keyword Planner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Može i dalje biti vredna. Keyword Planner potcenjuje volume za long-tail reči. Ako je relevantna i ima transakcijsku nameru, testirajte je - možda konvertuje odlično."
      }
    },
    {
      "@type": "Question",
      name: "Da li targetirati brand imena konkurenata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Opciono i zavisi od industrije. Može biti efektivno za dosezanje ljudi koji razmatraju alternative. Nikada ne koristite competitor brand u tekstu oglasa - fokusirajte se na diferencijaciju."
      }
    },
    {
      "@type": "Question",
      name: "Kako prepoznati da je ključna reč loša?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "100+ klikova bez konverzije ili 3x target CPA spend bez rezultata su jasni signali. Ali pre pauziranja, proverite i landing page i oglas - možda je problem tamo, ne u ključnoj reči."
      }
    }
  ]
};

const faqSchemaKljucneReciEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many keywords do I need to start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For one campaign: 30-50 keywords organized into 3-5 Ad Groups. Better to start with fewer and expand based on data than launch too many at once without focus."
      }
    },
    {
      "@type": "Question",
      name: "Exact or Phrase match for campaign launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I recommend Phrase match for launch. Gives good balance of control and discovery — you see what people actually search for. Add Exact match later for proven performers, and consider Broad match only once you have 30+ conversions monthly with Smart Bidding."
      }
    },
    {
      "@type": "Question",
      name: "How often should I review Search Terms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum once weekly. In first 30 days of new campaign — every 2-3 days. For mature campaigns with low wasted spend, weekly is sufficient."
      }
    },
    {
      "@type": "Question",
      name: "What if a keyword shows 0 searches in Keyword Planner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It may still be valuable. Keyword Planner underestimates volume for long-tail keywords. If it is relevant and has transactional intent, test it — it may convert excellently."
      }
    },
    {
      "@type": "Question",
      name: "Should I target competitor brand names?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Optional and depends on industry. Can be effective for reaching people considering alternatives. Never use competitor brand in ad text — focus on differentiation."
      }
    },
    {
      "@type": "Question",
      name: "How do I know a keyword is performing poorly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "100+ clicks without conversions or 3x target CPA spend without results are clear signals. But before pausing, check landing page and ad — the problem may be there, not the keyword."
      }
    }
  ]
};

// ── FAQ Schema: Negativne ključne reči ──

const faqSchemaNegativneKljucneReciSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koliko negativnih ključnih reči je dovoljno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nema gornjeg limita. Tipično: 50-200 za starter listu, raste vremenom. Kvalitet je važniji od kvantiteta - bolje 50 pažljivo odabranih nego 500 nasumičnih."
      }
    },
    {
      "@type": "Question",
      name: "Da li negativne ključne reči utiču na Quality Score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indirektno - da. Bolji CTR (manje irelevantnih prikaza) → bolji Expected CTR → bolji QS. Više o tome u Quality Score vodiču."
      }
    },
    {
      "@type": "Question",
      name: "Mogu li slučajno blokirati dobre pretrage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, to je realan rizik. Zato: (1) koristite podatke pre dodavanja, (2) proveravajte Search Terms nakon dodavanja, (3) budite pažljivi sa Broad negatives za kratke reči koje imaju više značenja."
      }
    },
    {
      "@type": "Question",
      name: "Koliko često pregledati i ažurirati negative liste?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum: jednom nedeljno Search Terms review. Idealno u prva 30 dana: svaka 2-3 dana. Za zrele kampanje: nedeljno + mesečna deep dive + kvartalna kompletna revizija."
      }
    },
    {
      "@type": "Question",
      name: "Da li postoje obavezne negativne ključne reči za svaki nalog?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Universal lista (besplatno, posao, DIY) je dobar starter za većinu biznisa. Ali uvek prilagodite svom biznisu - \"besplatno\" možda nije negative ako nudite free trial ili besplatnu dostavu."
      }
    },
    {
      "@type": "Question",
      name: "Negative Broad vs Negative Phrase - kada koji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Broad: za opšte termine koje uvek želite blokirati (besplatno, posao) - pokriva sve pretrage sa tom reči. Phrase: za specifične fraze gde redosled ima značaj. Exact: retko - samo za vrlo specifične slučajeve gde je samo ta tačna pretraga problem."
      }
    }
  ]
};

const faqSchemaNegativneKljucneReciEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many negative keywords is enough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No upper limit. Typically: 50-200 for starter list, grows over time. Quality is more important than quantity — better 50 carefully selected than 500 random ones."
      }
    },
    {
      "@type": "Question",
      name: "Do negative keywords affect Quality Score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indirectly — yes. Better CTR (fewer irrelevant impressions) → better Expected CTR → better QS. More on this in the Quality Score guide."
      }
    },
    {
      "@type": "Question",
      name: "Can I accidentally block good searches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, that is a real risk. Therefore: (1) use data before adding, (2) check Search Terms after adding, (3) be careful with Broad negatives for short keywords that have multiple meanings."
      }
    },
    {
      "@type": "Question",
      name: "How often should I review and update negative lists?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum: weekly Search Terms review. Ideally in first 30 days: every 2-3 days. For mature campaigns: weekly + monthly deep dive + quarterly complete review."
      }
    },
    {
      "@type": "Question",
      name: "Are there mandatory negative keywords for every account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Universal list (free, jobs, DIY) is good starter for most businesses. But always customize for your business — \"free\" may not be negative if you offer free trial or free shipping."
      }
    },
    {
      "@type": "Question",
      name: "Negative Broad vs Negative Phrase — when which?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Broad: for general terms you always want to block (free, jobs) — covers all searches with that word. Phrase: for specific phrases where order matters. Exact: rarely — only for very specific cases where only that exact search is a problem."
      }
    }
  ]
};

// ── FAQ Schema: Lista negativnih ključnih reči + API autentifikacija ──

const faqSchemaNegativeListSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mogu li da kopiram ovu listu direktno i nalepim je u svoj nalog?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Možete kopirati bilo koji blok iznad i nalepiti ga u Negative Keyword List ili u Google Ads Editor import - tačno za to format i služi. Ali prvo pročitajte kategoriju i obrišite sve što je zapravo deo vaše ponude (besplatna dostava, polovna roba, kurs koji prodajete). Nijedna objavljena lista, uključujući ovu, ne poznaje vaš biznis bez tog koraka."
      }
    },
    {
      "@type": "Question",
      name: "Da li ova lista radi za Shopping i Performance Max?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da. Ako ove termine dodate u negativnu listu na nivou naloga, automatski se primenjuju na Search, Shopping, Performance Max, App, Smart i Local kampanje. Performance Max sada takođe direktno prihvata negative i negativne liste na nivou kampanje - do 2025. je to bilo moguće samo preko Google predstavnika ili API-ja, sada je self-servisno u interfejsu. Izvor: Performance Max negativne ključne reči."
      }
    },
    {
      "@type": "Question",
      name: "Po čemu se ovo razlikuje od Vodiča za negativne ključne reči?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vodič za negativne ključne reči je kako i zašto - ponašanje match tipova, sistem organizacije u tri sloja, stvarna studija slučaja, kako da izvučete sopstvene negative iz Search Terms reporta. Ova stranica je šta - 421 termin spreman za lepljenje kroz 15 kategorija, plus AI prompt za pravljenje prilagođenog seta. Pročitajte vodič jednom, vraćajte se ovde kad god vam trebaju termini."
      }
    },
    {
      "@type": "Question",
      name: "Da li treba samo da koristim AI da generišem celu listu umesto ove?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oboje, tim redosledom. Krenite od lista na ovoj stranici - one su skinule nagađanje sa univerzalnih i brand safety kategorija. Onda pokrenite AI prompt sa svojim konkretnim proizvodima, lokacijama i izuzecima da popunite ono što generička lista ne može da zna. Proverite svaki AI predlog kroz sedam pravila pre dodavanja - model ne vidi vaš nalog, vaš Search Terms report ni vašu stvarnu teritoriju usluge."
      }
    },
    {
      "@type": "Question",
      name: "Koliko često treba da ažuriram ovu listu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nalepite relevantne kategorije jednom kao polaznu tačku, a Search Terms report tretirajte kao stvarni, tekući izvor - nedeljno prvog meseca nove kampanje, pa minimum mesečno posle toga. Ova statična lista vas dovodi do razumne osnove prvog dana; ne zamenjuje praćenje šta ljudi stvarno pretražuju."
      }
    }
  ]
};

const faqSchemaNegativeListEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I copy this list directly and paste it into my account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can copy any block above and paste it into a Negative Keyword List or a Google Ads Editor import — that is exactly what the format is for. But read through the category first and delete anything that is actually part of your offer (free shipping, used goods, a course you sell). No published list, including this one, knows your business without that pass."
      }
    },
    {
      "@type": "Question",
      name: "Does this list work for Shopping and Performance Max?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you add these terms to your account-level negative list, they apply automatically to Search, Shopping, Performance Max, App, Smart, and Local campaigns. Performance Max also now accepts campaign-level negatives and negative keyword lists directly — until 2025 that required going through a Google rep or the API, and it is now self-serve in the interface. Source: Performance Max negative keywords."
      }
    },
    {
      "@type": "Question",
      name: "How is this different from the Negative Keywords Guide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Negative Keywords Guide is the how and why — match type behavior, the three-tier organization system, a real case study, how to mine your own negatives from the Search Terms report. This page is the what — 422 ready-to-paste terms across 15 categories, plus the AI prompt for building a custom set. Read the guide once, come back to this page whenever you need terms."
      }
    },
    {
      "@type": "Question",
      name: "Should I just use AI to generate the whole list instead of this one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both, in that order. Start with the lists on this page — they took the guesswork out of the universal and brand safety categories. Then run the AI prompt with your specific products, locations, and exceptions to fill in what a generic list cannot know. Verify every AI suggestion against the seven rules before adding it — the model does not see your account, your Search Terms report, or your actual service area."
      }
    },
    {
      "@type": "Question",
      name: "How often should I update this list?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paste the relevant categories once as a starting point, then treat the Search Terms report as the real, ongoing source — weekly for the first month of a new campaign, then at minimum monthly after that. This static list gets you to a reasonable baseline on day one; it does not replace watching what people actually search for."
      }
    }
  ]
};

const faqSchemaApiAuthSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koja je razlika između developer token-a i OAuth2 token-a na Google Ads API-ju?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Developer token identifikuje vašu aplikaciju - fiksan je string izdat jednom u API Center-u vašeg manager naloga (22 karaktera u mojim nalozima), i sam po sebi ne ističe. OAuth2 access token (i refresh token iza njega) identifikuje osobu koja je odobrila pristup vašoj aplikaciji, i može isteći ili biti opozvan. Svaki poziv na Google Ads API zahteva oba: developer token kao header, i validan OAuth2 access token za autentifikaciju. Od 9. septembra 2026. developer token više nije obavezan deo tog poziva - Google ga ignoriše ako stigne, a nivo pristupa sad nosi Cloud projekat iz kog su OAuth kredencijali izvučeni."
      }
    },
    {
      "@type": "Question",
      name: "Zašto mi refresh token prestane da radi na svakih 7 dana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OAuth consent screen vašeg Google Cloud projekta postavljen je na External tip korisnika sa statusom objave Testing. Google to dokumentuje: refresh tokeni izdati pod tim uslovima ističu posle 7 dana, što se pojavljuje kao invalid_grant ili RefreshError. Prebacivanje statusa objave na In production uklanja taj rok od 7 dana - to radite samo jednom po projektu."
      }
    },
    {
      "@type": "Question",
      name: "Da li mi treba Google Workspace za service account na Google Ads API-ju?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "U praksi da. Google-ov sopstveni vodič za service account to ne objašnjava, ali programeri koji su ovo implementirali prijavljuju na Google-ovom Ads API developer forumu da bez Google Workspace domena i podešene domain-wide delegacije za adwords scope, poziv ne prolazi sa AuthenticationError.NOT_ADS_USER - service account mora da impersonira stvarnog Workspace korisnika preko subject parametra da bi se uspešno autentifikovao. Za solo operatera ili mali tim bez Workspace domena, OAuth2 desktop tok je jednostavniji i ništa od ovoga mu ne treba."
      }
    },
    {
      "@type": "Question",
      name: "Šta je login-customer-id i kad mi treba?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "login-customer-id je header koji Google Ads API-ju kaže u kontekstu kog naloga radite. Obavezan je kad autentifikovan nalog pristupa klijentskom nalogu kroz manager (MCC) nalog - postavite ga na ID MCC-a. Izostavljanje kad je potreban proizvodi USER_PERMISSION_DENIED, čak i ako nalog jasno vidite u Google Ads interfejsu."
      }
    },
    {
      "@type": "Question",
      name: "Šta znači AuthenticationError.NOT_ADS_USER?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prema zvaničnoj Google dokumentaciji, znači da Google nalog korišćen za generisanje access tokena nije povezan ni sa jednim Google Ads nalogom. Pojavljuje se u dve situacije: OAuth login bez ikakvog pristupa Google Ads-u, ili poziv service account-a kojem fali subject/impersonirani parametar potreban da se autentifikuje kao stvaran Workspace korisnik."
      }
    }
  ]
};

const faqSchemaApiAuthEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the difference between a developer token and an OAuth2 token in the Google Ads API?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A developer token identifies your application — it's a fixed string issued once in your manager account's API Center (22 characters in my accounts), and it never expires on its own. An OAuth2 access token (and the refresh token behind it) identifies the person who authorized your app, and it can expire or be revoked. Every Google Ads API call needs both: the developer token as a header, and a valid OAuth2 access token for authentication. As of September 9, 2026, the developer token is no longer a required part of that call — Google ignores it if it's sent, and access level now lives with the Cloud project the OAuth credentials come from."
      }
    },
    {
      "@type": "Question",
      name: "Why does my refresh token stop working every 7 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your Google Cloud project's OAuth consent screen is set to an External user type with a Testing publishing status. Google documents this: refresh tokens issued under those conditions expire after 7 days, which surfaces as invalid_grant or a RefreshError. Switching the publishing status to In production removes that 7-day expiry — you only need to do it once per project."
      }
    },
    {
      "@type": "Question",
      name: "Do I need Google Workspace to use a service account with the Google Ads API?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In practice, yes. Google's quick-start steps for service accounts don't spell this out, but developers who've implemented it report that without a Google Workspace domain and domain-wide delegation configured for the adwords scope, the call fails with AuthenticationError.NOT_ADS_USER — the service account has to impersonate a real Workspace user via a subject parameter to authenticate successfully. For a solo operator or small team without a Workspace domain, the OAuth2 desktop flow is simpler and doesn't require any of this."
      }
    },
    {
      "@type": "Question",
      name: "What is login-customer-id and when do I need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "login-customer-id is a header that tells the Google Ads API which account context you're operating in. It's required whenever the authenticated account accesses a client account through a manager (MCC) account — set it to the MCC's ID. Leaving it out when it's needed produces USER_PERMISSION_DENIED, even if you can see the account fine in the Google Ads UI."
      }
    },
    {
      "@type": "Question",
      name: "What does AuthenticationError.NOT_ADS_USER mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Per Google's official documentation, it means the Google account used to generate the access token isn't associated with any Google Ads account. It shows up in two situations: an OAuth login with no Google Ads access at all, or a service account call missing the subject/impersonated-user parameter it needs to authenticate as a real Workspace user."
      }
    }
  ]
};

// ── FAQ Schema: PMax checklist + Budzet + GAQL ──

const faqSchemaPmaxChecklistSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Da li se search teme primenjuju na PMax kampanje koje vode samo na feed-u?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne. Search teme se podešavaju unutar Signals u asset grupi, a PMax kampanja koja vodi čisto na feed-u, dakle samo iz Merchant Center feed-a, bez asset grupa, tu strukturu nema. Ako vaša PMax kampanja radi isključivo na feedu, tačka 35 se na nju ne odnosi, preskočite pravo na audience signale iz Grupe 8, koji rade isto bez obzira na strukturu."
      }
    },
    {
      "@type": "Question",
      name: "Koliko listing grupa je previše?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google nema objavljen tvrd plafon za to šta je previše, ali u praksi, kad počnete da sečete stotine listing grupa po kombinacijama atributa koje niko pojedinačno ne pregleda, dodali ste granularnost bez kontrole. Čistiji signal: ako listing grupa nikad nije dobila sopstvenu odluku o ponudi ili isključenju, verovatno je previše sitna. Segmentišite po onome na šta ćete stvarno reagovati, margin tier, tip proizvoda, custom label, ne po svakom mogućem atributu."
      }
    },
    {
      "@type": "Question",
      name: "Šta se promenilo u izveštavanju Performance Max-a u 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Najveća promena je izveštavanje po kanalu, najavljeno januara 2026, novi Channel performance pregled koji razbija PMax potrošnju i konverzije po Search, Search Partners, Display, YouTube, Discover, Gmail i Maps, na nivou kampanje, asset grupe i sredstva. Pre ovoga je PMax skoro sve prikazivao agregatno, pa nije bilo moguće utvrditi da li budžet zaista ide tamo gde mislite."
      }
    },
    {
      "@type": "Question",
      name: "Po čemu se PMax audit razlikuje od audita Search kampanje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Search audit radi ključnu reč po ključnu reč, Quality Score, tipovi podudaranja, izveštaj o pretragama, ponude po ključnoj reči. PMax većinu toga ne otkriva, auditujete asset grupe umesto grupa oglasa, kvalitet feed-a umesto samo teksta oglasa, izveštavanje po kanalu umesto podele po uređaju ili mreži. Suštinska pitanja su slična (da li je praćenje tačno, da li budžet ide tamo gde treba, da li je targetiranje pod kontrolom), ali skoro svaki odgovor na \"gde proveriti\" je drugačiji."
      }
    },
    {
      "@type": "Question",
      name: "Koliko često treba auditovati Performance Max kampanju?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pun prolaz kroz svih 38 tačaka jednom u kvartalu, plus lakša mesečna provera onoga što najbrže odstupa, negativne ključne reči, izveštaj po kanalu, status budžeta, ocene sredstava i brand isključenja. Audit odmah van rasporeda ako učinak naglo padne, ako preuzimate nalog od druge agencije, ili ako ste upravo promenili konverzioni cilj ili bidding strategiju."
      }
    }
  ]
};

const faqSchemaPmaxChecklistEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do search themes apply to feed-only Performance Max campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Search themes are set inside an asset group's Signals, and a feed-only PMax campaign — one running purely off a Merchant Center feed, with no asset groups — doesn't have that structure. If your PMax campaign is feed-only, checkpoint 35 doesn't apply; skip straight to audience signals in Group 8, which work the same way regardless."
      }
    },
    {
      "@type": "Question",
      name: "How many listing groups is too many?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There's no hard Google-published ceiling for what's \"too many,\" but in practice, once you're carving out hundreds of listing groups by attribute combinations nobody reviews individually, you've added granularity without adding control. A cleaner signal: if a listing group has never had its own bid or exclusion decision made against it, it's probably too granular. Segment by what you'll actually act on — custom label tier, product type, margin band — not by every possible attribute."
      }
    },
    {
      "@type": "Question",
      name: "What changed in Performance Max reporting in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The biggest change is channel-level reporting, announced in January 2026: a new Channel performance view that breaks PMax spend and conversions down by Search, Search Partners, Display, YouTube, Discover, Gmail, and Maps — at the campaign, asset-group, and asset level. Before this, PMax reported almost everything in aggregate, which made it impossible to tell whether your budget was actually going where you thought it was."
      }
    },
    {
      "@type": "Question",
      name: "How is a PMax audit different from auditing a Search campaign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Search audit works keyword by keyword: Quality Score, match types, Search Terms Report, per-keyword bids. PMax doesn't expose most of that — you audit asset groups instead of ad groups, feed quality instead of ad copy alone, and channel-level reporting instead of a device or network breakdown. The underlying questions are similar (is tracking accurate, is budget going where it should, is targeting under control), but almost every \"where to check\" answer is different."
      }
    },
    {
      "@type": "Question",
      name: "How often should I audit a Performance Max campaign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full pass through all 38 checkpoints once a quarter, plus a lighter monthly check on the items that drift fastest — negative keywords, the channel report, budget status, asset ratings, and brand exclusions. Audit immediately outside that schedule if performance drops suddenly, you're taking over the account from another agency, or you just changed the conversion goal or bid strategy."
      }
    }
  ]
};

const faqSchemaBudzetSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koliki mesečni budžet mi treba za Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zavisi od max CPA i ciljanog broja konverzija - mesečni budžet = max CPA × ciljani broj konverzija. Za test fazu, minimum je €300-500 mesečno (€10-20 dnevno) da dobijete dovoljno podataka - detaljnije u vodiču kako početi sa Google Ads-om; konkretan broj za vaš biznis izračunate po formuli iz ovog teksta."
      }
    },
    {
      "@type": "Question",
      name: "Kako da podelim budžet između više kampanja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "U test fazi, na 1-2 uske kampanje - ne razvlačite mali budžet na više njih. Kasnije, split zavisi od kanala: eCommerce nalozi u praksi drže veći deo na Shopping-u, Search se deli na brand i non-brand, a mala rezerva ide na remarketing."
      }
    },
    {
      "@type": "Question",
      name: "Kada da povećam budžet za Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kad kampanja dosledno ostvaruje 30+ konverzija za tCPA ili 50+ za tROAS na 30 dana, gubite impression share zbog budžeta, i break-even CPA i dalje ima prostora posle povećanja. Sva tri signala treba da se poklope, ne samo jedan."
      }
    },
    {
      "@type": "Question",
      name: "Da li treba da imam isti budžet svaki mesec?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne, ako imate sezonalnost. Planirajte veći budžet unapred za period jače potražnje (Black Friday, praznici) i manji van sezone - to je planiranje, ne reagovanje kad kampanja usred meseca potroši sve."
      }
    },
    {
      "@type": "Question",
      name: "Koja je razlika između dnevnog i mesečnog budžeta u Google Ads-u?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unosite dnevni budžet, ali Google ga tretira kao prosek - pojedinačnog dana može potrošiti i do dvostruko više, dok mesečna naplata ne prelazi dnevni budžet pomnožen prosečnim brojem dana u mesecu (30.4)."
      }
    }
  ]
};

const faqSchemaBudzetEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much monthly budget do I need for Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your max CPA and target conversion count — monthly budget = max CPA × target number of conversions. For the test phase, aim for enough spend to hit the 10-15 clicks/day floor I use as a starting minimum — see how to start with Google Ads for the full breakdown by market; the exact number for your business comes from the formula in this guide."
      }
    },
    {
      "@type": "Question",
      name: "How do I split budget across multiple campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the test phase, put it behind 1-2 narrow campaigns — don't stretch a small budget across more than that. Later, the split depends on channel: eCommerce accounts typically hold more of the budget in Shopping, Search splits between brand and non-brand, and a small reserve goes to remarketing."
      }
    },
    {
      "@type": "Question",
      name: "When should I increase my Google Ads budget?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When a campaign consistently hits 30+ conversions for tCPA or 50+ for tROAS over 30 days, you're losing impression share to budget, and break-even CPA still has room after the increase. All three signals need to line up, not just one."
      }
    },
    {
      "@type": "Question",
      name: "Should my budget stay the same every month?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, not if you have seasonality. Plan a higher budget in advance for high-demand periods (Black Friday, holidays) and lower it out of season — that's planning, not reacting once a campaign burns through everything mid-month."
      }
    },
    {
      "@type": "Question",
      name: "What's the difference between daily and monthly budget in Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You enter a daily budget, but Google treats it as an average — a single day can spend up to double that, while monthly billing won't exceed the daily budget multiplied by the average number of days in a month (30.4)."
      }
    }
  ]
};

const faqSchemaGaqlSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Šta je GAQL, i da li je to isto što i SQL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GAQL (Google Ads Query Language) pozajmljuje SQL-ov oblik SELECT/FROM/WHERE/ORDER BY/LIMIT, ali radi na sopstvenoj gramatici. Nema JOIN-a ni subquery-ja - umesto toga, određeni resursi su \"pridruženi\" vašem glavnom FROM resursu i uvuku se implicitno, pa možete selektovati ad_group.name dok upitujete ad_group_ad, a da pritom sami ne pišete join. Ima i duži spisak WHERE operatora nego čist SQL, uključujući CONTAINS ANY/ALL/NONE i DURING za fiksne literale perioda."
      }
    },
    {
      "@type": "Question",
      name: "Kad da koristim search() umesto searchStream()?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Koristite search() kad je set rezultata mali do umeren ili hoćete eksplicitnu kontrolu nad paginacijom - svaki modul u mom sopstvenom steku za nadzor naloga to radi, jer su nalozi u pitanju u hiljadama redova, ne milionima. Koristite searchStream() za veća povlačenja gde ne biste ručno pisali iteraciju kroz page token. Obe se računaju kao jedna operacija u dnevnu kvotu po pozivu, bez obzira koliko redova stigne."
      }
    },
    {
      "@type": "Question",
      name: "Zašto mi GAQL izveštaj vraća redove sa nula impresija i nula troška?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To je očekivano ponašanje, ne bag - resursi poput keyword_view vraćaju svaki red koji odgovara upitu, uključujući one bez ikakve aktivnosti u periodu. Ako hoćete samo redove koji su stvarno trošili ili se prikazivali, dodajte eksplicitan filter u WHERE, na primer metrics.cost_micros > 0 ili metrics.impressions > 0."
      }
    },
    {
      "@type": "Question",
      name: "Šta znači nastavak \"_micros\" na poljima kao cost_micros?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Svako novčano polje u Google Ads API-ju - cost_micros, cpc_bid_micros, target_cpa_micros i slična - izraženo je u micros, fiksnoj jedinici jednakoj jednom milionitom delu valute naloga. Podelite sa 1.000.000 da dobijete stvarni iznos. Lako se propusti prvi put, i onda prijavite trošak koji je pogrešan za šest redova veličine."
      }
    },
    {
      "@type": "Question",
      name: "Da li mi treba Basic Access za GAQL izveštaje, ili Explorer pristup pokriva to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne treba vam za GAQL izveštavanje. Explorer pristup pokriva reporting resurse iza većine GAQL upita - campaign, ad_group, keyword_view, search_term_view i ostale korišćene u ovom tekstu - uz 2.880 operacija dnevno na produkcionim nalozima, i to sam godinu dana proveravao na sopstvenim nalozima. Basic Access to podigne na 15.000 operacija dnevno, ali ono što stvarno otključava su alati za planiranje: KeywordPlanIdeaService (GenerateKeywordIdeas vraća keyword ideje sa mesečnim volumenom, nivoom konkurencije i rasponom cene klika) i GenerateKeywordHistoricalMetrics za istorijski volumen 12 meseci unazad. ReachPlanService ostaje blokiran i na Basic nivou - to je zaseban allowlist. Ceo proces prijave je u vodiču za Basic Access ."
      }
    }
  ]
};

const faqSchemaGaqlEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is GAQL, and is it the same as SQL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GAQL (Google Ads Query Language) borrows SQL's SELECT/FROM/WHERE/ORDER BY/LIMIT shape but runs on its own grammar. There's no JOIN and no subquery — instead, certain resources are \"attributed\" to your main FROM resource and get pulled in implicitly, so you can select ad_group.name while querying ad_group_ad without writing a join yourself. It also has a longer WHERE operator set than plain SQL, including CONTAINS ANY/ALL/NONE and DURING for fixed date-range literals."
      }
    },
    {
      "@type": "Question",
      name: "When should I use search() instead of searchStream()?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use search() when the result set is small to moderate or you want explicit control over pagination — every module in my own account-monitoring stack uses it, since the accounts involved run in the thousands of rows, not millions. Use searchStream() for larger pulls where you'd rather not hand-roll page-token iteration. Both count as a single operation against your daily quota per call, no matter how many rows come back."
      }
    },
    {
      "@type": "Question",
      name: "Why does my GAQL report return rows with zero impressions and zero cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's expected behavior, not a bug — resources like keyword_view return every matching row, including ones with no activity in the period. If you only want rows that actually spent or served, add an explicit filter such as metrics.cost_micros > 0 or metrics.impressions > 0 to your WHERE clause."
      }
    },
    {
      "@type": "Question",
      name: "What does the \"_micros\" suffix on fields like cost_micros mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every monetary field in the Google Ads API — cost_micros, cpc_bid_micros, target_cpa_micros, and similar — is expressed in micros, a fixed-point unit equal to one-millionth of the account's currency. Divide by 1,000,000 to get the actual amount. It's easy to miss the first time and report a spend number that's off by six orders of magnitude."
      }
    },
    {
      "@type": "Question",
      name: "Do I need Basic Access to run GAQL reports, or does Explorer access cover it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You don't, for GAQL reporting. Explorer access covers the reporting resources behind most GAQL queries — campaign, ad_group, keyword_view, search_term_view, and the rest used in this post — at 2,880 operations per day on production accounts, and I ran on exactly that tier for a year. Basic Access raises the ceiling to 15,000 operations per day, but what it actually unlocks are the planning services: KeywordPlanIdeaService (GenerateKeywordIdeas returns keyword ideas with monthly volume, competition level, and CPC bid ranges) and GenerateKeywordHistoricalMetrics for 12 months of historical volume. ReachPlanService stays blocked even on Basic — that's a separate allowlist. See the Basic Access guide for the full application process."
      }
    }
  ]
};

// ── FAQ Schema: Quality Score vodič ──

const faqSchemaQualityScoreSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koji je dobar Quality Score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "7+ je dobar, 8-9 je odličan, 10 je idealan ali nije uvek potreban niti realan. Za branded ključne reči očekujte 8-10, za generičke komercijalne 6-8 je sasvim solidan rezultat."
      }
    },
    {
      "@type": "Question",
      name: "Koliko brzo se Quality Score menja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QS se ažurira na osnovu kumulativnih performansi, ali promene vidite postepeno - obično dani do nedelje. Veće promene (restrukturiranje Ad Groups, nove LP) zahtevaju više podataka da se reflektuju."
      }
    },
    {
      "@type": "Question",
      name: "Da li QS utiče na Display i Shopping kampanje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Display ima sličan ali manje transparentan sistem. Shopping nema klasičan QS - koristi feed quality, price competitiveness i seller ratings. PMax koristi interne signale koji nisu vidljivi."
      }
    },
    {
      "@type": "Question",
      name: "Mogu li imati visok QS i loše konverzije?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da. QS meri relevantnost, ne kvalitet ponude. Možete imati savršeno relevantan oglas i LP za ponudu koja nije konkurentna. QS je samo deo jednačine - ponuda, cena i korisničko iskustvo su jednako važni."
      }
    },
    {
      "@type": "Question",
      name: "Zašto imam nizak QS za branded ključne reči?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verovatno konkurenti bidduju na vaš brand. Branded reči bi trebalo da imaju QS 8-10. Proverite: da li je brand u headline-u oglasa, da li LP ima brand prominentno, da li ima tehničkih problema sa sajtom."
      }
    },
    {
      "@type": "Question",
      name: "Da li pauziranje loših ključnih reči poboljšava QS ostalih?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne direktno - ne postoji account-level QS. Ali indirektno, bolji fokus na kvalitetne reči poboljšava ukupne performanse naloga što vremenom pomaže svim metrikama."
      }
    }
  ]
};

const faqSchemaQualityScoreEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a good Quality Score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "7+ is good, 8-9 is excellent, 10 is ideal but not always necessary or realistic. For branded keywords expect 8-10, for generic commercial 6-8 is solid result."
      }
    },
    {
      "@type": "Question",
      name: "How quickly does Quality Score change?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QS updates based on cumulative performance, but changes show gradually — usually days to weeks. Bigger changes (restructuring Ad Groups, new LPs) require more data to reflect."
      }
    },
    {
      "@type": "Question",
      name: "Does QS affect Display and Shopping campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Display has similar but less transparent system. Shopping has no traditional QS — uses feed quality, price competitiveness, and seller ratings. PMax uses internal signals not visible."
      }
    },
    {
      "@type": "Question",
      name: "Can I have high QS and poor conversions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. QS measures relevance, not offer quality. You can have perfectly relevant ad and LP for an uncompetitive offer. QS is only part of equation — offer, price, and user experience are equally important."
      }
    },
    {
      "@type": "Question",
      name: "Why do I have low QS for branded keywords?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Likely competitors are bidding on your brand. Branded keywords should have QS 8-10. Check: is brand in ad headline, does LP have brand prominently, are there technical issues with site."
      }
    },
    {
      "@type": "Question",
      name: "Does pausing poor keywords improve QS of others?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not directly — there is no account-level QS. But indirectly, better focus on quality keywords improves overall account performance which over time helps all metrics."
      }
    }
  ]
};

// --- google-oglasavanje-za-firme ---
const faqSchemaGoogleOglasavanjeSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koliko košta Google oglašavanje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zavisi od industrije i konkurencije. U Srbiji, prosečan CPC je €0.15-1.50. Preporučeni minimalni mesečni budžet: €500-1,000 za manje biznise i testiranje, €2,000+ za ozbiljnije kampanje. Detaljan vodič o budžetima."
      }
    },
    {
      "@type": "Question",
      name: "Da li Google oglašavanje radi za B2B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apsolutno. B2B ima specifičnosti (duži sales cycle, manji search volume, viši CPC), ali Google Ads je i dalje jedan od najefikasnijih kanala za B2B lead generation. Ključ je fokus na kvalitet lead-ova umesto na broj, pravilno praćenje offline konverzija (CRM integracija), i remarketing kroz ceo funnel."
      }
    },
    {
      "@type": "Question",
      name: "Koliko vremena treba da vidim rezultate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prve indikacije: 2-4 nedelje (learning period) Prave rezultate: 2-3 meseca (dovoljno data za optimizaciju) Optimizovan, stabilan nalog: 4-6 meseci"
      }
    },
    {
      "@type": "Question",
      name: "Da li mi treba agencija za Google oglašavanje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne obavezno. Zavisi od budžeta i kompleksnosti: Do €2,000/mesec: Kvalitetan freelancer ili čak DIY sa edukacijom može biti dovoljan €2,000-10,000/mesec: Freelancer ili boutique agencija €10,000+/mesec: Agencija ili in-house tim"
      }
    },
    {
      "@type": "Question",
      name: "Šta je bolje: Google Ads ili Facebook Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zavisi od cilja: Google Ads - hvata ljude sa namerom (\"hoću da kupim X\"). Bolji za direktne prodaje. Facebook Ads - hvata ljude po interesovanjima i demografiji. Bolji za brand awareness i prospecting. Najbolje: Kombinacija oba kanala. Google za bottom-of-funnel, Facebook za top-of-funnel i remarketing."
      }
    },
    {
      "@type": "Question",
      name: "Da li mogu sam voditi Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, ako imate vreme i volje za učenje. Google Ads nije rocket science, ali zahteva: Razumevanje osnova (aukcijski model, Quality Score, match types) Pravilno postavljanje tracking-a (najkritičnije) Kontinuiranu optimizaciju (nedeljno minimum) Strpljenje (rezultati ne dolaze preko noći) Ako nemate vreme ili imate veći budžet (€2,000+), preporučujem stručnjaka."
      }
    },
    {
      "@type": "Question",
      name: "Koliko košta Google oglašavanje za firme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prosečan CPC u Srbiji je €0.10-0.80, u UK/DE €1-5+. Minimalni preporučeni mesečni budžet za kampanje je €300-500 za lokalne firme, €1,000+ za eCommerce. Uz to ide fee za upravljanje €200-600/mesečno."
      }
    },
    {
      "@type": "Question",
      name: "Koji tip Google kampanje je najbolji za moju firmu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Search kampanje su najbolje za firme koje žele direktne upite/pozive. Shopping za eCommerce. Performance Max za kombinaciju kanala. Display za brand awareness. Zavisi od vašeg cilja - lead generation ili online prodaja."
      }
    },
    {
      "@type": "Question",
      name: "Koliko dugo treba da se vide rezultati?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prve konverzije obično za 2-4 nedelje. Puna optimizacija zahteva 60-90 dana jer Google algoritam treba podatke za učenje. B2B kampanje obično zahtevaju duži period (3-6 meseci) zbog dužeg sales cycle-a."
      }
    },
    {
      "@type": "Question",
      name: "Da li mi treba sajt za Google oglašavanje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, sajt je obavezan za Google Ads. Trebate landing page koji je brz (ispod 3 sekunde), mobile-friendly i sa jasnim pozivom na akciju. Bez dobrog sajta, čak ni savršena kampanja neće doneti rezultate."
      }
    },
    {
      "@type": "Question",
      name: "Mogu li sam da vodim Google Ads ili mi treba stručnjak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Možete početi sami sa manjim budžetom, ali bez iskustva obično potrošite 30-50% budžeta neoptimalno. Stručnjak se isplati kad mesečni ad spend pređe €500-1,000 jer uštede na optimizaciji obično pokrivaju fee."
      }
    }
  ]
};

const faqSchemaGoogleAdvertisingEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does Google Ads cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depends on industry and competition. In US/UK, average CPC is $0.50–$7. Recommended minimum monthly budget: $1,000–$2,500 for smaller businesses and testing, $5,000+ for serious campaigns."
      }
    },
    {
      "@type": "Question",
      name: "Does Google Ads work for B2B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. B2B has specificities (longer sales cycle, lower search volume, higher CPC), but Google Ads is still one of most effective channels for B2B lead generation. Key is focus on lead quality instead of quantity, proper offline conversion tracking (CRM integration), and remarketing through entire funnel."
      }
    },
    {
      "@type": "Question",
      name: "How long to see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First indicators: 2–4 weeks (learning period) Real results: 2–3 months (enough data for optimization) Optimized, stable account: 4–6 months"
      }
    },
    {
      "@type": "Question",
      name: "Do I need an agency for Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. It depends on budget and complexity: Under £2,000/month: A quality freelancer or even DIY with proper education can be enough £2,000–10,000/month: Freelancer or boutique agency £10,000+/month: Agency or in-house team"
      }
    },
    {
      "@type": "Question",
      name: "Which is better: Google Ads or Facebook Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depends on your goal: Google Ads — captures people with intent (\"I want to buy X\"). Better for direct sales. Facebook Ads — targets people by interests and demographics. Better for brand awareness and prospecting. Best of all: Combine both. Google for bottom-of-funnel, Facebook for top-of-funnel and remarketing."
      }
    },
    {
      "@type": "Question",
      name: "Can I manage Google Ads myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if you have the time and willingness to learn. Google Ads isn't rocket science, but it requires: Understanding the basics (auction model, Quality Score, match types) Properly setting up tracking (most critical step) Continuous optimization (weekly at minimum) Patience (results don't come overnight) If you don't have the time or have a larger budget (£2,000+), I'd recommend working with a specialist."
      }
    },
    {
      "@type": "Question",
      name: "How much does Google advertising cost for businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Average CPC varies by industry: $1-5 for eCommerce, $2-10 for B2B, $5-50+ for legal/finance. Recommended minimum monthly budget is $500-1,000 for local businesses, $2,000+ for eCommerce. Management fees range from $300-1,000/month."
      }
    },
    {
      "@type": "Question",
      name: "Which Google campaign type is best for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Search campaigns are best for businesses wanting direct inquiries/calls. Shopping for eCommerce. Performance Max for multi-channel reach. Display for brand awareness. It depends on your goal — lead generation or online sales."
      }
    },
    {
      "@type": "Question",
      name: "How long until I see results from Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First conversions typically within 2-4 weeks. Full optimization requires 60-90 days as Google's algorithm needs data for learning. B2B campaigns usually require a longer period (3-6 months) due to longer sales cycles."
      }
    },
    {
      "@type": "Question",
      name: "Do I need a website for Google advertising?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, a website is mandatory for Google Ads. You need a landing page that loads fast (under 3 seconds), is mobile-friendly, and has a clear call to action. Without a good website, even a perfect campaign won't deliver results."
      }
    },
    {
      "@type": "Question",
      name: "Can I manage Google Ads myself or do I need an expert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can start managing it yourself with a smaller budget, but without experience you typically waste 30-50% of budget on unoptimized spending. An expert pays for itself when monthly ad spend exceeds $1,000-2,000 as optimization savings usually cover the fee."
      }
    }
  ]
};

// --- performance-max-vodic ---
const faqSchemaPerformanceMaxSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Da li Performance Max zamenjuje Shopping kampanje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne nužno. Mnogi oglašivači koriste oba formata - Standard Shopping za brand i kontrolu, PMax za prospecting i skaliranje. Google aktivno gura PMax, ali Shopping kampanje i dalje funkcionišu odlično. Moja preporuka: hibridni pristup. Ne zatvarajte Shopping kampanje ako dobro performuju, već dodajte PMax kao dodatni kanal."
      }
    },
    {
      "@type": "Question",
      name: "Koliki budžet treba za Performance Max?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum €50-100 dnevno (€1,500-3,000 mesečno) za smislene rezultate. Ispod toga, algoritam nema dovoljno budžeta da testira 7 različitih mreža i skupi dovoljno podataka za optimizaciju. Za B2B sa manjim volume-om konverzija, može funkcionisati sa €30-50 dnevno, ali učenje će biti sporije."
      }
    },
    {
      "@type": "Question",
      name: "Zašto ne vidim sve search terms u PMax kampanjama?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PMax ima search terms izveštaj (Insights tab), i vremenom je proširen, ali i dalje ne pokazuje sve. Termovi sa malim brojem prikaza se izostavljaju, podaci nisu razdvojeni po mreži, i nemate kontrolu na nivou ključne reči kao u Search kampanjama. Ovo ostaje legitimna kritika PMax-a jer se gubi deo transparentnosti. Praktično: koristite izveštaj da uhvatite očigledne promašaje koje ćete isključiti negativnim ključnim rečima i da pratite trendove, ali ne očekujte kompletnu listu kao u Search-u."
      }
    },
    {
      "@type": "Question",
      name: "Da li PMax kanibalizuje moje druge kampanje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zavisi od toga o kom periodu pričamo. Do oktobra 2024. PMax je imao automatski prioritet nad Standard Shopping-om za iste proizvode, pa je kanibalizacija bila strukturna - Standard Shopping je gubio prikaze bez obzira na to koliko je dobro postavljen. Od oktobra 2024. Google odlučuje preklapajuću aukciju po Ad Rank-u, a ne po tipu kampanje. Nijedan tip nema automatski prioritet, pa dobro izgrađena Standard Shopping kampanja stvarno konkuriše umesto da bude potisnuta. Praktična posledica: preklapanje i dalje postoji i treba ga pratiti, ali nije unapred rešeno u korist PMax-a. Šta gledati - impression share Standard Shopping kampanja na proizvodima koji su i u PMax-u, i brand termine kao negativne ključne reči u PMax-u ako ne želite da PMax kupuje vaš brend. Pratite ukupne rezultate na nivou naloga, ne samo PMax. Ako ukupan ROAS ili konverzije rastu, preklapanje nije problem. Detaljna razrada: Performance Max vs Standard Shopping."
      }
    },
    {
      "@type": "Question",
      name: "Kada treba isključiti Performance Max?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kada konstantno underperformuje vs vaši ciljevi posle 8+ nedelja (dovoljno vremena za learning), kada je lead quality neprihvatljiva i ne poboljšava se sa offline conversion import-om, ili kada jednostavno ne odgovara vašem poslovnom modelu (npr. potreba za striktnom kontrolom budžeta po proizvodu). PMax nije za sve - i to je OK. Neki biznisi bolje funkcionišu sa Search + Shopping + Remarketing kombinacijom. Remarketing vodič."
      }
    },
    {
      "@type": "Question",
      name: "Da li Performance Max zamenjuje Search i Shopping kampanje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne u potpunosti. PMax može da radi uz Search i Shopping. Google preporučuje kombinaciju - PMax za široku pokrivenost, Search za high-intent upite. Shopping sa PMax-om zahteva pažljivu asset group strukturu da se izbegne kanibalizacija."
      }
    },
    {
      "@type": "Question",
      name: "Koliki budžet treba za Performance Max?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum €30-50/dan (€900-1,500/mesečno). PMax koristi machine learning koji zahteva dovoljno podataka - ispod ovog budžeta algoritam nema dovoljno konverzija za optimizaciju. Za eCommerce sa 100+ proizvoda, preporučuje se €2,000+/mesečno."
      }
    },
    {
      "@type": "Question",
      name: "Zašto PMax troši većinu budžeta na Display/YouTube?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Čest problem sa PMax-om. Prvo proverite channel-level report (Insights tab) da vidite tačan iznos po kanalu. Rešenja: isključite URL expansion, dodajte negativne ključne reči (na nivou kampanje ili naloga, samostalno u interfejsu), uključite brand exclusions ako PMax kupuje vaš brend, napravite jače Search kampanje za iste ključne reči. PMax će trošiti gde mu je najjeftinije, ne nužno najefikasnije."
      }
    },
    {
      "@type": "Question",
      name: "Kako videti gde PMax prikazuje oglase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Insights tab → Placement report (ograničen), Asset group performance. Od 2026. tu je i channel-level reporting - izveštaj po kanalima (Search, Shopping, Display, YouTube, Discover, Gmail, Maps) koji direktno pokazuje gde ide budžet, bez potrebe za GA4 workaround-om. Za search-term nivo detalja i dalje je korisno pratiti URL-based tracking ili GA4, ali za pitanje gde ide budžet channel-level report je sada prvi korak."
      }
    },
    {
      "@type": "Question",
      name: "Kada NE koristiti Performance Max?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kad imate mali budžet (ispod €500/mesečno), kad nemate conversion tracking, za čist brand awareness, ili kad trebate preciznu kontrolu nad ključnim rečima. PMax je automatizovan - ako želite potpunu kontrolu, Search i Shopping su bolji izbor."
      }
    }
  ]
};

const faqSchemaPerformanceMaxEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Performance Max replace Shopping campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. Many advertisers use both formats — Standard Shopping for brand and control, PMax for prospecting and scaling. Google actively pushes PMax, but Shopping campaigns still work excellently. My recommendation: hybrid approach. Don't close Shopping campaigns if performing well, add PMax as additional channel."
      }
    },
    {
      "@type": "Question",
      name: "What budget is needed for Performance Max?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum $60–120 daily ($2,000–3,500 monthly) for meaningful results. Below that, algorithm doesn't have enough budget to test 7 different networks and collect sufficient data for optimization. For B2B with lower conversion volume, can work with $40–60 daily, but learning will be slower."
      }
    },
    {
      "@type": "Question",
      name: "Why don't I see all search terms in PMax campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PMax does have a search terms report (Insights tab), and it has been expanded over time, but it still doesn't show everything. Low-volume terms are omitted, the data isn't split by network, and you get no keyword-level control the way you do in Search campaigns. That remains a fair criticism of PMax — part of the transparency is lost. In practice: use the report to catch obvious mismatches you can block with negative keywords and to track trends, but don't expect the complete list you get in Search."
      }
    },
    {
      "@type": "Question",
      name: "Does PMax cannibalize my other campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends which period you mean. Until October 2024, PMax had automatic priority over Standard Shopping for the same products, so the cannibalization was structural — Standard Shopping lost impressions no matter how well it was built. Since October 2024, Google resolves the overlapping auction on Ad Rank rather than campaign type. Neither type gets automatic priority, so a well-built Standard Shopping campaign genuinely competes instead of being pushed aside. What this means in practice: the overlap still exists and still needs watching, but it is no longer decided in PMax's favour in advance. Watch the impression share of Standard Shopping campaigns on products that also sit in PMax, and add brand terms as negative keywords in PMax if you don't want PMax buying your own brand. Monitor account-level totals, not just PMax in isolation. If overall ROAS or conversions are growing, the overlap isn't a problem. Full breakdown: Performance Max vs Standard Shopping."
      }
    },
    {
      "@type": "Question",
      name: "When should I turn off Performance Max?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When it consistently underperforms vs your targets after 8+ weeks (enough time for learning), when lead quality is unacceptable and doesn't improve despite offline conversion import, or when it simply doesn't fit your business model (e.g. you need strict per-product budget control). PMax isn't for everyone — and that's fine. Some businesses perform better with a Search + Shopping + Remarketing combination. Remarketing guide."
      }
    },
    {
      "@type": "Question",
      name: "Does Performance Max replace Search and Shopping campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not entirely. PMax can run alongside Search and Shopping. Google recommends a combination — PMax for broad coverage, Search for high-intent queries. Shopping with PMax requires careful asset group structure to avoid cannibalization."
      }
    },
    {
      "@type": "Question",
      name: "What budget do I need for Performance Max?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum $30-50/day ($900-1,500/month). PMax uses machine learning that requires sufficient data — below this budget the algorithm doesn't have enough conversions for optimization. For eCommerce with 100+ products, $2,000+/month is recommended."
      }
    },
    {
      "@type": "Question",
      name: "Why is PMax spending most of my budget on Display/YouTube?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common PMax problem. Check the channel-level report first (Insights tab) to see the exact spend by channel. Solutions: disable URL expansion, add negative keywords (at campaign or account level, self-serve in the UI), switch on brand exclusions if PMax is buying your own brand, create stronger Search campaigns for the same keywords. PMax will spend where it's cheapest, not necessarily most effective."
      }
    },
    {
      "@type": "Question",
      name: "How can I see where PMax shows my ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Insights tab → Placement report (limited), Asset group performance. Since 2026 there's also channel-level reporting — a breakdown by channel (Search, Shopping, Display, YouTube, Discover, Gmail, Maps) that shows directly where budget is going, without needing a GA4 workaround. For search-term-level detail, URL-based tracking or GA4 is still useful, but for the \"where does budget go\" question, the channel-level report is now the first stop."
      }
    },
    {
      "@type": "Question",
      name: "When should I NOT use Performance Max?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When you have a small budget (under $500/month), no conversion tracking, for pure brand awareness, or when you need precise keyword control. PMax is automated — if you want full control, Search and Shopping are better choices."
      }
    }
  ]
};

// --- google-ads-optimizacija ---
const faqSchemaOptimizacijaSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koliko često treba optimizovati Google Ads naloge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Za mali nalog (do €1000/mesec): nedeljno 1-2 sata optimizacije je dovoljno. Za veće naloge (€5000+/mesec): preporučujem dnevni check (15 min) + dublja nedeljne optimizacija (2-3 sata). Ključ je konzistentnost - bolje 30 minuta svakog ponedeljka nego 3 sata jednom mesečno."
      }
    },
    {
      "@type": "Question",
      name: "Koja je najvažnija optimizacija ako imam samo 1 sat nedeljno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Search Terms Report review (taktika #6). Ovo je aktivnost sa najvišim ROI - eliminišete nerentabilne klikove i otkrivate nove profitable keywords. 80% optimizacije koje radim nedeljno je upravo ovo. Sve ostalo je nice-to-have, ali Search Terms mining je must-have."
      }
    },
    {
      "@type": "Question",
      name: "Da li treba pauzirati kampanje noću ili vikendom?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zavisi od industrije. B2B kampanje: često je pametno sniziti bidove za 50-70% vikendom jer decision makers ne rade. eCommerce: vikendi su često best performing dani (ljudi kupuju od kuće). Umesto pauziranja, koristite Ad Schedule bid adjustments (taktika #22) da smanjite bidove u poor performing hours ali zadržite prisustvo."
      }
    },
    {
      "@type": "Question",
      name: "Kako znam da li moje optimizacije rade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pratite 3 metrike mesec-na-mesec: 1) CPA ili ROAS (efficiency), 2) Conversion volume (scale), 3) Impression Share (coverage). Ako CPA pada ali i konverzije padaju - možda ste isuviše restriktivni. Ako CPA raste ali i ROAS raste - možda ste na dobrom tragu. Kontekst je bitan. Benchmark protiv prethodnog meseca, ali i godine-na-godinu za sezonalnost."
      }
    },
    {
      "@type": "Question",
      name: "Koliko košta profesionalna Google Ads optimizacija?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Freelance consultants naplaćuju €200-600/mesec za redovnu optimizaciju (u zavisnosti od obima naloga). Agencije 10-20% ad spend-a. DIY pristup košta vreme - realno 5-10 sati mesečno ako učite, ili 2-3 sata ako ste iskusni. Više o cenama: Koliko košta Google Ads. Ako vas zanima profesionalna pomoć, zakažite konsultaciju."
      }
    },
    {
      "@type": "Question",
      name: "Mogu li automatizovati optimizaciju pomoću pravila (Automated Rules)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, ali oprezno. Automated Rules su odlični za repetitivne zadatke: pauziranje keywords sa CPA >€100 i 0 konverzija u poslednjih 30 dana, povećanje budžeta za kampanje sa >90% impression share, itd. Ali ne možete automatizovati strategy - pravila ne razumeju kontekst. Koristite ih za busywork, ali zadržite strategic decision-making manual."
      }
    },
    {
      "@type": "Question",
      name: "Koliko često treba optimizovati Google Ads kampanje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dnevno: provera budžeta i alert-a. Nedeljno: bid adjustments, search terms review, negativne ključne reči. Mesečno: A/B testovi oglasa, strukturalne promene, strategija. Preterana optimizacija (svaki dan menjanje bid-ova) može biti kontraproduktivna."
      }
    },
    {
      "@type": "Question",
      name: "Šta je najvažnija optimizacija za Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conversion tracking. Bez tačnog tracking-a, sve ostale optimizacije su naslepo. Posle toga: negativne ključne reči (sprečavaju bacanje budžeta), Quality Score (smanjuje CPC), i bid strategija (kontroliše gde se troši)."
      }
    },
    {
      "@type": "Question",
      name: "Da li Google Ads automatske preporuke treba prihvatiti?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne sve. Google optimizuje za svoj prihod, ne nužno za vaš ROI. Preporuke za broad match, budget povećanje i auto-apply promene obično nisu u vašem interesu. Prihvatajte samo one koje imaju smisla za vaše ciljeve."
      }
    },
    {
      "@type": "Question",
      name: "Kako poboljšati ROAS u Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fokusirajte se na: 1) Negativne ključne reči (eliminišite neproduktivne pretrage), 2) Bid strategiju po uređaju/lokaciji/vremenu, 3) Landing page optimizaciju, 4) Segmentaciju kampanja po profitabilnosti proizvoda, 5) Remarketing za postojeće posetioce."
      }
    },
    {
      "@type": "Question",
      name: "Zašto mi Quality Score opada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Najčešći razlozi: landing page se sporije učitava, konkurenti su poboljšali svoje oglase, CTR je pao (morate osvežiti copy), ili je relevantnost opala (ključne reči ne odgovaraju oglas → LP putanji). Proverite svaku komponentu pojedinačno."
      }
    },
    {
      "@type": "Question",
      name: "Da li su AdWords i Google Ads ista stvar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, potpuno ista. AdWords je bio originalni naziv Google-ove oglašivačke platforme od 2000. do 2018. godine, kada je Google izvršio rebrand u Google Ads. Sve što se nekada zvalo „AdWords optimizacija\" danas se zove „Google Ads optimizacija\" - ista platforma, iste taktike, isti ROAS principi. Starije agencije i marketing profesionalci još uvek ponekad koriste termin AdWords iz navike, posebno u B2B i enterprise okruženju."
      }
    }
  ]
};

const faqSchemaOptimizacijaEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How often should I optimize Google Ads accounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a small account (up to $3,000/month), 1-2 hours of weekly optimization is enough. For larger accounts ($15,000+/month), I recommend a daily check (15 minutes) plus a deeper weekly session (2-3 hours). The key is consistency — 30 minutes every Monday beats 3 hours once a month."
      }
    },
    {
      "@type": "Question",
      name: "What's the most important optimization if I only have 1 hour a week?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Search Terms Report review (tactic #6). It's the activity with the highest ROI — you eliminate unprofitable clicks and discover new profitable keywords. 80% of the optimization I do weekly is exactly this. Everything else is nice-to-have; Search Terms mining is a must."
      }
    },
    {
      "@type": "Question",
      name: "How do I know if my optimizations are working?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Track 3 metrics month-over-month: 1) CPA or ROAS (efficiency), 2) Conversion volume (scale), 3) Impression Share (coverage). If CPA drops but conversions drop too, you may be too restrictive. If CPA rises but ROAS rises with it, you may be on the right track. Context matters. Benchmark against the previous month, but also year-over-year for seasonality."
      }
    },
    {
      "@type": "Question",
      name: "Should I pause campaigns at night or on weekends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your industry. B2B campaigns: it's often smart to reduce bids by 50-70% on weekends because decision-makers aren't working. eCommerce: weekends are often your best-performing days (people shop from home). Rather than pausing, use Ad Schedule bid adjustments (tactic #22) to lower bids during poor-performing hours while maintaining some presence."
      }
    },
    {
      "@type": "Question",
      name: "How much does professional Google Ads optimization cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Freelance consultants typically charge £200-600/month for ongoing optimization (depending on account size and complexity). Agencies charge 10-20% of ad spend. The DIY approach costs time — realistically 5-10 hours per month while learning, or 2-3 hours once you're experienced. If you're interested in professional help, book a free consultation."
      }
    },
    {
      "@type": "Question",
      name: "Can I automate optimization using Automated Rules?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but carefully. Automated Rules are excellent for repetitive tasks: pausing keywords with CPA >£100 and 0 conversions in the last 30 days, increasing budget for campaigns with >90% impression share, and so on. But you can't automate strategy — rules don't understand context. Use them for busywork, but keep strategic decision-making manual."
      }
    },
    {
      "@type": "Question",
      name: "Should I accept Google Ads automatic recommendations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not all of them. Google optimizes for its own revenue, not necessarily your ROI. Recommendations for broad match, budget increases, and auto-apply changes are usually not in your best interest. Only accept those that align with your goals."
      }
    },
    {
      "@type": "Question",
      name: "How do I improve ROAS in Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Focus on: 1) Negative keywords (eliminate unproductive searches), 2) Bid strategy by device/location/time, 3) Landing page optimization, 4) Campaign segmentation by product profitability, 5) Remarketing to existing visitors."
      }
    },
    {
      "@type": "Question",
      name: "Why is my Quality Score dropping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common reasons: the landing page loads slower than it used to, competitors improved their ads, CTR dropped (refresh your copy), or relevance decreased (keywords don't match the ad → LP path). Check each component individually."
      }
    }
  ]
};

// --- google-shopping-vodic ---
const faqSchemaShoppingSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koliko proizvoda treba za Shopping kampanje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum 10-20 proizvoda, ali idealno 50+. Sa više proizvoda imate više prilike za impressions i konverzije. Preporučujem da započnete sa top performerima iz organskog saobraćaja ili bestseller kategorije."
      }
    },
    {
      "@type": "Question",
      name: "Da li mogu koristiti Shopping bez GTIN-a?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, ali performanse mogu biti lošije. Google preferira proizvode sa GTIN za matching. Ako nemate GTIN, obavezno popunite brand + MPN (Manufacturer Part Number). Ako nemate ni MPN, možete se prijaviti za GTIN exemption u Merchant Center."
      }
    },
    {
      "@type": "Question",
      name: "Koliki budžet treba za Shopping kampanje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum €500-1,000 mesečno za smislene rezultate. Za ozbiljno testiranje i optimizaciju, preporučujem €1,500-2,000+. Sa manjim budžetom, fokusirajte se na best-selling kategorije ili proizvode sa visokom maržom."
      }
    },
    {
      "@type": "Question",
      name: "Zašto moji proizvodi nisu prikazani?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Najčešći razlozi: disapproved feed (proverite Merchant Center Diagnostics), prenizak bid (podignite bid ili prebacite na Maximize Clicks), loš Quality Score (optimizujte feed i title-ove), ili issue sa dostupnošću (cena/stock mismatch)."
      }
    },
    {
      "@type": "Question",
      name: "Shopping ili Search kampanje za eCommerce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oba. Shopping za vizuelni, product-focused saobraćaj (\"patike nike\", \"laptop hp pavilion\"). Search za branded pretrage (\"vaš brand naziv\") i specifične informacijske pretrage koje Shopping ne hvata dobro. Preporučujem 60-70% budžeta na Shopping, 30-40% na Search."
      }
    },
    {
      "@type": "Question",
      name: "Da li mi treba Merchant Center za Google Shopping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, Merchant Center je obavezan. Tu upload-ujete product feed sa svim informacijama o proizvodima (naziv, cena, slika, dostupnost). Bez MC-a ne možete pokrenuti Shopping kampanje."
      }
    },
    {
      "@type": "Question",
      name: "Koliko proizvoda treba imati za Google Shopping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nema minimuma, ali Shopping najbolje radi sa 50+ proizvoda. Sa manje od 20 proizvoda, budžet se brzo potroši na malo SKU-ova. Za optimalne rezultate, preporučuje se 100+ aktivnih proizvoda u feed-u."
      }
    },
    {
      "@type": "Question",
      name: "Zašto su moji Shopping oglasi odbijeni?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Najčešći razlozi: neusklađenost cena između sajta i feed-a, nedostajući GTIN/MPN, loše slike (watermark, tekst na slici), nedostajuće shipping informacije, ili kršenje Google Merchant Center politika."
      }
    },
    {
      "@type": "Question",
      name: "Shopping vs Performance Max - šta je bolje za eCommerce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard Shopping daje veću kontrolu i transparentnost. PMax daje širi reach ali manje kontrole. Idealna kombinacija: Standard Shopping za top proizvode + PMax za ostatak kataloga. Zavisi od budžeta i broja proizvoda."
      }
    },
    {
      "@type": "Question",
      name: "Kako optimizovati product feed za bolje rezultate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ključne optimizacije: 1) Title sa glavnom ključnom rečju na početku, 2) Visokokvalitetne slike na beloj pozadini, 3) Detaljan opis sa ključnim rečima, 4) Tačan product_type i google_product_category, 5) Redovno ažuriranje cena i dostupnosti."
      }
    }
  ]
};

const faqSchemaShoppingEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many products do I need for Shopping campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum 10-20 products, but ideally 50+. More products = more opportunities for impressions and conversions. I recommend starting with top performers from organic traffic or bestseller categories."
      }
    },
    {
      "@type": "Question",
      name: "Can I use Shopping without GTIN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but performance may be worse. Google prefers products with GTIN for matching. If you don't have GTIN, you must fill brand + MPN (Manufacturer Part Number). If you don't have MPN either, you can apply for GTIN exemption in Merchant Center."
      }
    },
    {
      "@type": "Question",
      name: "What budget do I need for Shopping campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum $500-1,000/£400-800 monthly for meaningful results. For serious testing and optimization, I recommend $1,500-2,000+/£1,200-1,600+. With smaller budget, focus on best-selling categories or high-margin products."
      }
    },
    {
      "@type": "Question",
      name: "Why aren't my products showing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common reasons: disapproved feed (check Merchant Center Diagnostics), bid too low (increase bid or switch to Maximize Clicks), poor Quality Score (optimize feed and titles), or availability issue (price/stock mismatch)."
      }
    },
    {
      "@type": "Question",
      name: "Shopping or Search campaigns for eCommerce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. Shopping for visual, product-focused traffic (\"nike shoes\", \"hp pavilion laptop\"). Search for branded searches (\"your brand name\") and specific informational searches that Shopping doesn't capture well. I recommend 60-70% budget on Shopping, 30-40% on Search."
      }
    },
    {
      "@type": "Question",
      name: "Do I need Merchant Center for Google Shopping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Merchant Center is mandatory. This is where you upload your product feed with all product information (title, price, image, availability). Without MC you cannot run Shopping campaigns."
      }
    },
    {
      "@type": "Question",
      name: "How many products do I need for Google Shopping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There's no minimum, but Shopping works best with 50+ products. With fewer than 20 products, budget gets spent quickly on few SKUs. For optimal results, 100+ active products in the feed is recommended."
      }
    },
    {
      "@type": "Question",
      name: "Why are my Shopping ads being disapproved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most common reasons: price mismatch between website and feed, missing GTIN/MPN, poor images (watermarks, text on image), missing shipping information, or violating Google Merchant Center policies."
      }
    },
    {
      "@type": "Question",
      name: "Shopping vs Performance Max — what's better for eCommerce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard Shopping gives more control and transparency. PMax gives broader reach but less control. Ideal combination: Standard Shopping for top products + PMax for the rest of the catalog. Depends on budget and product count."
      }
    },
    {
      "@type": "Question",
      name: "How do I optimize my product feed for better results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key optimizations: 1) Title with main keyword at the beginning, 2) High-quality images on white background, 3) Detailed description with keywords, 4) Accurate product_type and google_product_category, 5) Regular price and availability updates."
      }
    }
  ]
};

// --- agencija-vs-freelancer ---
const faqSchemaAgencijaSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Da li mala firma treba Google Ads agenciju ili je freelancer dovoljan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Za male firme sa budžetom do €2,000-3,000 mesečno, freelancer je obično bolja opcija. Dobijate više personalizovane pažnje za istu ili nižu cenu. Agencija ima smisla kada prekoračite €5,000 spend ili vam treba multi-channel pristup (Google + Meta + LinkedIn). Moje iskustvo: 80% malih firmi u Srbiji bolje prolazi sa freelancerom nego sa agencijom."
      }
    },
    {
      "@type": "Question",
      name: "Koliko košta Google Ads agencija u Srbiji - cene 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cene Google Ads agencija u Srbiji kreću se u rasponu €300-2.500 mesečno: manje agencije pri dnu raspona, veće i etablirane pri vrhu. Model procenta od ad spend-a je obično 10-20% (najčešće 12-15%). Freelanceri naplaćuju €300-1.500 mesečno zavisno od obima posla. Preporučujem da tražite barem 2-3 ponude i uporedite ne samo cenu, već i scope rada i komunikacijski stil."
      }
    },
    {
      "@type": "Question",
      name: "Može li freelancer da vodi veliki budžet (€20,000+)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, ali samo ako ima pravo iskustvo i kapacitet. Moje iskustvo pokazuje da jedan senior freelancer može efikasno voditi do €15-20K spend, posle čega capacity postaje problem. Za budžete preko €20,000 mesečno, preporučujem ili veoma iskusnog freelancera (sa 5+ godina) koji ima backup sistem, ili agenciju. Alternativa je hibridni model: dva freelancera koja pokrivaju različite kanale."
      }
    },
    {
      "@type": "Question",
      name: "Šta je bolje za eCommerce - agencija ili freelancer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zavisi od kompleksnosti vašeg eCommerce poslovanja. Za čist Google Shopping + Search kampanje sa jednim kanalom, specijalizovani freelancer može biti odličan i cost-effective. Za multi-channel pristup (Google + Meta + email marketing + retargeting), agencija ima više smisla jer vam treba šira ekspertiza. Preporučujem: ispod €8,000 spend → freelancer, iznad €8,000 → agencija ili hibrid."
      }
    },
    {
      "@type": "Question",
      name: "Kako proveriti kvalitet Google Ads agencije ili freelancera?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pet koraka za proveru kvaliteta: (1) Tražite reference iz vaše ili slične industrije (minimum 2-3), (2) Pitajte za pristup njihovim client nalozima (sa maskiranim podacima) da vidite setup, (3) Proverite kako komuniciraju PRE angažovanja (response time, jasnoća odgovora), (4) Tražite da objasne konkretno šta će raditi u prva 3 meseca, (5) Insistirajte na trial periodu od 3 meseca sa clear KPI-jevima. Kvalitet pre-sales komunikacije obično odražava kvalitet buduće saradnje."
      }
    },
    {
      "@type": "Question",
      name: "Kada prebaciti sa freelancera na agenciju (ili obrnuto)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prelazak sa freelancera na agenciju ima smisla kada: (1) Ad spend prelazi €10,000-15,000 i freelancer dostiže capacity, (2) Trebaju vam dodatni kanali koje freelancer ne pokriva, (3) Potrebna vam je veća skalabilnost i backup tim. Prelazak sa agencije na freelancera ima smisla kada: (1) Smanjite budžet ispod €5,000, (2) Želite više personalizovane pažnje i direktne komunikacije, (3) Agencija daje generic service bez prave vrednosti. Moj savet: test period od 3 meseca pre full commitment-a."
      }
    },
    {
      "@type": "Question",
      name: "Koliko košta Google Ads agencija?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "U Srbiji: €300-2.500/mesečno, zavisno od veličine agencije i obima posla. U UK/USA: $500-3.000/mesečno za mid-range, $3.000-10.000+ za enterprise. Većina radi na fiksnom retainer-u ili procentu od ad spend-a (10-20%)."
      }
    },
    {
      "@type": "Question",
      name: "Freelancer ili agencija - šta je bolje za mali biznis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Za budžete do €1,000/mesečno ad spend, freelancer je obično bolji izbor - niži troškovi, direktna komunikacija, veća posvećenost. Agencija ima smisla kad trebate multi-channel pristup ili imate budžet €5.000+/mesečno."
      }
    },
    {
      "@type": "Question",
      name: "Kako prepoznati lošu Google Ads agenciju?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Red flags: ne daju pristup Google Ads nalogu, obećavaju garantovane rezultate, nemaju case studies, ne objašnjavaju strategiju, koriste samo Smart kampanje, ne postavljaju conversion tracking, ili zahtevaju dugoročne ugovore bez izlazne klauzule."
      }
    },
    {
      "@type": "Question",
      name: "Da li mogu prebaciti nalog sa jedne agencije na drugu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, vaš Google Ads nalog je vaš - agencija ima samo pristup. Proverite da je nalog registrovan na vašu email adresu. Pri prelasku, tražite full access od stare agencije, zadržite istoriju kampanja i konverzija, i napravite backup pre promena."
      }
    },
    {
      "@type": "Question",
      name: "Šta da tražim u ugovoru sa agencijom?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ključne tačke: jasno definisan scope rada, mesečni reporting, pristup nalogu, otkazni rok (30 dana je fer), ko je vlasnik naloga, kakav je onboarding proces, i šta se dešava sa kampanjama po raskidu saradnje."
      }
    }
  ]
};

const faqSchemaAgencyEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should a small company hire a Google Ads agency or is a freelancer enough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For small companies with budgets up to $2,000-3,000/£1,600-2,400 monthly, a freelancer is usually the better option. You get more personalized attention for the same or lower price. An agency makes sense when you exceed $5,000/£4,000 spend or need multi-channel approach (Google + Meta + LinkedIn). My experience: 80% of small companies in US/UK do better with a freelancer than an agency."
      }
    },
    {
      "@type": "Question",
      name: "How much does a Google Ads agency cost in US/UK — prices 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Ads agency prices in US/UK run $500-3,000/£400-2,400 monthly for mid-range agencies and $3,000-10,000+/£2,400-8,000+ for enterprise-level ones. Percentage of ad spend model is usually 10-20% (typically 12-15%). Freelancers charge $300-1,500/£250-1,200 monthly depending on scope. I recommend getting at least 2-3 quotes and comparing not just price, but scope of work and communication style."
      }
    },
    {
      "@type": "Question",
      name: "Can a freelancer handle large budget ($20,000+/£16,000+)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but only if they have the right experience and capacity. My experience shows that one senior freelancer can effectively manage up to $15-20K/£12-16K spend, after which capacity becomes an issue. For budgets over $20,000/£16,000 monthly, I recommend either a very experienced freelancer (with 5+ years) who has a backup system, or an agency. Alternative is a hybrid model: two freelancers covering different channels."
      }
    },
    {
      "@type": "Question",
      name: "What's better for eCommerce - agency or freelancer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depends on your eCommerce complexity. For pure Google Shopping + Search campaigns on one channel, a specialized freelancer can be excellent and cost-effective. For multi-channel approach (Google + Meta + email marketing + retargeting), an agency makes more sense as you need broader expertise. I recommend: below $8,000/£6,500 spend → freelancer, above $8,000/£6,500 → agency or hybrid."
      }
    },
    {
      "@type": "Question",
      name: "How to verify quality of Google Ads agency or freelancer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Five steps to verify quality: (1) Request references from your or similar industry (minimum 2-3), (2) Ask for access to their client accounts (with masked data) to see setup, (3) Check how they communicate BEFORE engagement (response time, answer clarity), (4) Ask them to explain specifically what they'll do in first 3 months, (5) Insist on trial period of 3 months with clear KPIs. Pre-sales communication quality usually reflects future collaboration quality."
      }
    },
    {
      "@type": "Question",
      name: "When to switch from freelancer to agency (or vice versa)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Switch from freelancer to agency makes sense when: (1) Ad spend exceeds $10,000-15,000/£8,000-12,000 and freelancer reaches capacity, (2) You need additional channels the freelancer doesn't cover, (3) You need greater scalability and backup team. Switch from agency to freelancer makes sense when: (1) You reduce budget below $5,000/£4,000, (2) Want more personalized attention and direct communication, (3) Agency gives generic service without real value. My advice: test period of 3 months before full commitment."
      }
    },
    {
      "@type": "Question",
      name: "How much does a Google Ads agency cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the US/UK: $500-3,000/month for mid-range agencies, $3,000-10,000+ for enterprise. Most work on a fixed retainer or percentage of ad spend (10-20%). Some charge setup fees of $500-2,000."
      }
    },
    {
      "@type": "Question",
      name: "Freelancer or agency — what's better for small business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For ad spend budgets under $2,000/month, a freelancer is usually the better choice — lower costs, direct communication, more dedication. An agency makes sense when you need multi-channel approach or have $5,000+/month budget."
      }
    },
    {
      "@type": "Question",
      name: "How do I spot a bad Google Ads agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Red flags: they don't give access to your Google Ads account, promise guaranteed results, have no case studies, don't explain strategy, only use Smart campaigns, don't set up conversion tracking, or require long-term contracts without exit clause."
      }
    },
    {
      "@type": "Question",
      name: "Can I switch from one agency to another?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, your Google Ads account is yours — the agency only has access. Verify the account is registered to your email. When switching, request full access from the old agency, retain campaign and conversion history, and backup before changes."
      }
    },
    {
      "@type": "Question",
      name: "What should I look for in an agency contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key points: clearly defined scope of work, monthly reporting, account access, notice period (30 days is fair), who owns the account, onboarding process, and what happens to campaigns when the partnership ends."
      }
    }
  ]
};

// --- conversion-tracking-vodic ---
const faqSchemaConversionTrackingSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koliko vremena treba da se konverzija pojavi u Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Obično 3-6 sati za online konverzije. Može biti i do 24 sata u nekim slučajevima. Offline conversion import zavisi od frekvencije vašeg uploada (ja preporučujem nedeljno). Ako konverzija ne pokaže nakon 24 sata, proverite da li je tag pravilno postavljen kroz GTM Preview mode i Tag Assistant."
      }
    },
    {
      "@type": "Question",
      name: "Zašto se broj konverzija u GA4 i Google Ads razlikuje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Različiti atribucioni modeli, različiti conversion windows i različit način brojanja. Oba sistema danas koriste data-driven atribuciju, ali svaki nad svojim podacima i sa svojim window-om. GA4 je event-based i beleži svaki key event na datum kada se dogodio, dok Google Ads konverziju pripisuje datumu klika. Razlika od 10-20% je potpuno normalna i ne ukazuje na problem. Ako je razlika >30%, proverite da li imate duplo brojanje."
      }
    },
    {
      "@type": "Question",
      name: "Da li mi treba developer za postavljanje conversion tracking-a?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Za osnovni GTM setup - ne obavezno. Možete sami postaviti GTM container i basic conversion tagove ako pratite dokumentaciju. Za Enhanced Conversions (data layer push) i server-side tracking - verovatno da, jer zahteva JavaScript i backend integraciju. Ako nemate tehničko znanje, preporučujem da angažujete developera ili Google Ads konsultanta koji će postaviti sve pravilno."
      }
    },
    {
      "@type": "Question",
      name: "Šta ako nemam thank-you stranicu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Koristite event-based tracking umesto page load tracking-a. Trigger može biti form submission event, AJAX response success callback ili URL parameters (npr. ?submitted=true). U GTM možete postaviti trigger na Form Submission ili custom JavaScript event. Ako koristite platforme kao što su Webflow, WordPress ili Shopify, često postoje built-in opcije za tracking bez thank-you page-a."
      }
    },
    {
      "@type": "Question",
      name: "Koliko konverzija treba za Smart Bidding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google-ova preporuka je oko 30 konverzija u poslednjih 30 dana za Target CPA i oko 50 konverzija u 30 dana za Target ROAS. Iz moje prakse, rezultati se smiruju negde između 30 i 50 konverzija mesečno. Ispod toga algoritam nema dovoljno podataka i performanse mogu biti nepredvidive. Ako nemate dovoljno primarnih konverzija, možete privremeno dodati sekundarne akcije za posmatranje dok ne sakupite volumen."
      }
    },
    {
      "@type": "Question",
      name: "Šta je Enhanced Conversions i da li mi treba?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enhanced Conversions šalje hash-ovane first-party podatke (email, telefon, adresa) da poboljša attribution uprkos cookie restrictions i iOS privacy promenama. Preporučujem ga SVIM kampanjama sa budžetom €1,000+. Očekujte 5-15% više pripisanih konverzija nakon implementacije. Setup zahteva data layer push sa user data (email i telefon su minimum), što obično zahteva pomoć developera."
      }
    },
    {
      "@type": "Question",
      name: "Šta je conversion tracking i zašto je važan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conversion tracking prati akcije korisnika nakon klika na oglas - kupovinu, poziv, popunjavanje forme. Bez njega, Google ne zna koje ključne reči i oglasi donose rezultate, pa ne može optimizovati kampanje. To je osnova svake uspešne kampanje."
      }
    },
    {
      "@type": "Question",
      name: "Google Tag vs GTM - šta koristiti?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Tag Manager (GTM) je uvek preporučen jer omogućava fleksibilnost bez menjanja koda sajta. Google Tag (gtag.js) je direktan ali zahteva developersku pomoć za svaku promenu. Za većinu biznisa, GTM je bolji izbor."
      }
    },
    {
      "@type": "Question",
      name: "Šta su Enhanced Conversions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enhanced Conversions šalju hash-ovane korisničke podatke (email, telefon) Googleu za bolji matching. Poboljšavaju tracking tačnost za 5-15% posebno na iOS uređajima. Implementacija je jednostavna preko GTM-a ili Google Tag-a."
      }
    },
    {
      "@type": "Question",
      name: "Koliko konverzija treba za Smart Bidding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google-ova preporuka je oko 30 konverzija u poslednjih 30 dana za Target CPA i oko 50 za Target ROAS. Iz moje prakse, stabilnost počinje oko 30-50 konverzija mesečno. Ispod toga algoritam nema dovoljno podataka i rezultati su nepredvidivi. U tom slučaju koristite Manual CPC ili Maximize Clicks."
      }
    },
    {
      "@type": "Question",
      name: "Zašto se konverzije u Google Ads i GA4 ne poklapaju?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Za nove conversion actions Google Ads po default-u koristi data-driven atribuciju sa 30-dnevnim conversion window-om, a GA4 svoj data-driven model sa 90-dnevnim window-om. Razlikuje se i brojanje: Google Ads konverziju pripisuje datumu klika, GA4 je event-based i beleži svaki key event na datum događaja. Uvek uporedite iste periode i razumite razlike."
      }
    }
  ]
};

const faqSchemaConversionTrackingEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long until conversion appears in Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually 3-6 hours for online conversions. Can be up to 24 hours in some cases. Offline conversion import depends on your upload frequency (I recommend weekly). If conversion doesn't show after 24 hours, check if tag is properly set up via GTM Preview mode and Tag Assistant."
      }
    },
    {
      "@type": "Question",
      name: "Why do conversion numbers in GA4 and Google Ads differ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Different attribution models, different conversion windows, and different counting methods. Both systems now use data-driven attribution, but each over its own data and with its own window. GA4 is event-based and records every key event on the day it happened, while Google Ads credits the conversion to the click date. Difference of 10-20% is completely normal and doesn't indicate a problem. If difference >30%, check for double counting."
      }
    },
    {
      "@type": "Question",
      name: "Do I need a developer to set up conversion tracking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For basic GTM setup — not necessarily. You can set up GTM container and basic conversion tags yourself if you follow documentation. For Enhanced Conversions (data layer push) and server-side tracking — probably yes, as it requires JavaScript and backend integration. If you don't have technical knowledge, I recommend hiring a developer or Google Ads consultant who'll set everything up properly."
      }
    },
    {
      "@type": "Question",
      name: "What if I don't have a thank-you page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use event-based tracking instead of page load tracking. Trigger can be form submission event, AJAX response success callback, or URL parameters (e.g., ?submitted=true). In GTM you can set trigger on Form Submission or custom JavaScript event. If using platforms like Webflow, WordPress, or Shopify, there are often built-in options for tracking without thank-you page."
      }
    },
    {
      "@type": "Question",
      name: "How many conversions needed for Smart Bidding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google recommends roughly 30 conversions in the last 30 days for Target CPA and roughly 50 conversions in 30 days for Target ROAS. In my own accounts, results settle down somewhere between 30 and 50 conversions per month. Below that, the algorithm doesn't have enough data and performance can be unpredictable. If you don't have enough primary conversions, you can temporarily add secondary actions for observation while collecting volume."
      }
    },
    {
      "@type": "Question",
      name: "What is Enhanced Conversions and do I need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enhanced Conversions sends hashed first-party data (email, phone, address) to improve attribution despite cookie restrictions and iOS privacy changes. I recommend it for ALL campaigns with $1,000+/£800+ budget. Expect 5-15% more attributed conversions after implementation. Setup requires data layer push with user data (email and phone are minimum), which usually requires developer help."
      }
    },
    {
      "@type": "Question",
      name: "What is conversion tracking and why is it important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conversion tracking monitors user actions after clicking an ad — purchases, calls, form submissions. Without it, Google doesn't know which keywords and ads drive results, so it can't optimize campaigns. It's the foundation of every successful campaign."
      }
    },
    {
      "@type": "Question",
      name: "Google Tag vs GTM — which should I use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Tag Manager (GTM) is always recommended because it offers flexibility without changing site code. Google Tag (gtag.js) is direct but requires developer help for every change. For most businesses, GTM is the better choice."
      }
    },
    {
      "@type": "Question",
      name: "What are Enhanced Conversions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enhanced Conversions send hashed user data (email, phone) to Google for better matching. They improve tracking accuracy by 5-15%, especially on iOS devices. Implementation is straightforward through GTM or Google Tag."
      }
    },
    {
      "@type": "Question",
      name: "How many conversions do I need for Smart Bidding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google recommends roughly 30 conversions in the last 30 days for Target CPA and roughly 50 for Target ROAS. In my own accounts, stability starts somewhere around 30-50 conversions per month. Below that, the algorithm lacks sufficient data and results are unpredictable. In that case, use Manual CPC or Maximize Clicks."
      }
    },
    {
      "@type": "Question",
      name: "Why don't conversions match between Google Ads and GA4?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For new conversion actions Google Ads uses data-driven attribution by default with a 30-day conversion window, while GA4 uses its own data-driven model with a 90-day window. Counting differs too: Google Ads credits the conversion to the click date, while GA4 is event-based and records every key event on the day it happened. Always compare the same periods and understand the differences."
      }
    }
  ]
};

// --- google-ads-greske ---
const faqSchemaGreskeSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koliko ovih grešaka ima prosečan Google Ads nalog?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "U mojim audit-ima, 80% naloga ima minimum 3-5 od ovih grešaka. Nalozi kojima upravlja neko bez iskustva često imaju 8+. Čak i nalozi koje vode agencije ponekad imaju 2-3 fundamentalne greške (najčešće u tracking-u ili strukturi). Savršen nalog ne postoji, ali svaka popravljena greška direktno utiče na performanse."
      }
    },
    {
      "@type": "Question",
      name: "Koja greška ima najveći uticaj na rezultate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Greške u merenju - absence ili pogrešan conversion tracking. Bez pravilnog merenja, sve odluke su nagađanje. Smart Bidding ne radi. Ne znate koja kampanja donosi rezultate. Druga najskuplja greška je nedostatak negative keywords - direktno troši 15-30% budžeta na nebitne klikove."
      }
    },
    {
      "@type": "Question",
      name: "Mogu li sam da popravim ove greške ili mi treba ekspert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Većinu možete sami - ove greške nisu tehnički kompleksne, samo zahtevaju vreme i pažnju. Preporučujem da pročitate povezane vodiče (conversion tracking, negative keywords, Quality Score) i radite korak po korak. Ako imate budžet €2,000+, ekspertska pomoć se često isplati jer možete da fokusirate vreme na biznis umesto na administraciju naloga."
      }
    },
    {
      "@type": "Question",
      name: "Koliko brzo se vide rezultati posle popravki?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zavisi od greške. Negative keywords imaju instant efekat - čim ih dodate, prestajete da plaćate za te pretrage. Strukturalne promene (kampanje, ad grupe) trebaju 1-2 nedelje da se stabilizuju. Smart Bidding strategije trebaju 2-4 nedelje learning period-a. Generalno, očekujte jasnu sliku posle 30-45 dana. Ključ je da pratite metrike PRE i POSLE da znate da li promene funkcionišu."
      }
    },
    {
      "@type": "Question",
      name: "Kako da znam da li moj nalog ima neku od ovih grešaka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Napravite sistematski pregled: 1) Proverite da li imate conversion tracking postavljen i da brojevi odgovaraju stvarnosti, 2) Otvorite Search Terms Report za prošlu nedelju - da li vidite nebitne pretrage? 3) Prebrojite negative keywords - ako imate manje od 50, sigurno currite budžet, 4) Pogledajte strukturu kampanja - da li možete lako da razumete šta je šta? Ako vam treba profesionalni audit, kontaktirajte me - detaljno pregledam nalog i dajem action plan sa prioritetima."
      }
    },
    {
      "@type": "Question",
      name: "Koja je najskuplja greška u Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nedostatak negativnih ključnih reči. Bez njih, vaš budžet se troši na irelevantne pretrage. Prosečan nalog bez negativnih ključnih reči baca 20-40% budžeta na neproduktivne klikove. Redovna analiza search terms report-a je obavezna."
      }
    },
    {
      "@type": "Question",
      name: "Da li broad match ključne reči treba koristiti?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Broad match može raditi uz Smart Bidding i dovoljno konverzija (30+/mesečno). Ali za manje naloge, phrase match i exact match daju bolju kontrolu. Najčešća greška je korišćenje broad match-a bez negativnih ključnih reči - to je recept za bacanje novca."
      }
    },
    {
      "@type": "Question",
      name: "Koliko ad grupa treba imati po kampnji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "5-20 ad grupa za većinu kampanja. Previše ad grupa (50+) otežava upravljanje i razređuje budžet. Premalo (1-2) znači lošu relevantnost. Svaka ad grupa treba imati tematski povezane ključne reči i odgovarajuće oglase."
      }
    },
    {
      "@type": "Question",
      name: "Zašto mi CTR opada iako ništa nisam menjao?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Najčešći razlozi: sezonalnost, novi konkurenti, ad fatigue (isti oglas predugo), promene u SERP layout-u, ili Quality Score pad. Rešenje: redovno osvežavajte oglase (svakih 4-6 nedelja), pratite Auction Insights i testirajte nove varijante."
      }
    },
    {
      "@type": "Question",
      name: "Da li treba koristiti sve Google Ads preporuke?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne. Mnoge preporuke služe Googleu da poveća vašu potrošnju. Ignorirajte: \"prebacite na broad match\", \"povećajte budžet za 50%\", auto-apply promene. Koristite: RSA preporuke za oglase, preporuke za negativne ključne reči, i tehnička poboljšanja."
      }
    }
  ]
};

const faqSchemaGreskeEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many of these mistakes does average Google Ads account have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In my audits, 80% of accounts have minimum 3-5 of these mistakes. Accounts managed by someone without experience often have 8+. Even accounts run by agencies sometimes have 2-3 fundamental mistakes (most often in tracking or structure). Perfect account doesn't exist, but each fixed mistake directly impacts performance."
      }
    },
    {
      "@type": "Question",
      name: "Which mistake has biggest impact on results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Measurement mistakes — absence or incorrect conversion tracking. Without proper measurement, all decisions are guesswork. Smart Bidding doesn't work. You don't know which campaign brings results. Second most expensive mistake is lack of negative keywords — directly spends 15-30% of budget on irrelevant clicks."
      }
    },
    {
      "@type": "Question",
      name: "Can I fix these mistakes myself or do I need expert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most you can fix yourself — these mistakes aren't technically complex, just require time and attention. I recommend reading linked guides (conversion tracking, negative keywords, Quality Score) and working step by step. If you have budget $2,000+/£1,600+, expert help often pays off as you can focus time on business instead of account administration."
      }
    },
    {
      "@type": "Question",
      name: "How quickly do results show after fixes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depends on mistake. Negative keywords have instant effect — as soon as you add them, you stop paying for those searches. Structural changes (campaigns, ad groups) need 1-2 weeks to stabilize. Smart Bidding strategies need 2-4 weeks learning period. Generally, expect clear picture after 30-45 days. Key is tracking metrics BEFORE and AFTER to know if changes work."
      }
    },
    {
      "@type": "Question",
      name: "How do I know if my account has any of these mistakes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Make systematic review: 1) Check if you have conversion tracking set up and numbers match reality, 2) Open Search Terms Report for past week — see irrelevant searches? 3) Count negative keywords — if you have less than 50, you're definitely leaking budget, 4) Look at campaign structure — can you easily understand what's what? If you need professional audit, contact me — I review account in detail and provide action plan with priorities."
      }
    },
    {
      "@type": "Question",
      name: "What is the most expensive Google Ads mistake?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lack of negative keywords. Without them, your budget gets spent on irrelevant searches. An average account without negative keywords wastes 20-40% of budget on unproductive clicks. Regular search terms report analysis is mandatory."
      }
    },
    {
      "@type": "Question",
      name: "Should I use broad match keywords?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Broad match can work with Smart Bidding and enough conversions (30+/month). But for smaller accounts, phrase match and exact match give better control. The most common mistake is using broad match without negative keywords — that's a recipe for wasting money."
      }
    },
    {
      "@type": "Question",
      name: "How many ad groups should I have per campaign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "5-20 ad groups for most campaigns. Too many (50+) makes management difficult and dilutes budget. Too few (1-2) means poor relevance. Each ad group should have thematically related keywords and matching ads."
      }
    },
    {
      "@type": "Question",
      name: "Why is my CTR declining even though I haven't changed anything?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most common reasons: seasonality, new competitors, ad fatigue (same ad running too long), changes in SERP layout, or Quality Score decline. Solution: refresh ads regularly (every 4-6 weeks), monitor Auction Insights, and test new variants."
      }
    },
    {
      "@type": "Question",
      name: "Should I follow all Google Ads recommendations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Many recommendations serve Google's goal to increase your spending. Ignore: \"switch to broad match\", \"increase budget by 50%\", auto-apply changes. Use: RSA recommendations for ads, negative keyword suggestions, and technical improvements."
      }
    }
  ]
};

// --- zasto-nema-rezultata ---
const faqSchemaZastoNemaRezultataSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koliko vremena treba da Google Ads počne da radi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zavisi od tipa kampanje. Za Search kampanje sa Manual CPC, prve konverzije možete videti za 7-14 dana. Za Smart Bidding (Target CPA, Target ROAS), learning period je 2-4 nedelje. Za PMax kampanje, čak 4-6 nedelja. Ali stabilne, optimizovane rezultate možete očekivati tek nakon 2-3 meseca rada. Nemojte odustati pre toga - learning je deo procesa."
      }
    },
    {
      "@type": "Question",
      name: "Da li je problem u agenciji/freelanceru?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Možda. Tražite transparentnost: pristup nalogu (Admin access), mesečne izveštaje sa jasnim metrikama, jasno objašnjenje akcija. Ako dobijate samo \"radimo na tome\" bez detalja, to je crvena zastava. Dobar partner će vam uvek moći objasniti šta radi i zašto. Ako niste zadovoljni, zatražite audit od nezavisne strane - često otkrije da problem nije u setup-u već u nečemu drugom (npr. landing page, ponuda)."
      }
    },
    {
      "@type": "Question",
      name: "Koliko budžeta treba da bude dovoljno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zavisi od industrije, CPC-a, i ciljeva. Ali pravilo palca: trebate minimum 10-15 konverzija mesečno da biste imali dovoljno podataka za bilo kakve zaključke. Ako je vaš CPA (cost per acquisition) €50, to znači minimum €500-750/mesec budžet. Google preporučuje 30+ konverzija mesečno za Smart Bidding, ali i sa 10-15 možete početi optimizaciju. Ispod toga, kampanja nema dovoljno signala za učenje."
      }
    },
    {
      "@type": "Question",
      name: "Šta ako konkurencija ima mnogo veći budžet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fokusirajte se na niše gde oni nisu jaki: long-tail keywords (specifičnije pretrage), geografski targeting (specifične lokacije), ad schedule (vremenski periodi kada konkurencija spava). Quality Score može značajno izjednačiti teren - QS 9 će vam dati bolju poziciju od QS 5 čak i sa manjim bid-om. Takođe, razmislite o manje očiglednim keywords - oni su često jeftiniji a konvertuju bolje jer su specifičniji."
      }
    },
    {
      "@type": "Question",
      name: "Da li da odustanem od Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pre nego što odustanete, probajte audit od nezavisne strane. Svež pogled često otkrije probleme koje vi ne vidite (ili koji su vam zamaskirani ako radite sa agencijom koja ne radi dobro). Google Ads radi za milione biznisa - ali nije univerzalno rešenje. Ako stvarno nema potražnje za vašim proizvodom/uslugom, ili su margine premale za profitabilnost sa vašim CPC-om, onda je možda vreme za drugi kanal (SEO, social media, email marketing)."
      }
    },
    {
      "@type": "Question",
      name: "Zašto Google Ads kampanja troši budžet ali nema konverzija?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top 3 razloga: 1) Loš conversion tracking (ne pratite prave akcije), 2) Landing page ne konvertuje (spor, nejasan CTA, loš mobile), 3) Pogrešne ključne reči (privlačite ljude bez namere kupovine). Proverite ova tri pre bilo čega drugog."
      }
    },
    {
      "@type": "Question",
      name: "Koliko dugo čekati pre nego što zaustavim kampanju?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum 2-3 nedelje sa dovoljnim budžetom (barem 100-200 klikova). Ako posle 500+ klikova nema ni jedne konverzije, problem je gotovo sigurno u landing page-u ili ponudi, ne u kampnji. Smart Bidding treba minimum 2-4 nedelje learning perioda."
      }
    },
    {
      "@type": "Question",
      name: "Da li je moj budžet premali za rezultate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ako dnevni budžet ne pokriva barem 10-15 klikova, da - budžet je premali. Izračunajte: prosečan CPC × 15 = minimalni dnevni budžet. Za većinu industrija u Srbiji, €10-20/dan je minimum. Za UK/USA, $30-50/dan."
      }
    },
    {
      "@type": "Question",
      name: "Zašto konkurenti imaju bolje pozicije od mene?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ad Rank = Bid × Quality Score × Expected impact of extensions. Ako konkurent ima bolji QS (bolji oglas i LP), može platiti manje po kliku i imati višu poziciju. Proverite Quality Score - ako je ispod 6, tu je problem. Takođe proverite da koristite sve relevantne ad extensions."
      }
    }
  ]
};

const faqSchemaZastoNemaRezultataEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take for Google Ads to start working?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depends on campaign type. For Search campaigns with Manual CPC, you can see first conversions in 7-14 days. For Smart Bidding (Target CPA, Target ROAS), learning period is 2-4 weeks. For PMax campaigns, even 4-6 weeks. But stable, optimized results can be expected only after 2-3 months of work. Don't give up before that — learning is part of the process."
      }
    },
    {
      "@type": "Question",
      name: "Is the problem with my agency/freelancer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maybe. Look for transparency: account access (Admin), monthly reports with clear metrics, clear explanation of actions. If you only get \"we're working on it\" without details, that's a red flag. A good partner will always be able to explain what they're doing and why. If you're not satisfied, request an audit from an independent party — often reveals that the problem isn't in the setup but something else (e.g., landing page, offer)."
      }
    },
    {
      "@type": "Question",
      name: "How much budget is enough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depends on industry, CPC, and goals. But rule of thumb: you need minimum 10-15 conversions monthly to have enough data for any conclusions. If your CPA (cost per acquisition) is $80, that means minimum $800-1,200/month budget. Google recommends 30+ conversions monthly for Smart Bidding, but even with 10-15 you can start optimization. Below that, campaign doesn't have enough signals to learn."
      }
    },
    {
      "@type": "Question",
      name: "What if competitors have much bigger budgets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Focus on niches where they're not strong: long-tail keywords (more specific searches), geographic targeting (specific locations), ad schedule (time periods when competition sleeps). Quality Score can significantly level the playing field — QS 9 will give you better position than QS 5 even with lower bid. Also, think about less obvious keywords — they're often cheaper and convert better because they're more specific."
      }
    },
    {
      "@type": "Question",
      name: "Should I give up on Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Before giving up, try an audit from an independent party. A fresh perspective often uncovers problems you don't see (or that are masked if you're working with an agency that's not doing well). Google Ads works for millions of businesses — but it's not a universal solution. If there really is no demand for your product/service, or margins are too small for profitability with your CPC, then it might be time for another channel (SEO, social media, email marketing)."
      }
    },
    {
      "@type": "Question",
      name: "Why is my Google Ads campaign spending budget but getting no conversions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top 3 reasons: 1) Poor conversion tracking — you're not tracking the right actions or tracking is broken. 2) Landing page doesn't convert — slow load speed, unclear CTA, poor mobile experience. 3) Wrong keywords — attracting people without purchase intent. Check these three before anything else."
      }
    },
    {
      "@type": "Question",
      name: "How long should I wait before stopping a campaign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum 2-3 weeks and at least 100-200 clicks before making any conclusions. Smart Bidding strategies need 4-6 weeks to exit the learning phase. Stopping too early is one of the most common mistakes — the algorithm needs time to find converting users."
      }
    },
    {
      "@type": "Question",
      name: "Is my budget too small for results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calculate: average CPC × 15 = minimum recommended daily budget. If your average CPC is $2, you need at least $30/day ($900/month). Below that, the campaign doesn't have enough data for optimization. For Smart Bidding, Google recommends 30+ conversions per month — with less, results are unpredictable."
      }
    },
    {
      "@type": "Question",
      name: "Why do competitors have better positions than me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ad Rank = Max CPC × Quality Score × Expected impact of extensions. If your QS is below 6, competitors with better relevance beat you even with lower bids. Check your Quality Score in the keywords report — scores below 5 signal that ads or landing pages aren't relevant enough for those keywords."
      }
    }
  ]
};

// --- ecommerce-vs-b2b ---
const faqSchemaEcommerceVsB2BSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Može li isti tim raditi i eCommerce i B2B kampanje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, ali zahteva drugačiji mindset. Ekspertiza u jednom ne garantuje ekspertizu u drugom. eCommerce konsultant koji poznaje Shopping/ROAS optimizaciju mora da nauči B2B lead quality tracking i offline conversions. Obrnuto važi takođe - B2B konsultant mora da nauči feed optimizaciju i Shopping kampanje. Preporučujem timove koji imaju iskustvo u oba modela ili specijalizovane konsultante po modelu."
      }
    },
    {
      "@type": "Question",
      name: "Koji model je lakši za početak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "eCommerce je obično jasniji - prodaja je prodaja, ROAS je ROAS. Vidite rezultate brže (2-4 nedelje), tracking je direktan (kupovina = konverzija), metrike su jednostavnije. B2B ima više varijabli: lead quality, sales cycle dužina, multiple decision makers. Ali ako imate CRM i offline conversion import, B2B može biti stabilniji dugoročno (veće deal vrednosti, duži customer lifetime)."
      }
    },
    {
      "@type": "Question",
      name: "Da li PMax radi za B2B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Može, ali sa oprezom. PMax zahteva dovoljno konverzija (minimum 30-50/mesec) i offline import za pravu optimizaciju ka kvalitetu. Većina B2B biznisa nema dovoljno volume za PMax da radi optimalno. Preporučujem: počnite sa Search kampanjama, gradite volume, dodajte offline conversion import, tek onda testirajte PMax sa 20-30% budžeta. Nikada ne prebacujte 100% budžeta na PMax odmah."
      }
    },
    {
      "@type": "Question",
      name: "Koliki budžet treba za B2B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Više nego što mislite zbog višeg CPC-a (€2-10+) i nižeg volumena. Minimum €1.500-2.500 mesečno za smisleno testiranje. Preporučujem €3.000-5.000 za stabilne rezultate. Formula: 3x CPC × 30 konverzija = minimalni budžet (npr. €5 CPC → €450, ali to je minimum za 1 kampanju). Za 3-4 kampanje (Brand, Non-Brand, Remarketing) + testirajuće budžete, računajte €3.000-5.000."
      }
    },
    {
      "@type": "Question",
      name: "Kako meriti ROI za B2B kada je sales cycle 6 meseci?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Long-term tracking je ključan: pipeline value, SQL rate, eventual revenue. Koristite CRM integraciju (HubSpot, Salesforce) i importujte podatke nazad u Google Ads (offline conversions). Pratite 3 metrike: (1) CPL - koliko košta lead, (2) SQL rate - koliko % lead-ova postaje kvalifikovano, (3) Won rate - koliko % SQL-ova se zatvara. Kombinirajte: CPL × (1 / SQL rate) × (1 / Won rate) = Cost per Won Deal. Uporedite sa average deal value = ROI."
      }
    },
    {
      "@type": "Question",
      name: "Šta ako radim hibridni model (npr. SaaS sa self-serve + enterprise)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Preporučujem zasebne kampanje po segmentu. Low-touch proizvodi (mesečna pretplata < €100) mogu da koriste eCommerce pristup (Target ROAS, kratki remarketing). High-touch enterprise (annual > €1,000+) treba B2B pristup (lead-gen, duži remarketing, offline import). Razdvojite landing pages, konverzije, i budžete. Ne mešajte u istoj kampanji jer će Smart Bidding biti konfuzovan (optimizuje ka €50 self-serve ili €10,000 enterprise deal?)."
      }
    },
    {
      "@type": "Question",
      name: "Koji tip kampanje je bolji za eCommerce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shopping kampanje (Standard Shopping i Performance Max) su #1 za eCommerce - vizuelno prikazuju proizvode direktno u pretrazi i imaju visok purchase intent. Search kampanje su komplementarne za brand i kategorijske termine. Display i YouTube su za remarketing i awareness fazu kupovnog puta."
      }
    },
    {
      "@type": "Question",
      name: "Kako meriti uspeh B2B Google Ads kampanja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ključne B2B metrike: CPL (cost per lead), MQL-to-SQL stopa (koliko leadova postaje kvalifikovani prodajni lead), CAC (customer acquisition cost) i LTV:CAC ratio. Ne fokusiraj se samo na klik i impression metrike - bez praćenja kvaliteta leadova nemoguće je znati da li kampanja zaista donosi vrednost biznisu."
      }
    },
    {
      "@type": "Question",
      name: "Da li Google Ads radi za B2B sa dugim sales cycle-om?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, ali sa drugačijim pristupom. Dugačak sales cycle zahteva remarketing strategiju (da ostaneš u vidokrugu tokom 3-6 meseci odlučivanja), lead nurturing sadržaj i offline conversion import (da Google zna koji leadovi su se pretvorili u kupce). Attribution window treba proširiti na 60-90 dana da zahvati ceo ciklus."
      }
    },
    {
      "@type": "Question",
      name: "Koliki budžet je potreban za eCommerce vs B2B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "eCommerce starteri: €500-1.000/mesečno za testiranje, €2.000+ za ozbiljne rezultate (zavisi od CPC i margina). B2B: €1.500-2.500/mesečno za smisleno testiranje, a CPL može biti €50-500+ zavisno od industrije. Važniji od budžeta je ROI - B2B deal vredan €10.000 opravdava visok CPL."
      }
    }
  ]
};

const faqSchemaEcommerceVsB2BEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can the same team run both eCommerce and B2B campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but requires different mindset. Expertise in one doesn't guarantee expertise in the other. eCommerce consultant who knows Shopping/ROAS optimization must learn B2B lead quality tracking and offline conversions. The reverse applies too — B2B consultant must learn feed optimization and Shopping campaigns. I recommend teams with experience in both models or specialized consultants per model."
      }
    },
    {
      "@type": "Question",
      name: "Which model is easier to start with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "eCommerce is usually clearer — sale is sale, ROAS is ROAS. You see results faster (2-4 weeks), tracking is direct (purchase = conversion), metrics are simpler. B2B has more variables: lead quality, sales cycle length, multiple decision makers. But if you have CRM and offline conversion import, B2B can be more stable long-term (larger deal values, longer customer lifetime)."
      }
    },
    {
      "@type": "Question",
      name: "Does PMax work for B2B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It can, but with caution. PMax requires enough conversions (minimum 30-50/month) and offline import for true optimization towards quality. Most B2B businesses don't have enough volume for PMax to work optimally. I recommend: start with Search campaigns, build volume, add offline conversion import, only then test PMax with 20-30% budget. Never move 100% budget to PMax immediately."
      }
    },
    {
      "@type": "Question",
      name: "How much budget for B2B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "More than you think because of higher CPC ($3-15+) and lower volume. Minimum $2,500-4,000 monthly for meaningful testing. I recommend $5,000-8,000 for stable results. Formula: 3x CPC × 30 conversions = minimum budget (e.g., $8 CPC → $720, but that's minimum for 1 campaign). For 3-4 campaigns (Brand, Non-Brand, Remarketing) + testing budgets, plan $5,000-8,000."
      }
    },
    {
      "@type": "Question",
      name: "How to measure ROI for B2B when sales cycle is 6 months?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Long-term tracking is key: pipeline value, SQL rate, eventual revenue. Use CRM integration (HubSpot, Salesforce) and import data back to Google Ads (offline conversions). Track 3 metrics: (1) CPL — how much a lead costs, (2) SQL rate — what % leads become qualified, (3) Won rate — what % SQLs close. Combine: CPL × (1 / SQL rate) × (1 / Won rate) = Cost per Won Deal. Compare to average deal value = ROI."
      }
    },
    {
      "@type": "Question",
      name: "What if I run hybrid model (e.g., SaaS with self-serve + enterprise)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I recommend separate campaigns per segment. Low-touch products (monthly subscription < $150) can use eCommerce approach (Target ROAS, short remarketing). High-touch enterprise (annual > $1,500+) needs B2B approach (lead-gen, longer remarketing, offline import). Separate landing pages, conversions, and budgets. Don't mix in same campaign because Smart Bidding will be confused (optimize towards $80 self-serve or $15,000 enterprise deal?)."
      }
    },
    {
      "@type": "Question",
      name: "Which campaign type is best for eCommerce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shopping campaigns (Standard Shopping and Performance Max) are #1 for eCommerce — they visually display products directly in search results and attract high purchase intent traffic. Search campaigns complement Shopping for brand and category terms. Display and YouTube work best for remarketing and awareness stages of the buying journey."
      }
    },
    {
      "@type": "Question",
      name: "How do I measure B2B Google Ads campaign success?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key B2B metrics: CPL (cost per lead), MQL-to-SQL rate (how many leads become qualified sales leads), CAC (customer acquisition cost), and LTV:CAC ratio. Don't focus only on clicks and impressions — without tracking lead quality, it's impossible to know whether campaigns are actually delivering business value."
      }
    },
    {
      "@type": "Question",
      name: "Does Google Ads work for B2B with long sales cycles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but with a different approach. Long sales cycles require a remarketing strategy (staying visible during 3-6 months of decision-making), lead nurturing content, and offline conversion imports (so Google knows which leads converted to customers). Extend your attribution window to 60-90 days to capture the full buying cycle."
      }
    },
    {
      "@type": "Question",
      name: "What budget is needed for eCommerce vs B2B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "eCommerce starters: $1,000-2,000/month for testing, $5,000+ for serious results (depends on CPC and margins). B2B: $2,500-4,000/month for meaningful testing, and CPL can be $100-1,000+ depending on industry. More important than budget is ROI — a B2B deal worth $50,000 justifies a high CPL."
      }
    }
  ]
};

// --- google-ads-audit-vodic ---
const faqSchemaAuditSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koliko često treba raditi Google Ads audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Preporučujem kvartalni deep audit (2-4 sata, svih 12 kategorija + 100+ checkpoint-a) + mesečni quick audit (30 min, 8 priority checkpoint-a). Takođe radite audit odmah ako: (1) performance naglo padne, (2) preuzimate nalog od druge agencije, (3) pokrećete nove proizvode/usluge, ili (4) menjate biznis model."
      }
    },
    {
      "@type": "Question",
      name: "Šta proveriti prvo u Google Ads auditu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pet tačaka koje pokrivaju 80% problema: 1) Conversion tracking - da li se prate prave akcije? 2) Search Terms Report - koji upiti aktiviraju vaše oglase? 3) Quality Score - da li su ključne reči relevantne? 4) Wasted spend - gde novac odlazi bez rezultata? 5) Landing page - konvertuje li stranica na koju šaljete saobraćaj?"
      }
    },
    {
      "@type": "Question",
      name: "Koliko košta profesionalan Google Ads audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cena kreće od €450 - to je moj Deep Audit + Action Plan, gde lično prolazim kroz nalog i dajem prioritizovan akcioni plan (vidi šta audit pokriva). Konačna cena zavisi od veličine naloga, broja kampanja i broja tržišta. Ako vam je mesečni ad spend €5K+, investicija se po pravilu isplati u prvom mesecu jer audit u proseku otkriva 15-25% budžeta koji se troši neefikasno."
      }
    },
    {
      "@type": "Question",
      name: "Mogu li sam da radim Google Ads audit ili mi treba specialist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Možete sami ako pratite checklist iz ovog vodiča i imate tehničko razumevanje Google Ads-a. Međutim, specialist ili agencija će brže identifikovati probleme jer vide 10-20+ naloga mesečno i znaju šta je \"normal\" vs \"red flag\". Takođe, spoljni pogled eliminiše confirmation bias. Ako je ad spend €3K+ mesečno, preporučujem da bar jednom godišnje platite profesionalan Google Ads audit za second opinion."
      }
    },
    {
      "@type": "Question",
      name: "Šta je najčešći problem koji Google Ads audit otkriva?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top 3 problema su: (1) Irelevantni search terms - troše 15-30% budžeta jer nema negative keywords liste ili se ne održava, (2) Conversion tracking ne funkcioniše tačno - ne radi ili beleži duplirane konverzije, pa algoritam donosi loše odluke, (3) Loša budget alokacija - loše kampanje troše previše, dobre kampanje limited by budget."
      }
    },
    {
      "@type": "Question",
      name: "Koliko vremena treba da prođe između audit-a i vidljivih rezultata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quick wins (dodavanje negative keywords, isključivanje Display Network-a iz Search kampanja, budget reallocation) daju rezultate za 7-14 dana. Srednje optimizacije (ad copy improvement, bidding adjustments) za 2-4 nedelje. Dublje promene (restructuring kampanja, nova bidding strategija) mogu zahtevati 4-8 nedelja. Smart Bidding uvek ima 7-14 dana learning period posle svake promene."
      }
    },
    {
      "@type": "Question",
      name: "Šta posle Google Ads audit-a - ko implementira optimizacije?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zavisi od dogovora i vaših resursa. Neki specialist-i daju samo audit report sa priori zovanim preporukama (DIY implementation). Drugi nude audit + implementation kao package. Treći nude audit + ongoing management (mesečno upravljanje). Preporučujem da implementation radi ista osoba koja je radila audit jer poznaje kontekst, prioritete, i razloge iza svake preporuke."
      }
    }
  ]
};

const faqSchemaAuditEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How often should I run a Google Ads audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I recommend a quarterly deep audit (2-4 hours, all 12 categories and 100+ checkpoints) plus a monthly quick audit (30 minutes, 8 priority checkpoints). Also run an audit immediately if: (1) performance suddenly drops, (2) you're taking over an account from another agency, (3) you're launching new products or services, or (4) you're changing your business model."
      }
    },
    {
      "@type": "Question",
      name: "What should I check first in a Google Ads audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Five points that cover 80% of problems: 1) Conversion tracking — are you tracking the right actions? 2) The Search Terms report — which queries are triggering your ads? 3) Quality Score — are your keywords relevant? 4) Wasted spend — where is money going without results? 5) The landing page — does the page you're sending traffic to actually convert?"
      }
    },
    {
      "@type": "Question",
      name: "How much does a professional Google Ads audit cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prices are £750 (UK), €750 (EU), or $1,500 (US) — that's my Deep Audit + Action Plan, where I personally go through the account and hand you a prioritized action plan (see what the audit covers). The final price depends on account size, number of campaigns, and number of markets. If your monthly ad spend is $8K+, the investment typically pays for itself in the first month — audits find 15-25% wasted spend on average."
      }
    },
    {
      "@type": "Question",
      name: "Can I run a Google Ads audit myself, or do I need a specialist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can do it yourself if you follow the checklist in this guide and have a technical understanding of Google Ads. A specialist or agency will identify problems faster, though, because they see 10-20+ accounts a month and know what's normal versus a red flag. An external review also eliminates confirmation bias. If your ad spend is $5K+ a month, I recommend a professional audit at least once a year for a second opinion."
      }
    },
    {
      "@type": "Question",
      name: "What's the most common problem a Google Ads audit uncovers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The top three problems are: (1) irrelevant search terms — they waste 15-30% of the budget when there's no negative keyword list or it isn't maintained, (2) inaccurate conversion tracking — it's either broken or recording duplicate conversions, so the algorithm makes bad decisions, and (3) poor budget allocation — weak campaigns overspend while good campaigns sit limited by budget."
      }
    },
    {
      "@type": "Question",
      name: "How long until an audit produces visible results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quick wins (adding negative keywords, removing the Display Network from Search campaigns, budget reallocation) deliver results in 7-14 days. Medium optimizations (ad copy improvements, bidding adjustments) take 2-4 weeks. Deep changes (campaign restructuring, a new bidding strategy) can take 4-8 weeks. Smart Bidding always has a 7-14 day learning period after each change."
      }
    },
    {
      "@type": "Question",
      name: "What should I do after a Google Ads audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Build a prioritized action list. Urgent (this week): conversion tracking errors and active issues burning budget. High priority (this month): negative keywords, ad improvements, Quality Score. Optimization (next 3 months): bidding strategy testing, landing page optimization, campaign expansion. Without prioritization, the audit remains just a list of problems."
      }
    },
    {
      "@type": "Question",
      name: "Who implements the optimizations after a Google Ads audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That depends on the agreement and your resources. Some specialists deliver only the audit report with prioritized recommendations (you implement it yourself). Others offer audit plus implementation as a package, and some offer audit plus ongoing monthly management. I recommend having the same person who ran the audit implement the changes — they know the context, the priorities, and the reasoning behind each recommendation."
      }
    }
  ]
};

// --- kako-poceti-google-ads ---
const faqSchemaKakoPocetiSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Da li se Google Ads isplati za male biznise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da - ali pod uslovom da postoji dovoljno pretrage za vaše usluge ili proizvode i da je ekonomija konverzije zdrava. Ako je vaša prosečna vrednost prodaje €50 a CPC je €3, trebate dobru stopu konverzije da budete profitabilni. Ako je prosečna prodaja €500, margina je puno veća. Google Ads funkcioniše za male biznise koji imaju jasnu ponudu i relevantan saobraćaj - posebno lokalni servisi i specijalizovani eCommerce."
      }
    },
    {
      "@type": "Question",
      name: "Koliko vremena treba da se vide rezultati?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Realno: prvih klikova ima već prvog dana. Smislene podatke za donošenje odluka dobijate posle 2-4 nedelje, zavisno od budžeta i volumena pretrage. Automatski bidding strategije (Target CPA, Target ROAS) zahtevaju minimum 30-50 konverzija mesečno da bi algoritam radio dobro. Do tada preporučujem Manual CPC ili Maximize Clicks sa postavljenim maksimalnim CPC."
      }
    },
    {
      "@type": "Question",
      name: "Da li mogu sam da vodim Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apsolutno. Mnogi vlasnici biznisa uspešno vode sopstvene kampanje. Ključ je u tome da razumete šta pratite (konverzije, CPA, ROAS) i da ne donosite preuranjene odluke. Izazov postaje kada kampanje narastu - više kampanja, više tržišta, kompleksnija segmentacija zahtevaju više vremena i iskustva. Za početak: jedan nalog, jedna kampanja, puno fokusa."
      }
    },
    {
      "@type": "Question",
      name: "Koji je minimalni budžet za Google Ads u Srbiji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tehnički, Google nema minimalni dnevni budžet. Praktično, preporučujem minimum €10/dan (€300/mes) da dobijete dovoljno klikova za smislenu analizu. Sa manjim budžetom, podaci su previše retki da biste doneli pouzdane zaključke. Za lokalne servise u Srbiji, sa €300-500 mesečno možete dobiti odlične rezultate zahvaljujući niskom CPC."
      }
    },
    {
      "@type": "Question",
      name: "Da li preporučujem Google Ads za svaki biznis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne. Google Ads funkcioniše sjajno kada postoji aktivna pretraga - ljudi moraju da traže vaš proizvod ili uslugu na Google-u. Ako ste potpuno nova kategorija proizvoda koju niko ne zna da traži, bolje počnite sa Facebook/Meta oglasima koji grade svesnost. Isto važi ako je vaš prosečan prihod po kupcu prenizak da pokrije CPC. Pre pokretanja uvek pitajte: \"Koliko ljudi traži ovo na Google-u?\" i \"Da li se ekonomija konverzije drži?\""
      }
    }
  ]
};

const faqSchemaKakoPocetiEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Google Ads worth it for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — if you have a clear offer, a decent landing page, and proper tracking in place. Small businesses actually have an advantage: they can be more targeted, more nimble, and can optimize faster than large companies. The key is not budget size — it's efficiency. I have seen €300/month campaigns deliver better ROAS than €3,000/month campaigns, because the fundamentals were right."
      }
    },
    {
      "@type": "Question",
      name: "How long until I see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First signals (clicks, impressions, initial conversions) appear within 2-4 weeks. Meaningful data for optimization comes after 4-8 weeks. A fully optimized, stable account typically takes 2-3 months. This timeline is non-negotiable — anyone promising results in a few days is misleading you. Give the platform time to learn, and give yourself time to iterate."
      }
    },
    {
      "@type": "Question",
      name: "Can I manage Google Ads myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely — if you are willing to invest the time to learn it properly. The platform is not magic; it rewards methodical thinking and consistent optimization. The challenge is that mistakes are expensive during the learning period. If your monthly budget is under €500, managing it yourself while learning is a reasonable path. Above that, the opportunity cost of slow optimization often exceeds the cost of an expert."
      }
    },
    {
      "@type": "Question",
      name: "What is the minimum budget for Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Technically, you can run Google Ads on €5/day. Practically, you need enough budget to generate meaningful click and conversion volume for optimization. For local businesses in Serbia or the Balkans, €200-400/month is a viable starting point. For UK or US markets, budget €500-1,500/month to get enough data. The formula: budget should generate at least 10-15 clicks per day at your estimated CPC."
      }
    },
    {
      "@type": "Question",
      name: "Do you recommend Google Ads for every business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Google Ads works best when there is active search demand for what you sell. If your product is genuinely new or niche to the point where nobody is searching for it, Search campaigns will not work. Also, if your margins are very thin (below 20%) or your website is not ready to convert visitors, you will burn budget without results. Fix those foundations first, then advertise."
      }
    }
  ]
};

// --- ctr-vodic ---
const faqSchemaCtrSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koliki CTR je dobar u Srbiji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Za Search kampanje dobar CTR je 5-10%, dok je prosek oko 2-3%. U uskim nišama, sa specifičnim ključnim rečima u zatvorenim match tipovima (exact, phrase), CTR ide na 10-15%, a preko 20% je izuzetak. To su brojke iz naloga koje vodim, ne zvaničan benchmark. Najbolji referentni okvir je account benchmark u vašem nalogu."
      }
    },
    {
      "@type": "Question",
      name: "Zašto mi pada CTR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Najčešći razlozi: nova konkurencija (proverite Auction Insights), zastareli oglasi (osvežite copy), loši search terms (proverite Search Terms Report), ili sezonalnost. Koristite moj 3-step dijagnostički proces: Search Terms → Ad Copy → Auction Insights."
      }
    },
    {
      "@type": "Question",
      name: "Da li CTR utiče na cenu klika?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, indirektno. CTR utiče na Expected CTR, koji je komponenta Quality Score-a. Viši Quality Score obično znači niži CPC za istu poziciju. Google ne objavljuje tačnu formulu, pa ne očekujte fiksan procenat uštede."
      }
    },
    {
      "@type": "Question",
      name: "Kako razdvojiti branded od non-branded CTR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kreirajte zasebnu branded kampanju sa vašim brand ključnim rečima. U non-branded kampanjama dodajte vaš brand kao negativnu ključnu reč. Tako ćete imati čiste podatke za obe kategorije i tačan uvid u stvarne performanse."
      }
    },
    {
      "@type": "Question",
      name: "Kako videti CTR u Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "U Google Ads interfejsu, CTR je standardna kolona u pregledu kampanja, ad grupa, oglasa i ključnih reči. Ako ne vidite kolonu, kliknite na \"Columns\" → \"Modify columns\" → dodajte \"CTR\". Možete ga pratiti i kroz Google Ads Editor ili API."
      }
    }
  ]
};

const faqSchemaCtrEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a good CTR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Search campaigns a good CTR is 5-10%, while the average sits around 2-3%. In tight niches, with specific keywords in closed match types (exact, phrase), CTR reaches 10-15%, and above 20% is the exception. These are figures from the accounts I manage, not an official benchmark. Your best reference point is the account benchmark in your own account."
      }
    },
    {
      "@type": "Question",
      name: "Why is my CTR dropping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most common reasons: new competition (check Auction Insights), outdated ads (refresh copy), poor search terms (check Search Terms Report), or seasonality. Use my 3-step diagnostic process: Search Terms → Ad Copy → Auction Insights."
      }
    },
    {
      "@type": "Question",
      name: "Does CTR affect cost per click?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, indirectly. CTR affects Expected CTR, which is a component of Quality Score. A higher Quality Score usually means a lower CPC for the same position. Google doesn't publish the exact formula, so don't expect a fixed percentage saving."
      }
    },
    {
      "@type": "Question",
      name: "How to separate branded from non-branded CTR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Create a separate branded campaign with your brand keywords. In non-branded campaigns, add your brand as a negative keyword. This gives you clean data for both categories and accurate insight into actual performance."
      }
    },
    {
      "@type": "Question",
      name: "How to view CTR in Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the Google Ads interface, CTR is a standard column in the campaigns, ad groups, ads, and keywords overview. If you don't see the column, click \"Columns\" → \"Modify columns\" → add \"CTR\". You can also track it through Google Ads Editor or API."
      }
    }
  ]
};

// --- ga4-publike-ecommerce-framework ---
const faqSchemaGA4AudiencesEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why are my audiences stuck at zero?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Either the list hasn't crossed the delivery threshold yet, the event it depends on isn't reaching GA4, or the membership window is shorter than actual customer behaviour. Check in that order — threshold, then event, then window."
      }
    },
    {
      "@type": "Question",
      name: "How long should I wait before using a new audience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Two to four weeks. Before that, the data sitting in Observation doesn't have enough members to mean anything."
      }
    },
    {
      "@type": "Question",
      name: "Do I need the Admin API, or does the UI work fine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The UI works for everything except scale. At 25 lists, the API saves hours and gives you repeatability, but the UI can do two things the API can't: LTV percentile targeting and predictive audience templates."
      }
    },
    {
      "@type": "Question",
      name: "What's the maximum membership window?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "540 days. There is no longer option in GA4, no matter how long your actual purchase cycle runs."
      }
    },
    {
      "@type": "Question",
      name: "What if I only sell one brand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Replace the brand affinity pillar with product categories instead. The logic stays identical — only the scope tag changes."
      }
    },
    {
      "@type": "Question",
      name: "Does this work for lead gen, not just ecommerce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The lifecycle, intent, and value layers carry over. Replenishment doesn't, because there's no consumption cycle to anchor it to — and that pillar is arguably half of this framework's value for a repeat-purchase business."
      }
    },
    {
      "@type": "Question",
      name: "Can these audiences go into Performance Max?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As a signal, yes. As a targeting guarantee, no. PMax uses an audience as an input the algorithm weighs, not as a fence around who sees the ad."
      }
    },
    {
      "@type": "Question",
      name: "What if my item_brand field is empty?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fall back to a page_location pattern or item_category. Check this before you build the brand affinity lists, not after."
      }
    }
  ]
};

const faqSchemaGA4AudiencesSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Zašto moje publike stoje na nuli?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tri moguća razloga, u redosledu kojim ih proveravam. Ili nisu prešle prag isporuke (1.000 za Search/Shopping, 100 za Display/YouTube/Demand Gen). Ili event na kome počivaju ne stiže u GA4 - proveri Realtime. Ili je membership prozor kraći od stvarnog ponašanja kupaca. Proveravam ovim redosledom, ne nasumično."
      }
    },
    {
      "@type": "Question",
      name: "Koliko dugo da čekam pre nego što ih koristim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dve do četiri nedelje. GA4 puni listu od trenutka kreiranja plus otprilike 30 dana unazad - nema retroaktivnog punjenja preko toga. Pre te dve do četiri nedelje, podaci u Observation-u nemaju dovoljno članova da bilo šta znače."
      }
    },
    {
      "@type": "Question",
      name: "Da li mi treba Admin API ili može kroz UI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UI radi za sve osim za obim. Na 25 lista, API štedi sate i daje ponovljivost. Ali UI ume dve stvari koje API ne ume: prave LTV percentile template-e i predictive audience template-e. Za te dve, ideš u UI bez obzira koliko lista imaš."
      }
    },
    {
      "@type": "Question",
      name: "Koji je maksimalni membership prozor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "540 dana. To je tvrd plafon u GA4 - duže od toga ne postoji, koliko god ti realan ciklus kupovine bio dug. Za kategorije sa dužim ciklusom, ta razlika se rešava van GA4, obično u CRM-u."
      }
    },
    {
      "@type": "Question",
      name: "Šta ako prodajem jedan brend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BRD stub zameni kategorijama proizvoda umesto brendovima - scope oznaka postaje kategorija (na primer SER za serum) umesto BR1/BR2. Logika ostaje potpuno ista."
      }
    },
    {
      "@type": "Question",
      name: "Da li ovo radi za lead-gen, ne samo ecommerce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lifecycle, Intent i Value slojevi rade, sa event imenima prilagođenim lead-gen funnel-u. Replenishment ne radi, jer nema ciklusa potrošnje da se meri - i to je pola vrednosti ovog frameworka koje lead-gen nalog ne dobija."
      }
    },
    {
      "@type": "Question",
      name: "Da li publike smeju u PMax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kao signal, da. Kao garancija targetinga, ne. Performance Max koristi publiku kao ulazni signal za algoritam, ne kao ogradu koja fizički ograničava kome se oglas prikazuje."
      }
    },
    {
      "@type": "Question",
      name: "Šta ako je moj item_brand prazan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fallback je page_location pattern (URL sadrži brand slug) ili item_category. Ovo proveravaš pre gradnje BRD stuba, ne posle."
      }
    }
  ]
};

const faqSchemaSearchKampanjeSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koliko košta vođenje Google Search kampanja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kao samostalan kanal, Search budžet kreće od €500/mesečno. U okviru punog upravljanja nalogom (Search + Shopping/PMax + remarketing), fee za vođenje kreće od €700/mesečno. Jednokratna konsultacija je €150/sat, korisna ako želite drugo mišljenje o postojećoj kampanji bez preuzimanja upravljanja. Tačna cena zavisi od obima naloga i kompleksnosti - dobijate je posle uvida u nalog, ne unapred."
      }
    },
    {
      "@type": "Question",
      name: "Da li mi treba agencija za Search kampanje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zavisi od budžeta i vremena koje imate. Search je najpristupačniji kanal za samostalno vođenje - struktura je jasnija nego kod PMax-a, a interfejs daje dosta uvida (search termovi, Quality Score, Auction Insights). Ako imate vremena za nedeljni pregled i manji budžet, možete početi sami. Agencija ili konsultant ima smisla kad budžet raste, kad AI Max i broad match traže pažljivije praćenje, ili kad jednostavno nemate vreme da to radite konzistentno svake nedelje."
      }
    },
    {
      "@type": "Question",
      name: "Šta je AI Max i da li moram da ga koristim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Max je paket funkcija za Search kampanje - search themes, URL expansion, AI-generisan copy i AI Brief kroz Gemini. Nije obavezan sam po sebi, ali ako koristite DSA, automatically created assets ili broad match na nivou kampanje, Google vas automatski nadograđuje na njega tokom septembra 2026 (migracija je u toku, 1-30.9), bez vašeg zahteva. Ako to nije ono što želite, morate promeniti konfiguraciju kampanje pre nego što nadogradnja stigne, ne posle. Za DSA konkretno: nove DSA kampanje se više ne prave, a potpuno gašenje starog formata je zakazano za februar 2027."
      }
    },
    {
      "@type": "Question",
      name: "Koliko dugo dok Search kampanja ne proradi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prvi klikovi i podaci stižu u roku od par dana. Prve konverzije zavise od volumena upita i budžeta - kod nekih naloga za nedelju dana, kod drugih (niska pretraga, nišni proizvod) treba duže. Smart Bidding treba minimum 2-4 nedelje i dovoljan broj konverzija da počne stabilno da optimizuje. Ne mogu unapred reći tačan datum kad će vaš nalog \"proraditi\" - to zavisi od kategorije, konkurencije i toga da li je merenje ispravno postavljeno od prvog dana. Ono što mogu reći: ako posle 6-8 nedelja sa ispravnim merenjem i realnim budžetom i dalje nema konverzija, problem nije strpljenje nego nešto u strukturi, ponudi ili tracking-u."
      }
    },
    {
      "@type": "Question",
      name: "Broad match ili phrase match 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nema univerzalnog odgovora, zavisi od faze naloga. Ako tek počinjete i imate malo conversion podataka, phrase ili exact daju više kontrole dok gradite istoriju. Ako imate stabilan volumen konverzija, jak Smart Bidding target i - najvažnije - disciplinu da redovno pregledate search termove, broad match može doneti dodatni doseg koji phrase/exact propuštaju. Broad match bez redovnog pregleda je najčešći način da se budžet potroši na irelevantne upite, pogotovo kad se doda AI Max na vrh."
      }
    }
  ]
};

const faqSchemaSearchKampanjeEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does managing Google Search campaigns cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As a standalone channel, Search budget starts at $500/month. As part of full account management (Search + Shopping/PMax + remarketing), management fees start at $2,500/month. A one-off consultation is $200/hour — useful if you want a second opinion on an existing campaign without handing over management. The exact price depends on account size and complexity — you get it after I look at the account, not before."
      }
    },
    {
      "@type": "Question",
      name: "Do I need an agency for Search campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depends on your budget and time. Search is the most accessible channel to run yourself — the structure is clearer than PMax, and the interface gives you plenty of visibility (search terms, Quality Score, Auction Insights). If you have time for a weekly review and a smaller budget, you can start solo. An agency or consultant makes sense once budget grows, once AI Max and broad match need closer monitoring, or when you simply don't have time to do it consistently every week."
      }
    },
    {
      "@type": "Question",
      name: "What is AI Max, and do I have to use it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Max is a bundle of features for Search campaigns — search themes, URL expansion, AI-generated copy, and an AI Brief through Gemini. It isn't mandatory on its own, but if you're running DSA, automatically created assets, or campaign-level broad match, Google is automatically upgrading you to it during September 2026 (the migration is running now, Sep 1–30), without you asking. If that's not what you want, you need to change the campaign configuration before the upgrade lands, not after. For DSA specifically: new DSA campaigns can no longer be created, and full sunset of the old format is scheduled for February 2027."
      }
    },
    {
      "@type": "Question",
      name: "How long until a Search campaign starts working?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First clicks and data arrive within a few days. First conversions depend on query volume and budget — for some accounts that's within a week, for others (low search volume, niche product) it takes longer. Smart Bidding needs a minimum of 2–4 weeks and enough conversions to start optimizing reliably. I can't tell you upfront the exact date your account will \"start working\" — that depends on category, competition, and whether measurement was set up correctly from day one. What I can say: if after 6–8 weeks with correct measurement and a realistic budget there are still no conversions, the problem isn't patience — it's something in the structure, the offer, or the tracking."
      }
    },
    {
      "@type": "Question",
      name: "Broad match or phrase match in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There's no universal answer — it depends on the account's stage. If you're just starting out with little conversion data, phrase or exact give you more control while you build history. If you have steady conversion volume, a strong Smart Bidding target, and — most importantly — the discipline to review search terms regularly, broad match can bring extra reach that phrase/exact miss. Broad match without regular review is the fastest way to burn budget on irrelevant queries, especially once AI Max is layered on top."
      }
    }
  ]
};

const faqSchemaDemandGenSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Da li je Demand Gen zamena za Display?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delimično se preklapaju, ali nisu isto. Standardni Display pokriva mnogo širu mrežu sajtova i aplikacija preko banner formata. Demand Gen je uži, fokusiran na tri feed-native plasmana - YouTube, Discover, Gmail - sa vizuelnim formatima koji su prirodnije uklopljeni u sadržaj. Za većinu naloga koje vodim, Demand Gen je danas prirodniji izbor za prospecting nego klasičan Display, ali Display ostaje relevantan za širi remarketing doseg."
      }
    },
    {
      "@type": "Question",
      name: "Koliki budžet treba za Demand Gen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Orijentacioni prag koji ja koristim je otprilike 1.000 EUR mesečno za sam taj kanal. Ovo nije univerzalna granica niti obećanje rezultata - zavisi od cene proizvoda, konkurencije i toga koliko konverzija vam treba da algoritam nauči. Ispod tog nivoa kampanja često ne dobije dovoljno prostora da pokaže šta stvarno radi na tri plasmana odjednom."
      }
    },
    {
      "@type": "Question",
      name: "Demand Gen ili PMax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nije uvek pitanje ili-ili. PMax uključuje Search i Shopping pored vizuelnih kanala, pa je šire rešenje sa manje kontrole. Demand Gen je uži i daje vam više kontrole nad plasmanom i kreativom, ali ne dira Search uopšte. Ako već imate PMax koji radi dobro, Demand Gen retko donosi dovoljno dodatne vrednosti da opravda dupliranje budžeta - proverite pre svega kroz A/B test inkrementalnosti. Ako nemate PMax i tražite fokusiran prospecting kanal sa jačim kreativnim usmerenjem, Demand Gen je razumniji prvi korak."
      }
    },
    {
      "@type": "Question",
      name: "Da li radi za B2B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Može, ali je teže nego za eCommerce. B2B proizvod retko ima jak vizuelni element - teško je napraviti ubedljivu sliku ili video za, recimo, softver za upravljanje zalihama. Ako imate customer match listu postojećih klijenata za lookalike i budžet za makar osnovnu video produkciju, ima smisla probati kao dopunski kanal uz Search. Kao prvi i jedini kanal za B2B lead-gen, ne bih ga preporučio."
      }
    },
    {
      "@type": "Question",
      name: "Kako se meri uspeh Demand Gen kampanje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne samo brojem konverzija koje kampanja sama sebi prijavljuje u interfejsu. Pratite da li ukupan broj konverzija na celom nalogu raste kad je kampanja uključena, u odnosu na period bez nje - to je test inkrementalnosti, i za njega postoji ugrađen A/B framework od 2026. Ako uključite view-through optimizaciju, budite svesni da ona širi definiciju \"konverzije\" i da će prijavljeni broj rasti bez obzira da li stvarni rezultat raste. Gledajte poslovni ishod, ne samo dashboard."
      }
    }
  ]
};

const faqSchemaDemandGenEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Demand Gen a replacement for Display?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They overlap partly, but they're not the same thing. Standard Display covers a much wider network of sites and apps through banner formats. Demand Gen is narrower, focused on three feed-native placements — YouTube, Discover, Gmail — with visual formats that fit more naturally into content. For most accounts I run, Demand Gen is now the more natural choice for prospecting than classic Display, but Display still has a role for broader remarketing reach."
      }
    },
    {
      "@type": "Question",
      name: "How much budget does Demand Gen need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The rough threshold I use is around EUR 1,000/month for that channel alone. This isn't a universal cutoff or a promise of results — it depends on product price, competition, and how many conversions the algorithm needs to learn from. Below that level, a campaign often doesn't get enough room to show what it can actually do across three placements at once."
      }
    },
    {
      "@type": "Question",
      name: "Demand Gen or PMax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's not always an either-or question. PMax includes Search and Shopping alongside the visual channels, so it's the broader solution with less control. Demand Gen is narrower and gives you more control over placement and creative, but it doesn't touch Search at all. If PMax is already running well for you, Demand Gen rarely adds enough extra value to justify duplicating budget — check with an incrementality A/B test before deciding. If you don't run PMax and want a focused prospecting channel with a stronger creative lean, Demand Gen is the more sensible first step."
      }
    },
    {
      "@type": "Question",
      name: "Does it work for B2B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It can, but it's harder than for eCommerce. A B2B product rarely has a strong visual hook — it's difficult to make a compelling image or video for, say, inventory management software. If you have a customer match list of existing clients to build lookalikes from and budget for at least basic video production, it's worth testing as a supplementary channel alongside Search. As the first and only channel for B2B lead gen, I wouldn't recommend it."
      }
    },
    {
      "@type": "Question",
      name: "How do you measure the success of a Demand Gen campaign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not just by the conversion count the campaign reports in the interface. Watch whether total conversions across the whole account go up when the campaign is running, versus a period without it — that's an incrementality test, and there's a built-in A/B framework for it since 2026. If you turn on view-through optimization, be aware it widens the definition of \"conversion,\" so the reported number will climb regardless of whether the actual result is growing. Look at the business outcome, not just the dashboard."
      }
    }
  ]
};

const faqSchemaChecklistUpravljanjaSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Postoji li Google Ads checklista koja važi za svaki nalog?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne. Postoji ritam koji važi za svaki nalog, a sadržaj tog ritma se izvodi iz broja konverzija i načina na koji nalog prodaje."
      }
    },
    {
      "@type": "Question",
      name: "Koliko često treba proveravati Google Ads nalog?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dnevno se proverava da li nalog uopšte radi i da li potrošnja odstupa od proseka. Sve ostalo ide na nedeljni, mesečni ili kvartalni ritam, u zavisnosti od broja konverzija."
      }
    },
    {
      "@type": "Question",
      name: "Kada je bezbedno menjati bid strategiju?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kad imate dovoljno konverzija da promena može da se izmeri. Ispod pedeset konverzija mesečno svaka promena je nagađanje. Nov nalog ostavite oko devedeset dana pre ozbiljnih zaključaka."
      }
    },
    {
      "@type": "Question",
      name: "Treba li primenjivati preporuke iz Google Ads panela?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja ih ne primenjujem. One ne poznaju kontekst vašeg naloga i najčešće predlažu potez koji je tačan u proseku a pogrešan kod vas."
      }
    },
    {
      "@type": "Question",
      name: "Koliko vremena nedeljno traži jedan nalog?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne dajem cifru jer bi bila izmišljena. Zavisi od veličine naloga, broja kampanja i toga koliko je merenje pouzdano. Nekad je nedeljni ritam previše, nekad jedva dovoljno."
      }
    }
  ]
};

const faqSchemaChecklistUpravljanjaEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a Google Ads checklist that works for every account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. What works for every account is a rhythm, and the content of that rhythm is derived from the conversion count and how the account sells."
      }
    },
    {
      "@type": "Question",
      name: "How often should you check a Google Ads account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Daily, you check whether the account is running at all and whether spend is off from the average. Everything else moves to a weekly, monthly, or quarterly rhythm, depending on the conversion count."
      }
    },
    {
      "@type": "Question",
      name: "When is it safe to change the bid strategy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When you have enough conversions for the change to be measurable. Under fifty conversions a month, every change is a guess. Leave a new account for roughly ninety days before drawing serious conclusions."
      }
    },
    {
      "@type": "Question",
      name: "Should you follow the recommendations in the Google Ads panel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I don't. They don't know the context of your account, and they most often suggest a move that's correct on average and wrong for you."
      }
    },
    {
      "@type": "Question",
      name: "How much time a week does an account need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I'm not giving a figure, because it would be made up. It depends on the size of the account, the number of campaigns, and how reliable the measurement is. Sometimes a weekly rhythm is too much, sometimes it's barely enough."
      }
    }
  ]
};

function getFaqSchema(slug: string, locale: string) {
  if (slug === "google-ads-checklist-upravljanje") {
    return locale === "en" ? faqSchemaChecklistUpravljanjaEN : faqSchemaChecklistUpravljanjaSR;
  }
  if (slug === "chatgpt-ads-vodic") {
    return locale === "en" ? faqSchemaChatGptAdsEN : faqSchemaChatGptAdsSR;
  }
  if (slug === "chatgpt-ads-vs-google-ads") {
    return locale === "en" ? faqSchemaChatGptVsGoogleEN : faqSchemaChatGptVsGoogleSR;
  }
  if (slug === "chatgpt-ads-evropa") {
    return locale === "en" ? faqSchemaChatGptEvropaEN : faqSchemaChatGptEvropaSR;
  }
  if (slug === "product-feed-optimizacija-scorecard") {
    return locale === "en" ? faqSchemaFeedScorecardEN : faqSchemaFeedScorecardSR;
  }
  if (slug === "ga4-publike-ecommerce-framework") {
    return locale === "en" ? faqSchemaGA4AudiencesEN : faqSchemaGA4AudiencesSR;
  }
  if (slug === "google-ads-vs-meta") {
    return locale === "en" ? faqSchemaGoogleVsMetaEN : faqSchemaGoogleVsMetaSR;
  }
  if (slug === "remarketing-vodic") {
    return locale === "en" ? faqSchemaRemarketingEN : faqSchemaRemarketingSR;
  }
  if (slug === "koliko-kosta-google-ads") {
    return locale === "en" ? faqSchemaKolikoKostaEN : faqSchemaKolikoKostaSR;
  }
  if (slug === "kljucne-reci-vodic") {
    return locale === "en" ? faqSchemaKljucneReciEN : faqSchemaKljucneReciSR;
  }
  if (slug === "pmax-audit-checklist") {
    return locale === "en" ? faqSchemaPmaxChecklistEN : faqSchemaPmaxChecklistSR;
  }
  if (slug === "google-ads-budzet") {
    return locale === "en" ? faqSchemaBudzetEN : faqSchemaBudzetSR;
  }
  if (slug === "gaql-reporting-vodic") {
    return locale === "en" ? faqSchemaGaqlEN : faqSchemaGaqlSR;
  }
  if (slug === "negativne-kljucne-reci") {
    return locale === "en" ? faqSchemaNegativneKljucneReciEN : faqSchemaNegativneKljucneReciSR;
  }
  if (slug === "lista-negativnih-kljucnih-reci") {
    return locale === "en" ? faqSchemaNegativeListEN : faqSchemaNegativeListSR;
  }
  if (slug === "google-ads-api-autentifikacija") {
    return locale === "en" ? faqSchemaApiAuthEN : faqSchemaApiAuthSR;
  }
  if (slug === "quality-score-vodic") {
    return locale === "en" ? faqSchemaQualityScoreEN : faqSchemaQualityScoreSR;
  }
  if (slug === "google-oglasavanje-za-firme") {
    return locale === "en" ? faqSchemaGoogleAdvertisingEN : faqSchemaGoogleOglasavanjeSR;
  }
  if (slug === "performance-max-vodic") {
    return locale === "en" ? faqSchemaPerformanceMaxEN : faqSchemaPerformanceMaxSR;
  }
  if (slug === "google-ads-optimizacija") {
    return locale === "en" ? faqSchemaOptimizacijaEN : faqSchemaOptimizacijaSR;
  }
  if (slug === "google-shopping-vodic") {
    return locale === "en" ? faqSchemaShoppingEN : faqSchemaShoppingSR;
  }
  if (slug === "agencija-vs-freelancer") {
    return locale === "en" ? faqSchemaAgencyEN : faqSchemaAgencijaSR;
  }
  if (slug === "conversion-tracking-vodic") {
    return locale === "en" ? faqSchemaConversionTrackingEN : faqSchemaConversionTrackingSR;
  }
  if (slug === "google-ads-greske") {
    return locale === "en" ? faqSchemaGreskeEN : faqSchemaGreskeSR;
  }
  if (slug === "zasto-nema-rezultata") {
    return locale === "en" ? faqSchemaZastoNemaRezultataEN : faqSchemaZastoNemaRezultataSR;
  }
  if (slug === "ecommerce-vs-b2b") {
    return locale === "en" ? faqSchemaEcommerceVsB2BEN : faqSchemaEcommerceVsB2BSR;
  }
  if (slug === "google-ads-audit-vodic") {
    return locale === "en" ? faqSchemaAuditEN : faqSchemaAuditSR;
  }
  if (slug === "kako-poceti-google-ads") {
    return locale === "en" ? faqSchemaKakoPocetiEN : faqSchemaKakoPocetiSR;
  }
  if (slug === "ctr-vodic") {
    return locale === "en" ? faqSchemaCtrEN : faqSchemaCtrSR;
  }
  if (slug === "google-search-kampanje-vodic") {
    return locale === "en" ? faqSchemaSearchKampanjeEN : faqSchemaSearchKampanjeSR;
  }
  if (slug === "demand-gen-vodic") {
    return locale === "en" ? faqSchemaDemandGenEN : faqSchemaDemandGenSR;
  }
  return null;
}

/* ── Page Component ── */

export default async function BlogPostPage({ params }: Props) {
  const { slug, locale } = await params;
  let post = getPost(slug, locale);

  // If EN locale receives an SR slug, 301 redirect to the EN slug
  if (!post && locale === "en" && slug in slugMap) {
    permanentRedirect(`/en/blog/${slugMap[slug]}`);
  }

  // Mirror case: SR locale receiving an EN slug. Google builds /sr/blog/<en-slug>
  // from the hreflang pattern and every unprefixed /blog/<en-slug> link lands
  // here too (the locale middleware prefixes /sr). GSC Sep 2026 listed 13 such
  // 404s. Same 301 as above, in the other direction.
  if (!post && locale === "sr") {
    const srSlug = getAlternateSlug(slug, "sr");
    if (srSlug !== slug) {
      permanentRedirect(`/sr/blog/${srSlug}`);
    }
  }

  if (!post) {
    notFound();
  }

  const canonicalSlug = getCanonicalSlug(slug);
  const faqSchema = getFaqSchema(canonicalSlug, locale);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    ...(post.featuredImage && {
      image: `https://www.slobodan-jelisavac.com${post.featuredImage}`,
    }),
    datePublished: post.date,
    dateModified: post.dateModified,
    author: { "@id": "https://www.slobodan-jelisavac.com/#person" },
    publisher: { "@id": "https://www.slobodan-jelisavac.com/#organization" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.slobodan-jelisavac.com/${locale}/blog/${slug}`,
    },
    inLanguage: locale === "en" ? "en" : "sr",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2"],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "en" ? "Home" : "Početna",
        item: `https://www.slobodan-jelisavac.com/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `https://www.slobodan-jelisavac.com/${locale}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.slobodan-jelisavac.com/${locale}/blog/${slug}`,
      },
    ],
  };

  // Person (#person) and Organization (#organization) are emitted site-wide by
  // <LocalBusinessSchema /> in the locale layout; the article references them
  // by @id (author = person, publisher = organization).

  return (
    <div className={post.featuredImage ? "bg-white" : "bg-slate-950 text-white"}>
      <ReadingProgressBar />
      <MobileTOC locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {post.featuredImage ? (
        // Light hero with side-by-side layout (image right, content left)
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border-b border-gray-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.08),_transparent_60%)]" />
          <div className="container-custom px-4 relative pt-12 pb-12 md:pt-20 md:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center">
              {/* Left: Title + meta */}
              <div className="order-2 lg:order-1">
                <nav className="mb-4 text-xs uppercase tracking-[0.2em] text-gray-500">
                  <Link href="/blog" className="hover:text-primary transition-colors">
                    Blog
                  </Link>
                  <span className="mx-2 text-gray-300">/</span>
                  <span className="text-gray-700">{post.category}</span>
                </nav>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 leading-tight mb-5">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                  <span className="inline-flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </span>
                  {post.readingTime && (
                    <>
                      <span className="text-gray-300">•</span>
                      <span className="inline-flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.readingTime}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Right: Featured image */}
              <div className="order-1 lg:order-2">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                  <Image
                    src={post.featuredImage}
                    alt={post.imageAlt ?? post.title}
                    width={1200}
                    height={630}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // Original dark hero (fallback for posts without image)
        <section className="relative overflow-hidden pt-16 pb-28 md:pt-24 md:pb-32 bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.85),rgba(2,6,23,1))]" />
          <div className="container-custom px-4 relative">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-300">
              Blog
            </p>
            <h1 className="mt-4 text-3xl md:text-5xl font-heading font-bold max-w-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-slate-300">
              <Link href="/blog" className="underline">
                Blog
              </Link>{" "}
              <span className="mx-2">|</span>
              {post.category}
              <span className="mx-2">|</span>
              {post.date}
              {post.readingTime && (
                <>
                  <span className="mx-2">|</span>
                  {post.readingTime}
                </>
              )}
            </p>
          </div>
        </section>
      )}

      <section className="bg-slate-100 text-gray-900 pb-16">
        <div className={`container-custom px-4 ${post.featuredImage ? 'pt-12' : '-mt-16'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-4">
                <TableOfContents locale={locale} />
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
                  <div className="text-xs uppercase tracking-wider text-yellow-600 font-bold">
                    {locale === "en" ? "Free video audit" : "Besplatni video audit"}
                  </div>
                  <h2 className="mt-2 text-lg font-heading font-semibold">
                    {locale === "en"
                      ? "Get a Video Walkthrough of Your Account"
                      : "Video pregled vašeg naloga"}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                    {locale === "en"
                      ? "15-min personalised video showing where you're losing money. Requires $1,500+/mo ad spend."
                      : "15-min personalizovani video gde pokazujemo gde gubite novac. Uslov: €1.500+/mes ad spend."}
                  </p>
                  <Link
                    href="/kontakt"
                    className="bg-slate-900 text-white font-bold inline-block mt-4 w-full text-center py-2.5 px-4 rounded-lg hover:bg-slate-800 transition-colors text-sm"
                  >
                    {locale === "en"
                      ? "Apply for video audit \u2192"
                      : "Aplicirajte za video audit \u2192"}
                  </Link>
                </div>
              </div>
            </aside>

            <article className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 md:p-12 shadow-card">
              <div className="text-sm text-gray-500 mb-4">
                {post.category} · {post.date}{post.readingTime && ` · ${post.readingTime}`}
              </div>
              <div className="prose prose-slate prose-lg max-w-none lg:max-w-[57ch] text-gray-700 prose-headings:font-heading prose-headings:scroll-mt-24 prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:md:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-p:text-base prose-p:md:text-[19px] prose-p:mb-5 prose-p:leading-[1.75] prose-li:text-base prose-li:md:text-[19px] prose-li:leading-[1.75] prose-a:text-primary prose-a:underline prose-a:underline-offset-2 prose-strong:text-gray-900 prose-hr:my-10 prose-blockquote:border-l-primary prose-blockquote:text-gray-600 prose-img:rounded-xl">
                {post.content}
              </div>
              {/* Mid-content CTA. The post body renders as a single opaque
                  ReactNode ({post.content}), so true in-body insertion is not
                  feasible without rewriting every post component. This is the
                  closest safe "mid" position: after the body, before the author
                  box and the bottom CTA. Segmented by post intent. */}
              <BlogCTA
                locale={locale}
                variant="mid"
                target={getBlogCtaTarget(getCanonicalSlug(slug))}
              />
              <AuthorBox locale={locale} />
              <BlogCTA
                locale={locale}
                variant="bottom"
                target={getBlogCtaTarget(getCanonicalSlug(slug))}
              />
              {(() => {
                const next = getNextPost(slug, locale);
                if (!next || next.slug === slug) return null;
                return (
                  <ReadNext
                    locale={locale}
                    nextSlug={next.slug}
                    nextTitle={next.title}
                    nextCategory={next.category}
                    nextReadingTime={next.readingTime}
                  />
                );
              })()}
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
