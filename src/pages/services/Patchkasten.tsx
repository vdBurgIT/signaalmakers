import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../../components/SEO';
import StructuredData from '../../components/StructuredData';
import { Server, CheckCircle2, LayoutGrid, FileCheck, ChevronDown, ChevronUp } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export default function Patchkasten() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Wat is het verschil tussen een patchkast en een serverkast?',
      answer: 'Een patchkast bevat voornamelijk patchpanelen, switches en kabelmanagement voor netwerkbekabeling. Een serverkast bevat servers en heeft meer focus op koeling, voeding en beveiliging. Beide gebruiken vaak dezelfde 19-inch rack standaard maar met verschillende inrichting.'
    },
    {
      question: 'Hoeveel ruimte heb ik nodig voor een patchkast?',
      answer: 'Dat hangt af van het aantal aansluitpunten. Voor 24-48 poorten volstaat vaak een 12U wandkast. Grotere installaties (100+ punten) vereisen 42U vloerkasten. We adviseren altijd 30% extra ruimte voor toekomstige uitbreidingen en kabelmanagement.'
    },
    {
      question: 'Wat is kabelmanagement en waarom is het belangrijk?',
      answer: 'Kabelmanagement zijn systemen (kanalen, ringen, bundels) die kabels netjes en gestructureerd houden. Het voorkomt verwarring, beschadiging en airflow-problemen. Goed kabelmanagement bespaart uren werk bij onderhoud en uitbreidingen omdat alles traceerbaar blijft.'
    },
    {
      question: 'Leveren jullie ook de patchkast zelf?',
      answer: 'Nee, wij richten bestaande kasten in of werken met door u/MSP geleverde kasten. We adviseren wel over afmetingen, specs en merken. Dit houdt onze focus op vakmanschap: opbouw, bekabeling, labeling en documentatie.'
    },
    {
      question: 'Hoe belangrijk is airflow in een patchkast?',
      answer: 'Zeer belangrijk. Slechte airflow leidt tot oververhitting van switches en apparatuur, wat levensduur verkort en storingen veroorzaakt. We houden rekening met voor/achter routing, ventilatie-eisen en warmteafvoer bij opbouw van de kast.'
    },
    {
      question: 'Kunnen jullie bestaande patchkasten opruimen en reorganiseren?',
      answer: 'Ja, dat is een van onze meest gevraagde diensten. We verwijderen dode kabels, reorganiseren patchpanelen, verbeteren kabelmanagement en documenteren alles opnieuw. Vaak werken we buiten kantooruren om verstoring te minimaliseren.'
    },
    {
      question: 'Wat kost het opruimen van een patchkast?',
      answer: 'Dat hangt af van de complexiteit en omvang. Een standaard 24-poorts kast opruimen en reorganiseren kost €400-800. Grotere kasten (100+ poorten) of zeer vervuilde situaties kosten meer. Vraag een offerte aan voor een exacte prijsopgave.'
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
        title="Patchkast opbouwen en optimaliseren - Overzichtelijk en beheersbaar | Signaalmakers"
        description="Patchkast opruimen, opbouwen en optimaliseren. Oude rommel eruit, alles netjes gebundeld, gelabeld en gedocumenteerd. Voor MSP's en bedrijven in heel Nederland."
        keywords="patchkast opbouwen, patchkast opruimen, kabelmanagement, patchpanel, serverschakel, MSP patchkast"
        url="https://signaalmakers.nl/diensten/patchkasten"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Diensten', item: 'https://signaalmakers.nl/diensten' },
          { name: 'Patchkasten', item: 'https://signaalmakers.nl/diensten/patchkasten' }
        ]}
      />
      <StructuredData type="LocalBusiness" />
      <StructuredData type="FAQPage" data={faqSchema} />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Patchkast-opbouw & optimalisatie
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              De patchkast is het hart van het netwerk. Als dat niet klopt, heb je problemen. Wij maken het netjes, logisch en beheersbaar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="network" density="medium" color="blue" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Wat we leveren
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Strak ingerichte <Link to="/diensten/patchkasten" style={{ fontWeight: 600 }}>patchkasten</Link> en serverkasten. Kabelmanagement, paneelindeling, labeling en documentatie. Airflow/voeding in acht genomen – ideaal voor beheer door <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP/IT</Link>.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 rounded-xl p-8">
                <Server className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Wat we doen</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Oude rommel en overbodige bekabeling opruimen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Patchkast opnieuw opbouwen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Kabelmanagement en bundeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Labelen van alle aansluitingen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Documenteren van de eindopstelling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <LayoutGrid className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Resultaat</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Overzichtelijke kast waar je snel mee kunt werken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span><Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP</Link> kan sneller werken, minder fouten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Makkelijker beheer in de toekomst</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Minder storingen door foute aansluitingen</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#FF6A00] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Waarom een strakke patchkast?</h3>
              <p className="text-gray-700 leading-relaxed">
                Een rommelige patchkast kost tijd en geld. Fouten traceren duurt langer, uitbreidingen zijn lastig en de kans op storingen groeit. Strakke patchkasten met kabelmanagement, labeling en schema&apos;s besparen uren werk bij onderhoud en uitbreidingen. Ideaal voor beheer door MSP/IT.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-12 text-center">
              Voor en na
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-red-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 text-2xl font-bold">✗</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0E243A]">Voor onze opruiming</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    <span>Losse kabels en slechte routing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    <span>Geen labeling of documentatie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    <span>Overbodige en dode kabels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    <span>Moeilijk om fouten te traceren</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    <span>Uitbreidingen worden steeds lastiger</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0E243A]">Na onze opbouw</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Nette kabels en routing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Alles gelabeld en gedocumenteerd</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Alleen werkende kabels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Fouten snel te vinden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Makkelijk uit te breiden</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-12 text-center">
              Voor MSP's
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
              Een nette patchkast betekent dat jouw <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>technici</Link> sneller kunnen werken. Minder tijd zoeken, minder fouten, meer grip op het netwerk.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: FileCheck, title: 'Sneller werken', desc: 'Geen tijd verliezen met zoeken naar de juiste kabel. Alles is gelabeld en logisch opgebouwd.' },
                { icon: CheckCircle2, title: 'Minder fouten', desc: 'Duidelijke nummering en documentatie voorkomt dat kabels verkeerd worden aangesloten.' },
                { icon: LayoutGrid, title: 'Beter beheer', desc: 'Je kunt in één oogopslag zien wat waar zit. Uitbreidingen plannen wordt makkelijker.' },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
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
              Patchkast opruimen?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Neem contact op en we plannen een moment in om jouw patchkast op te ruimen en opnieuw op te bouwen.
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
