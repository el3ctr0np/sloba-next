import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { notFound, redirect } from "next/navigation";
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

  return {
    title: `${post.title} | Slobodan Jelisavac`,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.slobodan-jelisavac.com/${locale}/blog/${slug}`,
      languages: {
        sr: `https://www.slobodan-jelisavac.com/sr/blog/${srSlug}`,
        en: `https://www.slobodan-jelisavac.com/en/blog/${enSlug}`
      }
    }
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

function getFaqSchema(slug: string, locale: string) {
  if (slug === "google-ads-vs-meta") {
    return locale === "en" ? faqSchemaGoogleVsMetaEN : faqSchemaGoogleVsMetaSR;
  }
  if (slug === "remarketing-vodic") {
    return locale === "en" ? faqSchemaRemarketingEN : faqSchemaRemarketingSR;
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

  return (
    <div className="bg-slate-950 text-white">
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
          </p>
        </div>
      </section>

      <section className="bg-slate-100 text-gray-900 pb-16">
        <div className="container-custom px-4 -mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-8">
            <aside className="hidden lg:block">
              <div className="sticky top-24">
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
              <div className="text-sm text-gray-500 mb-4">
                {post.category} · {post.date}
              </div>
              <div className="prose prose-slate max-w-none text-gray-700">
                {post.content}
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
