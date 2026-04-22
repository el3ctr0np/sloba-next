import { Section } from "@/components/ui";

export type Testimonial = {
  /** Unique slug for deep-linking + schema @id */
  slug: string;
  /** Quote body (30-200 words ideal) */
  quote: string;
  /** Optional headline / key metric pulled out of quote */
  headline?: string;
  /** Author full name */
  name: string;
  /** Role + company */
  role: string;
  /** Optional: company logo URL (placed in public/clients/) */
  logo?: string;
  /** Optional: author photo (LinkedIn-scraped OK) */
  photo?: string;
  /** Optional: Country / region flag emoji */
  flag?: string;
  /** Optional: tier — used for sizing on homepage (hero vs standard) */
  tier?: "hero" | "standard";
  /** Optional: service match — filter for per-service-page rendering */
  serviceMatch?: (
    | "google-ads"
    | "shopping"
    | "pmax"
    | "search"
    | "remarketing"
    | "youtube"
    | "audit"
    | "consulting"
  )[];
};

/**
 * Placeholder testimonial data — REPLACE with real quotes when client
 * outreach is complete (see Asana task: request testimonials P0 clients).
 *
 * Priority order for real data:
 * 1. Grant Findlay (Chelleon UK) — video + written, 2-year relationship
 * 2. Janko (Perun Moto) — written with ROAS metric
 * 3. Mike/Kate (OutSearch) — LinkedIn recommendation
 * 4. Nedim (Pickbox HRV) — written
 * 5. SR clients — short quotes
 */
export const placeholderTestimonials: Testimonial[] = [
  {
    slug: "chelleon-uk-grant",
    quote:
      "[PLACEHOLDER — Grant Findlay / Chelleon UK] Pre Slobe, naš Google Ads ROAS je bio oko 2.1x i kampanje su davale nepredvidive rezultate. Posle 6 meseci sistematskog rada, naš ROAS je dosegao 4.8x, a Shopping revenue preko £290k. Ono što me najviše impresionira nije sama brojka — već kako Sloba razmišlja o kampanjama. To je dugoročna vrednost za naš tim.",
    headline: "ROAS 2.1x → 4.8x, £290k+ Shopping revenue",
    name: "Grant Findlay",
    role: "Managing Director, Chelleon UK",
    flag: "🇬🇧",
    tier: "hero",
    serviceMatch: ["google-ads", "shopping", "pmax"],
  },
  {
    slug: "perun-moto",
    quote:
      "[PLACEHOLDER — Janko / Perun Moto] Tražili smo konsultanta koji razume premium eCommerce — neko ko neće samo da poveća broj klikova, već da razume našu marginu i poziciju na globalnom tržištu. Sloba je to razumeo od prvog razgovora.",
    headline: "Premium eCommerce u USA/EU tržištu",
    name: "Janko",
    role: "Founder, Perun Moto",
    flag: "🇺🇸",
    tier: "standard",
    serviceMatch: ["google-ads", "shopping"],
  },
  {
    slug: "outsearch-uk",
    quote:
      "[PLACEHOLDER — Mike / OutSearch] Sloba je vodio 8 naših UK klijenata kroz white-label saradnju. Pravi data-driven pristup, bez fluff-a. Retko se sreće toliko jasno razmišljanje u agency landscape-u.",
    headline: "8 UK klijenata, 2-godišnja saradnja",
    name: "Mike Lyndsey",
    role: "CEO, OutSearch UK",
    flag: "🇬🇧",
    tier: "standard",
    serviceMatch: ["google-ads", "audit"],
  },
  {
    slug: "pickbox-hrv",
    quote:
      "[PLACEHOLDER — Nedim / Pickbox HRV] Saradnja kroz Funky Enterprises je bila idealna — dobili smo stručnost Slobe bez full agency overhead-a. YouTube i Search kampanje rade konzistentno.",
    headline: "Cross-channel YouTube + Search",
    name: "Nedim",
    role: "Pickbox HRV",
    flag: "🇭🇷",
    tier: "standard",
    serviceMatch: ["youtube", "google-ads"],
  },
  {
    slug: "slep-sluzba-nm",
    quote:
      "[PLACEHOLDER — Šlep Služba NM] Za lokalnu uslugu poput naše, najvažniji su telefonski pozivi. Sloba je postavio tracking i kampanje tako da tačno znamo koliko nas svaki poziv košta.",
    headline: "Lokalna LeadGen, call tracking fokus",
    name: "Šlep Služba NM",
    role: "Client, Pančevo",
    flag: "🇷🇸",
    tier: "standard",
    serviceMatch: ["google-ads", "search"],
  },
  {
    slug: "funky-enterprises",
    quote:
      "[PLACEHOLDER — Funky Enterprises] Sloba je naš Google Ads partner za premium klijente sa budžetom €5,000+ mesečno. Omnichannel pristup koji kombinuje Google + Meta + SEO + CRO.",
    headline: "Partnership za premium budžete",
    name: "Funky Enterprises Team",
    role: "Omnichannel Agency Partner",
    flag: "🇷🇸",
    tier: "standard",
    serviceMatch: ["consulting"],
  },
];

type Props = {
  testimonials?: Testimonial[];
  /** Layout variant */
  variant?: "grid" | "slider" | "hero" | "compact";
  /** Optional section title + subtitle */
  title?: string;
  subtitle?: string;
  /** Optional: filter by service slug */
  serviceFilter?:
    | "google-ads"
    | "shopping"
    | "pmax"
    | "search"
    | "remarketing"
    | "youtube"
    | "audit"
    | "consulting";
  /** Optional: max number to display */
  limit?: number;
  /** Optional: className for outer section */
  className?: string;
};

/**
 * Testimonials section — renders reusable across homepage, services,
 * case studies, contact, and /audit landing page.
 */
export function Testimonials({
  testimonials = placeholderTestimonials,
  variant = "grid",
  title,
  subtitle,
  serviceFilter,
  limit,
  className = "",
}: Props) {
  let items = testimonials;
  if (serviceFilter) {
    items = items.filter((t) => t.serviceMatch?.includes(serviceFilter));
  }
  if (limit) {
    items = items.slice(0, limit);
  }

  if (variant === "hero") {
    const t = items[0];
    if (!t) return null;
    return (
      <div className={`bg-slate-900 text-white rounded-2xl p-8 md:p-10 ${className}`}>
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg">★</span>
          ))}
        </div>
        <p className="text-xl md:text-2xl font-heading font-semibold leading-snug mb-6">
          "{t.quote}"
        </p>
        <div className="flex items-center gap-3 pt-4 border-t border-slate-700">
          {t.photo && (
            <img
              src={t.photo}
              alt={t.name}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          <div>
            <p className="font-bold text-white mb-0">{t.name} {t.flag}</p>
            <p className="text-sm text-slate-400 mb-0">{t.role}</p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`space-y-4 ${className}`}>
        {items.map((t) => (
          <div key={t.slug} className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
            </div>
            <p className="text-sm text-gray-700 mb-3 leading-relaxed line-clamp-3">
              "{t.quote}"
            </p>
            <div className="text-xs">
              <span className="font-semibold text-gray-900">{t.name}</span>
              <span className="text-gray-500"> — {t.role} {t.flag}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Default: grid variant (3-col on desktop)
  return (
    <Section className={className}>
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-3">
              {title}
            </h2>
          )}
          {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((t) => (
          <article
            key={t.slug}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow flex flex-col"
          >
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            {t.headline && (
              <p className="text-sm font-heading font-bold text-primary mb-3 uppercase tracking-wide">
                {t.headline}
              </p>
            )}
            <p className="text-gray-700 leading-relaxed mb-4 flex-1 text-sm md:text-base">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
              {t.photo && (
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-900 mb-0 text-sm truncate">
                  {t.name} {t.flag}
                </p>
                <p className="text-xs text-gray-500 mb-0 truncate">{t.role}</p>
              </div>
              {t.logo && (
                <img
                  src={t.logo}
                  alt={`${t.name} company logo`}
                  className="h-6 w-auto opacity-70"
                />
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
