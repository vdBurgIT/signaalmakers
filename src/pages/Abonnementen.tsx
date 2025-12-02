import { Link } from 'react-router-dom';
import { CheckCircle2, Zap, Clock, TrendingUp } from 'lucide-react';
import BackgroundOverlay from '../components/BackgroundOverlay';
import SEO from '../components/SEO';

export default function Abonnementen() {
  return (
    <>
      <SEO
        title="Abonnementen - Gegarandeerde capaciteit voor bekabeling | Signaalmakers"
        description="Klaar met wachten op offertes? Met onze abonnementen heb je gegarandeerde capaciteit, vaste doorlooptijden en tot 30% korting op materiaal. Essential vanaf €99/mnd, Priority €199/mnd, Express €599/mnd."
        keywords="bekabeling abonnement, databekabeling pakket, MSP partner, gegarandeerde capaciteit, vaste doorlooptijd, bekabeling korting"
        url="https://signaalmakers.nl/abonnementen"
      />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Jouw projecten, onze zekerheid
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Klaar met wachten op offertes en eindeloze lead-times? Met onze abonnementen heb je gegarandeerde capaciteit, vaste doorlooptijden en flinke kortingen op alles wat telt. Gewoon geregeld.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
        <BackgroundOverlay variant="network" density="medium" color="blue" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Waarom kiezen voor onze abonnementen?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
            {[
              { icon: Clock, title: 'Altijd plek', desc: 'Gegarandeerde projectdagen elke maand. Geen wachtlijsten, geen gedoe.' },
              { icon: Zap, title: 'Voorrang', desc: 'Express-abonnees hebben doorlooptijd vanaf 21 dagen. Sneller dan standaard.' },
              { icon: TrendingUp, title: 'Kortingen', desc: 'Tot 30% korting op materiaal, tot 15% op uren en tot 60% op reiskosten.' },
              { icon: CheckCircle2, title: 'Flexibiliteit', desc: 'Max. 2 extra projectdagen per maand tegen lage boekingsfee.' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white" id="pakketten">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] text-center mb-16">
            Kies jouw pakket
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Essential */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300" id="essential">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-2">Essential</h3>
              <div className="text-4xl font-bold text-[#0E243A] mb-6">
                €99<span className="text-lg text-gray-600">/mnd</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#0E243A]">2 gegarandeerde projectdagen</span>
                    <p className="text-sm text-gray-600">per maand (virtuele capaciteit)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#0E243A]">Doorlooptijd tot 2 maanden</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0E243A]">5% korting op uren</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0E243A]">10% korting op materiaal</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0E243A]">Reiskosten per km</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0E243A]">Spoed: +€400/dag</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block text-center bg-[#FF6A00] text-white px-8 py-3 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold"
              >
                Aanmelden
              </Link>
            </div>

            {/* Priority */}
            <div className="bg-gradient-to-br from-[#0E243A] to-[#1a3a5a] text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform scale-105 border-2 border-[#FF6A00] relative" id="priority">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FF6A00] text-white px-4 py-1 rounded-full text-sm font-semibold">
                Populair
              </div>
              <h3 className="text-2xl font-bold mb-2">Priority</h3>
              <div className="text-4xl font-bold mb-6">
                €199<span className="text-lg text-gray-300">/mnd</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">4 gegarandeerde projectdagen</span>
                    <p className="text-sm text-gray-300">per maand (virtuele capaciteit)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Doorlooptijd tot 6 weken</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>10% korting op uren</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>20% korting op materiaal</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>40% korting op reiskosten</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Spoed: +€300/dag</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block text-center bg-[#FF6A00] text-white px-8 py-3 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold"
              >
                Aanmelden
              </Link>
            </div>

            {/* Express */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300" id="express">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-2">Express</h3>
              <div className="text-4xl font-bold text-[#0E243A] mb-6">
                €599<span className="text-lg text-gray-600">/mnd</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#0E243A]">8 gegarandeerde projectdagen</span>
                    <p className="text-sm text-gray-600">per maand (virtuele capaciteit)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#0E243A]">Doorlooptijd vanaf 21 dagen</span>
                    <p className="text-sm text-gray-600">(supersnelle SLA)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0E243A]">15% korting op uren</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0E243A]">30% korting op materiaal</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0E243A]">60% korting op reiskosten</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0E243A]">Spoed: +€250/dag</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block text-center bg-[#FF6A00] text-white px-8 py-3 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold"
              >
                Aanmelden
              </Link>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-blue-50 rounded-2xl p-8 border-l-4 border-[#FF6A00]">
            <h3 className="text-xl font-bold text-[#0E243A] mb-4">Extra projectdagen nodig?</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Heb je in een bepaalde maand meer capaciteit nodig? Boek maximaal 2 extra projectdagen per maand tegen een lage boekingsfee:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span><strong>Essential:</strong> €99 boekingsfee + dagprijs met 5% korting</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span><strong>Priority:</strong> €79 boekingsfee + dagprijs met 10% korting</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span><strong>Express:</strong> €59 boekingsfee + dagprijs met 15% korting</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0E243A] to-[#1a3a5a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Voor wie zijn deze pakketten?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Onze abonnementen zijn bedoeld voor <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP's, ICT-bedrijven</Link> en organisaties met een vaste stroom aan <Link to="/diensten" style={{ fontWeight: 600 }}>bekabelingsprojecten</Link>. Je betaalt alleen wat je gebruikt: uren, materiaal en reiskosten. Maar je weet zeker dat we er zijn wanneer jij ons nodig hebt.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              Word partner
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] text-center mb-16">
              Veelgestelde vragen
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Wat betekent "gegarandeerde projectdagen"?',
                  a: 'Je hebt elke maand recht op het aantal dagen dat bij je abonnement hoort. Dit is virtuele capaciteit: je bent verzekerd van plek in onze planning. Je betaalt alleen de werkelijke uren, materiaal en reiskosten.'
                },
                {
                  q: 'Moet ik alle dagen per maand gebruiken?',
                  a: 'Nee. Je betaalt alleen wat je gebruikt. De gegarandeerde dagen geven je zekerheid dat we capaciteit voor je reserveren, maar je bent niet verplicht ze te gebruiken.'
                },
                {
                  q: 'Kan ik mijn abonnement opzeggen?',
                  a: 'Ja, abonnementen zijn maandelijks opzegbaar na 12 maanden. Geen kleine lettertjes, geen verborgen kosten.'
                },
                {
                  q: 'Wat als ik meer dagen nodig heb?',
                  a: 'Je kunt maximaal 2 extra projectdagen per maand boeken tegen een lage boekingsfee. De kortingen op uren en materiaal blijven van toepassing.'
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-[#0E243A] mb-3">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
