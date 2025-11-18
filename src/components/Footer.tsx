import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0E243A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/images/logo/logo_signaalmakers.png"
                alt="Signaalmakers Logo"
                className="h-10 md:h-12 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Wifi, netwerk & audio die gewoon werkt
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF6A00] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF6A00] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF6A00] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/31645251333"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF6A00] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Diensten</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/diensten/wifi-netwerk" className="hover:text-[#FF6A00] transition-colors">
                  Wifi & Netwerk
                </Link>
              </li>
              <li>
                <Link to="/diensten/databekabeling" className="hover:text-[#FF6A00] transition-colors">
                  Databekabeling
                </Link>
              </li>
              <li>
                <Link to="/diensten/internet-telefonie" className="hover:text-[#FF6A00] transition-colors">
                  Internet & Telefonie
                </Link>
              </li>
              <li>
                <Link to="/diensten/audio" className="hover:text-[#FF6A00] transition-colors">
                  Audio-installaties
                </Link>
              </li>
              <li>
                <Link to="/content-creators" className="hover:text-[#FF6A00] transition-colors">
                  Content Creators
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Bedrijf</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/over-ons" className="hover:text-[#FF6A00] transition-colors">
                  Over ons
                </Link>
              </li>
              <li>
                <Link to="/zakelijk" className="hover:text-[#FF6A00] transition-colors">
                  Zakelijk
                </Link>
              </li>
              <li>
                <Link to="/particulier" className="hover:text-[#FF6A00] transition-colors">
                  Particulier
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#FF6A00] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#FF6A00] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Voorbeeldstraat 123<br />1234 AB Utrecht</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#FF6A00]" />
                <a href="tel:+31645251333" className="hover:text-[#FF6A00] transition-colors">
                  +31 6 45251333
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#FF6A00]" />
                <a href="mailto:info@signaalmakers.nl" className="hover:text-[#FF6A00] transition-colors">
                  info@signaalmakers.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Signaalmakers. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
