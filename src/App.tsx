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
const Databekabeling = lazy(() => import(/* webpackChunkName: "data" */ './pages/services/Databekabeling'));
const Patchkasten = lazy(() => import(/* webpackChunkName: "patchkasten" */ './pages/services/Patchkasten'));
const Audio = lazy(() => import(/* webpackChunkName: "audio" */ './pages/services/Audio'));
const Testen = lazy(() => import(/* webpackChunkName: "testen" */ './pages/services/Testen'));
const Abonnementen = lazy(() => import(/* webpackChunkName: "abonnementen" */ './pages/Abonnementen'));
const Blog = lazy(() => import(/* webpackChunkName: "blog" */ './pages/Blog'));
const BlogPost = lazy(() => import(/* webpackChunkName: "blogpost" */ './pages/BlogPost'));
const OverOns = lazy(() => import(/* webpackChunkName: "over" */ './pages/OverOns'));
const FAQ = lazy(() => import(/* webpackChunkName: "faq" */ './pages/FAQ'));
const StatusSupport = lazy(() => import(/* webpackChunkName: "status" */ './pages/StatusSupport'));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ './pages/Contact'));
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
                <Route path="/diensten/databekabeling" element={<Databekabeling />} />
                <Route path="/diensten/patchkasten" element={<Patchkasten />} />
                <Route path="/diensten/audio" element={<Audio />} />
                <Route path="/diensten/testen" element={<Testen />} />
                <Route path="/abonnementen" element={<Abonnementen />} />

                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />

                <Route path="/over-ons" element={<OverOns />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/status-support" element={<StatusSupport />} />
                <Route path="/contact" element={<Contact />} />

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
