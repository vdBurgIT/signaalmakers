import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { PackageSearch, CheckCircle2, Cable, Shield } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export default function Magazijn() {
  return (
    <>
      <SEO
        title="Magazijn & Logistiek – Robuuste bekabeling | Signaalmakers"
        description="Bekabeling voor magazijnen en logistiek: netwerk, scanners, camera\u2019s. Cat6/Cat6A, PoE—robuust en geschikt voor zware omgevingen. Landelijk."
        keywords="magazijn bekabeling, logistiek bekabeling, scanner bekabeling, warehouse netwerk, PoE magazijn"
        url="https://signaalmakers.nl/sectoren/magazijn"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Sectoren', item: 'https://signaalmakers.nl/sectoren' },
          { name: 'Magazijn & Logistiek', item: 'https://signaalmakers.nl/sectoren/magazijn' }
        ]}
      />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mb-8 mx-auto shadow-2xl">
              <PackageSearch className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Bekabeling voor magazijn &amp; logistiek
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Robuuste bekabeling voor scanners, camera\u2019s en netwerk. Cat6/Cat6A, PoE—geschikt voor zware omgevingen. Landelijk werkzaam.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="network" density="light" color="blue" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              Robuuste infrastructuur voor magazijn en logistiek
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
              In magazijnen en logistieke omgevingen moet bekabeling tegen een stootje kunnen. <Link to="/diensten/netwerkbekabeling" style={{ fontWeight: 600 }}>Cat6/Cat6A trajecten</Link> voor netwerk en scanners, <Link to="/diensten/camera-bekabeling" style={{ fontWeight: 600 }}>PoE voor camera\u2019s</Link> en wifi-access points—allemaal robuust uitgevoerd en <Link to="/diensten/certificeren" style={{ fontWeight: 600 }}>gecertificeerd</Link> opgeleverd.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center text-white mb-6">
                  <Cable className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Netwerk &amp; scanners</h3>
                <p className="text-gray-600 leading-relaxed">
                  Cat6/Cat6A trajecten voor werkstations, scanners en printers. PoE voor wifi-access points in grote hallen.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Camera\u2019s &amp; beveiliging</h3>
                <p className="text-gray-600 leading-relaxed">
                  PoE-trajecten voor IP-camera\u2019s (binnen/buiten). Robuuste montage geschikt voor industriële omgevingen.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Robuust &amp; betrouwbaar</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kabels beschermd in goten of buis, schokbestendig gemonteerd. Geschikt voor zware omgevingen.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-gray-50 rounded-2xl p-8 shadow-lg mb-16">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-6">Wat we leveren voor magazijnen en logistiek</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-[#0E243A] mb-4">Netwerkbekabeling</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Cat6/Cat6A trajecten voor werkstations, scanners en printers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>PoE voor wifi-access points in grote hallen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Robuuste uitvoering in kabelgoten of buizen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Patchkast centraal of decentraal ingericht</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#0E243A] mb-4">Camera &amp; Beveiliging</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>PoE-trajecten voor IP-camera\u2019s (binnen/buiten)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Schokbestendige montage geschikt voor industriële omgevingen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Voorwerk voor beveiligingsbedrijven—wij doen kabels, zij doen apparatuur</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Geschikt voor zware omgevingen</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Magazijnen en logistieke omgevingen stellen hoge eisen aan bekabeling: temperatuurwisselingen, stof, vocht en mechanische belasting. Wij gebruiken robuuste kabels en montagewijzen die tegen een stootje kunnen.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Bescherming in kabelgoten of buizen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Schokbestendige montage op hoogte of aan wanden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Duidelijke labeling voor onderhoud en uitbreidingen</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Voorwerk voor MSP/IT</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Wij leggen de bekabeling, <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP/IT-partners</Link> installeren switches, access points en doen configuratie. Duidelijke scheiding tussen fysieke laag (wij) en logica (MSP/IT).
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Patchkasten strak ingericht met labels en schema\u2019s</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Meetrapporten en certificering conform kabelnormen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Opleverdossier met alle documentatie</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-[#FF6A00] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Wij doen het voorwerk – MSP/IT doet de rest</h3>
              <p className="text-gray-700 leading-relaxed">
                Signaalmakers legt bekabeling: trajecten trekken, afmonteren, labelen en <Link to="/diensten/certificeren" style={{ fontWeight: 600 }}>certificeren</Link>. <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP/IT-partners</Link> installeren switches, access points en doen configuratie. Beveiligingsbedrijven installeren camera\u2019s en configureren systemen. Zo is er een duidelijke scheiding tussen voorwerk (wij) en inregeling (partners).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Bekabeling voor jouw magazijn of logistieke omgeving
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Van nieuwbouw tot uitbreiding, van klein magazijn tot groot distributiecentrum: vraag een offerte aan voor robuuste bekabeling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/offerte"
                className="bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                Vraag offerte
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
