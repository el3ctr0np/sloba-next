import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section, AnimateOnScroll } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return buildMetadata({
      title: "About — Slobodan Jelisavac | Google Ads Consultant | 10+ Years",
      description: "Google Ads Consultant with 10+ years experience. UK Search Awards winner, 50+ brands in 6+ countries. Work directly with the expert — no middlemen.",
      locale,
      path: "/about",
      srPath: "/o-meni",
      ogImage: "/og/o-meni.png",
    });
  }

  return buildMetadata({
    title: "O Meni — Slobodan Jelisavac | Google Ads Konsultant | 10+ Godina Iskustva",
    description: "Google Ads konsultant sa 10+ godina iskustva. UK Search Awards winner, 50+ brendova u 6+ zemalja. Direktan rad sa ekspertom — bez posrednika.",
    locale,
    path: "/about",
    srPath: "/o-meni",
    ogImage: "/og/o-meni.png",
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  const stats = locale === "en"
    ? [
        { value: "3.7x", label: "average ROAS (eCommerce)" },
        { value: "-50%", label: "CPA reduction for lead generation" },
        { value: "3x", label: "UK Search Awards" },
        { value: "50+", label: "brands across 6+ countries" }
      ]
    : [
        { value: "3.7x", label: "prosečan ROAS (eCommerce)" },
        { value: "-50%", label: "smanjenje CPA za lead generation" },
        { value: "3x", label: "UK Search Awards" },
        { value: "50+", label: "brendova u 6+ zemalja" }
      ];

  const differentiators = locale === "en"
    ? [
        {
          title: "No middlemen",
          description:
            "You communicate directly with the person running your campaigns. No account managers, no juniors."
        },
        {
          title: "Data-driven decisions",
          description:
            "Every decision is backed by analysis. I review trends, test hypotheses, and optimize based on numbers."
        },
        {
          title: "Full transparency",
          description:
            "You know exactly what's happening, why, and what the results are. Regular reports without marketing jargon."
        },
        {
          title: "Long-term focus",
          description:
            "The goal isn't a quick win that disappears in a month, but sustainable growth that compounds over time."
        }
      ]
    : [
        {
          title: "Bez posrednika",
          description:
            "Vi komunicirate direktno sa osobom koja radi na vašim kampanjama. Nema account managera, nema juniora."
        },
        {
          title: "Podaci pre svega",
          description:
            "Svaka odluka je zasnovana na analizi. Pregledam trendove, testiram hipoteze i optimizujem na osnovu brojeva."
        },
        {
          title: "Transparentnost",
          description:
            "Znate tačno šta se dešava, zašto i kakvi su rezultati. Redovni izveštaji bez marketinškog žargona."
        },
        {
          title: "Dugoročan fokus",
          description:
            "Cilj nije brza pobeda koja nestane za mesec dana, već održiv rast koji se kompounduje."
        }
      ];

  const timeline = locale === "en"
    ? [
        {
          period: "Start",
          title: "Agency beginnings",
          description:
            "I started at several local advertising agencies in Belgrade, where I laid the foundation for working with the Google Ads platform."
        },
        {
          period: "Growth",
          title: "International agencies — Head of PPC",
          description:
            "I moved on to work with international agencies of various sizes. I worked for an Australian agency based in Thailand, managing campaigns for brands from Australia, the UK, and the USA. I soon took over the Head of PPC position."
        },
        {
          period: "Recognition",
          title: "Exposure Ninja (UK) — Senior PPC Expert",
          description:
            "I simultaneously worked as a Senior PPC expert at one of the UK's most prominent digital agencies. There I led campaigns that won 3x UK Search Awards — for Google Search and Microsoft Search campaigns I set up."
        },
        {
          period: "Today",
          title: "Digital Jelisavac & Funky Enterprises",
          description:
            "I founded my own practice with direct access to clients from the UK, USA, and the region. For premium brands that need a complete omnichannel team, I collaborate with Funky Enterprises."
        }
      ]
    : [
        {
          period: "Početak",
          title: "Beogradske agencije",
          description:
            "Počeo sam u nekoliko domaćih agencija za oglašavanje, gde sam postavio temelje za rad sa Google Ads platformom."
        },
        {
          period: "Rast",
          title: "Internacionalne agencije — Head of PPC",
          description:
            "Prešao sam na rad sa inostranim agencijama različitih veličina. Radio sam za australijsku agenciju sa sedištem na Tajlandu, gde sam upravljao kampanjama za brendove iz Australije, UK-a i USA. Ubrzo sam preuzeo poziciju Head of PPC."
        },
        {
          period: "Priznanja",
          title: "Exposure Ninja (UK) — Senior PPC ekspert",
          description:
            "Uporedo sam radio kao Senior PPC ekspert u jednoj od najpoznatijih UK digitalnih agencija. Tu sam vodio kampanje koje su osvojile 3x UK Search Awards — za Google Search i Microsoft Search kampanje koje sam postavio."
        },
        {
          period: "Danas",
          title: "Digital Jelisavac & Funky Enterprises",
          description:
            "Osnovao sam sopstvenu praksu sa direktnim pristupom klijentima iz UK-a, USA i regiona. Za premium brendove koji trebaju kompletan omnichannel tim, sarađujem sa Funky Enterprises."
        }
      ];

  const faqs = locale === "en"
    ? [
        {
          question: "Do you only work with Google Ads?",
          answer:
            "Google Ads is my primary expertise. For a complete omnichannel solution (Meta, SEO, creative), I collaborate with the Funky Enterprises team."
        },
        {
          question: "How many clients do you handle at once?",
          answer:
            "I deliberately limit the number of clients to give each one my full attention. That's the advantage of a boutique approach over a large agency."
        },
        {
          question: "Do you work with clients outside Serbia?",
          answer:
            "Yes, most of my clients are from the UK and USA. I also work with companies from the region (Croatia, Slovenia) and the rest of the EU."
        },
        {
          question: "What does the start of collaboration look like?",
          answer:
            "We start with a free consultation where I understand your business and goals. Then I propose a strategy, and if we agree, we get to work — no long contracts."
        }
      ]
    : [
        {
          question: "Da li radite samo Google Ads?",
          answer:
            "Google Ads je moja primarna ekspertiza. Za kompletno omnichannel rešenje (Meta, SEO, kreativa), sarađujem sa Funky Enterprises timom."
        },
        {
          question: "Koliko klijenata vodite istovremeno?",
          answer:
            "Svesno ograničavam broj klijenata da bih svakom posvetio punu pažnju. To je prednost boutique pristupa u odnosu na veliku agenciju."
        },
        {
          question: "Da li radite sa klijentima van Srbije?",
          answer:
            "Da, većina mojih klijenata su iz UK-a i USA. Takođe radim sa kompanijama iz regiona (Hrvatska, Slovenija) i ostatka EU."
        },
        {
          question: "Kako izgleda početak saradnje?",
          answer:
            "Počinjemo besplatnom konsultacijom gde razumem vaš biznis i ciljeve. Zatim predlažem strategiju i ako se složimo, krećemo sa radom — bez dugih ugovora."
        }
      ];

  const personSchema = locale === "en"
    ? {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Slobodan Jelisavac",
        url: "https://www.slobodan-jelisavac.com",
        jobTitle: "Google Ads Consultant",
        description:
          "Google Ads Consultant with 10+ years experience. UK Search Awards winner, 50+ brands in 6+ countries.",
        knowsAbout: [
          "Google Ads",
          "PPC Strategy",
          "eCommerce",
          "B2B Marketing",
          "Performance Marketing"
        ],
        award: ["UK Search Awards"],
        areaServed: [
          { "@type": "Country", name: "Serbia" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "Germany" },
          { "@type": "Country", name: "Croatia" },
          { "@type": "Country", name: "Australia" }
        ]
      }
    : {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Slobodan Jelisavac",
        url: "https://www.slobodan-jelisavac.com",
        jobTitle: "Google Ads Konsultant",
        description:
          "Google Ads konsultant sa 10+ godina iskustva. UK Search Awards winner, 50+ brendova u 6+ zemalja.",
        knowsAbout: [
          "Google Ads",
          "PPC Strategy",
          "eCommerce",
          "B2B Marketing",
          "Performance Marketing"
        ],
        award: ["UK Search Awards"],
        areaServed: [
          { "@type": "Country", name: "Serbia" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "Germany" },
          { "@type": "Country", name: "Croatia" },
          { "@type": "Country", name: "Australia" }
        ]
      };

  const breadcrumbSchema = locale === "en"
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
            name: "About",
            item: "https://www.slobodan-jelisavac.com/en/about"
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
            name: "O meni",
            item: "https://www.slobodan-jelisavac.com/sr/o-meni"
          }
        ]
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Dark Hero - Two Column */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-sm text-slate-400">
                <ol className="flex items-center space-x-2">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-white transition-colors"
                    >
                      {locale === "en" ? "Home" : "Početna"}
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="text-white">{locale === "en" ? "About" : "O meni"}</li>
                </ol>
              </nav>

              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                {locale === "en"
                  ? "Independent senior consultant · Partner & Head of Paid Media at Funky Enterprises"
                  : "Nezavisni senior konsultant · Partner @ Funky Enterprises"}
              </p>

              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                {locale === "en"
                  ? "Slobodan Jelisavac — Google Ads Consultant focused on data and results"
                  : "Slobodan Jelisavac — Google Ads Konsultant sa fokusom na podatke i rezultate"}
              </h1>

              <p className="text-lg text-slate-300 mb-6">
                {locale === "en"
                  ? "I help companies from Serbia, the UK, and the USA get the most out of Google Ads. No cookie-cutter strategies, no junior staff on your account — just direct work with an expert."
                  : "Pomažem kompanijama iz Srbije, UK-a i USA da izvuku maksimum iz Google Ads-a. Bez generic pristupa, bez junior kadrova na vašem nalogu — samo direktan rad sa ekspertom."}
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{locale === "en" ? "10+ years of experience" : "10+ godina iskustva"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>UK Search Awards winner</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{locale === "en" ? "50+ brands in 6+ countries" : "50+ brendova u 6+ zemalja"}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/kontakt" variant="secondary">
                  {locale === "en" ? "Book a free 20-minute call" : "Zakažite besplatnih 20 minuta"}
                </Button>
                <Button href="/case-studies" variant="primary">
                  {locale === "en" ? "View results" : "Pogledajte rezultate"}
                </Button>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full aspect-square max-w-md rounded-2xl overflow-hidden">
                <Image
                  src="/slobodan-jelisavac-photo.png"
                  alt="Slobodan Jelisavac — Google Ads konsultant"
                  width={480}
                  height={480}
                  className="w-full h-full object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6">
            {locale === "en"
              ? "How I ended up in the world of Google Ads"
              : "Kako sam završio u svetu Google Ads-a"}
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            {locale === "en" ? (
              <>
                <p>
                  I entered this industry nine years ago — completely by accident. I was looking for a job I could do remotely, and that led me to digital advertising.
                </p>
                <p>
                  I quickly discovered that Google Ads attracted me in a way I didn't expect. It wasn't marketing in the classic sense — it was working with data, analyzing numbers, financial optimization. Things I didn't even know I was drawn to until I tried them.
                </p>
                <p>
                  It turned out to be a field where analytical thinking and persistence produce measurable results — a decade later, campaigns I've worked on have won three UK Search Awards.
                </p>
              </>
            ) : (
              <>
                <p>
                  Ušao sam u ovu industriju pre devet godina — potpuno slučajno. Tražio sam posao koji mogu da radim remote, i to me je dovelo do digitalnog oglašavanja.
                </p>
                <p>
                  Brzo sam otkrio da me Google Ads privlači na način koji nisam očekivao. Nije to bio marketing u klasičnom smislu — bio je to rad sa podacima, analiza brojeva, finansijska optimizacija. Stvari za koje nisam ni znao da me privlače dok ih nisam probao.
                </p>
                <p>
                  Ispostavilo se da je to oblast u kojoj analitičnost i upornost donose merljive rezultate — deset godina kasnije, kampanje na kojima sam radio osvojile su tri UK Search Awards.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "From local agencies to global brands"
              : "Od beogradskih agencija do globalnih brendova"}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {timeline.map((step, index) => (
              <AnimateOnScroll key={step.title} animation="fade-up" delay={index * 200}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {index + 1}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-px h-full bg-gray-300 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-sm font-semibold text-yellow-600 uppercase tracking-wide">
                      {step.period}
                    </span>
                    <h3 className="text-xl font-heading font-bold mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Work With Me */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Why clients choose to work directly with me"
              : "Zašto klijenti biraju direktan rad sa mnom"}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {differentiators.map((item, index) => (
            <AnimateOnScroll key={item.title} delay={index * 100}>
              <Card className="h-full">
                <h3 className="text-lg font-heading font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en" ? "The numbers speak for themselves" : "Brojke govore"}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en" ? "Frequently Asked Questions" : "Često postavljana pitanja"}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="bg-white rounded-lg shadow-sm overflow-hidden group border border-gray-100"
            >
              <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-heading font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <svg
                  className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Dark CTA */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4 text-white">
            {locale === "en" ? "Ready for a conversation?" : "Spremni za razgovor?"}
          </h2>
          <p className="text-slate-300 mb-8">
            {locale === "en"
              ? "Book a free 20-minute call and let's see how Google Ads can work for your business."
              : "Zakažite besplatnih 20 minuta i da vidimo kako Google Ads može raditi za vaš biznis."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              {locale === "en" ? "Book a free 20-minute call" : "Zakažite besplatnih 20 minuta"}
            </Button>
            <Button href="/usluge" variant="primary">
              {locale === "en" ? "View services" : "Pogledajte usluge"}
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
            <Link
              href="/case-studies"
              className="hover:text-white transition-colors underline"
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              className="hover:text-white transition-colors underline"
            >
              Blog
            </Link>
            <Link
              href="/kontakt"
              className="hover:text-white transition-colors underline"
            >
              {locale === "en" ? "Contact" : "Kontakt"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
