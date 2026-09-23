import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Section } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";
import { PERSON_REF } from "@/lib/brand";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return buildMetadata({
    title: isEn
      ? "Google Ads for Private Clinics and Diagnostics"
      : "Google Ads za klinike i dijagnostičke centre | Slobodan Jelisavac",
    description: isEn
      ? "Google Ads for private clinics and diagnostic centres: health policy know-how, audiences and booking measurement, account management."
      : "Google Ads za klinike i dijagnostičke centre: zdravstvene politike, publike i merenje zakazivanja, vođenje naloga.",
    locale,
    path: "/industries/healthcare",
    srPath: "/industrije/medicina",
  });
}

export default async function MedicinaPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === "en";

  const ctaLabel = isEn ? "Schedule a call" : "Zakažite poziv";
  const breadcrumbLabel = isEn ? "Industries: Healthcare" : "Industrije: Medicina";

  const introParagraphs = isEn
    ? [
        `Patient acquisition is rarely done well, and healthcare advertising comes with policies most people underestimate.`,
        `Health is one of Google's "sensitive interest categories". That restricts targeting: remarketing, customer match, and lookalike audiences aren't allowed for healthcare ads.`,
        `Conversion tracking itself isn't affected - that's a separate issue.`,
        `Individual keywords can get rejected under the same policy, even for a routine, legal service like ultrasound scans. The fix is a formal exception request per keyword; not guaranteed, but in my case they were approved.`,
        `Diagnostics don't require special certification, unlike prescription drugs or insurance. The audience restriction applies in every market; certification and some services vary by country.`,
        `I know claims rules from the product side too: I've managed a UK premium skincare brand for over two years, where product claims need proof.`,
      ]
    : [
        `Akviziciju pacijenata malo ko radi kako treba. Zdravstveno oglašavanje nosi politike koje traže posebno iskustvo.`,
        `Zdravlje je za Google "osetljiva kategorija interesovanja". To ograničava targetiranje: remarketing, customer match i slične (lookalike) publike su zabranjene za zdravstvene oglase.`,
        `Praćenje konverzija time nije pogođeno - to je odvojeno pitanje.`,
        `Pojedinačne ključne reči mogu biti odbijene po zdravstvenoj politici, čak i za uobičajene preglede, na primer ultrazvuk. Rešenje je zvaničan zahtev za izuzeće; nije zagarantovan, ali u mom slučaju je prihvaćen.`,
        `Za preglede i dijagnostiku Google ne traži posebnu sertifikaciju, za razliku od propisivanja lekova ili zdravstvenog osiguranja. Ograničenje publika važi na svim tržištima; sertifikacija i neke usluge zavise od zemlje.`,
        `Pravila o tvrdnjama znam i sa strane proizvoda: više od dve godine vodim UK brend premium kozmetike, gde tvrdnja o dejstvu mora da ima pokriće.`,
      ];

  const moneyLeaks = isEn
    ? [
        `The website. I check where the "Book Now" button leads: to a slot for that specific service, or to a general price list.`,
        `The path from click to booking. I check whether a cheaper, entry-level service sends cold traffic straight to a calendar, before the visitor understands what they're booking.`,
        `Health policy knowledge. Campaigns set up without knowing health policy: rejected keywords, rejected ads, lost days.`,
      ]
    : [
        `Sajt. Proveravam kuda vodi dugme "Zakažite": na termin za tu uslugu ili na opšti cenovnik.`,
        `Put od klika do zakazivanja. Proveravam da li jeftinija, ulazna usluga šalje hladan saobraćaj pravo na kalendar, pre nego što posetilac razume šta tačno zakazuje.`,
        `Poznavanje zdravstvene politike. Kampanje podešene bez znanja o zdravstvenim politikama: odbijene reči, odbijeni oglasi, izgubljeni dani.`,
      ];

  const measurementParagraphs = isEn
    ? [
        `The goal is the same on every account: results and patient lifetime value over time.`,
        `The healthcare restriction is on targeting, not on measurement: remarketing, customer match, and similar audiences aren't allowed. In-market segments, affinity audiences, demographics, and location still work.`,
        `When the main conversion has no reliable signal, I look for an event analytics already records - for example, a form submission on the booking page - and use it as a proxy for intent, per service, until the tracking gets fixed.`,
      ]
    : [
        `Cilj je isti na svakom nalogu: rezultat i vrednost pacijenta tokom vremena.`,
        `Ograničenje u zdravstvu je na targetiranju, ne na merenju: remarketing, customer match i slične publike nisu dozvoljene. Rade in-market segmenti, affinity publike, demografija i lokacija.`,
        `Kad glavna konverzija u nalogu nema pouzdan signal, tražim događaj koji analitika već beleži - na primer slanje forme na stranici za zakazivanje - i koristim ga kao merilo namere po usluzi, dok se merenje ne popravi.`,
      ];

  const checklistSteps = isEn
    ? [
        `First, an account and policy audit before a single ad gets written: what's allowed, what isn't, and where budget already leaks.`,
        `Second, how many keywords Google is rejecting under health policy, with a formal exception request for each one.`,
        `Third, the path from ad to booking: does the button go where it promises.`,
        `Fourth, a measurement signal for when the main conversion has no reliable tracking: an event analytics already records, per service.`,
      ]
    : [
        `Prvo, audit naloga i politika, pre pisanja ijednog oglasa: šta je dozvoljeno, šta nije, i gde budžet već curi.`,
        `Drugo, provera koliko ključnih reči Google odbija po zdravstvenoj politici, i zvaničan zahtev za izuzeće za svaku od njih.`,
        `Treće, provera puta od oglasa do zakazivanja: da li dugme na sajtu zaista vodi tamo gde obećava.`,
        `Četvrto, signal za merenje kad glavna konverzija nema pouzdan kod: događaj koji analitika već beleži, po usluzi.`,
      ];

  const faqs = isEn
    ? [
        {
          question: `Can I advertise diagnostic scans and private check-ups on Google?`,
          answer: `Yes. Scans and check-ups don't need special certification. Telemedicine and prescribing services do, including in the UK.`,
        },
        {
          question: `Can I retarget people who already visited my website?`,
          answer: `Not with remarketing or customer match: Google bans both for healthcare ads, in every market. In-market segments, affinity audiences, demographics, and location still work.`,
        },
        {
          question: `What happens if Google rejects some of my keywords?`,
          answer: `I submit a formal exception request for the specific keyword or ad. It's not guaranteed; in my case, requests were approved.`,
        },
        {
          question: `Does health policy mean I can't measure my results?`,
          answer: `No. The policy restricts audiences; conversion tracking is a separate issue.`,
        },
        {
          question: `Do you work with smaller clinics, or only larger diagnostic centres?`,
          answer: `Both. Pricing and scope depend on budget, decided on the call.`,
        },
        {
          question: `Will you promise a specific number of new patients?`,
          answer: `No. I report what's in the account and what it means for your budget.`,
        },
      ]
    : [
        {
          question: `Da li Google uopšte dozvoljava oglašavanje za dijagnostičke usluge i preglede?`,
          answer: `Da. Dijagnostika i pregledi nisu propisivanje lekova, farmaceutska industrija ni osiguranje, i ne traže posebnu Google sertifikaciju.`,
        },
        {
          question: `Mogu li da targetiram ljude koji su već bili na sajtu?`,
          answer: `Ne remarketingom ni customer match publikom: Google ih zabranjuje za zdravstvene oglase, na svim tržištima. Rade in-market segmenti, affinity publike, demografija i lokacija.`,
        },
        {
          question: `Šta ako mi Google odbije ključne reči?`,
          answer: `Podnosim zvaničan zahtev za izuzeće za konkretnu reč ili oglas. Nije zagarantovano; u mom slučaju su zahtevi prihvaćeni.`,
        },
        {
          question: `Da li zdravstvena politika znači da ne mogu da merim rezultate?`,
          answer: `Politika ograničava publike; praćenje konverzija radi kao i inače. Ako glavna konverzija nema pouzdan signal, koristim događaj koji analitika već beleži, dok se merenje ne popravi.`,
        },
        {
          question: `Radite li i sa manjim ordinacijama?`,
          answer: `Da. Cena i obim zavise od budžeta; to se dogovara na pozivu.`,
        },
        {
          question: `Da li obećavate broj pacijenata ili pad cene po zakazivanju?`,
          answer: `Ne. Iznosim šta vidim u nalogu i šta to znači za budžet.`,
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEn ? "Google Ads for Private Clinics and Diagnostics" : "Google Ads za klinike i dijagnostičke centre",
    description: isEn
      ? "Google Ads management for private clinics and diagnostic centres: health policy compliance, audience strategy within healthcare restrictions, and booking measurement."
      : "Vođenje Google Ads naloga za klinike i dijagnostičke centre: usklađenost sa zdravstvenim politikama, strategija publika u okviru ograničenja i merenje zakazivanja.",
    provider: PERSON_REF,
    areaServed: [
      { "@type": "Country", name: "Serbia" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    serviceType: "Google Ads management for healthcare",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEn ? "Home" : "Početna",
        item: "https://www.slobodan-jelisavac.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: breadcrumbLabel,
        item: isEn
          ? "https://www.slobodan-jelisavac.com/en/industries/healthcare"
          : "https://www.slobodan-jelisavac.com/sr/industrije/medicina",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero - bez slike, jedan CTA */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {isEn ? "Home" : "Početna"}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-accent font-medium">{breadcrumbLabel}</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {isEn
                ? "Google Ads for Private Clinics and Diagnostic Centres"
                : "Google Ads za klinike i dijagnostičke centre"}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              {isEn
                ? `10+ years running Google Ads accounts, 50+ brands, 3x UK Search Awards. I've worked with several diagnostic centres in Serbia and now manage a private diagnostic clinic's account in London.`
                : `Radio sam sa više dijagnostičkih centara u Srbiji, a trenutno vodim nalog privatne dijagnostičke klinike u Londonu. Zdravstveno oglašavanje ima svoja pravila.`}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kontakt" variant="secondary">
                {ctaLabel}
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
              <span>{isEn ? "10+ years of experience" : "10+ godina iskustva"}</span>
              <span>3x UK Search Awards</span>
              <span>{isEn ? "50+ brands across 6+ countries" : "50+ brendova iz 6+ zemalja"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Zdravstvo nije kao drugi sektori */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6">
            {isEn ? "Healthcare isn't like other sectors" : "Zdravstvo nije kao drugi sektori"}
          </h2>
          <div className="space-y-4">
            {introParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-gray-700 text-base md:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Gde novac curi - numerisane kartice, stil "Sta dobijate" */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "Where the money leaks" : "Gde novac curi"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isEn ? "Three places I check first, on every account." : "Tri mesta proveravam prvo kod svakog naloga."}
          </p>
        </div>
        <ol className="max-w-2xl mx-auto space-y-4">
          {moneyLeaks.map((item, index) => (
            <li key={item} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-card">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold font-heading">
                {index + 1}
              </span>
              <p className="text-gray-700 text-base">{item}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Kako se meri, i kad publike nisu dozvoljene - CTA posle ovog bloka */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6">
            {isEn ? "How measurement works when audiences are restricted" : "Kako se meri, i kad publike nisu dozvoljene"}
          </h2>
          <div className="space-y-4 mb-8">
            {measurementParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-gray-700 text-base md:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="text-center">
            <Button href="/kontakt" variant="secondary">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </Section>

      {/* Sta proveravam prvo u nalogu klinike - numerisane kartice */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "What I check first in a clinic's account" : "Šta proveravam prvo u nalogu klinike"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isEn ? "The order is the same, regardless of the clinic." : "Redosled rada je isti, bez obzira na kliniku."}
          </p>
        </div>
        <ol className="max-w-2xl mx-auto space-y-4">
          {checklistSteps.map((step, index) => (
            <li key={step} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-card">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold font-heading">
                {index + 1}
              </span>
              <p className="text-gray-700 text-base">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Sta dobijate */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6">
            {isEn ? "What you get" : "Šta dobijate"}
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {isEn
                ? `I manage Google Ads accounts for clinics and diagnostic centres. The first step is a review of the account and policy; whether that's a full audit or a shorter review depends on budget, decided on the call.`
                : `Vodim Google Ads naloge za klinike i dijagnostičke centre. Prvi korak je pregled naloga i politika; da li je to pun audit ili kraći pregled, zavisi od budžeta, i to kažem na pozivu.`}
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {isEn ? (
                <>
                  Pricing depends on budget and number of services, worked out on a short call. See{" "}
                  <Link href="/usluge/google-ads-audit" className="text-primary underline">
                    what a Google Ads audit covers
                  </Link>{" "}
                  first.
                </>
              ) : (
                <>
                  Cena i obim zavise od budžeta i broja usluga; dogovaraju se na pozivu. Ako želite prvo da vidite šta
                  tačno pokriva jedan Google Ads audit, pogledajte{" "}
                  <Link href="/usluge/google-ads-audit" className="text-primary underline">
                    šta pokriva Google Ads audit
                  </Link>
                  .
                </>
              )}
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {isEn
                ? `I don't promise patient numbers or a lower cost per booking. I report what's in the account and what it means for your budget.`
                : `Ne obećavam broj pacijenata ni pad cene po zakazivanju unapred. Rezultat proveravam u nalogu i iznosim šta to znači za budžet.`}
            </p>
          </div>
        </div>
      </Section>

      {/* Pitanja koja klinike stvarno postavljaju */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "Questions clinics ask" : "Pitanja koja klinike stvarno postavljaju"}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="bg-white border-2 border-gray-200 rounded-xl group"
              open={index === 0 ? true : undefined}
            >
              <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
                {faq.question}
                <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
                  &#9660;
                </span>
              </summary>
              <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Final CTA - dark, treci put isti poziv na akciju */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            {isEn ? "Let's talk about your account" : "Razgovarajmo o vašem nalogu"}
          </h2>
          <p className="text-slate-300 mb-8">
            {isEn
              ? `Schedule a call and find out what I see in your Google Ads account and what it means for your budget.`
              : `Zakažite poziv i saznaćete šta vidim u vašem Google Ads nalogu i šta to znači za budžet.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
