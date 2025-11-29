import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Target, Cable, Zap, CheckCircle2, Building2, Users } from 'lucide-react';
import BackgroundOverlay from '../components/BackgroundOverlay';

export default function OverOns() {
  return (
    <>
      <SEO
        title="Over Ons - Specialist in Netwerkbekabeling | Signaalmakers"
        description="Signaalmakers is specialist in netwerkbekabeling en data-infrastructuur door heel Nederland. Alleen de fysieke netwerklaag - geen IT-beheer, geen configuratie. Partner voor MSP's en bedrijven."
        keywords="over signaalmakers, netwerkbekabeling specialist, bekabeling bedrijf, MSP partner bekabeling, databekabeling Nederland, UTP bekabeling specialist"
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
              Specialist in Netwerkbekabeling
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Signaalmakers is specialist in netwerkbekabeling en data-infrastructuur. Wij leggen de fysieke laag van het netwerk aan: de kabels, datapunten en aansluitingen waar al het verkeer overheen loopt.
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
                Signaalmakers is specialist in <Link to="/diensten" style={{ fontWeight: 600 }}>netwerkbekabeling en data-infrastructuur</Link>. Wij leggen de fysieke laag van het netwerk aan: de kabels, datapunten en aansluitingen waar al het verkeer overheen loopt. Geen ingewikkelde IT-verhalen, maar gewoon strak aangelegde bekabeling die klopt, netjes is afgewerkt en klaar is voor de toekomst.
              </p>

              <p>
                Wij werken in heel Nederland voor MKB-bedrijven, kantoren, winkels, horeca, logistieke omgevingen, magazijnen, zorglocaties, scholen én woningen met een serieuze netwerkvraag. Daarnaast zijn wij vaste <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>bekabelingspartner voor MSP-bedrijven</Link>, IT-dienstverleners en systeembeheerders. Zij regelen de routers, switches, wifi-configuratie en serverbeheer; wij zorgen dat de bekabeling en aansluitpunten tot in detail op orde zijn.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-gray-50 border-l-4 border-[#FF6A00] rounded-xl p-10 mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0E243A] mb-6">Onze focus: de fysieke netwerklaag (Layer 1)</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed"><strong><Link to="/diensten/databekabeling" style={{ fontWeight: 600 }}>Netwerkbekabeling aanleggen</Link></strong> — UTP-datakabels (CAT6, CAT6A, CAT7)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed"><strong><Link to="/diensten/databekabeling" style={{ fontWeight: 600 }}>Datapunten aanleggen en aansluiten</Link></strong> — professioneel afgewerkt</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed"><strong>Kabelroutes en bekabelingsplan</strong> — kabelplan uitwerken</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed"><strong>Wifi-bekabeling</strong> — aanleggen naar access point-locaties</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed"><strong><Link to="/diensten/patchkasten" style={{ fontWeight: 600 }}>Patchkast-bekabeling</Link></strong> — kabelmanagement netjes maken</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed"><strong>Oude bekabeling vernieuwen</strong> — moderniseren en vervangen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed"><strong><Link to="/diensten/testen" style={{ fontWeight: 600 }}>Labeling en basisdocumentatie</Link></strong> — alles traceerbaar</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-10 mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0E243A] mb-6">Wat we nadrukkelijk NIET doen</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We installeren geen switches, routers of wifi-access points en we doen geen netwerkconfiguratie, VLAN's of MSP-diensten. Juist die duidelijke scheiding maakt ons interessant voor MSP's en IT-partners: zij houden controle over de configuratie en het beheer, wij zorgen voor een professionele bekabelde infrastructuur waar zij op kunnen vertrouwen.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">✗</span>
                  <span className="leading-relaxed">Plaatsing of configuratie van switches, routers of wifi-access points</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">✗</span>
                  <span className="leading-relaxed">VLAN-configuratie, IP-adressering of firewall-regels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">✗</span>
                  <span className="leading-relaxed">Serverbeheer, cloudbeheer of MSP-diensten</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">✗</span>
                  <span className="leading-relaxed">Wifi-site surveys en draadloze metingen</span>
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
                  desc: 'Strakke, professionele bekabeling die technisch en optisch klopt. Netjes afgewerkt volgens structured cabling normen.',
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
              Veel <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP's, systeembeheerders en IT-bedrijven</Link> schakelen Signaalmakers in als specialist voor de fysieke laag. Wij leggen de kabels, jullie doen de configuratie en het beheer.
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
                    <span>De patchkast netjes en logisch is bekabeld</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Wifi-access points direct ingeprikt kunnen worden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Alles is gelabeld en gedocumenteerd</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-gray-50 rounded-2xl p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Resultaat:</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  De verantwoordelijkheid blijft helder — de <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP of IT-partner</Link> beheert het netwerk, Signaalmakers beheert de kabels en aansluitingen. Geen overlap, geen gedoe, alleen professionele samenwerking.
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
              Of het nu gaat om een nieuw kantoorpand, uitbreiding van een bestaande omgeving, wifi-bekabeling voor access points of het moderniseren van oude bekabeling: Signaalmakers legt de lijnen voor je — in heel Nederland.
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
