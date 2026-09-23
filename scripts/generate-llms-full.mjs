#!/usr/bin/env node
/**
 * Generates public/llms-full.txt by fetching the rendered HTML of a fixed
 * list of key pages from a locally running `next start` server and
 * extracting the readable text inside <main>...</main> (Header/Footer are
 * outside <main>, see src/components/layout/LayoutShell.tsx, so site chrome
 * is dropped automatically).
 *
 * This reads the SAME rendered output the pages actually serve, so the file
 * cannot drift from the live copy the way a hand-maintained summary would.
 *
 * Usage:
 *   1. npx next build && npx next start -p 4610 &
 *   2. node scripts/generate-llms-full.mjs http://localhost:4610
 *   3. kill the server
 *
 * Scope (task 1218761984740410, obim: usluge, audit, o meni, medicina,
 * insights, top 10 vodica po GSC klikovima). Guide list is GSC-ranked by
 * clicks, last 180 days, sc-domain:slobodan-jelisavac.com (pulled 23.9.2026).
 */

const base = process.argv[2] || "http://localhost:4610";
const SITE = "https://www.slobodan-jelisavac.com";

// [urlPath, title] — urlPath is the site-absolute path (with locale prefix).
const PAGES = [
  // Usluge / Services
  ["/sr/usluge", "Usluge - pregled"],
  ["/en/services", "Services - overview"],
  ["/sr/usluge/google-ads-upravljanje", "Google Ads upravljanje"],
  ["/en/services/google-ads-management", "Google Ads Management"],
  ["/sr/usluge/google-ads-agencija", "Google Ads agencija"],
  ["/en/services/google-ads-agency", "Google Ads Agency"],
  ["/sr/usluge/google-ads-audit", "Google Ads audit (usluga)"],
  ["/en/services/google-ads-audit", "Google Ads Audit (service)"],
  ["/sr/usluge/chatgpt-ads", "ChatGPT Ads"],
  ["/en/services/chatgpt-ads", "ChatGPT Ads"],
  ["/sr/usluge/google-ads-za-b2b", "Google Ads za B2B"],
  ["/en/services/google-ads-for-b2b", "Google Ads for B2B"],
  ["/sr/usluge/google-ads-za-ecommerce", "Google Ads za eCommerce"],
  ["/en/services/google-ads-for-ecommerce", "Google Ads for eCommerce"],
  ["/sr/usluge/google-ads-za-saas", "Google Ads za SaaS"],
  ["/en/services/google-ads-for-saas", "Google Ads for SaaS"],
  ["/sr/usluge/konsultacije", "Konsultacije"],
  ["/en/services/consultations", "Consultations"],
  // Audit (besplatan video pregled)
  ["/sr/audit", "Besplatan Audit Video Pregled"],
  ["/en/audit", "Free Audit Video Review"],
  // O meni / About
  ["/sr/o-meni", "O meni"],
  ["/en/about", "About Slobodan"],
  // Medicina / Healthcare industry
  ["/sr/industrije/medicina", "Industrija: Medicina"],
  ["/en/industries/healthcare", "Industry: Healthcare"],
  // Insights
  ["/en/insights", "Insights - index"],
  [
    "/en/insights/chatgpt-ads-search-demand-2026",
    "Insights: ChatGPT Ads Search Demand 2026",
  ],
  // Top 10 guides by GSC clicks (sc-domain:slobodan-jelisavac.com, last 180
  // days, pulled 23.9.2026 - see FEEDBACK comment on the Asana task for the
  // raw numbers).
  ["/sr/blog/google-shopping-srbija-2026", "Google Shopping dolazi u Srbiju 2026"],
  ["/en/blog/google-ads-api-basic-access-guide", "Google Ads API Basic Access Guide"],
  ["/sr/blog/kako-poceti-google-ads", "Kako poceti sa Google Ads"],
  ["/en/blog/google-ads-audit-checklist", "Google Ads Audit Checklist"],
  ["/sr/blog/koliko-kosta-google-ads", "Koliko kosta Google Ads"],
  ["/sr/blog/google-ads-za-ecommerce-srbija-2026", "Google Ads za eCommerce Srbija 2026"],
  ["/en/blog/google-ads-optimization", "Google Ads Optimization - 30 Tactics"],
  ["/en/blog/google-shopping-serbia-2026", "Google Shopping Launches in Serbia"],
  ["/en/blog/negative-keywords-list", "Negative Keywords List"],
  ["/sr/blog/kljucne-reci-vodic", "Kljucne reci - kompletan vodic"],
];

function decodeEntities(str) {
  return str
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&mdash;/g, "-")
    .replace(/&ndash;/g, "-")
    .replace(/&#x2014;|&#8212;/g, "-")
    .replace(/&#x2013;|&#8211;/g, "-")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(parseInt(n, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) => String.fromCodePoint(parseInt(n, 16)));
}

// Extracts the substring between the first top-level <main ...> and its
// matching </main> using a depth counter (regex alone can't match nested
// same-name tags correctly).
function extractMain(html) {
  const tagRe = /<main[\s>]|<\/main>/g;
  let match;
  let depth = 0;
  let start = -1;
  while ((match = tagRe.exec(html))) {
    const isOpen = match[0].startsWith("<main");
    if (isOpen) {
      if (depth === 0) start = match.index;
      depth++;
    } else {
      depth--;
      if (depth === 0 && start !== -1) {
        return html.slice(start, tagRe.lastIndex);
      }
    }
  }
  return html; // fallback: no <main> found, use whole doc (will be noisy)
}

function htmlToText(html) {
  let s = html;
  // Drop non-content blocks entirely.
  s = s.replace(/<script[\s\S]*?<\/script>/gi, "");
  s = s.replace(/<style[\s\S]*?<\/style>/gi, "");
  s = s.replace(/<svg[\s\S]*?<\/svg>/gi, "");
  s = s.replace(/<!--[\s\S]*?-->/g, "");
  s = s.replace(/<noscript[\s\S]*?<\/noscript>/gi, "");
  // Headings -> markdown-ish with blank line before.
  s = s.replace(/<h1[^>]*>/gi, "\n\n# ");
  s = s.replace(/<h2[^>]*>/gi, "\n\n## ");
  s = s.replace(/<h3[^>]*>/gi, "\n\n### ");
  s = s.replace(/<h4[^>]*>/gi, "\n\n#### ");
  s = s.replace(/<\/h[1-6]>/gi, "\n");
  // Block-level elements -> paragraph breaks.
  s = s.replace(/<\/(p|div|section|article|figure|table|tr|blockquote)>/gi, "\n\n");
  s = s.replace(/<li[^>]*>/gi, "\n- ");
  s = s.replace(/<\/li>/gi, "");
  s = s.replace(/<br\s*\/?>/gi, "\n");
  // Strip all remaining tags.
  s = s.replace(/<[^>]+>/g, "");
  s = decodeEntities(s);
  // Collapse whitespace: trim trailing spaces per line, collapse 3+ blank
  // lines to 2, collapse runs of spaces.
  s = s
    .split("\n")
    .map((l) => l.replace(/[ \t]+/g, " ").trimEnd())
    .join("\n");
  s = s.replace(/\n{3,}/g, "\n\n");
  s = s.replace(/^[ \t]+/gm, "");
  return s.trim();
}

// NOTE (23.9.2026): the task brief says not to newly author a "3.7x average
// ROAS" claim in these files while Slobodan reconsiders it (Asana
// 1218761984740410). That figure turns out to be woven into the prose of
// several in-scope pages already (o-meni/about, agencija, audit,
// chatgpt-ads, glossary FAQ) — it's the CANONICAL_NUMBERS.md-approved value
// (section 2, "Naši dokazi"), not something this task introduces. Since this
// file is a verbatim mirror of the live pages, surgically deleting the
// number mid-sentence would leave broken prose and an inconsistent file (it
// appears in too many phrasings to catch reliably). Left as-is; flagged to
// Slobodan in the task FEEDBACK instead of silently edited here.

async function fetchText(path) {
  const res = await fetch(base + path, { redirect: "manual" });
  if (res.status !== 200) {
    throw new Error(`${path} -> HTTP ${res.status} (expected 200, no redirect)`);
  }
  const html = await res.text();
  return htmlToText(extractMain(html));
}

async function main() {
  const parts = [];
  const errors = [];
  for (const [path, title] of PAGES) {
    try {
      const text = await fetchText(path);
      parts.push(`## ${title}\n\nURL: ${SITE}${path}\n\n${text}`);
      process.stderr.write(`ok    ${path} (${text.length} chars)\n`);
    } catch (err) {
      errors.push(`${path}: ${err.message}`);
      process.stderr.write(`FAIL  ${path}: ${err.message}\n`);
    }
  }
  if (errors.length) {
    process.stderr.write(`\n${errors.length} page(s) failed, aborting write.\n`);
    process.exit(1);
  }

  const today = new Date().toISOString().slice(0, 10);
  const header = `# Slobodan Jelisavac — Google Ads Consultant — Full Content

> Full text of the site's key pages, for AI systems that need more than the
> link-and-summary index at /llms.txt. Generated ${today} directly from the
> live rendered pages (scripts/generate-llms-full.mjs), so it tracks the site
> instead of drifting from it. Scope: services, the free audit page, about,
> the healthcare industry page, Insights, and the top 10 guides by Google
> Search Console clicks (last 180 days). No client names or absolute client
> financials appear anywhere on this site; see /llms.txt for the case study
> summaries.
`;

  const out = header + "\n---\n\n" + parts.join("\n\n---\n\n") + "\n";
  const fs = await import("node:fs");
  fs.writeFileSync(new URL("../public/llms-full.txt", import.meta.url), out);
  process.stderr.write(`\nWrote public/llms-full.txt (${out.length} chars, ${PAGES.length} pages).\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
