import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Cable, Zap, CheckCircle2, Building2, Users } from 'lucide-react';
import BackgroundOverlay from '../components/BackgroundOverlay';

export default function OverOns() {
  return (
    <>
      <SEO
        title="Over Ons – Bekabeling voor infrastructuur | Signaalmakers"
        description="Signaalmakers: bekabeling voor infrastructuur. Netwerk, audio, camera's—Cat6/Cat6A, PoE, gebalanceerde lijnen. Voorwerk voor MSP/IT—landelijk."
        keywords="over signaalmakers, bekabeling infrastructuur, netwerkbekabeling specialist, MSP partner bekabeling, Cat6A bekabeling Nederland"
        url="https://signaalmakers.nl/over-ons"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Over Ons', item: 'https://signaalmakers.nl/over-ons' }
        ]}
      />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#FF6A00] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bekabeling voor infrastructuur
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Netwerk, audio, camera&apos;s – Cat6/Cat6A, PoE, gebalanceerde lijnen. Wij leggen de bekabeling, jij als MSP/IT doet inregeling en beheer. Duidelijke scheiding, professioneel voorwerk en landelijk inzetbaar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="mixed" density="light" color="mixed" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              Wie we zijn
            </h2>

            <div className="text-lg text-gray-700 space-y-6 mb-16 leading-relaxed">
              <p>
                Signaalmakers is specialist in <Link to="/diensten" style={{ fontWeight: 600 }}>bekabeling voor infrastructuur</Link>: netwerk (Cat6/Cat6A), audio (gebalanceerde lijnen), camera&apos;s (PoE), patchkasten en certificering. Wij doen het voorwerk – kabeltrajecten trekken, afmonteren, labelen en <Link to="/diensten/certificeren" style={{ fontWeight: 600 }}>certificeren</Link>. MSP/IT doet inregeling en beheer van apparatuur.
              </p>

              <p>
                Wij werken in heel Nederland voor MKB-bedrijven, kantoren, retail, zorg, onderwijs en magazijnen. Daarnaast zijn wij vaste <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>bekabelingspartner voor MSP&apos;s</Link>, IT-dienstverleners en audio/beveiligingsbedrijven. Zij regelen apparatuur en configuratie – wij zorgen dat de bekabeling en aansluitpunten tot in detail op orde zijn.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-gray-50 border-l-4 border-[#FF6A00] rounded-xl p-10 mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0E243A] mb-6">Wat we leveren</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed"><strong><Link to="/diensten/netwerkbekabeling" style={{ fontWeight: 600 }}>Netwerkbekabeling (Cat6/Cat6A)</Link></strong> — 1-10 Gbps, PoE-geschikt</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed"><strong><Link to="/diensten/audiokabels" style={{ fontWeight: 600 }}>Audiokabels</Link></strong> — gebalanceerde lijnen voor vaste installaties</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed"><strong><Link to="/diensten/camera-bekabeling" style={{ fontWeight: 600 }}>Camera-bekabeling</Link></strong> — PoE trajecten voor IP-camera&apos;s</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed"><strong><Link to="/diensten/patchkasten" style={{ fontWeight: 600 }}>Patchkasten</Link></strong> — strak ingericht, kabelmanagement, labeling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed"><strong><Link to="/diensten/certificeren" style={{ fontWeight: 600 }}>Meten & Certificeren</Link></strong> — meetrapporten, labels, schema&apos;s</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-10 mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0E243A] mb-6">Wat we nadrukkelijk NIET doen</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Wij doen alleen het voorwerk – kabeltrajecten trekken, afmonteren, labelen en certificeren. Geen configuratie, geen apparatuur, geen beheer. Juist die duidelijke scheiding maakt ons dé bekabelingspartner voor MSP&apos;s, IT-specialisten, audiobedrijven en beveiligingsbedrijven: zij houden controle over apparatuur en configuratie, wij zorgen voor professionele bekabeling waar zij op kunnen vertrouwen.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">✗</span>
                  <span className="leading-relaxed">Installatie van switches, routers, access points, speakers of camera&apos;s</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">✗</span>
                  <span className="leading-relaxed">Configuratie (VLAN&apos;s, IP-adressering, firewall, audio-afregeling)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">✗</span>
                  <span className="leading-relaxed">Beheer, MSP-diensten, serverbeheer of monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">✗</span>
                  <span className="leading-relaxed">Apparatuur leveren of aanbevelingen over merken/modellen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-12 text-center">
              Signaalmakers staat voor
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Cable,
                  title: 'Professionele bekabeling',
                  desc: 'Strakke, professionele bekabeling die technisch en optisch klopt. Netjes afgewerkt volgens gestructureerde bekabelingsnormen.',
                },
                {
                  icon: CheckCircle2,
                  title: 'Duidelijke afspraken',
                  desc: 'Eerlijke communicatie, heldere documentatie en labeling. Elke kabel is terug te vinden.',
                },
                {
                  icon: Users,
                  title: 'Landelijk inzetbaar',
                  desc: 'Werkzaam in heel Nederland — van Rotterdam tot Groningen, van Amsterdam tot Maastricht.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0E243A] mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              Partner voor MSP's en IT-dienstverleners
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
              Veel <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP's, systeembeheerders en IT-bedrijven</Link> schakelen Signaalmakers in als specialist voor de fysieke laag. Wij leggen de kabels, jij als MSP/IT-partner doet de configuratie en het beheer.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Wij zorgen dat:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>De juiste datakabels op de juiste plek liggen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>De patchkast netjes en logisch bekabeld is</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Wifi-access points direct ingeprikt kunnen worden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Alles gelabeld en gedocumenteerd is</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-gray-50 rounded-2xl p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Resultaat:</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  De verantwoordelijkheid blijft helder — jij als <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP of IT-partner</Link> beheert het netwerk, Signaalmakers regelt de kabels en aansluitingen. Geen overlap, geen gedoe, alleen professionele samenwerking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0E243A] to-[#1a3a5a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Een solide basis onder jouw datanetwerk
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Of het nu gaat om een nieuw kantoorpand, uitbreiding van een bestaande omgeving, wifi-bekabeling voor access points of het moderniseren van oude bekabeling: Signaalmakers regelt het voor je — in heel Nederland.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              Wil je een stabiel en overzichtelijk netwerk? Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
