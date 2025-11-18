import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-[#0E243A] text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/images/logo/logo_signaalmakers.png" alt="Signaalmakers Logo" className="h-12 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className="hover:text-[#FF6A00] transition-colors">
              Home
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[#FF6A00] transition-colors">
                Diensten
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white text-[#0E243A] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/diensten/wifi-netwerk" className="block px-4 py-3 hover:bg-gray-100">
                  Wifi & Netwerk
                </Link>
                <Link to="/diensten/databekabeling" className="block px-4 py-3 hover:bg-gray-100">
                  Databekabeling & Patch-/Serverkasten
                </Link>
                <Link to="/diensten/internet-telefonie" className="block px-4 py-3 hover:bg-gray-100">
                  Internet & Telefonie
                </Link>
                <Link to="/diensten/moderne-werkplek" className="block px-4 py-3 hover:bg-gray-100">
                  Moderne Werkplek
                </Link>
                <Link to="/diensten/hosting-domein" className="block px-4 py-3 hover:bg-gray-100">
                  Hosting & Domein
                </Link>
                <Link to="/diensten/veilig-online" className="block px-4 py-3 hover:bg-gray-100">
                  Veilig Online & IT-beheer
                </Link>
                <Link to="/diensten/audio" className="block px-4 py-3 hover:bg-gray-100">
                  Audio-installaties
                </Link>
                <Link to="/content-creators" className="block px-4 py-3 hover:bg-gray-100">
                  Content Creators
                </Link>
              </div>
            </div>

            <Link to="/zakelijk" className="hover:text-[#FF6A00] transition-colors">
              Zakelijk
            </Link>
            <Link to="/particulier" className="hover:text-[#FF6A00] transition-colors">
              Particulier
            </Link>
            <Link to="/blog" className="hover:text-[#FF6A00] transition-colors">
              Blog
            </Link>
            <Link to="/over-ons" className="hover:text-[#FF6A00] transition-colors">
              Over ons
            </Link>
            <Link to="/faq" className="hover:text-[#FF6A00] transition-colors">
              FAQ
            </Link>
            <Link to="/status-support" className="hover:text-[#FF6A00] transition-colors">
              Status & Support
            </Link>
            <Link
              to="/contact"
              className="bg-[#FF6A00] text-white px-6 py-2 rounded-lg hover:bg-[#E55F00] transition-colors font-semibold"
            >
              Contact
            </Link>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2">
            <Link
              to="/"
              className="block py-2 hover:text-[#FF6A00] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 py-2 hover:text-[#FF6A00] transition-colors"
              >
                Diensten
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    to="/diensten/wifi-netwerk"
                    className="block py-2 text-sm hover:text-[#FF6A00]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Wifi & Netwerk
                  </Link>
                  <Link
                    to="/diensten/databekabeling"
                    className="block py-2 text-sm hover:text-[#FF6A00]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Databekabeling & Patch-/Serverkasten
                  </Link>
                  <Link
                    to="/diensten/internet-telefonie"
                    className="block py-2 text-sm hover:text-[#FF6A00]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Internet & Telefonie
                  </Link>
                  <Link
                    to="/diensten/moderne-werkplek"
                    className="block py-2 text-sm hover:text-[#FF6A00]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Moderne Werkplek
                  </Link>
                  <Link
                    to="/diensten/hosting-domein"
                    className="block py-2 text-sm hover:text-[#FF6A00]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Hosting & Domein
                  </Link>
                  <Link
                    to="/diensten/veilig-online"
                    className="block py-2 text-sm hover:text-[#FF6A00]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Veilig Online & IT-beheer
                  </Link>
                  <Link
                    to="/diensten/audio"
                    className="block py-2 text-sm hover:text-[#FF6A00]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Audio-installaties
                  </Link>
                  <Link
                    to="/content-creators"
                    className="block py-2 text-sm hover:text-[#FF6A00]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Content Creators
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/zakelijk"
              className="block py-2 hover:text-[#FF6A00] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Zakelijk
            </Link>
            <Link
              to="/particulier"
              className="block py-2 hover:text-[#FF6A00] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Particulier
            </Link>
            <Link
              to="/blog"
              className="block py-2 hover:text-[#FF6A00] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/over-ons"
              className="block py-2 hover:text-[#FF6A00] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Over ons
            </Link>
            <Link
              to="/faq"
              className="block py-2 hover:text-[#FF6A00] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/status-support"
              className="block py-2 hover:text-[#FF6A00] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Status & Support
            </Link>
            <Link
              to="/contact"
              className="block bg-[#FF6A00] text-white px-6 py-2 rounded-lg hover:bg-[#E55F00] transition-colors font-semibold text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
