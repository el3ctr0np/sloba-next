import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return buildMetadata({
      title: "Thank You | Slobodan Jelisavac",
      description: "We received your inquiry. Book a slot for a free Google Ads consultation.",
      locale,
      path: "/contact/thank-you",
      srPath: "/kontakt/hvala",
    });
  }

  return buildMetadata({
    title: "Hvala na upitu | Slobodan Jelisavac",
    description: "Primili smo vaš upit. Zakažite termin za besplatnu Google Ads konsultaciju.",
    locale,
    path: "/kontakt/hvala",
  });
}

const getPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Slobodan Jelisavac",
  url: "https://www.slobodan-jelisavac.com",
  jobTitle: "Google Ads Strategist"
});

const getBreadcrumbSchema = (locale: string) => ({
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
      name: locale === "en" ? "Contact" : "Kontakt",
      item: "https://www.slobodan-jelisavac.com/kontakt"
    },
    {
      "@type": "ListItem",
      position: 3,
      name: locale === "en" ? "Thank You" : "Hvala",
      item: "https://www.slobodan-jelisavac.com/kontakt/hvala"
    }
  ]
});

const getCallBenefits = (locale: string) => {
  if (locale === "en") {
    return [
      {
        title: "Tailored assessment for your business",
        description:
          "Instead of generic advice, we analyze your specific situation — industry, budget and goals."
      },
      {
        title: "Actionable recommendations immediately",
        description:
          "At the end of the call you'll have a clear plan of what needs to be done, even if we don't continue working together."
      },
      {
        title: "No obligation, no pressure",
        description:
          "This is a conversation, not a sales pitch. Just an honest look at your opportunities."
      }
    ];
  }

  return [
    {
      title: "Tačna procena za vaš biznis",
      description:
        "Umesto generičnih saveta, analiziramo vašu konkretnu situaciju — industriju, budžet i ciljeve."
    },
    {
      title: "Konkretne preporuke odmah",
      description:
        "Na kraju poziva imaćete jasan plan šta treba uraditi, čak i ako ne nastavimo saradnju."
    },
    {
      title: "Bez obaveze, bez pritiska",
      description:
        "Ovo je razgovor, ne prodajni pitch. Samo iskren pogled na vaše mogućnosti."
    }
  ];
};

const getCallSteps = (locale: string) => {
  if (locale === "en") {
    return [
      "Quick review of your current state (or goals if you're just starting)",
      "Analysis of key opportunities and problems in your campaigns",
      "Concrete recommendations and strategy proposal",
      "Answers to all your questions"
    ];
  }

  return [
    "Brzi pregled vašeg trenutnog stanja (ili ciljeva ako tek počinjete)",
    "Analiza ključnih prilika i problema u vašim kampanjama",
    "Konkretne preporuke i predlog strategije",
    "Odgovori na sva vaša pitanja"
  ];
};

const getFaqs = (locale: string) => {
  if (locale === "en") {
    return [
      {
        question: "How long is the call?",
        answer:
          "20-30 minutes. Long enough to understand your business and give concrete recommendations, but short enough not to waste time."
      },
      {
        question: "Do I need to prepare anything?",
        answer:
          "Not required, but if you have access to your Google Ads account, that will help. If not, we'll talk about your goals and budget."
      },
      {
        question: "Will I be pressured to buy something?",
        answer:
          "No. This is a conversation, not a sales call. Many clients use the consultation just for a second opinion — and that's perfectly fine."
      },
      {
        question: "What if I'm not ready to work together yet?",
        answer:
          "No problem. You'll get useful advice that applies whether we continue working together or not."
      }
    ];
  }

  return [
    {
      question: "Koliko traje poziv?",
      answer:
        "20-30 minuta. Dovoljno da razumem vaš biznis i dam konkretne preporuke, a dovoljno kratko da ne gubimo vreme."
    },
    {
      question: "Da li moram nešto pripremiti?",
      answer:
        "Nije obavezno, ali ako imate pristup Google Ads nalogu, to će pomoći. Ako nemate, razgovaraćemo o vašim ciljevima i budžetu."
    },
    {
      question: "Da li ću biti pod pritiskom da kupim nešto?",
      answer:
        "Ne. Ovo je razgovor, ne prodajni poziv. Mnogi klijenti koriste konsultaciju samo za second opinion — i to je potpuno u redu."
    },
    {
      question: "Šta ako još nisam spreman za saradnju?",
      answer:
        "Nema problema. Dobićete korisne savete koji važe bez obzira da li nastavimo saradnju ili ne."
    }
  ];
};

export default async function ThankYouPage({ params }: Props) {
  const { locale } = await params;
  const personSchema = getPersonSchema();
  const breadcrumbSchema = getBreadcrumbSchema(locale);
  const callBenefits = getCallBenefits(locale);
  const callSteps = getCallSteps(locale);
  const faqs = getFaqs(locale);

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

      {/* Dark Hero - Confirmation */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
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
                <li>
                  <Link
                    href="/kontakt"
                    className="hover:text-white transition-colors"
                  >
                    {locale === "en" ? "Contact" : "Kontakt"}
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white">{locale === "en" ? "Thank You" : "Hvala"}</li>
              </ol>
            </nav>

            {/* Success indicator */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-green-400 font-semibold">
                {locale === "en" ? "Inquiry received" : "Upit primljen"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              {locale === "en"
                ? "Book Your Free Google Ads Strategy Call"
                : "Zakažite vaš besplatni Google Ads Strategy Call"}
            </h1>

            <p className="text-lg text-slate-300 mb-8">
              {locale === "en"
                ? "We received your inquiry — I'll respond within 24h. To speed things up, book a slot now."
                : "Primili smo vaš upit — javim se u roku od 24h. Ali ako želite da ubrzate proces, zakažite termin odmah i preskočite čekanje."}
            </p>

            {/* Primary CTA - Calendar booking */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              {/* TODO: Replace with actual Calendly/Cal.com link */}
              <Button href="/kontakt" variant="secondary">
                {locale === "en" ? "Book a Slot Now" : "Zakažite termin odmah"}
              </Button>
              <Button href="/case-studies" variant="primary">
                {locale === "en"
                  ? "View Results While You Wait"
                  : "Pogledajte rezultate dok čekate"}
              </Button>
            </div>

            <p className="text-sm text-slate-400">
              {locale === "en"
                ? "No obligation. No pressure. Just honest conversation."
                : "Bez obaveze. Bez pritiska. Samo iskren razgovor."}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits of the Call */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Why book a call now"
              : "Zašto da zakažete poziv odmah"}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {callBenefits.map((benefit) => (
            <Card key={benefit.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* What Happens on the Call */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            {locale === "en" ? "What you'll get on the call" : "Šta ćete dobiti na pozivu"}
          </h2>
          <div className="space-y-6">
            {callSteps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-lg pt-0.5">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Who You'll Speak With */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6 text-center">
            {locale === "en" ? "Who You'll Speak With" : "Sa kim ćete razgovarati"}
          </h2>
          <Card>
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              {/* Photo placeholder */}
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-slate-400 text-xs">
                  {locale === "en" ? "Photo" : "Foto"}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold mb-1">
                  Slobodan Jelisavac
                </h3>
                <p className="text-yellow-600 font-semibold text-sm mb-3">
                  {locale === "en"
                    ? "Google Ads Strategist — 9+ years of experience"
                    : "Google Ads Strategist — 9+ godina iskustva"}
                </p>
                <p className="text-gray-600">
                  {locale === "en"
                    ? "You'll speak directly with me — not an account manager or junior employee. The same person who analyzes your campaigns is the one who optimizes them. UK Search Awards winner, 50+ brands across 6+ countries."
                    : "Razgovaraćete direktno sa mnom — ne sa account managerom ili junior zaposlenim. Isti čovek koji analizira vaše kampanje je i onaj koji ih optimizuje. UK Search Awards winner, 50+ brendova u 6+ zemalja."}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Proof Strip */}
      <Section background="gray">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-heading font-bold text-slate-900 mb-1">
              9+
            </div>
            <p className="text-gray-500 text-sm">
              {locale === "en" ? "years of experience" : "godina iskustva"}
            </p>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold text-slate-900 mb-1">
              3.7x
            </div>
            <p className="text-gray-500 text-sm">
              {locale === "en" ? "average ROI" : "prosečan ROI"}
            </p>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold text-slate-900 mb-1">
              50+
            </div>
            <p className="text-gray-500 text-sm">
              {locale === "en" ? "brands" : "brendova"}
            </p>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold text-slate-900 mb-1">
              6+
            </div>
            <p className="text-gray-500 text-sm">
              {locale === "en" ? "countries" : "zemalja"}
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en" ? "Questions before the call" : "Pitanja pre poziva"}
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

      {/* Bottom CTA */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4 text-white">
            {locale === "en"
              ? "Don't wait — book a slot now"
              : "Ne čekajte — zakažite termin odmah"}
          </h2>
          <p className="text-slate-300 mb-8">
            {locale === "en"
              ? "Every day without optimization is wasted budget. Book a free call and get a clear plan for your campaigns."
              : "Svaki dan bez optimizacije je propušten budžet. Zakažite besplatan poziv i dobijte jasan plan za vaše kampanje."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* TODO: Replace with actual Calendly/Cal.com link */}
            <Button href="/kontakt" variant="secondary">
              {locale === "en" ? "Book a Slot Now" : "Zakažite termin odmah"}
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
            <Link
              href="/usluge"
              className="hover:text-white transition-colors underline"
            >
              {locale === "en" ? "Services" : "Usluge"}
            </Link>
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
          </div>
        </div>
      </section>
    </>
  );
}
