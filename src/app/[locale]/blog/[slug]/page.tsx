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

  return {
    title: `${post.title} | Slobodan Jelisavac`,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.slobodan-jelisavac.com/${locale}/blog/${slug}`,
      languages: {
        sr: `https://www.slobodan-jelisavac.com/sr/blog/${srSlug}`,
        en: `https://www.slobodan-jelisavac.com/en/blog/${enSlug}`,
        "x-default": `https://www.slobodan-jelisavac.com/sr/blog/${srSlug}`
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

// --- product-feed-optimizacija-scorecard / merchant-center-feed-scorecard ---
const faqSchemaFeedScorecardSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Kako da ocenim svoj product feed?", acceptedAnswer: { "@type": "Answer", text: "Skinite feed iz Merchant Center-a (Products → Feeds → Download), otvorite ga u tabeli, za svaku kolonu izbrojte popunjeno naspram ukupnog broja proizvoda, pretvorite u procenat i usrednjite procente po svim poljima koja proveravate. Dobijete jedan broj od 0 do 100 i listu polja sortiranu po tome koliko su prazna." } },
    { "@type": "Question", name: "Koliko karaktera sme naslov u Google Shopping-u?", acceptedAnswer: { "@type": "Answer", text: "Google dozvoljava do 150 karaktera. U katalogu koji sam ocenjivao prosečan naslov koristi 51 karakter, a 89 odsto proizvoda je ispod 70 karaktera, pa najveći deo prostora za uparivanje stoji neiskorišćen." } },
    { "@type": "Question", name: "Šta je GTIN i da li mi treba?", acceptedAnswer: { "@type": "Answer", text: "GTIN je zvanični barkod broj proizvoda (EAN, UPC i slično) koji obično dodeljuje proizvođač. Ako proizvod ima barkod, taj broj ide u polje gtin. Ako ga stvarno nema, na primer kod setova ili ručno rađenih proizvoda, postavite identifier_exists na false umesto da polje ostavite prazno." } },
    { "@type": "Question", name: "Zašto se moj set poredi sa jednim proizvodom?", acceptedAnswer: { "@type": "Answer", text: "Zato što polje is_bundle nije postavljeno. Bez njega Google nema signal da artikal sadrži više proizvoda, pa cenu seta poredi sa cenom pojedinačnog proizvoda i set izgleda preskupo. Popunite is_bundle, a gde su u pakovanju isti komadi i multipack." } },
    { "@type": "Question", name: "Koja polja u feedu su obavezna?", acceptedAnswer: { "@type": "Answer", text: "Osnovni skup je id, title, description, link, image_link, availability, price i brand. Skoro svaka platforma za e-trgovinu ih popunjava automatski, zbog čega ta polja retko i jesu pravi problem." } },
    { "@type": "Question", name: "Da li vredi popunjavati sva polja u feedu?", acceptedAnswer: { "@type": "Answer", text: "Ne. Cilj nije 100 od 100, nego da prepoznate koja polja nešto menjaju za vašu kategoriju. Materijal i sertifikati u skincare kategoriji ne nose skoro ništa, dok isti ti podaci kod odeće ili tehnike nose mnogo." } },
    { "@type": "Question", name: "Koliko često treba ponovo oceniti feed?", acceptedAnswer: { "@type": "Answer", text: "Svaka veća serija novih proizvoda menja pokrivenost polja, pa je ocenjivanje na svaka dva do tri meseca dovoljno da uhvatite pad pre nego što postane trend." } },
    { "@type": "Question", name: "Da li je 33 od 100 loša ocena?", acceptedAnswer: { "@type": "Answer", text: "Tretirajte je kao početno merenje, ne kao ocenu u školskom smislu, jer ova metoda još nije primenjena na dovoljno naloga da bi postojao poredbeni prosek. Važan je oblik: obavezna polja skoro puna, pojačivači na pola, treći sloj na nuli. Ako vaš audit pokaže isti oblik, redosled popravki važi bez obzira na to koji broj vama izađe." } },
  ],
};

const faqSchemaFeedScorecardEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I score my own product feed?", acceptedAnswer: { "@type": "Answer", text: "Download your feed from Merchant Center under Products → Feeds, open it in a spreadsheet, count filled cells per column against the total number of rows, convert that to a percentage, and average those percentages across every attribute you assess. You get one number from 0 to 100 plus a list of attributes sorted by how empty they are." } },
    { "@type": "Question", name: "How many characters can a Google Shopping title be?", acceptedAnswer: { "@type": "Answer", text: "150 characters. In the catalogue I audited the average title used only 51 of them and 89 percent of titles sat under 70 characters, so most of the available matching space was never claimed." } },
    { "@type": "Question", name: "What is a GTIN, and do I need one?", acceptedAnswer: { "@type": "Answer", text: "A GTIN is the barcode-level identifier (UPC, EAN or ISBN depending on the market) that uniquely identifies a manufactured product. If your product genuinely has one, submit it. If it genuinely does not, such as on a bundle or a hand-made item, set identifier_exists to false rather than leaving both fields blank." } },
    { "@type": "Question", name: "Why is my bundle compared to a single product?", acceptedAnswer: { "@type": "Answer", text: "Because is_bundle is not set on the listing. Without it Google has no signal that the item contains more than one product, so it is price-compared against single-item listings and reads as overpriced. Set is_bundle, and set multipack where a pack contains identical items." } },
    { "@type": "Question", name: "Which product feed fields are actually required?", acceptedAnswer: { "@type": "Answer", text: "The core set is id, title, description, link, image_link, availability, price and brand. Most ecommerce platforms populate these automatically, which is exactly why they are rarely the real problem." } },
    { "@type": "Question", name: "Is it worth filling in every feed attribute?", acceptedAnswer: { "@type": "Answer", text: "No. The goal is not 100 out of 100, it is knowing which attributes change something in your category. Material and certification carry almost nothing in skincare, while the same fields are load-bearing on apparel or electronics." } },
    { "@type": "Question", name: "Is a feed score of 33 out of 100 bad?", acceptedAnswer: { "@type": "Answer", text: "Treat it as a starting measurement rather than a grade, since this method has not been run across enough accounts to publish a benchmark. What matters is the shape: required fields near-perfect, multipliers patchy, advantage layer at zero. If your own audit produces that shape, the fix order applies whatever your overall number is." } },
    { "@type": "Question", name: "How often should a product feed be re-scored?", acceptedAnswer: { "@type": "Answer", text: "Every sizeable batch of new products changes attribute coverage, because new items arrive with whatever the platform fills in by default rather than with whatever was fixed by hand. Re-scoring every two to three months is enough to catch a decline before it becomes a trend." } },
  ],
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
        text: "Google Search je obično lakši za merenje direktnog ROI-a jer korisnici imaju visoku nameru. Meta zahteva jaku kreativu i dublje razumevanje audience-a. Ali zavisi od vašeg biznisa - ako prodajete vizuelno privlačne proizvode, Meta može biti prirodniji početak."
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
        text: "Idealno da, jer strategija treba biti koordinisana - Meta puni levak, Google zatvara prodaje, remarketing se overlap-uje. Ali specijalizovani freelanceri ili manje agencije za svaki kanal mogu biti bolji u egzekuciji od generalist agencije koja radi sve."
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
        text: "Bez nezavisnog tracking sistema, teško je. Google Analytics 4 je dobar početak (Advertising → Attribution → Conversion paths), ali ima ograničenja. Za ozbiljno multi-platform oglašavanje, razmotrite dedicated attribution tool poput Rockerbox, Triple Whale ili Northbeam."
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
        text: "Google Search is usually easier for measuring direct ROI because users have high intent. Meta requires strong creative and deeper audience understanding. But it depends on your business — if you sell visually appealing products, Meta might be a more natural starting point."
      }
    },
    {
      "@type": "Question",
      name: "What budget do I need to test both platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum $1,000-2,000 total ($600+ Google, $400+ Meta) for 60-90 days to get meaningful data for decision-making. Below this, results are often statistically insignificant. If your budget is smaller, start with one platform, optimize it, then add the other later."
      }
    },
    {
      "@type": "Question",
      name: "Do I need an agency that handles both platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ideally yes, because strategy should be coordinated — Meta fills the funnel, Google closes sales, remarketing overlaps. But specialized freelancers or smaller agencies for each channel can be better at execution than a generalist agency that does everything."
      }
    },
    {
      "@type": "Question",
      name: "What if my product isn't visual — does Meta make sense?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meta can still work through UGC content, testimonials, before/after comparisons, or storytelling videos. B2B SaaS and technical products successfully use Meta for thought leadership and webinar promotions. But realistically, if you don't have a visual story, Google will likely be the more efficient channel."
      }
    },
    {
      "@type": "Question",
      name: "How do I measure cross-channel impact?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Without an independent tracking system, it's difficult. Google Analytics 4 is a good starting point (Advertising → Attribution → Conversion paths), but has limitations. For serious multi-platform advertising, consider a dedicated attribution tool like Rockerbox, Triple Whale, or Northbeam."
      }
    },
    {
      "@type": "Question",
      name: "Do Facebook Ads still work after the iOS 14 update?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but they're not the same as before. iOS 14+ reduced tracking capabilities, making attribution and targeting harder. But Meta still works — it just requires a different approach (Conversions API, server-side tracking, broader targeting). Many businesses still run profitable Meta campaigns, especially for remarketing and brand awareness."
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
      name: "Šta je remarketing u Google Ads-u?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Ads remarketing je strategija ponovnog targetiranja korisnika koji su već posetili vaš sajt. Ovi korisnici konvertuju 2-5x bolje od hladnog saobraćaja jer su već pokazali interes. Setup zahteva Google tag i audience liste (cart abandoners, pregledači proizvoda, postojeći kupci)."
      }
    },
    {
      "@type": "Question",
      name: "Koliko traje remarketing lista?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Možete postaviti trajanje od 1 do 540 dana. Podrazumevano je 30 dana. Za eCommerce, preporučuje se 7 dana za napuštene korpe, 30 dana za opšte posetioce i 180 dana za bivše kupce."
      }
    },
    {
      "@type": "Question",
      name: "Koliko korisnika treba da imam na listi za početak remarketing-a?",
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
        text: "Da, ali sa određenim ograničenjima. First-party podaci (vaš sajt, vaš tag) i dalje funkcionišu pouzdano. Third-party tracking je ograničen na Apple uređajima. Preporučuje se kombinacija Google Ads taga, GA4 audience-a i Customer Match-a za najbolju pokrivenost."
      }
    },
    {
      "@type": "Question",
      name: "Da li je remarketing napadan za korisnike?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Može biti ako je loše postavljen. Tri stvari sprečavaju negativan utisak: frequency cap (3-5 prikazivanja dnevno), relevantne poruke prilagođene segmentu i redovno osvežavanje kreativa."
      }
    },
    {
      "@type": "Question",
      name: "Koja je razlika između remarketing-a i retargeting-a?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Praktično nikakva. Google koristi termin 'remarketing', Meta (Facebook/Instagram) koristi 'retargeting'. Princip je identičan - prikazujete oglase ljudima koji su već bili u kontaktu sa vašim biznisom."
      }
    },
    {
      "@type": "Question",
      name: "Mogu li koristiti remarketing za B2B, ne samo za online prodavnice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apsolutno. B2B remarketing je izuzetno efikasan jer su prodajni ciklusi duži (30-90+ dana), pa je potrebno više kontaktnih tačaka pre konverzije. Kombinacija RLSA kampanja i Display remarketing-a sa stručnim sadržajem odlično funkcioniše za B2B."
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
      name: "What is remarketing in Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Ads remarketing is a strategy of re-targeting users who have already visited your site. These users convert 2-5x better than cold traffic because they've already shown interest. Setup requires a Google tag and audience lists (cart abandoners, product viewers, existing customers)."
      }
    },
    {
      "@type": "Question",
      name: "How long does a remarketing list last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can set duration from 1 to 540 days. The default is 30 days. For eCommerce, 7 days is recommended for abandoned carts, 30 days for general visitors, and 180 days for past customers."
      }
    },
    {
      "@type": "Question",
      name: "How many users do I need on a list to start remarketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum is 100 users for Display campaigns and 1,000 for Search (RLSA) and YouTube. If your site has low traffic, start with Display remarketing while your list grows large enough for RLSA."
      }
    },
    {
      "@type": "Question",
      name: "Does remarketing still work after iOS privacy restrictions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but with certain limitations. First-party data (your site, your tag) still works reliably. Third-party tracking is limited on Apple devices. A combination of Google Ads tag, GA4 audiences, and Customer Match is recommended for best coverage."
      }
    },
    {
      "@type": "Question",
      name: "Is remarketing annoying for users?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It can be if poorly set up. Three things prevent a negative impression: frequency cap (3-5 impressions per day), relevant messages tailored to each segment, and regularly refreshing your creatives."
      }
    },
    {
      "@type": "Question",
      name: "What's the difference between remarketing and retargeting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Practically none. Google uses the term 'remarketing', Meta (Facebook/Instagram) uses 'retargeting'. The principle is identical — you show ads to people who have already interacted with your business."
      }
    },
    {
      "@type": "Question",
      name: "Can I use remarketing for B2B, not just online stores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. B2B remarketing is extremely effective because sales cycles are longer (30-90+ days), requiring more touchpoints before conversion. A combination of RLSA campaigns and Display remarketing with expert content works great for B2B."
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
      name: "Koliko košta Google Ads oglašavanje u Srbiji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Ads u Srbiji košta od 15 do 50 RSD po kliku za većinu industrija, uz minimalni mesečni budžet od €200-400 da biste videli merljive rezultate. Konačna cena zavisi od industrije i konkurencije - usluge i B2B plaćaju više od maloprodaje."
      }
    },
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
        text: "Generalno da, CPC na Google-u je viši. Ali intent korisnika je jači - neko ko pretražuje 'kupi X' je bliži kupovini od nekoga ko scrolla Instagram."
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
      name: "How much does Google Ads advertising cost in Serbia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Ads in Serbia costs between 15 and 50 RSD per click for most industries, with a minimum monthly budget of €200-400 needed to see measurable results. The final cost depends on industry and competition — services and B2B pay more than retail."
      }
    },
    {
      "@type": "Question",
      name: "What is the minimum investment for Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The technical minimum is $1/day, but for meaningful results expect to spend at least $300-500/month for local businesses and $1,000+ for eCommerce or B2B."
      }
    },
    {
      "@type": "Question",
      name: "Is Google Ads worth it for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if you have a clear customer value and competitive margins. Small businesses often have an advantage because they're more flexible and can optimize faster."
      }
    },
    {
      "@type": "Question",
      name: "How long does it take for Google Ads to show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First indicators appear within 2-4 weeks. Real results and an optimized account in 2-3 months. Stable performance in 4-6 months."
      }
    },
    {
      "@type": "Question",
      name: "Why are costs so different across industries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Due to competition and conversion value. A lawyer can pay $50 per click because one client is worth $5,000. A t-shirt shop cannot."
      }
    },
    {
      "@type": "Question",
      name: "Is Google Ads more expensive than Meta Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally yes, CPC on Google is higher. But user intent is stronger — someone searching 'buy X' is closer to purchasing than someone scrolling Instagram."
      }
    }
  ]
};

// ── FAQ Schema: Ključne reči vodič ──

const faqSchemaKljucneReciSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Šta su ključne reči za Google oglašavanje?", acceptedAnswer: { "@type": "Answer", text: "Ključne reči su reči i fraze koje dodajete u Google Ads kampanju da bi se vaš oglas prikazao kada ih korisnici pretražuju. One određuju ko vidi oglas, koliko plaćate po kliku i kakav Quality Score dobijate. Kontrolišu se preko tri match type-a: Exact, Phrase i Broad." } },
    { "@type": "Question", name: "Koliko ključnih reči je potrebno za početak?", acceptedAnswer: { "@type": "Answer", text: "Za jednu kampanju: 30-50 ključnih reči organizovanih u 3-5 Ad Groups. Bolje je početi sa manje i proširiti na osnovu podataka nego pokrenuti previše odjednom bez fokusa." } },
    { "@type": "Question", name: "Exact ili Phrase match za početak kampanje?", acceptedAnswer: { "@type": "Answer", text: "Preporučujem Phrase match za početak. Daje dobar balans kontrole i discovery-ja - vidite šta ljudi zapravo traže. Exact match dodajte kasnije za dokazane performere." } },
    { "@type": "Question", name: "Koliko često pregledati Search Terms?", acceptedAnswer: { "@type": "Answer", text: "Minimum jednom nedeljno. U prva 30 dana nove kampanje - svaka 2-3 dana. Za zrele kampanje sa niskim wasted spend-om, nedeljno je sasvim dovoljno." } },
    { "@type": "Question", name: "Šta ako ključna reč ima 0 pretraga u Keyword Planner?", acceptedAnswer: { "@type": "Answer", text: "Može i dalje biti vredna. Keyword Planner potcenjuje volume za long-tail reči. Ako je relevantna i ima transakcijsku nameru, testirajte je - možda konvertuje odlično." } },
    { "@type": "Question", name: "Da li targetirati brand imena konkurenata?", acceptedAnswer: { "@type": "Answer", text: "Opciono i zavisi od industrije. Može biti efektivno za dosezanje ljudi koji razmatraju alternative. Nikada ne koristite competitor brand u tekstu oglasa - fokusirajte se na diferencijaciju." } },
    { "@type": "Question", name: "Kako prepoznati da je ključna reč loša?", acceptedAnswer: { "@type": "Answer", text: "100+ klikova bez konverzije ili 3x target CPA spend bez rezultata su jasni signali. Ali pre pauziranja, proverite i landing page i oglas - možda je problem tamo, ne u ključnoj reči." } },
  ]
};

const faqSchemaKljucneReciEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What are keywords in Google Ads?", acceptedAnswer: { "@type": "Answer", text: "Keywords are the words and phrases you add to a Google Ads campaign so your ad shows when users search for them. They determine who sees your ad, how much you pay per click, and your Quality Score. They are controlled through three match types: Exact, Phrase, and Broad." } },
    { "@type": "Question", name: "How many keywords do I need to start?", acceptedAnswer: { "@type": "Answer", text: "For one campaign: 30-50 keywords organized into 3-5 Ad Groups. Better to start with fewer and expand based on data than launch too many at once without focus." } },
    { "@type": "Question", name: "Exact or Phrase match for campaign launch?", acceptedAnswer: { "@type": "Answer", text: "I recommend Phrase match for launch. Gives good balance of control and discovery — you see what people actually search for. Add Exact match later for proven performers." } },
    { "@type": "Question", name: "How often should I review Search Terms?", acceptedAnswer: { "@type": "Answer", text: "Minimum once weekly. In first 30 days of new campaign — every 2-3 days. For mature campaigns with low wasted spend, weekly is sufficient." } },
    { "@type": "Question", name: "What if a keyword shows 0 searches in Keyword Planner?", acceptedAnswer: { "@type": "Answer", text: "It may still be valuable. Keyword Planner underestimates volume for long-tail keywords. If it is relevant and has transactional intent, test it — it may convert excellently." } },
    { "@type": "Question", name: "Should I target competitor brand names?", acceptedAnswer: { "@type": "Answer", text: "Optional and depends on industry. Can be effective for reaching people considering alternatives. Never use competitor brand in ad text — focus on differentiation." } },
    { "@type": "Question", name: "How do I know a keyword is performing poorly?", acceptedAnswer: { "@type": "Answer", text: "100+ clicks without conversions or 3x target CPA spend without results are clear signals. But before pausing, check landing page and ad — the problem may be there, not the keyword." } },
  ]
};

// ── FAQ Schema: Negativne ključne reči ──

const faqSchemaNegativneKljucneReciSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Šta su negativne ključne reči?", acceptedAnswer: { "@type": "Answer", text: "Negativne ključne reči su reči i fraze za koje ne želite da se vaš Google Ads oglas prikazuje. Za razliku od regularnih ključnih reči koje privlače saobraćaj, negativne ga filtriraju i štite budžet od klikova bez namere kupovine. Bez njih, 20-40% budžeta obično odlazi na irelevantne pretrage." } },
    { "@type": "Question", name: "Koliko negativnih ključnih reči je dovoljno?", acceptedAnswer: { "@type": "Answer", text: "Nema gornjeg limita. Tipično: 50-200 za starter listu, raste vremenom. Kvalitet je važniji od kvantiteta - bolje 50 pažljivo odabranih nego 500 nasumičnih." } },
    { "@type": "Question", name: "Da li negativne ključne reči utiču na Quality Score?", acceptedAnswer: { "@type": "Answer", text: "Indirektno - da. Bolji CTR (manje irelevantnih prikaza) → bolji Expected CTR → bolji QS." } },
    { "@type": "Question", name: "Mogu li slučajno blokirati dobre pretrage?", acceptedAnswer: { "@type": "Answer", text: "Da, to je realan rizik. Zato: (1) koristite podatke pre dodavanja, (2) proveravajte Search Terms nakon dodavanja, (3) budite pažljivi sa Broad negatives za kratke reči koje imaju više značenja." } },
    { "@type": "Question", name: "Koliko često pregledati i ažurirati negative liste?", acceptedAnswer: { "@type": "Answer", text: "Minimum: jednom nedeljno Search Terms review. Idealno u prva 30 dana: svaka 2-3 dana. Za zrele kampanje: nedeljno + mesečna deep dive + kvartalna kompletna revizija." } },
    { "@type": "Question", name: "Da li postoje obavezne negativne ključne reči za svaki nalog?", acceptedAnswer: { "@type": "Answer", text: "Universal lista (besplatno, posao, DIY) je dobar starter za većinu biznisa. Ali uvek prilagodite svom biznisu - 'besplatno' možda nije negative ako nudite free trial ili besplatnu dostavu." } },
    { "@type": "Question", name: "Negative Broad vs Negative Phrase - kada koji?", acceptedAnswer: { "@type": "Answer", text: "Broad: za opšte termine koje uvek želite blokirati (besplatno, posao) - pokriva sve pretrage sa tom reči. Phrase: za specifične fraze gde redosled ima značaj. Exact: retko - samo za vrlo specifične slučajeve." } },
  ]
};

const faqSchemaNegativneKljucneReciEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What are negative keywords?", acceptedAnswer: { "@type": "Answer", text: "Negative keywords are words and phrases you don't want your Google Ads ad to show for. Unlike regular keywords that attract traffic, negatives filter it out and protect your budget from clicks with no purchase intent. Without them, 20-40% of budget typically goes to irrelevant searches." } },
    { "@type": "Question", name: "How many negative keywords is enough?", acceptedAnswer: { "@type": "Answer", text: "No upper limit. Typically: 50-200 for starter list, grows over time. Quality is more important than quantity — better 50 carefully selected than 500 random ones." } },
    { "@type": "Question", name: "Do negative keywords affect Quality Score?", acceptedAnswer: { "@type": "Answer", text: "Indirectly — yes. Better CTR (fewer irrelevant impressions) → better Expected CTR → better QS." } },
    { "@type": "Question", name: "Can I accidentally block good searches?", acceptedAnswer: { "@type": "Answer", text: "Yes, that is a real risk. Therefore: (1) use data before adding, (2) check Search Terms after adding, (3) be careful with Broad negatives for short keywords that have multiple meanings." } },
    { "@type": "Question", name: "How often should I review and update negative lists?", acceptedAnswer: { "@type": "Answer", text: "Minimum: weekly Search Terms review. Ideally in first 30 days: every 2-3 days. For mature campaigns: weekly + monthly deep dive + quarterly complete review." } },
    { "@type": "Question", name: "Are there mandatory negative keywords for every account?", acceptedAnswer: { "@type": "Answer", text: "Universal list (free, jobs, DIY) is good starter for most businesses. But always customize for your business — 'free' may not be negative if you offer free trial or free shipping." } },
    { "@type": "Question", name: "Negative Broad vs Negative Phrase — when which?", acceptedAnswer: { "@type": "Answer", text: "Broad: for general terms you always want to block (free, jobs) — covers all searches with that word. Phrase: for specific phrases where order matters. Exact: rarely — only for very specific cases." } },
  ]
};

// ── FAQ Schema: Lista negativnih ključnih reči + API autentifikacija ──

const faqSchemaNegativeListSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Mogu li da kopiram ovu listu direktno i nalepim je u svoj nalog?", acceptedAnswer: { "@type": "Answer", text: "Možete kopirati bilo koji blok iznad i nalepiti ga u Negative Keyword List ili u Google Ads Editor import - tačno za to format i služi. Ali prvo pročitajte kategoriju i obrišite sve što je zapravo deo vaše ponude (besplatna dostava, polovna roba, kurs koji prodajete). Nijedna objavljena lista, uključujući ovu, ne poznaje vaš biznis bez tog koraka." } },
    { "@type": "Question", name: "Da li ova lista radi za Shopping i Performance Max?", acceptedAnswer: { "@type": "Answer", text: "Da. Ako ove termine dodate u negativnu listu na nivou naloga, automatski se primenjuju na Search, Shopping, Performance Max, App, Smart i Local kampanje. Performance Max sada takođe direktno prihvata negative i negativne liste na nivou kampanje - do 2025. je to bilo moguće samo preko Google predstavnika ili API-ja, sada je self-servisno u interfejsu. Izvor: Performance Max negativne ključne reči." } },
    { "@type": "Question", name: "Po čemu se ovo razlikuje od Vodiča za negativne ključne reči?", acceptedAnswer: { "@type": "Answer", text: "Vodič za negativne ključne reči je kako i zašto - ponašanje match tipova, sistem organizacije u tri sloja, stvarna studija slučaja, kako da izvučete sopstvene negative iz Search Terms reporta. Ova stranica je šta - 421 termin spreman za lepljenje kroz 15 kategorija, plus AI prompt za pravljenje prilagođenog seta. Pročitajte vodič jednom, vraćajte se ovde kad god vam trebaju termini." } },
    { "@type": "Question", name: "Da li treba samo da koristim AI da generišem celu listu umesto ove?", acceptedAnswer: { "@type": "Answer", text: "Oboje, tim redosledom. Krenite od lista na ovoj stranici - one su skinule nagađanje sa univerzalnih i brand safety kategorija. Onda pokrenite AI prompt sa svojim konkretnim proizvodima, lokacijama i izuzecima da popunite ono što generička lista ne može da zna. Proverite svaki AI predlog kroz sedam pravila pre dodavanja - model ne vidi vaš nalog, vaš Search Terms report ni vašu stvarnu teritoriju usluge." } },
    { "@type": "Question", name: "Koliko često treba da ažuriram ovu listu?", acceptedAnswer: { "@type": "Answer", text: "Nalepite relevantne kategorije jednom kao polaznu tačku, a Search Terms report tretirajte kao stvarni, tekući izvor - nedeljno prvog meseca nove kampanje, pa minimum mesečno posle toga. Ova statična lista vas dovodi do razumne osnove prvog dana; ne zamenjuje praćenje šta ljudi stvarno pretražuju." } },
  ]
};

const faqSchemaNegativeListEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can I copy this list directly and paste it into my account?", acceptedAnswer: { "@type": "Answer", text: "You can copy any block above and paste it into a Negative Keyword List or a Google Ads Editor import — that is exactly what the format is for. But read through the category first and delete anything that is actually part of your offer (free shipping, used goods, a course you sell). No published list, including this one, knows your business without that pass." } },
    { "@type": "Question", name: "Does this list work for Shopping and Performance Max?", acceptedAnswer: { "@type": "Answer", text: "Yes. If you add these terms to your account-level negative list, they apply automatically to Search, Shopping, Performance Max, App, Smart, and Local campaigns. Performance Max also now accepts campaign-level negatives and negative keyword lists directly — until 2025 that required going through a Google rep or the API, and it is now self-serve in the interface. Source: Performance Max negative keywords." } },
    { "@type": "Question", name: "How is this different from the Negative Keywords Guide?", acceptedAnswer: { "@type": "Answer", text: "The Negative Keywords Guide is the how and why — match type behavior, the three-tier organization system, a real case study, how to mine your own negatives from the Search Terms report. This page is the what — 422 ready-to-paste terms across 15 categories, plus the AI prompt for building a custom set. Read the guide once, come back to this page whenever you need terms." } },
    { "@type": "Question", name: "Should I just use AI to generate the whole list instead of this one?", acceptedAnswer: { "@type": "Answer", text: "Both, in that order. Start with the lists on this page — they took the guesswork out of the universal and brand safety categories. Then run the AI prompt with your specific products, locations, and exceptions to fill in what a generic list cannot know. Verify every AI suggestion against the seven rules before adding it — the model does not see your account, your Search Terms report, or your actual service area." } },
    { "@type": "Question", name: "How often should I update this list?", acceptedAnswer: { "@type": "Answer", text: "Paste the relevant categories once as a starting point, then treat the Search Terms report as the real, ongoing source — weekly for the first month of a new campaign, then at minimum monthly after that. This static list gets you to a reasonable baseline on day one; it does not replace watching what people actually search for." } },
  ]
};

const faqSchemaApiAuthSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Koja je razlika između developer token-a i OAuth2 token-a na Google Ads API-ju?", acceptedAnswer: { "@type": "Answer", text: "Developer token identifikuje vašu aplikaciju - fiksan je string izdat jednom u API Center-u vašeg manager naloga (22 karaktera u mojim nalozima), i sam po sebi ne ističe. OAuth2 access token (i refresh token iza njega) identifikuje osobu koja je odobrila pristup vašoj aplikaciji, i može isteći ili biti opozvan. Svaki poziv na Google Ads API zahteva oba: developer token kao header, i validan OAuth2 access token za autentifikaciju." } },
    { "@type": "Question", name: "Zašto mi refresh token prestane da radi na svakih 7 dana?", acceptedAnswer: { "@type": "Answer", text: "OAuth consent screen vašeg Google Cloud projekta postavljen je na External tip korisnika sa statusom objave Testing. Google to dokumentuje: refresh tokeni izdati pod tim uslovima ističu posle 7 dana, što se pojavljuje kao invalid_grant ili RefreshError. Prebacivanje statusa objave na In production uklanja taj rok od 7 dana - to radite samo jednom po projektu." } },
    { "@type": "Question", name: "Da li mi treba Google Workspace za service account na Google Ads API-ju?", acceptedAnswer: { "@type": "Answer", text: "U praksi da. Google-ov sopstveni vodič za service account to ne objašnjava, ali programeri koji su ovo implementirali prijavljuju na Google-ovom Ads API developer forumu da bez Google Workspace domena i podešene domain-wide delegacije za adwords scope, poziv ne prolazi sa AuthenticationError.NOT_ADS_USER - service account mora da impersonira stvarnog Workspace korisnika preko subject parametra da bi se uspešno autentifikovao. Za solo operatera ili mali tim bez Workspace domena, OAuth2 desktop tok je jednostavniji i ništa od ovoga mu ne treba." } },
    { "@type": "Question", name: "Šta je login-customer-id i kad mi treba?", acceptedAnswer: { "@type": "Answer", text: "login-customer-id je header koji Google Ads API-ju kaže u kontekstu kog naloga radite. Obavezan je kad autentifikovan nalog pristupa klijentskom nalogu kroz manager (MCC) nalog - postavite ga na ID MCC-a. Izostavljanje kad je potreban proizvodi USER_PERMISSION_DENIED, čak i ako nalog jasno vidite u Google Ads interfejsu." } },
    { "@type": "Question", name: "Šta znači AuthenticationError.NOT_ADS_USER?", acceptedAnswer: { "@type": "Answer", text: "Prema zvaničnoj Google dokumentaciji, znači da Google nalog korišćen za generisanje access tokena nije povezan ni sa jednim Google Ads nalogom. Pojavljuje se u dve situacije: OAuth login bez ikakvog pristupa Google Ads-u, ili poziv service account-a kojem fali subject/impersonirani parametar potreban da se autentifikuje kao stvaran Workspace korisnik." } },
  ]
};

const faqSchemaApiAuthEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What's the difference between a developer token and an OAuth2 token in the Google Ads API?", acceptedAnswer: { "@type": "Answer", text: "A developer token identifies your application — it's a fixed string issued once in your manager account's API Center (22 characters in my accounts), and it never expires on its own. An OAuth2 access token (and the refresh token behind it) identifies the person who authorized your app, and it can expire or be revoked. Every Google Ads API call needs both: the developer token as a header, and a valid OAuth2 access token for authentication." } },
    { "@type": "Question", name: "Why does my refresh token stop working every 7 days?", acceptedAnswer: { "@type": "Answer", text: "Your Google Cloud project's OAuth consent screen is set to an External user type with a Testing publishing status. Google documents this: refresh tokens issued under those conditions expire after 7 days, which surfaces as invalid_grant or a RefreshError. Switching the publishing status to In production removes that 7-day expiry — you only need to do it once per project." } },
    { "@type": "Question", name: "Do I need Google Workspace to use a service account with the Google Ads API?", acceptedAnswer: { "@type": "Answer", text: "In practice, yes. Google's quick-start steps for service accounts don't spell this out, but developers who've implemented it report that without a Google Workspace domain and domain-wide delegation configured for the adwords scope, the call fails with AuthenticationError.NOT_ADS_USER — the service account has to impersonate a real Workspace user via a subject parameter to authenticate successfully. For a solo operator or small team without a Workspace domain, the OAuth2 desktop flow is simpler and doesn't require any of this." } },
    { "@type": "Question", name: "What is login-customer-id and when do I need it?", acceptedAnswer: { "@type": "Answer", text: "login-customer-id is a header that tells the Google Ads API which account context you're operating in. It's required whenever the authenticated account accesses a client account through a manager (MCC) account — set it to the MCC's ID. Leaving it out when it's needed produces USER_PERMISSION_DENIED, even if you can see the account fine in the Google Ads UI." } },
    { "@type": "Question", name: "What does AuthenticationError.NOT_ADS_USER mean?", acceptedAnswer: { "@type": "Answer", text: "Per Google's official documentation, it means the Google account used to generate the access token isn't associated with any Google Ads account. It shows up in two situations: an OAuth login with no Google Ads access at all, or a service account call missing the subject/impersonated-user parameter it needs to authenticate as a real Workspace user." } },
  ]
};

// ── FAQ Schema: Quality Score vodič ──

const faqSchemaQualityScoreSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Koji je dobar Quality Score?", acceptedAnswer: { "@type": "Answer", text: "7+ je dobar, 8-9 je odličan, 10 je idealan ali nije uvek potreban niti realan. Za branded ključne reči očekujte 8-10, za generičke komercijalne 6-8 je sasvim solidan rezultat." } },
    { "@type": "Question", name: "Koliko brzo se Quality Score menja?", acceptedAnswer: { "@type": "Answer", text: "QS se ažurira na osnovu kumulativnih performansi, ali promene vidite postepeno - obično dani do nedelje. Veće promene (restrukturiranje Ad Groups, nove LP) zahtevaju više podataka da se reflektuju." } },
    { "@type": "Question", name: "Da li QS utiče na Display i Shopping kampanje?", acceptedAnswer: { "@type": "Answer", text: "Display ima sličan ali manje transparentan sistem. Shopping nema klasičan QS - koristi feed quality, price competitiveness i seller ratings. PMax koristi interne signale koji nisu vidljivi." } },
    { "@type": "Question", name: "Mogu li imati visok QS i loše konverzije?", acceptedAnswer: { "@type": "Answer", text: "Da. QS meri relevantnost, ne kvalitet ponude. Možete imati savršeno relevantan oglas i LP za ponudu koja nije konkurentna. QS je samo deo jednačine." } },
    { "@type": "Question", name: "Zašto imam nizak QS za branded ključne reči?", acceptedAnswer: { "@type": "Answer", text: "Verovatno konkurenti bidduju na vaš brand. Branded reči bi trebalo da imaju QS 8-10. Proverite: da li je brand u headline-u oglasa, da li LP ima brand prominentno, da li ima tehničkih problema sa sajtom." } },
    { "@type": "Question", name: "Da li pauziranje loših ključnih reči poboljšava QS ostalih?", acceptedAnswer: { "@type": "Answer", text: "Ne direktno - ne postoji account-level QS. Ali indirektno, bolji fokus na kvalitetne reči poboljšava ukupne performanse naloga što vremenom pomaže svim metrikama." } },
  ]
};

const faqSchemaQualityScoreEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a good Quality Score?", acceptedAnswer: { "@type": "Answer", text: "7+ is good, 8-9 is excellent, 10 is ideal but not always necessary or realistic. For branded keywords expect 8-10, for generic commercial 6-8 is solid result." } },
    { "@type": "Question", name: "How quickly does Quality Score change?", acceptedAnswer: { "@type": "Answer", text: "QS updates based on cumulative performance, but changes show gradually — usually days to weeks. Bigger changes (restructuring Ad Groups, new LPs) require more data to reflect." } },
    { "@type": "Question", name: "Does QS affect Display and Shopping campaigns?", acceptedAnswer: { "@type": "Answer", text: "Display has similar but less transparent system. Shopping has no traditional QS — uses feed quality, price competitiveness, and seller ratings. PMax uses internal signals not visible." } },
    { "@type": "Question", name: "Can I have high QS and poor conversions?", acceptedAnswer: { "@type": "Answer", text: "Yes. QS measures relevance, not offer quality. You can have perfectly relevant ad and LP for an uncompetitive offer. QS is only part of equation." } },
    { "@type": "Question", name: "Why do I have low QS for branded keywords?", acceptedAnswer: { "@type": "Answer", text: "Likely competitors are bidding on your brand. Branded keywords should have QS 8-10. Check: is brand in ad headline, does LP have brand prominently, are there technical issues with site." } },
    { "@type": "Question", name: "Does pausing poor keywords improve QS of others?", acceptedAnswer: { "@type": "Answer", text: "Not directly — there is no account-level QS. But indirectly, better focus on quality keywords improves overall account performance which over time helps all metrics." } },
  ]
};

// --- google-oglasavanje-za-firme ---
const faqSchemaGoogleOglasavanjeSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Koliko košta Google oglašavanje za firme?", acceptedAnswer: { "@type": "Answer", text: "Prosečan CPC u Srbiji je €0.10-0.80, u UK/DE €1-5+. Minimalni preporučeni mesečni budžet za kampanje je €300-500 za lokalne firme, €1,000+ za eCommerce. Uz to ide fee za upravljanje, na srpskom tržištu tipično €300-2.500/mesečno u zavisnosti od obima." } },
    { "@type": "Question", name: "Koji tip Google kampanje je najbolji za moju firmu?", acceptedAnswer: { "@type": "Answer", text: "Search kampanje su najbolje za firme koje žele direktne upite/pozive. Shopping za eCommerce. Performance Max za kombinaciju kanala. Display za brand awareness. Zavisi od vašeg cilja - lead generation ili online prodaja." } },
    { "@type": "Question", name: "Koliko dugo treba da se vide rezultati?", acceptedAnswer: { "@type": "Answer", text: "Prve konverzije obično za 2-4 nedelje. Puna optimizacija zahteva 60-90 dana jer Google algoritam treba podatke za učenje. B2B kampanje obično zahtevaju duži period (3-6 meseci) zbog dužeg sales cycle-a." } },
    { "@type": "Question", name: "Da li mi treba sajt za Google oglašavanje?", acceptedAnswer: { "@type": "Answer", text: "Da, sajt je obavezan za Google Ads. Trebate landing page koji je brz (ispod 3 sekunde), mobile-friendly i sa jasnim pozivom na akciju. Bez dobrog sajta, čak ni savršena kampanja neće doneti rezultate." } },
    { "@type": "Question", name: "Mogu li sam da vodim Google Ads ili mi treba stručnjak?", acceptedAnswer: { "@type": "Answer", text: "Možete početi sami sa manjim budžetom, ali bez iskustva obično potrošite 30-50% budžeta neoptimalno. Stručnjak se isplati kad mesečni ad spend pređe €500-1,000 jer uštede na optimizaciji obično pokrivaju fee." } },
  ]
};

const faqSchemaGoogleAdvertisingEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does Google advertising cost for businesses?", acceptedAnswer: { "@type": "Answer", text: "Average CPC varies by industry: $1-5 for eCommerce, $2-10 for B2B, $5-50+ for legal/finance. Recommended minimum monthly budget is $500-1,000 for local businesses, $2,000+ for eCommerce. Management fees range from $300-1,000/month." } },
    { "@type": "Question", name: "Which Google campaign type is best for my business?", acceptedAnswer: { "@type": "Answer", text: "Search campaigns are best for businesses wanting direct inquiries/calls. Shopping for eCommerce. Performance Max for multi-channel reach. Display for brand awareness. It depends on your goal — lead generation or online sales." } },
    { "@type": "Question", name: "How long until I see results from Google Ads?", acceptedAnswer: { "@type": "Answer", text: "First conversions typically within 2-4 weeks. Full optimization requires 60-90 days as Google's algorithm needs data for learning. B2B campaigns usually require a longer period (3-6 months) due to longer sales cycles." } },
    { "@type": "Question", name: "Do I need a website for Google advertising?", acceptedAnswer: { "@type": "Answer", text: "Yes, a website is mandatory for Google Ads. You need a landing page that loads fast (under 3 seconds), is mobile-friendly, and has a clear call to action. Without a good website, even a perfect campaign won't deliver results." } },
    { "@type": "Question", name: "Can I manage Google Ads myself or do I need an expert?", acceptedAnswer: { "@type": "Answer", text: "You can start managing it yourself with a smaller budget, but without experience you typically waste 30-50% of budget on unoptimized spending. An expert pays for itself when monthly ad spend exceeds $1,000-2,000 as optimization savings usually cover the fee." } },
  ]
};

// --- performance-max-vodic ---
const faqSchemaPerformanceMaxSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Šta je Performance Max kampanja?", acceptedAnswer: { "@type": "Answer", text: "Performance Max je AI-driven Google Ads kampanja koja automatski koristi sve Google kanale - Search, Shopping, Display, YouTube, Gmail i Discover - iz jedne kampanje. Najefektivnija je za multi-SKU eCommerce sa minimum 50 konverzija mesečno koje algoritam koristi za optimizaciju." } },
    { "@type": "Question", name: "Da li Performance Max zamenjuje Search i Shopping kampanje?", acceptedAnswer: { "@type": "Answer", text: "Ne u potpunosti. PMax može da radi uz Search i Shopping. Google preporučuje kombinaciju - PMax za široku pokrivenost, Search za high-intent upite. Shopping sa PMax-om zahteva pažljivu asset group strukturu da se izbegne kanibalizacija." } },
    { "@type": "Question", name: "Koliki budžet treba za Performance Max?", acceptedAnswer: { "@type": "Answer", text: "Minimum €30-50/dan (€900-1,500/mesečno). PMax koristi machine learning koji zahteva dovoljno podataka - ispod ovog budžeta algoritam nema dovoljno konverzija za optimizaciju. Za eCommerce sa 100+ proizvoda, preporučuje se €2,000+/mesečno." } },
    { "@type": "Question", name: "Zašto PMax troši većinu budžeta na Display/YouTube?", acceptedAnswer: { "@type": "Answer", text: "Čest problem sa PMax-om. Rešenja: isključite URL expansion, dodajte negativne ključne reči (na nivou kampanje ili naloga, samostalno u interfejsu), uključite brand exclusions ako PMax kupuje vaš brend, napravite jače Search kampanje za iste ključne reči. PMax će trošiti gde mu je najjeftinije, ne nužno najefikasnije." } },
    { "@type": "Question", name: "Kako videti gde PMax prikazuje oglase?", acceptedAnswer: { "@type": "Answer", text: "Insights tab → Placement report (ograničen), Asset group performance. Za detaljnije: koristite URL-based conversion tracking ili GA4 da vidite koji kanali donose konverzije. Google namerno ograničava transparentnost PMax-a." } },
    { "@type": "Question", name: "Kada NE koristiti Performance Max?", acceptedAnswer: { "@type": "Answer", text: "Kad imate mali budžet (ispod €500/mesečno), kad nemate conversion tracking, za čist brand awareness, ili kad trebate preciznu kontrolu nad ključnim rečima. PMax je automatizovan - ako želite potpunu kontrolu, Search i Shopping su bolji izbor." } },
  ]
};

const faqSchemaPerformanceMaxEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a Performance Max campaign?", acceptedAnswer: { "@type": "Answer", text: "Performance Max is an AI-driven Google Ads campaign that automatically uses all Google channels — Search, Shopping, Display, YouTube, Gmail, and Discover — from a single campaign. It's most effective for multi-SKU eCommerce with a minimum of 50 conversions per month for the algorithm to optimize with." } },
    { "@type": "Question", name: "Does Performance Max replace Search and Shopping campaigns?", acceptedAnswer: { "@type": "Answer", text: "Not entirely. PMax can run alongside Search and Shopping. Google recommends a combination — PMax for broad coverage, Search for high-intent queries. Shopping with PMax requires careful asset group structure to avoid cannibalization." } },
    { "@type": "Question", name: "What budget do I need for Performance Max?", acceptedAnswer: { "@type": "Answer", text: "Minimum $30-50/day ($900-1,500/month). PMax uses machine learning that requires sufficient data — below this budget the algorithm doesn't have enough conversions for optimization. For eCommerce with 100+ products, $2,000+/month is recommended." } },
    { "@type": "Question", name: "Why is PMax spending most of my budget on Display/YouTube?", acceptedAnswer: { "@type": "Answer", text: "Common PMax problem. Solutions: disable URL expansion, add negative keywords (at campaign or account level, self-serve in the UI), switch on brand exclusions if PMax is buying your own brand, create stronger Search campaigns for the same keywords. PMax will spend where it's cheapest, not necessarily most effective." } },
    { "@type": "Question", name: "How can I see where PMax shows my ads?", acceptedAnswer: { "@type": "Answer", text: "Insights tab → Placement report (limited), Asset group performance. For more detail: use URL-based conversion tracking or GA4 to see which channels drive conversions. Google intentionally limits PMax transparency." } },
    { "@type": "Question", name: "When should I NOT use Performance Max?", acceptedAnswer: { "@type": "Answer", text: "When you have a small budget (under $500/month), no conversion tracking, for pure brand awareness, or when you need precise keyword control. PMax is automated — if you want full control, Search and Shopping are better choices." } },
  ]
};

// --- google-ads-optimizacija ---
const faqSchemaOptimizacijaSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Koliko često treba optimizovati Google Ads kampanje?", acceptedAnswer: { "@type": "Answer", text: "Dnevno: provera budžeta i alert-a. Nedeljno: bid adjustments, search terms review, negativne ključne reči. Mesečno: A/B testovi oglasa, strukturalne promene, strategija. Preterana optimizacija (svaki dan menjanje bid-ova) može biti kontraproduktivna." } },
    { "@type": "Question", name: "Šta je najvažnija optimizacija za Google Ads?", acceptedAnswer: { "@type": "Answer", text: "Conversion tracking. Bez tačnog tracking-a, sve ostale optimizacije su naslepo. Posle toga: negativne ključne reči (sprečavaju bacanje budžeta), Quality Score (smanjuje CPC), i bid strategija (kontroliše gde se troši)." } },
    { "@type": "Question", name: "Da li Google Ads automatske preporuke treba prihvatiti?", acceptedAnswer: { "@type": "Answer", text: "Ne sve. Google optimizuje za svoj prihod, ne nužno za vaš ROI. Preporuke za broad match, budget povećanje i auto-apply promene obično nisu u vašem interesu. Prihvatajte samo one koje imaju smisla za vaše ciljeve." } },
    { "@type": "Question", name: "Kako poboljšati ROAS u Google Ads?", acceptedAnswer: { "@type": "Answer", text: "Fokusirajte se na: 1) Negativne ključne reči (eliminišite neproduktivne pretrage), 2) Bid strategiju po uređaju/lokaciji/vremenu, 3) Landing page optimizaciju, 4) Segmentaciju kampanja po profitabilnosti proizvoda, 5) Remarketing za postojeće posetioce." } },
    { "@type": "Question", name: "Zašto mi Quality Score opada?", acceptedAnswer: { "@type": "Answer", text: "Najčešći razlozi: landing page se sporije učitava, konkurenti su poboljšali svoje oglase, CTR je pao (morate osvežiti copy), ili je relevantnost opala (ključne reči ne odgovaraju oglas → LP putanji). Proverite svaku komponentu pojedinačno." } },
  ]
};

const faqSchemaOptimizacijaEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How often should I optimize Google Ads campaigns?", acceptedAnswer: { "@type": "Answer", text: "Daily: budget and alert checks. Weekly: bid adjustments, search terms review, negative keywords. Monthly: ad A/B tests, structural changes, strategy review. Over-optimization (changing bids daily) can be counterproductive." } },
    { "@type": "Question", name: "What is the most important Google Ads optimization?", acceptedAnswer: { "@type": "Answer", text: "Conversion tracking. Without accurate tracking, all other optimizations are blind. After that: negative keywords (prevent budget waste), Quality Score (reduces CPC), and bid strategy (controls where budget is spent)." } },
    { "@type": "Question", name: "Should I accept Google Ads automatic recommendations?", acceptedAnswer: { "@type": "Answer", text: "Not all of them. Google optimizes for their revenue, not necessarily your ROI. Recommendations for broad match, budget increases, and auto-apply changes are usually not in your best interest. Only accept those that align with your goals." } },
    { "@type": "Question", name: "How do I improve ROAS in Google Ads?", acceptedAnswer: { "@type": "Answer", text: "Focus on: 1) Negative keywords (eliminate unproductive searches), 2) Bid strategy by device/location/time, 3) Landing page optimization, 4) Campaign segmentation by product profitability, 5) Remarketing to existing visitors." } },
    { "@type": "Question", name: "Why is my Quality Score dropping?", acceptedAnswer: { "@type": "Answer", text: "Most common reasons: landing page loads slower, competitors improved their ads, CTR dropped (refresh your copy), or relevance decreased (keywords don't match the ad → LP path). Check each component individually." } },
  ]
};

// --- google-shopping-vodic ---
const faqSchemaShoppingSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Šta je Google Shopping i kako funkcioniše?", acceptedAnswer: { "@type": "Answer", text: "Google Shopping je vizuelni format oglasa koji prikazuje sliku proizvoda, cenu i ime prodavnice pre klika - što filtrira nekupce i dovodi visoko-nameravane kupce. Zahteva Google Merchant Center i optimizovan product feed. Za Srbiju: lansira se u drugoj polovini 2026 (Q3 ili Q4), tačan datum još nije potvrđen." } },
    { "@type": "Question", name: "Da li mi treba Merchant Center za Google Shopping?", acceptedAnswer: { "@type": "Answer", text: "Da, Merchant Center je obavezan. Tu upload-ujete product feed sa svim informacijama o proizvodima (naziv, cena, slika, dostupnost). Bez MC-a ne možete pokrenuti Shopping kampanje." } },
    { "@type": "Question", name: "Koliko proizvoda treba imati za Google Shopping?", acceptedAnswer: { "@type": "Answer", text: "Nema minimuma, ali Shopping najbolje radi sa 50+ proizvoda. Sa manje od 20 proizvoda, budžet se brzo potroši na malo SKU-ova. Za optimalne rezultate, preporučuje se 100+ aktivnih proizvoda u feed-u." } },
    { "@type": "Question", name: "Zašto su moji Shopping oglasi odbijeni?", acceptedAnswer: { "@type": "Answer", text: "Najčešći razlozi: neusklađenost cena između sajta i feed-a, nedostajući GTIN/MPN, loše slike (watermark, tekst na slici), nedostajuće shipping informacije, ili kršenje Google Merchant Center politika." } },
    { "@type": "Question", name: "Shopping vs Performance Max - šta je bolje za eCommerce?", acceptedAnswer: { "@type": "Answer", text: "Standard Shopping daje veću kontrolu i transparentnost. PMax daje širi reach ali manje kontrole. Idealna kombinacija: Standard Shopping za top proizvode + PMax za ostatak kataloga. Zavisi od budžeta i broja proizvoda." } },
    { "@type": "Question", name: "Kako optimizovati product feed za bolje rezultate?", acceptedAnswer: { "@type": "Answer", text: "Ključne optimizacije: 1) Title sa glavnom ključnom rečju na početku, 2) Visokokvalitetne slike na beloj pozadini, 3) Detaljan opis sa ključnim rečima, 4) Tačan product_type i google_product_category, 5) Redovno ažuriranje cena i dostupnosti." } },
  ]
};

const faqSchemaShoppingEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is Google Shopping and how does it work?", acceptedAnswer: { "@type": "Answer", text: "Google Shopping is a visual ad format that shows the product image, price, and store name before the click — filtering out non-buyers and bringing in high-intent shoppers. It requires Google Merchant Center and an optimized product feed." } },
    { "@type": "Question", name: "Do I need Merchant Center for Google Shopping?", acceptedAnswer: { "@type": "Answer", text: "Yes, Merchant Center is mandatory. This is where you upload your product feed with all product information (title, price, image, availability). Without MC you cannot run Shopping campaigns." } },
    { "@type": "Question", name: "How many products do I need for Google Shopping?", acceptedAnswer: { "@type": "Answer", text: "There's no minimum, but Shopping works best with 50+ products. With fewer than 20 products, budget gets spent quickly on few SKUs. For optimal results, 100+ active products in the feed is recommended." } },
    { "@type": "Question", name: "Why are my Shopping ads being disapproved?", acceptedAnswer: { "@type": "Answer", text: "Most common reasons: price mismatch between website and feed, missing GTIN/MPN, poor images (watermarks, text on image), missing shipping information, or violating Google Merchant Center policies." } },
    { "@type": "Question", name: "Shopping vs Performance Max — what's better for eCommerce?", acceptedAnswer: { "@type": "Answer", text: "Standard Shopping gives more control and transparency. PMax gives broader reach but less control. Ideal combination: Standard Shopping for top products + PMax for the rest of the catalog. Depends on budget and product count." } },
    { "@type": "Question", name: "How do I optimize my product feed for better results?", acceptedAnswer: { "@type": "Answer", text: "Key optimizations: 1) Title with main keyword at the beginning, 2) High-quality images on white background, 3) Detailed description with keywords, 4) Accurate product_type and google_product_category, 5) Regular price and availability updates." } },
  ]
};

// --- agencija-vs-freelancer ---
const faqSchemaAgencijaSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Agencija ili freelancer za Google Ads - šta izabrati?", acceptedAnswer: { "@type": "Answer", text: "Izbor zavisi pre svega od mesečnog budžeta. Freelancer je najbolji fit za budžete od €1,000-10,000 mesečno gde je bitna direktna komunikacija i fokus na jedan kanal. Agencija ima smisla od €5,000+ mesečno kad su potrebni multi-channel tim i skalabilnost. Fit je važniji od cene." } },
    { "@type": "Question", name: "Koliko košta Google Ads agencija?", acceptedAnswer: { "@type": "Answer", text: "U Srbiji: €300-2.500/mesečno, zavisno od veličine agencije i obima posla. U UK/USA: $500-3.000/mesečno za mid-range, $3.000-10.000+ za enterprise. Većina radi na fiksnom retainer-u ili procentu od ad spend-a (10-20%)." } },
    { "@type": "Question", name: "Freelancer ili agencija - šta je bolje za mali biznis?", acceptedAnswer: { "@type": "Answer", text: "Za budžete do €1,000/mesečno ad spend, freelancer je obično bolji izbor - niži troškovi, direktna komunikacija, veća posvećenost. Agencija ima smisla kad trebate multi-channel pristup ili imate budžet €5.000+/mesečno." } },
    { "@type": "Question", name: "Kako prepoznati lošu Google Ads agenciju?", acceptedAnswer: { "@type": "Answer", text: "Red flags: ne daju pristup Google Ads nalogu, obećavaju garantovane rezultate, nemaju case studies, ne objašnjavaju strategiju, koriste samo Smart kampanje, ne postavljaju conversion tracking, ili zahtevaju dugoročne ugovore bez izlazne klauzule." } },
    { "@type": "Question", name: "Da li mogu prebaciti nalog sa jedne agencije na drugu?", acceptedAnswer: { "@type": "Answer", text: "Da, vaš Google Ads nalog je vaš - agencija ima samo pristup. Proverite da je nalog registrovan na vašu email adresu. Pri prelasku, tražite full access od stare agencije, zadržite istoriju kampanja i konverzija, i napravite backup pre promena." } },
    { "@type": "Question", name: "Šta da tražim u ugovoru sa agencijom?", acceptedAnswer: { "@type": "Answer", text: "Ključne tačke: jasno definisan scope rada, mesečni reporting, pristup nalogu, otkazni rok (30 dana je fer), ko je vlasnik naloga, kakav je onboarding proces, i šta se dešava sa kampanjama po raskidu saradnje." } },
  ]
};

const faqSchemaAgencyEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Agency or freelancer for Google Ads — which should you choose?", acceptedAnswer: { "@type": "Answer", text: "The choice depends mainly on your monthly budget. A freelancer is the best fit for budgets of $1,000-10,000/month where direct communication and single-channel focus matter. An agency makes sense from $5,000+/month when you need a multi-channel team and scalability. Fit matters more than price." } },
    { "@type": "Question", name: "How much does a Google Ads agency cost?", acceptedAnswer: { "@type": "Answer", text: "In the US/UK: $500-3,000/month for mid-range agencies, $3,000-10,000+ for enterprise. Most work on a fixed retainer or percentage of ad spend (10-20%). Some charge setup fees of $500-2,000." } },
    { "@type": "Question", name: "Freelancer or agency — what's better for small business?", acceptedAnswer: { "@type": "Answer", text: "For ad spend budgets under $2,000/month, a freelancer is usually the better choice — lower costs, direct communication, more dedication. An agency makes sense when you need multi-channel approach or have $5,000+/month budget." } },
    { "@type": "Question", name: "How do I spot a bad Google Ads agency?", acceptedAnswer: { "@type": "Answer", text: "Red flags: they don't give access to your Google Ads account, promise guaranteed results, have no case studies, don't explain strategy, only use Smart campaigns, don't set up conversion tracking, or require long-term contracts without exit clause." } },
    { "@type": "Question", name: "Can I switch from one agency to another?", acceptedAnswer: { "@type": "Answer", text: "Yes, your Google Ads account is yours — the agency only has access. Verify the account is registered to your email. When switching, request full access from the old agency, retain campaign and conversion history, and backup before changes." } },
    { "@type": "Question", name: "What should I look for in an agency contract?", acceptedAnswer: { "@type": "Answer", text: "Key points: clearly defined scope of work, monthly reporting, account access, notice period (30 days is fair), who owns the account, onboarding process, and what happens to campaigns when the partnership ends." } },
  ]
};

// --- conversion-tracking-vodic ---
const faqSchemaConversionTrackingSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Šta je conversion tracking?", acceptedAnswer: { "@type": "Answer", text: "Conversion tracking je sistem praćenja koji beleži šta korisnik uradi nakon klika na oglas - kupovinu, poziv, popunjenu formu. Postavlja se preko GTM-a, GA4 i Google Ads tagova i predstavlja osnovu na kojoj Smart Bidding algoritmi optimizuju kampanje. Bez tačnog tracking-a, oko 40% naloga optimizuje ka pogrešnim signalima i troši budžet naslepo." } },
    { "@type": "Question", name: "Šta je conversion tracking i zašto je važan?", acceptedAnswer: { "@type": "Answer", text: "Conversion tracking prati akcije korisnika nakon klika na oglas - kupovinu, poziv, popunjavanje forme. Bez njega, Google ne zna koje ključne reči i oglasi donose rezultate, pa ne može optimizovati kampanje. To je osnova svake uspešne kampanje." } },
    { "@type": "Question", name: "Google Tag vs GTM - šta koristiti?", acceptedAnswer: { "@type": "Answer", text: "Google Tag Manager (GTM) je uvek preporučen jer omogućava fleksibilnost bez menjanja koda sajta. Google Tag (gtag.js) je direktan ali zahteva developersku pomoć za svaku promenu. Za većinu biznisa, GTM je bolji izbor." } },
    { "@type": "Question", name: "Šta su Enhanced Conversions?", acceptedAnswer: { "@type": "Answer", text: "Enhanced Conversions šalju hash-ovane korisničke podatke (email, telefon) Googleu za bolji matching. Poboljšavaju tracking tačnost za 5-15% posebno na iOS uređajima. Implementacija je jednostavna preko GTM-a ili Google Tag-a." } },
    { "@type": "Question", name: "Koliko konverzija treba za Smart Bidding?", acceptedAnswer: { "@type": "Answer", text: "Google-ova preporuka je oko 30 konverzija u poslednjih 30 dana za Target CPA i oko 50 za Target ROAS. Iz moje prakse, stabilnost počinje oko 30-50 konverzija mesečno. Ispod toga algoritam nema dovoljno podataka i rezultati su nepredvidivi. U tom slučaju koristite Manual CPC ili Maximize Clicks." } },
    { "@type": "Question", name: "Zašto se konverzije u Google Ads i GA4 ne poklapaju?", acceptedAnswer: { "@type": "Answer", text: "Za nove conversion actions Google Ads po default-u koristi data-driven atribuciju sa 30-dnevnim conversion window-om, a GA4 svoj data-driven model sa 90-dnevnim window-om. Razlikuje se i brojanje: Google Ads konverziju pripisuje datumu klika, GA4 je event-based i beleži svaki key event na datum događaja. Uvek uporedite iste periode i razumite razlike." } },
  ]
};

const faqSchemaConversionTrackingEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is conversion tracking?", acceptedAnswer: { "@type": "Answer", text: "Conversion tracking is a monitoring system that records what a user does after clicking an ad — a purchase, call, or completed form. It's set up through GTM, GA4, and Google Ads tags and forms the foundation Smart Bidding algorithms use to optimize campaigns. Without accurate tracking, around 40% of accounts optimize toward the wrong signals and burn budget blind." } },
    { "@type": "Question", name: "What is conversion tracking and why is it important?", acceptedAnswer: { "@type": "Answer", text: "Conversion tracking monitors user actions after clicking an ad — purchases, calls, form submissions. Without it, Google doesn't know which keywords and ads drive results, so it can't optimize campaigns. It's the foundation of every successful campaign." } },
    { "@type": "Question", name: "Google Tag vs GTM — which should I use?", acceptedAnswer: { "@type": "Answer", text: "Google Tag Manager (GTM) is always recommended because it offers flexibility without changing site code. Google Tag (gtag.js) is direct but requires developer help for every change. For most businesses, GTM is the better choice." } },
    { "@type": "Question", name: "What are Enhanced Conversions?", acceptedAnswer: { "@type": "Answer", text: "Enhanced Conversions send hashed user data (email, phone) to Google for better matching. They improve tracking accuracy by 5-15%, especially on iOS devices. Implementation is straightforward through GTM or Google Tag." } },
    { "@type": "Question", name: "How many conversions do I need for Smart Bidding?", acceptedAnswer: { "@type": "Answer", text: "Google recommends roughly 30 conversions in the last 30 days for Target CPA and roughly 50 for Target ROAS. In my own accounts, stability starts somewhere around 30-50 conversions per month. Below that, the algorithm lacks sufficient data and results are unpredictable. In that case, use Manual CPC or Maximize Clicks." } },
    { "@type": "Question", name: "Why don't conversions match between Google Ads and GA4?", acceptedAnswer: { "@type": "Answer", text: "For new conversion actions Google Ads uses data-driven attribution by default with a 30-day conversion window, while GA4 uses its own data-driven model with a 90-day window. Counting differs too: Google Ads credits the conversion to the click date, while GA4 is event-based and records every key event on the day it happened. Always compare the same periods and understand the differences." } },
  ]
};

// --- google-ads-greske ---
const faqSchemaGreskeSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Koje su najčešće Google Ads greške?", acceptedAnswer: { "@type": "Answer", text: "Najčešće Google Ads greške su nestrukturirani nalozi (sve pomešano u jednoj kampanji), izostanak negativnih ključnih reči, loš conversion tracking i location targeting koji pušta saobraćaj van servisnog područja. Ove greške zajedno bacaju u proseku 30% mesečnog budžeta na neproduktivne klikove." } },
    { "@type": "Question", name: "Koja je najskuplja greška u Google Ads?", acceptedAnswer: { "@type": "Answer", text: "Nedostatak negativnih ključnih reči. Bez njih, vaš budžet se troši na irelevantne pretrage. Prosečan nalog bez negativnih ključnih reči baca 20-40% budžeta na neproduktivne klikove. Redovna analiza search terms report-a je obavezna." } },
    { "@type": "Question", name: "Da li broad match ključne reči treba koristiti?", acceptedAnswer: { "@type": "Answer", text: "Broad match može raditi uz Smart Bidding i dovoljno konverzija (30+/mesečno). Ali za manje naloge, phrase match i exact match daju bolju kontrolu. Najčešća greška je korišćenje broad match-a bez negativnih ključnih reči - to je recept za bacanje novca." } },
    { "@type": "Question", name: "Koliko ad grupa treba imati po kampnji?", acceptedAnswer: { "@type": "Answer", text: "5-20 ad grupa za većinu kampanja. Previše ad grupa (50+) otežava upravljanje i razređuje budžet. Premalo (1-2) znači lošu relevantnost. Svaka ad grupa treba imati tematski povezane ključne reči i odgovarajuće oglase." } },
    { "@type": "Question", name: "Zašto mi CTR opada iako ništa nisam menjao?", acceptedAnswer: { "@type": "Answer", text: "Najčešći razlozi: sezonalnost, novi konkurenti, ad fatigue (isti oglas predugo), promene u SERP layout-u, ili Quality Score pad. Rešenje: redovno osvežavajte oglase (svakih 4-6 nedelja), pratite Auction Insights i testirajte nove varijante." } },
    { "@type": "Question", name: "Da li treba koristiti sve Google Ads preporuke?", acceptedAnswer: { "@type": "Answer", text: "Ne. Mnoge preporuke služe Googleu da poveća vašu potrošnju. Ignorirajte: 'prebacite na broad match', 'povećajte budžet za 50%', auto-apply promene. Koristite: RSA preporuke za oglase, preporuke za negativne ključne reči, i tehnička poboljšanja." } },
  ]
};

const faqSchemaGreskeEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What are the most common Google Ads mistakes?", acceptedAnswer: { "@type": "Answer", text: "The most common Google Ads mistakes are unstructured accounts (everything mixed into one campaign), missing negative keywords, poor conversion tracking, and location targeting that lets traffic in from outside the service area. Together these mistakes waste on average 30% of monthly budget on unproductive clicks." } },
    { "@type": "Question", name: "What is the most expensive Google Ads mistake?", acceptedAnswer: { "@type": "Answer", text: "Lack of negative keywords. Without them, your budget gets spent on irrelevant searches. An average account without negative keywords wastes 20-40% of budget on unproductive clicks. Regular search terms report analysis is mandatory." } },
    { "@type": "Question", name: "Should I use broad match keywords?", acceptedAnswer: { "@type": "Answer", text: "Broad match can work with Smart Bidding and enough conversions (30+/month). But for smaller accounts, phrase match and exact match give better control. The most common mistake is using broad match without negative keywords — that's a recipe for wasting money." } },
    { "@type": "Question", name: "How many ad groups should I have per campaign?", acceptedAnswer: { "@type": "Answer", text: "5-20 ad groups for most campaigns. Too many (50+) makes management difficult and dilutes budget. Too few (1-2) means poor relevance. Each ad group should have thematically related keywords and matching ads." } },
    { "@type": "Question", name: "Why is my CTR declining even though I haven't changed anything?", acceptedAnswer: { "@type": "Answer", text: "Most common reasons: seasonality, new competitors, ad fatigue (same ad running too long), changes in SERP layout, or Quality Score decline. Solution: refresh ads regularly (every 4-6 weeks), monitor Auction Insights, and test new variants." } },
    { "@type": "Question", name: "Should I follow all Google Ads recommendations?", acceptedAnswer: { "@type": "Answer", text: "No. Many recommendations serve Google's goal to increase your spending. Ignore: 'switch to broad match', 'increase budget by 50%', auto-apply changes. Use: RSA recommendations for ads, negative keyword suggestions, and technical improvements." } },
  ]
};

// --- zasto-nema-rezultata ---
const faqSchemaZastoNemaRezultataSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Zašto Google Ads kampanja troši budžet ali nema konverzija?", acceptedAnswer: { "@type": "Answer", text: "Top 3 razloga: 1) Loš conversion tracking (ne pratite prave akcije), 2) Landing page ne konvertuje (spor, nejasan CTA, loš mobile), 3) Pogrešne ključne reči (privlačite ljude bez namere kupovine). Proverite ova tri pre bilo čega drugog." } },
    { "@type": "Question", name: "Koliko dugo čekati pre nego što zaustavim kampanju?", acceptedAnswer: { "@type": "Answer", text: "Minimum 2-3 nedelje sa dovoljnim budžetom (barem 100-200 klikova). Ako posle 500+ klikova nema ni jedne konverzije, problem je gotovo sigurno u landing page-u ili ponudi, ne u kampnji. Smart Bidding treba minimum 2-4 nedelje learning perioda." } },
    { "@type": "Question", name: "Da li je moj budžet premali za rezultate?", acceptedAnswer: { "@type": "Answer", text: "Ako dnevni budžet ne pokriva barem 10-15 klikova, da - budžet je premali. Izračunajte: prosečan CPC × 15 = minimalni dnevni budžet. Za većinu industrija u Srbiji, €10-20/dan je minimum. Za UK/USA, $30-50/dan." } },
    { "@type": "Question", name: "Zašto konkurenti imaju bolje pozicije od mene?", acceptedAnswer: { "@type": "Answer", text: "Ad Rank = Bid × Quality Score × očekivani uticaj assets-a (ranije extensions). Ako konkurent ima bolji QS (bolji oglas i LP), može platiti manje po kliku i imati višu poziciju. Proverite Quality Score - ako je ispod 6, tu je problem. Takođe proverite da koristite sve relevantne assets." } },
  ]
};

const faqSchemaZastoNemaRezultataEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Why is my Google Ads campaign spending budget but getting no conversions?", acceptedAnswer: { "@type": "Answer", text: "Top 3 reasons: 1) Poor conversion tracking (not tracking the right actions), 2) Landing page doesn't convert (slow, unclear CTA, poor mobile experience), 3) Wrong keywords (attracting people without purchase intent). Check these three before anything else." } },
    { "@type": "Question", name: "How long should I wait before stopping a campaign?", acceptedAnswer: { "@type": "Answer", text: "Minimum 2-3 weeks with sufficient budget (at least 100-200 clicks). If after 500+ clicks there's not a single conversion, the problem is almost certainly the landing page or offer, not the campaign. Smart Bidding needs a minimum 2-4 week learning period." } },
    { "@type": "Question", name: "Is my budget too small for results?", acceptedAnswer: { "@type": "Answer", text: "If your daily budget doesn't cover at least 10-15 clicks, yes — budget is too small. Calculate: average CPC × 15 = minimum daily budget. For most industries, $30-50/day is the minimum for meaningful results." } },
    { "@type": "Question", name: "Why do competitors have better positions than me?", acceptedAnswer: { "@type": "Answer", text: "Ad Rank = Bid × Quality Score × expected impact of assets (formerly extensions). If a competitor has better QS (better ad and LP), they can pay less per click and have a higher position. Check your Quality Score — if it's below 6, that's the problem. Also ensure you're using all relevant assets." } },
  ]
};

// --- ecommerce-vs-b2b ---
const faqSchemaEcommerceVsB2BSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Koji tip kampanje je bolji za eCommerce?", acceptedAnswer: { "@type": "Answer", text: "Shopping kampanje su #1 za eCommerce jer prikazuju sliku, cenu i naziv proizvoda direktno u rezultatima. Performance Max je drugi izbor za širi reach. Search kampanje dopunjuju za brendirane i long-tail ključne reči." } },
    { "@type": "Question", name: "Kako meriti uspeh B2B kampanja?", acceptedAnswer: { "@type": "Answer", text: "B2B se meri po Cost per Lead (CPL), Lead Quality Score, MQL-to-SQL conversion rate, i Customer Acquisition Cost (CAC). Za razliku od eCommerce gde je ROAS jasan, B2B zahteva praćenje celog funnel-a od klika do zatvorenog posla." } },
    { "@type": "Question", name: "Da li Google Ads radi za B2B sa dugim sales cycle-om?", acceptedAnswer: { "@type": "Answer", text: "Da, ali zahteva drugačiji pristup. Koristite remarketing liste za nurturing, offline conversion import za praćenje SQL/zatvorenih poslova, i Demand Gen kampanje za top-of-funnel. Očekujte 3-6 meseci pre pune optimizacije jer trebate podatke o zatvaranju." } },
    { "@type": "Question", name: "Koliki budžet je potreban za eCommerce vs B2B?", acceptedAnswer: { "@type": "Answer", text: "eCommerce: minimum €500-1.000/mesečno za Shopping kampanje. B2B: minimum €1.500-2.500/mesečno za Search. CPC je često viši za B2B (€2,00-10,00+ naspram €0,30-1,50 za eCommerce), ali vrednost jednog klijenta je mnogo veća." } },
  ]
};

const faqSchemaEcommerceVsB2BEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Which campaign type is best for eCommerce?", acceptedAnswer: { "@type": "Answer", text: "Shopping campaigns are #1 for eCommerce because they show product image, price, and title directly in search results. Performance Max is a second choice for broader reach. Search campaigns complement for branded and long-tail keywords." } },
    { "@type": "Question", name: "How do I measure B2B campaign success?", acceptedAnswer: { "@type": "Answer", text: "B2B is measured by Cost per Lead (CPL), Lead Quality Score, MQL-to-SQL conversion rate, and Customer Acquisition Cost (CAC). Unlike eCommerce where ROAS is clear, B2B requires tracking the entire funnel from click to closed deal." } },
    { "@type": "Question", name: "Does Google Ads work for B2B with long sales cycles?", acceptedAnswer: { "@type": "Answer", text: "Yes, but it requires a different approach. Use remarketing lists for nurturing, offline conversion import for tracking SQL/closed deals, and Demand Gen campaigns for top-of-funnel. Expect 3-6 months before full optimization as you need closing data." } },
    { "@type": "Question", name: "What budget is needed for eCommerce vs B2B?", acceptedAnswer: { "@type": "Answer", text: "eCommerce: minimum $1,000-2,000/month for Shopping campaigns. B2B: minimum $2,500-4,000/month for Search. CPC is often higher for B2B ($3.00-15.00+ vs $0.50-2.50 for eCommerce), but the value of one client is much greater." } },
  ]
};

// --- google-ads-audit-vodic ---
const faqSchemaAuditSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Koliko često treba raditi Google Ads audit?", acceptedAnswer: { "@type": "Answer", text: "Kompletan audit svakih 3-6 meseci. Mini audit (tracking, budžet, top kampanje) mesečno. Obavezan audit pri preuzimanju naloga od prethodne agencije, pre skaliranja budžeta, i kad performanse značajno padnu." } },
    { "@type": "Question", name: "Šta proveriti prvo u Google Ads auditu?", acceptedAnswer: { "@type": "Answer", text: "1) Conversion tracking (da li radi tačno), 2) Search Terms report (gde se troši budžet), 3) Quality Score distribucija, 4) Wasted spend (irelevantni klikovi), 5) Landing page iskustvo. Ovih 5 tačaka pokrivaju 80% problema." } },
    { "@type": "Question", name: "Koliko košta Google Ads audit?", acceptedAnswer: { "@type": "Answer", text: "Profesionalan audit košta od €200 do €1500+ u zavisnosti od veličine naloga, broja kampanja i dubine analize (basic €200-350, standard €400-700). Kod mesečnog ad spend-a od €5K+ audit se obično isplati jer u proseku otkriva 15-25% wasted spend-a." } },
    { "@type": "Question", name: "Mogu li sam da uradim audit svog naloga?", acceptedAnswer: { "@type": "Answer", text: "Da, sa dobrom checklistom možete pokriti osnove. Proverite: conversion tracking, negativne ključne reči, Quality Score, search terms, bid strategiju, i assets. Za dublje analize (attribution, audience overlap, incrementality) preporučuje se stručnjak." } },
    { "@type": "Question", name: "Šta raditi posle audita?", acceptedAnswer: { "@type": "Answer", text: "Napravite prioritizovanu listu problema po uticaju: 1) Hitno (tracking, budget waste), 2) Visok prioritet (strukturalne promene, bid strategija), 3) Optimizacija (QS, oglasi, assets). Implementirajte u tom redosledu, ne sve odjednom." } },
  ]
};

const faqSchemaAuditEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How often should I do a Google Ads audit?", acceptedAnswer: { "@type": "Answer", text: "Full audit every 3-6 months. Mini audit (tracking, budget, top campaigns) monthly. Mandatory audit when taking over an account from a previous agency, before scaling budget, and when performance drops significantly." } },
    { "@type": "Question", name: "What should I check first in a Google Ads audit?", acceptedAnswer: { "@type": "Answer", text: "1) Conversion tracking (is it working accurately), 2) Search Terms report (where budget is being spent), 3) Quality Score distribution, 4) Wasted spend (irrelevant clicks), 5) Landing page experience. These 5 points cover 80% of problems." } },
    { "@type": "Question", name: "How much does a Google Ads audit cost?", acceptedAnswer: { "@type": "Answer", text: "A professional audit ranges from $300 to $2,500+ depending on account size, number of campaigns, and audit depth (basic $300-500, standard $600-1,200). At $5K+ monthly ad spend an audit usually pays for itself, since it typically uncovers 15-25% wasted spend." } },
    { "@type": "Question", name: "Can I audit my own account?", acceptedAnswer: { "@type": "Answer", text: "Yes, with a good checklist you can cover the basics. Check: conversion tracking, negative keywords, Quality Score, search terms, bid strategy, and assets. For deeper analysis (attribution, audience overlap, incrementality) an expert is recommended." } },
    { "@type": "Question", name: "What should I do after an audit?", acceptedAnswer: { "@type": "Answer", text: "Create a prioritized list of issues by impact: 1) Urgent (tracking, budget waste), 2) High priority (structural changes, bid strategy), 3) Optimization (QS, ads, assets). Implement in that order, not all at once." } },
  ]
};

// --- kako-poceti-google-ads ---
const faqSchemaKakoPocetiSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Da li se Google Ads isplati za male biznise?", acceptedAnswer: { "@type": "Answer", text: "Da, Google Ads je jedan od najisplativijih kanala za male biznise jer plaćate samo kada neko klikne na vaš oglas. Ključ je precizno targetiranje - koristite lokalne ključne reči, postavite geografski targeting i počnite sa budžetom od €10-20 dnevno. Mali biznisi sa lokalnom uslugom (vodoinstalater, šlep služba, stomatolog) često imaju najbolji ROI jer je konkurencija manja." } },
    { "@type": "Question", name: "Koliko vremena treba da se vide rezultati sa Google Ads?", acceptedAnswer: { "@type": "Answer", text: "Prve klikove i posetioce videćete istog dana kad pokrenete kampanju. Međutim, za pouzdane podatke o konverzijama potrebno je 2-4 nedelje. Google-ov algoritam koristi prvih 14 dana za učenje (learning period), a prava optimizacija počinje posle 30 dana kada imate dovoljno podataka za donošenje odluka." } },
    { "@type": "Question", name: "Da li mogu sam da vodim Google Ads?", acceptedAnswer: { "@type": "Answer", text: "Da, možete, ali budite spremni da uložite vreme u učenje. Google Skillshop nudi besplatnu sertifikaciju. Za jednostavne kampanje (jedan proizvod, jedna lokacija) DIY pristup funkcioniše. Za kompleksnije naloge (eCommerce sa 100+ proizvoda, višestruke lokacije, budžet preko €1000/mesec) stručnjak će vam uštedeti novac i vreme." } },
    { "@type": "Question", name: "Koji je minimalni budžet za Google Ads u Srbiji?", acceptedAnswer: { "@type": "Answer", text: "Tehnički možete početi sa bilo kojim iznosom, ali preporučujem minimum €300-500 mesečno (€10-20 dnevno) za Srbiju. Ispod toga nemate dovoljno podataka za optimizaciju. CPC u Srbiji je obično €1-3 za većinu industrija, što znači da sa €10 dnevno dobijate 3-10 klikova - dovoljno za testiranje." } },
    { "@type": "Question", name: "Da li preporučujete Google Ads za svaki biznis?", acceptedAnswer: { "@type": "Answer", text: "Ne. Google Ads nije za svakoga. Ne preporučujem ako: nemate funkcionalan sajt sa jasnim pozivom na akciju, vaša usluga ima ekstremno nisku maržu, vaša ciljna grupa ne koristi Google za pretragu, ili nemate budžet za minimum 3 meseca testiranja. U tim slučajevima, SEO ili društvene mreže mogu biti bolji prvi korak." } },
  ]
};

const faqSchemaKakoPocetiEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is Google Ads worth it for small businesses?", acceptedAnswer: { "@type": "Answer", text: "Yes, Google Ads is one of the most cost-effective channels for small businesses because you only pay when someone clicks your ad. The key is precise targeting — use local keywords, set geographic targeting, and start with a budget of €10-20 per day. Small businesses with local services (plumber, tow truck, dentist) often see the best ROI because competition is lower." } },
    { "@type": "Question", name: "How long until I see results from Google Ads?", acceptedAnswer: { "@type": "Answer", text: "You'll see your first clicks and visitors the same day you launch your campaign. However, for reliable conversion data you need 2-4 weeks. Google's algorithm uses the first 14 days for learning (learning period), and real optimization begins after 30 days when you have enough data for decision-making." } },
    { "@type": "Question", name: "Can I manage Google Ads myself?", acceptedAnswer: { "@type": "Answer", text: "Yes, you can, but be prepared to invest time in learning. Google Skillshop offers free certification. For simple campaigns (one product, one location) the DIY approach works well. For more complex accounts (eCommerce with 100+ products, multiple locations, budget over €1000/month) an expert will save you money and time." } },
    { "@type": "Question", name: "What's the minimum budget for Google Ads?", acceptedAnswer: { "@type": "Answer", text: "Technically you can start with any amount, but I recommend a minimum of €300-500 per month (€10-20 per day). Below that you won't have enough data for optimization. CPC varies by market — €1-3 in Eastern Europe, €2-8 in Western Europe, €3-15 in the US — so your minimum budget depends on your target market." } },
    { "@type": "Question", name: "Do you recommend Google Ads for every business?", acceptedAnswer: { "@type": "Answer", text: "No. Google Ads isn't for everyone. I don't recommend it if: you don't have a functional website with a clear call-to-action, your service has extremely low margins, your target audience doesn't use Google for search, or you can't commit to at least 3 months of testing budget. In those cases, SEO or social media may be a better first step." } },
  ]
};

// --- ctr-vodic ---
const faqSchemaCtrSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Koliki CTR je dobar u Srbiji?", acceptedAnswer: { "@type": "Answer", text: "Za Search kampanje dobar CTR je 5-10%, dok je prosek oko 2-3%. U uskim nišama, sa specifičnim ključnim rečima u zatvorenim match tipovima (exact, phrase), CTR ide na 10-15%, a preko 20% je izuzetak. To su brojke iz naloga koje vodim, ne zvaničan benchmark. Najbolji referentni okvir je account benchmark u vašem nalogu." } },
    { "@type": "Question", name: "Zašto mi pada CTR?", acceptedAnswer: { "@type": "Answer", text: "Najčešći razlozi: nova konkurencija (proverite Auction Insights), zastareli oglasi (osvežite copy), loši search terms (proverite Search Terms Report), ili sezonalnost. Koristite moj 3-step dijagnostički proces: Search Terms → Ad Copy → Auction Insights." } },
    { "@type": "Question", name: "Da li CTR utiče na cenu klika?", acceptedAnswer: { "@type": "Answer", text: "Da, indirektno. CTR utiče na Expected CTR, koji je komponenta Quality Score-a. Viši Quality Score obično znači niži CPC za istu poziciju. Google ne objavljuje tačnu formulu, pa ne očekujte fiksan procenat uštede." } },
    { "@type": "Question", name: "Kako razdvojiti branded od non-branded CTR?", acceptedAnswer: { "@type": "Answer", text: "Kreirajte zasebnu branded kampanju sa vašim brand ključnim rečima. U non-branded kampanjama dodajte vaš brand kao negativnu ključnu reč. Tako ćete imati čiste podatke za obe kategorije i tačan uvid u stvarne performanse." } },
    { "@type": "Question", name: "Kako videti CTR u Google Ads?", acceptedAnswer: { "@type": "Answer", text: "U Google Ads interfejsu, CTR je standardna kolona u pregledu kampanja, ad grupa, oglasa i ključnih reči. Ako ne vidite kolonu, kliknite na \"Columns\" → \"Modify columns\" → dodajte \"CTR\". Možete ga pratiti i kroz Google Ads Editor ili API." } },
  ]
};

const faqSchemaCtrEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a good CTR?", acceptedAnswer: { "@type": "Answer", text: "For Search campaigns a good CTR is 5-10%, while the average sits around 2-3%. In tight niches, with specific keywords in closed match types (exact, phrase), CTR reaches 10-15%, and above 20% is the exception. These are figures from the accounts I manage, not an official benchmark. Your best reference point is the account benchmark in your own account." } },
    { "@type": "Question", name: "Why is my CTR dropping?", acceptedAnswer: { "@type": "Answer", text: "Most common reasons: new competition (check Auction Insights), outdated ads (refresh copy), poor search terms (check Search Terms Report), or seasonality. Use my 3-step diagnostic process: Search Terms → Ad Copy → Auction Insights." } },
    { "@type": "Question", name: "Does CTR affect cost per click?", acceptedAnswer: { "@type": "Answer", text: "Yes, indirectly. CTR affects Expected CTR, which is a component of Quality Score. A higher Quality Score usually means a lower CPC for the same position. Google doesn't publish the exact formula, so don't expect a fixed percentage saving." } },
    { "@type": "Question", name: "How to separate branded from non-branded CTR?", acceptedAnswer: { "@type": "Answer", text: "Create a separate branded campaign with your brand keywords. In non-branded campaigns, add your brand as a negative keyword. This gives you clean data for both categories and accurate insight into actual performance." } },
    { "@type": "Question", name: "How to view CTR in Google Ads?", acceptedAnswer: { "@type": "Answer", text: "In the Google Ads interface, CTR is a standard column in the campaigns, ad groups, ads, and keywords overview. If you don't see the column, click \"Columns\" → \"Modify columns\" → add \"CTR\". You can also track it through Google Ads Editor or API." } },
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
      acceptedAnswer: { "@type": "Answer", text: "Either the list hasn't crossed the delivery threshold yet, the event it depends on isn't reaching GA4, or the membership window is shorter than actual customer behaviour. Check in that order — threshold, then event, then window." }
    },
    {
      "@type": "Question",
      name: "How long should I wait before using a new audience?",
      acceptedAnswer: { "@type": "Answer", text: "Two to four weeks. Before that, the data sitting in Observation doesn't have enough members to mean anything." }
    },
    {
      "@type": "Question",
      name: "Do I need the Admin API, or does the UI work fine?",
      acceptedAnswer: { "@type": "Answer", text: "The UI works for everything except scale. At 25 lists, the API saves hours and gives you repeatability, but the UI can do two things the API can't: LTV percentile targeting and predictive audience templates." }
    },
    {
      "@type": "Question",
      name: "What's the maximum membership window?",
      acceptedAnswer: { "@type": "Answer", text: "540 days. There is no longer option in GA4, no matter how long your actual purchase cycle runs." }
    },
    {
      "@type": "Question",
      name: "What if I only sell one brand?",
      acceptedAnswer: { "@type": "Answer", text: "Replace the brand affinity pillar with product categories instead. The logic stays identical — only the scope tag changes." }
    },
    {
      "@type": "Question",
      name: "Does this work for lead gen, not just ecommerce?",
      acceptedAnswer: { "@type": "Answer", text: "The lifecycle, intent, and value layers carry over. Replenishment doesn't, because there's no consumption cycle to anchor it to — and that pillar is arguably half of this framework's value for a repeat-purchase business." }
    },
    {
      "@type": "Question",
      name: "Can these audiences go into Performance Max?",
      acceptedAnswer: { "@type": "Answer", text: "As a signal, yes. As a targeting guarantee, no. PMax uses an audience as an input the algorithm weighs, not as a fence around who sees the ad." }
    },
    {
      "@type": "Question",
      name: "What if my item_brand field is empty?",
      acceptedAnswer: { "@type": "Answer", text: "Fall back to a page_location pattern or item_category. Check this before you build the brand affinity lists, not after." }
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
      acceptedAnswer: { "@type": "Answer", text: "Tri moguća razloga, u redosledu kojim ih proveravam. Ili nisu prešle prag isporuke (1.000 za Search/Shopping, 100 za Display/YouTube/Demand Gen). Ili event na kome počivaju ne stiže u GA4 - proveri Realtime. Ili je membership prozor kraći od stvarnog ponašanja kupaca. Proveravam ovim redosledom, ne nasumično." }
    },
    {
      "@type": "Question",
      name: "Koliko dugo da čekam pre nego što ih koristim?",
      acceptedAnswer: { "@type": "Answer", text: "Dve do četiri nedelje. GA4 puni listu od trenutka kreiranja plus otprilike 30 dana unazad - nema retroaktivnog punjenja preko toga. Pre te dve do četiri nedelje, podaci u Observation-u nemaju dovoljno članova da bilo šta znače." }
    },
    {
      "@type": "Question",
      name: "Da li mi treba Admin API ili može kroz UI?",
      acceptedAnswer: { "@type": "Answer", text: "UI radi za sve osim za obim. Na 25 lista, API štedi sate i daje ponovljivost. Ali UI ume dve stvari koje API ne ume: prave LTV percentile template-e i predictive audience template-e. Za te dve, ideš u UI bez obzira koliko lista imaš." }
    },
    {
      "@type": "Question",
      name: "Koji je maksimalni membership prozor?",
      acceptedAnswer: { "@type": "Answer", text: "540 dana. To je tvrd plafon u GA4 - duže od toga ne postoji, koliko god ti realan ciklus kupovine bio dug. Za kategorije sa dužim ciklusom, ta razlika se rešava van GA4, obično u CRM-u." }
    },
    {
      "@type": "Question",
      name: "Šta ako prodajem jedan brend?",
      acceptedAnswer: { "@type": "Answer", text: "BRD stub zameni kategorijama proizvoda umesto brendovima - scope oznaka postaje kategorija (na primer SER za serum) umesto BR1/BR2. Logika ostaje potpuno ista." }
    },
    {
      "@type": "Question",
      name: "Da li ovo radi za lead-gen, ne samo ecommerce?",
      acceptedAnswer: { "@type": "Answer", text: "Lifecycle, Intent i Value slojevi rade, sa event imenima prilagođenim lead-gen funnel-u. Replenishment ne radi, jer nema ciklusa potrošnje da se meri - i to je pola vrednosti ovog frameworka koje lead-gen nalog ne dobija." }
    },
    {
      "@type": "Question",
      name: "Da li publike smeju u PMax?",
      acceptedAnswer: { "@type": "Answer", text: "Kao signal, da. Kao garancija targetinga, ne. Performance Max koristi publiku kao ulazni signal za algoritam, ne kao ogradu koja fizički ograničava kome se oglas prikazuje." }
    },
    {
      "@type": "Question",
      name: "Šta ako je moj item_brand prazan?",
      acceptedAnswer: { "@type": "Answer", text: "Fallback je page_location pattern (URL sadrži brand slug) ili item_category. Ovo proveravaš pre gradnje BRD stuba, ne posle." }
    }
  ]
};

const faqSchemaSearchKampanjeSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Koliko košta vođenje Google Search kampanja?", acceptedAnswer: { "@type": "Answer", text: "Kao samostalan kanal, Search budžet kreće od €500/mesečno. U okviru punog upravljanja nalogom (Search + Shopping/PMax + remarketing), fee za vođenje kreće od €700/mesečno. Jednokratna konsultacija je €150/sat, korisna ako želite drugo mišljenje o postojećoj kampanji bez preuzimanja upravljanja. Tačna cena zavisi od obima naloga i kompleksnosti - dobijate je posle uvida u nalog, ne unapred." } },
    { "@type": "Question", name: "Da li mi treba agencija za Search kampanje?", acceptedAnswer: { "@type": "Answer", text: "Zavisi od budžeta i vremena koje imate. Search je najpristupačniji kanal za samostalno vođenje - struktura je jasnija nego kod PMax-a, a interfejs daje dosta uvida (search termovi, Quality Score, Auction Insights). Ako imate vremena za nedeljni pregled i manji budžet, možete početi sami. Agencija ili konsultant ima smisla kad budžet raste, kad AI Max i broad match traže pažljivije praćenje, ili kad jednostavno nemate vreme da to radite konzistentno svake nedelje." } },
    { "@type": "Question", name: "Šta je AI Max i da li moram da ga koristim?", acceptedAnswer: { "@type": "Answer", text: "AI Max je paket funkcija za Search kampanje - search themes, URL expansion, AI-generisan copy i AI Brief kroz Gemini. Nije obavezan sam po sebi, ali ako koristite DSA, automatically created assets ili broad match na nivou kampanje, Google vas automatski nadograđuje na njega od septembra 2026, bez vašeg zahteva. Ako to nije ono što želite, morate promeniti konfiguraciju kampanje pre nego što nadogradnja stigne, ne posle." } },
    { "@type": "Question", name: "Koliko dugo dok Search kampanja ne proradi?", acceptedAnswer: { "@type": "Answer", text: "Prvi klikovi i podaci stižu u roku od par dana. Prve konverzije zavise od volumena upita i budžeta - kod nekih naloga za nedelju dana, kod drugih (niska pretraga, nišni proizvod) treba duže. Smart Bidding treba minimum 2-4 nedelje i dovoljan broj konverzija da počne stabilno da optimizuje. Ne mogu unapred reći tačan datum kad će vaš nalog \"proraditi\" - to zavisi od kategorije, konkurencije i toga da li je merenje ispravno postavljeno od prvog dana. Ono što mogu reći: ako posle 6-8 nedelja sa ispravnim merenjem i realnim budžetom i dalje nema konverzija, problem nije strpljenje nego nešto u strukturi, ponudi ili tracking-u." } },
    { "@type": "Question", name: "Broad match ili phrase match 2026?", acceptedAnswer: { "@type": "Answer", text: "Nema univerzalnog odgovora, zavisi od faze naloga. Ako tek počinjete i imate malo conversion podataka, phrase ili exact daju više kontrole dok gradite istoriju. Ako imate stabilan volumen konverzija, jak Smart Bidding target i - najvažnije - disciplinu da redovno pregledate search termove, broad match može doneti dodatni doseg koji phrase/exact propuštaju. Broad match bez redovnog pregleda je najčešći način da se budžet potroši na irelevantne upite, pogotovo kad se doda AI Max na vrh." } },
  ]
};

const faqSchemaSearchKampanjeEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does managing Google Search campaigns cost?", acceptedAnswer: { "@type": "Answer", text: "As a standalone channel, Search budget starts at €500/month. As part of full account management (Search + Shopping/PMax + remarketing), management fees start at €700/month. A one-off consultation is €150/hour — useful if you want a second opinion on an existing campaign without handing over management. The exact price depends on account size and complexity — you get it after I look at the account, not before." } },
    { "@type": "Question", name: "Do I need an agency for Search campaigns?", acceptedAnswer: { "@type": "Answer", text: "Depends on your budget and time. Search is the most accessible channel to run yourself — the structure is clearer than PMax, and the interface gives you plenty of visibility (search terms, Quality Score, Auction Insights). If you have time for a weekly review and a smaller budget, you can start solo. An agency or consultant makes sense once budget grows, once AI Max and broad match need closer monitoring, or when you simply don't have time to do it consistently every week." } },
    { "@type": "Question", name: "What is AI Max, and do I have to use it?", acceptedAnswer: { "@type": "Answer", text: "AI Max is a bundle of features for Search campaigns — search themes, URL expansion, AI-generated copy, and an AI Brief through Gemini. It isn't mandatory on its own, but if you're running DSA, automatically created assets, or campaign-level broad match, Google automatically upgrades you to it starting September 2026, without you asking. If that's not what you want, you need to change the campaign configuration before the upgrade lands, not after." } },
    { "@type": "Question", name: "How long until a Search campaign starts working?", acceptedAnswer: { "@type": "Answer", text: "First clicks and data arrive within a few days. First conversions depend on query volume and budget — for some accounts that's within a week, for others (low search volume, niche product) it takes longer. Smart Bidding needs a minimum of 2–4 weeks and enough conversions to start optimizing reliably. I can't tell you upfront the exact date your account will \"start working\" — that depends on category, competition, and whether measurement was set up correctly from day one. What I can say: if after 6–8 weeks with correct measurement and a realistic budget there are still no conversions, the problem isn't patience — it's something in the structure, the offer, or the tracking." } },
    { "@type": "Question", name: "Broad match or phrase match in 2026?", acceptedAnswer: { "@type": "Answer", text: "There's no universal answer — it depends on the account's stage. If you're just starting out with little conversion data, phrase or exact give you more control while you build history. If you have steady conversion volume, a strong Smart Bidding target, and — most importantly — the discipline to review search terms regularly, broad match can bring extra reach that phrase/exact miss. Broad match without regular review is the fastest way to burn budget on irrelevant queries, especially once AI Max is layered on top." } },
  ]
};

const faqSchemaDemandGenSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Da li je Demand Gen zamena za Display?", acceptedAnswer: { "@type": "Answer", text: "Delimično se preklapaju, ali nisu isto. Standardni Display pokriva mnogo širu mrežu sajtova i aplikacija preko banner formata. Demand Gen je uži, fokusiran na tri feed-native plasmana - YouTube, Discover, Gmail - sa vizuelnim formatima koji su prirodnije uklopljeni u sadržaj. Za većinu naloga koje vodim, Demand Gen je danas prirodniji izbor za prospecting nego klasičan Display, ali Display ostaje relevantan za širi remarketing doseg." } },
    { "@type": "Question", name: "Koliki budžet treba za Demand Gen?", acceptedAnswer: { "@type": "Answer", text: "Orijentacioni prag koji ja koristim je otprilike 1.000 EUR mesečno za sam taj kanal. Ovo nije univerzalna granica niti obećanje rezultata - zavisi od cene proizvoda, konkurencije i toga koliko konverzija vam treba da algoritam nauči. Ispod tog nivoa kampanja često ne dobije dovoljno prostora da pokaže šta stvarno radi na tri plasmana odjednom." } },
    { "@type": "Question", name: "Demand Gen ili PMax?", acceptedAnswer: { "@type": "Answer", text: "Nije uvek pitanje ili-ili. PMax uključuje Search i Shopping pored vizuelnih kanala, pa je šire rešenje sa manje kontrole. Demand Gen je uži i daje vam više kontrole nad plasmanom i kreativom, ali ne dira Search uopšte. Ako već imate PMax koji radi dobro, Demand Gen retko donosi dovoljno dodatne vrednosti da opravda dupliranje budžeta - proverite pre svega kroz A/B test inkrementalnosti. Ako nemate PMax i tražite fokusiran prospecting kanal sa jačim kreativnim usmerenjem, Demand Gen je razumniji prvi korak." } },
    { "@type": "Question", name: "Da li radi za B2B?", acceptedAnswer: { "@type": "Answer", text: "Može, ali je teže nego za eCommerce. B2B proizvod retko ima jak vizuelni element - teško je napraviti ubedljivu sliku ili video za, recimo, softver za upravljanje zalihama. Ako imate customer match listu postojećih klijenata za lookalike i budžet za makar osnovnu video produkciju, ima smisla probati kao dopunski kanal uz Search. Kao prvi i jedini kanal za B2B lead-gen, ne bih ga preporučio." } },
    { "@type": "Question", name: "Kako se meri uspeh Demand Gen kampanje?", acceptedAnswer: { "@type": "Answer", text: "Ne samo brojem konverzija koje kampanja sama sebi prijavljuje u interfejsu. Pratite da li ukupan broj konverzija na celom nalogu raste kad je kampanja uključena, u odnosu na period bez nje - to je test inkrementalnosti, i za njega postoji ugrađen A/B framework od 2026. Ako uključite view-through optimizaciju, budite svesni da ona širi definiciju \"konverzije\" i da će prijavljeni broj rasti bez obzira da li stvarni rezultat raste. Gledajte poslovni ishod, ne samo dashboard." } },
  ]
};

const faqSchemaDemandGenEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is Demand Gen a replacement for Display?", acceptedAnswer: { "@type": "Answer", text: "They overlap partly, but they're not the same thing. Standard Display covers a much wider network of sites and apps through banner formats. Demand Gen is narrower, focused on three feed-native placements — YouTube, Discover, Gmail — with visual formats that fit more naturally into content. For most accounts I run, Demand Gen is now the more natural choice for prospecting than classic Display, but Display still has a role for broader remarketing reach." } },
    { "@type": "Question", name: "How much budget does Demand Gen need?", acceptedAnswer: { "@type": "Answer", text: "The rough threshold I use is around EUR 1,000/month for that channel alone. This isn't a universal cutoff or a promise of results — it depends on product price, competition, and how many conversions the algorithm needs to learn from. Below that level, a campaign often doesn't get enough room to show what it can actually do across three placements at once." } },
    { "@type": "Question", name: "Demand Gen or PMax?", acceptedAnswer: { "@type": "Answer", text: "It's not always an either-or question. PMax includes Search and Shopping alongside the visual channels, so it's the broader solution with less control. Demand Gen is narrower and gives you more control over placement and creative, but it doesn't touch Search at all. If PMax is already running well for you, Demand Gen rarely adds enough extra value to justify duplicating budget — check with an incrementality A/B test before deciding. If you don't run PMax and want a focused prospecting channel with a stronger creative lean, Demand Gen is the more sensible first step." } },
    { "@type": "Question", name: "Does it work for B2B?", acceptedAnswer: { "@type": "Answer", text: "It can, but it's harder than for eCommerce. A B2B product rarely has a strong visual hook — it's difficult to make a compelling image or video for, say, inventory management software. If you have a customer match list of existing clients to build lookalikes from and budget for at least basic video production, it's worth testing as a supplementary channel alongside Search. As the first and only channel for B2B lead gen, I wouldn't recommend it." } },
    { "@type": "Question", name: "How do you measure the success of a Demand Gen campaign?", acceptedAnswer: { "@type": "Answer", text: "Not just by the conversion count the campaign reports in the interface. Watch whether total conversions across the whole account go up when the campaign is running, versus a period without it — that's an incrementality test, and there's a built-in A/B framework for it since 2026. If you turn on view-through optimization, be aware it widens the definition of \"conversion,\" so the reported number will climb regardless of whether the actual result is growing. Look at the business outcome, not just the dashboard." } },
  ]
};

function getFaqSchema(slug: string, locale: string) {
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

/* ── HowTo Schemas ── */

// --- conversion-tracking-vodic ---
const howToSchemaConversionTrackingSR = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Kako postaviti Google Ads conversion tracking (GTM + GA4 + Enhanced Conversions)",
  step: [
    { "@type": "HowToStep", name: "Postavite Google Tag Manager container", text: "Kreirajte GTM account i container, instalirajte container snippet u <head> i <body> na svim stranicama sajta." },
    { "@type": "HowToStep", name: "Dodajte Conversion Linker tag", text: "U GTM kreirajte tag tipa Conversion Linker sa trigger-om All Pages. Ovo je obavezno za cross-domain i cross-device tracking." },
    { "@type": "HowToStep", name: "Povežite GA4 property", text: "Kreirajte GA4 property i instalirajte GA4 tag kroz GTM ili direktno. U GA4 označite događaje purchase i generate_lead kao key events. Tek kada ih uvezete u Google Ads, tamo postaju conversion actions." },
    { "@type": "HowToStep", name: "Kreirajte Google Ads conversion action", text: "U Google Ads → Goals → Conversions → Summary → + New conversion action. Kopirajte Conversion ID i Conversion Label." },
    { "@type": "HowToStep", name: "Postavite Google Ads Conversion tag u GTM", text: "Kreirajte tag tipa Google Ads Conversion Tracking, unesite ID i Label, postavite trigger (npr. Page URL contains 'thank-you' ili Form ID equals 'contact-form')." },
    { "@type": "HowToStep", name: "Uključite Enhanced Conversions", text: "U Google Ads → Goals → Conversions → Settings → Enhanced conversions → Turn on. Izaberite GTM metod i mapirajte user data (email, phone, address) kroz data layer. Za EEA i UK saobraćaj Enhanced Conversions rade samo kada je ad_user_data granted." },
    { "@type": "HowToStep", name: "Testirajte u GTM Preview mode", text: "Kliknite Preview u GTM, prođite conversion flow na sajtu i proverite da li tagovi rade. Proverite i Google Tag Assistant Chrome extension." },
    { "@type": "HowToStep", name: "Publish i verifikacija", text: "Objavite GTM container, napravite test konverziju i proverite da li se pojavljuje u Google Ads (3-6 sati delay je normalno)." },
  ],
};

const howToSchemaConversionTrackingEN = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to set up Google Ads conversion tracking (GTM + GA4 + Enhanced Conversions)",
  step: [
    { "@type": "HowToStep", name: "Set up Google Tag Manager container", text: "Create GTM account and container, install container snippet in <head> and <body> on all pages." },
    { "@type": "HowToStep", name: "Add Conversion Linker tag", text: "In GTM create a Conversion Linker tag type with an All Pages trigger. This is mandatory for cross-domain and cross-device tracking." },
    { "@type": "HowToStep", name: "Connect GA4 property", text: "Create GA4 property and install GA4 tag via GTM or directly. In GA4, mark purchase and generate_lead as key events. They only become conversion actions once you import them into Google Ads." },
    { "@type": "HowToStep", name: "Create Google Ads conversion action", text: "In Google Ads → Goals → Conversions → Summary → + New conversion action. Copy Conversion ID and Conversion Label." },
    { "@type": "HowToStep", name: "Set up Google Ads Conversion tag in GTM", text: "Create tag type Google Ads Conversion Tracking, enter ID and Label, set trigger (e.g., Page URL contains 'thank-you' or Form ID equals 'contact-form')." },
    { "@type": "HowToStep", name: "Enable Enhanced Conversions", text: "In Google Ads → Goals → Conversions → Settings → Enhanced conversions → Turn on. Choose GTM method and map user data (email, phone, address) via data layer. On EEA and UK traffic, Enhanced Conversions only run when ad_user_data is granted." },
    { "@type": "HowToStep", name: "Test in GTM Preview mode", text: "Click Preview in GTM, go through the conversion flow on the site and verify tags fire. Also check Google Tag Assistant Chrome extension." },
    { "@type": "HowToStep", name: "Publish and verify", text: "Publish GTM container, make a test conversion and verify it appears in Google Ads (3-6 hour delay is normal)." },
  ],
};

// --- google-ads-audit-vodic ---
const howToSchemaAuditSR = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Brzi Google Ads audit za 30 minuta",
  step: [
    { "@type": "HowToStep", name: "Search Terms Report (5 min)", text: "Pregledajte top 30 search terms po trošku za poslednjih 30 dana: da li su relevantni? Dodajte negativne ključne reči za sve irelevantne sa €10+ spend-om." },
    { "@type": "HowToStep", name: "Budget allocation (3 min)", text: "Proverite da li je profitabilna kampanja 'Limited by budget'. Realokujte budžet iz loših kampanja." },
    { "@type": "HowToStep", name: "Conversion tracking check (5 min)", text: "Proverite da li tracking radi - uporedite Google Ads konverzije sa GA4/CRM-om (maksimalno 10-15% razlike je prihvatljivo)." },
    { "@type": "HowToStep", name: "Top keywords performance (5 min)", text: "Pregledajte top 15 keywords po trošku: da li je Quality Score 6+? Da li je CPA prihvatljiv? Pauzirajte keywords sa CPA 2x+ iznad targeta i 50+ klikova." },
    { "@type": "HowToStep", name: "Ad performance (4 min)", text: "Identifikujte Ad Groups sa CTR ispod 2% (Search) ili 0.5% (Display). Dopunite RSA sa više headlines ili kreirajte nove oglase." },
    { "@type": "HowToStep", name: "Assets aktivni (2 min)", text: "Proverite da li su svi assets (sitelinks, callouts, structured snippets) aktivni i serving. Dodajte ako fale." },
    { "@type": "HowToStep", name: "Audience lists i exclusions (3 min)", text: "Proverite da li remarketing liste imaju 1000+ korisnika i da li converters exclusion funkcioniše. Pregledajte segment report." },
    { "@type": "HowToStep", name: "Campaign settings quick scan (3 min)", text: "Proverite location targeting, networks podešavanja (Display isključen u Search kampanjama) i da li su schedule adjustments aktivni." },
  ],
};

const howToSchemaAuditEN = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Quick Google Ads audit in 30 minutes",
  step: [
    { "@type": "HowToStep", name: "Search Terms Report (5 min)", text: "Review top 30 search terms by cost for the last 30 days: are they relevant? Add negatives for all irrelevant terms with $15+ spend." },
    { "@type": "HowToStep", name: "Budget allocation (3 min)", text: "Check whether a profitable campaign is 'Limited by budget'. Reallocate budget from underperforming campaigns." },
    { "@type": "HowToStep", name: "Conversion tracking check (5 min)", text: "Verify tracking is working — compare Google Ads conversions with GA4/CRM (max 10-15% difference is acceptable)." },
    { "@type": "HowToStep", name: "Top keywords performance (5 min)", text: "Review top 15 keywords by cost: is Quality Score 6+? Is CPA acceptable? Pause keywords with CPA 2x+ above target and 50+ clicks." },
    { "@type": "HowToStep", name: "Ad performance (4 min)", text: "Identify Ad Groups with CTR below 2% (Search) or 0.5% (Display). Complete RSAs with more headlines or create new ads." },
    { "@type": "HowToStep", name: "Assets active (2 min)", text: "Check that all assets (sitelinks, callouts, structured snippets) are active and serving. Add any that are missing." },
    { "@type": "HowToStep", name: "Audience lists & exclusions (3 min)", text: "Check that remarketing lists have 1000+ users and that converters exclusion is working. Review the segment report." },
    { "@type": "HowToStep", name: "Campaign settings quick scan (3 min)", text: "Verify location targeting, network settings (Display OFF in Search campaigns), and that schedule adjustments are active." },
  ],
};

// --- google-ads-optimizacija ---
const howToSchemaOptimizacijaSR = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Kako optimizovati Google Ads kampanje",
  step: [
    { "@type": "HowToStep", name: "Optimizujte strukturu naloga", text: "Odvojite Brand i Non-Brand kampanje, organizujte tematski fokusirane Ad Groups, uvedite konzistentnu naming konvenciju i strukturirajte kampanje po fazi customer journey-a." },
    { "@type": "HowToStep", name: "Optimizujte ključne reči", text: "Radite Search Terms Report mining nedeljno, gradite listu negativnih ključnih reči kao fundament, prilagodite match types strategiju i konsolidujte duplikate." },
    { "@type": "HowToStep", name: "Optimizujte oglase", text: "Primenite RSA best practices sa raznovrsnim headlines, koristite pin strategiju samo kad je neophodno, aktivirajte sve relevantne ad extensions i uskladite landing page sa porukom oglasa." },
    { "@type": "HowToStep", name: "Optimizujte bidding strategiju", text: "Izaberite Manual CPC ili Smart Bidding u zavisnosti od broja konverzija, postavite realan Target CPA/ROAS, i podesite dayparting i device bid adjustments." },
    { "@type": "HowToStep", name: "Optimizujte Quality Score", text: "Podignite CTR kao najbrži put ka boljem QS, uskladite keyword → oglas → landing page relevantnost, i poboljšajte brzinu i mobile iskustvo landing stranica." },
    { "@type": "HowToStep", name: "Uvedite nedeljni raspored optimizacije", text: "Ponedeljak: Search Terms review. Utorak: performance review po kampanji. Sreda: ad copy testing. Četvrtak: bid strategy review. Petak: Quality Score audit." },
  ],
};

const howToSchemaOptimizacijaEN = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to optimize Google Ads campaigns",
  step: [
    { "@type": "HowToStep", name: "Optimize account structure", text: "Separate Brand and Non-Brand campaigns, organize thematically focused Ad Groups, introduce a consistent naming convention, and structure campaigns by customer journey stage." },
    { "@type": "HowToStep", name: "Optimize keywords", text: "Mine the Search Terms Report weekly, build a negative keyword list as the foundation, adapt your match types strategy, and consolidate duplicate keywords." },
    { "@type": "HowToStep", name: "Optimize ads", text: "Apply RSA best practices with diverse headlines, use pinning only when necessary, enable all relevant ad extensions, and align landing pages with ad messaging." },
    { "@type": "HowToStep", name: "Optimize bidding strategy", text: "Choose Manual CPC or Smart Bidding based on conversion volume, set a realistic Target CPA/ROAS, and configure dayparting and device bid adjustments." },
    { "@type": "HowToStep", name: "Optimize Quality Score", text: "Raise CTR as the fastest way to improve QS, align keyword → ad → landing page relevance, and improve landing page speed and mobile experience." },
    { "@type": "HowToStep", name: "Set up a weekly optimization schedule", text: "Monday: Search Terms review. Tuesday: per-campaign performance review. Wednesday: ad copy testing. Thursday: bid strategy review. Friday: Quality Score audit." },
  ],
};

// --- kako-poceti-google-ads ---
const howToSchemaKakoPocetiSR = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Kako početi sa Google Ads - od nule do prve kampanje",
  step: [
    { "@type": "HowToStep", name: "Otvorite Google Ads nalog", text: "Idite na ads.google.com i registrujte se sa Gmail nalogom. Koristite Expert mode umesto automatskog podešavanja koje vodi ka Smart kampanjama sa manje kontrole." },
    { "@type": "HowToStep", name: "Povežite sa Google Analytics 4", text: "U podešavanjima naloga povežite GA4 property. Ovo daje uvid u ponašanje korisnika nakon klika - bounce rate, vreme na stranici, putanju kroz sajt." },
    { "@type": "HowToStep", name: "Postavite conversion tracking od prvog dana", text: "Najvažniji korak - bez praćenja konverzija vodite kampanju naslepo. Postavite tracking za svaki važan cilj: kupovinu, poziv, popunjeni formular." },
    { "@type": "HowToStep", name: "Istražite ključne reči", text: "Koristite Google Keyword Planner i fokusirajte se na ključne reči sa namerom kupovine. Za lokalne biznise dodajte geografske modifikatore (npr. 'vodoinstalater Beograd')." },
    { "@type": "HowToStep", name: "Kreirajte prvu Search kampanju", text: "Počnite jednostavno: jedna kampanja, jedna ad grupa, 10-15 usko povezanih ključnih reči, 2-3 oglasa. Koristite phrase ili exact match za početak." },
    { "@type": "HowToStep", name: "Postavite negativne ključne reči", text: "Odmah na startu blokirajte neodgovarajuće pretrage: 'besplatno', 'posao', 'karijera' i imena konkurenata ako ne ciljate konkurentski saobraćaj." },
  ],
};

const howToSchemaKakoPocetiEN = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to start with Google Ads — from zero to your first campaign",
  step: [
    { "@type": "HowToStep", name: "Create your Google Ads account", text: "Go to ads.google.com and set up your account. Switch to Expert Mode immediately — the simplified Smart campaigns mode hides critical controls. Link your Google Analytics 4 property during setup." },
    { "@type": "HowToStep", name: "Set up conversion tracking first", text: "This is non-negotiable. Every optimization decision — bidding strategy, keyword prioritization, budget allocation — depends on accurate conversion data." },
    { "@type": "HowToStep", name: "Research and select your keywords", text: "Use Google Keyword Planner to find keywords your customers actually use. Focus on high-intent, specific terms — a targeted list of 20-50 strong terms outperforms 500 vague ones." },
    { "@type": "HowToStep", name: "Add negative keywords before launch", text: "Before spending anything, add a negative keyword list ('free', 'jobs', 'DIY', 'course') to prevent ads showing on irrelevant searches that never convert." },
    { "@type": "HowToStep", name: "Write your ads and set up extensions", text: "Create Responsive Search Ads with 10-15 headlines and 4 descriptions using real differentiators. Add all relevant extensions: sitelinks, callouts, structured snippets, call extension." },
    { "@type": "HowToStep", name: "Launch, monitor, and optimize weekly", text: "Set your daily budget, use Manual CPC or Maximize Clicks for the first 2-4 weeks, check the Search Terms Report weekly, and switch to Smart Bidding once you have 30-50 conversions." },
  ],
};

// --- google-ads-api-basic-access-vodic ---
const howToSchemaApiBasicAccessSR = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Kako do Google Ads API Basic Access nivoa (sa brand verification pilotom)",
  totalTime: "PT1H",
  step: [
    { "@type": "HowToStep", name: "Generišite developer token u API Center-u", text: "U Google Ads manager (MCC) nalogu otvorite API Center pod Admin sekcijom. Token se generiše odmah, sa Test Account Access nivoom; Google mnogim nalozima automatski dodeli Explorer Access (produkcijski nalozi, 2.880 operacija dnevno, bez planning alata)." },
    { "@type": "HowToStep", name: "Podnesite Basic Access aplikaciju", text: "Iz API Center-a otvorite aplikacionu formu. Budite konkretni oko use case-a, navedite servise koje pozivate, koristite poslovni email na svom domenu i jednostavno opišite tok podataka. Zvaničan review traje do 5 radnih dana." },
    { "@type": "HowToStep", name: "Povežite developer token sa Google Cloud projektom", text: "Napravite bilo koji API poziv koji istovremeno koristi developer token i OAuth kredencijale iz vašeg Cloud projekta. Poziv može ciljati test ili produkcijski nalog; uspeh poziva nije bitan." },
    { "@type": "HowToStep", name: "Završite brand verification na Cloud projektu", text: "U Google Cloud Console pod OAuth consent screen podesite User type na External i status In production, popunite Branding tab, kliknite Verify branding (do 5 minuta) i objavite rezultat u roku od 7 dana. Google pending aplikacije nakon toga pregleda u narednih nekoliko sati." },
  ],
};

const howToSchemaApiBasicAccessEN = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to get Google Ads API Basic Access (with the brand verification pilot)",
  totalTime: "PT1H",
  step: [
    { "@type": "HowToStep", name: "Generate a developer token in the API Center", text: "In your Google Ads manager (MCC) account, open the API Center under Admin. The token is generated instantly at Test Account Access; Google often grants Explorer Access automatically (production accounts, 2,880 operations/day, no planning tools)." },
    { "@type": "HowToStep", name: "Submit the Basic Access application", text: "Open the application form from the API Center. Be specific about your use case, name the services you'll call, use a business email on your own domain, and describe the data flow simply. The official review takes up to 5 business days." },
    { "@type": "HowToStep", name: "Link the developer token to a Google Cloud project", text: "Make any API call that uses your developer token together with OAuth credentials from your Cloud project. The call can target a test or production account; whether it succeeds doesn't matter." },
    { "@type": "HowToStep", name: "Complete brand verification on the Cloud project", text: "In Google Cloud Console under the OAuth consent screen, set User type to External and publishing status to In production, complete the Branding tab, click Verify branding (up to 5 minutes) and publish the result within 7 days. Google then reviews pending applications within a few hours." },
  ],
};

function getHowToSchema(slug: string, locale: string) {
  if (slug === "google-ads-api-basic-access-vodic") {
    return locale === "en" ? howToSchemaApiBasicAccessEN : howToSchemaApiBasicAccessSR;
  }
  if (slug === "conversion-tracking-vodic") {
    return locale === "en" ? howToSchemaConversionTrackingEN : howToSchemaConversionTrackingSR;
  }
  if (slug === "google-ads-audit-vodic") {
    return locale === "en" ? howToSchemaAuditEN : howToSchemaAuditSR;
  }
  if (slug === "google-ads-optimizacija") {
    return locale === "en" ? howToSchemaOptimizacijaEN : howToSchemaOptimizacijaSR;
  }
  if (slug === "kako-poceti-google-ads") {
    return locale === "en" ? howToSchemaKakoPocetiEN : howToSchemaKakoPocetiSR;
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

  const howToSchema = getHowToSchema(canonicalSlug, locale);

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
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
                    alt={post.title}
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
                      ? "5-min personalised video showing where you're losing money. Requires $1,500+/mo ad spend."
                      : "5-min personalizovani video gde pokazujemo gde gubite novac. Uslov: €1.500+/mes ad spend."}
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
              <div className="prose prose-slate prose-lg max-w-none lg:max-w-[72ch] text-gray-700 prose-headings:font-heading prose-headings:scroll-mt-24 prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:md:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-p:text-base prose-p:md:text-lg prose-p:mb-5 prose-p:leading-[1.75] prose-li:text-base prose-li:md:text-lg prose-li:leading-[1.75] prose-a:text-primary prose-a:underline prose-a:underline-offset-2 prose-strong:text-gray-900 prose-hr:my-10 prose-blockquote:border-l-primary prose-blockquote:text-gray-600 prose-img:rounded-xl">
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
