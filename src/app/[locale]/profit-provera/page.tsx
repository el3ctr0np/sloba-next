import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ProfitLeakCheck } from "./ProfitLeakCheck";
import { ShieldCheck, Mail, Gauge } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return buildMetadata({
    title: isEn
      ? "Google Ads Profit-Leak Check — How Much Is Your Account Leaking?"
      : "Google Ads Profit-Leak Check — Koliko vaš nalog curi? | Slobodan Jelisavac",
    description: isEn
      ? "Free 90-second diagnostic: 6 questions to estimate how much of your Google Ads budget is leaking — plus a personal breakdown of the exact leak points by email within 24 hours."
      : "Besplatna procena za 90 sekundi: 6 pitanja za procenu koliko vašeg Google Ads budžeta curi — plus lični pregled tačnih tačaka curenja na email u roku od 24h.",
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
          title: "90 seconds, 6 questions",
          description: "No account access needed — just answer honestly.",
        },
        {
          icon: <ShieldCheck size={22} strokeWidth={1.5} className="text-gray-900" />,
          title: "Instant leak estimate",
          description: "A deterministic score based on patterns from real audits.",
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
          title: "90 sekundi, 6 pitanja",
          description: "Ne treba pristup nalogu — samo iskreni odgovori.",
        },
        {
          icon: <ShieldCheck size={22} strokeWidth={1.5} className="text-gray-900" />,
          title: "Odmah procena curenja",
          description: "Deterministički skor baziran na obrascima iz stvarnih audita.",
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
              ? "6 questions, 90 seconds. I build this leak estimate from patterns in real audits — not a generic widget."
              : "6 pitanja, 90 sekundi. Procenu curenja pravim na osnovu obrazaca iz stvarnih audita — ne generički widget."}
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
          <ProfitLeakCheck locale={locale} />
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
