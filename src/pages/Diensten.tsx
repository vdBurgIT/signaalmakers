import { Link } from 'react-router-dom';
import { Cable, Server, Volume2, CheckCircle2, Zap, Clock, Building2 } from 'lucide-react';
import BackgroundOverlay from '../components/BackgroundOverlay';
import SEO from '../components/SEO';

export default function Diensten() {
  const services = [
    {
      icon: Cable,
      title: 'Databekabeling & UTP-kabels',
      description: (
        <>
          Professionele netwerkbekabeling met <Link to="/diensten/databekabeling" style={{ fontWeight: 600 }}>Cat6, Cat6A en Cat7</Link> UTP-kabels. Wij trekken datapunten van werkplek naar <Link to="/diensten/patchkasten" style={{ fontWeight: 600 }}>patchkast</Link>, monteren netjes af, labelen en <Link to="/diensten/testen" style={{ fontWeight: 600 }}>testen</Link> alles. Structured cabling volgens de normen voor een betrouwbaar bekabeld netwerk.
        </>
      ) as any,
      link: '/diensten/databekabeling',
      features: [
        'Datapunten aanleggen van werkplek naar patchkast',
        'Cat6, Cat6A en Cat7 bekabeling',
        'Kabelroutes en kabelmanagement',
        'Professioneel afmonteren, labelen en testen',
        'Netjes bundelen volgens structured cabling normen',
      ],
    },
    {
      icon: Server,
      title: 'Patchkast Bekabeling & Opbouw',
      description: (
        <>
          <Link to="/diensten/patchkasten" style={{ fontWeight: 600 }}>Patchkasten opbouwen</Link>, opruimen en moderniseren. Oude rommel eruit, overzichtelijk kabelmanagement volgens structured cabling principes. Alles netjes gelabeld en <Link to="/diensten/testen" style={{ fontWeight: 600 }}>gedocumenteerd</Link> voor jouw <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP of IT-partner</Link>.
        </>
      ) as any,
      link: '/diensten/patchkasten',
      features: [
        'Patchkast opruimen en volledig herbouwen',
        'Professioneel kabelmanagement en bundeling',
        'Labeling en volledige documentatie',
        'Overzichtelijk voor snelle troubleshooting',
        'Klaar voor gebruik door jouw MSP',
      ],
    },
    {
      icon: Volume2,
      title: 'Signaallijnen & AV-bekabeling',
      description: 'AV-bekabeling en signaallijnen voor vergaderruimtes, presentatieruimtes en audiosystemen. Wij leggen alleen de kabels en bereiden aansluitpunten voor. Geen apparatuur-installatie, geen AV-configuratie.',
      link: '/diensten/audio',
      features: [
        'Audiokabels en signaallijnen trekken',
        'Kabelroutes voor AV-systemen voorbereiden',
        'Aansluitpunten professioneel afmonteren',
        'Alleen bekabeling, geen apparatuur-installatie',
        'Documentatie voor de AV-installateur',
      ],
    },
    {
      icon: CheckCircle2,
      title: 'Testen & Documentatie',
      description: 'Elk bekabelingsproject wordt professioneel getest en opgemeten. Opleverrapport met alle metingen, kabelplan, nummering en labeling. Bewijs dat het netwerk werkt en toekomstbestendig is.',
      link: '/diensten/testen',
      features: [
        'Professionele meting per UTP-kabel',
        'Complete nummering en labeling',
        'Opleverrapport met kabelplan',
        'Documentatie voor netwerk infrastructuur',
        'Bewijs van correcte werking',
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Netwerkbekabeling Diensten - Databekabeling & Patchkasten | Signaalmakers"
        description="Professionele netwerkbekabeling diensten in Nederland: UTP-bekabeling Cat6/Cat6A/Cat7, patchkast opbouw, signaallijnen en structured cabling. Alleen de fysieke netwerklaag, geen IT-beheer of configuratie. Voor MSP's en bedrijven."
        keywords="netwerkbekabeling diensten, databekabeling, UTP-bekabeling, patchkast opbouw, structured cabling, datapunten aanleggen, kabelmanagement, bekabeld netwerk, Cat6 bekabeling, Cat6A bekabeling, netwerk infrastructuur"
        url="https://signaalmakers.nl/diensten"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Diensten', item: 'https://signaalmakers.nl/diensten' }
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
              Netwerkbekabeling & Structured Cabling
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Wij doen alleen <Link to="/diensten/databekabeling" style={{ fontWeight: 600 }}>netwerkbekabeling en UTP-kabels</Link> trekken. Van <Link to="/diensten/databekabeling" style={{ fontWeight: 600 }}>datapunten aanleggen</Link> en <Link to="/diensten/patchkasten" style={{ fontWeight: 600 }}>patchkast bekabeling</Link> tot kabelmanagement en <Link to="/diensten/audio" style={{ fontWeight: 600 }}>AV-bekabeling</Link>. Alleen de fysieke netwerklaag — geen IT-beheer, geen apparatuur, geen configuratie. Voor <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP's, ICT-bedrijven</Link> en zakelijke klanten in heel Nederland.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
        <BackgroundOverlay variant="mixed" density="medium" color="mixed" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
              Onze Diensten
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professionele netwerkbekabeling voor een stabiel en betrouwbaar bekabeld netwerk. Structured cabling volgens de normen, getest en gedocumenteerd.
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
              Waarom Signaalmakers voor netwerkbekabeling
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Wij richten ons 100% op de fysieke netwerklaag. Geen IT-beheer, geen configuratie, geen overlap met jouw MSP. Alleen betrouwbare netwerkbekabeling.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Cable,
                title: 'Alleen bekabeling',
                desc: 'Wij doen geen IT, geen configuratie, geen wifi-planning. Alleen datakabels trekken, patchkasten en signaallijnen. De fysieke netwerklaag, meer niet.',
              },
              {
                icon: CheckCircle2,
                title: 'Getest & gedocumenteerd',
                desc: 'Elk bekabelingsproject wordt professioneel getest en opgemeten. Opleverrapport met kabelplan en metingen. Bewijs dat het netwerk werkt.',
              },
              {
                icon: Building2,
                title: 'Partner van MSP\'s',
                desc: 'Wij zijn geen concurrent, maar jouw bekabelingspartner. Wij leggen de kabels, jullie doen IT-beheer en configuratie. Geen overlap.',
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

      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0E243A] to-[#1a3a5a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Gegarandeerde capaciteit met abonnementen
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Met onze abonnementen heb je gegarandeerde monteurscapaciteit, vaste doorlooptijden en flinke kortingen op uren én materiaal. Geen wachtlijsten, geen gedoe — altijd plek voor jouw bekabelingsprojecten.
            </p>
            <Link
              to="/abonnementen"
              className="inline-block bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              Bekijk abonnementen
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Voor wie is Signaalmakers
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              MSP's die betrouwbare monteurscapaciteit en bekabeling nodig hebben. ICT-bedrijven die kabelwerk willen uitbesteden. Zakelijke klanten die hun netwerk willen moderniseren. Als je wilt dat de fysieke basis van je netwerk klopt: wij leggen de lijnen, jij of je MSP doet de rest.
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
