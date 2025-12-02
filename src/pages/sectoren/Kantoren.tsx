import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { Building2, CheckCircle2, Cable, Wifi } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export default function Kantoren() {
  return (
    <>
      <SEO
        title="Kantoren – Netwerkbekabeling en infrastructuur | Signaalmakers"
        description="Bekabeling voor kantoren: netwerk, audio, camera\u2019s. Cat6/Cat6A, PoE, wifi-trajecten. Professioneel voorwerk voor MSP/IT—landelijk."
        keywords="kantoor bekabeling, netwerkbekabeling kantoor, wifi bekabeling, Cat6A kantoor, MSP partner kantoor"
        url="https://signaalmakers.nl/sectoren/kantoren"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Sectoren', item: 'https://signaalmakers.nl/sectoren' },
          { name: 'Kantoren', item: 'https://signaalmakers.nl/sectoren/kantoren' }
        ]}
      />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-8 mx-auto shadow-2xl">
              <Building2 className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Bekabeling voor kantoren
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Netwerkbekabeling, audio en camera\u2019s voor moderne kantooromgevingen. Cat6/Cat6A, PoE, wifi-trajecten—professioneel en toekomstbestendig. Landelijk werkzaam.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="mixed" density="light" color="mixed" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              Professionele infrastructuur voor kantooromgevingen
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
              Van werkplekken tot vergaderruimtes, van wifi-access points tot IP-telefonie: wij leggen de bekabeling die je kantoor draaiende houdt. <Link to="/diensten/netwerkbekabeling" style={{ fontWeight: 600 }}>Cat6/Cat6A trajecten</Link>, <Link to="/diensten/audiokabels" style={{ fontWeight: 600 }}>gebalanceerde audio</Link> en <Link to="/diensten/camera-bekabeling" style={{ fontWeight: 600 }}>camera-bekabeling</Link>—allemaal <Link to="/diensten/certificeren" style={{ fontWeight: 600 }}>gecertificeerd</Link> opgeleverd.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center text-white mb-6">
                  <Cable className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Werkplekken &amp; netwerk</h3>
                <p className="text-gray-600 leading-relaxed">
                  Cat6/Cat6A trajecten voor datapunten, PoE voor IP-telefoons en access points. Alles netjes afgewerkt en gelabeld.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <Wifi className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Wifi &amp; access points</h3>
                <p className="text-gray-600 leading-relaxed">
                  PoE-trajecten naar plafond of wand voor wifi-access points. MSP/IT doet configuratie en roaming.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Audio &amp; camera\u2019s</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gebalanceerde lijnen voor vaste audio-installaties en PoE-trajecten voor IP-camera\u2019s. Voorwerk voor installateur.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 shadow-lg mb-16">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-6">Wat we leveren voor kantoren</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-[#0E243A] mb-4">Netwerkbekabeling</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Cat6/Cat6A trajecten voor werkplekken en vergaderruimtes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>PoE-trajecten voor IP-telefoons, access points en camera\u2019s</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Patchkast strak ingericht met labels en schema\u2019s</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Meetrapporten en certificering conform kabelnormen</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#0E243A] mb-4">Audio &amp; Camera</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Gebalanceerde audiokabels voor vaste speakers en installaties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>PoE-trajecten voor IP-camera\u2019s (in-/outdoor)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Voorwerk voor audio/beveiligingsbedrijven—wij doen kabels, zij doen apparatuur</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-[#FF6A00] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Wij doen het voorwerk – MSP/IT doet inregeling</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Signaalmakers legt bekabeling: trajecten trekken, afmonteren, labelen en <Link to="/diensten/certificeren" style={{ fontWeight: 600 }}>certificeren</Link>. <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP/IT-partners</Link> installeren switches, routers, wifi-controllers en doen configuratie (VLAN\u2019s, SSID\u2019s, netwerksegmentatie).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Voor audio en camera\u2019s werken we samen met installateurs en beveiligingsbedrijven: wij leggen de bekabeling, zij sluiten apparatuur aan en regelen af. Duidelijke scheiding, professioneel resultaat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Bekabeling voor jouw kantoor
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Van nieuwbouw tot renovatie, van klein kantoor tot groot bedrijfspand: vraag een offerte aan voor professionele bekabeling.
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
