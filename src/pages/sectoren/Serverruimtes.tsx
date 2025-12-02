import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { Server, CheckCircle2, Cable, Zap } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export default function Serverruimtes() {
  return (
    <>
      <SEO
        title="Serverruimtes & Datacenters – Cat6A bekabeling | Signaalmakers"
        description="Cat6A bekabeling voor serverruimtes en datacenters. 10 Gbps, strakke patchkasten, gecertificeerde oplevering. Voorwerk voor MSP/IT — landelijk."
        keywords="serverruimte bekabeling, datacenter bekabeling, Cat6A 10Gbps, patchkast datacenter, MSP bekabeling partner"
        url="https://signaalmakers.nl/sectoren/serverruimtes"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Sectoren', item: 'https://signaalmakers.nl/sectoren' },
          { name: 'Serverruimtes', item: 'https://signaalmakers.nl/sectoren/serverruimtes' }
        ]}
      />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 mx-auto shadow-2xl">
              <Server className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Bekabeling voor serverruimtes &amp; datacenters
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Cat6A bekabeling voor 10 Gbps, strakke patchkasten en gecertificeerde oplevering. Wij leggen de bekabeling — MSP/IT doet inregeling en beheer. Landelijk werkzaam.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="network" density="light" color="blue" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              Professionele bekabeling voor kritieke omgevingen
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
              In serverruimtes en datacenters is betrouwbare bekabeling essentieel. <Link to="/diensten/netwerkbekabeling" style={{ fontWeight: 600 }}>Cat6A trajecten</Link> voor 10 Gbps, strakke <Link to="/diensten/patchkasten" style={{ fontWeight: 600 }}>patchkasten</Link> met doordacht kabelmanagement en volledige <Link to="/diensten/certificeren" style={{ fontWeight: 600 }}>certificering</Link>. Wij doen het voorwerk — <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP/IT</Link> doet configuratie en beheer.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center text-white mb-6">
                  <Cable className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Cat6A voor 10 Gbps</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bekabeling die 10 Gbps aankan over 100 meter. Ideaal voor server-to-switch verbindingen, storage-netwerken en uplinks. Aandacht voor EMI/crosstalk en toekomstbestendigheid.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Cat6A S/FTP afgeschermd voor storingsvrije transmissie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Korte en lange runs, altijd met oog voor toekomstige uitbreiding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Elk traject gemeten en gecertificeerd conform kabelnormen</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <Server className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Strakke patchkasten</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Doordacht ingerichte <Link to="/diensten/patchkasten" style={{ fontWeight: 600 }}>patchkasten</Link> met kabelmanagement, labels en schema&apos;s. Airflow in acht genomen, ruimte voor switches en PDU&apos;s. Klaar voor beheer door MSP/IT.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Logische paneelindeling en labeling (poort, VLAN-ready)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Kabelmanagement en airflow voor optimale koeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Schema&apos;s en documentatie voor MSP/IT-beheer</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-[#FF6A00] rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Wij doen het voorwerk – MSP/IT doet de rest</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Signaalmakers legt de bekabeling: trajecten trekken, patchkasten monteren, labelen en <Link to="/diensten/certificeren" style={{ fontWeight: 600 }}>certificeren</Link>. <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP/IT-partners</Link> installeren switches, routers, firewalls en doen configuratie (VLAN&apos;s, routing, monitoring).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Deze scheiding zorgt voor duidelijke verantwoordelijkheden: wij leveren een solide fysieke laag, MSP/IT beheert de logica en apparatuur. Geen overlap, professioneel resultaat.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-6">Wat we leveren voor serverruimtes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-[#0E243A] mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#FF6A00]" />
                    Bekabeling
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Cat6A trajecten voor 10 Gbps server-to-switch</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Uplinks, storage-netwerken en management-interfaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Out-of-band management bekabeling indien gewenst</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#0E243A] mb-3 flex items-center gap-2">
                    <Cable className="w-5 h-5 text-[#FF6A00]" />
                    Patchkasten &amp; Documentatie
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Patchpanelen, kabelmanagement en labeling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Meetrapporten en certificaten</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Schema&apos;s en Excel-overzichten voor beheer</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Bekabeling voor jouw serverruimte of datacenter
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Vraag een offerte aan voor Cat6A bekabeling, patchkasten en certificering. Landelijk werkzaam — van nieuwbouw tot uitbreiding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/offerte"
                className="bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                Vraag offerte aan
              </Link>
              <Link
                to="/contact"
                className="border-2 border-[#0E243A] text-[#0E243A] px-8 py-4 rounded-lg hover:bg-[#0E243A] hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
