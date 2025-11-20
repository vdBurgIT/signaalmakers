import Hero from '../components/Hero';
import SEO from '../components/SEO';
import { Building2, Store, Package, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackgroundOverlay from '../components/BackgroundOverlay';

export default function Zakelijk() {
  return (
    <>
      <SEO
        title="Zakelijke ICT Oplossingen - MKB Netwerken"
        description="Professionele ICT-diensten voor het MKB. WiFi-netwerken, databekabeling, internet & telefonie, hosting en moderne werkplek oplossingen voor kantoren en bedrijven."
        keywords="zakelijke ICT, bedrijfsnetwerk, kantoor wifi, professionele databekabeling, zakelijk internet, MKB ICT"
        url="https://signaalmakers.nl/zakelijk"
      />
      <div>
      <Hero
        title="Zakelijke wifi en netwerkinstallaties"
        subtitle="Professionele wifi-installatie en databekabeling voor bedrijven, kantoren, winkels en horeca. Wij zorgen voor stabiele netwerkverbindingen."
        primaryButtonText="Plan een zakelijke inventarisatie"
        primaryButtonLink="/contact"
      />

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="network" density="medium" color="blue" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
              Wifi-installatie voor elk type bedrijf
            </h2>
            <p className="text-lg text-gray-600">
              Of u nu een klein kantoor heeft of een groot bedrijfspand, wij leveren zakelijke <a href="/diensten/wifi-netwerk">wifi-oplossingen</a> op maat. Van wifi-meting tot complete <a href="/diensten/databekabeling">netwerkinstallatie</a>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-lg p-8">
              <Building2 className="w-12 h-12 text-[#FF6A00] mb-4" />
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Wifi voor kantoren</h3>
              <p className="text-gray-600 mb-4">
                Van 5 tot 100+ werkplekken. Professionele <a href="/diensten/wifi-netwerk">wifi-installatie</a>, <a href="/diensten/databekabeling">databekabeling</a> en complete zakelijke netwerken.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Volledige wifi-dekking op kantoor</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Netwerkbekabeling werkplekken</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Audio vergaderruimte</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>VoIP-telefonie</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <Store className="w-12 h-12 text-[#FF6A00] mb-4" />
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Wifi retail en horeca</h3>
              <p className="text-gray-600 mb-4">
                Stabiel wifi-netwerk voor kassasystemen, pinautomaten en gastennetwerk. Betrouwbaar en veilig.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Gastennetwerk voor klanten</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Gescheiden netwerk kassasystemen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Achtergrondmuziek</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <Package className="w-12 h-12 text-[#FF6A00] mb-4" />
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Wifi magazijn en logistiek</h3>
              <p className="text-gray-600 mb-4">
                Robuuste wifi-installatie voor scanners en terminals, ook in grote hallen en buitenterreinen.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Krachtige wifi voor veel apparaten</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Outdoor wifi access points</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Wifi voor scanners en terminals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Omroepinstallatie</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0E243A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Werkwijze zakelijke wifi-installatie
            </h2>
            <p className="text-lg text-gray-300 mb-12 text-center">
              Bij zakelijke wifi-installaties werken we volgens een bewezen stappenplan voor optimale resultaten.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Inventarisatie wifi-behoefte</h3>
                  <p className="text-gray-300">
                    We komen langs voor een uitgebreide inventarisatie. Hoeveel werkplekken? Welke apparaten? Wat zijn de wifi-eisen? We brengen uw situatie volledig in kaart.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Professionele wifi-meting</h3>
                  <p className="text-gray-300">
                    Bij zakelijke wifi-installaties voeren we professionele metingen uit. We analyseren het pand, wifi-signaalsterkte en mogelijke storingsbronnen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Ontwerp en offerte</h3>
                  <p className="text-gray-300">
                    U ontvangt een gedetailleerd wifi-ontwerp met plattegronden, access point-locaties en databekabeling. De offerte is transparant met vaste prijzen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Planning wifi-installatie</h3>
                  <p className="text-gray-300">
                    We plannen de wifi-installatie in overleg met u. Werkzaamheden kunnen vaak buiten kantooruren plaatsvinden om verstoring te minimaliseren.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Installatie en montage</h3>
                  <p className="text-gray-300">
                    Professionele wifi-installatie volgens ontwerp. Databekabeling netjes weggewerkt, access points gemonteerd en het complete netwerk getest.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  6
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Oplevering en documentatie</h3>
                  <p className="text-gray-300">
                    Complete oplevering met documentatie, wifi-testrapporten en uitleg. U krijgt instructies voor beheer van uw zakelijke netwerk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <BackgroundOverlay variant="data" density="light" color="grey" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              Zakelijke wifi en netwerkdiensten
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Alles wat uw bedrijf nodig heeft voor een professioneel netwerk en stabiele internetverbinding. <a href="/contact">Neem contact op</a> voor een vrijblijvend adviesgesprek.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/diensten/wifi-netwerk"
                className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Zakelijke wifi-installatie</h3>
                <p className="text-gray-600">Professionele wifi-netwerken met volledige dekking, wifi-metingen en optimale prestaties voor uw bedrijf.</p>
              </Link>

              <Link
                to="/diensten/databekabeling"
                className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Netwerkbekabeling</h3>
                <p className="text-gray-600">Professionele Cat6 en Cat6A databekabeling, nette patchkasten en serverkasten voor uw bedrijfsnetwerk.</p>
              </Link>

              <Link
                to="/diensten/internet-telefonie"
                className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Zakelijk internet en telefonie</h3>
                <p className="text-gray-600">Betrouwbare zakelijke internetverbindingen en moderne VoIP-telefonie via onze IT-partner.</p>
              </Link>

              <Link
                to="/diensten/moderne-werkplek"
                className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Moderne Werkplek</h3>
                <p className="text-gray-600">Complete werkplekinrichting met Microsoft 365 en hardware.</p>
              </Link>

              <Link
                to="/diensten/veilig-online"
                className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Netwerk beveiliging</h3>
                <p className="text-gray-600">Netwerkbeveiliging, gescheiden gastennetwerk en veilige wifi-configuratie voor uw bedrijf.</p>
              </Link>

              <Link
                to="/diensten/audio"
                className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Zakelijke audio</h3>
                <p className="text-gray-600">Professionele audio-installaties voor achtergrondmuziek in winkel, horeca en audio in vergaderruimtes.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
