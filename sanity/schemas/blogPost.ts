export default {
  name: "blogPost",
  title: "Blog Post",
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
      name: "excerpt",
      title: "Kratak opis",
      type: "text",
      rows: 3,
    },
    {
      name: "metaDescription",
      title: "Meta opis (SEO)",
      type: "text",
      rows: 2,
    },
    {
      name: "category",
      title: "Kategorija",
      type: "string",
      options: {
        list: [
          { title: "Google Ads", value: "Google Ads" },
          { title: "Performance Max", value: "Performance Max" },
          { title: "Google Shopping", value: "Google Shopping" },
          { title: "SEO", value: "SEO" },
          { title: "Optimizacija", value: "Optimizacija" },
          { title: "Strategija", value: "Strategija" },
        ],
      },
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
      name: "publishedAt",
      title: "Datum objave",
      type: "datetime",
    },
    {
      name: "body",
      title: "Sadržaj",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "mainImage",
    },
  },
};
