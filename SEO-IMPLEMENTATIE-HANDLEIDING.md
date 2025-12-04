# SEO Implementatie Handleiding - Signaalmakers

## 📋 Overzicht

Deze handleiding beschrijft hoe je de SEO-configuratie gebruikt die is geïmplementeerd voor maximale vindbaarheid op de merknaam "Signaalmakers" en gerelateerde diensten.

## 📁 Bestanden

### 1. `seo-config.json`
Centrale configuratie met alle SEO-variabelen, verdeeld in:
- **Brand**: Merknaam, domein, baseline
- **Contact**: NAP-gegevens (Name, Address, Phone)
- **Technical SEO**: Redirects, robots.txt, sitemap
- **Schema.org**: Structured data configuratie
- **Google Business Profile**: GBP instellingen
- **Analytics**: GA4 en Search Console
- **Navigation**: Menu-items en social links

### 2. `seo-keywords.csv`
Keyword tracking sheet met:
- **Keyword Group**: Categorie (BRAND_EXACT, SERVICE_GENERIC, etc.)
- **Keyword**: De zoekterm zelf
- **Search Intent**: Navigational/Informational/Commercial/Transactional
- **Priority**: HIGH/MEDIUM/LOW
- **Current Ranking**: Te monitoren in Search Console
- **Target URL**: Waar deze query naartoe moet
- **Notes**: Extra context

### 3. Geïmplementeerde Code
Zie de volgende bestanden voor de technische implementatie:
- `src/components/StructuredData.tsx` - Schema.org markup
- `src/components/SEO.tsx` - Meta tags per pagina
- `index.html` - Primaire structured data
- `public/robots.txt` - Crawl instructies
- `public/sitemap.xml` - URL overzicht

---

## 🎯 Gebruik in Google Search Console

### Setup Brand Queries Filter

1. Ga naar **Performance** rapport
2. Klik op **+ NEW** → **Query**
3. Voeg filter toe: `queries containing "signaalmakers"`
4. Sla op als segment: "Brand - Signaalmakers"

### Monitoring Dashboard

**Te monitoren metrics:**
- **CTR voor brand queries**: Doel > 85% (zie `seo-config.json`)
- **Gemiddelde positie**: Doel = 1.0 voor pure merknaam
- **Impressies trend**: Moet groeien over tijd
- **Clicks trend**: Moet groeien met impressies

### Keyword Groepen Monitoren

Maak aparte filters voor elke groep uit `seo-keywords.csv`:

```
BRAND_EXACT: queries containing "signaalmakers" AND NOT containing andere woorden
SERVICE_GENERIC: queries containing "databekabeling" OR "netwerkbekabeling"
BRAND_SERVICE_COMBO: queries containing "signaalmakers" AND ("databekabeling" OR "netwerkbekabeling")
```

---

## 📊 Gebruik in Google Analytics 4

### Custom Segment: Brand Traffic

1. Ga naar **Explore** → **Create new exploration**
2. Maak segment met naam: "Brand - Signaalmakers"
3. Filter: `Event name = page_view` AND `page_location contains "signaalmakers"`
4. Of: `Landing page contains "signaalmakers"` (voor externe verwijzingen)

### Site Search Tracking (toekomstig)

Als je interne zoekfunctie activeert (zie `seo-config.json`):

```javascript
// Search event tracking
gtag('event', 'search', {
  search_term: queryTerm,
  page_location: window.location.href
});
```

Dan filter je in GA4 op:
- Event name = `search`
- Parameter `search_term` bevat "signaalmakers"

---

## 🔍 Keyword Research & Expansion

### Huidige Keyword Groepen

Uit `seo-keywords.csv`:

1. **BRAND_EXACT** (9 keywords)
   - Pure merknaam queries
   - Hoogste prioriteit voor monitoring
   - Doel: Positie #1, CTR > 90%

2. **SERVICE_GENERIC** (9 keywords)
   - Diensten zonder merknaam
   - Competitief, maar relevant
   - Focus op long-tail combinaties

3. **BRAND_SERVICE_COMBO** (8 keywords)
   - Merknaam + dienst
   - Hoge intentie, lage competitie
   - Primaire focus voor conversie

4. **BRAND_TRUST** (4 keywords)
   - Reviews/ervaringen
   - Signaal voor GBP optimalisatie
   - Monitor voor reputatiebeheer

### Nieuwe Keywords Toevoegen

**Stappen:**

1. Export huidige `seo-keywords.csv`
2. Voeg nieuwe rij toe met:
   - Keyword Group (gebruik bestaande of maak nieuwe)
   - Keyword (zoekterm)
   - Search Intent
   - Priority
   - Target URL
3. Monitor in Search Console via query filter
4. Update indien nieuwe combinaties relevant blijken

**Voorbeeld nieuwe keywords:**

```csv
SERVICE_SECTOREN,netwerkbekabeling kantoren,Commercial,MEDIUM,Monitor,https://signaalmakers.nl/sectoren/kantoren,Sector specifiek
SERVICE_SECTOREN,databekabeling retail,Commercial,MEDIUM,Monitor,https://signaalmakers.nl/sectoren/retail,Sector specifiek
```

---

## 🗺️ Lokale SEO Optimalisatie

### Google Business Profile Checklist

Gebruik `seo-config.json` → `google_business_profile`:

- [ ] **NAP exact gelijk** aan website (check `contact` sectie)
- [ ] **Openingstijden** correct: Ma-Vr 09:00-17:00
- [ ] **Categorie** ingesteld: IT/Network Services
- [ ] **Beschrijving** gebruikt exacte tekst uit config
- [ ] **Services** toegevoegd uit `GBP_SERVICES_LIST`
- [ ] **Logo** geüpload: `logo_signaalmakers_fc.png`
- [ ] **Foto's** toegevoegd van projecten
- [ ] **Posts** maandelijks plaatsen
- [ ] **Reviews** actief verzamelen met "Signaalmakers" vermelding

### Regio Keywords Strategie

Uit `seo-keywords.csv` → `BRAND_REGIO`:

**Hoge prioriteit:**
- signaalmakers nederland
- signaalmakers noord-brabant
- signaalmakers oosterhout (vestigingsplaats)

**Medium prioriteit (op aanvraag):**
- signaalmakers + [grote steden waar je actief bent]

**Implementatie:**
- Gebruik in blog posts over projecten
- Vermeld in case studies
- Natuurlijk integreren in bestaande content
- NIET nieuwe landingspagina's maken per stad (content blijft ongewijzigd)

---

## 📈 Performance Monitoring

### Weekly Checks

**Google Search Console** (5 min):
1. Open "Brand - Signaalmakers" segment
2. Check CTR, gemiddelde positie
3. Nieuwe queries bekijken
4. Eventuele errors oplossen

**Google Business Profile** (5 min):
1. Nieuwe reviews beantwoorden
2. Q&A sectie checken
3. Insights bekijken (views, clicks)

### Monthly Reviews

**Keyword Performance** (15 min):
1. Export Search Console data
2. Vergelijk met `seo-keywords.csv`
3. Update "Current Ranking" kolom
4. Identificeer stijgers/dalers

**Structured Data Validatie** (10 min):
1. Ga naar [Rich Results Test](https://search.google.com/test/rich-results)
2. Test: `https://signaalmakers.nl/`
3. Verifieer LocalBusiness + WebSite schema
4. Check op warnings/errors

**NAP Consistentie Audit** (10 min):
1. Check `seo-config.json` → `contact.NAP_CONSISTENT`
2. Verifieer:
   - Website footer
   - Google Business Profile
   - Social media bios
   - Externe vermeldingen
3. Update `NAP_LAST_CHECKED_DATE`

### Quarterly Deep Dive

**Competitor Analysis** (30 min):
1. Check rankings voor top 10 keywords uit `seo-keywords.csv`
2. Analyseer concurrent structured data
3. Identificeer gaps/kansen
4. Update keyword priorities

**Content Opportunities** (30 min):
1. Filter Search Console op "impressies zonder clicks"
2. Identificeer relevante queries
3. Check of ze aansluiten bij bestaande diensten
4. Voeg toe aan `seo-keywords.csv` indien relevant

---

## 🔧 Technische Configuratie Updates

### JSON Config Gebruiken

**In development/CMS:**

```javascript
import seoConfig from './seo-config.json';

// Voorbeeld: dynamisch meta tags genereren
const pageTitle = `${pageSpecificTitle} | ${seoConfig.brand.BRAND_NAME}`;
const canonical = `${seoConfig.technical_seo.CANONICAL_DOMAIN}${pagePath}`;
```

**In templates:**

```jsx
<title>{seoConfig.brand.BRAND_NAME} - {pageTitle}</title>
<link rel="canonical" href={`${seoConfig.brand.BRAND_URL}${slug}`} />
```

### Structured Data Updates

Als je NAP wijzigt:

1. Update `seo-config.json` → `contact` sectie
2. Update `src/components/StructuredData.tsx` (regels 20-28)
3. Update `index.html` (regels 67-77)
4. Update `src/components/Footer.tsx`
5. Run `npm run build`
6. Test met Rich Results Test
7. Update Google Business Profile

---

## 📞 Support & Vragen

**Configuratie vragen:**
- Check eerst `seo-config.json` voor huidige waarden
- Check `seo-keywords.csv` voor keyword strategie

**Technische implementatie:**
- Zie `src/components/StructuredData.tsx`
- Zie `src/components/SEO.tsx`

**Monitoring setup:**
- Google Search Console filters (zie boven)
- GA4 segments (zie boven)

---

## ✅ Quick Reference

**Belangrijkste bestanden:**
- `/seo-config.json` - Centrale configuratie
- `/seo-keywords.csv` - Keyword tracking
- `/src/components/StructuredData.tsx` - Schema markup
- `/public/sitemap.xml` - URL overzicht

**Belangrijkste URLs:**
- Website: https://signaalmakers.nl
- Sitemap: https://signaalmakers.nl/sitemap.xml
- Robots: https://signaalmakers.nl/robots.txt

**Key Metrics:**
- Brand CTR target: **85%+**
- Brand position target: **#1**
- NAP consistency: **100%**
- Openingstijden: **Ma-Vr 09:00-17:00**

---

**Laatste update:** 2025-12-04
**Status:** ✅ Geïmplementeerd en live
