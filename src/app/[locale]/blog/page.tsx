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
    title: "Performance Max kampanje - Praktican vodic",
    excerpt:
      "Kako da iskoristite Google AI i postignete bolje rezultate uz PMax.",
    date: "2026-01-10",
    category: "Performance Max",
    href: "/blog/performance-max-vodic"
  },
  {
    title: "Google Ads optimizacija - 30 taktika",
    excerpt:
      "Napredne taktike za bolje konverzije, nizi CPA i veci ROAS.",
    date: "2026-01-17",
    category: "Optimizacija",
    href: "/blog/google-ads-optimizacija"
  },
  {
    title: "Google Shopping kampanje - Vise prodaje",
    excerpt:
      "Strategija i najcesce greske koje blokiraju prodaju u Shoppingu.",
    date: "2026-01-24",
    category: "Google Shopping",
    href: "/blog/google-shopping-vodic"
  }
];

export default function BlogPage() {
  return (
    <Section>
      <h1 className="text-4xl font-heading font-bold mb-4 text-center">Blog</h1>
      <p className="text-gray-600 text-center mb-12">
        Najnoviji uvidi, vodici i strategije za Google Ads i performance marketing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.href} href={post.href}>
            <Card className="h-full">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <span>{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <span className="text-primary font-medium">Procitaj {"->"}</span>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
