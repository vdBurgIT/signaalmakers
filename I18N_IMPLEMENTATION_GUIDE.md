# i18n Implementatiegids SIGNAALMAKERS

## Status: Basis infrastructuur compleet ✅

De meertalige infrastructuur is volledig opgezet en klaar voor gebruik. Alle technische componenten zijn geïmplementeerd.

## Wat is klaar

### ✅ Infrastructuur (Compleet)
- [x] i18n configuratie (`src/i18n/config.ts`)
- [x] Locale files (nl-NL, nl-BE, en)
- [x] i18n Context en hooks
- [x] Hreflang SEO component
- [x] LocaleSwitcher component
- [x] App.tsx met I18nProvider
- [x] Header met taal/land-switcher
- [x] SEO component met hreflang support
- [x] Homepage (gedeeltelijk) als proof of concept

### 📍 Ondersteunde locales
- `nl-NL` - Nederlands (Nederland) - default, geen URL prefix
- `nl-BE` - Nederlands (België) - URL prefix: `/nl-be`
- `en` - Engels (Internationaal) - URL prefix: `/en`

## Hoe werkt het systeem

### 1. Vertalingen ophalen
```typescript
import { useTranslation } from '../i18n';

function MijnComponent() {
  const t = useTranslation();

  return (
    <div>
      <h1>{t.home.hero.title}</h1>
      <p>{t.home.hero.subtitle}</p>
    </div>
  );
}
```

### 2. SEO met hreflang
```typescript
<SEO
  title={t.seo.home.title}
  description={t.seo.home.description}
  keywords={t.seo.home.keywords}
  url="https://signaalmakers.nl/"
  hreflangPath="/"  // Belangrijk voor meertalige SEO
/>
```

### 3. Locale-aware links
```typescript
import { useI18n } from '../i18n';
import { getPathForLocale } from '../i18n/config';

function MijnComponent() {
  const { locale } = useI18n();

  // Links werken automatisch met react-router
  return <Link to="/diensten/netwerkbekabeling">Netwerkbekabeling</Link>;
}
```

## Wat moet nog gebeuren

### 🔄 Pagina conversies (nog te doen)

Elke pagina moet geconverteerd worden naar i18n:

#### Stap-voor-stap per pagina:

1. **Import toevoegen**
```typescript
import { useTranslation } from '../i18n';
```

2. **Hook gebruiken**
```typescript
const t = useTranslation();
```

3. **Hardcoded tekst vervangen**
```typescript
// VOOR:
<h1>Netwerkbekabeling Cat6/Cat6A</h1>

// NA:
<h1>{t.services.network.title}</h1>
```

4. **SEO updaten**
```typescript
<SEO
  title={t.services.network.heroTitle}
  description={t.services.network.description}
  hreflangPath="/diensten/netwerkbekabeling"
/>
```

### 📋 Te converteren pagina's

**Prioriteit 1: Services** (meest bezochte pagina's)
- [ ] `/src/pages/services/Netwerkbekabeling.tsx`
- [ ] `/src/pages/services/Certificeren.tsx`
- [ ] `/src/pages/services/Patchkasten.tsx`
- [ ] `/src/pages/services/Audiokabels.tsx`
- [ ] `/src/pages/services/Camera-bekabeling.tsx`

**Prioriteit 2: Sectoren**
- [ ] `/src/pages/sectoren/Serverruimtes.tsx`
- [ ] `/src/pages/sectoren/Kantoren.tsx`
- [ ] `/src/pages/sectoren/Retail.tsx`
- [ ] `/src/pages/sectoren/Magazijn.tsx`
- [ ] `/src/pages/sectoren/Onderwijs.tsx`

**Prioriteit 3: Overige pagina's**
- [ ] `/src/pages/Home.tsx` (hero + services sectie nog te doen)
- [ ] `/src/pages/Diensten.tsx`
- [ ] `/src/pages/Sectoren.tsx`
- [ ] `/src/pages/FAQ.tsx`
- [ ] `/src/pages/Contact.tsx`
- [ ] `/src/pages/OverOns.tsx`
- [ ] `/src/pages/Abonnementen.tsx`
- [ ] `/src/pages/Blog.tsx`
- [ ] `/src/pages/BlogPost.tsx`

**Prioriteit 4: Footer**
- [ ] `/src/components/Footer.tsx`

## Locale files uitbreiden

Als je nieuwe content toevoegt, update alle 3 locale files:

### `/src/i18n/locales/nl-NL.ts` (Nederlands/NL)
```typescript
export const nlNL = {
  nieuweKey: {
    title: 'Nederlandse titel',
    description: 'Nederlandse beschrijving'
  }
};
```

### `/src/i18n/locales/nl-BE.ts` (Nederlands/BE)
```typescript
export const nlBE: TranslationKeys = {
  nieuweKey: {
    title: 'Nederlandse titel',  // Meestal zelfde als NL
    description: 'Beschrijving met Belgische context'  // Geografische aanpassingen
  }
};
```

### `/src/i18n/locales/en.ts` (Engels)
```typescript
export const en: TranslationKeys = {
  nieuweKey: {
    title: 'English title',
    description: 'English description'
  }
};
```

## Routing strategie

### Huidige aanpak (simpel, zonder URL rewriting)
- Nederlands/NL: `https://signaalmakers.nl/diensten/netwerkbekabeling`
- Nederlands/BE: `https://signaalmakers.nl/nl-be/diensten/netwerkbekabeling`
- Engels: `https://signaalmakers.nl/en/services/network-cabling`

**Voordeel**: Makkelijk te implementeren, geen server config nodig
**Nadeel**: Engelse routes hebben nog Nederlandse slugs

### Toekomstige verbetering (optioneel)
Als je wilt dat Engelse routes ook Engelse slugs hebben:

1. Maak een route mapping in `i18n/routes.ts`
2. Update App.tsx met locale-specifieke routes
3. Voeg redirect logic toe voor oude URLs

## Testing checklist

Voor elke geconverteerde pagina:

- [ ] Test in nl-NL locale (default)
- [ ] Test in nl-BE locale (Belgische content zichtbaar?)
- [ ] Test in en locale (Engelse vertalingen correct?)
- [ ] Test LocaleSwitcher (wissel tussen locales)
- [ ] Check hreflang tags in HTML `<head>` (inspect element)
- [ ] Check SEO meta tags (titel, description, keywords)
- [ ] Test mobile menu LocaleSwitcher

## SEO checklist per locale

### nl-NL (Nederland)
- ✅ Focus: Nederland, Nederlandse provincies/steden
- ✅ Keywords: databekabeling, netwerkbekabeling, Cat6, Cat6A
- ✅ Geografisch: Amsterdam, Rotterdam, Utrecht, Eindhoven

### nl-BE (België)
- ✅ Focus: België, Vlaamse provincies/steden
- ✅ Keywords: databekabeling belgië, netwerkbekabeling belgië
- ✅ Geografisch: Antwerpen, Brussel, Gent, Leuven

### en (Engels)
- ✅ Focus: Internationaal, B2B tone
- ✅ Keywords: data cabling, network cabling, Cat6, Cat6A
- ✅ Geografisch: Netherlands, Belgium, international projects

## Veelvoorkomende fouten

### ❌ Fout: Hardcoded tekst in JSX
```typescript
<h1>Netwerkbekabeling</h1>
```

### ✅ Correct: Vertaling gebruiken
```typescript
<h1>{t.services.network.title}</h1>
```

---

### ❌ Fout: Hardcoded SEO
```typescript
<SEO title="Netwerkbekabeling | SIGNAALMAKERS" />
```

### ✅ Correct: SEO met vertalingen + hreflang
```typescript
<SEO
  title={t.services.network.title}
  hreflangPath="/diensten/netwerkbekabeling"
/>
```

---

### ❌ Fout: Locale vergeten in nieuwe content
```typescript
// Alleen nl-NL updaten, nl-BE en en vergeten
```

### ✅ Correct: Alle 3 locales updaten
```typescript
// nl-NL.ts, nl-BE.ts EN en.ts allemaal updaten
```

## Handige commands voor ontwikkeling

### TypeScript errors checken
```bash
npm run build
```

### Zoek naar hardcoded Nederlandse tekst
```bash
grep -r "Netwerkbekabeling" src/pages/
grep -r "Databekabeling" src/pages/
```

### Zoek naar hardcoded SEO
```bash
grep -r "<SEO title=" src/pages/
```

## Support & troubleshooting

### LocaleSwitcher werkt niet
- Check of `I18nProvider` correct in App.tsx staat
- Check of imports kloppen in Header.tsx

### Vertalingen worden niet getoond
- Check of `useTranslation()` hook gebruikt wordt
- Check of key bestaat in locale file (TypeScript error?)
- Check of alle 3 locale files dezelfde structuur hebben

### Hreflang tags niet zichtbaar
- Check `hreflangPath` prop in SEO component
- Inspect element en zoek naar `<link rel="alternate" hreflang=`

### Engelse content heeft Nederlandse keywords
- Update `/src/i18n/locales/en.ts` met Engelse keywords
- Check of SEO component `{t.seo.pagename.keywords}` gebruikt

## Next steps

1. **Start met Homepage volledig converteren** (proof of concept afmaken)
2. **Converteer prioriteit 1: Services pagina's** (meest bezocht)
3. **Test grondig** met LocaleSwitcher tussen alle locales
4. **Converteer prioriteit 2: Sectoren pagina's**
5. **Converteer overige pagina's + Footer**
6. **SEO audit**: Check alle hreflang tags en meta descriptions
7. **Google Search Console**: Submit nl-be en en varianten

## Contact voor vragen

Check de code voorbeelden in:
- `/src/pages/Home.tsx` (SEO conversie voorbeeld)
- `/src/i18n/locales/nl-NL.ts` (content structuur)
- `/src/components/SEO.tsx` (hreflang implementatie)

---

**Status:** Infrastructuur 100% klaar - Begin met pagina conversies! 🚀
