import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { EcomCalculator } from "./EcomCalculator";
import { ShieldCheck, Mail, Gauge, Target, TrendingUp, Percent } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return buildMetadata({
    title: isEn
      ? "eCommerce Profit Calculator — Is Your Ad Spend Actually Profitable?"
      : "eCommerce Kalkulator Profita - Da Li Vam Se Oglašavanje Isplati? | Slobodan Jelisavac",
    description: isEn
      ? "Free calculator: enter AOV, margin, conversion rate and ad spend to see your break-even ROAS and whether your marketing actually turns a profit — with a transparent formula and a personal read by email within 24 hours."
      : "Besplatan kalkulator: unesite AOV, maržu, stopu konverzije i budžet i vidite svoj break-even ROAS i da li vam se marketing zaista isplati, uz transparentnu formulu i lični pregled na email u roku od 24h.",
    locale,
    path: "/profit-leak-check",
    srPath: "/profit-provera",
  });
}

export default async function ProfitLeakPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === "en";

  const howItWorks = isEn
    ? [
        {
          icon: <Gauge size={22} strokeWidth={1.5} className="text-gray-900" />,
          title: "Under a minute, no account access",
          description: "Five numbers you already have in GA4 or Shopify.",
        },
        {
          icon: <ShieldCheck size={22} strokeWidth={1.5} className="text-gray-900" />,
          title: "Real unit economics, transparent math",
          description: "Break-even ROAS and profit — every line traces to one input.",
        },
        {
          icon: <Mail size={22} strokeWidth={1.5} className="text-gray-900" />,
          title: "Personal read by email",
          description: "Where your biggest profit lever is — within 24 hours.",
        },
      ]
    : [
        {
          icon: <Gauge size={22} strokeWidth={1.5} className="text-gray-900" />,
          title: "Za manje od minuta, bez pristupa nalogu",
          description: "Pet brojki koje već imate u GA4 ili Shopify-u.",
        },
        {
          icon: <ShieldCheck size={22} strokeWidth={1.5} className="text-gray-900" />,
          title: "Stvarna unit-ekonomija, transparentna matematika",
          description: "Break-even ROAS i profit - svaka linija se izvodi iz jednog unosa.",
        },
        {
          icon: <Mail size={22} strokeWidth={1.5} className="text-gray-900" />,
          title: "Lični pregled na email",
          description: "Gde vam je najveća poluga za profit - u roku od 24h.",
        },
      ];

  const explainers = isEn
    ? [
        {
          icon: Target,
          title: "Break-even ROAS is the number most stores get wrong",
          text: "If your margin is 40%, you need a 2.5× ROAS just to break even. Chase a '4× is good' rule of thumb with a 25% margin and you're quietly losing money on every order. The calculator gives you your real number.",
        },
        {
          icon: Percent,
          title: "A great ROAS on paper can still lose money",
          text: "Revenue ÷ spend ignores your margin, returns and cost of goods. Two stores at the same 4× ROAS keep completely different amounts. Profit is the only figure your bank recognizes.",
        },
        {
          icon: TrendingUp,
          title: "The ceiling on what you can bid isn't a guess",
          text: "Your AOV, margin and conversion rate set a hard ceiling on your max CPC. Bid above it and no amount of optimization makes the campaign profitable. This tells you exactly where that line is.",
        },
      ]
    : [
        {
          icon: Target,
          title: "Break-even ROAS je broj koji većina prodavnica pogrešno postavi",
          text: "Ako vam je marža 40%, treba vam ROAS od 2,5x samo da biste bili na nuli. Jurite pravilo 'ok je 4x' sa maržom od 25% i tiho gubite novac na svakoj porudžbini. Kalkulator vam daje vaš stvarni broj.",
        },
        {
          icon: Percent,
          title: "Odličan ROAS na papiru i dalje može da pravi gubitak",
          text: "Prihod ÷ budžet ne vidi vašu maržu, povraćaje i cenu robe. Dve prodavnice sa istim ROAS-om od 4x zadrže potpuno različit novac. Profit je jedina cifra koju banka priznaje.",
        },
        {
          icon: TrendingUp,
          title: "Plafon koliko smete da bid-ujete nije nagađanje",
          text: "Vaš AOV, marža i stopa konverzije postavljaju tvrd plafon na max CPC. Bid-ujete iznad njega i nijedna optimizacija ne čini kampanju profitabilnom. Ovo vam kaže tačno gde je ta linija.",
        },
      ];

  const faqs = isEn
    ? [
        {
          q: "Where do I find my conversion rate?",
          a: "GA4: Reports → Monetize → Overview shows the purchase conversion rate. Shopify shows it directly under Analytics → Conversion rate. A typical store sits between 1% and 3%.",
        },
        {
          q: "I don't know my exact margin. Is a rough number OK?",
          a: "Yes. Gross margin is (revenue − cost of goods) ÷ revenue. Even a rough estimate gives you a useful break-even ROAS — you can always refine it later.",
        },
        {
          q: "Do you need access to my store or ad account?",
          a: "No. The calculator works entirely from the numbers you enter. If you want the actual account looked at, that's what the free 20-minute call is for.",
        },
        {
          q: "What exactly arrives by email?",
          a: "A short, personally written read: given your numbers, where your biggest profit lever is — margin, conversion rate, CPC or catalog structure — and what I'd look at first. Not an automated PDF.",
        },
        {
          q: "Is it really free? What's the catch?",
          a: "It's free, and there's no drip sequence hammering your inbox. The calculator is how I show the way I think before you pay for anything. If it's useful and you want the account actually worked on, you know where to find me.",
        },
      ]
    : [
        {
          q: "Gde nalazim svoju stopu konverzije?",
          a: "GA4: Izveštaji → Monetizacija → Pregled prikazuje stopu konverzije kupovine. Shopify je pokazuje direktno pod Analytics → Conversion rate. Tipična prodavnica je između 1% i 3%.",
        },
        {
          q: "Ne znam tačnu maržu. Da li je gruba procena ok?",
          a: "Jeste. Bruto marža je (prihod − cena robe) ÷ prihod. I gruba procena vam daje koristan break-even ROAS - uvek možete kasnije da je precizirate.",
        },
        {
          q: "Da li vam treba pristup prodavnici ili Ads nalogu?",
          a: "Ne. Kalkulator radi isključivo na osnovu brojki koje unesete. Ako želite da se pogleda sam nalog, tome služi besplatnih 20 minuta razgovora.",
        },
        {
          q: "Šta tačno stiže na email?",
          a: "Kratak, lično napisan pregled: na osnovu vaših brojki, gde vam je najveća poluga za profit - marža, stopa konverzije, CPC ili struktura kataloga - i šta bih prvo pogledao. Ne automatski PDF.",
        },
        {
          q: "Da li je stvarno besplatno? Gde je caka?",
          a: "Besplatno je i nema niza mejlova koji vas jure. Kalkulator je način da vidite kako razmišljam pre nego što išta platite. Ako vam bude koristan i želite da se na nalogu stvarno radi, znate gde sam.",
        },
      ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-accent text-slate-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5">
            {isEn ? "FREE eCOMMERCE CHECK" : "BESPLATNA eCOMMERCE PROVERA"}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-5 leading-tight">
            {isEn ? (
              <>
                Does your ad spend actually turn a profit —{" "}
                <span className="text-accent">or just revenue?</span>
              </>
            ) : (
              <>
                Da li vam se oglašavanje zaista isplati,{" "}
                <span className="text-accent">ili donosi samo promet?</span>
              </>
            )}
          </h1>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            {isEn
              ? "Enter five numbers you already have — AOV, margin, conversion rate, spend and catalog size — and see your break-even ROAS and whether the marketing math actually works. The formula is shown, nothing is hidden."
              : "Unesite pet brojki koje već imate (AOV, maržu, stopu konverzije, budžet i veličinu kataloga) i vidite svoj break-even ROAS i da li marketing matematika zaista radi. Formula je prikazana, ništa nije skriveno."}
          </p>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            {isEn
              ? "Most stores optimize toward a ROAS number that has nothing to do with their margin. This shows you the number that actually matters."
              : "Većina prodavnica optimizuje na ROAS broj koji nema veze sa njihovom maržom. Ovo vam pokazuje broj koji zaista znači."}
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <EcomCalculator locale={locale} />
        </div>
      </section>

      {/* Who reviews it — personal strip */}
      <section className="py-10 md:py-12 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <Image
            src="/slobodan-jelisavac-photo.png"
            alt="Slobodan Jelisavac"
            width={72}
            height={72}
            className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full object-cover shrink-0"
          />
          <p className="text-gray-700 leading-relaxed">
            {isEn ? (
              <>
                <span className="font-semibold text-gray-900">Every submission is read by me personally.</span>{" "}
                I&apos;m Slobodan Jelisavac — 10+ years in Google Ads for eCommerce, 3x UK Search Awards, 50+ brands.
                The read you get is written by hand, for your numbers.
              </>
            ) : (
              <>
                <span className="font-semibold text-gray-900">Svaki unos čitam lično.</span>{" "}
                Ja sam Slobodan Jelisavac - 10+ godina u Google Ads-u za eCommerce, 3x UK Search Awards, 50+ brendova.
                Pregled koji dobijete pišem rukom, za vaše brojke.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Why these numbers matter */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
              {isEn ? "Why these three numbers decide everything" : "Zašto ova tri broja odlučuju sve"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isEn
                ? "Break-even ROAS, real profit vs. revenue, and your bidding ceiling. Get these right and the rest of the account has something honest to build on."
                : "Break-even ROAS, stvarni profit naspram prometa i vaš plafon za bid-ovanje. Kad ovo postavite tačno, ostatak naloga ima na čemu pošteno da gradi."}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {explainers.map((e) => {
              const Icon = e.icon;
              return (
                <div key={e.title} className="bg-white border border-gray-200 rounded-xl p-6">
                  <Icon size={24} strokeWidth={1.5} className="text-primary mb-3" />
                  <h3 className="font-heading font-semibold mb-2 leading-snug">{e.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{e.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works strip */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {howItWorks.map((item) => (
            <div key={item.title} className="text-center md:text-left">
              <div className="mb-3 flex justify-center md:justify-start">{item.icon}</div>
              <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
            {isEn ? "Frequently asked questions" : "Česta pitanja"}
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white border border-gray-200 rounded-xl p-5"
              >
                <summary className="font-heading font-semibold cursor-pointer list-none flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-gray-400 transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <p className="text-gray-600 text-sm leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
