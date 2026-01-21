import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";

const posts = [
  {
    slug: "performance-max-vodic",
    title: "Performance Max kampanje - Praktican vodic",
    date: "2026-01-10",
    category: "Performance Max",
    content:
      "Placeholder content for Performance Max vodic. Add the full article here."
  },
  {
    slug: "google-ads-optimizacija",
    title: "Google Ads optimizacija - 30 taktika",
    date: "2026-01-17",
    category: "Optimizacija",
    content:
      "Placeholder content for Google Ads optimizacija. Add the full article here."
  },
  {
    slug: "google-shopping-vodic",
    title: "Google Shopping kampanje - Vise prodaje",
    date: "2026-01-24",
    category: "Google Shopping",
    content:
      "Placeholder content for Google Shopping vodic. Add the full article here."
  }
];

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Slobodan Jelisavac",
      description: "Trazeni blog post nije pronadjen."
    };
  }

  return {
    title: `${post.title} | Slobodan Jelisavac`,
    description: `Blog post iz kategorije ${post.category}.`
  };
}

export default function BlogPostPage({
  params
}: {
  params: { slug: string };
}) {
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="section-padding">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-12">
        <article className="lg:col-span-2">
          <div className="text-sm text-gray-500 mb-3">
            {post.category} · {post.date}
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            {post.title}
          </h1>
          <div className="prose max-w-none text-gray-700">
            <p>{post.content}</p>
          </div>
        </article>
        <aside className="border-2 border-gray-900 rounded-lg p-6 h-fit">
          <h2 className="text-xl font-heading font-semibold mb-4">Sidebar</h2>
          <p className="text-gray-600 mb-4">
            Placeholder for related posts, newsletter signup, or CTA.
          </p>
          <Link href="/blog" className="text-primary font-semibold">
            Nazad na Blog
          </Link>
        </aside>
      </div>
    </div>
  );
}
