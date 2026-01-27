export default {
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Naslov",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "client",
      title: "Klijent",
      type: "string",
    },
    {
      name: "industry",
      title: "Industrija",
      type: "string",
      options: {
        list: [
          { title: "eCommerce", value: "eCommerce" },
          { title: "B2B", value: "B2B" },
          { title: "SaaS", value: "SaaS" },
          { title: "Retail", value: "Retail" },
          { title: "Services", value: "Services" },
        ],
      },
    },
    {
      name: "metric",
      title: "Glavni rezultat (npr. ROI: 3.7x)",
      type: "string",
    },
    {
      name: "result",
      title: "Sekundarni rezultat (npr. €30k → €85k/mes)",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Glavna slika",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "metaDescription",
      title: "Meta opis (SEO)",
      type: "text",
      rows: 2,
    },
    {
      name: "challenge",
      title: "Izazov",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "solution",
      title: "Rešenje",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "results",
      title: "Rezultati (detalji)",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "testimonial",
      title: "Izjava klijenta",
      type: "text",
      rows: 4,
    },
    {
      name: "testimonialAuthor",
      title: "Ime klijenta",
      type: "string",
    },
    {
      name: "testimonialRole",
      title: "Pozicija klijenta",
      type: "string",
    },
    {
      name: "publishedAt",
      title: "Datum objave",
      type: "datetime",
    },
  ],
  preview: {
    select: {
      title: "client",
      subtitle: "industry",
      media: "mainImage",
    },
  },
};
