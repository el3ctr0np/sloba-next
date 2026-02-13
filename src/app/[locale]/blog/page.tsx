import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title: "Google Ads Guide: From Beginner to Expert | Slobodan Jelisavac",
      description:
        "Free Google Ads guide with 15 detailed tutorials in 5 chapters. From basics and keywords to remarketing and advanced optimization."
    };
  }

  return {
    title: "Google Ads Vodič: Od Početnika do Eksperta | Slobodan Jelisavac",
    description:
      "Besplatan Google Ads vodič sa 15 detaljnih vodiča u 5 poglavlja. Od osnova i ključnih reči do remarketing-a i napredne optimizacije."
  };
}

type ChapterPost = {
  title: string;
  excerpt: string;
  href: string;
  readTime: string;
};

type Chapter = {
  id: string;
  number: number;
  title: string;
  description: string;
  level: string;
  levelColor: string;
  posts: ChapterPost[];
};

const getChapters = (locale: string): Chapter[] => {
  if (locale === "en") {
    return [
      {
        id: "basics",
        number: 1,
        title: "Google Ads Basics",
        description:
          "Understand the platform, costs and options before investing your first dollar. Learn how much Google Ads costs, how different campaign types work and whether you need an agency or can do it yourself.",
        level: "Beginner",
        levelColor: "bg-green-100 text-green-800",
        posts: [
          {
            title: "How Much Does Google Ads Cost? Prices, Budgets & ROI [2026]",
            excerpt:
              "Real CPC prices by industry, minimum budgets and ROI planning framework.",
            href: "/blog/koliko-kosta-google-ads",
            readTime: "12 min"
          },
          {
            title:
              "Google Advertising for Businesses: Complete Guide for B2B and eCommerce [2026]",
            excerpt:
              "Strategies, campaign types, budgeting and measuring results for businesses of all sizes.",
            href: "/blog/google-oglasavanje-za-firme",
            readTime: "15 min"
          },
          {
            title:
              "Google Ads Agency vs Freelancer vs In-House: How to Choose",
            excerpt:
              "Cost comparison, pros and cons of each campaign management option.",
            href: "/blog/agencija-vs-freelancer",
            readTime: "10 min"
          }
        ]
      },
      {
        id: "keywords",
        number: 2,
        title: "Keywords & Targeting",
        description:
          "The foundation of every successful campaign — how to find the right words and eliminate waste. Learn keyword research, creating negative keyword lists and improving Quality Score for lower CPC.",
        level: "Beginner → Intermediate",
        levelColor: "bg-blue-100 text-blue-800",
        posts: [
          {
            title: "Keywords for Google Ads: Complete Guide [2026]",
            excerpt:
              "Research, selection, organization and keyword optimization step by step.",
            href: "/blog/kljucne-reci-vodic",
            readTime: "14 min"
          },
          {
            title: "Negative Keywords: Complete List + Strategy [2026]",
            excerpt:
              "Ready-made negative keyword lists and process for eliminating budget waste.",
            href: "/blog/negativne-kljucne-reci",
            readTime: "11 min"
          },
          {
            title: "Quality Score: What It Is and How to Improve It [2026]",
            excerpt:
              "How Quality Score affects CPC and positions, and concrete tactics for improvement.",
            href: "/blog/quality-score-vodic",
            readTime: "10 min"
          }
        ]
      },
      {
        id: "campaign-types",
        number: 3,
        title: "Campaign Types & Optimization",
        description:
          "Search, Shopping, PMax — which campaign type is right for your business. Compare Google Shopping, Performance Max and classic Search campaigns, plus differences between eCommerce and B2B strategies.",
        level: "Intermediate",
        levelColor: "bg-yellow-100 text-yellow-800",
        posts: [
          {
            title: "Google Shopping Campaigns: How to Increase ROAS [Guide 2026]",
            excerpt:
              "Feed optimization, campaign structure and tactics for better Shopping performance.",
            href: "/blog/google-shopping-vodic",
            readTime: "13 min"
          },
          {
            title: "Performance Max Campaigns: Guide for eCommerce and B2B [2026]",
            excerpt:
              "How PMax campaigns work, when to use them and how to optimize them.",
            href: "/blog/performance-max-vodic",
            readTime: "12 min"
          },
          {
            title: "Google Ads vs Meta Ads: What's Better for Your Business?",
            excerpt:
              "When to use which channel — differences in targeting, costs and ROI.",
            href: "/blog/google-ads-vs-meta",
            readTime: "9 min"
          },
          {
            title:
              "Google Ads for eCommerce vs B2B: Key Strategy Differences",
            excerpt:
              "Differences in campaigns, KPIs and strategies for two business models.",
            href: "/blog/ecommerce-vs-b2b",
            readTime: "11 min"
          }
        ]
      },
      {
        id: "measurement",
        number: 4,
        title: "Measurement & Analysis",
        description:
          "Without proper tracking and regular audits, everything else is guesswork. Learn how to set up conversion tracking, use enhanced conversions and conduct a complete Google Ads account audit.",
        level: "Intermediate → Advanced",
        levelColor: "bg-orange-100 text-orange-800",
        posts: [
          {
            title:
              "Conversion Tracking for Google Ads: Why Your Campaigns Don't Work",
            excerpt:
              "Guide for proper tracking setup, enhanced conversions and diagnostics.",
            href: "/blog/conversion-tracking-vodic",
            readTime: "12 min"
          },
          {
            title: "Google Ads Audit: Complete Checklist [2026]",
            excerpt:
              "80+ checkpoints for account review, campaign optimization and better ROI.",
            href: "/blog/google-ads-audit-vodic",
            readTime: "15 min"
          }
        ]
      },
      {
        id: "advanced",
        number: 5,
        title: "Advanced Strategies",
        description:
          "Remarketing, optimization and troubleshooting for experienced advertisers. Advanced strategies for remarketing campaigns, common mistakes that waste budget and diagnostics when campaigns don't deliver results.",
        level: "Advanced",
        levelColor: "bg-red-100 text-red-800",
        posts: [
          {
            title: "Google Ads Remarketing: Complete Guide [2026]",
            excerpt:
              "Setup, segmentation and remarketing strategies that increase conversions.",
            href: "/blog/remarketing-vodic",
            readTime: "14 min"
          },
          {
            title: "Google Ads Optimization: 20 Mistakes Costing You Money",
            excerpt:
              "Most common mistakes in structure, bidding and landing pages — and how to fix them.",
            href: "/blog/google-ads-greske",
            readTime: "13 min"
          },
          {
            title:
              "Why Google Ads Campaigns Don't Work (and How to Fix It)",
            excerpt:
              "12 most common reasons for poor performance and concrete solutions for each problem.",
            href: "/blog/zasto-nema-rezultata",
            readTime: "12 min"
          }
        ]
      }
    ];
  }

  return [
    {
      id: "osnove",
      number: 1,
      title: "Osnove Google Ads-a",
      description:
        "Razumite platformu, troškove i opcije pre nego što uložite prvi dinar. Naučite koliko Google Ads košta u Srbiji, kako funkcionišu različiti tipovi kampanja i da li vam treba agencija ili možete sami.",
      level: "Početnik",
      levelColor: "bg-green-100 text-green-800",
      posts: [
        {
          title: "Koliko Košta Google Ads? Cene, Budžeti i ROI u Srbiji [2026]",
          excerpt:
            "Realne CPC cene po industrijama, minimalni budžeti i okvir za planiranje ROI-ja u Srbiji.",
          href: "/blog/koliko-kosta-google-ads",
          readTime: "12 min"
        },
        {
          title:
            "Google Oglašavanje za Firme: Kompletan Vodič za B2B i eCommerce [2026]",
          excerpt:
            "Strategije, tipovi kampanja, budžetiranje i merenje rezultata za firme svih veličina.",
          href: "/blog/google-oglasavanje-za-firme",
          readTime: "15 min"
        },
        {
          title:
            "Google Ads Agencija vs Freelancer vs In-House: Kako Izabrati",
          excerpt:
            "Poređenje troškova, prednosti i mana svake opcije za upravljanje kampanjama.",
          href: "/blog/agencija-vs-freelancer",
          readTime: "10 min"
        }
      ]
    },
    {
      id: "kljucne-reci",
      number: 2,
      title: "Ključne Reči i Targeting",
      description:
        "Osnova svake uspešne kampanje — kako pronaći prave reči i eliminisati otpad. Naučite istraživanje ključnih reči, kreiranje lista negativnih ključnih reči i poboljšanje Quality Score-a za niži CPC.",
      level: "Početnik → Srednji",
      levelColor: "bg-blue-100 text-blue-800",
      posts: [
        {
          title: "Ključne Reči za Google Ads: Kompletan Vodič [2026]",
          excerpt:
            "Istraživanje, selekcija, organizacija i optimizacija ključnih reči korak po korak.",
          href: "/blog/kljucne-reci-vodic",
          readTime: "14 min"
        },
        {
          title: "Negative Keywords: Kompletna Lista + Strategija [2026]",
          excerpt:
            "Gotove liste negativnih ključnih reči i proces za eliminaciju budžet waste-a.",
          href: "/blog/negativne-kljucne-reci",
          readTime: "11 min"
        },
        {
          title: "Quality Score: Šta Je i Kako Ga Poboljšati [2026]",
          excerpt:
            "Kako Quality Score utiče na CPC i pozicije, i konkretne taktike za poboljšanje.",
          href: "/blog/quality-score-vodic",
          readTime: "10 min"
        }
      ]
    },
    {
      id: "tipovi-kampanja",
      number: 3,
      title: "Tipovi Kampanja",
      description:
        "Search, Shopping, PMax — koji tip kampanje je pravi za vaš biznis. Uporedite Google Shopping, Performance Max i klasične Search kampanje, plus razlike između eCommerce i B2B strategija.",
      level: "Srednji",
      levelColor: "bg-yellow-100 text-yellow-800",
      posts: [
        {
          title: "Google Shopping Kampanje: Kako Povećati ROAS [Vodič 2026]",
          excerpt:
            "Feed optimizacija, struktura kampanja i taktike za bolji Shopping učinak.",
          href: "/blog/google-shopping-vodic",
          readTime: "13 min"
        },
        {
          title: "Performance Max Kampanje: Vodič za eCommerce i B2B [2026]",
          excerpt:
            "Kako rade PMax kampanje, kada ih koristiti i kako ih optimizovati.",
          href: "/blog/performance-max-vodic",
          readTime: "12 min"
        },
        {
          title: "Google Ads vs Meta Ads: Šta je Bolje za Vaš Biznis?",
          excerpt:
            "Kada koristiti koji kanal — razlike u targetingu, troškovima i ROI-u.",
          href: "/blog/google-ads-vs-meta",
          readTime: "9 min"
        },
        {
          title:
            "Google Ads za eCommerce vs B2B: Ključne Razlike u Strategiji",
          excerpt:
            "Razlike u kampanjama, KPI-jevima i strategijama za dva poslovna modela.",
          href: "/blog/ecommerce-vs-b2b",
          readTime: "11 min"
        }
      ]
    },
    {
      id: "merenje",
      number: 4,
      title: "Merenje i Analiza",
      description:
        "Bez pravilnog tracking-a i redovnog audita, sve ostalo je nagađanje. Naučite kako da postavite conversion tracking, koristite enhanced conversions i sprovedete kompletan audit Google Ads naloga.",
      level: "Srednji → Napredni",
      levelColor: "bg-orange-100 text-orange-800",
      posts: [
        {
          title:
            "Conversion Tracking za Google Ads: Zašto Vaše Kampanje Ne Rade",
          excerpt:
            "Vodič za pravilno postavljanje tracking-a, enhanced conversions i dijagnostiku.",
          href: "/blog/conversion-tracking-vodic",
          readTime: "12 min"
        },
        {
          title: "Google Ads Audit: Kompletan Checklist [2026]",
          excerpt:
            "80+ tačaka za proveru naloga, optimizaciju kampanja i bolji ROI.",
          href: "/blog/google-ads-audit-vodic",
          readTime: "15 min"
        }
      ]
    },
    {
      id: "napredne-strategije",
      number: 5,
      title: "Napredne Strategije",
      description:
        "Remarketing, optimizacija i troubleshooting za iskusne advertisere. Napredne strategije za remarketing kampanje, najčešće greške koje troše budžet i dijagnostika kada kampanje ne donose rezultate.",
      level: "Napredni",
      levelColor: "bg-red-100 text-red-800",
      posts: [
        {
          title: "Google Ads Remarketing: Kompletan Vodič [2026]",
          excerpt:
            "Setup, segmentacija i remarketing strategije koje povećavaju konverzije.",
          href: "/blog/remarketing-vodic",
          readTime: "14 min"
        },
        {
          title: "Google Ads Optimizacija: 20 Grešaka Koje Vas Koštaju Novca",
          excerpt:
            "Najčešće greške u strukturi, bidding-u i landing page-ovima — i kako ih ispraviti.",
          href: "/blog/google-ads-greske",
          readTime: "13 min"
        },
        {
          title:
            "Zašto Google Ads Kampanje Ne Donose Rezultate (i Kako to Popraviti)",
          excerpt:
            "12 najčešćih razloga za loše performanse i konkretna rešenja za svaki problem.",
          href: "/blog/zasto-nema-rezultata",
          readTime: "12 min"
        }
      ]
    }
  ];
};

function ChapterNav({ chapters, locale }: { chapters: Chapter[]; locale: string }) {
  return (
    <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-6 md:p-8">
      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-5 font-semibold">
        {locale === "en" ? "Guide contents" : "Sadržaj vodiča"}
      </p>
      <nav className="space-y-3">
        {chapters.map((chapter) => (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className="flex items-center gap-3 group no-underline"
          >
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:bg-yellow-400 group-hover:text-gray-900 transition-colors">
              {chapter.number}
            </span>
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span className="font-heading font-semibold text-gray-900 group-hover:text-primary transition-colors text-sm md:text-base">
                {chapter.title}
              </span>
              <span
                className={`hidden md:inline-block text-xs font-semibold px-2 py-0.5 rounded ${chapter.levelColor}`}
              >
                {chapter.level}
              </span>
            </div>
            <span className="text-gray-400 text-sm flex-shrink-0">
              {chapter.posts.length}{" "}
              {locale === "en"
                ? (chapter.posts.length === 1 ? "guide" : "guides")
                : (chapter.posts.length === 1 ? "vodič" : "vodiča")}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}

function ChapterSection({ chapter, locale }: { chapter: Chapter; locale: string }) {
  return (
    <section id={chapter.id} className="scroll-mt-8">
      <div className="flex items-start gap-4 mb-2">
        <span className="flex-shrink-0 w-10 h-10 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-lg font-bold font-heading mt-1">
          {chapter.number}
        </span>
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-0 mt-0">
              {chapter.title}
            </h2>
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded ${chapter.levelColor}`}
            >
              {chapter.level}
            </span>
          </div>
          <p className="text-gray-600 mt-2 mb-0">{chapter.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {chapter.posts.map((post, index) => (
          <Link key={post.href} href={post.href} className="no-underline">
            <Card className="h-full">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-0.5 rounded">
                  {chapter.number}.{index + 1}
                </span>
                <span className="text-xs">
                  {post.readTime} {locale === "en" ? "read" : "čitanja"}
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold mb-2 text-gray-900">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
              <span className="text-primary font-medium text-sm">
                {locale === "en" ? "Read guide →" : "Pročitaj vodič →"}
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const chapters = getChapters(locale);

  const totalPosts = chapters.reduce(
    (sum, ch) => sum + ch.posts.length,
    0
  );

  const allPosts = chapters.flatMap((ch) => ch.posts);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Slobodan Jelisavac",
    url: "https://www.slobodan-jelisavac.com",
    jobTitle: "Google Ads Strategist"
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "en" ? "Google Ads Guide" : "Google Ads Vodič",
    description:
      locale === "en"
        ? "Complete collection of Google Ads guides — from basics to advanced campaign optimization strategies."
        : "Kompletna kolekcija Google Ads vodiča — od osnova do naprednih strategija za optimizaciju kampanja.",
    numberOfItems: totalPosts,
    itemListElement: allPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: `https://www.slobodan-jelisavac.com${post.href}`
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "en" ? "Home" : "Početna",
        item: "https://www.slobodan-jelisavac.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: locale === "en" ? "Google Ads Guide" : "Google Ads Vodič",
        item: "https://www.slobodan-jelisavac.com/blog"
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {locale === "en" ? "Home" : "Početna"}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-yellow-400 font-medium">
                {locale === "en" ? "Google Ads Guide" : "Google Ads Vodič"}
              </li>
            </ol>
          </nav>

          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">
            {locale === "en" ? "Free educational resource" : "Besplatan edukativni resurs"}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            {locale === "en" ? "Google Ads Guide" : "Google Ads Vodič"}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            {locale === "en"
              ? "From complete beginner to advanced advertiser — everything you need to know about Google Ads, in one place."
              : "Od potpunog početnika do naprednog advertisera — sve što treba da znate o Google Ads-u, na jednom mestu."}
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            <div>
              <p className="text-3xl md:text-4xl font-heading font-bold text-yellow-400">
                {totalPosts}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {locale === "en" ? "guides" : "vodiča"}
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-heading font-bold text-yellow-400">
                5
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {locale === "en" ? "chapters" : "poglavlja"}
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-heading font-bold text-yellow-400">
                3h+
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {locale === "en" ? "content" : "sadržaja"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Intro */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            {locale === "en" ? (
              <>
                This <strong>Google Ads guide</strong> is designed to help you master
                Google advertising step by step — whether you're just starting out or already
                have experience with paid campaigns. Each guide is written based on
                real experience with clients in Serbia, UK and EU.
              </>
            ) : (
              <>
                Ovaj <strong>Google Ads vodič</strong> je osmišljen da vam pomogne da savladate
                Google oglašavanje korak po korak — bez obzira da li tek počinjete ili već
                imate iskustva sa plaćenim kampanjama. Svaki vodič je pisan na osnovu
                realnog iskustva sa klijentima u Srbiji, UK i EU.
              </>
            )}
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {locale === "en" ? (
              <>
                Start with the basics in the first chapter, then progress to more complex topics
                like remarketing, conversion tracking and account audits. Each chapter
                is marked with a difficulty level, so you always know where you are on the journey
                from <strong>beginner to Google Ads expert</strong>.
              </>
            ) : (
              <>
                Počnite od osnova u prvom poglavlju, pa napredujte ka složenijim temama
                kao što su remarketing, conversion tracking i audit naloga. Svako poglavlje
                je označeno nivoom težine, tako da uvek znate gde se nalazite na putu
                od <strong>početnika do Google Ads eksperta</strong>.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <ChapterNav chapters={chapters} locale={locale} />
        </div>
      </section>

      {/* Chapters */}
      <section className="pb-16 md:pb-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
          {chapters.map((chapter) => (
            <ChapterSection key={chapter.id} chapter={chapter} locale={locale} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Want a professional to manage your campaigns?"
              : "Želite da profesionalac upravlja vašim kampanjama?"}
          </h2>
          <p className="text-slate-300 mb-8">
            {locale === "en"
              ? "Over a decade of experience in Google Ads optimization for eCommerce and B2B clients in Serbia, UK and EU."
              : "Preko decenije iskustva u Google Ads optimizaciji za eCommerce i B2B klijente u Srbiji, UK i EU."}
          </p>
          <Link href="/kontakt" className="btn-secondary inline-block">
            {locale === "en"
              ? "Book a free consultation"
              : "Zakažite besplatnu konsultaciju"}
          </Link>
        </div>
      </section>
    </>
  );
}
