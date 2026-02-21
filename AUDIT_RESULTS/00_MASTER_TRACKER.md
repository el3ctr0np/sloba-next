# SEO & Website Audit — Master Tracker
**Sajt:** slobodan-jelisavac.com
**Poslednje ažuriranje:** 16. Februar 2026

---

## KOMPLETIRAN RAD

### Sesija 1 (13. Feb 2026) — Inicijalni audit + fixes

| # | Zadatak | Status | Detalji |
|---|---------|--------|---------|
| 1 | English content audit | ✅ Done | 60+ fajlova pregledano, 3 minor issue-a nađena → `01_content_audit.md` |
| 2 | SEO crawl (meta, schema, OG, canonical, hreflang) | ✅ Done | Svih 30+ stranica → `02_seo_crawl.md` |
| 3 | Blog QA (16 postova) | ✅ Done | Batch 1 + Batch 2 → `03_blog_qa_batch1.md`, `03_blog_qa_batch2.md` |
| 4 | Competitor analysis | ✅ Done | → `04_competitor_analysis.md` |
| 5 | `buildMetadata()` helper kreiran | ✅ Done | `src/lib/metadata.ts` — OG tags, canonical, hreflang za sve stranice |
| 6 | buildMetadata dodat na svih 13 servisnih stranica | ✅ Done | Sve usluge/ stranice koriste buildMetadata |

### Sesija 2 (14-16. Feb 2026) — SEO implementacija

| # | Zadatak | Status | Detalji |
|---|---------|--------|---------|
| 7 | Internal linking: blog → service | ✅ Done | 14 blog postova (28 fajlova) dobilo linkove ka servisnim stranicama |
| 8 | Internal linking: service → blog | ✅ Done | 3 servisne stranice (konsultacije, performance-marketing, google-ads-za-saas) dobile blog linkove. Ostale su već imale. |
| 9 | dateModified u Article schema | ✅ Done | `PostData` tip proširen, svih 32 postova ima dateModified (Dec 2025 — Feb 2026), schema fixovan u page.tsx |
| 10 | Content gap analiza | ✅ Done | → `04_content_gap_report.md` |
| 11 | FAQ expansion predlozi | ✅ Done | → `05_faq_expansion_proposals.md` (3-4 nova pitanja po stranici) |
| 12 | Structured data — Homepage | ✅ Done | EN: ProfessionalService, SR: ProfessionalService + LocalBusiness (adresa, geo, telefon) |
| 13 | Review strategija dokument | ✅ Done | → `06_reminders_and_review_strategy.md` |
| 14 | Telefon u schema | ✅ Done | +381692603998 u LocalBusiness schema |

---

## SLEDEĆI KORACI — Može odmah

### 1. FAQ Expansion — Implementacija (Prioritet: VISOK)
**Referenca:** `05_faq_expansion_proposals.md`
- Dodati 3-4 nova pitanja po servisnoj stranici (13 stranica)
- Prioritet: google-ads-upravljanje, google-ads-audit, starter-paket, konsultacije
- Format: dodati u `faqs` array (SR + EN), automatski se renderuje u accordion + schema

### 2. Novi blog postovi — Content plan (Prioritet: VISOK)
**Referenca:** `04_content_gap_report.md`

**Mart 2026:**
- "Kako početi sa Google Ads-om: Korak po korak vodič" (podržava starter-paket servis)
- "YouTube oglašavanje vodič" (podržava youtube-oglasi servis)

**April 2026:**
- "Landing page optimizacija za Google Ads" (visok konverzioni potencijal)
- "Google Ads za lokalne biznise u Srbiji" (lokalno tržište)

**Maj 2026:**
- "RSA vodič: Responsive Search Ads best practices"
- "Google Ads za SaaS" (podržava google-ads-za-saas servis)

### 3. Telefon vidljivo na sajtu (Prioritet: SREDNJI)
- Broj je u schema ali nije vidljiv na kontakt stranici / footer-u
- Razmotriti da li dodati na kontakt stranicu i/ili footer

---

## ČEKA TVOJ INPUT

### 4. Image alt tagovi
**Status:** Čeka nove slike
- Kada budu spremne: dodati descriptive alt tagove na SVE img elemente
- Format: "[Opis slike] — [Kontekst stranice]"
- Prioritet: Hero sekcije, servisne stranice, blog featured images

### 5. Engleski Case Studies
**Status:** Čeka dokument sa klijentima
- Treba: kompanija, industrija, izazov, rešenje, rezultati (sa brojevima)
- Route već postoji: `/case-studies/[slug]`
- Dodati schema markup (Article ili CreativeWork)

---

## STRATEŠKI — Kad bude vreme

### 6. Google Business Profile
- Kreirati za Batajnica/Beograd lokaciju
- Prikupiti prve Google recenzije (email template spreman u `06_reminders_and_review_strategy.md`)

### 7. Clutch profil (planirano: Mart 2026)
- B2B review platforma za agencije/freelancere

### 8. Testimonials stranica na sajtu
- Kreirati `/recenzije` ili `/testimonials`
- AggregateRating schema
- Review schema za svaki testimonial

### 9. LinkedIn recommendations
- Zatražiti od najzadovoljnijih klijenata

---

## AUDIT FAJLOVI — Referenca

| Fajl | Sadržaj |
|------|---------|
| `00_MASTER_TRACKER.md` | Ovaj fajl — master pregled svega |
| `01_content_audit.md` | English localization audit |
| `02_seo_crawl.md` | SEO crawl svih stranica |
| `03_blog_qa_batch1.md` | Blog QA — postovi 1-8 |
| `03_blog_qa_batch2.md` | Blog QA — postovi 9-16 |
| `04_competitor_analysis.md` | Analiza konkurencije |
| `04_content_gap_report.md` | Content gap analiza + 3-mesečni plan |
| `05_faq_expansion_proposals.md` | FAQ predlozi za 13 servisnih stranica |
| `06_reminders_and_review_strategy.md` | Podsetnici + review strategija |

---

## KLJUČNI FAJLOVI — Tehnička referenca

| Fajl | Šta radi |
|------|----------|
| `src/lib/metadata.ts` | `buildMetadata()` — OG tags, canonical, hreflang |
| `src/app/[locale]/page.tsx` | Homepage — ProfessionalService + LocalBusiness schema |
| `src/app/[locale]/blog/[slug]/page.tsx` | Blog post layout — Article schema sa dateModified |
| `src/app/[locale]/blog/[slug]/posts/index.tsx` | Svi blog postovi — PostData type, dateModified polja |

---

**Pripremio:** Claude Opus 4.6
**Sledeći review:** Mart 2026
