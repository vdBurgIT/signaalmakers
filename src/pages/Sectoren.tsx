import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Building2, ShoppingBag, PackageSearch, GraduationCap, Server } from 'lucide-react';
import BackgroundOverlay from '../components/BackgroundOverlay';

export default function Sectoren() {
  const sectoren = [
    {
      icon: Server,
      title: 'Serverruimtes & Datacenters',
      description: 'Cat6A bekabeling voor 10 Gbps, strakke patchkasten en gecertificeerde oplevering. Voorwerk voor MSP/IT.',
      link: '/sectoren/serverruimtes',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Building2,
      title: 'Kantoren',
      description: 'Netwerkbekabeling, audio en camera\u2019s voor moderne kantooromgevingen. Professioneel en toekomstbestendig.',
      link: '/sectoren/kantoren',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: ShoppingBag,
      title: 'Retail & Horeca',
      description: 'Bekabeling voor kassa\u2019s, camera\u2019s en audio. Snel, netjes en met minimale verstoring van de bedrijfsvoering.',
      link: '/sectoren/retail',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: PackageSearch,
      title: 'Magazijn & Logistiek',
      description: 'Robuuste bekabeling voor scanners, camera\u2019s en netwerk. Geschikt voor zware omgevingen.',
      link: '/sectoren/magazijn',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: GraduationCap,
      title: 'Onderwijs & Zorg',
      description: 'Betrouwbare infrastructuur voor scholen, ziekenhuizen en zorginstellingen. Veilig en gedocumenteerd.',
      link: '/sectoren/onderwijs',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <>
      <SEO
        title="Sectoren – Bekabeling voor infrastructuur | Signaalmakers"
        description="Bekabeling voor infrastructuur in kantoren, retail, zorg, onderwijs en magazijnen. Cat6/Cat6A, PoE, gebalanceerde lijnen — landelijk."
        keywords="bekabeling kantoor, retail bekabeling, zorg infrastructuur, onderwijs netwerk, magazijn bekabeling"
        url="https://signaalmakers.nl/sectoren"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Sectoren', item: 'https://signaalmakers.nl/sectoren' }
        ]}
      />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Bekabeling voor iedere sector
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Netwerk, audio en camera-bekabeling voor kantoren, retail, zorg, onderwijs en magazijnen. Cat6/Cat6A, PoE en gebalanceerde lijnen — gecertificeerd opgeleverd. Landelijk werkzaam.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="mixed" density="light" color="mixed" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              Onze expertise per sector
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
              Wij leveren bekabeling voor infrastructuur in diverse sectoren. Van serverruimtes tot retail, van onderwijs tot magazijnen — overal waar professionele bekabeling nodig is.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sectoren.map((sector, index) => (
                <Link
                  key={index}
                  to={sector.link}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${sector.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <sector.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0E243A] mb-3 group-hover:text-[#FF6A00] transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {sector.description}
                  </p>
                  <div className="mt-4 text-[#FF6A00] font-semibold flex items-center gap-2">
                    Meer info
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-[#FF6A00] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Wij doen alleen het voorwerk</h3>
              <p className="text-gray-700 leading-relaxed">
                Voor alle sectoren geldt: wij leggen bekabeling en leveren gecertificeerd op. <Link to="/blog/msp-bekabelingspartner" className="font-semibold text-[#FF6A00] hover:underline">MSP/IT-partners</Link> doen inregeling en beheer van apparatuur. Duidelijke scheiding, professioneel resultaat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0E243A] to-[#1a3a5a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bekabeling voor jouw sector
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Vraag een offerte aan of neem contact op voor meer informatie over bekabeling in jouw sector.
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
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0E243A] transition-all duration-300 font-semibold text-lg"
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
