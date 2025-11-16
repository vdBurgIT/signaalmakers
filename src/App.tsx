import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WifiNetwerk from './pages/services/WifiNetwerk';
import Databekabeling from './pages/services/Databekabeling';
import InternetTelefonie from './pages/services/InternetTelefonie';
import ModerneWerkplek from './pages/services/ModerneWerkplek';
import HostingDomein from './pages/services/HostingDomein';
import VeiligOnline from './pages/services/VeiligOnline';
import Audio from './pages/services/Audio';
import Zakelijk from './pages/Zakelijk';
import Particulier from './pages/Particulier';
import ContentCreators from './pages/ContentCreators';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import OverOns from './pages/OverOns';
import FAQ from './pages/FAQ';
import StatusSupport from './pages/StatusSupport';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
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
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
