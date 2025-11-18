import { Link } from 'react-router-dom';
import {
  Wifi,
  Cable,
  Monitor,
  Server,
  Volume2,
  Building2,
  Home as HomeIcon,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useState } from 'react';
import BackgroundOverlay from '../components/BackgroundOverlay';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: Cable,
      title: 'Databekabeling',
      description: 'Professionele netwerkbekabeling Cat6 en Cat6A, nette patchkasten en serverkasten voor een toekomstbestendig bedrijfsnetwerk.',
      link: '/diensten/databekabeling',
    },
    {
      icon: Wifi,
      title: 'Wifi & Netwerk',
      description: 'Professionele wifi-installatie met volledige dekking. Wifi-metingen, access points en optimale prestaties voor kantoor en thuis.',
      link: '/diensten/wifi-netwerk',
    },
    {
      icon: Volume2,
      title: 'Audio-installaties',
      description: 'Audio-installaties voor zakelijk gebruik en thuis. Achtergrondmuziek, plafondluidsprekers en multiroom-systemen.',
      link: '/diensten/audio',
    },
    {
      icon: Monitor,
      title: 'Content Creators',
      description: 'Stabiel netwerk en wifi voor livestreaming en content uploaden. Professionele bekabeling en studio-netwerk voor creators.',
      link: '/content-creators',
    },
  ];

  const faqs = [
    {
      question: 'Voor wie installeert Signaalmakers wifi-netwerken?',
      answer: 'Wij installeren professionele wifi-netwerken en databekabeling voor zowel zakelijke klanten zoals kantoren, winkels en horeca als particulieren die stabiel internet nodig hebben in hun woning, tuinkantoor of schuur.',

    },
    {
      question: 'Hoe lang duurt een professionele wifi-installatie?',
      answer: 'De duur van een wifi-installatie hangt af van de grootte en complexiteit. Een standaard kantoor van 200-300m² met access points en databekabeling leveren we meestal binnen één werkdag op. We starten altijd met een wifi-meting en intake.',

    },
    {
      question: 'Leveren jullie ook netwerkmateriaal en access points?',
      answer: 'Ja, wij leveren alle benodigde netwerkmateriaal: professionele access points, switches, Cat6/Cat6A databekabeling, patchkasten en meer. Alles wordt door onze wifi-monteur geïnstalleerd en geconfigureerd.',

    },
    {
      question: 'In welke regio\'s installeert Signaalmakers wifi-netwerken?',
      answer: 'Wij installeren wifi-netwerken en databekabeling in Zuid-Holland, Noord-Brabant, Utrecht, Gelderland en Overijssel. Denk aan steden als Rotterdam, Den Haag, Dordrecht, Utrecht, Eindhoven, Breda, Tilburg, Arnhem, Nijmegen en omliggende plaatsen. Voor andere regio\'s kunt u contact opnemen.',

    },
  ];

  const blogPosts = [
    {
      title: '5 redenen waarom Cat6A beter is dan Cat5e',
      excerpt: 'Overweegt u nieuwe bekabeling? Ontdek waarom Cat6A de slimme keuze is voor de toekomst.',
      date: '15 maart 2025',
      slug: 'cat6a-vs-cat5e',
    },
    {
      title: 'Wifi voor thuiswerkers: wat heb je echt nodig?',
      excerpt: 'Thuiswerken vraagt om een stabiel netwerk. Wij leggen uit welke oplossingen écht werken.',
      date: '8 maart 2025',
      slug: 'wifi-thuiswerkers',
    },
    {
      title: 'Gastennetwerk: waarom het essentieel is',
      excerpt: 'Bescherm uw bedrijfsnetwerk door bezoekers een apart netwerk te geven. Zo doet u dat.',
      date: '1 maart 2025',
      slug: 'gastennetwerk-essentieel',
    },
  ];

  return (
    <>
      <SEO
        title="Signaalmakers - ICT & Netwerk Oplossingen voor Bedrijven en Particulieren"
        description="Professionele ICT-diensten: WiFi-netwerken, databekabeling, internet & telefonie, hosting, moderne werkplek oplossingen en cybersecurity. Voor zakelijk en particulier."
        keywords="ICT diensten, WiFi netwerk, databekabeling, internet telefonie, hosting, domein, moderne werkplek, cybersecurity, veilig online, wifi monteur, netwerkinstallatie, wifi installatie"
        url="https://signaalmakers.nl/"
      />
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
                Wifi, netwerk en audio die gewoon werkt
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Signaalmakers installeert professionele wifi-netwerken en databekabeling voor bedrijven en particulieren in Zuid-Holland, Noord-Brabant, Utrecht, Gelderland en Overijssel. Van wifi-meting tot complete netwerkinstallatie, alles vakkundig uitgevoerd.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold text-lg text-center shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Plan een intake
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0E243A] transition-all duration-300 font-semibold text-lg text-center"
                >
                  Vraag een offerte
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-[#FF6A00] to-[#E55F00] p-6 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                      <Wifi className="w-16 h-16 text-white" />
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                      <Cable className="w-16 h-16 text-white" />
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                      <Volume2 className="w-16 h-16 text-white" />
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                      <Server className="w-16 h-16 text-white" />
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
              Wat wij doen
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Van wifi-installatie tot complete netwerkbekabeling. Signaalmakers zorgt voor stabiele internetverbindingen en professionele audio-oplossingen in heel Nederland.
            </p>
          </div>

          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                  <div
                    key={index}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover:-translate-y-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0E243A] mb-4 min-h-[56px] flex items-center leading-tight">{service.title}</h3>
                      <p className="text-base text-gray-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-[#FF6A00] text-base font-semibold hover:text-[#E55F00] transition-colors group-hover:gap-3 gap-2 mt-auto"
                      >
                        Meer informatie
                        <span className="transition-all duration-300">→</span>
                      </Link>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF6A00] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network-lines" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 0 50 L 100 50" stroke="white" strokeWidth="0.5" opacity="0.2" strokeDasharray="5,5" />
                <path d="M 50 0 L 50 100" stroke="white" strokeWidth="0.5" opacity="0.2" strokeDasharray="5,5" />
              </pattern>
              <linearGradient id="signal-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="50%" stopColor="white" stopOpacity="0.3" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#network-lines)" />
            <circle cx="20%" cy="30%" r="3" fill="white" opacity="0.4" />
            <circle cx="80%" cy="70%" r="3" fill="white" opacity="0.4" />
            <circle cx="60%" cy="20%" r="2" fill="white" opacity="0.3" />
            <circle cx="30%" cy="80%" r="2" fill="white" opacity="0.3" />
            <path d="M 20% 30% Q 50% 25%, 80% 70%" stroke="url(#signal-gradient)" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
            Voor bedrijven en particulieren
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-[#FF6A00] rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">MKB en zakelijke klanten</h3>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Wifi voor kantoren en bedrijfspanden</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Netwerk voor retail, winkel en horeca</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Wifi-installatie magazijn en logistiek</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Wifi-metingen en netwerkadvies</span>
                </li>
              </ul>
              <Link
                to="/zakelijk"
                className="inline-block bg-[#FF6A00] text-white px-8 py-3 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
              >
                Zakelijke oplossingen
              </Link>
            </div>

            <div className="bg-white/10 rounded-2xl p-10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-[#FF6A00] rounded-xl flex items-center justify-center mb-6">
                <HomeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Particuliere klanten</h3>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Wifi-installatie in hele woning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Wifi in tuinkantoor, schuur en overkapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Audio-installatie huis en tuin</span>
                </li>
              </ul>
              <Link
                to="/particulier"
                className="inline-block bg-[#FF6A00] text-white px-8 py-3 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
              >
                Particuliere oplossingen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="network" density="medium" color="blue" />

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E243A] text-center mb-6">
            Waarom kiezen voor Signaalmakers
          </h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Als wifi-monteur en netwerkspecialist geloven wij in zorgvuldige voorbereiding en vakkundig werk. Zo garanderen we een netwerk dat jarenlang meegaat.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: 1, title: 'Zorgvuldige planning', desc: 'We starten altijd met een uitgebreide intake en professionele wifi-meting om uw situatie in kaart te brengen.' },
              { num: 2, title: 'Professionele wifi-metingen', desc: 'Bij elke wifi-installatie voeren we metingen uit voor optimale access point-plaatsing en netwerkprestaties.' },
              { num: 3, title: 'Nette netwerkinstallatie', desc: 'Databekabeling netjes weggewerkt, access points professioneel gemonteerd en complete documentatie.' },
              { num: 4, title: 'Transparante prijzen', desc: 'Duidelijke offertes zonder verborgen kosten. U weet van tevoren precies wat de wifi-installatie kost.' },
            ].map((item) => (
              <div key={item.num} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg">
                  {item.num}
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
            Werkgebied wifi-monteur
          </h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Als wifi-monteur en netwerkspecialist installeren wij wifi-netwerken en databekabeling in heel Nederland. Onze focus ligt op Zuid-Holland, Noord-Brabant, Utrecht, Gelderland en Overijssel, inclusief steden als Rotterdam, Den Haag, Utrecht, Eindhoven, Breda, Arnhem en omgeving.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {['Zuid-Holland', 'Noord-Brabant', 'Utrecht', 'Gelderland', 'Overijssel', 'Rotterdam', 'Den Haag', 'Eindhoven', 'Breda', 'Arnhem', 'Nijmegen', 'Dordrecht'].map((region) => (
                <div key={region} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <p className="font-bold text-[#0E243A] text-lg">{region}</p>
                </div>
              ))}
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
