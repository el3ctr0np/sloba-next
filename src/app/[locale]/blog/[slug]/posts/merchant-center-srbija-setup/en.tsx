import { Link } from "@/i18n/navigation";

export default function MerchantCenterSerbiaSetupEN() {
  return (
    <>
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Note</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Full English version coming soon. The complete guide is currently available in Serbian.
        </p>
      </div>

      <p>
        Google Merchant Center is the mandatory first step before running Shopping ads in Serbia (launching November 2026). This guide covers account creation and verification, the 8 required product feed attributes, feed delivery methods (manual, Google Sheets, Content API, Shopify/WooCommerce plugins), common disapproval reasons, shipping &amp; tax settings for the Serbian market, and linking Merchant Center to Google Ads.
      </p>
      <p>
        The full guide — with step-by-step setup instructions, a pre-launch checklist, and lessons from setting up Merchant Center for clients like Perun Moto, Chelleon UK, and Sleepy Piglet UK — is available in Serbian:
      </p>
      <p>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "merchant-center-srbija-setup" } }} className="underline font-medium">
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
