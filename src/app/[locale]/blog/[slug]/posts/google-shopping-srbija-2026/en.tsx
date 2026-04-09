import { Link } from "@/i18n/navigation";

export default function GoogleShoppingSerbiaLaunch2026EN() {
  return (
    <>
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Note</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Full English version coming soon. The complete guide is currently available in Serbian.
        </p>
      </div>

      <p>
        Google Shopping officially launches in Serbia in November 2026 and across the wider Ex-Yu region (Croatia, Bosnia &amp; Herzegovina, Slovenia, Montenegro) in Q4 2026. This is the biggest change to Serbian eCommerce in a decade.
      </p>
      <p>
        The full guide — covering the 15-step preparation checklist, Merchant Center setup, product feed optimisation, CSS strategy, and lessons from 2+ years of UK Shopping campaigns (£290k+ revenue with Chelleon UK) — is available in Serbian:
      </p>
      <p>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-srbija-2026" } }} className="underline font-medium">
          Pročitajte kompletan vodič na srpskom →
        </Link>
      </p>
      <p>
        For questions in English, feel free to{" "}
        <Link href="/kontakt" className="underline font-medium">
          reach out directly
        </Link>
        .
      </p>
    </>
  );
}
