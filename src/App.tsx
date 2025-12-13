import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ErrorBoundaryWithI18n from './components/ErrorBoundaryWithI18n';
import { I18nProvider } from './i18n';
import StructuredData from './components/StructuredData';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Diensten = lazy(() => import(/* webpackChunkName: "diensten" */ './pages/Diensten'));
const Netwerkbekabeling = lazy(() => import(/* webpackChunkName: "netwerk" */ './pages/services/Netwerkbekabeling'));
const Patchkasten = lazy(() => import(/* webpackChunkName: "patchkasten" */ './pages/services/Patchkasten'));
const Audiokabels = lazy(() => import(/* webpackChunkName: "audio" */ './pages/services/Audiokabels'));
const CameraBekabeling = lazy(() => import(/* webpackChunkName: "camera" */ './pages/services/Camera-bekabeling'));
const Certificeren = lazy(() => import(/* webpackChunkName: "certificeren" */ './pages/services/Certificeren'));
const Abonnementen = lazy(() => import(/* webpackChunkName: "abonnementen" */ './pages/Abonnementen'));
const Blog = lazy(() => import(/* webpackChunkName: "blog" */ './pages/Blog'));
const BlogPost = lazy(() => import(/* webpackChunkName: "blogpost" */ './pages/BlogPost'));
const OverOns = lazy(() => import(/* webpackChunkName: "over" */ './pages/OverOns'));
const FAQ = lazy(() => import(/* webpackChunkName: "faq" */ './pages/FAQ'));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ './pages/Contact'));
const Offerte = lazy(() => import(/* webpackChunkName: "offerte" */ './pages/Offerte'));
const Sectoren = lazy(() => import(/* webpackChunkName: "sectoren" */ './pages/Sectoren'));
const MSP = lazy(() => import(/* webpackChunkName: "msp" */ './pages/sectoren/MSP'));
const Serverruimtes = lazy(() => import(/* webpackChunkName: "serverruimtes" */ './pages/sectoren/Serverruimtes'));
const Kantoren = lazy(() => import(/* webpackChunkName: "kantoren" */ './pages/sectoren/Kantoren'));
const RetailHoreca = lazy(() => import(/* webpackChunkName: "retail" */ './pages/sectoren/Retail'));
const Magazijn = lazy(() => import(/* webpackChunkName: "magazijn" */ './pages/sectoren/Magazijn'));
const OnderwijsZorg = lazy(() => import(/* webpackChunkName: "onderwijs" */ './pages/sectoren/Onderwijs'));
const Sitemap = lazy(() => import(/* webpackChunkName: "sitemap" */ './pages/Sitemap'));
const NotFound = lazy(() => import(/* webpackChunkName: "notfound" */ './pages/NotFound'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <I18nProvider>
          <ErrorBoundaryWithI18n>
            <ScrollToTop />
            {/* Site-wide structured data for brand/entity SEO */}
            <StructuredData type="WebSite" />
            <StructuredData type="LocalBusiness" />
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <div className="loader mb-4"></div>
                    <p className="text-gray-600">Laden...</p>
                  </div>
                </div>
              }>
              <Routes>
                {/* Default locale (nl-NL) - no prefix */}
                <Route path="/" element={<Home />} />
                <Route path="/diensten" element={<Diensten />} />
                <Route path="/diensten/netwerkbekabeling" element={<Netwerkbekabeling />} />
                <Route path="/diensten/audiokabels" element={<Audiokabels />} />
                <Route path="/diensten/camera-bekabeling" element={<CameraBekabeling />} />
                <Route path="/diensten/patchkasten" element={<Patchkasten />} />
                <Route path="/diensten/certificeren" element={<Certificeren />} />
                <Route path="/abonnementen" element={<Abonnementen />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/over-ons" element={<OverOns />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/offerte" element={<Offerte />} />
                <Route path="/sectoren" element={<Sectoren />} />
                <Route path="/sectoren/msp" element={<MSP />} />
                <Route path="/sectoren/serverruimtes" element={<Serverruimtes />} />
                <Route path="/sectoren/kantoren" element={<Kantoren />} />
                <Route path="/sectoren/retail" element={<RetailHoreca />} />
                <Route path="/sectoren/magazijn" element={<Magazijn />} />
                <Route path="/sectoren/onderwijs" element={<OnderwijsZorg />} />
                <Route path="/sitemap" element={<Sitemap />} />

                {/* Belgian locale (nl-BE) - /nl-be prefix */}
                <Route path="/nl-be" element={<Home />} />
                <Route path="/nl-be/diensten" element={<Diensten />} />
                <Route path="/nl-be/diensten/netwerkbekabeling" element={<Netwerkbekabeling />} />
                <Route path="/nl-be/diensten/audiokabels" element={<Audiokabels />} />
                <Route path="/nl-be/diensten/camera-bekabeling" element={<CameraBekabeling />} />
                <Route path="/nl-be/diensten/patchkasten" element={<Patchkasten />} />
                <Route path="/nl-be/diensten/certificeren" element={<Certificeren />} />
                <Route path="/nl-be/abonnementen" element={<Abonnementen />} />
                <Route path="/nl-be/blog" element={<Blog />} />
                <Route path="/nl-be/blog/:slug" element={<BlogPost />} />
                <Route path="/nl-be/over-ons" element={<OverOns />} />
                <Route path="/nl-be/faq" element={<FAQ />} />
                <Route path="/nl-be/contact" element={<Contact />} />
                <Route path="/nl-be/offerte" element={<Offerte />} />
                <Route path="/nl-be/sectoren" element={<Sectoren />} />
                <Route path="/nl-be/sectoren/msp" element={<MSP />} />
                <Route path="/nl-be/sectoren/serverruimtes" element={<Serverruimtes />} />
                <Route path="/nl-be/sectoren/kantoren" element={<Kantoren />} />
                <Route path="/nl-be/sectoren/retail" element={<RetailHoreca />} />
                <Route path="/nl-be/sectoren/magazijn" element={<Magazijn />} />
                <Route path="/nl-be/sectoren/onderwijs" element={<OnderwijsZorg />} />
                <Route path="/nl-be/sitemap" element={<Sitemap />} />

                {/* English locale (en) - /en prefix */}
                <Route path="/en" element={<Home />} />
                <Route path="/en/diensten" element={<Diensten />} />
                <Route path="/en/diensten/netwerkbekabeling" element={<Netwerkbekabeling />} />
                <Route path="/en/diensten/audiokabels" element={<Audiokabels />} />
                <Route path="/en/diensten/camera-bekabeling" element={<CameraBekabeling />} />
                <Route path="/en/diensten/patchkasten" element={<Patchkasten />} />
                <Route path="/en/diensten/certificeren" element={<Certificeren />} />
                <Route path="/en/abonnementen" element={<Abonnementen />} />
                <Route path="/en/blog" element={<Blog />} />
                <Route path="/en/blog/:slug" element={<BlogPost />} />
                <Route path="/en/over-ons" element={<OverOns />} />
                <Route path="/en/faq" element={<FAQ />} />
                <Route path="/en/contact" element={<Contact />} />
                <Route path="/en/offerte" element={<Offerte />} />
                <Route path="/en/sectoren" element={<Sectoren />} />
                <Route path="/en/sectoren/msp" element={<MSP />} />
                <Route path="/en/sectoren/serverruimtes" element={<Serverruimtes />} />
                <Route path="/en/sectoren/kantoren" element={<Kantoren />} />
                <Route path="/en/sectoren/retail" element={<RetailHoreca />} />
                <Route path="/en/sectoren/magazijn" element={<Magazijn />} />
                <Route path="/en/sectoren/onderwijs" element={<OnderwijsZorg />} />
                <Route path="/en/sitemap" element={<Sitemap />} />

                {/* 404 - Catch all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            </main>
            <Footer />
          </div>
          </ErrorBoundaryWithI18n>
        </I18nProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;
