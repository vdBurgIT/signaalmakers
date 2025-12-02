import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ErrorBoundary from './components/ErrorBoundary';

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
const CameraBekabealing = lazy(() => import(/* webpackChunkName: "camera" */ './pages/services/Camera-bekabeling'));
const Certificeren = lazy(() => import(/* webpackChunkName: "certificeren" */ './pages/services/Certificeren'));
const Abonnementen = lazy(() => import(/* webpackChunkName: "abonnementen" */ './pages/Abonnementen'));
const Blog = lazy(() => import(/* webpackChunkName: "blog" */ './pages/Blog'));
const BlogPost = lazy(() => import(/* webpackChunkName: "blogpost" */ './pages/BlogPost'));
const OverOns = lazy(() => import(/* webpackChunkName: "over" */ './pages/OverOns'));
const FAQ = lazy(() => import(/* webpackChunkName: "faq" */ './pages/FAQ'));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ './pages/Contact'));
const Offerte = lazy(() => import(/* webpackChunkName: "offerte" */ './pages/Offerte'));
const Sectoren = lazy(() => import(/* webpackChunkName: "sectoren" */ './pages/Sectoren'));
const Serverruimtes = lazy(() => import(/* webpackChunkName: "serverruimtes" */ './pages/sectoren/Serverruimtes'));
const Kantoren = lazy(() => import(/* webpackChunkName: "kantoren" */ './pages/sectoren/Kantoren'));
const RetailHoreca = lazy(() => import(/* webpackChunkName: "retail" */ './pages/sectoren/Retail'));
const Magazijn = lazy(() => import(/* webpackChunkName: "magazijn" */ './pages/sectoren/Magazijn'));
const OnderwijsZorg = lazy(() => import(/* webpackChunkName: "onderwijs" */ './pages/sectoren/Onderwijs'));
const NotFound = lazy(() => import(/* webpackChunkName: "notfound" */ './pages/NotFound'));

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
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
                <Route path="/" element={<Home />} />

                <Route path="/diensten" element={<Diensten />} />
                <Route path="/diensten/netwerkbekabeling" element={<Netwerkbekabeling />} />
                <Route path="/diensten/audiokabels" element={<Audiokabels />} />
                <Route path="/diensten/camera-bekabeling" element={<CameraBekabealing />} />
                <Route path="/diensten/patchkasten" element={<Patchkasten />} />
                <Route path="/diensten/certificeren" element={<Certificeren />} />
                <Route path="/abonnementen" element={<Abonnementen />} />

                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />

                <Route path="/over-ons" element={<OverOns />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/offerte" element={<Offerte />} />

                {/* Sectoren */}
                <Route path="/sectoren" element={<Sectoren />} />
                <Route path="/sectoren/serverruimtes" element={<Serverruimtes />} />
                <Route path="/sectoren/kantoren" element={<Kantoren />} />
                <Route path="/sectoren/retail" element={<RetailHoreca />} />
                <Route path="/sectoren/magazijn" element={<Magazijn />} />
                <Route path="/sectoren/onderwijs" element={<OnderwijsZorg />} />

                {/* 404 - Catch all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
