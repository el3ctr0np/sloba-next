import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ProfitTool } from "./ProfitTool";
import { ShieldCheck, Mail, Gauge } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return buildMetadata({
    title: isEn
      ? "Google Ads Waste Calculator — How Much Budget Is Leaking?"
      : "Google Ads Kalkulator Curenja — Koliko Budžeta Curi? | Slobodan Jelisavac",
    description: isEn
      ? "Free calculator: enter your monthly spend and see roughly how many dollars leak each month — with a transparent formula and a detailed breakdown by email within 24 hours."
      : "Besplatan kalkulator: unesite mesečni budžet i vidite otprilike koliko evra curi mesečno — uz transparentnu formulu i detaljan pregled na email u roku od 24h.",
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
          description: "Enter your numbers, or answer 6 quick questions instead.",
        },
        {
          icon: <ShieldCheck size={22} strokeWidth={1.5} className="text-gray-900" />,
          title: "A concrete number, transparent math",
          description: "A deterministic estimate from real-audit patterns — formula shown.",
        },
        {
          icon: <Mail size={22} strokeWidth={1.5} className="text-gray-900" />,
          title: "Personal breakdown by email",
          description: "Where your account is most likely leaking — within 24 hours.",
        },
      ]
    : [
        {
          icon: <Gauge size={22} strokeWidth={1.5} className="text-gray-900" />,
          title: "Za manje od minuta, bez pristupa nalogu",
          description: "Unesite svoje brojke, ili odgovorite na 6 pitanja umesto toga.",
        },
        {
          icon: <ShieldCheck size={22} strokeWidth={1.5} className="text-gray-900" />,
          title: "Konkretna cifra, transparentna matematika",
          description: "Deterministička procena iz obrazaca stvarnih audita — formula prikazana.",
        },
        {
          icon: <Mail size={22} strokeWidth={1.5} className="text-gray-900" />,
          title: "Lični pregled na email",
          description: "Gde vaš nalog najverovatnije curi — u roku od 24h.",
        },
      ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-accent text-slate-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5">
            {isEn ? "FREE CHECK" : "BESPLATNA PROCENA"}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-5 leading-tight">
            {isEn ? (
              <>
                How much of your Google Ads budget actually works —{" "}
                <span className="text-accent">and how much just leaks?</span>
              </>
            ) : (
              <>
                Koliko vaš Google Ads budžet stvarno radi —{" "}
                <span className="text-accent">a koliko curi?</span>
              </>
            )}
          </h1>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            {isEn
              ? "Enter your numbers and see the estimate in seconds — or answer 6 quick questions if you don't have them handy. Built from patterns in real audits, with the formula shown. Not a generic widget."
              : "Unesite svoje brojke i vidite procenu za nekoliko sekundi — ili odgovorite na 6 pitanja ako brojke nisu pri ruci. Pravljeno na osnovu obrazaca iz stvarnih audita, uz prikazanu formulu. Ne generički widget."}
          </p>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            {isEn
              ? "On accounts I take over, I typically find 20-40% of the budget doing nothing at all."
              : "Na nalozima koje preuzmem u proseku nađem 20-40% budžeta koji ne radi ništa."}
          </p>
        </div>
      </section>

      {/* Diagnostic */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <ProfitTool locale={locale} />
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
    </div>
  );
}
