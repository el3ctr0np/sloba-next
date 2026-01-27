import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "e2zxlxam",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Queries
export async function getBlogPosts() {
  return client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      category,
      publishedAt,
      "mainImage": mainImage.asset->url
    }
  `);
}

export async function getBlogPost(slug: string) {
  return client.fetch(`
    *[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      category,
      publishedAt,
      body,
      metaDescription,
      "mainImage": mainImage.asset->url
    }
  `, { slug });
}

export async function getCaseStudies() {
  return client.fetch(`
    *[_type == "caseStudy"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      client,
      industry,
      metric,
      result,
      "mainImage": mainImage.asset->url
    }
  `);
}

export async function getCaseStudy(slug: string) {
  return client.fetch(`
    *[_type == "caseStudy" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      client,
      industry,
      challenge,
      solution,
      results,
      testimonial,
      testimonialAuthor,
      testimonialRole,
      metaDescription,
      "mainImage": mainImage.asset->url
    }
  `, { slug });
}
