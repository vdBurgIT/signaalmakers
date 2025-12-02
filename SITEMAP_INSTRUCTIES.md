# SITEMAP INSTRUCTIES - SIGNAALMAKERS.NL

**Datum implementatie:** 2 december 2025  
**Geïmplementeerd door:** Claude Code Audit & SEO Optimalisatie

---

## WAT IS GEÏMPLEMENTEERD?

Voor https://signaalmakers.nl zijn de volgende sitemap-oplossingen geïmplementeerd:

### 1. XML Sitemap (voor zoekmachines)
- **Locatie:** `https://signaalmakers.nl/sitemap.xml`
- **Bestand:** `/public/sitemap.xml`
- **Functie:** Technische sitemap die zoekmachines vertelt welke pagina's geïndexeerd moeten worden

### 2. HTML Sitemap (voor bezoekers)
- **URL:** `https://signaalmakers.nl/sitemap`
- **Component:** `/src/pages/Sitemap.tsx`
- **Functie:** Gebruiksvriendelijk overzicht van alle pagina's, toegankelijk via footer link

### 3. Robots.txt
- **Locatie:** `https://signaalmakers.nl/robots.txt`
- **Bestand:** `/public/robots.txt`
- **Functie:** Vertelt zoekmachines waar de XML sitemap te vinden is

### 4. Footer Link
- **Locatie:** Footer sectie "Bedrijf", tussen FAQ en Contact
- **Component:** `/src/components/Footer.tsx`
- **Functie:** Directe toegang voor bezoekers naar de HTML sitemap

---

## HUIDIGE PAGINA'S IN SITEMAP

De sitemap bevat **alleen live, indexeerbare pagina's**:

### Hoofdpagina's (9)
- Home (/)
- Diensten (/diensten)
- Abonnementen (/abonnementen)
- Blog (/blog)
- Over ons (/over-ons)
- FAQ (/faq)
- Contact (/contact)
- Offerte (/offerte)
- Sectoren (/sectoren)
- Sitemap (/sitemap)

### Diensten (5)
- Netwerkbekabeling (/diensten/netwerkbekabeling)
- Audiokabels (/diensten/audiokabels)
- Camera-bekabeling (/diensten/camera-bekabeling)
- Patchkasten (/diensten/patchkasten)
- Meten & Certificeren (/diensten/certificeren)

### Sectoren (5)
- Serverruimtes (/sectoren/serverruimtes)
- Kantoren (/sectoren/kantoren)
- Retail & Horeca (/sectoren/retail)
- Magazijn & Logistiek (/sectoren/magazijn)
- Onderwijs & Zorg (/sectoren/onderwijs)

### Blog Posts (6)
1. Waarom MSP-bedrijven baat hebben bij een vaste bekabelingspartner
2. Waarom netwerkbekabeling de belangrijkste laag van je IT-omgeving is
3. Wat is wifi-bekabeling en waarom heb je datakabels nodig voor goede wifi?
4. Wanneer is het tijd om je netwerkbekabeling te vervangen en te moderniseren?
5. Waarom een goed kabelplan onmisbaar is voor een professioneel datanetwerk
6. Kabelmanagement en documentatie: de stille helden achter efficiënt netwerkbeheer

**Totaal: 31 pagina's**

---

## XML SITEMAP INDIENEN BIJ GOOGLE SEARCH CONSOLE

### Stap 1: Inloggen
1. Ga naar https://search.console.google.com
2. Log in met je Google account
3. Selecteer property "signaalmakers.nl"

### Stap 2: Sitemap Indienen
1. Klik in het linkermenu op **"Sitemaps"**
2. Voer in het veld "Nieuwe sitemap toevoegen" in: `sitemap.xml`
3. Klik op **"Verzenden"**

### Stap 3: Verificatie
- Status moet na enkele minuten "Geslaagd" worden
- Aantal gedetecteerde URL's moet **31** zijn
- Eventuele fouten/waarschuwingen bekijken en oplossen

### Herindienen bij wijzigingen
- Google haalt de sitemap automatisch opnieuw op
- Bij grote wijzigingen: handmatig opnieuw indienen via Search Console

---

## SITEMAP CONTROLEREN

### Snelle checks:

1. **XML Sitemap werkt:**
   ```
   https://signaalmakers.nl/sitemap.xml
   ```
   - Moet XML-bestand tonen met alle URL's
   - Controleer of alle belangrijke pagina's aanwezig zijn

2. **HTML Sitemap werkt:**
   ```
   https://signaalmakers.nl/sitemap
   ```
   - Moet leesbare pagina tonen met gegroepeerde links
   - Controleer of alle secties kloppen

3. **Robots.txt werkt:**
   ```
   https://signaalmakers.nl/robots.txt
   ```
   - Moet "Sitemap: https://signaalmakers.nl/sitemap.xml" bevatten

4. **Footer link werkt:**
   - Ga naar een willekeurige pagina
   - Scroll naar footer
   - Klik op "Sitemap" link onder "Bedrijf"
   - Moet naar /sitemap pagina gaan

### Validatie tools:

- **XML Sitemap Validator:** https://www.xml-sitemaps.com/validate-xml-sitemap.html
- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Screaming Frog SEO Spider:** Desktop tool voor uitgebreide sitemap analyse

---

## SITEMAP BIJWERKEN BIJ NIEUWE PAGINA'S

### Wanneer updaten?

Update de sitemap als je:
- Een nieuwe dienstpagina toevoegt
- Een nieuwe sectorpagina toevoegt
- Een nieuw blogartikel publiceert
- Een nieuwe hoofdpagina toevoegt (bijv. "Projecten", "Cases")

### BELANGRIJK: Alleen LIVE pagina's toevoegen!

❌ **NIET toevoegen:**
- Verwijderde of omgeleide pagina's
- Test-pagina's of staging-URL's
- Bedankpagina's na formulier-indiening
- Admin-pagina's
- Pagina's met noindex tag

✅ **WEL toevoegen:**
- Nieuwe pagina's die publiek toegankelijk zijn
- Pagina's die in de navigatie komen
- Pagina's die je geïndexeerd wilt hebben

---

## HOE DE SITEMAP BIJWERKEN?

### Voor XML Sitemap (`/public/sitemap.xml`):

**Nieuwe dienstpagina toevoegen:**
```xml
<!-- Diensten -->
<url>
  <loc>https://signaalmakers.nl/diensten/[slug]</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

**Nieuw blogartikel toevoegen:**
```xml
<!-- Blog Posts -->
<url>
  <loc>https://signaalmakers.nl/blog/[slug]</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>
```

**Nieuwe sectorpagina toevoegen:**
```xml
<!-- Sectoren -->
<url>
  <loc>https://signaalmakers.nl/sectoren/[slug]</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

### Voor HTML Sitemap (`/src/pages/Sitemap.tsx`):

De HTML sitemap **haalt automatisch alle blog posts op** uit `/src/data/blogPosts.ts`, dus:

**Voor blogartikelen:** Geen actie nodig! Voeg alleen het artikel toe aan `blogPosts.ts` en het verschijnt automatisch in de HTML sitemap.

**Voor diensten/sectoren:** Voeg handmatig een `<li>` item toe in de juiste sectie:

```tsx
<li>
  <Link to="/diensten/nieuwe-dienst" className="text-[#FF6A00] hover:underline">
    Naam van nieuwe dienst
  </Link>
</li>
```

### Voor route toevoegen (`/src/App.tsx`):

Vergeet niet de route toe te voegen:

```tsx
const NieuwePagina = lazy(() => import('./pages/NieuwePagina'));

// In Routes sectie:
<Route path="/nieuwe-pagina" element={<NieuwePagina />} />
```

---

## PRIORITY EN CHANGEFREQ UITLEG

### Priority (belangrijkheid relatief aan andere pagina's op je site)

- **1.0** = Home (belangrijkste pagina)
- **0.9** = Hoofdpagina's (Diensten overzicht, Contact)
- **0.8** = Belangrijke subpagina's (Abonnementen, Blog overzicht, Sectoren overzicht)
- **0.7** = Standaard content pagina's (Dienst-detailpagina's, Sector-detailpagina's)
- **0.6** = Blog posts
- **0.5** = Utility pagina's (Sitemap, eventuele Legal/Privacy)

### Changefreq (hoe vaak update je de pagina?)

- **daily** = Dagelijks (bijv. nieuws-overzicht, als je dat hebt)
- **weekly** = Wekelijks (Home, Blog overzicht)
- **monthly** = Maandelijks (De meeste pagina's)
- **yearly** = Jaarlijks (Legal, Privacy - als je die hebt)
- **never** = Nooit (Gearchiveerde content)

**Let op:** Google gebruikt deze hints, maar bepaalt zelf hoe vaak ze je site crawlen.

---

## CHECKLIST NA DEPLOYMENT

- [ ] XML sitemap toegankelijk op https://signaalmakers.nl/sitemap.xml
- [ ] HTML sitemap toegankelijk op https://signaalmakers.nl/sitemap
- [ ] Robots.txt toegankelijk op https://signaalmakers.nl/robots.txt
- [ ] Footer link naar sitemap werkt op alle pagina's
- [ ] Alle 31 pagina's staan in XML sitemap
- [ ] Alle blog posts verschijnen in HTML sitemap
- [ ] XML sitemap ingediend bij Google Search Console
- [ ] Google Search Console toont "Geslaagd" status
- [ ] Aantal gedetecteerde URL's = 31

---

## VEELGESTELDE VRAGEN

**Q: Moet ik de sitemap elke keer handmatig updaten?**  
A: Voor blog posts: nee, die worden automatisch opgehaald uit `blogPosts.ts`. Voor nieuwe diensten/sectoren/hoofdpagina's: ja, deze moet je handmatig toevoegen aan de XML en HTML sitemap.

**Q: Hoe vaak haalt Google mijn sitemap op?**  
A: Dit verschilt, meestal tussen dagelijks en wekelijks. Je kunt dit versnellen door de sitemap opnieuw in te dienen via Google Search Console.

**Q: Moet ik oude blog posts uit de sitemap verwijderen?**  
A: Nee, tenzij je ze hebt verwijderd of noindex hebt gezet. Oude maar nog toegankelijke content mag in de sitemap blijven.

**Q: Wat als ik een pagina heb verwijderd?**  
A: Verwijder de URL uit de XML sitemap en indien nodig uit de HTML sitemap. Zorg dat de pagina een 301 redirect heeft of een 410 Gone status teruggeeft.

**Q: Kan ik meerdere sitemaps hebben?**  
A: Ja, voor grotere sites (1000+ pagina's) kun je sitemap index files gebruiken. Voor signaalmakers.nl is één sitemap voldoende.

**Q: Moet ik de sitemap indienen bij Bing/andere zoekmachines?**  
A: Aanbevolen, maar minder urgent dan Google. Bing Webmaster Tools werkt vergelijkbaar met Google Search Console.

---

## ONDERSTEUNING

Bij vragen over de sitemap-implementatie:

- **Technische vragen:** Neem contact op met je webontwikkelaar
- **SEO vragen:** Consulteer een SEO-specialist
- **Google Search Console problemen:** Raadpleeg Google's documentatie: https://support.google.com/webmasters/answer/183668

---

**Document versie:** 1.0  
**Laatste update:** 2 december 2025
