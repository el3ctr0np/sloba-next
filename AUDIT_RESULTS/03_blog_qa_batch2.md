# Blog Post QA Audit - Batch 2 (Posts 9-16)

**Audit Date:** February 13, 2026
**Audited By:** Claude Sonnet 4.5
**Scope:** English blog posts 9-16 (final batch)

---

## Executive Summary

**Overall Quality:** 8.7/10 average across 8 posts

### Key Findings

✅ **Strengths:**
- All posts have proper H2 hierarchy
- All posts include strong CTAs linking to /kontakt
- Most posts have excellent internal linking (5-6 posts excel at this)
- All posts use skimmable formats (tables, cards, numbered lists)
- All posts include FAQ sections
- Word counts are consistently excellent (3,000-5,000+ words)

⚠️ **Critical Issues:**
- **Post 11 (koliko-kosta-google-ads):** NO internal blog links - major SEO opportunity missed
- **Post 13 (performance-max-vodic):** Weak internal linking (only 1 link), missing related posts section
- **Post 16 (zasto-nema-rezultata):** Meta description discrepancy (says "12 reasons" but content has 8)

🔧 **Common Improvements Needed:**
- Add FAQ schema JSON-LD markup to all posts (currently missing from all)
- Consider mid-post CTAs for better conversion opportunities
- Ensure author byline links to /o-meni page (currently inconsistent)

---

## Summary Scorecard

| Post # | Slug | Score | H-tags | CTA | Internal Links | FAQ | Word Count | Priority Issues |
|--------|------|-------|--------|-----|----------------|-----|------------|-----------------|
| 9 | google-shopping-guide | 8.5/10 | ✅ | ✅ | ✅ (4 links) | ✅ (5 Q) | 4,000+ | No H1, author link missing |
| 10 | kljucne-reci-vodic | 9/10 | ✅ | ✅ | ✅ (6 links) | ✅ (6 Q) | 4,500+ | Author link missing |
| 11 | koliko-kosta-google-ads | 8/10 | ✅ | ✅ | ❌ (0 links) | ✅ (5 Q) | 3,000+ | **NO INTERNAL LINKS** |
| 12 | negativne-kljucne-reci | 9.5/10 | ✅ | ✅ | ✅ (5 links) | ✅ (6 Q) | 3,500+ | None - exemplary! |
| 13 | performance-max-vodic | 7/10 | ✅ | ✅ | ⚠️ (1 link) | ✅ (3 Q) | 2,800+ | Weak linking, no related section |
| 14 | quality-score-vodic | 9/10 | ✅ | ✅ | ✅ (5 links) | ✅ (6 Q) | 3,200+ | Author link missing |
| 15 | remarketing-vodic | 9.5/10 | ✅ | ✅ | ✅ (5 links) | ✅ (6 Q) | 5,000+ | Author link missing |
| 16 | zasto-nema-rezultata | 8/10 | ✅ | ✅ | ✅ (4 links) | ✅ (5 Q) | 4,000+ | Meta description mismatch |

---

## Detailed Post Audits

### Post 9: google-shopping-guide

**Score:** 8.5/10
**File:** `/src/app/[locale]/blog/[slug]/posts/google-shopping-vodic/en.tsx`
**Meta Description:** "Complete guide to Google Shopping campaigns. Product feed optimization, campaign structure, bidding strategies and tactics for increasing ROAS — based on real results."

#### ✅ Strengths
- Proper H2 hierarchy (lines 40, 95, 270, 326, 400, 491, 538, 594, 657)
- Strong CTA at line 718 linking to /kontakt
- Excellent internal linking: 4 related blog posts (lines 722-738)
- Keyword "Google Shopping" in first paragraph (line 31)
- Outstanding skimmability: numbered boxes, tables, cards throughout
- Word count: ~4,000+ words (excellent depth)
- FAQ section: 5 questions (lines 660-709)
- Meta description is benefit-driven and keyword-rich

#### ⚠️ Issues
- No explicit H1 tag (should add one at top of content)
- CTA only at bottom (could benefit from mid-post CTA)
- FAQ questions would benefit from schema markup

#### 🔧 Recommendations
1. Add explicit H1 at top: "Google Shopping Campaigns: How to Increase ROAS [Guide 2026]"
2. Consider adding mid-post CTA after line 397 (after bidding strategies section)
3. Add FAQ schema JSON-LD for SEO

---

### Post 10: kljucne-reci-vodic (keyword-guide)

**Score:** 9/10
**File:** `/src/app/[locale]/blog/[slug]/posts/kljucne-reci-vodic/en.tsx`
**Meta Description:** "Everything about keywords for Google Ads — research, selection, organization and optimization. Learn how to find keywords that drive conversions, not just clicks."

#### ✅ Strengths
- Perfect H2 structure (lines 35, 67, 110, 170, 245, 291, 367, 395, 458, 476, 541, 597, 652, 719, 739)
- Strong CTA at line 731 linking to /kontakt
- Excellent internal linking: 6 blog post links (lines 60, 223, 469, 565, 628, 741-757)
- Keyword "keywords" appears in first paragraph (line 37)
- Outstanding skimmability: numbered boxes, tables, cards, bullet lists, grid layouts
- Word count: ~4,500+ words (comprehensive)
- FAQ section: 6 questions (lines 655-714)
- Meta description is excellent and keyword-rich

#### ⚠️ Minor Observations
- CTA only at bottom (could benefit from mid-post CTA)
- Author line at 763 doesn't link to /o-meni

#### 🔧 Recommendations
1. Add mid-post CTA after line 472 (after negative keywords section)
2. Link author name on line 763 to /o-meni page
3. Consider adding FAQ schema JSON-LD

---

### Post 11: koliko-kosta-google-ads (how-much-does-google-ads-cost)

**Score:** 8/10
**File:** `/src/app/[locale]/blog/[slug]/posts/koliko-kosta-google-ads/en.tsx`
**Meta Description:** "How much does Google Ads really cost? Detailed CPC breakdown by industry, minimum budgets, agency fees, and how to calculate ROI before spending your first dollar."

#### ✅ Strengths
- H2s properly structured (lines 32, 49, 87, 171, 234, 293, 345, 384, 413, 453)
- Strong CTA at line 445 linking to /kontakt
- Keyword "Google Ads cost" in first paragraph (line 34)
- Excellent skimmability: tables, numbered lists, cards, grids
- Word count: ~3,000+ words (good depth)
- FAQ section: 5 questions (lines 455-500)
- Meta description is benefit-driven and keyword-rich

#### ⚠️ CRITICAL ISSUES
- **NO internal links to other blog posts** - major SEO/UX opportunity missed
- Only one CTA at the bottom (could benefit from mid-post CTA)
- No related blog posts section at end

#### 🔧 Recommendations (HIGH PRIORITY)
1. **CRITICAL:** Add internal links to related posts:
   - Link to "google-ads-audit-vodic" after line 230 (budgeting section)
   - Link to "google-ads-optimizacija" in ROI section (line 340)
   - Link to "agencija-vs-freelancer" in management section (line 260)
2. Add mid-post CTA after line 342 (after ROI calculation)
3. Add "Related Guides" section before FAQ with 3-4 internal links
4. Add FAQ schema JSON-LD

---

### Post 12: negativne-kljucne-reci (negative-keywords-guide)

**Score:** 9.5/10
**File:** `/src/app/[locale]/blog/[slug]/posts/negativne-kljucne-reci/en.tsx`
**Meta Description:** "Complete guide to negative keywords in Google Ads — ready-made lists by industry, addition strategy, and how to prevent wasting budget on wrong searches."

#### ✅ Strengths
- H2s perfectly structured (lines 35, 91, 146, 187, 251, 282, 337, 377, 424, 491, 511)
- Strong CTA at line 503 linking to /kontakt
- Excellent internal linking: 5 blog post links (lines 370, 443, 513-529)
- Keyword "negative keywords" in first paragraph (line 37)
- Outstanding skimmability: numbered cards, tables, grids, color-coded categories
- Word count: ~3,500+ words (comprehensive)
- FAQ section: 6 questions (lines 427-486)
- Meta description is excellent
- Real-world case study with data (lines 62-86)

#### ✅ No Issues Found
This is an **exemplary blog post** structure!

#### 🔧 Minor Suggestions
1. Consider adding mid-post CTA after line 278 (after "How to find negatives" section)
2. Add FAQ schema JSON-LD for enhanced SEO

---

### Post 13: performance-max-vodic (performance-max-guide)

**Score:** 7/10
**File:** `/src/app/[locale]/blog/[slug]/posts/performance-max-vodic/en.tsx`
**Meta Description:** "Everything about Performance Max campaigns — how they work, when to use them, structure, asset groups, and optimization strategies. Guide based on real results."

#### ✅ Strengths
- H2s properly structured (lines 38, 65, 100, 149, 221, 247, 281, 314, 365)
- Strong CTA at line 402 linking to /kontakt
- Keyword "Performance Max" in first paragraph (line 7)
- Good skimmability: numbered cards, tables, grids
- Word count: ~2,800+ words (good depth)
- FAQ section: 3 questions (lines 368-397)
- Meta description is good

#### ⚠️ ISSUES
- **Weak internal linking:** Only 1 link (line 95 to conversion-tracking-vodic)
- **NO related blog posts section** at the end
- TL;DR appears AFTER opening paragraphs (should be immediately after H1/before body)
- FAQ section is short (only 3 questions, could expand to 5-6)

#### 🔧 Recommendations (HIGH PRIORITY)
1. **CRITICAL:** Add related blog posts section before FAQ with links to:
   - google-shopping-vodic (line 217 mentions comparison)
   - google-ads-optimizacija
   - google-oglasavanje-za-firme
2. Move TL;DR box to appear before line 6 (after implicit H1, before first paragraph)
3. Add more internal links in body:
   - Link to "google-shopping-vodic" on line 216-217
   - Link to "google-ads-greske" in mistakes section
4. Expand FAQ to 5-6 questions
5. Add FAQ schema JSON-LD

---

### Post 14: quality-score-vodic (quality-score-guide)

**Score:** 9/10
**File:** `/src/app/[locale]/blog/[slug]/posts/quality-score-vodic/en.tsx`
**Meta Description:** "Complete Google Ads Quality Score guide — what it is, how it's calculated, and concrete tactics for improvement. Lower your CPC and improve positions with better QS."

#### ✅ Strengths
- H2s excellently structured (lines 35, 60, 150, 222, 265, 292, 327, 353, 392, 439, 506, 526)
- Strong CTA at line 518 linking to /kontakt
- Excellent internal linking: 5 blog post links (lines 213, 272, 528-544)
- Keyword "Quality Score" in first paragraph (line 37)
- Outstanding skimmability: tables, numbered cards, grid layouts, diagnostic tools
- Word count: ~3,200+ words (comprehensive)
- FAQ section: 6 questions (lines 442-501)
- Meta description is excellent
- Includes formula and ROI calculation (lines 45, 141-144)

#### ⚠️ Minor Observation
- Author line at 550 doesn't link to /o-meni

#### 🔧 Recommendations
1. Link author name on line 550 to /o-meni page
2. Add FAQ schema JSON-LD for enhanced SEO
3. Consider adding mid-post CTA after line 323 (after LP Experience section)

---

### Post 15: remarketing-vodic (remarketing-guide)

**Score:** 9.5/10
**File:** `/src/app/[locale]/blog/[slug]/posts/remarketing-vodic/en.tsx`
**Meta Description:** "Learn how to launch Google Ads remarketing campaigns that bring back visitors and reduce CPA by 50-70%. Guide with segmentation, strategies, and real examples."

#### ✅ Strengths
- H2s well structured (lines 33, 58, 153, 199, 293, plus sections in between)
- Strong CTA at line 771 linking to /kontakt
- Good internal linking: 4 blog post links + 1 service page link (lines 778-794)
- Keyword "remarketing" in first paragraphs
- Excellent skimmability: numbered steps, tables, cards, color-coded segments
- Word count: ~5,000+ words (comprehensive, very detailed)
- FAQ section: 6 questions (lines 686-738)
- Meta description is excellent
- Real data and statistics (96%, 2-3x CTR, 50-70% lower CPA)

#### ⚠️ Minor Observation
- Author line at 800 doesn't link to /o-meni

#### 🔧 Recommendations
1. Link author name on line 800 to /o-meni page
2. Add FAQ schema JSON-LD for enhanced SEO
3. Consider adding mid-post CTA after line 289 (after setup section)

---

### Post 16: zasto-nema-rezultata (why-google-ads-not-working)

**Score:** 8/10
**File:** `/src/app/[locale]/blog/[slug]/posts/zasto-nema-rezultata/en.tsx`
**Meta Description:** "Your Google Ads campaigns are spending budget but not delivering results? Here are the 12 most common reasons why campaigns fail and concrete solutions for each problem."

#### ✅ Strengths
- H2s properly structured (lines 50, 85, 171, plus conclusion)
- Strong CTA at line 724 linking to /kontakt
- Good internal linking: 4 links in body + 2 in related section (lines 195, 281, 730-751)
- Keyword "Google Ads" and problem in first paragraphs
- Good skimmability: numbered checklists, problem/solution cards
- Word count: ~4,000+ words (comprehensive)
- FAQ section: 5 questions
- Author line correctly links to /o-meni (good!)

#### ⚠️ ISSUES
- **Discrepancy:** Meta description says "12 reasons" but TL;DR says "8 most common causes" and content has 8 problems
- Related blog posts section could be larger (only 2 links, should be 3-4)

#### 🔧 Recommendations (HIGH PRIORITY)
1. **CRITICAL:** Fix meta description in index.tsx to say "8 most common reasons" to match actual content
2. Add 1-2 more related blog post links:
   - quality-score-vodic (mentioned in Problem 6)
   - negativne-kljucne-reci (mentioned in Problem 4)
3. Add FAQ schema JSON-LD
4. Consider mid-post CTA after line 168 (after basics checklist)

---

## Priority Action Items

### 🔴 CRITICAL (Must Fix)

1. **Post 11 (koliko-kosta-google-ads):** Add internal blog post links
   - Add 3-4 internal links in body content
   - Add "Related Guides" section with 3-4 blog post links

2. **Post 16 (zasto-nema-rezultata):** Fix meta description discrepancy
   - Update index.tsx line 277 to say "8 most common reasons" instead of "12"

3. **Post 13 (performance-max-vodic):** Add related blog posts section
   - Add "Related Guides" section before FAQ
   - Add 2-3 more internal links in body

### 🟡 HIGH PRIORITY (Should Fix)

1. **All Posts:** Add FAQ schema JSON-LD markup for enhanced SEO
   - This will make FAQ sections appear in Google search results

2. **Posts 9, 10, 14, 15:** Link author byline to /o-meni page
   - Currently shows plain text "Author: Slobodan Jelisavac, Google Ads Consultant"
   - Should link to /o-meni like Post 16 does (line 765-767)

3. **All Posts:** Consider adding mid-post CTAs
   - Currently all posts only have bottom CTA
   - Mid-post CTA after major section could improve conversions

### 🟢 MEDIUM PRIORITY (Nice to Have)

1. **Post 9:** Add explicit H1 tag at top of content
2. **Post 13:** Move TL;DR box before opening paragraphs
3. **Post 13:** Expand FAQ from 3 to 5-6 questions
4. **Post 16:** Add 1-2 more related blog post links

---

## Content Quality Notes

### Word Count Distribution
- Shortest: 2,800 words (performance-max-vodic)
- Longest: 5,000+ words (remarketing-vodic)
- Average: ~3,800 words
- **Assessment:** Excellent depth across all posts

### Internal Linking Performance
- Best: Post 10 (kljucne-reci-vodic) - 6 links
- Worst: Post 11 (koliko-kosta-google-ads) - 0 links
- Average: 4.1 internal links per post
- **Assessment:** Good overall, but inconsistent

### FAQ Section Quality
- Best: Posts 10, 12, 14, 15 - all have 6 questions
- Worst: Post 13 - only 3 questions
- Average: 5.4 questions per post
- **Assessment:** Strong FAQ presence, but missing schema markup

---

## Technical SEO Recommendations

### Schema Markup (Missing from All Posts)

Add FAQ schema to all posts using this format:

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text here",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text here"
      }
    }
  ]
}
</script>
```

### Breadcrumb Schema

Consider adding breadcrumb schema for better navigation in search results.

### Author Schema

Consider adding author schema with link to /o-meni page for E-E-A-T signals.

---

## Comparative Analysis: Batch 1 vs Batch 2

*Note: This assumes Batch 1 was audited by another agent*

### Batch 2 Strengths
- Consistently high word counts (3,000-5,000+)
- Strong FAQ sections (5-6 questions typical)
- Good use of visual elements (tables, cards, grids)
- All posts have CTAs

### Batch 2 Weaknesses
- Missing FAQ schema markup across all posts
- Inconsistent author byline linking
- One post (11) has zero internal links
- One post (13) has weak internal linking

---

## Final Recommendations Summary

### Quick Wins (Can be completed in 1-2 hours)
1. Add internal links to Post 11
2. Fix meta description for Post 16
3. Add related posts section to Post 13
4. Link all author bylines to /o-meni

### Medium Effort (Can be completed in 2-4 hours)
1. Add FAQ schema JSON-LD to all 8 posts
2. Add mid-post CTAs to all posts
3. Expand FAQ in Post 13 from 3 to 6 questions

### Nice to Have (Can be completed over time)
1. Add breadcrumb schema
2. Add author schema for E-E-A-T
3. Consider adding video embeds where relevant

---

**Audit Completed:** February 13, 2026
**Next Review Recommended:** March 2026 (after implementing critical fixes)
