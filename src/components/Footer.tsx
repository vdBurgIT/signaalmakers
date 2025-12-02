import { Link } from 'react-router-dom';
import { Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin, Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0E243A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/images/logo/logo_signaalmakers_fc.png"
                alt="Signaalmakers Logo"
                className="h-10 md:h-12 w-auto"
                width="1180"
                height="379"
                loading="lazy"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Jouw projecten, onze zekerheid. Gewoon geregeld.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/signaalmakers/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF6A00] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/signaalmakers"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF6A00] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/31645251333"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF6A00] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Diensten</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/diensten/netwerkbekabeling" className="hover:text-[#FF6A00] transition-colors">
                  Netwerkbekabeling
                </Link>
              </li>
              <li>
                <Link to="/diensten/audiokabels" className="hover:text-[#FF6A00] transition-colors">
                  Audiokabels
                </Link>
              </li>
              <li>
                <Link to="/diensten/camera-bekabeling" className="hover:text-[#FF6A00] transition-colors">
                  Camera-bekabeling
                </Link>
              </li>
              <li>
                <Link to="/diensten/patchkasten" className="hover:text-[#FF6A00] transition-colors">
                  Patchkasten
                </Link>
              </li>
              <li>
                <Link to="/diensten/certificeren" className="hover:text-[#FF6A00] transition-colors">
                  Meten &amp; Certificeren
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
                <Link to="/blog" className="hover:text-[#FF6A00] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#FF6A00] transition-colors">
                  FAQ
                </Link>
              </li>
              {/* <li>
                <Link to="/status-support" className="hover:text-[#FF6A00] transition-colors">
                  Status & Support
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="hover:text-[#FF6A00] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Vezelstraat 14<br />3295 VP 's-Gravendeel</span>
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
              <li className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#FF6A00]" />
                <span>KVK: 82907196</span>
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
