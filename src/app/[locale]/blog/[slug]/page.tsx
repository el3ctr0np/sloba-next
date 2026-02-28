import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { notFound, redirect } from "next/navigation";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { AuthorBox } from "@/components/blog/AuthorBox";
import {
  getPost,
  getAllSlugs,
  getCanonicalSlug,
  getAlternateSlug,
  slugMap
} from "./posts";

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

const faqSchemaGoogleVsMetaSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koji kanal je bolji za početnike?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Search je obično lakši za merenje direktnog ROI-a jer korisnici imaju visoku nameru. Meta zahteva jaku kreativu i dublje razumevanje audience-a. Ali zavisi od vašeg biznisa — ako prodajete vizuelno privlačne proizvode, Meta može biti prirodniji početak."
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
        text: "Idealno da, jer strategija treba biti koordinisana — Meta puni levak, Google zatvara prodaje, remarketing se overlap-uje. Ali specijalizovani freelanceri ili manje agencije za svaki kanal mogu biti bolji u egzekuciji od generalist agencije koja radi sve."
      }
    },
    {
      "@type": "Question",
      name: "Šta ako moj proizvod nije vizuelan — da li Meta ima smisla?",
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
        text: "Da, ali nisu isti kao pre. iOS 14+ je smanjio tracking mogućnosti, što otežava atribuciju i targetiranje. Ali Meta i dalje radi — samo zahteva drugačiji pristup (Conversions API, server-side tracking, širi targeting). Mnogi biznisi i dalje imaju profitabilne Meta kampanje, posebno za remarketing i brand awareness."
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
        text: "Praktično nikakva. Google koristi termin 'remarketing', Meta (Facebook/Instagram) koristi 'retargeting'. Princip je identičan — prikazujete oglase ljudima koji su već bili u kontaktu sa vašim biznisom."
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
        text: "Generalno da, CPC na Google-u je viši. Ali intent korisnika je jači — neko ko pretražuje 'kupi X' je bliži kupovini od nekoga ko scrolla Instagram."
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
    { "@type": "Question", name: "Koliko ključnih reči je potrebno za početak?", acceptedAnswer: { "@type": "Answer", text: "Za jednu kampanju: 30-50 ključnih reči organizovanih u 3-5 Ad Groups. Bolje je početi sa manje i proširiti na osnovu podataka nego pokrenuti previše odjednom bez fokusa." } },
    { "@type": "Question", name: "Exact ili Phrase match za početak kampanje?", acceptedAnswer: { "@type": "Answer", text: "Preporučujem Phrase match za početak. Daje dobar balans kontrole i discovery-ja — vidite šta ljudi zapravo traže. Exact match dodajte kasnije za dokazane performere." } },
    { "@type": "Question", name: "Koliko često pregledati Search Terms?", acceptedAnswer: { "@type": "Answer", text: "Minimum jednom nedeljno. U prva 30 dana nove kampanje — svaka 2-3 dana. Za zrele kampanje sa niskim wasted spend-om, nedeljno je sasvim dovoljno." } },
    { "@type": "Question", name: "Šta ako ključna reč ima 0 pretraga u Keyword Planner?", acceptedAnswer: { "@type": "Answer", text: "Može i dalje biti vredna. Keyword Planner potcenjuje volume za long-tail reči. Ako je relevantna i ima transakcijsku nameru, testirajte je — možda konvertuje odlično." } },
    { "@type": "Question", name: "Da li targetirati brand imena konkurenata?", acceptedAnswer: { "@type": "Answer", text: "Opciono i zavisi od industrije. Može biti efektivno za dosezanje ljudi koji razmatraju alternative. Nikada ne koristite competitor brand u tekstu oglasa — fokusirajte se na diferencijaciju." } },
    { "@type": "Question", name: "Kako prepoznati da je ključna reč loša?", acceptedAnswer: { "@type": "Answer", text: "100+ klikova bez konverzije ili 3x target CPA spend bez rezultata su jasni signali. Ali pre pauziranja, proverite i landing page i oglas — možda je problem tamo, ne u ključnoj reči." } },
  ]
};

const faqSchemaKljucneReciEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
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
    { "@type": "Question", name: "Koliko negativnih ključnih reči je dovoljno?", acceptedAnswer: { "@type": "Answer", text: "Nema gornjeg limita. Tipično: 50-200 za starter listu, raste vremenom. Kvalitet je važniji od kvantiteta — bolje 50 pažljivo odabranih nego 500 nasumičnih." } },
    { "@type": "Question", name: "Da li negativne ključne reči utiču na Quality Score?", acceptedAnswer: { "@type": "Answer", text: "Indirektno — da. Bolji CTR (manje irelevantnih prikaza) → bolji Expected CTR → bolji QS." } },
    { "@type": "Question", name: "Mogu li slučajno blokirati dobre pretrage?", acceptedAnswer: { "@type": "Answer", text: "Da, to je realan rizik. Zato: (1) koristite podatke pre dodavanja, (2) proveravajte Search Terms nakon dodavanja, (3) budite pažljivi sa Broad negatives za kratke reči koje imaju više značenja." } },
    { "@type": "Question", name: "Koliko često pregledati i ažurirati negative liste?", acceptedAnswer: { "@type": "Answer", text: "Minimum: jednom nedeljno Search Terms review. Idealno u prva 30 dana: svaka 2-3 dana. Za zrele kampanje: nedeljno + mesečna deep dive + kvartalna kompletna revizija." } },
    { "@type": "Question", name: "Da li postoje obavezne negativne ključne reči za svaki nalog?", acceptedAnswer: { "@type": "Answer", text: "Universal lista (besplatno, posao, DIY) je dobar starter za većinu biznisa. Ali uvek prilagodite svom biznisu — 'besplatno' možda nije negative ako nudite free trial ili besplatnu dostavu." } },
    { "@type": "Question", name: "Negative Broad vs Negative Phrase — kada koji?", acceptedAnswer: { "@type": "Answer", text: "Broad: za opšte termine koje uvek želite blokirati (besplatno, posao) — pokriva sve pretrage sa tom reči. Phrase: za specifične fraze gde redosled ima značaj. Exact: retko — samo za vrlo specifične slučajeve." } },
  ]
};

const faqSchemaNegativneKljucneReciEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many negative keywords is enough?", acceptedAnswer: { "@type": "Answer", text: "No upper limit. Typically: 50-200 for starter list, grows over time. Quality is more important than quantity — better 50 carefully selected than 500 random ones." } },
    { "@type": "Question", name: "Do negative keywords affect Quality Score?", acceptedAnswer: { "@type": "Answer", text: "Indirectly — yes. Better CTR (fewer irrelevant impressions) → better Expected CTR → better QS." } },
    { "@type": "Question", name: "Can I accidentally block good searches?", acceptedAnswer: { "@type": "Answer", text: "Yes, that is a real risk. Therefore: (1) use data before adding, (2) check Search Terms after adding, (3) be careful with Broad negatives for short keywords that have multiple meanings." } },
    { "@type": "Question", name: "How often should I review and update negative lists?", acceptedAnswer: { "@type": "Answer", text: "Minimum: weekly Search Terms review. Ideally in first 30 days: every 2-3 days. For mature campaigns: weekly + monthly deep dive + quarterly complete review." } },
    { "@type": "Question", name: "Are there mandatory negative keywords for every account?", acceptedAnswer: { "@type": "Answer", text: "Universal list (free, jobs, DIY) is good starter for most businesses. But always customize for your business — 'free' may not be negative if you offer free trial or free shipping." } },
    { "@type": "Question", name: "Negative Broad vs Negative Phrase — when which?", acceptedAnswer: { "@type": "Answer", text: "Broad: for general terms you always want to block (free, jobs) — covers all searches with that word. Phrase: for specific phrases where order matters. Exact: rarely — only for very specific cases." } },
  ]
};

// ── FAQ Schema: Quality Score vodič ──

const faqSchemaQualityScoreSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Koji je dobar Quality Score?", acceptedAnswer: { "@type": "Answer", text: "7+ je dobar, 8-9 je odličan, 10 je idealan ali nije uvek potreban niti realan. Za branded ključne reči očekujte 8-10, za generičke komercijalne 6-8 je sasvim solidan rezultat." } },
    { "@type": "Question", name: "Koliko brzo se Quality Score menja?", acceptedAnswer: { "@type": "Answer", text: "QS se ažurira na osnovu kumulativnih performansi, ali promene vidite postepeno — obično dani do nedelje. Veće promene (restrukturiranje Ad Groups, nove LP) zahtevaju više podataka da se reflektuju." } },
    { "@type": "Question", name: "Da li QS utiče na Display i Shopping kampanje?", acceptedAnswer: { "@type": "Answer", text: "Display ima sličan ali manje transparentan sistem. Shopping nema klasičan QS — koristi feed quality, price competitiveness i seller ratings. PMax koristi interne signale koji nisu vidljivi." } },
    { "@type": "Question", name: "Mogu li imati visok QS i loše konverzije?", acceptedAnswer: { "@type": "Answer", text: "Da. QS meri relevantnost, ne kvalitet ponude. Možete imati savršeno relevantan oglas i LP za ponudu koja nije konkurentna. QS je samo deo jednačine." } },
    { "@type": "Question", name: "Zašto imam nizak QS za branded ključne reči?", acceptedAnswer: { "@type": "Answer", text: "Verovatno konkurenti bidduju na vaš brand. Branded reči bi trebalo da imaju QS 8-10. Proverite: da li je brand u headline-u oglasa, da li LP ima brand prominentno, da li ima tehničkih problema sa sajtom." } },
    { "@type": "Question", name: "Da li pauziranje loših ključnih reči poboljšava QS ostalih?", acceptedAnswer: { "@type": "Answer", text: "Ne direktno — ne postoji account-level QS. Ali indirektno, bolji fokus na kvalitetne reči poboljšava ukupne performanse naloga što vremenom pomaže svim metrikama." } },
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
    { "@type": "Question", name: "Koliko košta Google oglašavanje za firme?", acceptedAnswer: { "@type": "Answer", text: "Prosečan CPC u Srbiji je €0.10-0.80, u UK/DE €1-5+. Minimalni preporučeni mesečni budžet za kampanje je €300-500 za lokalne firme, €1,000+ za eCommerce. Uz to ide fee za upravljanje €200-600/mesečno." } },
    { "@type": "Question", name: "Koji tip Google kampanje je najbolji za moju firmu?", acceptedAnswer: { "@type": "Answer", text: "Search kampanje su najbolje za firme koje žele direktne upite/pozive. Shopping za eCommerce. Performance Max za kombinaciju kanala. Display za brand awareness. Zavisi od vašeg cilja — lead generation ili online prodaja." } },
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
    { "@type": "Question", name: "Da li Performance Max zamenjuje Search i Shopping kampanje?", acceptedAnswer: { "@type": "Answer", text: "Ne u potpunosti. PMax može da radi uz Search i Shopping. Google preporučuje kombinaciju — PMax za široku pokrivenost, Search za high-intent upite. Shopping sa PMax-om zahteva pažljivu asset group strukturu da se izbegne kanibalizacija." } },
    { "@type": "Question", name: "Koliki budžet treba za Performance Max?", acceptedAnswer: { "@type": "Answer", text: "Minimum €30-50/dan (€900-1,500/mesečno). PMax koristi machine learning koji zahteva dovoljno podataka — ispod ovog budžeta algoritam nema dovoljno konverzija za optimizaciju. Za eCommerce sa 100+ proizvoda, preporučuje se €2,000+/mesečno." } },
    { "@type": "Question", name: "Zašto PMax troši većinu budžeta na Display/YouTube?", acceptedAnswer: { "@type": "Answer", text: "Čest problem sa PMax-om. Rešenja: isključite URL expansion, dodajte negativne ključne reči (preko Google podrške), napravite jače Search kampanje za iste ključne reči. PMax će trošiti gde mu je najjeftinije, ne nužno najefikasnije." } },
    { "@type": "Question", name: "Kako videti gde PMax prikazuje oglase?", acceptedAnswer: { "@type": "Answer", text: "Insights tab → Placement report (ograničen), Asset group performance. Za detaljnije: koristite URL-based conversion tracking ili GA4 da vidite koji kanali donose konverzije. Google namerno ograničava transparentnost PMax-a." } },
    { "@type": "Question", name: "Kada NE koristiti Performance Max?", acceptedAnswer: { "@type": "Answer", text: "Kad imate mali budžet (ispod €500/mesečno), kad nemate conversion tracking, za čist brand awareness, ili kad trebate preciznu kontrolu nad ključnim rečima. PMax je automatizovan — ako želite potpunu kontrolu, Search i Shopping su bolji izbor." } },
  ]
};

const faqSchemaPerformanceMaxEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Does Performance Max replace Search and Shopping campaigns?", acceptedAnswer: { "@type": "Answer", text: "Not entirely. PMax can run alongside Search and Shopping. Google recommends a combination — PMax for broad coverage, Search for high-intent queries. Shopping with PMax requires careful asset group structure to avoid cannibalization." } },
    { "@type": "Question", name: "What budget do I need for Performance Max?", acceptedAnswer: { "@type": "Answer", text: "Minimum $30-50/day ($900-1,500/month). PMax uses machine learning that requires sufficient data — below this budget the algorithm doesn't have enough conversions for optimization. For eCommerce with 100+ products, $2,000+/month is recommended." } },
    { "@type": "Question", name: "Why is PMax spending most of my budget on Display/YouTube?", acceptedAnswer: { "@type": "Answer", text: "Common PMax problem. Solutions: disable URL expansion, add negative keywords (through Google support), create stronger Search campaigns for the same keywords. PMax will spend where it's cheapest, not necessarily most effective." } },
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
    { "@type": "Question", name: "Da li mi treba Merchant Center za Google Shopping?", acceptedAnswer: { "@type": "Answer", text: "Da, Merchant Center je obavezan. Tu upload-ujete product feed sa svim informacijama o proizvodima (naziv, cena, slika, dostupnost). Bez MC-a ne možete pokrenuti Shopping kampanje." } },
    { "@type": "Question", name: "Koliko proizvoda treba imati za Google Shopping?", acceptedAnswer: { "@type": "Answer", text: "Nema minimuma, ali Shopping najbolje radi sa 50+ proizvoda. Sa manje od 20 proizvoda, budžet se brzo potroši na malo SKU-ova. Za optimalne rezultate, preporučuje se 100+ aktivnih proizvoda u feed-u." } },
    { "@type": "Question", name: "Zašto su moji Shopping oglasi odbijeni?", acceptedAnswer: { "@type": "Answer", text: "Najčešći razlozi: neusklađenost cena između sajta i feed-a, nedostajući GTIN/MPN, loše slike (watermark, tekst na slici), nedostajuće shipping informacije, ili kršenje Google Merchant Center politika." } },
    { "@type": "Question", name: "Shopping vs Performance Max — šta je bolje za eCommerce?", acceptedAnswer: { "@type": "Answer", text: "Standard Shopping daje veću kontrolu i transparentnost. PMax daje širi reach ali manje kontrole. Idealna kombinacija: Standard Shopping za top proizvode + PMax za ostatak kataloga. Zavisi od budžeta i broja proizvoda." } },
    { "@type": "Question", name: "Kako optimizovati product feed za bolje rezultate?", acceptedAnswer: { "@type": "Answer", text: "Ključne optimizacije: 1) Title sa glavnom ključnom rečju na početku, 2) Visokokvalitetne slike na beloj pozadini, 3) Detaljan opis sa ključnim rečima, 4) Tačan product_type i google_product_category, 5) Redovno ažuriranje cena i dostupnosti." } },
  ]
};

const faqSchemaShoppingEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
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
    { "@type": "Question", name: "Koliko košta Google Ads agencija?", acceptedAnswer: { "@type": "Answer", text: "U Srbiji: €200-600/mesečno za manje agencije, €800-2,000+ za veće. U UK/USA: £500-2,000+ za mid-range, £3,000-10,000+ za enterprise. Većina radi na fiksnom retainer-u ili procentu od ad spend-a (10-20%)." } },
    { "@type": "Question", name: "Freelancer ili agencija — šta je bolje za mali biznis?", acceptedAnswer: { "@type": "Answer", text: "Za budžete do €1,000/mesečno ad spend, freelancer je obično bolji izbor — niži troškovi, direktna komunikacija, veća posvećenost. Agencija ima smisla kad trebate multi-channel pristup ili imate budžet €3,000+/mesečno." } },
    { "@type": "Question", name: "Kako prepoznati lošu Google Ads agenciju?", acceptedAnswer: { "@type": "Answer", text: "Red flags: ne daju pristup Google Ads nalogu, obećavaju garantovane rezultate, nemaju case studies, ne objašnjavaju strategiju, koriste samo Smart kampanje, ne postavljaju conversion tracking, ili zahtevaju dugoročne ugovore bez izlazne klauzule." } },
    { "@type": "Question", name: "Da li mogu prebaciti nalog sa jedne agencije na drugu?", acceptedAnswer: { "@type": "Answer", text: "Da, vaš Google Ads nalog je vaš — agencija ima samo pristup. Proverite da je nalog registrovan na vašu email adresu. Pri prelasku, tražite full access od stare agencije, zadržite istoriju kampanja i konverzija, i napravite backup pre promena." } },
    { "@type": "Question", name: "Šta da tražim u ugovoru sa agencijom?", acceptedAnswer: { "@type": "Answer", text: "Ključne tačke: jasno definisan scope rada, mesečni reporting, pristup nalogu, otkazni rok (30 dana je fer), ko je vlasnik naloga, kakav je onboarding proces, i šta se dešava sa kampanjama po raskidu saradnje." } },
  ]
};

const faqSchemaAgencyEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a Google Ads agency cost?", acceptedAnswer: { "@type": "Answer", text: "In the US/UK: $500-2,000+/month for mid-range agencies, $3,000-10,000+ for enterprise. Most work on a fixed retainer or percentage of ad spend (10-20%). Some charge setup fees of $500-2,000." } },
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
    { "@type": "Question", name: "Šta je conversion tracking i zašto je važan?", acceptedAnswer: { "@type": "Answer", text: "Conversion tracking prati akcije korisnika nakon klika na oglas — kupovinu, poziv, popunjavanje forme. Bez njega, Google ne zna koje ključne reči i oglasi donose rezultate, pa ne može optimizovati kampanje. To je osnova svake uspešne kampanje." } },
    { "@type": "Question", name: "Google Tag vs GTM — šta koristiti?", acceptedAnswer: { "@type": "Answer", text: "Google Tag Manager (GTM) je uvek preporučen jer omogućava fleksibilnost bez menjanja koda sajta. Google Tag (gtag.js) je direktan ali zahteva developersku pomoć za svaku promenu. Za većinu biznisa, GTM je bolji izbor." } },
    { "@type": "Question", name: "Šta su Enhanced Conversions?", acceptedAnswer: { "@type": "Answer", text: "Enhanced Conversions šalju hash-ovane korisničke podatke (email, telefon) Googleu za bolji matching. Poboljšavaju tracking tačnost za 5-15% posebno na iOS uređajima. Implementacija je jednostavna preko GTM-a ili Google Tag-a." } },
    { "@type": "Question", name: "Koliko konverzija treba za Smart Bidding?", acceptedAnswer: { "@type": "Answer", text: "Google preporučuje minimum 15-30 konverzija mesečno po kampnji za Target CPA, i 50+ za Target ROAS. Ispod toga, algoritam nema dovoljno podataka i rezultati su nepredvidivi. U tom slučaju koristite Manual CPC ili Maximize Clicks." } },
    { "@type": "Question", name: "Zašto se konverzije u Google Ads i GA4 ne poklapaju?", acceptedAnswer: { "@type": "Answer", text: "Različiti atribucioni modeli: Google Ads koristi last-click po default-u sa 30-dana window-om, GA4 koristi data-driven sa 90-dana window-om. Različito brojanje (Google Ads broji svaku konverziju, GA4 sesije). Uvek uporedite iste periode i razumite razlike." } },
  ]
};

const faqSchemaConversionTrackingEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is conversion tracking and why is it important?", acceptedAnswer: { "@type": "Answer", text: "Conversion tracking monitors user actions after clicking an ad — purchases, calls, form submissions. Without it, Google doesn't know which keywords and ads drive results, so it can't optimize campaigns. It's the foundation of every successful campaign." } },
    { "@type": "Question", name: "Google Tag vs GTM — which should I use?", acceptedAnswer: { "@type": "Answer", text: "Google Tag Manager (GTM) is always recommended because it offers flexibility without changing site code. Google Tag (gtag.js) is direct but requires developer help for every change. For most businesses, GTM is the better choice." } },
    { "@type": "Question", name: "What are Enhanced Conversions?", acceptedAnswer: { "@type": "Answer", text: "Enhanced Conversions send hashed user data (email, phone) to Google for better matching. They improve tracking accuracy by 5-15%, especially on iOS devices. Implementation is straightforward through GTM or Google Tag." } },
    { "@type": "Question", name: "How many conversions do I need for Smart Bidding?", acceptedAnswer: { "@type": "Answer", text: "Google recommends a minimum of 15-30 conversions per month per campaign for Target CPA, and 50+ for Target ROAS. Below that, the algorithm lacks sufficient data and results are unpredictable. In that case, use Manual CPC or Maximize Clicks." } },
    { "@type": "Question", name: "Why don't conversions match between Google Ads and GA4?", acceptedAnswer: { "@type": "Answer", text: "Different attribution models: Google Ads uses last-click by default with a 30-day window, GA4 uses data-driven with a 90-day window. Different counting methods (Google Ads counts every conversion, GA4 counts sessions). Always compare the same periods and understand the differences." } },
  ]
};

// --- google-ads-greske ---
const faqSchemaGreskeSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Koja je najskuplja greška u Google Ads?", acceptedAnswer: { "@type": "Answer", text: "Nedostatak negativnih ključnih reči. Bez njih, vaš budžet se troši na irelevantne pretrage. Prosečan nalog bez negativnih ključnih reči baca 20-40% budžeta na neproduktivne klikove. Redovna analiza search terms report-a je obavezna." } },
    { "@type": "Question", name: "Da li broad match ključne reči treba koristiti?", acceptedAnswer: { "@type": "Answer", text: "Broad match može raditi uz Smart Bidding i dovoljno konverzija (30+/mesečno). Ali za manje naloge, phrase match i exact match daju bolju kontrolu. Najčešća greška je korišćenje broad match-a bez negativnih ključnih reči — to je recept za bacanje novca." } },
    { "@type": "Question", name: "Koliko ad grupa treba imati po kampnji?", acceptedAnswer: { "@type": "Answer", text: "5-20 ad grupa za većinu kampanja. Previše ad grupa (50+) otežava upravljanje i razređuje budžet. Premalo (1-2) znači lošu relevantnost. Svaka ad grupa treba imati tematski povezane ključne reči i odgovarajuće oglase." } },
    { "@type": "Question", name: "Zašto mi CTR opada iako ništa nisam menjao?", acceptedAnswer: { "@type": "Answer", text: "Najčešći razlozi: sezonalnost, novi konkurenti, ad fatigue (isti oglas predugo), promene u SERP layout-u, ili Quality Score pad. Rešenje: redovno osvežavajte oglase (svakih 4-6 nedelja), pratite Auction Insights i testirajte nove varijante." } },
    { "@type": "Question", name: "Da li treba koristiti sve Google Ads preporuke?", acceptedAnswer: { "@type": "Answer", text: "Ne. Mnoge preporuke služe Googleu da poveća vašu potrošnju. Ignorirajte: 'prebacite na broad match', 'povećajte budžet za 50%', auto-apply promene. Koristite: RSA preporuke za oglase, preporuke za negativne ključne reči, i tehnička poboljšanja." } },
  ]
};

const faqSchemaGreskeEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
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
    { "@type": "Question", name: "Da li je moj budžet premali za rezultate?", acceptedAnswer: { "@type": "Answer", text: "Ako dnevni budžet ne pokriva barem 10-15 klikova, da — budžet je premali. Izračunajte: prosečan CPC × 15 = minimalni dnevni budžet. Za većinu industrija u Srbiji, €10-20/dan je minimum. Za UK/USA, $30-50/dan." } },
    { "@type": "Question", name: "Zašto konkurenti imaju bolje pozicije od mene?", acceptedAnswer: { "@type": "Answer", text: "Ad Rank = Bid × Quality Score × Expected impact of extensions. Ako konkurent ima bolji QS (bolji oglas i LP), može platiti manje po kliku i imati višu poziciju. Proverite Quality Score — ako je ispod 6, tu je problem. Takođe proverite da koristite sve relevantne ad extensions." } },
  ]
};

const faqSchemaZastoNemaRezultataEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Why is my Google Ads campaign spending budget but getting no conversions?", acceptedAnswer: { "@type": "Answer", text: "Top 3 reasons: 1) Poor conversion tracking (not tracking the right actions), 2) Landing page doesn't convert (slow, unclear CTA, poor mobile experience), 3) Wrong keywords (attracting people without purchase intent). Check these three before anything else." } },
    { "@type": "Question", name: "How long should I wait before stopping a campaign?", acceptedAnswer: { "@type": "Answer", text: "Minimum 2-3 weeks with sufficient budget (at least 100-200 clicks). If after 500+ clicks there's not a single conversion, the problem is almost certainly the landing page or offer, not the campaign. Smart Bidding needs a minimum 2-4 week learning period." } },
    { "@type": "Question", name: "Is my budget too small for results?", acceptedAnswer: { "@type": "Answer", text: "If your daily budget doesn't cover at least 10-15 clicks, yes — budget is too small. Calculate: average CPC × 15 = minimum daily budget. For most industries, $30-50/day is the minimum for meaningful results." } },
    { "@type": "Question", name: "Why do competitors have better positions than me?", acceptedAnswer: { "@type": "Answer", text: "Ad Rank = Bid × Quality Score × Expected impact of extensions. If a competitor has better QS (better ad and LP), they can pay less per click and have a higher position. Check your Quality Score — if it's below 6, that's the problem. Also ensure you're using all relevant ad extensions." } },
  ]
};

// --- ecommerce-vs-b2b ---
const faqSchemaEcommerceVsB2BSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Koji tip kampanje je bolji za eCommerce?", acceptedAnswer: { "@type": "Answer", text: "Shopping kampanje su #1 za eCommerce jer prikazuju sliku, cenu i naziv proizvoda direktno u rezultatima. Performance Max je drugi izbor za širi reach. Search kampanje dopunjuju za brendirane i long-tail ključne reči." } },
    { "@type": "Question", name: "Kako meriti uspeh B2B kampanja?", acceptedAnswer: { "@type": "Answer", text: "B2B se meri po Cost per Lead (CPL), Lead Quality Score, MQL-to-SQL conversion rate, i Customer Acquisition Cost (CAC). Za razliku od eCommerce gde je ROAS jasan, B2B zahteva praćenje celog funnel-a od klika do zatvorenog posla." } },
    { "@type": "Question", name: "Da li Google Ads radi za B2B sa dugim sales cycle-om?", acceptedAnswer: { "@type": "Answer", text: "Da, ali zahteva drugačiji pristup. Koristite remarketing liste za nurturing, offline conversion import za praćenje SQL/zatvorenih poslova, i Content kampanje za top-of-funnel. Očekujte 3-6 meseci pre pune optimizacije jer trebate podatke o zatvaranju." } },
    { "@type": "Question", name: "Koliki budžet je potreban za eCommerce vs B2B?", acceptedAnswer: { "@type": "Answer", text: "eCommerce: minimum €500-1,000/mesečno za Shopping kampanje. B2B: minimum €300-800/mesečno za Search. CPC je često viši za B2B ($5-50 vs $0.50-5 za eCommerce), ali vrednost jednog klijenta je mnogo veća." } },
  ]
};

const faqSchemaEcommerceVsB2BEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Which campaign type is best for eCommerce?", acceptedAnswer: { "@type": "Answer", text: "Shopping campaigns are #1 for eCommerce because they show product image, price, and title directly in search results. Performance Max is a second choice for broader reach. Search campaigns complement for branded and long-tail keywords." } },
    { "@type": "Question", name: "How do I measure B2B campaign success?", acceptedAnswer: { "@type": "Answer", text: "B2B is measured by Cost per Lead (CPL), Lead Quality Score, MQL-to-SQL conversion rate, and Customer Acquisition Cost (CAC). Unlike eCommerce where ROAS is clear, B2B requires tracking the entire funnel from click to closed deal." } },
    { "@type": "Question", name: "Does Google Ads work for B2B with long sales cycles?", acceptedAnswer: { "@type": "Answer", text: "Yes, but it requires a different approach. Use remarketing lists for nurturing, offline conversion import for tracking SQL/closed deals, and Content campaigns for top-of-funnel. Expect 3-6 months before full optimization as you need closing data." } },
    { "@type": "Question", name: "What budget is needed for eCommerce vs B2B?", acceptedAnswer: { "@type": "Answer", text: "eCommerce: minimum $1,000-2,000/month for Shopping campaigns. B2B: minimum $500-1,500/month for Search. CPC is often higher for B2B ($5-50 vs $0.50-5 for eCommerce), but the value of one client is much greater." } },
  ]
};

// --- google-ads-audit-vodic ---
const faqSchemaAuditSR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Koliko često treba raditi Google Ads audit?", acceptedAnswer: { "@type": "Answer", text: "Kompletan audit svakih 3-6 meseci. Mini audit (tracking, budžet, top kampanje) mesečno. Obavezan audit pri preuzimanju naloga od prethodne agencije, pre skaliranja budžeta, i kad performanse značajno padnu." } },
    { "@type": "Question", name: "Šta proveriti prvo u Google Ads auditu?", acceptedAnswer: { "@type": "Answer", text: "1) Conversion tracking (da li radi tačno), 2) Search Terms report (gde se troši budžet), 3) Quality Score distribucija, 4) Wasted spend (irelevantni klikovi), 5) Landing page iskustvo. Ovih 5 tačaka pokrivaju 80% problema." } },
    { "@type": "Question", name: "Koliko košta Google Ads audit?", acceptedAnswer: { "@type": "Answer", text: "Besplatan osnovni audit nude mnoge agencije za privlačenje klijenata. Profesionalan detaljan audit: €200-800 u Srbiji, $500-2,000 u UK/USA. Uključuje analizu naloga, identifikaciju problema, i konkretne preporuke za poboljšanje." } },
    { "@type": "Question", name: "Mogu li sam da uradim audit svog naloga?", acceptedAnswer: { "@type": "Answer", text: "Da, sa dobrom checklistom možete pokriti osnove. Proverite: conversion tracking, negativne ključne reči, Quality Score, search terms, bid strategiju, i ad extensions. Za dublje analize (attribution, audience overlap, incrementality) preporučuje se stručnjak." } },
    { "@type": "Question", name: "Šta raditi posle audita?", acceptedAnswer: { "@type": "Answer", text: "Napravite prioritizovanu listu problema po uticaju: 1) Hitno (tracking, budget waste), 2) Visok prioritet (strukturalne promene, bid strategija), 3) Optimizacija (QS, oglasi, extensions). Implementirajte u tom redosledu, ne sve odjednom." } },
  ]
};

const faqSchemaAuditEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How often should I do a Google Ads audit?", acceptedAnswer: { "@type": "Answer", text: "Full audit every 3-6 months. Mini audit (tracking, budget, top campaigns) monthly. Mandatory audit when taking over an account from a previous agency, before scaling budget, and when performance drops significantly." } },
    { "@type": "Question", name: "What should I check first in a Google Ads audit?", acceptedAnswer: { "@type": "Answer", text: "1) Conversion tracking (is it working accurately), 2) Search Terms report (where budget is being spent), 3) Quality Score distribution, 4) Wasted spend (irrelevant clicks), 5) Landing page experience. These 5 points cover 80% of problems." } },
    { "@type": "Question", name: "How much does a Google Ads audit cost?", acceptedAnswer: { "@type": "Answer", text: "Free basic audits are offered by many agencies to attract clients. Professional detailed audit: $500-2,000 in US/UK. Includes account analysis, problem identification, and specific improvement recommendations." } },
    { "@type": "Question", name: "Can I audit my own account?", acceptedAnswer: { "@type": "Answer", text: "Yes, with a good checklist you can cover the basics. Check: conversion tracking, negative keywords, Quality Score, search terms, bid strategy, and ad extensions. For deeper analysis (attribution, audience overlap, incrementality) an expert is recommended." } },
    { "@type": "Question", name: "What should I do after an audit?", acceptedAnswer: { "@type": "Answer", text: "Create a prioritized list of issues by impact: 1) Urgent (tracking, budget waste), 2) High priority (structural changes, bid strategy), 3) Optimization (QS, ads, extensions). Implement in that order, not all at once." } },
  ]
};

function getFaqSchema(slug: string, locale: string) {
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
  return null;
}

/* ── Page Component ── */

export default async function BlogPostPage({ params }: Props) {
  const { slug, locale } = await params;
  let post = getPost(slug, locale);

  // If EN locale receives an SR slug, 301 redirect to the EN slug
  if (!post && locale === "en" && slug in slugMap) {
    redirect(`/en/blog/${slugMap[slug]}`);
  }

  if (!post) {
    notFound();
  }

  const canonicalSlug = getCanonicalSlug(slug);
  const faqSchema = getFaqSchema(canonicalSlug, locale);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    ...(post.featuredImage && {
      image: `https://www.slobodan-jelisavac.com${post.featuredImage}`,
    }),
    datePublished: post.date,
    dateModified: post.dateModified,
    author: {
      "@type": "Person",
      name: "Slobodan Jelisavac",
      url: "https://www.slobodan-jelisavac.com",
      jobTitle: "Google Ads Strategist",
    },
    publisher: {
      "@type": "Person",
      name: "Slobodan Jelisavac",
      url: "https://www.slobodan-jelisavac.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.slobodan-jelisavac.com/${locale}/blog/${slug}`,
    },
    inLanguage: locale === "en" ? "en" : "sr",
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

  return (
    <div className="bg-slate-950 text-white">
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
      <section className="relative overflow-hidden pt-16 pb-28 md:pt-24 md:pb-32">
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

      <section className="bg-slate-100 text-gray-900 pb-16">
        <div className="container-custom px-4 -mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-4">
                <TableOfContents locale={locale} />
                <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
                  <div className="text-sm uppercase tracking-wide text-gray-500">
                    {locale === "en" ? "Free analysis" : "Besplatna analiza"}
                  </div>
                  <h2 className="mt-2 text-lg font-heading font-semibold">
                    {locale === "en"
                      ? "Want a campaign audit?"
                      : "Želite audit kampanja"}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                    {locale === "en"
                      ? "Get a clear picture of your performance and actionable first steps for optimization."
                      : "Dobijte jasnu sliku performansi i prve korake za optimizaciju."}
                  </p>
                  <Link
                    href="/kontakt"
                    className="btn-secondary inline-block mt-4 w-full text-center"
                  >
                    {locale === "en"
                      ? "Book a consultation"
                      : "Zakažite konsultacije"}
                  </Link>
                </div>
              </div>
            </aside>

            <article className="bg-white border-2 border-gray-900 rounded-xl p-6 md:p-12 shadow-card">
              {post.featuredImage && (
                <div className="mb-8 -mx-6 md:-mx-12 -mt-6 md:-mt-12">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    width={1200}
                    height={630}
                    className="w-full h-auto rounded-t-xl"
                    priority
                  />
                </div>
              )}
              <div className="text-sm text-gray-500 mb-4">
                {post.category} · {post.date}{post.readingTime && ` · ${post.readingTime}`}
              </div>
              <div className="prose prose-slate prose-lg max-w-none text-gray-700 prose-headings:scroll-mt-24 prose-h2:mt-12 prose-h2:mb-6 prose-h3:mt-8 prose-h3:mb-4 prose-p:mb-5 prose-p:leading-relaxed prose-li:leading-relaxed prose-hr:my-10">
                {post.content}
              </div>
              <AuthorBox locale={locale} />
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
