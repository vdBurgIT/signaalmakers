import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { FileCheck, CheckCircle2, ClipboardList, BarChart3 } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export default function Testen() {
  return (
    <>
      <SEO
        title="Testen & Documentatie - Elk project opgeleverd met meetrapport | Signaalmakers"
        description="Wij testen elke kabel en leveren op met duidelijk rapport. Meting, nummering, labeling en opleverrapport. Bewijs dat alles werkt zoals het hoort."
        keywords="kabel testen, opleverrapport, bekabeling meten, documentatie, labeling, netwerktest"
        url="https://signaalmakers.nl/diensten/testen"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Diensten', item: 'https://signaalmakers.nl/diensten' },
          { name: 'Testen & Documentatie', item: 'https://signaalmakers.nl/diensten/testen' }
        ]}
      />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Testen & documentatie
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Geen aannames, alles wordt gemeten. Elk project leveren we op met een duidelijk rapport.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="data" density="medium" color="grey" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Wat we opleveren
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Meting per kabel, nummering, labeling en een opleverrapport. Bewijs dat alles werkt zoals het hoort.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 rounded-xl p-8">
                <BarChart3 className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Meting per kabel</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Elke kabel wordt getest met professionele meetapparatuur. We controleren of de kabel voldoet aan de norm en of er geen storingen zijn.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Lengte en bandbreedte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Signaalverlies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Connecties en afmontering</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <ClipboardList className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Nummering en labeling</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Alle kabels worden genummerd en gelabeld. Zowel bij het aansluitpunt als in de patchkast. Zo weet je altijd welke kabel waar naartoe gaat.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Duidelijke labels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Logische nummering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Overzichtelijk</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 md:col-span-2">
                <FileCheck className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Opleverrapport</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Na afronding krijg je een opleverrapport met alle metingen, nummering en een overzicht van de uitgevoerde werkzaamheden. Bewijs dat alles werkt.
                </p>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Metingen per kabel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Overzicht nummering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Plattegrond met routing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Certificering per kabel</span>
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
              Waarom is dit belangrijk?
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
              Zonder testen en documentatie weet je niet of de bekabeling goed is aangelegd. En als er later iets fout gaat, kost het veel tijd om de fout te vinden.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Voor MSP\'s',
                  desc: 'Jij kunt met vertrouwen installeren. Als het niet werkt, is het snel te vinden dankzij de documentatie.',
                },
                {
                  title: 'Minder storingen',
                  desc: 'Door te testen vangen we fouten op voordat ze problemen veroorzaken. Dat scheelt nazorg.',
                },
                {
                  title: 'Bewijs',
                  desc: 'Met een opleverrapport heb je bewijs dat de bekabeling correct is aangelegd en voldoet aan de norm.',
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
            <div className="bg-blue-50 border-l-4 border-[#FF6A00] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Standaard bij elk project</h3>
              <p className="text-gray-700 leading-relaxed">
                Testen en documenteren zit standaard bij elk project. Je betaalt er niet extra voor. Het hoort er gewoon bij, want anders weet je niet of het goed is.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0E243A] to-[#1a3a5a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar voor een project?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Neem contact op en we bespreken je bekabelingsproject. Alles wordt getest en gedocumenteerd.
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
