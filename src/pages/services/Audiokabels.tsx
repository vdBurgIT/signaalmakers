import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { Volume2, CheckCircle2, Cable, AlertCircle } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export default function Audiokabels() {
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
