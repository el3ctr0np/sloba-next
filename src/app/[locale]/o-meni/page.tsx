import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section, AnimateOnScroll } from "@/components/ui";
import { AskAI } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return buildMetadata({
      title: "About | Slobodan Jelisavac - Google Ads Expert, More Than 10 Years of Experience",
      description: "Google Ads expert with more than a decade of experience. 3x UK Search Awards, 50+ brands in 6+ countries. Work directly with the expert — no middlemen.",
      locale,
      path: "/about",
      srPath: "/o-meni",
      ogImage: "/og/o-meni.png",
    });
  }

  return buildMetadata({
    title: "O meni | Slobodan Jelisavac - Google Ads Stručnjak, Više od 10 Godina Iskustva",
    description: "Google Ads stručnjak sa više od 10 godina iskustva - 3x UK Search Awards, 50+ brendova iz 6+ zemalja. Direktan rad sa ekspertom, bez posrednika.",
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
          title: "Belgrade agencies",
          description:
            "I started out in local Belgrade agencies, where I built my foundations on the Google Ads platform."
        },
        {
          period: "Growth",
          title: "Launchpresso and Exposure Ninja",
          description:
            "Then I moved on to international agencies. At Launchpresso, an Australian agency headquartered in Thailand, I ran campaigns for brands in markets where advertising is played seriously. In parallel, I worked as a Senior PPC expert at Exposure Ninja, one of the UK's best-known digital agencies — an agency that still wins the industry's biggest global awards (UK Search Awards, Global Search Awards). Campaigns I worked on won three UK Search Awards."
        },
        {
          period: "Today",
          title: "My own practice",
          description:
            "I started my own practice when the moment came to simply grow up. I was already sitting in conversations with decision-makers at large companies, on both the US and UK markets. That's where the desire formed: to keep doing everything I was already doing — but under my own roof, on my own terms, the way I work."
        }
      ]
    : [
        {
          period: "Početak",
          title: "Beogradske agencije",
          description:
            "Počeo sam u domaćim agencijama za oglašavanje, gde sam postavio temelje rada sa Google Ads platformom."
        },
        {
          period: "Rast",
          title: "Launchpresso i Exposure Ninja",
          description:
            "Zatim sam prešao na inostrane agencije. U Launchpresso, australijskoj agenciji sa sedištem na Tajlandu, vodio sam kampanje za brendove sa tržišta na kojima se oglašavanje igra ozbiljno. Uporedo sam radio kao Senior PPC ekspert u Exposure Ninja, jednoj od najpoznatijih UK digitalnih agencija - agenciji koja i danas osvaja najveće globalne nagrade industrije (UK Search Awards, Global Search Awards). Kampanje na kojima sam radio osvojile su tri UK Search Awards nagrade."
        },
        {
          period: "Danas",
          title: "Sopstvena praksa",
          description:
            "Sopstvenu praksu sam osnovao kad je došao momenat da jednostavno sazrim. Već sam sedeo u razgovorima sa donosiocima odluka velikih kompanija, i na američkom i na britanskom tržištu. Tu se stvorila želja da radim sve što sam i do tada radio, ali pod svojim krovom, pod svojim uslovima i na način na koji ja radim."
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
            "Počinjemo besplatnom konsultacijom gde razumem vaš biznis i ciljeve. Zatim predlažem strategiju i ako se složimo, krećemo sa radom - bez dugih ugovora."
        }
      ];

  // Person (#person) is emitted site-wide by <LocalBusinessSchema /> in the
  // locale layout — do not re-emit it here (a second #person would duplicate
  // the @id and split the entity).

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
                  ? "Founder, Digital Jelisavac · Senior Google Ads specialist · Partner at Funky Enterprises"
                  : "Osnivač, Digital Jelisavac · Senior Google Ads specijalista · Partner @ Funky Enterprises"}
              </p>

              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                {locale === "en"
                  ? "Slobodan Jelisavac: a Google Ads expert with more than a decade of experience"
                  : "Slobodan Jelisavac: Google Ads stručnjak sa više od decenije iskustva"}
              </h1>

              <p className="text-lg text-slate-300 mb-6">
                {locale === "en"
                  ? "Slobodan Jelisavac is an independent Google Ads consultant based in Belgrade, Serbia, with 10+ years of experience managing campaigns for 50+ brands across 6+ countries. I help companies from Serbia, the UK, and the USA get the most out of Google Ads. No cookie-cutter strategies, no junior staff on your account, just direct work with the expert."
                  : "Slobodan Jelisavac je nezavisni Google Ads konsultant iz Beograda, sa 10+ godina iskustva i preko 50 brendova u 6+ zemalja. Pomažem kompanijama iz Srbije, UK-a i USA da izvuku maksimum iz Google Ads-a. Bez generic pristupa, bez junior kadrova na vašem nalogu, samo direktan rad sa ekspertom."}
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary"
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
                  <span>{locale === "en" ? "More than 10 years of experience" : "Više od 10 godina iskustva"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary"
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
                  <span>3x UK Search Awards</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary"
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
                  <span>{locale === "en" ? "50+ brands in 6+ countries" : "50+ brendova iz 6+ zemalja"}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/kontakt" variant="secondary">
                  {locale === "en" ? "Book a free consultation" : "Zakažite besplatnu konsultaciju"}
                </Button>
                <Button href="/case-studies" variant="primary">
                  {locale === "en" ? "View results" : "Pogledajte rezultate"}
                </Button>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full aspect-[4/5] max-w-md rounded-2xl overflow-hidden">
                <Image
                  src="/foto/slobodan-jelisavac-google-ads-strucnjak.webp"
                  alt={locale === "en" ? "Slobodan Jelisavac, Google Ads expert" : "Slobodan Jelisavac, Google Ads stručnjak"}
                  width={800}
                  height={1000}
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
                  I got into this industry completely by accident, more than ten years ago. I was looking for a job I could do remotely, and it led me to digital advertising.
                </p>
                <p>
                  I quickly discovered that Google Ads pulled me in a way I hadn&apos;t expected: it wasn&apos;t marketing in the classic sense — it was working with data and business math.
                </p>
                <p>
                  It turned out to be a field where being analytical and persistent produces measurable results.
                </p>
              </>
            ) : (
              <>
                <p>
                  U industriju sam ušao potpuno slučajno, pre više od deset godina. Tražio sam posao koji mogu da radim remote i to me je dovelo do digitalnog oglašavanja.
                </p>
                <p>
                  Brzo sam otkrio da me Google Ads privlači na način koji nisam očekivao: nije to bio marketing u klasičnom smislu, nego rad sa podacima i biznis matematika.
                </p>
                <p>
                  Ispostavilo se da je to oblast u kojoj analitičnost i upornost donose merljive rezultate.
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
                    <span className="text-sm font-semibold text-accent uppercase tracking-wide">
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

      {/* 2026 and AI */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6">
            {locale === "en" ? "2026 and AI" : "2026. i AI"}
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            {locale === "en" ? (
              <p>
                As you already know, 2026 is pushing the whole industry toward AI innovation. I built my system in time: my AI agents now handle the jobs and procedures I spent years doing by hand, while I do the work that still takes an experienced human. No account depends on how many hours a day has, and no decision is left at junior level. What exactly does that system look like? That&apos;s something I show clients, not competitors.
              </p>
            ) : (
              <p>
                Kao što i sami znate, 2026. donosi ozbiljan pomak cele industrije ka AI inovacijama. Ja sam svoj sistem izgradio na vreme: moji AI agenti danas rade poslove i procedure koje sam godinama radio ručno, a ja radim ono za šta je i dalje potreban čovek sa iskustvom. Tako nijedan nalog ne zavisi od toga koliko sati ima dan, a nijedna odluka ne ostaje na nivou juniora. Kako tačno taj sistem izgleda? To pokazujem klijentima, ne konkurenciji.
              </p>
            )}
          </div>
        </div>
      </Section>

      {/* Why Work With Me */}
      <Section background="gray">
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

      {/* Longest Collaborations */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6">
            {locale === "en" ? "Longest collaborations" : "Najduže saradnje"}
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            {locale === "en" ? (
              <p>
                My longest collaborations are with clients who read reports the right way: the ones I can talk to transparently about everything — plans, finances, business decisions. When you go deep enough into a project and the conversations stop being surface-level, those clients stay for years. In this industry, that&apos;s genuinely rare.
              </p>
            ) : (
              <p>
                Najduže saradnje ostvarujem sa klijentima koji izveštaj razumeju na pravi način: sa kojima transparentno pričam o svemu - o planovima, o finansijama, o biznis odlukama. Kad se u projekat uđe dovoljno duboko i razgovara bez površnosti, ti klijenti ostaju u saradnji po nekoliko godina. A to je u ovoj industriji zaista retkost.
              </p>
            )}
          </div>
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
        <p className="text-center text-sm text-gray-500 mt-8">
          {locale === "en"
            ? "Awards verified on the official "
            : "Nagrade potvrđene na zvaničnoj stranici "}
          <a
            href="https://searchawards.co.uk/2021-winners/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:no-underline"
          >
            {locale === "en"
              ? "UK Search Awards 2021 winners page"
              : "UK Search Awards 2021"}
          </a>
        </p>
      </Section>

      {/* Outside of Work */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6">
            {locale === "en" ? "Outside of work" : "Van posla"}
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            {locale === "en" ? (
              <p>
                Outside of work: two small kids and a schedule built around them. Home base: Nova Pazova and Batajnica. I&apos;m always up for a business breakfast or lunch — my favorite conversations are with local business owners about how global trends can work for their businesses too.
              </p>
            ) : (
              <p>
                Van posla: dvoje male dece i raspored koji se prilagođava njima. Relacija Nova Pazova - Batajnica. Uvek sam raspoložen za biznis doručak ili ručak - najviše volim razgovore sa ljudima iz lokalnih sredina o tome kako svetski trendovi mogu da rade i za njihove poslove.
              </p>
            )}
          </div>
        </div>
      </section>

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

      <AskAI locale={locale} />

      {/* Dark CTA */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4 text-white">
            {locale === "en" ? "Ready for a conversation?" : "Spremni za razgovor?"}
          </h2>
          <p className="text-slate-300 mb-8">
            {locale === "en"
              ? "Book a free consultation and let's see how Google Ads can work for your business."
              : "Zakažite besplatnu konsultaciju i da vidimo kako Google Ads može raditi za vaš biznis."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              {locale === "en" ? "Book a free consultation" : "Zakažite besplatnu konsultaciju"}
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
