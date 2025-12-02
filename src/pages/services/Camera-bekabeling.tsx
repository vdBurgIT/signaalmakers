import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../../components/SEO';
import StructuredData from '../../components/StructuredData';
import { Camera, CheckCircle2, Cable, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export default function CameraBekabealing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Wat is PoE en waarom is het handig voor camera\u2019s?',
      answer: 'PoE (Power over Ethernet) levert zowel data als stroom over dezelfde netwerkkabel. Dit betekent geen aparte stroomkabels nodig voor IP-camera\u2019s, wat installatie eenvoudiger en goedkoper maakt. Ideaal voor plafond- en buitencamera\u2019s.'
    },
    {
      question: 'Installeren jullie ook de camera\u2019s zelf?',
      answer: 'Nee, wij leggen alleen de bekabeling. Beveiligingsbedrijven of MSP\u2019s monteren de camera\u2019s, sluiten ze aan en regelen de configuratie. Wij zorgen voor PoE-geschikte bekabeling die klaar is voor aansluiting.'
    },
    {
      question: 'Welke afstand kan een camera-kabel overbruggen?',
      answer: 'Cat6/Cat6A ondersteunt PoE tot 100 meter. Voor langere afstanden adviseren we PoE-extenders of switches op tussenposities. We plannen altijd routes binnen deze specificaties voor optimale prestaties.'
    },
    {
      question: 'Kunnen jullie ook buitencamera\u2019s bekabelen?',
      answer: 'Ja, we trekken bekabeling voor zowel binnen- als buitencamera\u2019s. Bij buitentrajecten gebruiken we afgeschermde kabel (Cat6A S/FTP) en beschermende buis waar nodig. Alles volgens best practices voor duurzaamheid.'
    },
    {
      question: 'Hoeveel camera\u2019s kunnen op één switch?',
      answer: 'Dit hangt af van het PoE-budget van de switch en het stroomverbruik per camera. Een standaard PoE+ switch (30W/poort) kan doorgaans 8-24 camera\u2019s voeden. We adviseren altijd de juiste switchcapaciteit voor jouw aantal camera\u2019s.'
    },
    {
      question: 'Leveren jullie ook schema\u2019s van de camera-posities?',
      answer: 'Ja, bij oplevering krijgt u een volledig schema met alle camera-posities, poortnummers in de patchkast en labeling. Dit maakt beheer en uitbreiding door jouw beveiligingsbedrijf eenvoudig.'
    },
    {
      question: 'Werkt PoE-bekabeling ook voor andere apparaten?',
      answer: 'Ja, dezelfde bekabeling kan ook gebruikt worden voor PoE-toegangspunten (wifi), IP-telefoons en andere PoE-apparaten. Cat6A bekabeling is multifunctioneel inzetbaar voor het hele netwerkinfrastructuur.'
    }
  ];

  const faqSchema = {
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <SEO
        title="Camera-bekabeling – PoE trajecten voor IP-camera's | Signaalmakers"
        description="Bekabeling voor IP-camera's met PoE. Gebalanceerde trajecten, strakke patchkasten en meetrapporten. Voorwerk voor MSP/IT—landelijk."
        keywords="camera bekabeling, IP camera bekabeling, PoE camera, beveiligingscamera bekabeling, infrastructuur camera"
        url="https://signaalmakers.nl/diensten/camera-bekabeling"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Diensten', item: 'https://signaalmakers.nl/diensten' },
          { name: 'Camera-bekabeling', item: 'https://signaalmakers.nl/diensten/camera-bekabeling' }
        ]}
      />
      <StructuredData type="LocalBusiness" />
      <StructuredData type="FAQPage" data={faqSchema} />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Camera-bekabeling voor IP-camera's
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Bekabelingstrajecten voor IP-camera's met PoE. Gebalanceerde trajecten, strakke patchkasten en consistente labeling. Wij doen het voorwerk – MSP/IT sluit apparatuur aan en regelt in.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="data" density="medium" color="grey" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Wat we leveren
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Bekabelingstrajecten voor IP-camera's op basis van <Link to="/diensten/netwerkbekabeling" style={{ fontWeight: 600 }}>Cat6/Cat6A</Link>. PoE-geschikt, gebalanceerde routes en strakke afwerking in de <Link to="/diensten/patchkasten" style={{ fontWeight: 600 }}>patchkast</Link>. Alles gedocumenteerd en klaar voor MSP/IT.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 rounded-xl p-8">
                <Camera className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Wat we leveren</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Trek bekabeling voor IP-camera's (PoE)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Cat6/Cat6A trajecten (PoE-geschikt)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Gebalanceerde routes en afscherming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Strakke afwerking in patchkast</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Consistente labeling en documentatie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Opleverdossier met meetrapporten</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <Cable className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Voor wie</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span><Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP's</Link> en IT-bedrijven voor camera-installaties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Beveiligingsbedrijven die voorwerk willen uitbesteden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Kantoren, retail en magazijnen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Onderwijs, zorg en publieke ruimtes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#FF6A00] rounded-xl p-8 mb-16">
              <div className="flex gap-4 items-start">
                <Zap className="w-8 h-8 text-[#FF6A00] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#0E243A] mb-2">PoE-geschikt bekabelen</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Wij trekken Cat6/Cat6A bekabeling geschikt voor PoE (Power over Ethernet). Zo kunnen IP-camera's zowel data als stroom over één kabel ontvangen. Aandacht voor EMI/crosstalk en juiste afstanden. Alles <Link to="/diensten/certificeren" style={{ fontWeight: 600 }}>getest en gedocumenteerd</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              Waarom Signaalmakers voor camera-bekabeling?
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
              Wij leggen de basis voor betrouwbare camerasystemen. PoE-geschikt, gebalanceerde routes en strakke afwerking. MSP/IT kan direct aan de slag met configuratie.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">PoE-geschikt</h3>
                <p className="text-gray-600 leading-relaxed">
                  Cat6/Cat6A bekabeling geschikt voor PoE. Data en stroom over één kabel. Aandacht voor afstanden en EMI.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Strakke afwerking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gebalanceerde routes, bundeling en labeling. Strakke patchkasten en consistente documentatie.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Klaar voor MSP/IT</h3>
                <p className="text-gray-600 leading-relaxed">
                  Opleverdossier met meetrapporten en schema&apos;s. MSP/IT kan direct camera&apos;s aansluiten en configureren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              Samenwerking met MSP en beveiligingsbedrijven
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
              Wij werken vaak samen met beveiligingsbedrijven en MSP's. Wij leggen de bekabeling – zij sluiten camera's aan en regelen configuratie. Duidelijke scheiding tussen voorwerk en inregeling.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#FF6A00] rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#0E243A] mb-4">Wij doen alleen het voorwerk</h3>
              <p className="text-gray-700 leading-relaxed">
                Wij trekken bekabeling voor IP-camera's en monteren af in de patchkast. Gebalanceerde trajecten, PoE-geschikt en netjes gelabeld. Beveiligingsbedrijven en MSP's doen de aansluiting en configuratie van camera's. Zo is er een duidelijke scheiding tussen het voorwerk (wij) en de inregeling (MSP/beveiliging).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-12 text-center">
              Veelgestelde vragen
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-[#0E243A] pr-8">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#FF6A00] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#FF6A00] flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0E243A] to-[#1a3a5a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar voor camera-bekabeling?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Vraag een offerte aan of kies voor een abonnement met gegarandeerde capaciteit en kortingen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/abonnementen"
                className="bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                Bekijk abonnementen
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0E243A] transition-all duration-300 font-semibold text-lg"
              >
                Vraag offerte
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
