import Hero from '../../components/Hero';
import { Server, CheckCircle2 } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export default function HostingDomein() {
  return (
    <div>
      <Hero
        title="Hosting & Domein"
        subtitle="Veilige hosting, domeinen en SSL-certificaten via onze IT-partner. Signaalmakers koppelt, test en documenteert alles."
        primaryButtonText="Hosting bespreken"
        primaryButtonLink="/contact"
      />

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="data" density="medium" color="blue" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#FF6A00] bg-opacity-10 rounded-lg p-6 mb-12 border-l-4 border-[#FF6A00]">
              <p className="text-gray-700 text-lg">
                <strong>Belangrijk:</strong> Hosting, domeinen en gerelateerde diensten worden geleverd via onze vaste IT-partner. Signaalmakers verzorgt de koppeling, configuratie en tests op locatie.
              </p>
            </div>

            <div className="flex gap-6 mb-8">
              <Server className="w-12 h-12 text-[#FF6A00] flex-shrink-0" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
                  Wat bieden we?
                </h2>
                <p className="text-lg text-gray-600">
                  Van eenvoudige websites tot complexe applicaties, via onze IT-partner regelen we betrouwbare hosting en domeinbeheer.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Domeinen</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Registratie van .nl, .com, .eu en andere extensies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>DNS-beheer en configuratie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Domeintransfers en verhuizingen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>E-mail routing en MX-records</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Webhosting</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Gedeelde hosting voor eenvoudige websites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>WordPress-hosting geoptimaliseerd</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>E-mail accounts en webmail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Dagelijkse back-ups</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">VPS & Dedicated</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Virtual Private Servers voor meer controle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Dedicated servers voor grote applicaties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Full root access en maatwerk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Beheerde en onbeheerde opties</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">SSL & Beveiliging</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>SSL-certificaten (gratis en premium)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Automatische verlenging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>DDoS-bescherming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Firewalls en security monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0E243A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Wat doet Signaalmakers?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Wij zorgen voor de technische koppeling en configuratie op uw locatie:
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">DNS-configuratie</h3>
                  <p className="text-gray-300">
                    Wij koppelen uw domein aan de juiste hosting, configureren DNS-records en zorgen dat alles correct werkt. E-mail, website en subdomeinen worden netjes ingesteld.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">SSL-installatie en testen</h3>
                  <p className="text-gray-300">
                    SSL-certificaten worden geïnstalleerd en uitgebreid getest. We controleren of alle pagina's veilig zijn en redirects correct werken.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">E-mail configuratie</h3>
                  <p className="text-gray-300">
                    E-mail accounts worden aangemaakt en gekoppeld. We configureren Outlook, Thunderbird of andere e-mail clients op uw werkplekken.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Documentatie</h3>
                  <p className="text-gray-300">
                    Complete documentatie van alle instellingen: logingegevens, DNS-configuratie, SSL-certificaten en e-mail instellingen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              Waarom hosting via onze partner?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow text-center">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Nederlandse datacenters</h3>
                <p className="text-gray-600">
                  Uw data blijft in Nederland met snelle verbindingen en GDPR-compliant.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow text-center">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">24/7 monitoring</h3>
                <p className="text-gray-600">
                  Constante monitoring en automatische alerts bij problemen voor maximale uptime.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow text-center">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Dagelijkse back-ups</h3>
                <p className="text-gray-600">
                  Automatische back-ups zodat uw data altijd veilig is en snel hersteld kan worden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
