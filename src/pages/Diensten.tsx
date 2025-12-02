import { Link } from 'react-router-dom';
import { Cable, Server, Volume2, CheckCircle2, Building2, Camera } from 'lucide-react';
import BackgroundOverlay from '../components/BackgroundOverlay';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

export default function Diensten() {
  const services = [
    {
      icon: Cable,
      title: 'Netwerkbekabeling (Cat6/Cat6A)',
      description: 'Cat6/Cat6A bekabeling voor 1-10 Gbps. Juiste categorie, afstanden en bandbreedte. Aandacht voor EMI/crosstalk, PoE en strakke patchkasten. Gecertificeerd met meten, labels en schema\'s.',
      link: '/diensten/netwerkbekabeling',
      features: [
        'Cat6A: 10 Gbps tot 100m (~500 MHz)',
        'Cat6: 10 Gbps tot ~55m (~250 MHz)',
        'Aandacht voor EMI/crosstalk en PoE',
        'Strakke patchkasten en routeplanning',
        'Gecertificeerde oplevering met meetrapporten',
      ],
    },
    {
      icon: Volume2,
      title: 'Audiokabels',
      description: 'Trek/afmontage audiokabels voor vaste installaties. Gebalanceerde lijnen, storingsarme routes en netjes afgewerkt. Gelabeld, gedocumenteerd en klaar voor de audio-installateur.',
      link: '/diensten/audiokabels',
      features: [
        'Trekken en monteren audiokabels',
        'Gebalanceerde lijnen, storingsvrij',
        'Netjes afgewerkt en gelabeld',
        'Gedocumenteerd voor audio-partner',
        'Voorwerk - installateur doet inregeling',
      ],
    },
    {
      icon: Camera,
      title: 'Camera-bekabeling',
      description: 'Bekabelingstrajecten voor IP-camera\'s (PoE). Gebalanceerde trajecten, strakke patchkasten en consistente labeling. Opleverdossier met meetrapporten - MSP/IT sluit apparatuur aan.',
      link: '/diensten/camera-bekabeling',
      features: [
        'Bekabeling voor IP-camera\'s (PoE)',
        'Gebalanceerde trajecten en routes',
        'Strakke patchkasten en labeling',
        'Opleverdossier met meetrapporten',
        'MSP/IT sluit apparatuur aan',
      ],
    },
    {
      icon: Server,
      title: 'Patchkasten & Serverkasten',
      description: 'Strak ingericht en beheersbaar. Kabelmanagement, paneelindeling, labeling en documentatie. Airflow/voeding in acht genomen - ideaal voor beheer door MSP/IT.',
      link: '/diensten/patchkasten',
      features: [
        'Kabelgeleiding & paneelindeling',
        'Labeling en schema\'s',
        'Airflow/voeding in acht genomen',
        'Netjes en beheersbaar',
        'Ideaal voor beheer door MSP/IT',
      ],
    },
    {
      icon: CheckCircle2,
      title: 'Meten & Certificeren',
      description: 'Testen op doorvoer/integriteit. Alles gelabeld en gedocumenteerd. Opleverdossier: meetrapporten, labels, schema\'s - duidelijk voor beheer.',
      link: '/diensten/certificeren',
      features: [
        'Meten op doorvoer en integriteit',
        'Labels en documentatie',
        'Opleverdossier met meetrapporten',
        'Schema\'s en overzichten',
        'Duidelijk voor MSP/IT beheer',
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Databekabeling, Netwerkbekabeling & Infrastructuur | Signaalmakers"
        description="Specialist in databekabeling (Cat6/Cat6A), netwerkbekabeling, audiokabels, camera-bekabeling en patchkasten. Volledig gecertificeerd met meetrapporten. Landelijk actief."
        keywords="databekabeling, netwerkbekabeling, Cat6 bekabeling, Cat6A bekabeling, audiokabels, camera bekabeling, patchkasten, certificeren, infrastructuur bekabeling, MSP partner"
        url="https://signaalmakers.nl/diensten"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Diensten', item: 'https://signaalmakers.nl/diensten' }
        ]}
      />
      <StructuredData type="LocalBusiness" />

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
              Een betrouwbaar netwerk begint bij <strong>goede bekabeling</strong>. Wij leveren <Link to="/diensten/netwerkbekabeling" style={{ fontWeight: 600 }}>netwerk (Cat6/Cat6A)</Link>, <Link to="/diensten/audiokabels" style={{ fontWeight: 600 }}>audiokabels</Link>, <Link to="/diensten/camera-bekabeling" style={{ fontWeight: 600 }}>camera-bekabeling</Link> en <Link to="/diensten/patchkasten" style={{ fontWeight: 600 }}>patchkasten</Link>. We trekken/leggen, monteren af, patchen, labelen en <Link to="/diensten/certificeren" style={{ fontWeight: 600 }}>leveren gecertificeerd</Link> op met meetrapporten. <strong>Wij doen het voorwerk</strong>; <strong>MSP/IT-partners</strong> regelen inregeling en beheer.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
        <BackgroundOverlay variant="mixed" density="medium" color="mixed" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
              Bekabeling voor infrastructuur
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Netwerk (Cat6/Cat6A), audiokabels, camera-bekabeling, patchkasten en certificeren. Alles netjes aangelegd, afgewerkt en gedocumenteerd - klaar voor MSP/IT.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0E243A] mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-[#FF6A00] text-lg font-semibold hover:text-[#E55F00] transition-colors group hover:gap-3 gap-2"
                >
                  Meer informatie
                  <span className="transition-all duration-300">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="network" density="light" color="blue" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
              Waarom Signaalmakers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Wij doen het voorwerk: bekabeling voor infrastructuur. Netjes, gedocumenteerd en klaar voor gebruik. MSP/IT doet inregeling en beheer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Cable,
                title: 'Infra-first',
                desc: 'Netwerk (Cat6/Cat6A), audio, camera - alle bekabeling voor infrastructuur. Geen IT-beheer, geen configuratie. Alleen het voorwerk.',
              },
              {
                icon: CheckCircle2,
                title: 'Gecertificeerd',
                desc: 'Meetrapporten, labels en schema\'s. Transparant en traceerbaar. Alles gedocumenteerd voor beheer door MSP/IT.',
              },
              {
                icon: Building2,
                title: 'Landelijk actief',
                desc: 'Door heel Nederland. Van serverruimtes tot zorg - overal hetzelfde vakmanschap. Voorwerk voor MSP/IT.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Klaar voor betrouwbare bekabeling?
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              MSP's, IT-bedrijven en organisaties door heel Nederland kiezen Signaalmakers voor bekabeling die gewoon werkt. Wij doen het voorwerk - jij doet de rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/offerte"
                className="inline-block bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                Vraag offerte aan
              </Link>
              <Link
                to="/contact"
                className="inline-block border-2 border-[#0E243A] text-[#0E243A] px-8 py-4 rounded-lg hover:bg-[#0E243A] hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                Plan intake
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
