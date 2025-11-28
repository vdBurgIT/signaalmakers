import { useState } from 'react';
import SEO from '../components/SEO';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackgroundOverlay from '../components/BackgroundOverlay';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = {
    algemeen: [
      {
        question: 'Voor wie doet Signaalmakers bekabeling?',
        answer: (
          <>
            Wij doen bekabelingsprojecten voor <a href="/blog/msp-bekabelingspartner" style={{ color: '#FF6A00', fontWeight: 600 }}>MSP's, ICT-bedrijven</a>, installatiebedrijven en zakelijke klanten. Wij leggen alleen de <a href="/diensten" style={{ color: '#FF6A00', fontWeight: 600 }}>kabels</a>, jullie IT-partner doet de rest. Zo is er geen overlap en kan iedereen doen waar hij goed in is.
          </>
        ),
      },
      {
        question: 'In welke regio\'s is Signaalmakers actief?',
        answer: 'We werken door heel Nederland. Denk aan steden als Rotterdam, Den Haag, Dordrecht, Utrecht, Eindhoven, Breda, Tilburg, Arnhem, Nijmegen, Groningen en omliggende plaatsen. Voor grotere projecten plannen we vooruit.',
      },
      {
        question: 'Hoe snel kunnen jullie beginnen?',
        answer: 'Dat hangt af van de planning en het abonnement. Met een Essential abonnement plannen we binnen 2 weken, met Priority binnen een week en met Express binnen 2 werkdagen. Voor spoed rekenen we €400 extra per dag.',
      },
      {
        question: 'Leveren jullie ook materiaal of alleen arbeid?',
        answer: (
          <>
            We leveren standaard <a href="/diensten/databekabeling" style={{ color: '#FF6A00', fontWeight: 600 }}>Cat6, Cat6A en Cat7 kabels</a>, patchpanels, keystones en labels. Apparatuur zoals switches en routers leveren we niet, dat doet de <a href="/blog/msp-bekabelingspartner" style={{ color: '#FF6A00', fontWeight: 600 }}>MSP of IT-partner</a>. Wij doen alleen de fysieke bekabeling.
          </>
        ),
      },
    ],
    bekabeling: [
      {
        question: 'Wat kost een bekabelingsproject?',
        answer: 'Dat hangt af van het aantal kabels, de afstand en de complexiteit. Voor een standaard kantoor met 20-30 datapunten betaal je ongeveer €2.500-€4.000 excl. BTW, inclusief materiaal, testen en documentatie. Voor een exacte offerte komen we graag langs.',
      },
      {
        question: 'Welke bekabeling gebruiken jullie?',
        answer: (
          <>
            Wij werken uitsluitend met <a href="/diensten/databekabeling" style={{ color: '#FF6A00', fontWeight: 600 }}>Cat6, Cat6A en Cat7 bekabeling</a>. Cat6 ondersteunt tot 1 Gbit/s, Cat6A tot 10 Gbit/s en Cat7 tot 10 Gbit/s met extra afscherming. Dit garandeert toekomstbestendige netwerkinfrastructuur.
          </>
        ),
      },
      {
        question: 'Hoe lang duurt een bekabelingsproject?',
        answer: 'Een standaard kantoor met 20-30 datapunten en een patchkast leveren we meestal binnen 1-2 dagen op. Grotere projecten met meerdere verdiepingen of complexe routing duren langer, maar dat bespreken we vooraf.',
      },
      {
        question: 'Testen jullie alle kabels?',
        answer: (
          <>
            Ja, standaard. Elke kabel wordt <a href="/diensten/testen" style={{ color: '#FF6A00', fontWeight: 600 }}>getest met professionele meetapparatuur</a>. We controleren lengte, bandbreedte, signaalverlies en connecties. Je krijgt een <a href="/diensten/testen" style={{ color: '#FF6A00', fontWeight: 600 }}>opleverrapport</a> met alle metingen en nummering.
          </>
        ),
      },
      {
        question: 'Wat doen jullie met oude bekabeling?',
        answer: (
          <>
            Bij <a href="/diensten/patchkasten" style={{ color: '#FF6A00', fontWeight: 600 }}>patchkast-opruiming</a> halen we oude, dode en overbodige kabels weg. Werkende kabels blijven zitten tenzij je anders aangeeft. Alles wordt netjes opgeruimd en <a href="/diensten/testen" style={{ color: '#FF6A00', fontWeight: 600 }}>gedocumenteerd</a>.
          </>
        ),
      },
    ],
    msp: [
      {
        question: 'Waarom Signaalmakers gebruiken als MSP?',
        answer: (
          <>
            Wij zijn geen concurrent, maar jullie <a href="/blog/msp-bekabelingspartner" style={{ color: '#FF6A00', fontWeight: 600 }}>bekabelingspartner</a>. Jullie doen IT en beheer, wij doen de <a href="/diensten" style={{ color: '#FF6A00', fontWeight: 600 }}>kabels</a>. Geen overlap, geen gedoe. Jullie klant krijgt netjes gelabelde bekabeling met <a href="/diensten/testen" style={{ color: '#FF6A00', fontWeight: 600 }}>documentatie</a>, jij kunt direct installeren zonder zoeken.
          </>
        ),
      },
      {
        question: 'Doen jullie ook configuratie van apparatuur?',
        answer: 'Nee, wij doen geen IT. Switches, routers, wifi-punten, dat is voor de MSP. Wij leggen de kabels, monteren patchpanels af, testen alles en leveren met documentatie op. Jullie pluggen de apparatuur in en configureren.',
      },
      {
        question: 'Kunnen jullie buiten kantooruren werken?',
        answer: 'Ja, vaak zelfs beter. Bekabeling kan prima \'s avonds, \'s nachts of in het weekend, zodat het bedrijf geen last heeft. We plannen dat graag vooraf in.',
      },
      {
        question: 'Wat als er na oplevering iets niet klopt?',
        answer: 'We testen alles voordat we opleveren, maar mocht er toch iets niet goed zijn, dan komen we het oplossen. Op onze bekabeling geven we garantie. Staat alles in het opleverrapport, dan werkt het.',
      },
    ],
  };

  const allFaqs = [
    ...faqs.algemeen.map(f => ({ ...f, category: 'Algemeen' })),
    ...faqs.bekabeling.map(f => ({ ...f, category: 'Bekabeling' })),
    ...faqs.msp.map(f => ({ ...f, category: 'Voor MSP\'s' })),
  ];

  return (
    <>
      <SEO
        title="Veelgestelde Vragen (FAQ) - Bekabeling | Signaalmakers"
        description="Antwoorden op veelgestelde vragen over databekabeling, patchkasten, kosten, werkgebied en samenwerking met MSP's."
        keywords="faq bekabeling, databekabeling kosten, patchkast vragen, Cat6 Cat6A vragen"
        url="https://signaalmakers.nl/faq"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'FAQ', item: 'https://signaalmakers.nl/faq' }
        ]}
      />
      <div>
      <section className="bg-[#0E243A] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <BackgroundOverlay variant="mixed" density="light" color="blue" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Veelgestelde vragen
            </h1>
            <p className="text-lg text-gray-300">
              Antwoorden op de meest gestelde vragen over bekabeling
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="network" density="light" color="grey" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {allFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-1 pr-4">
                      <div className="text-sm font-semibold text-[#FF6A00] mb-1">{faq.category}</div>
                      <div className="font-semibold text-lg text-[#0E243A]">{faq.question}</div>
                    </div>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 flex-shrink-0 text-[#FF6A00]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 flex-shrink-0 text-[#FF6A00]" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 bg-[#0E243A] text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Staat uw vraag er niet bij?</h2>
              <p className="text-gray-300 mb-6">
                Neem gerust contact met ons op. We beantwoorden graag al uw vragen.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-[#FF6A00] text-white px-8 py-3 rounded-lg hover:bg-[#E55F00] transition-colors font-semibold"
              >
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
