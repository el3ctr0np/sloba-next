export default {
  name: "portalClient",
  title: "Portal - Klijent",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Ime klijenta",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug (za URL)",
      type: "slug",
      options: {
        source: "name",
        maxLength: 50,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "accessCode",
      title: "Pristupni kod",
      type: "string",
      description: "8-karakter kod za pristup portalu (npr. HC8K2M4P)",
      validation: (Rule: any) => Rule.required().min(6).max(12),
    },
    {
      name: "industry",
      title: "Tip klijenta",
      type: "string",
      options: {
        list: [
          { title: "Lokalne usluge (vodoinstalater, čišćenje...)", value: "local_services" },
          { title: "eCommerce", value: "ecommerce" },
          { title: "Lead Generation", value: "leadgen" },
        ],
      },
    },
    {
      name: "primaryKPI",
      title: "Primarni KPI",
      type: "string",
      options: {
        list: [
          { title: "Telefonski pozivi", value: "calls" },
          { title: "ROAS", value: "roas" },
          { title: "CPA", value: "cpa" },
          { title: "Konverzije", value: "conversions" },
        ],
      },
    },
    {
      name: "isActive",
      title: "Aktivan",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "contactEmail",
      title: "Email klijenta",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo klijenta",
      type: "image",
      options: { hotspot: true },
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "industry",
      media: "logo",
    },
  },
};
