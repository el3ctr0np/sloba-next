import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Section, Card } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title: "Blog | Slobodan Jelisavac",
    description: "Najnoviji uvidi i strategije za Google Ads i performance marketing."
  };
}

const posts = [
  {
    title: "Google Ads Remarketing: Kompletan Vodič [2026]",
    excerpt:
      "Setup, segmentacija i strategije remarketing-a koje povećavaju konverzije.",
    date: "2026-01-27",
    category: "Google Ads",
    href: "/blog/remarketing-vodic"
  },
  {
    title: "Quality Score: Šta Je i Kako Ga Poboljšati [2026]",
    excerpt:
      "Kako QS utiče na CPC i pozicije, i konkretne taktike za poboljšanje.",
    date: "2026-01-27",
    category: "Google Ads",
    href: "/blog/quality-score-vodic"
  },
  {
    title: "Negative Keywords: Kompletna Lista + Strategija [2026]",
    excerpt:
      "Gotove liste i proces za eliminaciju irelevantnih pretraga i budžet waste-a.",
    date: "2026-01-27",
    category: "Google Ads",
    href: "/blog/negativne-kljucne-reci"
  },
  {
    title: "Ključne Reči za Google Ads: Kompletan Vodič [2026]",
    excerpt:
      "Istraživanje, selekcija, organizacija i optimizacija ključnih reči.",
    date: "2026-01-27",
    category: "Google Ads keywords",
    href: "/blog/kljucne-reci-vodic"
  },
  {
    title: "Google Ads Audit: Kompletan Checklist [2026]",
    excerpt:
      "80+ tačaka za proveru naloga, optimizaciju kampanja i bolji ROI.",
    date: "2026-01-27",
    category: "Google Ads audit",
    href: "/blog/google-ads-audit-vodic"
  },
  {
    title: "Google Ads vs Meta Ads: Šta je Bolje za Vaš Biznis?",
    excerpt:
      "Kada koristiti koji kanal, razlike u targetingu, troškovima i ROI-u.",
    date: "2026-01-27",
    category: "Google Ads",
    href: "/blog/google-ads-vs-meta"
  },
  {
    title: "Google Ads za eCommerce vs B2B: Ključne Razlike u Strategiji",
    excerpt:
      "Razlike u kampanjama, KPI-jevima i strategijama za dva poslovna modela.",
    date: "2026-01-27",
    category: "Google Ads",
    href: "/blog/ecommerce-vs-b2b"
  },
  {
    title: "Zašto Google Ads Kampanje Ne Donose Rezultate (i Kako to Popraviti)",
    excerpt:
      "12 najčešćih razloga za loše performanse i rešenja za svaki problem.",
    date: "2026-01-27",
    category: "Google Ads",
    href: "/blog/zasto-nema-rezultata"
  },
  {
    title: "Google Ads Optimizacija: 20 Grešaka Koje Vas Koštaju Novca",
    excerpt:
      "Najčešće greške u strukturi, bidding-u i landing page-ovima.",
    date: "2026-01-27",
    category: "Google Ads optimizacija",
    href: "/blog/google-ads-greske"
  },
  {
    title: "Conversion Tracking za Google Ads: Zašto Vaše Kampanje Ne Rade",
    excerpt:
      "Vodič za pravilno postavljanje tracking-a i enhanced conversions.",
    date: "2026-01-26",
    category: "Google Ads",
    href: "/blog/conversion-tracking-vodic"
  },
  {
    title: "Google Ads Agencija vs Freelancer vs In-House: Kako Izabrati",
    excerpt:
      "Poređenje troškova, prednosti i mana svake opcije za vaš budžet.",
    date: "2026-01-26",
    category: "Google Ads",
    href: "/blog/agencija-vs-freelancer"
  },
  {
    title: "Google Shopping Kampanje: Kako Povećati ROAS [Vodič 2026]",
    excerpt:
      "Feed optimizacija, struktura kampanja i taktike za bolji Shopping učinak.",
    date: "2026-01-26",
    category: "Google Shopping",
    href: "/blog/google-shopping-vodic"
  },
  {
    title: "Performance Max Kampanje: Vodič za eCommerce i B2B [2026]",
    excerpt:
      "Kako rade PMax kampanje, kada ih koristiti i kako ih optimizovati.",
    date: "2026-01-26",
    category: "Performance Max",
    href: "/blog/performance-max-vodic"
  },
  {
    title: "Google Oglašavanje za Firme: Kompletan Vodič za B2B i eCommerce [2026]",
    excerpt:
      "Strategije, tipovi kampanja, budžetiranje i merenje rezultata.",
    date: "2026-01-26",
    category: "Google oglašavanje",
    href: "/blog/google-oglasavanje-za-firme"
  },
  {
    title: "Koliko Košta Google Ads? Cene, Budžeti i ROI u Srbiji [2026]",
    excerpt:
      "Realne CPC cene, minimalni budžeti i okvir za planiranje ROI-ja.",
    date: "2026-01-26",
    category: "Google Ads",
    href: "/blog/koliko-kosta-google-ads"
  }
];

type BlogPostCardProps = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  href: string;
};

function BlogPostCard({ title, excerpt, date, category, href }: BlogPostCardProps) {
  return (
    <Link href={href}>
      <Card className="h-full">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>{category}</span>
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <span className="text-primary font-medium">Pročitaj →</span>
      </Card>
    </Link>
  );
}

export default function BlogPage() {
  return (
    <Section>
      <h1 className="text-4xl font-heading font-bold mb-4 text-center">Blog</h1>
      <p className="text-gray-600 text-center mb-12">
        Najnoviji uvidi, vodici i strategije za Google Ads i performance marketing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogPostCard key={post.href} {...post} />
        ))}
      </div>
    </Section>
  );
}
