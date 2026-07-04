import { Link } from "@/i18n/navigation";

export default function ProductFeedSerbianEcommerceEN() {
  return (
    <>
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Note</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Full English version coming soon. The complete guide is currently available in Serbian.
        </p>
      </div>

      <p>
        The product feed is roughly 80% of what makes a Google Shopping campaign succeed — bidding and campaign structure only work once the feed itself is clean. This guide covers the 8 required feed attributes plus recommended ones (brand, GTIN, google_product_category, custom labels), title optimization structure, description and image rules, feed delivery methods by platform (Shopify apps, WooCommerce plugins, custom XML, Google Sheets), and the most common feed errors and how to diagnose them.
      </p>
      <p>
        The full guide — with title formulas, custom label bidding strategy, and lessons from managing Shopping feeds for global accounts (moto parts sold across ~40 countries, a UK skincare brand, and a UK mattress brand) — is available in Serbian:
      </p>
      <p>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "product-feed-srpski-ecommerce" } }} className="underline font-medium">
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
