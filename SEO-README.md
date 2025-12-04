# SEO Documentatie - Signaalmakers

## 📚 Overzicht Bestanden

Dit project bevat een complete SEO-strategie voor merkvindbaarheid en lokale SEO. Alle configuratie en strategie is gedocumenteerd in de volgende bestanden:

---

## 🎯 Kern Bestanden

### 1. **seo-config.json** (396 regels)
**Centrale SEO configuratie voor hele website**

**Secties:**
- `brand`: Merknaam, domein, baseline
- `contact`: NAP gegevens (Name, Address, Phone) + KVK
- `technical_seo`: Canonical, redirects, robots.txt, sitemap
- `schema_org`: LocalBusiness en WebSite schema configuratie
- `google_business_profile`: GBP instellingen en openingstijden
- `analytics`: GA4 (GTM-TW32TMV6) en Search Console setup
- `internal_search`: Zoekfunctie configuratie
- `navigation`: Menu items en social links
- `geographic_targeting`: **NIEUW** - Locatie targeting strategie
  - Target cities (Tier 1/2/3)
  - Target provinces met prioriteiten
  - Content strategie per regio
  - Schema.org geo additions

**Gebruik:**
```javascript
import seoConfig from './seo-config.json';

// Voorbeeld: Dynamisch meta tags genereren
const pageTitle = `${pageTitle} | ${seoConfig.brand.BRAND_NAME}`;
const phone = seoConfig.contact.COMPANY_PHONE_PRIMARY; // +31 6 45251333
```

---

### 2. **seo-keywords.csv** (74 regels)
**Basis keyword tracking - 56 keywords**

**Groepen:**
- BRAND_EXACT (5): Pure merknaam queries
- SERVICE_GENERIC (9): Diensten zonder merk
- SERVICE_TECHNISCH (6): Cat6/Cat6A specificaties
- SERVICE_COMPONENTEN (5): Patchkasten, kabelmanagement
- BRAND_SERVICE_COMBO (8): Merk + dienst
- BRAND_MATERIALEN_COMBO (6): Merk + technische specs
- BRAND_COMPONENTEN_COMBO (4): Merk + componenten
- BRAND_REGIO (6): Geografische combinaties (basis)
- SERVICE_REGIO (3): Dienst + locatie
- BRAND_TRUST (4): Reviews en ervaringen
- BRAND_TRANSACTIONAL (6): Offerte en contact

**Gebruik:**
- Import in Google Search Console voor tracking
- Monitor rankings in kolom "Current Ranking"
- Update maandelijks met GSC data

---

### 3. **seo-keywords-extended.csv** (170+ regels)
**Uitgebreide keyword lijst - 150+ keywords inclusief locaties**

**Extra groepen t.o.v. basis CSV:**
- BRAND_REGIO_NL (2): Landelijke brand keywords
- BRAND_REGIO_PROVINCIE (6): Per provincie
- BRAND_REGIO_G4 (4): Grote vier steden
- BRAND_REGIO_BRABANT (10): Noord-Brabant steden
- BRAND_REGIO_ZUIDHOLLAND (3): Zuid-Holland steden
- BRAND_REGIO_NOORDHOLLAND (3): Noord-Holland steden
- BRAND_REGIO_UTRECHT (1): Utrecht provincie
- BRAND_REGIO_GELDERLAND (3): Gelderland steden
- BRAND_REGIO_OTHER (4): Overige provincies
- SERVICE_REGIO_NL (5): Dienst + Nederland
- SERVICE_REGIO_PROVINCIE (6): Dienst + provincie
- SERVICE_REGIO_G4 (8): Dienst + grote steden
- SERVICE_REGIO_BRABANT (6): Dienst + Brabant steden
- SERVICE_REGIO_CITIES (4): Dienst + andere steden
- BRAND_SERVICE_REGIO_COMBO (10): Merk + dienst + locatie
- LONGTAIL_REGIO (8): Long-tail lokale queries
- LONGTAIL_SECTOR (8): Sector-specifieke queries

**Gebruik:**
- Complete keyword universe voor tracking
- Gebruik voor advanced Search Console filtering
- Prioriteer based on "Priority" kolom

---

### 4. **seo-locations.json** (250+ regels)
**Geografische targeting configuratie**

**Structuur:**
```json
{
  "target_regions": {
    "primary": {
      "name": "Noord-Brabant",
      "cities": [...]
    },
    "secondary_provinces": [...]
  },
  "service_areas": {
    "primary_area": "50km radius Oosterhout",
    "secondary_area": "Heel Nederland"
  },
  "keyword_strategy": {
    "tier_1_cities": ["Amsterdam", "Rotterdam", ...],
    "tier_2_cities": [...],
    "tier_3_cities": [...]
  }
}
```

**Gebruik:**
- Referentie voor content strategie
- Bepaal welke steden te targeten
- Prioriteer regio's voor marketing

---

## 📖 Handleidingen

### 5. **SEO-IMPLEMENTATIE-HANDLEIDING.md** (308 regels)
**Complete implementatie en monitoring handleiding**

**Inhoud:**
- 📁 Overzicht alle SEO bestanden
- 🎯 Google Search Console setup
  - Brand queries filter
  - Monitoring dashboard
  - Keyword groepen filters
- 📊 Google Analytics 4
  - Custom segments
  - Site search tracking
- 🔍 Keyword research & expansion
- 🗺️ Lokale SEO optimalisatie
  - Google Business Profile checklist
  - Regio keywords strategie
- 📈 Performance monitoring
  - Weekly checks (5 min)
  - Monthly reviews (15 min)
  - Quarterly deep dive (30 min)
- 🔧 Technische configuratie updates
- ✅ Quick reference

**Gebruik:**
- Lees dit EERST voor algemene SEO setup
- Volg weekly/monthly checklists
- Gebruik als reference voor updates

---

### 6. **SEO-LOCATIE-STRATEGIE.md** (580+ regels)
**Uitgebreide geografische SEO strategie**

**Inhoud:**
- 🗺️ Tier 1/2/3 steden strategie
- 📍 Provinciale targeting
- 🎯 35+ steden met keywords en prioriteiten
- 📊 Keyword implementatie per regio
- 🎨 Content integratie voorbeelden
- 📱 Schema.org locatie markup
- 🔍 Google Business Profile geo-optimalisatie
- 📈 Monitoring per regio
- 🚀 Implementatie roadmap (4 fases)
- ⚠️ Don'ts (geen spam, geen fake vestigingen)
- ✅ Best practices

**Gebruik:**
- Lees dit voor lokale SEO strategie
- Gebruik templates voor content met locaties
- Volg roadmap voor gefaseerde implementatie

---

## 🎯 Prioriteiten Overzicht

### Keyword Prioriteiten

**CRITICAL (moet ranking 1-3 zijn):**
- `signaalmakers` (pure brand)
- `signaalmakers nl` (brand + domein)
- `signaalmakers oosterhout` (vestigingsplaats)

**HIGH (moet ranking 1-10 zijn):**
- Brand + dienst: `signaalmakers databekabeling`
- Dienst + infrastructuur: `databekabeling infrastructuur`
- Dienst + Nederland: `databekabeling door heel nederland`
- Brand + G4 steden: `signaalmakers amsterdam/rotterdam/eindhoven`
- Dienst + G4: `databekabeling amsterdam/rotterdam`

**MEDIUM (monitor, optimaliseer):**
- Brand + provincie: `signaalmakers noord-brabant`
- Dienst + provincie: `netwerkbekabeling noord-brabant`
- Brand + Tier 2 steden: `signaalmakers breda/tilburg`

**LOW (long-tail, monitoring only):**
- Technische specs: `cat7 bekabeling`
- Kleine steden: `signaalmakers dongen`
- Long-tail combos: `patchkasten amsterdam`

---

### Geografische Prioriteiten

**CRITICAL:**
- Oosterhout (vestigingsplaats) - 100% NAP consistency

**HIGH:**
- Noord-Brabant (thuisprovincie)
  - Eindhoven, Breda, Tilburg, s-Hertogenbosch
- G4 steden:
  - Amsterdam, Rotterdam, Den Haag, Utrecht

**MEDIUM:**
- Zuid-Holland (nabij)
- Noord-Holland (Amsterdam regio)
- Utrecht (centraal)
- Tier 2 Brabant: Waalwijk, Etten-Leur

**LOW:**
- Gelderland, Limburg, Overijssel
- Groningen, Flevoland
- Alleen bij grote projecten

---

## 📊 Monitoring Workflow

### Weekly (5 minuten)

**Google Search Console:**
1. Check filter: "Brand - Signaalmakers"
   - CTR target: >85%
   - Positie: #1 voor `signaalmakers`
2. Check nieuwe queries
3. Check eventuele errors

**Google Business Profile:**
1. Beantwoord reviews
2. Check insights (views, clicks)

### Monthly (30 minuten)

**Keyword Performance:**
1. Export GSC data → Update `seo-keywords.csv`
2. Identificeer stijgers/dalers
3. Update content strategie

**Structured Data:**
1. Test via [Rich Results Test](https://search.google.com/test/rich-results)
2. Verifieer LocalBusiness + WebSite schema
3. Check warnings/errors

**NAP Consistency:**
1. Verifieer op website, GBP, social media
2. Update `NAP_LAST_CHECKED_DATE` in `seo-config.json`

**Locatie Performance:**
1. Welke steden presteren?
2. Update `seo-keywords-extended.csv` met lokale rankings
3. Plan content voor best performing cities

### Quarterly (1-2 uur)

**Deep Dive:**
- Competitor analysis per stad
- Content opportunities vanuit GSC data
- Update keyword priorities
- Review geo-targeting strategie
- Update `seo-config.json` indien nodig

---

## 🚀 Getting Started

### Voor nieuwe gebruikers:

**Stap 1: Basis begrip (30 min)**
1. Lees `SEO-README.md` (dit bestand) volledig
2. Bekijk `seo-config.json` structuur
3. Open `seo-keywords.csv` in spreadsheet

**Stap 2: Setup monitoring (1 uur)**
1. Volg `SEO-IMPLEMENTATIE-HANDLEIDING.md` → "Google Search Console"
2. Maak filters aan voor:
   - Brand queries
   - Non-brand queries
   - Locatie queries (per provincie/stad)
3. Setup GA4 segments

**Stap 3: Eerste check (15 min)**
1. Export huidige rankings uit GSC
2. Update `seo-keywords.csv` kolom "Current Ranking"
3. Identificeer quick wins (ranking 4-10 → push naar top 3)

**Stap 4: Content planning (30 min)**
1. Lees `SEO-LOCATIE-STRATEGIE.md` → "Content Integratie"
2. Kies 1 Tier 1 stad voor eerste blog post
3. Plan maandelijkse content calendar

### Voor developers:

**Implementatie:**
```javascript
// 1. Import SEO config
import seoConfig from './seo-config.json';

// 2. Gebruik in components
const structuredData = {
  '@context': 'https://schema.org',
  '@type': seoConfig.schema_org.SCHEMA_ORG_ORGANIZATION_TYPE, // "LocalBusiness"
  name: seoConfig.brand.BRAND_NAME,
  telephone: seoConfig.contact.COMPANY_PHONE_PRIMARY,
  // ... etc
};

// 3. Dynamic meta tags
<title>{pageTitle} | {seoConfig.brand.BRAND_NAME}</title>
<link rel="canonical" href={`${seoConfig.brand.BRAND_URL}${slug}`} />

// 4. Geographic targeting
const targetCities = seoConfig.geographic_targeting.TARGET_CITIES_TIER_1.cities;
```

**Structured Data uitbreiden:**
```javascript
// Voeg areaServed toe aan LocalBusiness
const areaServed = seoConfig.geographic_targeting.TARGET_PROVINCES.map(p => ({
  '@type': 'State',
  name: p.name
}));
```

---

## 📁 Bestandsstructuur

```
/root/signaalmakers/
│
├── SEO-README.md                      ← DIT BESTAND (start hier)
├── SEO-IMPLEMENTATIE-HANDLEIDING.md   ← Algemene SEO handleiding
├── SEO-LOCATIE-STRATEGIE.md           ← Geografische SEO strategie
│
├── seo-config.json                    ← Centrale configuratie (gebruik in code)
├── seo-keywords.csv                   ← Basis keyword tracking (56 keywords)
├── seo-keywords-extended.csv          ← Uitgebreid met locaties (150+ keywords)
├── seo-locations.json                 ← Geografische targeting data
│
├── index.html                         ← Primary structured data
├── public/
│   ├── robots.txt                    ← Crawl instructies
│   └── sitemap.xml                   ← URL overzicht
│
└── src/
    └── components/
        ├── StructuredData.tsx        ← Schema.org component (LocalBusiness, WebSite)
        └── SEO.tsx                   ← Meta tags component
```

---

## 🎯 Key Metrics

**Brand Visibility:**
- Target: #1 positie voor "signaalmakers"
- Target: >85% CTR voor brand queries
- Target: >90% CTR voor "signaalmakers" exact match

**Lokale SEO:**
- Oosterhout: #1 voor "signaalmakers oosterhout"
- Noord-Brabant: Top 3 voor "signaalmakers noord-brabant"
- G4 steden: Top 10 voor "signaalmakers [stad]"

**Technische SEO:**
- NAP consistency: 100%
- Structured data errors: 0
- Core Web Vitals: All green

**Coverage:**
- 56 basis keywords (seo-keywords.csv)
- 150+ total keywords (seo-keywords-extended.csv)
- 35+ steden targeted
- 9 provincies in strategie

---

## ⚡ Quick Actions

**Ik wil rankings checken:**
→ Google Search Console + `seo-keywords.csv`

**Ik wil nieuwe content maken met locatie:**
→ `SEO-LOCATIE-STRATEGIE.md` → "Content Integratie"

**Ik wil weten welke stad te targeten:**
→ `seo-locations.json` → "keyword_strategy" → "tier_1_cities"

**Ik wil SEO configuratie updaten:**
→ `seo-config.json` → Update relevante sectie → Rebuild website

**Ik wil nieuwe keywords toevoegen:**
→ `seo-keywords-extended.csv` → Nieuwe rij toevoegen → Update GSC filters

**Ik wil structured data updaten:**
→ `src/components/StructuredData.tsx` + `index.html`

**Ik wil GBP optimaliseren:**
→ `seo-config.json` → "google_business_profile" + `SEO-LOCATIE-STRATEGIE.md` → "GBP Optimalisatie"

---

## 🆘 Support

**Vragen over:**
- **Algemene SEO**: Zie `SEO-IMPLEMENTATIE-HANDLEIDING.md`
- **Lokale SEO**: Zie `SEO-LOCATIE-STRATEGIE.md`
- **Keywords**: Zie `seo-keywords.csv` of `seo-keywords-extended.csv`
- **Configuratie**: Zie `seo-config.json`
- **Schema.org**: Zie `src/components/StructuredData.tsx`

**Niet zeker waar te beginnen?**
→ Lees dit bestand (SEO-README.md) volledig door
→ Daarna: `SEO-IMPLEMENTATIE-HANDLEIDING.md`

---

## 📊 Statistics

**Totaal:**
- 6 SEO documentatiebestanden
- 4 configuratiebestanden (JSON/CSV)
- 150+ getrackte keywords
- 35+ target steden
- 9 target provincies
- 11 keyword groepen (basis)
- 26 keyword groepen (extended met locaties)

**Dekking:**
- Landelijk: Heel Nederland
- Focus: Noord-Brabant (thuisbasis)
- Tier 1: 5 grote steden (G4 + Eindhoven)
- Tier 2: 15 middelgrote steden
- Tier 3: 6 kleine/regionale steden

**Monitoring:**
- Weekly: 5 min (GSC + GBP check)
- Monthly: 30 min (rankings + NAP + structured data)
- Quarterly: 1-2 uur (deep dive + strategy update)

---

**Laatste update:** 2025-12-04
**Status:** ✅ Complete SEO strategie - Klaar voor gebruik

**Alle bestanden zijn:**
- ✅ Gedocumenteerd
- ✅ Met voorbeelden
- ✅ Met implementatie instructies
- ✅ Met monitoring workflows
- ✅ Klaar voor direct gebruik

**Start vandaag met:**
1. Setup Search Console filters (`SEO-IMPLEMENTATIE-HANDLEIDING.md`)
2. Update rankings in `seo-keywords.csv`
3. Plan eerste lokale content (`SEO-LOCATIE-STRATEGIE.md` → roadmap)
