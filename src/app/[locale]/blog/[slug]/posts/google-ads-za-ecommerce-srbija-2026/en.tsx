import { Link } from "@/i18n/navigation";

export default function GoogleAdsForEcommerceSerbia2026EN() {
  return (
    <>
      <div className="bg-slate-900 text-white rounded-xl p-6 md:p-8 my-8">
        <p className="text-lg font-heading font-semibold mb-4">
          Full English version coming soon.
        </p>
        <p className="text-slate-300 text-sm mb-0">
          This post is currently available in Serbian. The English translation is in progress.
        </p>
      </div>
      <p>
        In the meantime, you can read the full Serbian version:{" "}
        <Link
          href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-za-ecommerce-srbija-2026" } }}
          className="underline font-medium"
        >
          Google Ads za eCommerce u Srbiji: Kompletna Strategija za 2026
        </Link>
      </p>
    </>
  );
}
