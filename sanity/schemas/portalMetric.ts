export default {
  name: "portalMetric",
  title: "Portal - Mesečni Podaci",
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
      name: "period",
      title: "Period (YYYY-MM)",
      type: "string",
      description: "Format: 2026-03",
      validation: (Rule: any) => Rule.required().regex(/^\d{4}-\d{2}$/),
    },
    {
      name: "source",
      title: "Izvor podataka",
      type: "string",
      options: {
        list: [
          { title: "Admin (Google Ads metrici)", value: "admin" },
          { title: "Klijent (pozivi/poslovi)", value: "client" },
        ],
      },
      initialValue: "admin",
    },
    // -- Univerzalni metrici (unosi admin) --
    {
      name: "adSpend",
      title: "Ad Spend (EUR)",
      type: "number",
    },
    {
      name: "impressions",
      title: "Impressions",
      type: "number",
    },
    {
      name: "clicks",
      title: "Clicks",
      type: "number",
    },
    {
      name: "conversions",
      title: "Conversions",
      type: "number",
    },
    // -- Lokalne usluge (unosi klijent ili admin) --
    {
      name: "phoneCalls",
      title: "Telefonski pozivi",
      type: "number",
      description: "Ukupan broj poziva u mesecu",
    },
    {
      name: "jobsCompleted",
      title: "Završeni poslovi",
      type: "number",
      description: "Broj obavljenih poslova/intervencija",
    },
    {
      name: "costPerCall",
      title: "Cena po pozivu (EUR)",
      type: "number",
    },
    // -- eCommerce metrici (unosi admin) --
    {
      name: "revenue",
      title: "Prihod (EUR)",
      type: "number",
    },
    {
      name: "roas",
      title: "ROAS",
      type: "number",
    },
    {
      name: "transactions",
      title: "Transakcije",
      type: "number",
    },
    {
      name: "avgOrderValue",
      title: "Prosečna vrednost porudžbine (EUR)",
      type: "number",
    },
    // -- Napomene --
    {
      name: "notes",
      title: "Interne napomene",
      type: "text",
      rows: 3,
      description: "Klijent NE vidi ove napomene",
    },
    {
      name: "clientNote",
      title: "Poruka za klijenta",
      type: "text",
      rows: 3,
      description: "Kratka poruka/komentar koji klijent vidi na dashboardu",
    },
  ],
  orderings: [
    {
      title: "Period (najnoviji prvo)",
      name: "periodDesc",
      by: [{ field: "period", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      clientName: "client.name",
      period: "period",
      source: "source",
    },
    prepare(selection: Record<string, any>) {
      return {
        title: `${selection.clientName || "?"} — ${selection.period || "?"}`,
        subtitle: selection.source === "client" ? "Unos klijenta" : "Admin unos",
      };
    },
  },
};
