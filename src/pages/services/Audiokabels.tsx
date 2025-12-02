import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../../components/SEO';
import StructuredData from '../../components/StructuredData';
import { Volume2, CheckCircle2, Cable, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export default function Audiokabels() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Wat zijn gebalanceerde audiolijnen?',
      answer: 'Gebalanceerde lijnen gebruiken twee signaaldraden plus een aarde, waardoor storingen worden onderdrukt. Dit resulteert in een schoner audiosignaal, vooral over langere afstanden. Ideaal voor professionele audio-installaties in kantoren, scholen en horeca.'
    },
    {
      question: 'Doen jullie ook de audio-apparatuur installeren?',
      answer: 'Nee, wij doen alleen het kabelwerk: kabels trekken, afmonteren en netjes wegwerken. Audio-installateurs sluiten vervolgens speakers, versterkers en mengpanelen aan en regelen de instellingen. Deze scheiding zorgt voor specialisatie en kwaliteit.'
    },
    {
      question: 'Welke kabeltypen gebruiken jullie?',
      answer: 'Afhankelijk van de toepassing gebruiken we verschillende kabeltypen: XLR-kabels voor microfoons en professionele apparatuur, luidsprekerkabels voor speakers, en multipair kabels voor grotere installaties. We adviseren altijd het beste type voor jouw situatie.'
    },
    {
      question: 'Kunnen audiokabels naast stroomkabels?',
      answer: 'Bij voorkeur niet, om storing (hum/buzz) te voorkomen. We plannen routes zo dat audiokabels minimaal 30cm afstand houden van stroomkabels. Bij kruisingen leggen we deze haaks over elkaar. Dit is cruciaal voor storingsvrije audio.'
    },
    {
      question: 'Hoe voorkom je storingen op audiokabels?',
      answer: 'Door gebruik te maken van gebalanceerde lijnen, afgeschermde kabels en goede routeplanning. We houden afstand van storingsbronnen zoals stroomkabels, TL-verlichting en transformatoren. Ook zorgen we voor een goede massa-aarding.'
    },
    {
      question: 'Voor welke ruimtes is dit geschikt?',
      answer: 'Kantoren (vergaderruimten, open spaces), scholen (aula\u2019s, klaslokalen), horeca (restaurants, cafés), retail (winkels, showrooms) en evenementenlocaties. Overal waar vaste audio-installaties nodig zijn.'
    },
    {
      question: 'Leveren jullie ook documentatie?',
      answer: 'Ja, bij oplevering krijgt je een schema met kabelroutes, aansluitpunten en labeling. Dit maakt onderhoud en uitbreiding door jouw audio-installateur eenvoudig. Alles netjes gedocumenteerd en traceerbaar.'
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
        title="Audiokabels – trek/afmontage voor vaste installaties | Signaalmakers"
        description="Trek en afmontage audiokabels. Gebalanceerde lijnen, storingsvrij, netjes afgewerkt. Voorwerk voor audio-installateur—landelijk."
        keywords="audiokabels, gebalanceerde lijnen, audio bekabeling, vaste installaties, voorwerk audio, MSP audio"
        url="https://signaalmakers.nl/diensten/audiokabels"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Diensten', item: 'https://signaalmakers.nl/diensten' },
          { name: 'Audiokabels', item: 'https://signaalmakers.nl/diensten/audiokabels' }
        ]}
      />
      <StructuredData type="LocalBusiness" />
      <StructuredData type="FAQPage" data={faqSchema} />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Audiokabels voor vaste installaties
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Trek en afmontage audiokabels voor professionele geluidssystemen. Gebalanceerde lijnen, storingsarme routes en netjes afgewerkt. Wij doen het voorwerk – audio-installateurs doen inregeling.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="audio" density="medium" color="mixed" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-amber-50 border-l-4 border-[#FF6A00] rounded-xl p-8 mb-16">
              <div className="flex gap-4 items-start">
                <AlertCircle className="w-8 h-8 text-[#FF6A00] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#0E243A] mb-2">Wij doen alleen het voorwerk</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Wij trekken audiokabels en monteren af. Gebalanceerde lijnen, storingsvrij en netjes gelabeld. Audio-installateurs doen de inregeling en aansluiting van apparatuur. Zo is er een duidelijke scheiding tussen het voorwerk (wij) en de inregeling (audio-partner).
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Wat we leveren
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Audiokabels voor vaste installaties: vergaderruimtes, kantoren, retail en zorg. Gebalanceerde lijnen, storingsarme routes en consistente labeling. Alles gedocumenteerd en klaar voor de audio-installateur.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 rounded-xl p-8">
                <Volume2 className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Wat we leveren</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Trek audiokabels (gebalanceerde lijnen)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Storingsarme routes en afscherming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Netjes afgewerkt en bundeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Consistente labeling en documentatie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Opleverdossier voor audio-partner</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <Cable className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Voor wie</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Audio-installateurs die voorwerk willen uitbesteden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span><Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP's</Link> en IT-bedrijven voor AV-bekabeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Kantoren met vergaderruimtes en auditoriums</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Retail, zorg en onderwijs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              Waarom Signaalmakers voor audiokabels?
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
              Wij leggen de basis voor betrouwbare geluidssystemen. Gebalanceerde lijnen, storingsvrij en netjes afgewerkt. Audio-partners kunnen direct aan de slag met inregeling.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Gebalanceerde lijnen',
                  desc: 'Storingsarme bekabeling volgens de standaard. Aandacht voor EMI en afscherming.',
                },
                {
                  title: 'Netjes afgewerkt',
                  desc: 'Strakke routing, bundeling en labeling. Alles gedocumenteerd en traceerbaar.',
                },
                {
                  title: 'Klaar voor inregeling',
                  desc: 'Audio-installateur kan direct aan de slag. Geen gedoe met voorwerk achteraf.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              Samenwerking met audio-installateurs
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
              Wij werken vaak samen met audio-partners. Wij leggen de kabels en monteren af – zij installeren apparatuur en regelen in. Duidelijke scheiding tussen voorwerk en inregeling.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#FF6A00] rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#0E243A] mb-4">Gebalanceerde lijnen voor vaste installaties</h3>
              <p className="text-gray-700 leading-relaxed">
                Wij trekken gebalanceerde audiokabels voor professionele installaties. Storingsarme routes, afscherming tegen EMI en netjes afgewerkt. Alles gelabeld en gedocumenteerd. Zo kan jouw audio-partner direct aan de slag met inregeling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-12 text-center">
              Veelgestelde vragen
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
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
              Klaar voor audiokabels?
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
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
