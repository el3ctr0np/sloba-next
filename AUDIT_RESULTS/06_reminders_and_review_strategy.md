# Podsetnici + Review Collection Strategija
**Datum:** 14. Februar 2026

---

## PODSETNICI

### 1. Image Alt Tags
**Status:** Čeka isporuku dodatnih slika od korisnika
**Šta treba uraditi:**
- Kada korisnik dostavi nove slike, dodati descriptive alt tagove na SVE img elemente
- Prioritet: Hero sekcije, servisne stranice, blog featured images
- Format alt taga: "[Opis slike] — [Kontekst stranice]"
- Primer: "Google Ads dashboard sa prikazom ROAS metrike — Google Ads upravljanje"
- Audit pre implementacije: pregledati sve postojeće slike i dodati alt gde nedostaje

### 2. Engleski Case Studies
**Status:** Čeka dokument sa listom klijenata za case studies
**Šta treba uraditi:**
- Korisnik treba da dostavi dokument sa svim klijentima koje želi pretvoriti u case studies
- Za svakog klijenta: kompanija, industrija, izazov, rešenje, rezultati (sa brojevima)
- Format: Jedna case study stranica po klijentu (već postoji `/case-studies/[slug]` route)
- Prevesti na engleski za međunarodno tržište
- Dodati schema markup (Case Study → Article ili CreativeWork schema)

---

## REVIEW/TESTIMONIAL COLLECTION STRATEGIJA

### Problem
Trenutno sajt nema sistematski način za prikupljanje klijentskih recenzija. Testimonials na sajtu su statični.

### Preporučena strategija (3 faze)

---

#### Faza 1: Google Business Profile Reviews (Prioritet 1)

**Zašto:** Google recenzije su najvidljivije u pretrazi i grade E-E-A-T signale.

**Akcije:**
1. **Kreiraj Google Business Profile** ako ne postoji (za Batajnica/Beograd lokaciju)
2. **Napravi direktan link za ostavljanje recenzije** (Google My Business → Share review link)
3. **Pošalji email klijentima** sa molbom za recenziju nakon uspešnog meseca/kvartalnog reporta

**Template email za klijente (SR):**
```
Zdravo [Ime],

Hvala vam na dosadašnjoj saradnji! Drago mi je da vidim rezultate koje postižemo.

Ako imate 2 minuta, mnogo bi mi značila vaša recenzija na Google-u: [LINK]

Vaše iskustvo pomaže drugim firmama da donesu odluku.

Hvala!
Slobodan
```

**Template email za klijente (EN):**
```
Hi [Name],

Thank you for our collaboration! I'm glad to see the results we're achieving together.

If you have 2 minutes, I'd really appreciate your review on Google: [LINK]

Your experience helps other businesses make their decision.

Thanks!
Slobodan
```

**Timing:** Slati nakon:
- Uspešnog mesečnog reporta sa pozitivnim rezultatima
- Dostizanja milestone-a (npr. ROAS prelazi 3x)
- 3+ meseca saradnje

---

#### Faza 2: Video/Tekst Testimoniali za Sajt (Prioritet 2)

**Zašto:** Autentični testimoniali na sajtu povećavaju konverzije za 15-35%.

**Akcije:**
1. **Kreiraj standardni format** za testimoniale:
   - Ime i prezime klijenta
   - Kompanija i pozicija
   - Fotografija (opciono ali poželjno)
   - Citati (2-3 rečenice)
   - Konkretni rezultati (brojke)

2. **Proces prikupljanja:**
   - Nakon 3+ meseca saradnje, zatraži kratak video poziv (5 min)
   - Pripremi 3 pitanja unapred:
     1. "Kako je bilo pre nego što smo počeli saradnju?"
     2. "Šta se promenilo od kada radimo zajedno?"
     3. "Kome biste preporučili ovu uslugu?"
   - Transkribuj i izvuci najbolje citate
   - Traži pismenu dozvolu za objavljivanje

3. **Na sajtu prikazati:**
   - Testimonial komponentu na homepage-u (već postoji `<Testimonial />`)
   - Dodati na servisne stranice relevantne testimoniale
   - Kreirati dedicated testimonials/reviews stranicu

---

#### Faza 3: Platformski Reviews (Prioritet 3)

**Zašto:** Proširuje social proof na platforme gde potencijalni klijenti traže Google Ads eksperte.

**Platforme po prioritetu:**
1. **Clutch.co** — B2B review platforma, odlična za agencije/freelancere
2. **LinkedIn recommendations** — Direktno na profilu
3. **Trustpilot** — Za međunarodne klijente

**Akcije:**
1. Kreiraj Clutch profil
2. Pošalji Clutch review invitation top 3 klijentima
3. Zatraži LinkedIn recommendation od klijenata koji su najzadovoljniji

---

### KPI za praćenje

| Metrika | Cilj (3 meseca) | Cilj (6 meseci) |
|---------|-----------------|-----------------|
| Google Reviews | 3-5 recenzija | 8-10 recenzija |
| Video testimoniali | 2 | 4 |
| Tekst testimoniali na sajtu | 3 | 6 |
| Clutch reviews | 1-2 | 3-5 |

---

### Tehnička implementacija na sajtu

**Kada dođe vreme za implementaciju:**
1. Kreirati `/recenzije` ili `/testimonials` stranicu
2. Dodati AggregateRating schema na homepage
3. Dodati Review schema za svaki testimonial
4. Prikazati Google Reviews widget (ako ima dovoljno recenzija)

**Schema primer za budućnost:**
```json
{
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "itemReviewed": {
    "@type": "ProfessionalService",
    "name": "Slobodan Jelisavac - Google Ads Consultant"
  },
  "ratingValue": "5.0",
  "bestRating": "5",
  "ratingCount": "10"
}
```

---

## Sledeći koraci

1. **Odmah:** Napraviti Google Business Profile (ako ne postoji)
2. **Ove nedelje:** Poslati prvi review request email top 2 klijentima
3. **Ovog meseca:** Dogovoriti 1 video testimonial
4. **Mart 2026:** Kreirati Clutch profil

---

**Pripremio:** Claude Opus 4.6
