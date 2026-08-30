import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

const BASE_URL = "https://www.slobodan-jelisavac.com";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return buildMetadata({
      title: "Free Google Ads Tools | Slobodan Jelisavac",
      description:
        "Free tools for people running their own Google Ads: a 38-point Performance Max review, a budget calculator, a GA4 audience framework and an account audit checklist. All run in the browser, none of them gate the result behind an email.",
      locale,
      path: "/resources",
      srPath: "/resursi",
    });
  }

  return buildMetadata({
    title: "Besplatni Google Ads alati | Slobodan Jelisavac",
    description:
      "Besplatni alati za one koji sami vode Google Ads: provera Performance Max kampanje kroz 38 tačaka, budžet kalkulator, GA4 audience framework i audit checklista naloga. Sve radi u pretraživaču, nijedan ne krije rezultat iza emaila.",
    locale,
    // buildMetadata derives the EN alternate from `path`, so the SR branch has to
    // pass the EN path plus srPath. Without it the en hreflang points at
    // /en/resursi, which only resolves through a redirect.
    path: "/resources",
    srPath: "/resursi",
  });
}

/**
 * The free-tools hub.
 *
 * Built Aug 30 2026 because three of the four tools were reachable only from
 * inside a specific blog post: no nav entry, no footer link, nothing. One hub
 * gives every tool a home, gives the header a single link that covers all of
 * them, and gives us an indexable page to point internal links at.
 */
export default async function ResourcesPage({ params }: Props) {
  const { locale } = await params;
  const sr = locale !== "en";

  const tools = sr
    ? [
        {
          href: "/resursi/pmax-check" as const,
          eyebrow: "Interaktivna provera",
          title: "PMax Check",
          lead: "Prođite kroz 38 tačaka provere Performance Max kampanje i dobijte ponderisan skor po grupi i ukupno, plus redosled popravki po odnosu uticaja i napora.",
          meta: "15 do 20 minuta · progres se čuva · bez emaila",
          featured: true,
        },
        {
          href: "/resursi/ga4-framework" as const,
          eyebrow: "Preuzimanje",
          title: "GA4 Audience Framework",
          lead: "Dvadeset pet GA4 audience lista u šest stubova, kao markdown fajlovi koje ubacite u Claude ili ChatGPT pa vam ih izgradi, plus PDF.",
          meta: "traži se samo email",
          featured: true,
        },
        {
          href: "/resursi/budzet-kalkulator" as const,
          eyebrow: "Kalkulator",
          title: "Budžet kalkulator",
          lead: "Tri broja koja već znate, dva koja vam trebaju: koliki klik smete da platite i koliki vam budžet realno treba za cilj.",
          meta: "transparentna formula · bez emaila",
          featured: false,
        },
        {
          href: {
            pathname: "/blog/[slug]" as const,
            params: { slug: "google-ads-audit-vodic" },
            hash: "preuzmite-checklist",
          },
          eyebrow: "Preuzimanje",
          title: "Audit checklista naloga",
          lead: "Sto pet tačaka provere celog Google Ads naloga u tabeli, sa kolonom kako se proverava, šta je crveni signal i koji je prioritet.",
          meta: ".xlsx · radi u Sheets, Excelu i LibreOffice-u",
          featured: false,
        },
      ]
    : [
        {
          href: "/resursi/pmax-check" as const,
          eyebrow: "Interactive check",
          title: "PMax Check",
          lead: "Work through 38 Performance Max checkpoints and get a weighted score per group and overall, plus the order to fix things in, weighed by impact against effort.",
          meta: "15 to 20 minutes · progress saved · no email",
          featured: true,
        },
        {
          href: "/resursi/ga4-framework" as const,
          eyebrow: "Download",
          title: "GA4 Audience Framework",
          lead: "Twenty five GA4 audience lists across six layers, as markdown files you drop into Claude or ChatGPT so it builds them with you, plus a PDF.",
          meta: "email only",
          featured: true,
        },
        {
          href: "/resursi/budzet-kalkulator" as const,
          eyebrow: "Calculator",
          title: "Budget calculator",
          lead: "Three numbers you already know, two you need: the click price you can afford and the budget your goal actually requires.",
          meta: "transparent formula · no email",
          featured: false,
        },
        {
          href: {
            pathname: "/blog/[slug]" as const,
            params: { slug: "google-ads-audit-checklist" },
            hash: "get-the-checklist",
          },
          eyebrow: "Download",
          title: "Account audit checklist",
          lead: "A hundred and five checkpoints across a whole Google Ads account in a spreadsheet, with a how-to-check column, a red-flag column and a priority.",
          meta: ".xlsx · works in Sheets, Excel and LibreOffice",
          featured: false,
        },
      ];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: sr ? "Besplatni Google Ads alati" : "Free Google Ads tools",
    url: `${BASE_URL}/${sr ? "sr/resursi" : "en/resources"}`,
    inLanguage: sr ? "sr-RS" : "en",
    author: {
      "@type": "Person",
      name: "Slobodan Jelisavac",
      url: `${BASE_URL}/${sr ? "sr/o-meni" : "en/about"}`,
    },
  };

  return (
    <main className="min-h-[80vh] bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-3">
          {sr ? "Besplatno" : "Free"}
        </p>
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
          {sr ? "Besplatni Google Ads alati" : "Free Google Ads tools"}
        </h1>
        <p className="text-gray-600 text-lg mb-10 max-w-2xl">
          {sr
            ? "Alati koje sam napravio da bih ih sam koristio, pa ih ostavljam i vama. Rade u pretraživaču, a rezultat vidite bez ostavljanja emaila. Email tražim samo ako hoćete izveštaj u inbox ili fajl za preuzimanje."
            : "Tools I built because I use them myself, left here for you. They run in the browser and show you the result without an email. I only ask for one if you want a report in your inbox or a file to download."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className={`group block rounded-2xl p-6 md:p-7 transition-all duration-300 no-underline hover:-translate-y-1 ${
                tool.featured
                  ? "bg-slate-900 text-white border-2 border-gray-900 shadow-card hover:shadow-card-lg"
                  : "bg-white border-2 border-gray-200 hover:border-gray-900 shadow-card"
              }`}
            >
              <p
                className={`text-xs uppercase tracking-[0.15em] font-bold mb-2 ${
                  tool.featured ? "text-accent" : "text-primary"
                }`}
              >
                {tool.eyebrow}
              </p>
              <p
                className={`font-heading font-bold text-xl md:text-2xl mb-2 ${
                  tool.featured ? "text-white" : "text-gray-900"
                }`}
              >
                {tool.title}
              </p>
              <p
                className={`text-sm md:text-base mb-4 ${
                  tool.featured ? "text-slate-300" : "text-gray-600"
                }`}
              >
                {tool.lead}
              </p>
              <p
                className={`text-xs mb-4 ${
                  tool.featured ? "text-slate-400" : "text-gray-400"
                }`}
              >
                {tool.meta}
              </p>
              <span
                className={`text-sm font-semibold inline-flex items-center gap-1 ${
                  tool.featured ? "text-accent" : "text-primary"
                }`}
              >
                {sr ? "Otvorite" : "Open"}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>

        {/* Where to go when a tool is not what you needed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <Link
            href="/blog"
            className="block bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-gray-900 transition-colors no-underline"
          >
            <p className="font-heading font-semibold text-gray-900 mb-1">
              {sr ? "Vodiči" : "The guides"}
            </p>
            <p className="text-sm text-gray-500 mb-0">
              {sr
                ? "Puna mehanika iza svakog alata, po kanalu i po temi."
                : "The full mechanics behind every tool, by channel and by topic."}
            </p>
          </Link>
          <Link
            href="/usluge/google-ads-audit"
            className="block bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-gray-900 transition-colors no-underline"
          >
            <p className="font-heading font-semibold text-gray-900 mb-1">
              {sr ? "Kad hoćete da neko prođe umesto vas" : "When you want someone to do it for you"}
            </p>
            <p className="text-sm text-gray-500 mb-0">
              {sr
                ? "Plaćeni audit: prolazim kroz nalog i vraćam nalaz sa planom po prioritetu."
                : "The paid audit: I go through the account and come back with findings and a plan in priority order."}
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
