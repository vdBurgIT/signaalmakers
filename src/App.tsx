import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const WifiNetwerk = lazy(() => import(/* webpackChunkName: "wifi" */ './pages/services/WifiNetwerk'));
const Databekabeling = lazy(() => import(/* webpackChunkName: "data" */ './pages/services/Databekabeling'));
const InternetTelefonie = lazy(() => import(/* webpackChunkName: "internet" */ './pages/services/InternetTelefonie'));
const ModerneWerkplek = lazy(() => import(/* webpackChunkName: "werkplek" */ './pages/services/ModerneWerkplek'));
const HostingDomein = lazy(() => import(/* webpackChunkName: "hosting" */ './pages/services/HostingDomein'));
const VeiligOnline = lazy(() => import(/* webpackChunkName: "veilig" */ './pages/services/VeiligOnline'));
const Audio = lazy(() => import(/* webpackChunkName: "audio" */ './pages/services/Audio'));
const Zakelijk = lazy(() => import(/* webpackChunkName: "zakelijk" */ './pages/Zakelijk'));
const Particulier = lazy(() => import(/* webpackChunkName: "particulier" */ './pages/Particulier'));
const ContentCreators = lazy(() => import(/* webpackChunkName: "creators" */ './pages/ContentCreators'));
const Blog = lazy(() => import(/* webpackChunkName: "blog" */ './pages/Blog'));
const BlogPost = lazy(() => import(/* webpackChunkName: "blogpost" */ './pages/BlogPost'));
const OverOns = lazy(() => import(/* webpackChunkName: "over" */ './pages/OverOns'));
const FAQ = lazy(() => import(/* webpackChunkName: "faq" */ './pages/FAQ'));
const StatusSupport = lazy(() => import(/* webpackChunkName: "status" */ './pages/StatusSupport'));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ './pages/Contact'));
const NotFound = lazy(() => import(/* webpackChunkName: "notfound" */ './pages/NotFound'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<div className="loader"></div>}>
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/diensten/wifi-netwerk" element={<WifiNetwerk />} />
                <Route path="/diensten/databekabeling" element={<Databekabeling />} />
                <Route path="/diensten/internet-telefonie" element={<InternetTelefonie />} />
                <Route path="/diensten/moderne-werkplek" element={<ModerneWerkplek />} />
                <Route path="/diensten/hosting-domein" element={<HostingDomein />} />
                <Route path="/diensten/veilig-online" element={<VeiligOnline />} />
                <Route path="/diensten/audio" element={<Audio />} />

                <Route path="/zakelijk" element={<Zakelijk />} />
                <Route path="/particulier" element={<Particulier />} />
                <Route path="/content-creators" element={<ContentCreators />} />

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
  );
}

export default App;
