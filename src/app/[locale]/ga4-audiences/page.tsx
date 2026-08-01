import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/metadata";
import { DownloadForm } from "./DownloadForm";
import { Layers, RefreshCw, TerminalSquare, ListChecks } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return buildMetadata({
    title: isEn
      ? "GA4 Audience Framework for Repeat-Purchase Ecommerce — Free Download"
      : "GA4 Audience Framework za eCommerce sa Ponovljenom Kupovinom - Besplatno Preuzimanje | Slobodan Jelisavac",
    description: isEn
      ? "Twenty five GA4 audience lists across six layers, as markdown files you drop into Claude or ChatGPT so it builds them with you, plus a PDF. Lifecycle, value, intent, brand, replenishment, predictive — with the three Admin API limits and the workaround for each. Email only."
      : "Dvadeset pet GA4 audience lista u šest stubova, kao markdown fajlovi koje ubaciš u Claude ili ChatGPT pa ti ih gradi, plus PDF. Lifecycle, vrednost, namera, brend, replenishment i prediktivne liste, sa tri ograničenja Admin API-ja i zaobilaznicom za svako. Traži se samo email.",
    locale,
    path: "/ga4-audiences",
  });
}

export default async function GA4AudiencesPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === "en";

  const inside = isEn
    ? [
        {
          icon: ListChecks,
          title: "All 25 lists, configured",
          text: "Name, definition, the exact GA4 condition, the membership window, and what each list is for. Not a description of what audiences are — the settings, ready to be entered.",
        },
        {
          icon: TerminalSquare,
          title: "Prompts that build them for you",
          text: "One prompt for the Admin API route, one that walks you through the GA4 interface list by list, one that verifies what actually got built, and one that derives your real repurchase cycle from your own data.",
        },
        {
          icon: RefreshCw,
          title: "The replenishment layer",
          text: "The three lists almost nobody builds. A moisturiser lasts 60 to 90 days, a 60-capsule supplement about two months. The windows, and how to find yours if you sell something else.",
        },
        {
          icon: Layers,
          title: "Three Admin API limits, with workarounds",
          text: "Lifetime value is not allowed in API filters. Count filters have no rolling windows. And \"has not purchased in N days\" cannot be built in GA4 at all — it is assembled in Google Ads as target minus exclusion.",
        },
      ]
    : [
        {
          icon: ListChecks,
          title: "Svih 25 lista, sa konfiguracijom",
          text: "Ime, definicija, tačan GA4 uslov, prozor članstva i čemu lista služi. Nije objašnjenje šta su publike, nego podešavanja spremna za unos.",
        },
        {
          icon: TerminalSquare,
          title: "Promptovi koji ih grade umesto tebe",
          text: "Jedan prompt za Admin API rutu, jedan koji te vodi kroz GA4 interfejs listu po listu, jedan koji proveri šta je stvarno napravljeno i jedan koji iz tvojih podataka izvuče stvarni ciklus ponovne kupovine.",
        },
        {
          icon: RefreshCw,
          title: "Replenishment sloj",
          text: "Tri liste koje skoro niko ne pravi. Krema traje 60 do 90 dana, pakovanje od 60 kapsula oko dva meseca. Prozori, i kako da nađeš svoje ako prodaješ nešto drugo.",
        },
        {
          icon: Layers,
          title: "Tri ograničenja Admin API-ja, sa zaobilaznicama",
          text: "Lifetime value ne prolazi u API filterima. Count filteri nemaju klizne prozore. A \"nije kupio u poslednjih N dana\" se u GA4 ne gradi uopšte - sklapa se u Google Ads-u kao ciljna lista minus isključenje.",
        },
      ];

  const forWhom = isEn
    ? [
        "Skincare, cosmetics, supplements — anything that gets used up and bought again",
        "Stores with ecommerce events already flowing into GA4 (view_item, add_to_cart, purchase)",
        "Anyone who has built five audiences, watched none of them reach a delivery threshold, and concluded audiences do not work",
      ]
    : [
        "Nega kože, kozmetika, suplementi - sve što se potroši pa dokupi",
        "Prodavnice kojima ecommerce eventi već stižu u GA4 (view_item, add_to_cart, purchase)",
        "Svako ko je napravio pet publika, video da nijedna ne pređe prag isporuke, i zaključio da publike ne rade",
      ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-accent text-slate-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5">
            {isEn ? "FREE DOWNLOAD" : "BESPLATNO PREUZIMANJE"}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-5 leading-tight">
            {isEn ? (
              <>
                25 GA4 audiences for repeat-purchase ecommerce,{" "}
                <span className="text-accent">built by your own AI assistant</span>
              </>
            ) : (
              <>
                25 GA4 publika za ecommerce sa ponovljenom kupovinom,{" "}
                <span className="text-accent">koje ti gradi tvoj AI asistent</span>
              </>
            )}
          </h1>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            {isEn
              ? "I built this framework out through the GA4 Admin API for a UK skincare retailer, then stripped every brand name out of it. You get markdown files you drop into Claude or ChatGPT so it builds the lists with you, and a PDF of the same thing to read."
              : "Framework sam izgradio kroz GA4 Admin API za jednu UK skincare prodavnicu, pa iz njega izbacio svako ime brenda. Dobijaš markdown fajlove koje ubaciš u Claude ili ChatGPT pa ti liste gradi sa tobom, i PDF iste stvari za čitanje."}
          </p>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            {isEn
              ? "GA4 audiences only fill from the moment you create them, plus about 30 days of backfill. The worst time to build them is the day you need them."
              : "GA4 publike se pune tek od trenutka kreiranja, uz oko 30 dana unazad. Najgori trenutak da ih praviš je dan kad ti zatrebaju."}
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <DownloadForm locale={locale} />
        </div>
      </section>

      {/* What is inside */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
              {isEn ? "What is inside" : "Šta je unutra"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isEn
                ? "Six markdown files and a PDF. The markdown is written to be read by a model as an instruction, not by you as an article — you run it, you end up with the lists."
                : "Šest markdown fajlova i PDF. Markdown je pisan tako da ga model čita kao instrukciju, ne ti kao članak - pokreneš ga i na kraju imaš liste."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {inside.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-6">
                  <Icon size={24} strokeWidth={1.5} className="text-primary mb-3" />
                  <h3 className="font-heading font-semibold mb-2 leading-snug">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
            {isEn ? "Who it is for" : "Za koga je"}
          </h2>
          <ul className="space-y-3 mb-8">
            {forWhom.map((line) => (
              <li key={line} className="flex gap-3 text-gray-700 leading-relaxed">
                <span className="text-primary font-bold shrink-0">·</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed">
            {isEn
              ? "It is not for lead gen. The lifecycle, value and intent layers carry over, but replenishment does not, and that is half of why this framework exists."
              : "Nije za lead gen. Lifecycle, vrednosni i intent slojevi se prenose, ali replenishment ne, a to je pola razloga zašto ovaj framework postoji."}
          </p>
        </div>
      </section>

      {/* Who wrote it */}
      <section className="py-10 md:py-12 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <Image
            src="/slobodan-jelisavac-photo.png"
            alt="Slobodan Jelisavac"
            width={72}
            height={72}
            className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full object-cover shrink-0"
            unoptimized
          />
          <p className="text-gray-700 leading-relaxed">
            {isEn ? (
              <>
                <span className="font-semibold text-gray-900">I am Slobodan Jelisavac.</span>{" "}
                I run Google Ads for ecommerce brands and I built these 25 lists on a live account before writing
                any of this down. The whole framework is also{" "}
                <Link
                  href={{ pathname: "/blog/[slug]", params: { slug: "ga4-audiences-ecommerce-framework" } }}
                  className="underline text-blue-700 font-medium"
                >
                  on the blog, free and ungated
                </Link>
                . The download exists because reading a framework and running one are different jobs.
              </>
            ) : (
              <>
                <span className="font-semibold text-gray-900">Ja sam Slobodan Jelisavac.</span>{" "}
                Vodim Google Ads za ecommerce brendove i ovih 25 lista sam izgradio na živom nalogu pre nego što
                sam ijednu reč zapisao. Ceo framework je i{" "}
                <Link
                  href={{ pathname: "/blog/[slug]", params: { slug: "ga4-publike-ecommerce-framework" } }}
                  className="underline text-blue-700 font-medium"
                >
                  na blogu, besplatno i bez forme
                </Link>
                . Preuzimanje postoji zato što je čitati framework jedan posao, a pokrenuti ga drugi.
              </>
            )}
          </p>
        </div>
      </section>
    </div>
  );
}
