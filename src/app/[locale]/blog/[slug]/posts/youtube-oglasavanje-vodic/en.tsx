import { Link } from "@/i18n/navigation";

export default function YouTubeAdvertisingGuideEN() {
  return (
    <>
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Note</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Full English version coming soon. The complete YouTube Advertising guide is currently available in Serbian.
        </p>
      </div>

      <p>
        This comprehensive guide covers YouTube advertising in 2026 — 6 ad formats (Skippable In-Stream, Bumper, Shorts Ads, In-Feed, Non-Skippable, Masthead), targeting options, costs (CPV benchmarks), campaign creation steps, and common mistakes to avoid. Based on experience managing video campaigns for 10+ clients across Serbia and the UK.
      </p>
      <p>
        The full guide is available in Serbian:
      </p>
      <p>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "youtube-oglasavanje-vodic" } }} className="underline font-medium">
          Read the complete YouTube Advertising guide in Serbian →
        </Link>
      </p>
      <p>
        For questions in English, feel free to{" "}
        <Link href="/kontakt" className="underline font-medium">
          reach out directly
        </Link>.
      </p>
    </>
  );
}
