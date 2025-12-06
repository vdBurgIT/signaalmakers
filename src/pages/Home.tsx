import { Link } from 'react-router-dom';
import {
  Cable,
  Server,
  Volume2,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useState } from 'react';
import BackgroundOverlay from '../components/BackgroundOverlay';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import NetherlandsMap from '../components/NetherlandsMap';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);

  const services = [
    {
      icon: Cable,
      title: 'Netwerkbekabeling Cat6/Cat6A',
      description: 'Cat6/Cat6A bekabeling voor 1–10 Gbps. Professioneel aangelegd, netjes afgewerkt en klaar voor stabiele verbindingen. Voorwerk voor MSP/IT — wij leveren de infra.',
      link: '/diensten/netwerkbekabeling',
    },
    {
      icon: Server,
      title: 'Patchkasten',
      description: 'Strak ingericht en beheersbaar. Kabelmanagement, paneelindeling, labeling en documentatie. Overzicht en controle voor jouw IT-beheer.',
      link: '/diensten/patchkasten',
    },
    {
      icon: Volume2,
      title: 'Audiokabels',
      description: 'Audiokabels voor professionele installaties. Storingsvrije routes, netjes afgewerkt en gedocumenteerd. Infra-voorwerk voor audio-partners.',
      link: '/diensten/audiokabels',
    },
    {
      icon: CheckCircle2,
      title: 'Meten & Certificeren',
      description: 'Praktische oplevercheck: functioneel getest, gelabeld en opgeleverd met kabelplan. Transparant en traceerbaar - klaar voor beheer door MSP/IT.',
      link: '/diensten/certificeren',
    },
  ];

  const faqs = [
    {
      question: 'Doen jullie ook inregeling en apparatuur?',
      answer: 'Nee. Wij doen bekabeling en voorwerk: kabels trekken, afmonteren, labelen en certificeren. MSP/IT-partners doen de inregeling en het beheer van apparatuur.',
    },
    {
      question: 'Zijn jullie landelijk actief?',
      answer: 'Ja, wij werken door heel Nederland. Van serverruimtes en kantoren tot retail, magazijnen en zorg/onderwijs.',
    },
    {
      question: 'Cat6 of Cat6A - wat is het verschil?',
      answer: 'Cat6A: 10 Gbps tot 100 meter (~500 MHz). Cat6: 10 Gbps tot ~55 meter (~250 MHz). Voor toekomstbestendigheid adviseren we meestal Cat6A.',
    },
    {
      question: 'Hoe leveren jullie op?',
      answer: 'Altijd functioneel getest, gelabeld en opgeleverd met een duidelijk kabelplan. Alles gedocumenteerd en traceerbaar - klaar voor beheer door jouw MSP/IT-partner.',
    },
  ];

  // Import echte blog posts
  const blogPosts = [
    {
      title: 'Waarom MSP-bedrijven baat hebben bij een vaste bekabelingspartner',
      excerpt: 'Voor MSP-bedrijven is een betrouwbare bekabelingspartner goud waard. Lees hoe SIGNAALMAKERS als specialist in netwerkbekabeling de fysieke laag verzorgt.',
      date: '28 november 2025',
      slug: 'msp-bekabelingspartner',
    },
    {
      title: 'Waarom netwerkbekabeling de belangrijkste laag van je IT-omgeving is',
      excerpt: 'Veel bedrijven investeren in dure routers en switches, maar vergeten de basis: de netwerkbekabeling. Toch is dit de fysieke laag waarop alles draait.',
      date: '28 november 2025',
      slug: 'netwerkbekabeling-belangrijkste-laag',
    },
    {
      title: 'Wat is wifi-bekabeling en waarom heb je datakabels nodig voor goede wifi?',
      excerpt: 'Draadloos internet werkt toch zonder kabels? Ja, maar voor een professioneel wifi-netwerk heb je juist bekabeling nodig.',
      date: '21 november 2025',
      slug: 'wifi-bekabeling-uitgelegd',
    },
  ];

  return (
    <>
      <SEO
        title="SIGNAALMAKERS – Databekabeling & Netwerkbekabeling (Cat6/Cat6A) | Landelijk"
        description="Specialist in databekabeling en netwerkbekabeling (Cat6/Cat6A), audiokabels, camera-bekabeling en patchkasten. Functioneel getest en opgeleverd met kabelplan. Landelijk actief."
        keywords="databekabeling, netwerkbekabeling, Cat6 bekabeling, Cat6A bekabeling, audiokabels, camera bekabeling, patchkasten, certificeren, labeling, infrastructuur bekabeling, MSP partner, voorwerk bekabeling"
        url="https://signaalmakers.nl/"
      />
      <StructuredData type="LocalBusiness" />
      <StructuredData type="WebSite" />
      <div>
      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#FF6A00] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-wifi" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
                <g transform="translate(150, 150)">
                  <circle cx="0" cy="0" r="4" fill="white" opacity="0.4" />
                  <path d="M -40 0 A 40 40 0 0 1 40 0" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
                  <path d="M -60 0 A 60 60 0 0 1 60 0" stroke="white" strokeWidth="2" fill="none" opacity="0.2" />
                  <path d="M -80 0 A 80 80 0 0 1 80 0" stroke="white" strokeWidth="2" fill="none" opacity="0.1" />
                </g>
              </pattern>
              <radialGradient id="hero-glow">
                <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-wifi)" />
            <circle cx="70%" cy="40%" r="150" fill="url(#hero-glow)" />
            <circle cx="30%" cy="70%" r="120" fill="url(#hero-glow)" />
          </svg>
        </div>

        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-[0.04] pointer-events-none hidden lg:block">
          <svg width="200" height="400" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 50 L 150 100 L 50 150 L 100 200 L 50 250 L 150 300 L 50 350" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="10,15" />
            <circle cx="50" cy="50" r="8" fill="white" />
            <circle cx="150" cy="100" r="8" fill="white" />
            <circle cx="50" cy="150" r="8" fill="white" />
            <circle cx="100" cy="200" r="8" fill="white" />
            <circle cx="50" cy="250" r="8" fill="white" />
            <circle cx="150" cy="300" r="8" fill="white" />
            <circle cx="50" cy="350" r="8" fill="white" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Databekabeling &amp; netwerkbekabeling door heel Nederland
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Specialist in <strong>databekabeling</strong> en <strong>netwerkbekabeling</strong> (Cat6/Cat6A), audiokabels en camera-bekabeling. We trekken kabels, monteren af, labelen en leveren functioneel getest op met kabelplan. Voor <Link to="/sectoren/serverruimtes" style={{ fontWeight: 600 }}>serverruimtes</Link>, <Link to="/sectoren/kantoren" style={{ fontWeight: 600 }}>kantoren</Link>, <Link to="/sectoren/retail" style={{ fontWeight: 600 }}>retail/horeca</Link>, <Link to="/sectoren/magazijn" style={{ fontWeight: 600 }}>magazijnen</Link> en <Link to="/sectoren/onderwijs" style={{ fontWeight: 600 }}>onderwijs/zorg</Link>. Wij doen het voorwerk — <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP/IT-partners</Link> regelen inregeling en beheer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/offerte"
                  className="bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold text-lg text-center shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Vraag offerte aan
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0E243A] transition-all duration-300 font-semibold text-lg text-center"
                >
                  Plan intake
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-[#FF6A00] to-[#E55F00] p-6 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                      <Cable className="w-16 h-16 text-white" />
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                      <Server className="w-16 h-16 text-white" />
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                      <Volume2 className="w-16 h-16 text-white" />
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
        <BackgroundOverlay variant="mixed" density="medium" color="mixed" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E243A] mb-6">
              Bekabeling voor infrastructuur
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Een betrouwbaar netwerk begint bij <strong>goede bekabeling</strong>. Wij leveren <Link to="/diensten/netwerkbekabeling" style={{ fontWeight: 600 }}>netwerk (Cat6/Cat6A)</Link>, <Link to="/diensten/audiokabels" style={{ fontWeight: 600 }}>audiokabels</Link>, <Link to="/diensten/camera-bekabeling" style={{ fontWeight: 600 }}>camera-bekabeling</Link> en <Link to="/diensten/patchkasten" style={{ fontWeight: 600 }}>patchkasten</Link>. Alles <Link to="/diensten/certificeren" style={{ fontWeight: 600 }}>functioneel getest en opgeleverd met kabelplan</Link>. <strong>Wij doen het voorwerk</strong>; <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP/IT-partners</Link> regelen <strong>inregeling en beheer</strong>.
            </p>
          </div>

          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0E243A] mb-4 min-h-[56px] flex items-center leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-[#FF6A00] text-base font-semibold hover:text-[#E55F00] transition-colors group-hover:gap-3 gap-2 mt-auto"
                  >
                    Meer informatie
                    <span className="transition-all duration-300">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="network" density="medium" color="blue" />

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E243A] text-center mb-6">
            Waarom SIGNAALMAKERS
          </h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Bekabeling is ons vak. Netjes, gedocumenteerd en klaar voor gebruik. Wij doen het voorwerk - jij als MSP/IT(er) doet de rest.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Cable, title: 'Infra-first', desc: 'Cat6/Cat6A, audio, camera - alle bekabeling voor infrastructuur. Professioneel aangelegd en afgewerkt.' },
              { icon: CheckCircle2, title: 'Praktisch opgeleverd', desc: 'Functioneel getest met meetrapporten, labels en kabelplan. Transparant en traceerbaar voor beheer door MSP/IT.' },
              { icon: Server, title: 'Strakke patchkasten', desc: 'Kabelmanagement, paneelindeling en labeling. Overzichtelijk en beheersbaar.' },
              { icon: Building2, title: 'Landelijk actief', desc: 'Door heel Nederland. Van serverruimtes tot zorg - overal hetzelfde vakmanschap.' },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0E243A] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E243A] text-center mb-6">
            Voor wie werken wij?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Wij werken enkel voor MSP's en ICT-bedrijven. Ben je geen MSP of ICT-bedrijf maar heb je wel behoefte aan goede bekabeling? Dan brengen we je graag in contact met een van onze partners.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0E243A] mb-6">Voor MSP's & IT-partners</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Wij zijn geen concurrent, maar jouw bekabelingspartner. Wij leveren het voorwerk: alle bekabeling voor infrastructuur. Jij doet inregeling en beheer.
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Netwerk, audio en camera-bekabeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Patchkasten: strak en beheersbaar</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Functioneel getest met kabelplan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Jij doet inregeling, wij het voorwerk</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center mb-6">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0E243A] mb-6">Voor bedrijven & organisaties</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Wij werken samen met jouw MSP of IT-partner. Wij regelen de bekabeling, zodat jouw IT-partner direct verder kan. Heb je nog geen IT-partner voor inregeling en beheer? Dan brengen we je graag in contact via ons betrouwbare partnernetwerk.
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Serverruimtes, kantoren, retail, zorg</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Samenwerking met jouw MSP/IT-partner</span>
                </li>
                {/* <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Alleen bekabeling, geen IT-beheer</span>
                </li> */}
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Opleverdossier met kabelplan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0E243A] to-[#1a3a5c]" id="werkgebied">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6">
            Waar we werken
          </h2>
          <p className="text-lg md:text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
            Heel Nederland. Van Rotterdam tot Groningen, van Amsterdam tot Maastricht. Bekabeling voor infrastructuur: netwerk, audio en camera. Voor MSP's, IT-bedrijven, serverruimtes, kantoren, retail, magazijnen en zorg.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              {/* Kaart */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <NetherlandsMap
                    hoveredProvince={hoveredProvince}
                    onProvinceHover={setHoveredProvince}
                  />
                </div>
              </div>

              {/* Tekst naast de kaart */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Landelijke dekking
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Wij werken in alle 12 provincies. Bekabeling voor infrastructuur (netwerk, audio, camera) voor serverruimtes, kantoren, retail, magazijnen en zorg.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Groningen', 'Friesland', 'Drenthe', 'Overijssel', 'Flevoland', 'Gelderland', 'Utrecht', 'Noord-Holland', 'Zuid-Holland', 'Zeeland', 'Noord-Brabant', 'Limburg'].map((provincie) => (
                    <div
                      key={provincie}
                      onMouseEnter={() => setHoveredProvince(provincie)}
                      onMouseLeave={() => setHoveredProvince(null)}
                      className={`backdrop-blur-sm rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
                        hoveredProvince === provincie
                          ? 'bg-[#FF6A00] text-white'
                          : 'bg-white/10 text-white/90 hover:bg-white/20'
                      }`}
                    >
                      {provincie}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E243A] text-center mb-16">
            Laatste blogs
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {blogPosts.slice(0, 3).map((post, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="h-48 bg-gradient-to-br from-[#0E243A] to-[#1a3a5a] flex items-center justify-center">
                  <Cable className="w-16 h-16 text-white/30 group-hover:text-white/50 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0E243A] mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-[#FF6A00] font-semibold hover:text-[#E55F00] transition-colors group-hover:gap-3 gap-2"
                  >
                    Lees meer
                    <span className="transition-all duration-300">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/blog"
              className="inline-block bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              Alle blogs bekijken
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0E243A] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
            Veelgestelde vragen
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 rounded-xl backdrop-blur hover:bg-white/15 transition-colors duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0 text-[#FF6A00]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0 text-[#FF6A00]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-300">
                    <p className="leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/faq"
              className="inline-block bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              Meer vragen? Bekijk onze FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
