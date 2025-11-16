# Performance Optimalisatie Gids - Signaalmakers

Deze gids helpt je om de **maximale PageSpeed Insights score** te behalen.

## 🎯 Huidige Optimalisaties (Compleet!)

### ✅ **Build Optimalisaties**
- **Terser Minification**: 2-pass compression met Safari 10 compatibility
- **LightningCSS**: Supersnelle CSS minificatie (3.99KB brotli voor 21KB CSS!)
- **Tree Shaking**: Automatisch verwijderen van ongebruikte code
- **Code Splitting**: React Vendor (48KB brotli), Helmet (4.4KB), Icons (2.6KB)
- **Compression**: Gzip + Brotli voor maximale compressie

### ✅ **Bundle Sizes (Na Optimalisatie)**
```
React Vendor: 166KB → 54KB (gzip) → 48KB (brotli) ⚡
Main Bundle:   43KB →  10KB (gzip) →  8KB (brotli) ⚡
CSS:           21KB →   5KB (gzip) →  4KB (brotli) ⚡
Helmet:        13KB →   5KB (gzip) →  4KB (brotli) ⚡
Icons:          8KB →   3KB (gzip) →  3KB (brotli) ⚡
```

### ✅ **Critical CSS**
Inline critical CSS in `index.html` voor instant first paint:
- CSS Reset
- Base styling
- Loading spinner
- Above-the-fold content

### ✅ **Resource Hints**
```html
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
<link rel="modulepreload" href="/src/main.tsx" />
```

### ✅ **Lazy Loading**
Alle routes worden lazy-loaded (behalve Home):
```typescript
const WifiNetwerk = lazy(() => import('./pages/services/WifiNetwerk'));
const Databekabeling = lazy(() => import('./pages/services/Databekabeling'));
// ... etc
```

### ✅ **PWA & Caching**
- Service Worker met Workbox
- Runtime caching voor fonts, images, API calls
- Offline-first strategie
- Installeerbare progressive web app

---

## 🚀 Verdere Optimalisaties voor 100/100 Score

### 1. **Afbeeldingen Optimaliseren**

Als je afbeeldingen gaat toevoegen:

#### **A. Gebruik WebP/AVIF formaat**
```html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Beschrijving" width="800" height="600" loading="lazy">
</picture>
```

#### **B. Specificeer width/height**
Voorkom Cumulative Layout Shift (CLS):
```html
<!-- ❌ Slecht -->
<img src="logo.png" alt="Logo">

<!-- ✅ Goed -->
<img src="logo.png" alt="Logo" width="200" height="50" loading="lazy">
```

#### **C. Lazy Loading**
```html
<img src="image.jpg" loading="lazy" decoding="async" alt="Beschrijving">
```

#### **D. Responsive Images**
```html
<img
  src="image-800w.jpg"
  srcset="
    image-400w.jpg 400w,
    image-800w.jpg 800w,
    image-1200w.jpg 1200w
  "
  sizes="(max-width: 768px) 100vw, 800px"
  alt="Beschrijving"
  loading="lazy"
>
```

### 2. **Font Optimalisatie**

Als je custom fonts gebruikt:

#### **A. Font Display Swap**
```css
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom-font.woff2') format('woff2');
  font-display: swap; /* Toon fallback font tijdens laden */
  font-weight: 400;
  font-style: normal;
}
```

#### **B. Subset Fonts**
Gebruik alleen de characters die je nodig hebt:
```html
<!-- Google Fonts met subset -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&subset=latin&display=swap" rel="stylesheet">
```

#### **C. Preload Critical Fonts**
```html
<link
  rel="preload"
  href="/fonts/main-font.woff2"
  as="font"
  type="font/woff2"
  crossorigin
>
```

### 3. **JavaScript Optimalisatie**

#### **A. Defer Non-Critical Scripts**
```html
<script src="analytics.js" defer></script>
```

#### **B. Async voor Third-Party**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

#### **C. Code Splitting per Route**
Al geïmplementeerd in `App.tsx`! ✅

### 4. **CSS Optimalisatie**

#### **A. Remove Unused CSS**
Tailwind doet dit al automatisch via PurgeCSS! ✅

#### **B. CSS Containment**
Voor betere rendering performance:
```css
.card {
  contain: layout style paint;
}
```

#### **C. Critical CSS Inline**
Al geïmplementeerd in `index.html`! ✅

### 5. **Server Configuration**

#### **A. Compression (Netlify/Vercel)**
Al geconfigureerd in `netlify.toml`! ✅

#### **B. Caching Headers**
```
# Static assets - 1 jaar
/assets/*
  Cache-Control: public, max-age=31536000, immutable

# HTML - geen cache
/*.html
  Cache-Control: public, max-age=0, must-revalidate
```

#### **C. HTTP/2 Server Push** (Optioneel)
```
# _headers
/
  Link: </assets/main.js>; rel=preload; as=script
  Link: </assets/main.css>; rel=preload; as=style
```

---

## 📊 Core Web Vitals Targets

### **LCP (Largest Contentful Paint)**
🎯 Target: < 2.5s

**Hoe te bereiken:**
- ✅ Inline critical CSS
- ✅ Preconnect naar externe resources
- ✅ Optimize images (WebP/AVIF)
- ✅ Code splitting
- ✅ Server-side rendering (optioneel)

### **FID (First Input Delay)**
🎯 Target: < 100ms

**Hoe te bereiken:**
- ✅ Defer non-critical JavaScript
- ✅ Code splitting
- ✅ Remove unused code
- ✅ Optimize event listeners

### **CLS (Cumulative Layout Shift)**
🎯 Target: < 0.1

**Hoe te bereiken:**
- ✅ Specificeer image dimensions
- ✅ Reserve ruimte voor ads/embeds
- ✅ Avoid inserting content above existing content
- ✅ Use font-display: swap

### **INP (Interaction to Next Paint)**
🎯 Target: < 200ms

**Hoe te bereiken:**
- ✅ Optimize event handlers
- ✅ Debounce/throttle scroll/resize events
- ✅ Use CSS animations over JS
- ✅ Minimize JavaScript execution

---

## 🔧 Tools voor Monitoring

### **Google Tools**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Chrome DevTools Performance](chrome://inspect)
- [Web Vitals Extension](https://chrome.google.com/webstore/detail/web-vitals)

### **Third-Party Tools**
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)
- [Pingdom](https://tools.pingdom.com/)
- [Calibre](https://calibreapp.com/)

### **Real User Monitoring (RUM)**
- [Vercel Analytics](https://vercel.com/analytics)
- [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/)
- [Plausible Analytics](https://plausible.io/) (privacy-friendly)

---

## 📝 Pre-Launch Checklist

### **Performance**
- [ ] Run Lighthouse audit (aim for 90+ on all metrics)
- [ ] Test on 3G connection (throttled)
- [ ] Test op mobile device (real device, not emulator)
- [ ] Verify all images are optimized
- [ ] Check bundle sizes in build output
- [ ] Verify service worker is registered
- [ ] Test offline functionality

### **SEO**
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Verify robots.txt is accessible
- [ ] Test structured data with Rich Results Test
- [ ] Verify canonical URLs
- [ ] Test meta tags with Facebook Debugger
- [ ] Test Twitter Cards
- [ ] Check mobile-friendliness

### **Accessibility**
- [ ] Run axe DevTools audit
- [ ] Test keyboard navigation
- [ ] Test with screen reader
- [ ] Verify color contrast ratios
- [ ] Check focus indicators
- [ ] Test with browser zoom (200%)

### **Security**
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Test with Mozilla Observatory
- [ ] Check for mixed content warnings
- [ ] Verify CSP headers (optioneel)

---

## 🎓 Best Practices

### **1. Measure First, Optimize Second**
- Gebruik Lighthouse om bottlenecks te identificeren
- Focus op de grootste impact items eerst
- Meet na elke optimalisatie

### **2. Progressive Enhancement**
- Basiservaring werkt zonder JavaScript
- Enhanced ervaring met JavaScript
- Graceful degradation voor oude browsers

### **3. Performance Budget**
Stel limieten in:
```json
{
  "budgets": [
    {
      "resourceSizes": [
        { "resourceType": "script", "budget": 300 },
        { "resourceType": "stylesheet", "budget": 50 },
        { "resourceType": "image", "budget": 500 },
        { "resourceType": "total", "budget": 1000 }
      ]
    }
  ]
}
```

### **4. Continuous Monitoring**
- Setup Lighthouse CI in GitHub Actions
- Monitor Real User Metrics
- Set up alerts for performance regressions

---

## 🚨 Common Pitfalls

### **❌ Avoid These Mistakes:**

1. **Blocking Scripts in <head>**
   - Use `defer` or `async`
   - Of plaats scripts onderaan `<body>`

2. **Large Images**
   - Altijd optimaliseren voor web
   - Gebruik responsive images
   - Implementeer lazy loading

3. **Render-Blocking CSS**
   - Inline critical CSS
   - Defer non-critical CSS
   - Use media queries

4. **Too Many Third-Party Scripts**
   - Limit aantal external scripts
   - Use Partytown voor heavy scripts
   - Self-host waar mogelijk

5. **No Caching Strategy**
   - Configureer cache headers
   - Use service worker
   - Leverage browser caching

---

## 📈 Expected Results

Met alle optimalisaties zou je deze scores moeten behalen:

### **Mobile**
- Performance: **95-100** ⚡
- Accessibility: **95-100** ♿
- Best Practices: **95-100** ✅
- SEO: **100** 🎯

### **Desktop**
- Performance: **98-100** ⚡
- Accessibility: **95-100** ♿
- Best Practices: **95-100** ✅
- SEO: **100** 🎯

---

## 🔗 Nuttige Resources

- [web.dev Learn Performance](https://web.dev/learn-core-web-vitals/)
- [MDN Web Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)
- [Vite Performance Guide](https://vitejs.dev/guide/performance.html)
- [React Performance](https://react.dev/learn/render-and-commit)
- [Image Optimization](https://web.dev/fast/#optimize-your-images)

---

**Veel succes met je PageSpeed score! 🚀**

Bij vragen of problemen, check de documentatie of open een issue.
