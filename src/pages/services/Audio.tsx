import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { Volume2, CheckCircle2, Cable, AlertCircle } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export default function Audio() {
  return (
    <>
      <SEO
        title="Signaallijnen (AV/audio) - Bekabeling voor vergaderruimtes | Signaalmakers"
        description="AV- en audiobekabeling voor vergaderruimtes en presentatieruimtes. Wij leggen alleen de kabels en bereiden aansluitpunten voor. Geen apparatuur-installatie."
        keywords="signaallijnen, AV bekabeling, audiobekabeling, vergaderruimte bekabeling, presentatieruimte kabels"
        url="https://signaalmakers.nl/diensten/audio"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Diensten', item: 'https://signaalmakers.nl/diensten' },
          { name: 'Signaallijnen', item: 'https://signaalmakers.nl/diensten/audio' }
        ]}
      />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Signaallijnen (AV/audio)
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Wij leggen de signaallijnen voor AV en audio. Jouw AV-partner installeert de apparatuur. Zo simpel is het.
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
                  <h3 className="text-xl font-bold text-[#0E243A] mb-2">Belangrijk: Wij zijn géén AV-installateur</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Wij leggen de signaallijnen en kabels voor audio en AV. We bereiden aansluitpunten voor. Maar we installeren geen speakers, versterkers of AV-systemen. Dat doet jouw AV-partner.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Wat we doen
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Audiokabels en signaallijnen trekken tussen ruimtes en naar de centrale technische ruimte. Kabelroutes voorbereiden, aansluitpunten afmonteren, labelen en documenteren.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 rounded-xl p-8">
                <Volume2 className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Wat we doen</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Audiokabels en signaallijnen trekken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Tussen ruimtes en naar technische ruimte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Kabelroutes voorbereiden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Aansluitpunten afmonteren</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Labelen en documenteren</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <Cable className="w-12 h-12 text-red-600 mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Wat we niet doen</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    <span>Speakers ophangen of monteren</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    <span>Versterkers aansluiten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    <span>Systeem afregelen of configureren</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    <span>Audio-ontwerp maken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    <span>Apparatuur leveren</span>
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
              Voor welke ruimtes?
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
              Wij leggen signaallijnen voor vergaderruimtes, presentatieruimtes, auditoriums en andere ruimtes waar AV-apparatuur gebruikt wordt.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Vergaderruimtes',
                  items: [
                    'Bekabeling voor microfoons',
                    'Lijnen naar beamer/scherm',
                    'Audio naar centrale ruimte',
                    'Voorbereiden aansluitpunten',
                  ],
                },
                {
                  title: 'Presentatieruimtes',
                  items: [
                    'AV-kabels naar presentatiepunten',
                    'Bekabeling voor geluidssysteem',
                    'Verbindingen naar rack',
                    'Netjes weggewerkt',
                  ],
                },
              ].map((section, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-[#0E243A] mb-6">{section.title}</h3>
                  <ul className="space-y-3 text-gray-700">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
              Samenwerking met jouw AV-partner
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
              Wij werken vaak samen met AV-installateurs. Wij leggen de kabels en bereiden alles voor, zij installeren de apparatuur en stellen het systeem af. Zo doet iedereen waar hij goed in is.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#FF6A00] rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#0E243A] mb-4">Heb je nog geen AV-partner?</h3>
              <p className="text-gray-700 leading-relaxed">
                Wij kunnen je helpen met het vinden van een betrouwbare AV-installateur in jouw regio. Neem contact op en we denken mee.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0E243A] to-[#1a3a5a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Signaallijnen nodig?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Neem contact op en we bespreken de bekabeling voor jouw AV-project.
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
