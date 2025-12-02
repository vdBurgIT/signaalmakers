import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { ShoppingBag, CheckCircle2, Cable, Camera } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export default function Retail() {
  return (
    <>
      <SEO
        title="Retail & Horeca – Bekabeling voor winkels en horeca | Signaalmakers"
        description="Bekabeling voor retail en horeca: kassa\u2019s, camera\u2019s, audio, netwerk. Cat6/Cat6A, PoE — snel, netjes, minimale verstoring. Landelijk."
        keywords="retail bekabeling, horeca bekabeling, kassa bekabeling, camera winkel, PoE bekabeling retail"
        url="https://signaalmakers.nl/sectoren/retail"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Sectoren', item: 'https://signaalmakers.nl/sectoren' },
          { name: 'Retail & Horeca', item: 'https://signaalmakers.nl/sectoren/retail' }
        ]}
      />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-8 mx-auto shadow-2xl">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Bekabeling voor retail &amp; horeca
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Bekabeling voor kassa\u2019s, camera\u2019s en audio. Cat6/Cat6A, PoE — snel, netjes en met minimale verstoring van de bedrijfsvoering. Landelijk werkzaam.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="mixed" density="light" color="mixed" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              Professionele bekabeling voor winkels en horeca
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
              Van kleine winkel tot groot winkelcentrum, van café tot restaurant: wij leggen de bekabeling voor kassa\u2019s, camera\u2019s, audio en netwerk. <Link to="/diensten/netwerkbekabeling" style={{ fontWeight: 600 }}>Cat6/Cat6A trajecten</Link>, <Link to="/diensten/camera-bekabeling" style={{ fontWeight: 600 }}>PoE voor camera\u2019s</Link> en <Link to="/diensten/audiokabels" style={{ fontWeight: 600 }}>gebalanceerde audio</Link> — alles <Link to="/diensten/certificeren" style={{ fontWeight: 600 }}>gecertificeerd</Link> opgeleverd.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center text-white mb-6">
                  <Cable className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Kassa\u2019s &amp; netwerk</h3>
                <p className="text-gray-600 leading-relaxed">
                  Cat6 trajecten voor kassa\u2019s, pinapparaten en back-office. PoE voor wifi-access points. Alles netjes weggewerkt.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <Camera className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Camera\u2019s &amp; beveiliging</h3>
                <p className="text-gray-600 leading-relaxed">
                  PoE-trajecten voor IP-camera\u2019s (binnen/buiten). Voorwerk voor beveiligingsbedrijven — wij doen kabels, zij doen apparatuur.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Audio &amp; sfeer</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gebalanceerde audiokabels voor vaste speakers en installaties. Voorwerk voor audio-installateurs.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-gray-50 rounded-2xl p-8 shadow-lg mb-16">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-6">Minimale verstoring, maximaal resultaat</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Wij werken buiten openingstijden of in fasen, zodat je winkel of horecagelegenheid open kan blijven. Bekabeling wordt netjes weggewerkt in wanden, plafonds of kanalen — geen losse kabels, professioneel eindresultaat.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-[#0E243A] mb-4">Netwerkbekabeling</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Cat6 trajecten voor kassa\u2019s, pinapparaten en back-office</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>PoE voor wifi-access points en IP-telefoons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Patchkast in serverruimte of achterkantoor</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#0E243A] mb-4">Camera &amp; Audio</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>PoE-trajecten voor IP-camera\u2019s (binnen/buiten)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Gebalanceerde audiokabels voor vaste speakers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Voorwerk voor audio/beveiligingsbedrijven</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-[#FF6A00] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Wij doen het voorwerk – partners doen de rest</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Signaalmakers legt bekabeling: trajecten trekken, afmonteren, labelen en <Link to="/diensten/certificeren" style={{ fontWeight: 600 }}>certificeren</Link>. <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP/IT-partners</Link> installeren switches, access points en doen configuratie. Audio-installateurs sluiten speakers aan, beveiligingsbedrijven installeren camera\u2019s.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Deze scheiding zorgt voor duidelijke verantwoordelijkheden: wij leveren een solide fysieke laag, partners doen apparatuur en configuratie. Geen overlap, professioneel resultaat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Bekabeling voor jouw winkel of horecagelegenheid
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Van nieuwbouw tot verbouwing, van kleine zaak tot groot winkelcentrum: vraag een offerte aan voor professionele bekabeling.
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
