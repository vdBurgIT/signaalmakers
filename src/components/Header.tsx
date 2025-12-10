import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { LocaleSwitcher, MobileLocaleSwitcher } from './LocaleSwitcher';
import { useTranslation } from '../i18n';
import { LocaleLink } from './LocaleLink';

export default function Header() {
  const t = useTranslation();
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
          <LocaleLink to="/" className="flex items-center gap-2">
            <img
              src="/images/logo/logo_signaalmakers_fc.png"
              alt="SIGNAALMAKERS Logo"
              className="h-12 md:h-14 w-auto object-contain"
              width="1180"
              height="379"
              fetchPriority="high"
              loading="eager"
            />
          </LocaleLink>

          <div className="hidden lg:flex items-center gap-6">
            <LocaleLink to="/" className="hover:text-[#FF6A00] transition-colors">
              {t.nav.home}
            </LocaleLink>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[#FF6A00] transition-colors">
                {t.nav.services}
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white text-[#0E243A] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <LocaleLink to="/diensten/netwerkbekabeling" className="block px-4 py-3 hover:bg-gray-100">
                  {t.nav.servicesMenu.network}
                </LocaleLink>
                <LocaleLink to="/diensten/audiokabels" className="block px-4 py-3 hover:bg-gray-100">
                  {t.nav.servicesMenu.audio}
                </LocaleLink>
                <LocaleLink to="/diensten/camera-bekabeling" className="block px-4 py-3 hover:bg-gray-100">
                  {t.nav.servicesMenu.camera}
                </LocaleLink>
                <LocaleLink to="/diensten/patchkasten" className="block px-4 py-3 hover:bg-gray-100">
                  {t.nav.servicesMenu.patchCabinets}
                </LocaleLink>
                <LocaleLink to="/diensten/certificeren" className="block px-4 py-3 hover:bg-gray-100">
                  {t.nav.servicesMenu.certification}
                </LocaleLink>
              </div>
            </div>

            <LocaleLink to="/sectoren" className="hover:text-[#FF6A00] transition-colors">
              {t.nav.sectors}
            </LocaleLink>

            <LocaleLink to="/abonnementen" className="hover:text-[#FF6A00] transition-colors">
              {t.nav.subscriptions}
            </LocaleLink>
            <LocaleLink to="/blog" className="hover:text-[#FF6A00] transition-colors">
              {t.nav.blog}
            </LocaleLink>
            <LocaleLink to="/over-ons" className="hover:text-[#FF6A00] transition-colors">
              {t.nav.about}
            </LocaleLink>
            <LocaleLink to="/faq" className="hover:text-[#FF6A00] transition-colors">
              {t.nav.faq}
            </LocaleLink>
            <LocaleLink
              to="/contact"
              className="bg-[#FF6A00] text-white px-6 py-2 rounded-lg hover:bg-[#E55F00] transition-colors font-semibold"
            >
              {t.nav.contact}
            </LocaleLink>
            <LocaleSwitcher />
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
            <LocaleLink
              to="/"
              className="block py-2 hover:text-[#FF6A00] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.home}
            </LocaleLink>

            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 py-2 hover:text-[#FF6A00] transition-colors"
              >
                {t.nav.services}
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <LocaleLink
                    to="/diensten/netwerkbekabeling"
                    className="block py-2 text-sm hover:text-[#FF6A00]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.nav.servicesMenu.network}
                  </LocaleLink>
                  <LocaleLink
                    to="/diensten/audiokabels"
                    className="block py-2 text-sm hover:text-[#FF6A00]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.nav.servicesMenu.audio}
                  </LocaleLink>
                  <LocaleLink
                    to="/diensten/camera-bekabeling"
                    className="block py-2 text-sm hover:text-[#FF6A00]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.nav.servicesMenu.camera}
                  </LocaleLink>
                  <LocaleLink
                    to="/diensten/patchkasten"
                    className="block py-2 text-sm hover:text-[#FF6A00]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.nav.servicesMenu.patchCabinets}
                  </LocaleLink>
                  <LocaleLink
                    to="/diensten/certificeren"
                    className="block py-2 text-sm hover:text-[#FF6A00]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.nav.servicesMenu.certification}
                  </LocaleLink>
                </div>
              )}
            </div>

            <LocaleLink
              to="/sectoren"
              className="block py-2 hover:text-[#FF6A00] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.sectors}
            </LocaleLink>

            <LocaleLink
              to="/abonnementen"
              className="block py-2 hover:text-[#FF6A00] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.subscriptions}
            </LocaleLink>
            <LocaleLink
              to="/blog"
              className="block py-2 hover:text-[#FF6A00] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.blog}
            </LocaleLink>
            <LocaleLink
              to="/over-ons"
              className="block py-2 hover:text-[#FF6A00] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.about}
            </LocaleLink>
            <LocaleLink
              to="/faq"
              className="block py-2 hover:text-[#FF6A00] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.faq}
            </LocaleLink>
            <LocaleLink
              to="/contact"
              className="block bg-[#FF6A00] text-white px-6 py-2 rounded-lg hover:bg-[#E55F00] transition-colors font-semibold text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </LocaleLink>
            <div className="mt-4 pt-4 border-t border-gray-600">
              <MobileLocaleSwitcher />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
