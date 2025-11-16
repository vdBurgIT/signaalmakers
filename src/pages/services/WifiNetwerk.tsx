import Hero from '../../components/Hero';
import SEO from '../../components/SEO';
import { Wifi, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export default function WifiNetwerk() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Wat kost een professionele wifi-installatie?',
      answer: 'De kosten voor een wifi-installatie hangen af van de grootte van het pand, het aantal wifi access points en de hoeveelheid databekabeling. Een standaard kantoor van 200-300m² start meestal vanaf €2.500 excl. BTW, inclusief wifi-meting, materiaal en installatie.',

    },
    {
      question: 'Waarom geen consumentenrouter maar professionele wifi?',
      answer: 'Consumentenrouters zijn ontworpen voor kleine ruimtes en weinig apparaten. Voor zakelijk gebruik heeft u professionele wifi access points nodig die veel meer apparaten aankunnen, naadloze overgangen tussen access points mogelijk maken en centraal beheerd kunnen worden via een controller.',

    },
    {
      question: 'Hoe lang duurt een professionele wifi-meting?',
      answer: 'Een wifi-meting duurt gemiddeld 1-2 uur, afhankelijk van de grootte van het pand. We meten alle relevante ruimtes en maken een gedetailleerd meetrapport met aanbevelingen voor access point-locaties.',

    },
    {
      question: 'Kunnen jullie wifi installeren in een monumentaal pand?',
      answer: 'Ja, we hebben ervaring met complexe situaties waar niet geboord mag worden. We zoeken dan naar alternatieve oplossingen zoals plafondmontage van wifi access points, gebruik van bestaande kabelgoten of mesh-netwerken.',

    },
    {
      question: 'Wat is een gastennetwerk en waarom heb ik dat nodig?',
      answer: 'Een gastennetwerk is een apart wifi-netwerk voor bezoekers en klanten. Het houdt uw zakelijke netwerk veilig door gasten geen toegang te geven tot uw interne systemen, printers en servers. Voor zakelijk gebruik raden wij dit altijd aan.',

    },
  ];

  return (
    <>
      <SEO
        title="Professionele WiFi-installatie en Netwerk Oplossingen"
        description="Complete wifi-netwerken met volledige dekking. Van wifi-meting tot installatie, wij zorgen voor een netwerk dat optimaal werkt. Professionele access points voor zakelijk en particulier."
        keywords="wifi installatie, professionele wifi, wifi netwerk, access points, wifi meting, netwerk installatie, zakelijk wifi, wifi monteur"
        url="https://signaalmakers.nl/diensten/wifi-netwerk"
      />
      <div>
        <Hero
        title="Professionele wifi-installatie"
        subtitle="Complete wifi-netwerken met volledige dekking. Van wifi-meting tot installatie, wij zorgen voor een netwerk dat optimaal werkt."
        primaryButtonText="Plan een wifi-meting"
        primaryButtonLink="/contact"
      />

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="wifi" density="medium" color="blue" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Werkwijze professionele wifi-installatie
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Een goed werkend wifi-netwerk begint met zorgvuldige voorbereiding. Als wifi-monteur werken wij volgens een bewezen aanpak.
            </p>

            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0E243A] mb-2">Intake wifi-wensen</h3>
                  <p className="text-gray-600">
                    We beginnen met een grondige intake waarin we uw wifi-situatie, wensen en eisen bespreken. Hoeveel gebruikers? Welke apparaten? Speciale toepassingen zoals videobellen of wifi-printers? We luisteren zorgvuldig en stellen de juiste vragen.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0E243A] mb-2">Professionele wifi-meting</h3>
                  <p className="text-gray-600">
                    Met professionele wifi-meetapparatuur brengen we het pand in kaart. We meten wifi-signaalsterkte, interferentie en identificeren dode hoeken. Deze wifi-meting is de basis voor een optimaal netwerkontwerp.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0E243A] mb-2">Plan en offerte</h3>
                  <p className="text-gray-600">
                    Op basis van de wifi-meting maken we een gedetailleerd plan met access point-locaties, databekabeling en benodigde apparatuur. U ontvangt een transparante offerte zonder verborgen kosten.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0E243A] mb-2">Wifi-installatie</h3>
                  <p className="text-gray-600">
                    We installeren alle databekabeling en wifi access points volgens plan. Kabels worden netjes weggewerkt, access points professioneel gemonteerd en alles wordt gedocumenteerd.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0E243A] mb-2">Test en oplevering</h3>
                  <p className="text-gray-600">
                    Na de wifi-installatie testen we het netwerk grondig. We lopen het pand door met meetapparatuur, controleren de wifi-dekking en snelheid. U ontvangt een testrapport en complete documentatie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              Wat u ontvangt na wifi-installatie
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              Een compleet werkend wifi-netwerk met professionele componenten en volledige documentatie.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-lg flex items-center justify-center mb-4">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Optimaal wifi-kanaalplan</h3>
                <p className="text-gray-600">
                  We configureren alle wifi access points met de juiste kanalen en zendvermogens om interferentie te minimaliseren en wifi-prestaties te maximaliseren.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Bekabelde wifi access points</h3>
                <p className="text-gray-600">
                  Alle wifi access points worden via Cat6 of Cat6A databekabeling aangesloten voor maximale betrouwbaarheid en snelheid. PoE-voeding waar mogelijk.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Gastennetwerk en beveiliging</h3>
                <p className="text-gray-600">
                  Apart gastennetwerk voor bezoekers en gescheiden wifi-netwerken voor extra veiligheid. Uw zakelijke netwerk blijft beschermd.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Wifi-meetrapport en documentatie</h3>
                <p className="text-gray-600">
                  Complete documentatie met plattegronden, wifi access point-locaties, netwerkconfiguraties en wifi-meetrapporten voor en na de installatie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0E243A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Veelgestelde vragen over wifi-installatie
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/10 rounded-lg backdrop-blur">
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
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
