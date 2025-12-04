# SEO Locatie Strategie - Signaalmakers

## 📋 Overzicht

Deze handleiding beschrijft de geografische SEO-strategie voor Signaalmakers met focus op merkvindbaarheid in heel Nederland, met speciale aandacht voor Noord-Brabant en de grote steden.

---

## 📁 Locatie Bestanden

### 1. `seo-locations.json`
Gedetailleerde geografische targeting met:
- **Target Regions**: Provincies met prioriteiten
- **Service Areas**: Primaire en secundaire dekking
- **Keyword Strategy**: Tiered aanpak per stad/provincie
- **Content Integration**: Natuurlijke vermelding in content

### 2. `seo-keywords-extended.csv`
Uitgebreide keyword lijst met **150+ keywords** inclusief:
- **BRAND_REGIO_NL**: Landelijke brand keywords
- **BRAND_REGIO_PROVINCIE**: Per provincie
- **BRAND_REGIO_G4**: Grote vier steden
- **BRAND_REGIO_BRABANT**: Noord-Brabant focus
- **SERVICE_REGIO_**: Dienst + locatie combinaties
- **LONGTAIL_REGIO**: Long-tail lokale queries

### 3. `seo-config.json` → `geographic_targeting`
Centrale configuratie met:
- Target cities (Tier 1/2/3)
- Province priorities
- Content strategy
- Schema.org geo additions

---

## 🎯 Geografische Strategie

### Tier 1: Grootste Steden (G4 + Eindhoven)
**Hoogste zakelijke potentieel**

| Stad | Provincie | Inwoners | Priority | Keywords |
|------|-----------|----------|----------|----------|
| Amsterdam | Noord-Holland | 872.000 | HIGH | signaalmakers amsterdam, databekabeling amsterdam, netwerkbekabeling amsterdam |
| Rotterdam | Zuid-Holland | 651.000 | HIGH | signaalmakers rotterdam, databekabeling rotterdam, netwerkbekabeling rotterdam |
| Den Haag | Zuid-Holland | 545.000 | HIGH | signaalmakers den haag, databekabeling den haag, netwerkbekabeling den haag |
| Utrecht | Utrecht | 361.000 | HIGH | signaalmakers utrecht, databekabeling utrecht, netwerkbekabeling utrecht |
| Eindhoven | Noord-Brabant | 235.000 | HIGH | signaalmakers eindhoven, databekabeling eindhoven, netwerkbekabeling eindhoven |

**Keyword Focus:**
- Merk + stad: "signaalmakers amsterdam"
- Dienst + stad: "databekabeling rotterdam"
- Merk + dienst + stad: "signaalmakers netwerkbekabeling utrecht"

**Content Strategie:**
- Blog posts over projecten in deze steden
- Case studies met stad vermelding
- Natuurlijke vermeldingen in homepage content

---

### Tier 2: Grote Steden (100k-250k inwoners)
**Middelgrote zakelijke markt**

**Noord-Brabant (HIGH priority):**
- Tilburg (219.000)
- Breda (184.000)
- s-Hertogenbosch (155.000) - provinciehoofdstad

**Andere provincies (MEDIUM priority):**
- Groningen (234.000)
- Almere (214.000)
- Nijmegen (177.000)
- Arnhem (161.000)
- Haarlem (162.000)
- Amersfoort (158.000)

**Keyword Focus:**
- Merk + stad voor Noord-Brabant steden
- Dienst + stad voor selectieve andere steden
- Long-tail combinaties met sector

---

### Tier 3: Regionale Steden (<100k)
**Primair Noord-Brabant regio**

**CRITICAL:**
- **Oosterhout** (55.000) - Vestigingsplaats

**MEDIUM priority (regio Oosterhout):**
- Waalwijk (48.000)
- Etten-Leur (44.000)
- Dongen (26.000)
- Gilze en Rijen (27.000)

**MEDIUM priority (zakelijk):**
- Hoofddorp (76.000) - Schiphol business area

**Keyword Focus:**
- Vooral "signaalmakers [stad]" voor directe brand herkenning
- Vestigingsplaats Oosterhout: hoogste prioriteit voor lokale ranking

---

## 🗺️ Provinciale Targeting

### Critical: Noord-Brabant
**Thuisbasis - primaire markt**

**Keywords:**
- signaalmakers noord-brabant
- databekabeling noord-brabant
- netwerkbekabeling noord-brabant

**Steden binnen provincie:**
- Oosterhout (vestiging)
- Eindhoven (tech hub)
- Breda, Tilburg, Den Bosch (grote steden)
- Waalwijk, Etten-Leur (regionale steden)

**Content strategie:**
- "Gevestigd in Oosterhout, Noord-Brabant"
- "Actief in heel Noord-Brabant"
- Case studies van lokale projecten

---

### High Priority Provincies

**Zuid-Holland**
- Nabij vestiging, grote zakelijke markt
- Rotterdam, Den Haag (G4)
- Dordrecht (nabij Noord-Brabant)

**Noord-Holland**
- Grootste zakelijke markt
- Amsterdam (hoofdstad)
- Haarlem, Zaanstad, Hoofddorp

**Utrecht**
- Centraal gelegen
- Utrecht (G4)
- Amersfoort

**Keywords per provincie:**
```
signaalmakers [provincie]
databekabeling [provincie]
netwerkbekabeling [provincie]
```

---

### Medium/Low Priority Provincies

**Gelderland (MEDIUM):**
- Nijmegen, Arnhem, Apeldoorn
- Focus op grote projecten

**Limburg (MEDIUM):**
- Maastricht
- Zuid-Nederland connectie

**Overijssel, Groningen, Flevoland (LOW):**
- Selectieve projecten
- Alleen bij grote opdrachten actief targeten

---

## 📊 Keyword Implementatie

### Search Console Filters

**Per provincie:**
```
Filter 1: "signaalmakers noord-brabant"
Filter 2: "databekabeling noord-brabant" OR "netwerkbekabeling noord-brabant"
```

**Per grote stad (Tier 1):**
```
Filter: queries containing "amsterdam" OR "rotterdam" OR "den haag" OR "utrecht" OR "eindhoven"
```

**Vestigingsplaats:**
```
Filter: queries containing "oosterhout"
Priority: CRITICAL monitoring
```

### GA4 Custom Dimensions

**Locatie tracking:**
```javascript
// Voeg toe aan GA4 event tracking
gtag('event', 'page_view', {
  'location_mentioned': 'amsterdam', // dynamisch
  'content_type': 'blog',
  'geo_tier': 'tier_1'
});
```

**Segmenten aanmaken:**
1. "Traffic - Noord-Brabant interesse"
2. "Traffic - G4 steden interesse"
3. "Traffic - Vestigingsplaats (Oosterhout)"

---

## 🎨 Content Integratie

### Natuurlijke Vermeldingen

**Homepage:**
```
"Door heel Nederland actief, van Amsterdam tot Maastricht"
"Gevestigd in Oosterhout, werkzaam in heel Noord-Brabant en daarbuiten"
"Landelijke dekking met lokale service"
```

**Footer:**
```
"Signaalmakers - Oosterhout, Noord-Brabant
 Werkgebied: Heel Nederland"
```

**About/Contact pagina:**
```
"Vanuit ons hoofdkantoor in Oosterhout bedienen we bedrijven
 door heel Nederland, met een focus op Noord-Brabant, Zuid-Holland,
 Noord-Holland en Utrecht."
```

### Blog Post Strategie

**Titel voorbeelden:**
```
"Netwerkbekabeling project in [stad]: Case study"
"Databekabeling voor [sector] in [regio]"
"Cat6A bekabeling kantoorpand [stad]"
```

**Content template:**
```markdown
## Project: [Bedrijfsnaam] in [Stad]

Locatie: [Stad], [Provincie]
Sector: [Kantoren/Retail/etc.]
Dienst: [Netwerkbekabeling Cat6A]

Voor [bedrijf] in [stad] hebben we een complete netwerkinfrastructuur
gerealiseerd. Dit project in [regio] laat zien hoe...

[Natuurlijke vermelding stad/regio 3-4x in artikel]
```

**SEO optimalisatie:**
- H1: Include stad naam
- Meta description: Vermeld locatie
- Alt tekst afbeeldingen: "Netwerkbekabeling project [stad]"
- Schema.org Article met location property

---

## 📱 Schema.org Locatie Markup

### LocalBusiness Update

**Voeg toe aan bestaande LocalBusiness schema:**

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SIGNAALMAKERS",
  "areaServed": [
    {
      "@type": "Country",
      "name": "Nederland"
    },
    {
      "@type": "State",
      "name": "Noord-Brabant"
    },
    {
      "@type": "State",
      "name": "Zuid-Holland"
    },
    {
      "@type": "State",
      "name": "Noord-Holland"
    },
    {
      "@type": "State",
      "name": "Utrecht"
    },
    {
      "@type": "City",
      "name": "Amsterdam"
    },
    {
      "@type": "City",
      "name": "Rotterdam"
    },
    {
      "@type": "City",
      "name": "Eindhoven"
    }
  ]
}
```

### Service Schema met Locatie

**Voor diensten pagina's:**

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Netwerkbekabeling",
  "provider": {
    "@id": "https://signaalmakers.nl/#organization"
  },
  "areaServed": {
    "@type": "Country",
    "name": "NL"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Oosterhout",
        "addressRegion": "Noord-Brabant",
        "addressCountry": "NL"
      }
    }
  }
}
```

---

## 🔍 Google Business Profile Optimalisatie

### Service Area

**Instellen in GBP:**
1. Ga naar "Info" → "Service area"
2. Voeg toe:
   - Heel Nederland (landelijk)
   - OF specifieke provincies:
     - Noord-Brabant
     - Zuid-Holland
     - Noord-Holland
     - Utrecht

**Aanbeveling:**
- Selecteer "I serve customers at their locations"
- Voeg primaire steden toe (max 20):
  - Amsterdam, Rotterdam, Den Haag, Utrecht, Eindhoven
  - Breda, Tilburg, s-Hertogenbosch
  - Oosterhout (vestiging)

### GBP Posts met Locatie

**Maandelijkse posts:**

```
📍 Project afgerond in [Stad]!

Voor [bedrijfstype] in [stad] hebben we [dienst] gerealiseerd.
Benieuwd wat wij voor jouw bedrijf kunnen betekenen?

[Link naar diensten pagina]
#netwerkbekabeling #[stad] #[provincie]
```

**Frequentie:**
- 1x per maand: Project post met locatie vermelding
- Roteer tussen Tier 1 steden
- Extra focus op Noord-Brabant

---

## 📈 Monitoring & Rapportage

### Weekly Checks (5 min)

**Google Search Console:**
1. Open filter "Brand + Locatie"
   ```
   queries containing "signaalmakers" AND ("amsterdam" OR "rotterdam" OR "eindhoven" OR "breda" OR "oosterhout")
   ```

2. Check top steden:
   - Welke stad heeft meeste impressies?
   - CTR per stad (target: >80% voor brand queries)
   - Nieuwe locatie-gerelateerde queries?

**GBP Insights:**
- Check "Where customers view your profile on Maps"
- Zijn er nieuwe regio's waar je zichtbaar wordt?

### Monthly Reviews (15 min)

**Keyword Performance per Regio:**

1. Export Search Console data
2. Filter op locatie keywords
3. Update `seo-keywords-extended.csv` met rankings:

```csv
Keyword Group,Keyword,Current Ranking,Impressions,Clicks,CTR
BRAND_REGIO_G4,signaalmakers amsterdam,3,245,189,77.1%
BRAND_REGIO_G4,signaalmakers rotterdam,1,312,276,88.5%
```

**Acties per ranking:**
- Ranking 1-3: Monitor, behouden
- Ranking 4-10: Content boost (blog post over stad)
- Ranking 11+: Long-tail focus, niche down

**Top 5 Performing Cities:**
1. Identificeer top 5 steden met meeste impressies
2. Creëer content strategie voor volgende maand
3. Plan case study of blog post

### Quarterly Deep Dive (30 min)

**Geo Coverage Analysis:**

1. **Search Console:**
   - Queries → Filter op elke provincie
   - Welke provincies groeien?
   - Welke steden hebben potentieel?

2. **GA4 Geographic Report:**
   - Audience → Demographics → Geography
   - Van welke steden komt meeste traffic?
   - Correleer met conversies (offerte aanvragen)

3. **Competitor Check:**
   - Google: "databekabeling [stad top 5]"
   - Wie ranked er voor lokale dienst queries?
   - Analyseer hun lokale SEO strategie

4. **Keyword Expansion:**
   - Nieuwe steden toevoegen aan targeting?
   - Focus verschuiven naar bepaalde regio?
   - Update `seo-config.json` priorities

---

## 🚀 Implementatie Roadmap

### Fase 1: Foundation (Week 1-2)
**Doel: Basis lokale SEO op orde**

- [x] `seo-locations.json` aangemaakt
- [x] `seo-keywords-extended.csv` aangemaakt
- [x] `seo-config.json` updated met geographic_targeting
- [ ] Schema.org areaServed toevoegen aan LocalBusiness
- [ ] GBP service area instellen
- [ ] Search Console geo filters aanmaken

### Fase 2: Content (Week 3-6)
**Doel: Eerste locatie-content live**

- [ ] Homepage update met regionale vermeldingen
- [ ] Footer: "Werkgebied" sectie toevoegen
- [ ] 1e blog post met stad focus (Tier 1 stad)
- [ ] Case study met locatie vermelding
- [ ] Contact pagina: "Werkgebied" sectie

### Fase 3: Scaling (Maand 2-3)
**Doel: Alle Tier 1 steden content**

- [ ] Blog posts voor alle 5 Tier 1 steden
- [ ] GBP posts met locatie rotatie
- [ ] FAQ sectie met "Waar zijn jullie actief?"
- [ ] Schema.org uitbreiden naar Tier 2 steden
- [ ] Eerste ranking data verzamelen

### Fase 4: Optimization (Maand 4-6)
**Doel: Data-driven optimalisatie**

- [ ] Analyseer welke steden presteren
- [ ] Focus content op best performing regions
- [ ] Expand naar Tier 2 steden met potentieel
- [ ] Update keyword priorities o.b.v. data
- [ ] Local link building (GBP, directories)

---

## ⚠️ Belangrijke Don'ts

### ❌ NIET DOEN:

1. **Geen stad-specifieke landingspagina's maken**
   - Voorbeeld: `/netwerkbekabeling-amsterdam`
   - Reden: Dunne content, duplicate content risico
   - Alternatief: Natuurlijke vermeldingen in blog/cases

2. **Geen exacte duplicaten per stad**
   - FOUT: "Netwerkbekabeling Amsterdam" pagina met enkel stad naam aangepast
   - GOED: Unieke content per blog post met natuurlijke stad vermelding

3. **Geen keyword stuffing met steden**
   - FOUT: "Signaalmakers Amsterdam is het beste netwerkbedrijf in Amsterdam voor amsterdamse bedrijven in Amsterdam"
   - GOED: "Voor [bedrijf] in Amsterdam hebben we een complete netwerk infrastructuur gerealiseerd"

4. **Geen valse vestigingen claimen**
   - Enkel Oosterhout is fysieke vestiging
   - Geen virtual offices in andere steden voor SEO

5. **Geen geo-spam in structured data**
   - Max 10 steden in areaServed
   - Focus op realistische service area

---

## ✅ Best Practices

### ✓ WEL DOEN:

1. **Natuurlijke integratie**
   - Vermeld steden waar je echt projecten hebt gedaan
   - Gebruik in context: "Recent project in [stad]..."
   - Authentic testimonials met locatie

2. **Quality over quantity**
   - Liever 5 goede blog posts met stad vermelding
   - Dan 50 dunne stad-pagina's

3. **User intent first**
   - Focus op "databekabeling amsterdam" (dienst intent)
   - Niet alleen op "signaalmakers amsterdam" (brand)
   - Gebruiker zoekt dienst, vindt jouw merk

4. **Local signals versterken**
   - GBP actief houden met posts
   - Reviews verzamelen (vermeld locatie indien mogelijk)
   - NAP consistent op alle platforms
   - Local directories (als relevant)

5. **Monitor en itereer**
   - Data-driven decisies
   - Stop met steden die niet presteren
   - Dubbel down op steden met potentieel

---

## 📞 Support & Vragen

**Configuratie:**
- `seo-config.json` → `geographic_targeting`
- `seo-locations.json` voor detailed targeting
- `seo-keywords-extended.csv` voor keyword tracking

**Monitoring:**
- Google Search Console: Geo filters
- GA4: Geographic reports
- GBP Insights: Map views per regio

**Content strategie:**
- Blog template met locatie integratie
- Case study format
- Natural mention guidelines

---

## 📚 Quick Reference

**Belangrijkste steden voor targeting:**
1. **Amsterdam** (872k) - Hoofdstad, grootste markt
2. **Rotterdam** (651k) - Haven, industrie, zakelijk
3. **Eindhoven** (235k) - Tech hub, Brabant
4. **Oosterhout** (55k) - VESTIGINGSPLAATS (critical)
5. **Breda** (184k) - Grote stad regio

**Keyword prioriteiten:**
- CRITICAL: signaalmakers oosterhout
- HIGH: signaalmakers [G4 + Eindhoven]
- HIGH: databekabeling/netwerkbekabeling noord-brabant
- MEDIUM: signaalmakers [Tier 2 steden]
- MEDIUM: dienst + [Tier 1 steden]

**Content frequentie:**
- 1x per maand: Blog met stad vermelding
- 1x per maand: GBP post met locatie
- 1x per kwartaal: Case study met regio focus

**Schema.org prioriteit:**
- areaServed: Country (NL) + top 4 provincies
- serviceArea: Heel Nederland
- geo: Oosterhout (vestigingslocatie)

---

**Laatste update:** 2025-12-04
**Status:** ✅ Strategie compleet - Klaar voor implementatie

**Totaal aantal locatie keywords:** 150+
**Target provincies:** 9
**Target steden:** 35+
**Focus regio:** Noord-Brabant (thuisbasis)
