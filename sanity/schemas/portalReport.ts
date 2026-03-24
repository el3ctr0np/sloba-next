export default {
  name: "portalReport",
  title: "Portal - Izveštaj",
  type: "document",
  fields: [
    {
      name: "client",
      title: "Klijent",
      type: "reference",
      to: [{ type: "portalClient" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "title",
      title: "Naslov izveštaja",
      type: "string",
      description: "npr. 'Mesečni izveštaj — Mart 2026'",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "period",
      title: "Period",
      type: "string",
      description: "npr. 'Mart 2026' ili '2026-03'",
    },
    {
      name: "reportType",
      title: "Tip izveštaja",
      type: "string",
      options: {
        list: [
          { title: "Mesečni izveštaj", value: "monthly" },
          { title: "Audit", value: "audit" },
          { title: "Strategija", value: "strategy" },
          { title: "Drugo", value: "other" },
        ],
      },
      initialValue: "monthly",
    },
    {
      name: "file",
      title: "PDF fajl",
      type: "file",
      options: {
        accept: ".pdf",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Opis",
      type: "text",
      rows: 2,
    },
    {
      name: "publishedAt",
      title: "Datum objave",
      type: "datetime",
    },
  ],
  orderings: [
    {
      title: "Datum (najnoviji prvo)",
      name: "dateDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "client.name",
    },
  },
};
