import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../../components/SEO';
import StructuredData from '../../components/StructuredData';
import { FileCheck, CheckCircle2, ClipboardList, BarChart3, ChevronDown, ChevronUp } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export default function Certificeren() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Wat houdt certificering in?',
      answer: 'Certificering betekent dat elk kabeltraject wordt getest met professionele meetapparatuur volgens kabelnormen. We controleren doorvoer, signaalverlies, afmontering en integriteit. Je ontvangt meetrapporten die bewijzen dat de bekabeling voldoet aan de specificaties en klaar is voor gebruik.'
    },
    {
      question: 'Waarom is certificering belangrijk?',
      answer: 'Zonder certificering weet niemand of de bekabeling echt presteert zoals verwacht. Certificering voorkomt discussies achteraf, geeft transparantie over kwaliteit en versnelt troubleshooting. Voor MSP\u2019s en IT-beheerders is het essentieel bewijs dat de infrastructuur betrouwbaar is.'
    },
    {
      question: 'Welke normen gebruiken jullie?',
      answer: 'We certificeren volgens kabelnormen en internationale standaarden voor gestructureerde bekabeling. Voor Cat6 testen we tot 250 MHz, voor Cat6A tot 500 MHz. Alle meetrapporten vermelden de toegepaste norm en meetwaarden.'
    },
    {
      question: 'Wat staat er in een meetrapport?',
      answer: 'Elk meetrapport bevat kabellengte, doorvoersnelheid, signaalverlies (insertion loss), reflectie (return loss), crosstalk en afmonteringskwaliteit. Ook zie je of het traject voldoet aan de norm (pass/fail). Rapporten bevatten kabelnummers en locaties voor tracering.'
    },
    {
      question: 'Hoe lang duurt het testen en certificeren?',
      answer: 'Het testen van een enkel traject duurt 2-5 minuten, afhankelijk van lengte en complexiteit. Voor een standaardinstallatie met 20-50 punten rekenen we 1-2 uur testwerk. Het labelen en documenteren neemt extra tijd in beslag, vaak gelijk aan de testtijd.'
    },
    {
      question: 'Krijg ik ook een digitale kopie van de rapporten?',
      answer: 'Ja, alle meetrapporten worden digitaal opgeleverd als PDF. Ook ontvang je schema\u2019s, labels en overzichten in digitale vorm. Zo kun je documentatie delen met MSP/IT-partners en archiveren voor toekomstig beheer en uitbreidingen.'
    },
    {
      question: 'Wat als een kabel niet voldoet aan de norm?',
      answer: 'Als een traject faalt, zoeken we de oorzaak (slechte afmontering, beschadiging, te lang traject). We herstellen het probleem en testen opnieuw tot het traject voldoet. Pas daarna leveren we op — alleen trajecten die aan de norm voldoen worden geaccepteerd.'
    },
    {
      question: 'Zijn de kosten van certificering inbegrepen?',
      answer: 'Ja, meten en certificeren is standaard inbegrepen bij al onze bekabelingstrajecten. Geen verrassingen of extra kosten. Het hoort er gewoon bij — zo garanderen we kwaliteit en transparantie bij elke oplevering.'
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
        title="Meten & Certificeren – oplevering met meetrapporten | SIGNAALMAKERS"
        description="Testen op doorvoer en integriteit. Labels, schema's en opleverdossier. Transparant en traceerbaar — klaar voor MSP/IT."
        keywords="meten certificeren, meetrapporten, bekabeling testen, opleverdossier, labeling, infrastructuur certificering"
        url="https://signaalmakers.nl/diensten/certificeren"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Diensten', item: 'https://signaalmakers.nl/diensten' },
          { name: 'Meten & Certificeren', item: 'https://signaalmakers.nl/diensten/certificeren' }
        ]}
      />
      <StructuredData type="Organization" />
      <StructuredData type="FAQPage" data={faqSchema} />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meten & Certificeren
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Testen op doorvoer en integriteit. Alle kabels gelabeld en gedocumenteerd. Opleverdossier met meetrapporten, schema's en labels – transparant en traceerbaar. Klaar voor beheer door MSP/IT.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="data" density="medium" color="grey" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Wat je krijgt
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Elk traject wordt getest, gedocumenteerd en gelabeld. Opleverdossier met meetrapporten, schema's en labels. Bewijs dat de <Link to="/diensten/netwerkbekabeling" style={{ fontWeight: 600 }}>bekabeling</Link> voldoet aan de norm en klaar is voor beheer door MSP/IT.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 rounded-xl p-8">
                <BarChart3 className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Meten per traject</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Elk kabeltraject wordt getest op doorvoer en integriteit. Professionele meetapparatuur volgens de norm. Bewijs dat alles presteert zoals verwacht.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Doorvoer en bandbreedte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Integriteit en signaalverlies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Afmontering en connecties</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <ClipboardList className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Labels en schema's</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Alle kabels gelabeld en genummerd. Schema's en overzichten voor traceerbaar beheer. Alles gedocumenteerd en klaar voor <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP/IT</Link>.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Consistente labeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Logische nummeringsschema's</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Traceerbaar en beheersbaar</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 md:col-span-2">
                <FileCheck className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Opleverdossier</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Volledig opleverdossier met meetrapporten, labels en schema's. Transparant en traceerbaar. Bewijs dat alle trajecten voldoen aan de norm en klaar zijn voor beheer door MSP/IT.
                </p>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Meetrapporten per traject</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Labels en nummeringsschema's</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Routeschema's en documentatie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Certificering per kabeltraject</span>
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
              Waarom meten en certificeren?
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
              Zonder testen en documentatie weet niemand of de bekabeling voldoet aan de norm. Met een opleverdossier is alles transparant, traceerbaar en klaar voor beheer.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">
                  Vertrouwen voor <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP/IT</Link>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Bewijs dat alles voldoet aan de norm. Labels en schema&apos;s maken beheer eenvoudig en traceerbaar.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Minder nazorg</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fouten worden vooraf opgespoord en opgelost. Geen discussie achteraf over wat wel of niet werkt.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Transparantie</h3>
                <p className="text-gray-600 leading-relaxed">
                  Meetrapporten en documentatie geven volledige transparantie over de kwaliteit van de bekabeling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-[#FF6A00] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Standaard bij elk traject</h3>
              <p className="text-gray-700 leading-relaxed">
                Meten en certificeren is standaard bij elk bekabelingstraject. Geen extra kosten. Het hoort er gewoon bij – zo weet je zeker dat de <Link to="/diensten/netwerkbekabeling" style={{ fontWeight: 600 }}>infrastructuur</Link> voldoet aan de norm en klaar is voor beheer door MSP/IT.
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
                <div key={index} className="bg-white rounded-lg overflow-hidden">
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
              Klaar voor gecertificeerde oplevering?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Vraag een offerte aan of kies voor een abonnement met gegarandeerde capaciteit en kortingen. Alle trajecten worden gemeten, gelabeld en gedocumenteerd.
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
