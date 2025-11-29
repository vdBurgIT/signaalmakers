import { useState } from 'react';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackgroundOverlay from '../components/BackgroundOverlay';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = {
    algemeen: [
      {
        question: 'Wat doet Signaalmakers precies?',
        answer: 'Signaalmakers installeert professionele netwerkbekabeling en databekabeling. Wij trekken UTP- en ethernetkabels, leggen bekabelde netwerken aan, maken netwerkpunten en richten patchkasten en serverkasten netjes in. Dat doen we voor woningen, kantoren en andere gebouwen.',
      },
      {
        question: 'Waarin zijn jullie gespecialiseerd?',
        answer: 'Wij richten ons op de basis van elk netwerk: de kabel. Netwerkbekabeling, databekabeling, UTP-bekabeling en een stabiel bekabeld netwerk. Apparatuur zoals routers, switches en access points sluiten we netjes aan op die bekabeling, vaak in samenwerking met jouw IT-partner of MSP.',
      },
      {
        question: 'Voor wie werken jullie?',
        answer: 'We werken voor particulieren, MKB-bedrijven, kantoren, magazijnen, zorginstellingen, scholen, hotels, sportlocaties en als bekabelingspartner voor MSP-, IT- en ICT-bedrijven. Kortom: iedereen die een goed bekabeld netwerk nodig heeft.',
      },
      {
        question: 'In welke delen van Nederland zijn jullie actief?',
        answer: 'Signaalmakers is door heel Nederland actief. We werken veel in Zuid-Holland, Noord-Brabant, Utrecht, Gelderland en de Randstad, in en rondom steden zoals Rotterdam, Den Haag, Dordrecht, Leiden, Gouda, Spijkenisse, Utrecht, Arnhem, Nijmegen, Ede, Tiel, Eindhoven, Tilburg, Breda en Den Bosch.',
      },
      {
        question: 'Leveren jullie ook wifi-netwerken en apparatuur?',
        answer: 'Onze focus ligt op bekabeling en het aanleggen van een stabiel, bekabeld netwerk. Wifi hoort daarbij, maar we bouwen het het liefst op een goede kabelbasis (wifi via kabel, access points op UTP). De keuze en configuratie van apparatuur doen we vaak samen met jouw IT-partner of MSP.',
      },
      {
        question: 'Doen jullie ook audio en andere signaaloplossingen?',
        answer: 'Ja. Naast netwerkbekabeling verzorgen we ook bekabeling en aansluitingen voor bijvoorbeeld kantoor- en achtergrondgeluid (plafondspeakers, speakers in tuin of overkapping), omroepinstallaties en intercom-oplossingen. Ook daarvoor is een nette databekabeling belangrijk.',
      },
    ],
    woningen: [
      {
        question: 'Wat is netwerkbekabeling in huis?',
        answer: 'Netwerkbekabeling in huis betekent dat we UTP- of ethernetkabels aanleggen van de meterkast naar verschillende kamers. Bijvoorbeeld naar de woonkamer, slaapkamer, werkkamer, thuiskantoor, zolder, garage of schuur. Zo krijg je een stabiel bekabeld netwerk door je hele woning.',
      },
      {
        question: 'Waarom is bekabeld internet thuis beter dan alleen wifi?',
        answer: 'Bekabeld internet via UTP- of ethernetkabel is meestal stabieler en sneller dan alleen wifi. Je hebt minder last van storingen, dikke muren en burennetwerken. Voor thuiswerken, videobellen, tv-streaming, gamen en beveiligingscamera\'s is een bekabelde aansluiting veel betrouwbaarder.',
      },
      {
        question: 'Hoe krijg ik stabiel internet op zolder, in de aanbouw of in de schuur?',
        answer: 'De beste oplossing is een kabel trekken. Wij kunnen een netwerkkabel (UTP) van de meterkast naar zolder, aanbouw, schuur, tuinkantoor of overkapping leggen. Daar maken we een netwerkaansluiting. Veel mensen zoeken op "internetkabel van meterkast naar zolder": dat is precies wat wij voor je doen.',
      },
      {
        question: 'Doen jullie ook "wifi bekabeling" of "wifi via kabel"?',
        answer: 'Ja. Met "wifi bekabeling", "wifi via kabel" of "wifi kabel" bedoelen de meeste mensen dat wifi-punten via UTP-kabels op het netwerk zijn aangesloten. Wij leggen die UTP-bekabeling aan naar de juiste plekken, zodat je wifi-punten een bekabelde verbinding hebben en je overal in huis goed bereik hebt.',
      },
      {
        question: 'Kunnen jullie kabels onzichtbaar wegwerken?',
        answer: 'We kijken per woning wat slim en netjes is: via kruipruimte, bestaande leidingen, plafonds, holle wanden of plinten. Helemaal onzichtbaar kan niet altijd, maar we zorgen er wel voor dat het zo strak mogelijk wordt afgewerkt bij de netwerkpunten.',
      },
      {
        question: 'Leggen jullie ook bekabeling als ik glasvezel in de meterkast heb?',
        answer: 'Zeker. Vanaf je glasvezelmodem in de meterkast trekken we UTP-bekabeling door de woning. Zo kun je op meerdere plekken in huis gebruikmaken van een stabiel bekabeld netwerk.',
      },
      {
        question: 'Helpen jullie ook met bekabelde thuiswerkplekken?',
        answer: 'Ja. We leggen netwerkbekabeling aan voor thuiswerkplekken en thuiskantoren. Je krijgt een netwerkaansluiting op je werkplek en eventueel extra punten voor bijvoorbeeld een printer of docking station. Zo kun je thuis net zo stabiel werken als op kantoor.',
      },
    ],
    zakelijk: [
      {
        question: 'Wat doen jullie voor netwerkbekabeling in kantoren en bedrijfspanden?',
        answer: 'We leggen complete netwerkbekabeling aan voor kantoren en bedrijfspanden. Denk aan UTP- en ethernetbekabeling voor werkplekken, vergaderruimtes, printers, VoIP-telefoons, camera\'s, wifi-punten en andere netwerkapparatuur. Ook richten we patchkasten en serverkasten netjes en overzichtelijk in.',
      },
      {
        question: 'Leggen jullie ook bekabeling in magazijnen, loodsen en hallen?',
        answer: 'Ja. We verzorgen netwerkbekabeling in magazijnen, loodsen, productiehallen, werkplaatsen, logistieke centra en opslaghallen. We leggen datakabels naar scanners, pc\'s, machines, camera\'s en access points, zodat alles betrouwbaar verbonden is.',
      },
      {
        question: 'Kunnen jullie onze patchkast of serverkast opruimen en opnieuw bekabelen?',
        answer: 'Zeker. We halen oude, overbodige kabels weg, leggen nieuwe UTP-bekabeling aan, sluiten patchpanelen netjes aan en labelen alle kabels. Daarna heb je een schone en overzichtelijke patchkast of serverkast die weer makkelijk te beheren is.',
      },
      {
        question: 'Helpen jullie ook met de IT-inrichting van een kantoor?',
        answer: 'We leggen in ieder geval de bekabelde basis: netwerkpunten bij bureaus, printers, vergaderruimtes en bijvoorbeeld een balie. In veel projecten werken we samen met een IT-partner of MSP die de pc\'s, laptops, switches, routers en andere apparatuur levert en beheert. Zo sluit alles netjes op elkaar aan.',
      },
      {
        question: 'Werken jullie ook in scholen, zorginstellingen en hotels?',
        answer: 'Ja. We leggen netwerkbekabeling en databekabeling aan in scholen, zorginstellingen, verpleeghuizen, huisartsenpraktijken, fysiopraktijken, tandartspraktijken, hotels, B&B\'s, campings, vakantieparken, sportscholen en sportclubs. Overal waar een betrouwbaar bekabeld netwerk nodig is.',
      },
      {
        question: 'Met welke kabelcategorieën werken jullie zakelijk?',
        answer: 'We gebruiken vooral Cat6 en Cat6a UTP-bekabeling. Waar nodig leggen we Cat7 of LSZH-bekabeling aan, bijvoorbeeld in gebouwen met strengere brand- en installatienormen. We adviseren per project welke kabel het meest toekomstbestendig is.',
      },
    ],
    msp: [
      {
        question: 'Werkt Signaalmakers als onderaannemer voor MSP- en IT-bedrijven?',
        answer: 'Ja. Signaalmakers is bekabelingspartner en onderaannemer voor MSP\'s, IT-bedrijven, ICT-dienstverleners, VoIP-aanbieders, camera-installateurs en andere partijen. Wij verzorgen de fysieke laag: UTP- en ethernetbekabeling, netwerkpunten, patchkasten en bekabelde backbone voor wifi en andere diensten.',
      },
      {
        question: 'Kunnen jullie whitelabel werken onder onze naam?',
        answer: 'Ja. We kunnen whitelabel werken, zodat we richting eindklant optreden als onderdeel van jouw organisatie. Jij levert de IT- en beheerdiensten; wij zorgen voor de netwerkbekabeling en nette oplevering op locatie.',
      },
      {
        question: 'Welke werkzaamheden doen jullie voor MSP\'s en IT-partners?',
        answer: 'Denk aan netwerkbekabeling op klantlocaties, databekabeling voor kantoren en magazijnen, bekabeling voor VoIP, wifi-punten en camera\'s, patchkasten opnieuw bekabelen, bestaande bekabeling upgraden en landelijke roll-outs voor ketens en filialen. Ook kunnen we bekabeling doormeten en rapporteren.',
      },
      {
        question: 'Zijn jullie landelijk inzetbaar als bekabelingspartner?',
        answer: 'Ja. Voor MSP-, IT- en ICT-partners werken we door heel Nederland. We kunnen meerdere klantlocaties, filialen of vestigingen plannen en in één aanpak uitvoeren, zodat je één vaste partij hebt voor alle netwerkbekabeling.',
      },
      {
        question: 'Leveren jullie ook rapportages van de bekabeling?',
        answer: 'Ja. We kunnen netwerkbekabeling en databekabeling testen en doormeten met professionele apparatuur en daar een overzichtelijke rapportage van maken. Dat is handig voor oplevering, documentatie en kwaliteitsborging.',
      },
    ],
    praktisch: [
      {
        question: 'In welke regio\'s kan ik Signaalmakers inschakelen?',
        answer: 'Signaalmakers werkt in heel Nederland. We doen veel projecten in Zuid-Holland, Noord-Brabant, Utrecht, Gelderland en de Randstad, maar ook daarbuiten kunnen we vaak helpen. Via signaalmaker.nl kun je eenvoudig een aanvraag doen, dan kijken we samen wat er mogelijk is.',
      },
      {
        question: 'Doen jullie ook projecten buiten kantooruren?',
        answer: 'In woningen werken we meestal tijdens normale werktijden. In kantoren, winkels of productieomgevingen kunnen we in overleg ook buiten piekuren werken, bijvoorbeeld in de avond of in het weekend, om overlast te beperken.',
      },
      {
        question: 'Wat kost het om netwerkbekabeling te laten aanleggen?',
        answer: 'De kosten hangen af van onder andere: het aantal meters kabel, het aantal netwerkpunten, de route (kruipruimte, muren, plafonds), het type kabel (bijvoorbeeld Cat6 of Cat6a) en de complexiteit van de locatie. Daarom werken we met offertes op maat. Je krijgt altijd vooraf een duidelijk voorstel.',
      },
      {
        question: 'Hoe vraag ik een offerte aan bij Signaalmakers?',
        answer: 'Via signaalmaker.nl kun je eenvoudig een aanvraag doen. Geef aan of het om een woning, kantoor of ander pand gaat, in welke plaats of regio het is en hoeveel netwerkpunten je ongeveer nodig hebt. We nemen contact met je op, stellen zo nodig een paar extra vragen en maken daarna een passende offerte.',
      },
      {
        question: 'Testen jullie de bekabeling na installatie?',
        answer: 'Ja. We testen de aangelegde bekabeling en controleren of alle netwerkpunten goed werken. Op verzoek kunnen we de bekabeling ook uitgebreid doormeten en hiervan een rapport maken, zodat je precies weet hoe je netwerkbekabeling erbij staat.',
      },
      {
        question: 'Doen jullie ook kleinere klussen?',
        answer: 'Ja. Eén extra netwerkpunt, een thuiswerkplek bekabelen, een patchkast netjes maken of een complete kantoorbekabeling: het kan allemaal. We denken mee en zoeken altijd naar een praktische oplossing die past bij jouw situatie.',
      },
      {
        question: 'Hoe snel kunnen jullie starten met mijn project?',
        answer: 'Dat hangt af van de grootte van de klus en de planning op dat moment. Kleinere klussen kunnen vaak snel ingepland worden. Grotere projecten plannen we in overleg. We communiceren altijd duidelijk over de beschikbare data en de verwachte doorlooptijd.',
      },
    ],
  };

  const allFaqs = [
    ...faqs.algemeen.map(f => ({ ...f, category: 'Algemeen over Signaalmakers' })),
    ...faqs.woningen.map(f => ({ ...f, category: 'Netwerkbekabeling in woningen' })),
    ...faqs.zakelijk.map(f => ({ ...f, category: 'Voor kantoren en bedrijven' })),
    ...faqs.msp.map(f => ({ ...f, category: 'Voor MSP-, IT- en ICT-partners' })),
    ...faqs.praktisch.map(f => ({ ...f, category: 'Regio, kosten en praktische vragen' })),
  ];

  // JSON-LD Schema voor FAQ en Service
  const faqSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": allFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "Service",
        "name": "Netwerkbekabeling en Databekabeling",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Signaalmakers",
          "url": "https://signaalmakers.nl",
          "areaServed": [
            {
              "@type": "Country",
              "name": "Nederland"
            },
            {
              "@type": "State",
              "name": "Zuid-Holland"
            },
            {
              "@type": "State",
              "name": "Noord-Brabant"
            },
            {
              "@type": "State",
              "name": "Utrecht"
            },
            {
              "@type": "State",
              "name": "Gelderland"
            },
            {
              "@type": "City",
              "name": "Rotterdam"
            },
            {
              "@type": "City",
              "name": "Den Haag"
            },
            {
              "@type": "City",
              "name": "Utrecht"
            },
            {
              "@type": "City",
              "name": "Eindhoven"
            },
            {
              "@type": "City",
              "name": "Arnhem"
            },
            {
              "@type": "City",
              "name": "Nijmegen"
            }
          ]
        },
        "description": "Professionele netwerkbekabeling en databekabeling voor woningen, kantoren en bedrijven in heel Nederland. Wij leggen UTP-bekabeling, ethernetbekabeling en bekabelde netwerken aan en werken als bekabelingspartner voor MSP-, IT- en ICT-bedrijven.",
        "serviceType": [
          "Netwerkbekabeling",
          "Databekabeling",
          "UTP-bekabeling",
          "Ethernet-bekabeling",
          "Bekabeld netwerk installatie",
          "Patchkast installatie",
          "Serverkast bekabeling"
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Veelgestelde vragen over netwerkbekabeling | Signaalmakers"
        description="Antwoorden op vragen over netwerkbekabeling, databekabeling, UTP-bekabeling, wifi via kabel, kosten en werkwijze. Voor woningen, kantoren en MSP-partners."
        keywords="netwerkbekabeling vragen, databekabeling faq, utp bekabeling kosten, bekabeld netwerk, wifi via kabel, patchkast opruimen, msp bekabelingspartner"
        url="https://signaalmakers.nl/faq"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'FAQ', item: 'https://signaalmakers.nl/faq' }
        ]}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <div>
        <section className="bg-[#0E243A] text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
            <BackgroundOverlay variant="mixed" density="light" color="blue" />
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Veelgestelde vragen over netwerkbekabeling
              </h1>
              <p className="text-lg text-gray-300">
                Signaalmakers – Netwerkbekabeling en Databekabeling door heel Nederland
              </p>
            </div>
          </div>
        </section>

        {/* Intro blok */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 leading-relaxed">
                Heb je vragen over netwerkbekabeling, databekabeling of UTP-bekabeling voor je woning of kantoor?
                Op deze pagina vind je de antwoorden op de meest gestelde vragen over bekabelde netwerken, wifi via kabel,
                patchkasten, kosten en onze werkwijze. Signaalmakers werkt door heel Nederland en legt professionele
                ethernetbekabeling aan voor particulieren, bedrijven en als bekabelingspartner voor MSP-, IT- en ICT-bedrijven.
                Van een enkele internetkabel naar je thuiskantoor tot complete netwerkbekabeling voor kantoorpanden,
                magazijnen en scholen.
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
