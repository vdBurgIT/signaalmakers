import Hero from '../../components/Hero';
import { Globe, Phone, CheckCircle2, Wifi } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export default function InternetTelefonie() {
  return (
    <div>
      <Hero
        title="Internet & Telefonie"
        subtitle="Betrouwbare internetverbindingen en moderne cloudtelefonie via onze vaste IT-partner. Signaalmakers verzorgt de installatie op locatie."
        primaryButtonText="Neem contact op"
        primaryButtonLink="/contact"
      />

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="network" density="medium" color="blue" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#FF6A00] bg-opacity-10 rounded-lg p-6 mb-12 border-l-4 border-[#FF6A00]">
              <p className="text-gray-700 text-lg">
                <strong>Belangrijk:</strong> Internet- en telefoniediensten worden geleverd via onze vaste IT-partner. Signaalmakers verzorgt de volledige installatie, configuratie en koppeling op locatie.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Internetverbindingen
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Een stabiele internetverbinding is essentieel voor modern zakelijk werken. Via onze IT-partner bieden wij verschillende soorten verbindingen.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <Globe className="w-10 h-10 text-[#FF6A00] mb-4" />
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Vaste verbinding</h3>
                <p className="text-gray-600 mb-4">
                  Betrouwbare DSL-, kabel- of glasvezelverbinding met vaste bandbreedte en service level agreements.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Vaste IP-adressen mogelijk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Symmetrische bandbreedte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Hersteltijdgarantie</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <Wifi className="w-10 h-10 text-[#FF6A00] mb-4" />
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Glasvezel</h3>
                <p className="text-gray-600 mb-4">
                  De snelste en meest stabiele optie met snelheden tot 10 Gbit/s. Ideaal voor bedrijven met hoge eisen.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Zeer hoge snelheden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Minimale latency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Toekomstbestendig</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <Wifi className="w-10 h-10 text-[#FF6A00] mb-4" />
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Mobiel/4G/5G</h3>
                <p className="text-gray-600 mb-4">
                  Draadloze back-up verbinding of tijdelijke oplossing tijdens verbouwing of verhuizing.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Snel te activeren</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Flexibel inzetbaar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Geen bekabeling nodig</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-6 mb-8">
              <Phone className="w-12 h-12 text-[#FF6A00] flex-shrink-0" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
                  Moderne telefonie
                </h2>
                <p className="text-lg text-gray-600">
                  Cloudtelefonie en VoIP-oplossingen via onze IT-partner. Bereikbaar op elk apparaat, waar u ook bent.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Cloudtelefonie</h3>
                <p className="text-gray-600 mb-4">
                  Volledige telefonieoplossing in de cloud. Geen dure hardware, alleen internet en apparaten naar keuze.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Geen PBX-hardware nodig</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Bereikbaar op pc, smartphone en deskphone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Professionele features: wachtrijnen, IVR, doorschakelen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Thuiswerken met zakelijk nummer</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Microsoft Teams Bellen</h3>
                <p className="text-gray-600 mb-4">
                  Gebruik Microsoft Teams ook voor externe telefoongesprekken met uw bestaande nummers.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Geïntegreerd in Teams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Één applicatie voor alles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Bestaande nummers behouden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Gespreksrapportages en analytics</span>
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
              Onze rol op locatie
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Signaalmakers verzorgt de volledige installatie en configuratie op uw locatie:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Router en netwerkinstallatie</h3>
                  <p className="text-gray-300">
                    We installeren en configureren de router, zorgen voor juiste routering en testen de verbinding uitgebreid.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">QoS en prioritering</h3>
                  <p className="text-gray-300">
                    VoIP-verkeer krijgt altijd voorrang zodat gesprekken vloeiend blijven, ook bij hoog netwerkgebruik.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Bekabeling en aansluiting</h3>
                  <p className="text-gray-300">
                    Alle benodigde bekabeling wordt netjes geïnstalleerd. Deskphones worden aangesloten en geconfigureerd.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Testen en documenteren</h3>
                  <p className="text-gray-300">
                    We testen alle functionaliteit en leveren complete documentatie van de installatie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
