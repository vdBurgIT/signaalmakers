import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-[#0E243A] text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/logo/logo_signaalmakers.png"
              alt="Signaalmakers Logo"
              className="h-12 md:h-14 w-auto object-contain"
              width="1180"
              height="379"
              fetchPriority="high"
              loading="eager"
            />
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
                <Link to="/diensten/databekabeling" className="block px-4 py-3 hover:bg-gray-100">
                  Databekabeling
                </Link>
                <Link to="/diensten/patchkasten" className="block px-4 py-3 hover:bg-gray-100">
                  Patchkasten
                </Link>
                <Link to="/diensten/audio" className="block px-4 py-3 hover:bg-gray-100">
                  Signaallijnen (Audio)
                </Link>
                <Link to="/diensten/testen" className="block px-4 py-3 hover:bg-gray-100">
                  Testen & Documentatie
                </Link>
              </div>
            </div>

            <Link to="/abonnementen" className="hover:text-[#FF6A00] transition-colors">
              Abonnementen
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
                    to="/diensten/databekabeling"
                    className="block py-2 text-sm hover:text-[#FF6A00]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Databekabeling
                  </Link>
                  <Link
                    to="/diensten/patchkasten"
                    className="block py-2 text-sm hover:text-[#FF6A00]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Patchkasten
                  </Link>
                  <Link
                    to="/diensten/audio"
                    className="block py-2 text-sm hover:text-[#FF6A00]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Signaallijnen (Audio)
                  </Link>
                  <Link
                    to="/diensten/testen"
                    className="block py-2 text-sm hover:text-[#FF6A00]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Testen & Documentatie
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/abonnementen"
              className="block py-2 hover:text-[#FF6A00] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Abonnementen
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
