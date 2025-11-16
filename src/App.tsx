import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// Lazy load pages for better performance
const WifiNetwerk = lazy(() => import('./pages/services/WifiNetwerk'));
const Databekabeling = lazy(() => import('./pages/services/Databekabeling'));
const InternetTelefonie = lazy(() => import('./pages/services/InternetTelefonie'));
const ModerneWerkplek = lazy(() => import('./pages/services/ModerneWerkplek'));
const HostingDomein = lazy(() => import('./pages/services/HostingDomein'));
const VeiligOnline = lazy(() => import('./pages/services/VeiligOnline'));
const Audio = lazy(() => import('./pages/services/Audio'));
const Zakelijk = lazy(() => import('./pages/Zakelijk'));
const Particulier = lazy(() => import('./pages/Particulier'));
const ContentCreators = lazy(() => import('./pages/ContentCreators'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const OverOns = lazy(() => import('./pages/OverOns'));
const FAQ = lazy(() => import('./pages/FAQ'));
const StatusSupport = lazy(() => import('./pages/StatusSupport'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-[50vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            }>
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
