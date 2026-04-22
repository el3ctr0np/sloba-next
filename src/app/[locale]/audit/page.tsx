import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Section } from "@/components/ui";
import { Testimonials } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return buildMetadata({
    title: isEn
      ? "Free Google Ads Video Audit — For Qualified eCommerce & B2B Brands"
      : "Besplatan Google Ads Video Audit — za kvalifikovane eCommerce i B2B brendove",
    description: isEn
      ? "15-minute video walkthrough of your Google Ads account: structure issues, conversion tracking gaps, bidding strategy, and top 3 priorities to fix. For brands with €1,000+/mo ad spend."
      : "15-minutni video review vašeg Google Ads naloga: struktura kampanja, conversion tracking, bidding strategija, i top 3 prioriteta za fix. Za brendove sa €1.000+/mes ad spend-om.",
    locale,
    path: "/audit",
    srPath: "/audit",
  });
}

export default async function AuditPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === "en";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500" />
        <div className="container-custom px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
                  {isEn ? "Limited to 5 audits / month" : "Ograničeno na 5 audita mesečno"}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-5 leading-[1.05]">
                {isEn ? (
                  <>
                    Free <span className="text-yellow-400">15-min Video Audit</span>
                    <br />
                    of Your Google Ads Account
                  </>
                ) : (
                  <>
                    Besplatan <span className="text-yellow-400">15-min Video Audit</span>
                    <br />
                    vašeg Google Ads naloga
                  </>
                )}
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                {isEn
                  ? "I'll personally review your account, record a 15-minute video walkthrough showing 3 red flags and top 3 priorities to fix. No sales pitch. Just a qualified second opinion from 9+ years of managing campaigns across 50+ brands."
                  : "Lično ću pregledati vaš nalog i snimiti 15-minutni video koji pokazuje 3 crvena flag-a i top 3 prioriteta za fix. Bez prodajnog razgovora. Samo kvalifikovano drugo mišljenje iz 9+ godina rada sa 50+ brendova."}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button href="#audit-form" variant="primary">
                  {isEn ? "Apply for Free Audit →" : "Prijavi se za Audit →"}
                </Button>
                <Button href="#how-it-works" variant="secondary">
                  {isEn ? "How it works" : "Kako funkcioniše"}
                </Button>
              </div>

              {/* Trust bar */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z" />
                  </svg>
                  {isEn ? "Personalized video (not templated)" : "Personalizovan video (ne template)"}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z" />
                  </svg>
                  {isEn ? "48-hour turnaround" : "Odgovor u 48h"}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z" />
                  </svg>
                  {isEn ? "No strings attached" : "Bez obaveze"}
                </span>
              </div>
            </div>

            {/* Right: Video preview mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 border-slate-700 shadow-2xl aspect-video flex items-center justify-center relative overflow-hidden">
                {/* Mock video player */}
                <div className="absolute inset-0 bg-[url('/hero.webp')] bg-cover bg-center opacity-40" />
                <div className="absolute inset-0 bg-slate-900/50" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <svg className="w-8 h-8 text-slate-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">
                    {isEn ? "Sample Audit Preview" : "Primer Audit Videa"}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">15:32</p>
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-xl">
                {isEn ? "Personalized for your account" : "Personalizovano za vaš nalog"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification — WHO THIS IS FOR */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
                {isEn ? "Qualification" : "Kvalifikacija"}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-3">
                {isEn ? "Is This Audit For You?" : "Da li je ovaj Audit za vas?"}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {isEn
                  ? "I only review accounts that match these criteria — because I want to actually move the needle for you, not give generic advice."
                  : "Radim audit samo za naloge koji ispunjavaju ove kriterijume — jer želim da stvarno pomognem, ne da dajem generičke savete."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* GREEN — ideal fit */}
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <h3 className="text-lg font-heading font-bold text-green-900 mb-0">
                    {isEn ? "Good fit" : "Pravi za vas"}
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-green-900">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>
                      {isEn
                        ? "eCommerce, B2B, or SaaS business"
                        : "eCommerce, B2B, ili SaaS biznis"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>
                      {isEn
                        ? "Active Google Ads account for 3+ months"
                        : "Aktivan Google Ads nalog 3+ meseca"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>
                      {isEn ? (
                        <>
                          Min. <strong>€1,000/mo</strong> (SR) or <strong>€3,000/mo</strong> (UK/EU/US) ad spend
                        </>
                      ) : (
                        <>
                          Min. <strong>€1.000/mes</strong> (SR) ili <strong>€3.000/mes</strong> (UK/EU/US) ad spend
                        </>
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>
                      {isEn
                        ? "Willing to grant read-only access before the call"
                        : "Spremni da date read-only pristup pre audita"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>
                      {isEn
                        ? "Real goal: scale ROAS / leads, not just tactical tweak"
                        : "Realan cilj: scale ROAS / leads, ne samo taktička sitnica"}
                    </span>
                  </li>
                </ul>
              </div>

              {/* RED — not a fit */}
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
                    ✗
                  </span>
                  <h3 className="text-lg font-heading font-bold text-red-900 mb-0">
                    {isEn ? "Not a fit (yet)" : "Nije za vas (još)"}
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-red-900">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-0.5">✗</span>
                    <span>
                      {isEn
                        ? "Brand new account (< 3 months, no data)"
                        : "Potpuno novi nalog (&lt; 3 meseca, bez podataka)"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-0.5">✗</span>
                    <span>
                      {isEn
                        ? "Ad spend under €500/month"
                        : "Ad spend ispod €500/mesečno"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-0.5">✗</span>
                    <span>
                      {isEn
                        ? "Looking for free full diagnosis (not teaser)"
                        : "Tražite besplatnu kompletnu dijagnozu (ne teaser)"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-0.5">✗</span>
                    <span>
                      {isEn
                        ? "Affiliate marketing, crypto, adult, gambling"
                        : "Affiliate marketing, crypto, adult, gambling"}
                    </span>
                  </li>
                </ul>
                <p className="text-xs text-red-700 mt-4 pt-4 border-t border-red-200">
                  {isEn ? (
                    <>
                      Not a fit? Start with the{" "}
                      <Link href="/blog" className="underline font-semibold">
                        free blog
                      </Link>{" "}
                      or the{" "}
                      <Link href={{ pathname: "/recnik" }} className="underline font-semibold">
                        PPC Glossary
                      </Link>
                      .
                    </>
                  ) : (
                    <>
                      Niste fit? Krenite sa{" "}
                      <Link href="/blog" className="underline font-semibold">
                        blog-om
                      </Link>{" "}
                      ili{" "}
                      <Link href={{ pathname: "/recnik" }} className="underline font-semibold">
                        PPC Rečnikom
                      </Link>
                      .
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
              {isEn ? "Process" : "Proces"}
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-3">
              {isEn ? "How It Works — 4 Steps" : "Kako Funkcioniše — 4 Koraka"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                n: 1,
                t: isEn ? "Apply" : "Prijava",
                d: isEn
                  ? "Fill out the form below. I review qualifications within 48h."
                  : "Popunite formu ispod. Pregledam kvalifikacije u roku od 48h.",
              },
              {
                n: 2,
                t: isEn ? "Grant access" : "Pristup",
                d: isEn
                  ? "You give me read-only access to Google Ads + GA4. No changes possible from my side."
                  : "Dajete mi read-only pristup Google Ads-u + GA4. Ne mogu ništa da menjam.",
              },
              {
                n: 3,
                t: isEn ? "Get video" : "Video",
                d: isEn
                  ? "I record a 15-minute walkthrough: 3 red flags + top 3 priorities. Sent via Loom."
                  : "Snimam 15-minutni video: 3 crvena flag-a + top 3 prioriteta. Šaljem preko Loom-a.",
              },
              {
                n: 4,
                t: isEn ? "Decide" : "Odluka",
                d: isEn
                  ? "Fix yourself, or book a call to discuss engagement. No pressure."
                  : "Popravljate sami, ili zakažete poziv za saradnju. Bez pritiska.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-card"
              >
                <div className="w-10 h-10 rounded-full bg-slate-900 text-yellow-400 flex items-center justify-center font-bold text-lg mb-4">
                  {step.n}
                </div>
                <h3 className="font-heading font-bold text-slate-900 mb-2">{step.t}</h3>
                <p className="text-sm text-gray-600 mb-0 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's inside the video */}
      <section className="py-16 md:py-20 bg-white border-y border-gray-100">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
                {isEn ? "Inside the audit" : "Šta video pokriva"}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-3">
                {isEn ? "What You'll See in the 15-Min Video" : "Šta ćete videti u 15-minutnom videu"}
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  t: isEn ? "Account structure — 3 red flags" : "Struktura naloga — 3 crvena flag-a",
                  d: isEn
                    ? "What's fundamentally broken that's capping your performance before anything else."
                    : "Šta je fundamentalno pokvareno što ograničava performanse pre svega ostalog.",
                },
                {
                  t: isEn ? "Conversion tracking — is it accurate?" : "Conversion tracking — da li je tačan?",
                  d: isEn
                    ? "If the algorithm is getting wrong signals, no optimization will work. I'll verify GA4 + Google Ads integration."
                    : "Ako algoritam dobija pogrešne signale, nijedna optimizacija neće raditi. Proverim GA4 + Google Ads integraciju.",
                },
                {
                  t: isEn ? "Bidding strategy — is it the right one?" : "Bidding strategija — da li je prava?",
                  d: isEn
                    ? "Most accounts use the wrong Smart Bidding strategy for their conversion volume and goals."
                    : "Većina naloga koristi pogrešnu Smart Bidding strategiju za svoj conversion volume i ciljeve.",
                },
                {
                  t: isEn ? "Search terms leak analysis" : "Search terms leak analiza",
                  d: isEn
                    ? "Where your budget is bleeding — irrelevant queries you're paying for but shouldn't."
                    : "Gde vaš budžet krvari — irelevantne pretrage za koje plaćate a ne bi trebalo.",
                },
                {
                  t: isEn ? "Top 3 priorities — ranked by impact" : "Top 3 prioriteta — poređano po impaktu",
                  d: isEn
                    ? "If you do nothing else, fix these 3 things first. Expected impact per fix."
                    : "Ako ništa drugo ne uradite, popravite ovih 3. Očekivan impact po svakom fix-u.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-400 text-slate-900 flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-slate-900 mb-1">{item.t}</h3>
                    <p className="text-sm text-gray-600 mb-0 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-5 mt-8">
              <p className="text-sm font-semibold text-amber-900 mb-1">
                {isEn ? "What the audit is NOT" : "Šta audit NIJE"}
              </p>
              <p className="text-sm text-amber-900 mb-0 leading-relaxed">
                {isEn
                  ? "It's NOT a full implementation plan. I'll identify the problems — but the actual fix work is a paid engagement. Think of this as a qualified second opinion, not a do-it-yourself playbook."
                  : "NIJE kompletan implementacijski plan. Identifikujem probleme — ali sam rad na fix-u je plaćen. Ovo je kvalifikovano drugo mišljenje, ne do-it-yourself playbook."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials — service-filtered */}
      <Testimonials
        title={isEn ? "What clients say" : "Šta klijenti kažu"}
        subtitle={
          isEn
            ? "Real quotes from brands I've worked with across UK, Serbia, Croatia, and USA."
            : "Realni citati od brendova s kojima sam radio u UK-u, Srbiji, Hrvatskoj i USA."
        }
        limit={3}
        className="bg-gray-50"
      />

      {/* Form — stub */}
      <section id="audit-form" className="py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="container-custom px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
                {isEn ? "Apply" : "Prijava"}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-3">
                {isEn ? "Apply for Your Free Audit" : "Prijavi se za Audit"}
              </h2>
              <p className="text-lg text-gray-600">
                {isEn
                  ? "5 minutes to fill. I respond within 48 hours."
                  : "5 minuta za popunjavanje. Odgovaram u roku od 48h."}
              </p>
            </div>

            {/* Form placeholder — to be wired to /api/audit or Formspree later */}
            <form className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-900 block mb-1.5">
                    {isEn ? "Full name" : "Ime i prezime"} *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
                    placeholder={isEn ? "Jane Doe" : "Marko Marković"}
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-900 block mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
                    placeholder="you@brand.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-900 block mb-1.5">
                  {isEn ? "Company website" : "Website firme"} *
                </label>
                <input
                  type="url"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
                  placeholder="https://"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-900 block mb-1.5">
                    {isEn ? "Business type" : "Tip biznisa"} *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
                  >
                    <option value="">— {isEn ? "Select" : "Izaberi"} —</option>
                    <option>eCommerce</option>
                    <option>B2B / Lead Gen</option>
                    <option>SaaS</option>
                    <option>Local Service</option>
                    <option>{isEn ? "Other" : "Drugo"}</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-900 block mb-1.5">
                    {isEn ? "Monthly ad spend" : "Mesečni ad spend"} *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
                  >
                    <option value="">— {isEn ? "Select" : "Izaberi"} —</option>
                    <option>&lt; €500/mo {isEn ? "(not qualified yet)" : "(nije još kvalifikovan)"}</option>
                    <option>€500 – €1,000/mo</option>
                    <option>€1,000 – €3,000/mo ✓</option>
                    <option>€3,000 – €10,000/mo ✓</option>
                    <option>€10,000+/mo ✓</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-900 block mb-1.5">
                  {isEn ? "Biggest pain right now" : "Najveći problem trenutno"}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
                  placeholder={
                    isEn
                      ? "e.g., 'ROAS dropped 30% in Q1, can't figure out why' or 'scaling is stuck at €3k/mo'"
                      : "npr. 'ROAS pao 30% u Q1, ne znam zašto' ili 'stopirali smo rast na €3k/mes'"
                  }
                />
              </div>

              <div className="text-xs text-gray-500 pt-2">
                {isEn
                  ? "⚠️ This form is a skeleton. Submission wiring (API / Formspree / Email) will be added once we finalize the qualification logic. For now, this is a visual prototype."
                  : "⚠️ Forma je skeleton. Submission integracija (API / Formspree / Email) dolazi kad finalizujemo kvalifikacijsku logiku. Za sada je vizuelni prototip."}
              </div>

              <Button href="/kontakt" variant="secondary" className="w-full justify-center">
                {isEn ? "Submit application →" : "Pošalji prijavu →"}
              </Button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-6">
              {isEn
                ? "I don't use your data for marketing. No email sequences. No retargeting. Just the audit."
                : "Ne koristim vaše podatke za marketing. Bez email sekvenci. Bez remarketinga. Samo audit."}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-3">
              {isEn ? "FAQ" : "Česta pitanja"}
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: isEn ? "Why is it free?" : "Zašto je besplatan?",
                a: isEn
                  ? "Because the audit identifies problems — not full solutions. If you like the thinking, we can discuss a paid engagement. If you don't, you keep the insights. Works for both of us."
                  : "Jer audit identifikuje probleme — ne pruža kompletna rešenja. Ako vam se dopada razmišljanje, možemo pričati o saradnji. Ako ne, zadržite insights. Radi za oboje.",
              },
              {
                q: isEn ? "How long does it really take?" : "Koliko zaista traje?",
                a: isEn
                  ? "For you: 5 min to apply + 48h wait + 15 min video + ~30 min reflection = 1 hour total. For me: 2-3 hours per audit (why I limit to 5/month)."
                  : "Za vas: 5 min prijava + 48h čekanje + 15 min video + ~30 min razmišljanja = 1h ukupno. Za mene: 2-3h po auditu (zato limit od 5/mes).",
              },
              {
                q: isEn ? "What if I'm not qualified?" : "Šta ako nisam kvalifikovan?",
                a: isEn
                  ? "I'll redirect you to the right resource — blog, glossary, or suggested agency. No ghosting."
                  : "Redirectujem vas ka pravom resursu — blog, rečnik, ili predloženoj agenciji. Bez ghostingа.",
              },
              {
                q: isEn ? "Is there any obligation?" : "Da li postoji obaveza?",
                a: isEn
                  ? "None. The video is yours. You're free to use it, share with your team, or do nothing with it."
                  : "Nema. Video je vaš. Slobodno ga koristite, delite sa timom, ili ništa.",
              },
              {
                q: isEn ? "What tools do you use?" : "Koje alate koristite?",
                a: isEn
                  ? "Google Ads UI (read-only), GA4, sometimes Supermetrics for data export, Loom for recording. That's it — no proprietary 'magic box'."
                  : "Google Ads UI (read-only), GA4, povremeno Supermetrics za data export, Loom za snimanje. To je sve — bez proprietary 'magic box-a'.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="bg-white border-2 border-gray-200 rounded-xl group"
              >
                <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
                  {item.q}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
