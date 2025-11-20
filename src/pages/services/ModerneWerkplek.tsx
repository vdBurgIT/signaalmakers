import Hero from '../../components/Hero';
import SEO from '../../components/SEO';
import { Monitor, CheckCircle2 } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export default function ModerneWerkplek() {
  return (
    <>
      <SEO
        title="Moderne Werkplek - Cloud & Office 365"
        description="Complete moderne werkplek oplossingen. Cloud workspace, Office 365, Microsoft 365 en secure remote working voor bedrijven."
        keywords="moderne werkplek, cloud workspace, office 365, microsoft 365, remote working"
        url="https://signaalmakers.nl/diensten/moderne-werkplek"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Diensten', item: 'https://signaalmakers.nl/' },
          { name: 'Moderne Werkplek', item: 'https://signaalmakers.nl/diensten/moderne-werkplek' }
        ]}
      />
      <div>
      <Hero
        title="Moderne Werkplek"
        subtitle="Complete werkplekinrichting met Microsoft 365 en professionele hardware via onze IT-partner. Signaalmakers verzorgt de installatie."
        primaryButtonText="Werkplekken inrichten"
        primaryButtonLink="/contact"
      />

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="network" density="medium" color="mixed" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#FF6A00] bg-opacity-10 rounded-lg p-6 mb-12 border-l-4 border-[#FF6A00]">
              <p className="text-gray-700 text-lg">
                <strong>Belangrijk:</strong> Microsoft 365 en software worden geleverd via onze vaste IT-partner. Signaalmakers verzorgt de volledige werkplekinrichting, hardware-installatie en configuratie op locatie.
              </p>
            </div>

            <div className="flex gap-6 mb-8">
              <Monitor className="w-12 h-12 text-[#FF6A00] flex-shrink-0" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
                  Wat is een moderne werkplek?
                </h2>
                <p className="text-lg text-gray-600">
                  Een moderne werkplek is meer dan alleen een pc. Het is een complete omgeving waarin medewerkers overal veilig kunnen werken met alle benodigde tools en toepassingen.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Software & Licenties</h3>
                <p className="text-gray-600 mb-4">Via onze IT-partner:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Microsoft 365 (Office, Teams, OneDrive, SharePoint)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Windows-licenties en updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Beveiligingssoftware en antivirus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Cloud storage en samenwerking</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Hardware & Installatie</h3>
                <p className="text-gray-600 mb-4">Door Signaalmakers:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Levering en installatie van pc's/laptops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Monitoren, toetsenborden en muizen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Netwerkbekabeling naar werkplekken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Printers en multifunctionals</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#0E243A] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Wat levert Signaalmakers op locatie?</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Hardware-installatie</h4>
                    <p className="text-gray-300">
                      Wij installeren alle hardware op locatie: pc's, monitoren, printers en andere randapparatuur. Alles wordt aangesloten en werkend opgeleverd.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Netwerkinfrastructuur</h4>
                    <p className="text-gray-300">
                      Netwerkaansluitingen naar elke werkplek, bekabeling door het pand en professionele patchkasten. Zo heeft iedere medewerker een stabiele verbinding.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Basis configuratie</h4>
                    <p className="text-gray-300">
                      Apparaten worden aangesloten op het netwerk en domein. Printers worden geïnstalleerd en gekoppeld. Basis-instellingen worden uitgevoerd.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Testen en oplevering</h4>
                    <p className="text-gray-300">
                      We testen alle functionaliteit: internet, netwerk, printers en applicaties. Documentatie wordt opgeleverd zodat alles helder is.
                    </p>
                  </div>
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
              Voordelen van een moderne werkplek
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow text-center">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Werken waar je wilt</h3>
                <p className="text-gray-600">
                  Of je nu op kantoor, thuis of onderweg bent, je hebt altijd toegang tot al je bestanden en applicaties.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow text-center">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Veilig samenwerken</h3>
                <p className="text-gray-600">
                  Documenten staan veilig in de cloud. Samen werken aan bestanden zonder e-mail-chaos. Alles automatisch gesynchroniseerd.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow text-center">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Altijd up-to-date</h3>
                <p className="text-gray-600">
                  Automatische updates voor software en beveiliging. Je werkt altijd met de nieuwste versies zonder gedoe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
