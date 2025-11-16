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
        question: 'Voor wie installeert Signaalmakers wifi-netwerken?',
        answer: 'Wij installeren professionele wifi-netwerken en databekabeling voor zakelijke klanten zoals kantoren, winkels, horeca en magazijnen, maar ook voor particulieren die stabiel internet nodig hebben in hun woning of tuinkantoor.',

      },
      {
        question: 'In welke regio\'s installeert Signaalmakers wifi-netwerken?',
        answer: 'Als wifi-monteur zijn we actief in Zuid-Holland, Noord-Brabant, Utrecht, Gelderland en Overijssel. Denk aan steden als Rotterdam, Den Haag, Dordrecht, Utrecht, Eindhoven, Breda, Tilburg, Arnhem, Nijmegen en omliggende plaatsen. Voor andere regio\'s kunt u contact opnemen.',

      },
      {
        question: 'Hoe snel kan de wifi-monteur langskomen?',
        answer: 'In de meeste gevallen kunnen we binnen een week langskomen voor een inventarisatie en wifi-meting. Spoedeisende wifi-installaties proberen we altijd snel in te plannen.',

      },
      {
        question: 'Leveren jullie ook wifi access points en netwerkmateriaal?',
        answer: 'Ja, wij leveren alle benodigde apparatuur: professionele wifi access points, netwerkswitches, Cat6/Cat6A databekabeling, patchkasten en meer. Alles wordt door onze wifi-monteur geïnstalleerd en geconfigureerd.',

      },
    ],
    wifiNetwerk: [
      {
        question: 'Wat kost een professionele wifi-installatie?',
        answer: 'De kosten voor een wifi-installatie hangen af van de grootte van het pand, het aantal wifi access points en de hoeveelheid databekabeling. Een standaard kantoor van 200-300m² start meestal vanaf €2.500 excl. BTW, inclusief wifi-meting, materiaal en installatie. Voor een exacte offerte komen we graag langs.',

      },
      {
        question: 'Waarom geen consumentenrouter maar professionele wifi?',
        answer: 'Consumentenrouters zijn ontworpen voor kleine ruimtes (50-100m²) en weinig apparaten. In grotere panden of bij veel gebruikers krijgt u dode hoeken, trage snelheden en verbindingsproblemen. Professionele wifi access points zijn gebouwd voor zakelijk gebruik en grotere oppervlaktes.',

      },
      {
        question: 'Hoe lang duurt een professionele wifi-installatie?',
        answer: 'De duur van een wifi-installatie hangt af van de grootte en complexiteit. Een standaard kantoor van 200-300m² met wifi access points en databekabeling leveren we meestal binnen één werkdag op. Grotere wifi-projecten duren langer, maar dat bespreken we vooraf.',

      },
      {
        question: 'Wat is een wifi-meting en waarom is dat nodig?',
        answer: 'Een professionele wifi-meting brengt het pand in kaart: waar is het wifi-signaal sterk of zwak, waar is interferentie, wat zijn de optimale locaties voor access points? Zonder wifi-meting werkt u op goed geluk. Met een meting weet u zeker dat het netwerk optimaal werkt.',

      },
      {
        question: 'Wat is een gastennetwerk en heb ik dat nodig?',
        answer: 'Een gastennetwerk is een apart wifi-netwerk voor bezoekers. Het houdt uw bedrijfsnetwerk veilig door gasten geen toegang te geven tot uw interne systemen, printers en servers. Voor zakelijk gebruik is dit sterk aanbevolen.',
      },
    ],
    zakelijk: [
      {
        question: 'Kunnen jullie wifi ook buiten kantooruren installeren?',
        answer: 'Ja, dat is vaak zelfs beter om verstoring van uw bedrijfsvoering te minimaliseren. De wifi-installatie kan in overleg \'s avonds, \'s nachts of in het weekend plaatsvinden.',

      },
      {
        question: 'Bieden jullie ook onderhoud voor wifi-installaties?',
        answer: 'De wifi access points en netwerkapparatuur die wij installeren hebben meestal weinig onderhoud nodig. Voor software-updates en monitoring van uw netwerk werken we samen met onze vaste IT-partner. Zij bieden verschillende support-pakketten.',

      },
      {
        question: 'Wat gebeurt er als er na de wifi-installatie problemen zijn?',
        answer: 'We testen het complete wifi-netwerk uitgebreid tijdens de oplevering. Mocht er toch iets niet goed werken aan uw wifi of netwerk, dan komen we dat natuurlijk oplossen. Op onze wifi-installaties geven we garantie.',

      },
    ],
    particulier: [
      {
        question: 'Is een professionele wifi-installatie niet te duur voor particulieren?',
        answer: 'Een professionele wifi-installatie kost meer dan zelf een paar mesh-punten neerzetten, maar u krijgt wel een oplossing die écht werkt en jarenlang meegaat. Voor een gemiddelde woning ligt de investering voor wifi en databekabeling tussen €1.000-€2.500.',

      },
      {
        question: 'Kunnen jullie wifi installeren in de tuin of schuur?',
        answer: 'Ja, met outdoor wifi access points kunnen we wifi realiseren in tuinen, overkappingen en vrijstaande bijgebouwen zoals tuinkantoren of schuren. We bekijken eerst de situatie en adviseren de beste wifi-oplossing.',

      },
      {
        question: 'Moet ik mijn hele huis openbreken voor databekabeling?',
        answer: 'Niet altijd. Afhankelijk van de situatie kunnen we vaak via bestaande kabelgoten, kruipruimtes of plafonds werken met de netwerkbekabeling. Tijdens de inventarisatie bekijken we de mogelijkheden voor wifi en bekabeling.',

      },
    ],
  };

  const allFaqs = [
    ...faqs.algemeen.map(f => ({ ...f, category: 'Algemeen' })),
    ...faqs.wifiNetwerk.map(f => ({ ...f, category: 'Wifi & Netwerk' })),
    ...faqs.zakelijk.map(f => ({ ...f, category: 'Zakelijk' })),
    ...faqs.particulier.map(f => ({ ...f, category: 'Particulier' })),
  ];

  return (
    <>
      <SEO
        title="Veelgestelde Vragen (FAQ)"
        description="Antwoorden op veelgestelde vragen over wifi-installatie, netwerk bekabeling, kosten, werkgebied en onze diensten."
        keywords="faq, veelgestelde vragen, wifi kosten, installatie vragen, netwerk vragen"
        url="https://signaalmakers.nl/faq"
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
              Antwoorden op de meest gestelde vragen over onze diensten
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
