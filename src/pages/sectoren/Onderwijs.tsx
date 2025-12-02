import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { GraduationCap, CheckCircle2, Cable, Shield } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export default function Onderwijs() {
  return (
    <>
      <SEO
        title="Onderwijs & Zorg – Betrouwbare bekabeling | SIGNAALMAKERS"
        description="Bekabeling voor onderwijs en zorg: netwerk, camera\u2019s, audio. Cat6/Cat6A, PoE — veilig, gedocumenteerd en betrouwbaar. Landelijk."
        keywords="onderwijs bekabeling, zorg bekabeling, school netwerk, ziekenhuis bekabeling, PoE onderwijs"
        url="https://signaalmakers.nl/sectoren/onderwijs"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Sectoren', item: 'https://signaalmakers.nl/sectoren' },
          { name: 'Onderwijs & Zorg', item: 'https://signaalmakers.nl/sectoren/onderwijs' }
        ]}
      />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white mb-8 mx-auto shadow-2xl">
              <GraduationCap className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Bekabeling voor onderwijs &amp; zorg
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Betrouwbare infrastructuur voor scholen, ziekenhuizen en zorginstellingen. Cat6/Cat6A, PoE, audio — veilig en gedocumenteerd. Landelijk werkzaam.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="mixed" density="light" color="mixed" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              Betrouwbare infrastructuur voor onderwijs en zorg
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
              Scholen, ziekenhuizen en zorginstellingen vragen om betrouwbare, veilige en goed gedocumenteerde bekabeling. <Link to="/diensten/netwerkbekabeling" style={{ fontWeight: 600 }}>Cat6/Cat6A trajecten</Link> voor netwerk, <Link to="/diensten/camera-bekabeling" style={{ fontWeight: 600 }}>PoE voor camera\u2019s</Link> en <Link to="/diensten/audiokabels" style={{ fontWeight: 600 }}>audio</Link> — alles <Link to="/diensten/certificeren" style={{ fontWeight: 600 }}>gecertificeerd</Link> en gedocumenteerd.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center text-white mb-6">
                  <Cable className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Netwerk &amp; wifi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Cat6/Cat6A trajecten voor werkplekken, klaslokalen en pati\u00EBntenruimtes. PoE voor wifi-access points en IP-telefoons.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Camera\u2019s &amp; beveiliging</h3>
                <p className="text-gray-600 leading-relaxed">
                  PoE-trajecten voor IP-camera\u2019s. Veiligheid en privacy volgens AVG/NEN-normen. Voorwerk voor beveiligingsbedrijven.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Audio &amp; communicatie</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gebalanceerde audiokabels voor intercom, omroepinstallaties en vaste speakers. Voorwerk voor audio-installateurs.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-gray-50 rounded-2xl p-8 shadow-lg mb-16">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-6">Wat we leveren voor onderwijs en zorg</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-[#0E243A] mb-4">Netwerkbekabeling</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Cat6/Cat6A trajecten voor werkplekken, klaslokalen en pati\u00EBntenruimtes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>PoE voor wifi-access points, IP-telefoons en intercom</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Patchkasten strak ingericht en gedocumenteerd</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Volledige certificering en meetrapporten</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#0E243A] mb-4">Camera &amp; Audio</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>PoE-trajecten voor IP-camera\u2019s (privacy/AVG-proof)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Gebalanceerde audiokabels voor intercom en omroepinstallaties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Voorwerk voor audio/beveiligingsbedrijven</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Veilig en gedocumenteerd</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In onderwijs en zorg is privacy en veiligheid essentieel. Wij leveren gedocumenteerde bekabeling met schema\u2019s, labels en meetrapporten. Alles volgens AVG/NEN-normen en conform structured cabling principes.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Volledige documentatie en schema\u2019s</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Labeling en meetrapporten voor compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Professionele oplevering volgens normen</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Voorwerk voor MSP/IT</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Wij leggen de bekabeling, <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP/IT-partners</Link> installeren switches, access points en doen configuratie (VLAN\u2019s, netwerksegmentatie). Duidelijke scheiding tussen fysieke laag (wij) en logica (MSP/IT).
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Patchkasten klaar voor beheer door MSP/IT</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Schema\u2019s en documentatie voor IT-beheer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Opleverdossier met alle meetrapporten</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-[#FF6A00] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Wij doen het voorwerk – MSP/IT doet de rest</h3>
              <p className="text-gray-700 leading-relaxed">
                SIGNAALMAKERS legt bekabeling: trajecten trekken, afmonteren, labelen en <Link to="/diensten/certificeren" style={{ fontWeight: 600 }}>certificeren</Link>. <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP/IT-partners</Link> installeren switches, access points en doen configuratie. Audio-installateurs sluiten intercom en speakers aan, beveiligingsbedrijven installeren camera\u2019s. Zo is er een duidelijke scheiding tussen voorwerk (wij) en inregeling (partners).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Bekabeling voor jouw school of zorginstelling
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Van nieuwbouw tot renovatie, van basisschool tot ziekenhuis: vraag een offerte aan voor betrouwbare, gedocumenteerde bekabeling.
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
