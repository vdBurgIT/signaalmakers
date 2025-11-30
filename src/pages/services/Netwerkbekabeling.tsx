import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import StructuredData from '../../components/StructuredData';
import { Cable, CheckCircle2, FileText } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export default function Netwerkbekabeling() {
  return (
    <>
      <SEO
        title="Databekabeling & Netwerkbekabeling Cat6/Cat6A | Signaalmakers"
        description="Specialist in databekabeling en netwerkbekabeling (Cat6/Cat6A). Professionele installatie met patchkasten, labeling en certificering. Landelijk actief."
        keywords="databekabeling, netwerkbekabeling, Cat6 bekabeling, Cat6A bekabeling, EMI crosstalk, PoE bekabeling, gecertificeerde oplevering, patchkasten, meetrapporten"
        url="https://signaalmakers.nl/diensten/netwerkbekabeling"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Diensten', item: 'https://signaalmakers.nl/diensten' },
          { name: 'Netwerkbekabeling', item: 'https://signaalmakers.nl/diensten/netwerkbekabeling' }
        ]}
      />
      <StructuredData type="LocalBusiness" />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Databekabeling &amp; netwerkbekabeling die presteert
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Professionele databekabeling en netwerkbekabeling met Cat6/Cat6A volgens best-practice. Aandacht voor EMI/crosstalk, PoE, routeplanning en strakke patchkasten. Gecertificeerd opgeleverd: meten, labels, schema&apos;s. Wij doen het voorwerk—MSP/IT doet inregeling.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="data" density="medium" color="grey" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Wat we doen
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Cat6/Cat6A bekabeling voor 1-10 Gbps. Werkplekken en ruimtes naar de <Link to="/diensten/patchkasten" style={{ fontWeight: 600 }}>patchkast</Link>. Aandacht voor EMI/crosstalk, PoE-geschikt en strakke routeplanning. Alles <Link to="/diensten/certificeren" style={{ fontWeight: 600 }}>gecertificeerd</Link> opgeleverd met meetrapporten.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 rounded-xl p-8">
                <Cable className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Wat we leveren</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Kabels trekken van werkplek/ruimte naar patchkast</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Cat6, Cat6A of Cat7 bekabeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Afmonteren van aansluitpunten en patchpanelen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Bundelen en netjes wegwerken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Labelen van elke kabel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Testen en opleveren met rapport</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <FileText className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Voor wie</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span><Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP's</Link> die monteurs en betrouwbare bekabeling nodig hebben</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Bedrijven die hun netwerk uitbreiden of vernieuwen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Installateurs die het kabelwerk willen uitbesteden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Kantoren, datacenters en bedrijfspanden</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#FF6A00] rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Cat6 of Cat6A – wat is het verschil?</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Cat6A: 10 Gbps tot 100 meter (~500 MHz). Cat6: 10 Gbps tot ~55 meter (~250 MHz). Cat6A is toekomstbestendiger en beter beschermd tegen EMI/crosstalk. Voor professionele installaties adviseren we meestal Cat6A.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Cat6A: 10 Gbps tot 100m, ~500 MHz, geschikt voor PoE++</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Cat6: 10 Gbps tot ~55m, ~250 MHz, geschikt voor PoE+</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Toekomstbestendig: aandacht voor EMI/crosstalk en afstanden</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              Waarom met ons werken?
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
              Eén standaard manier van werken. Geen gedoe achteraf. Jouw <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP</Link> kan direct door met de configuratie.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Eén standaard', desc: 'We werken altijd op dezelfde manier. Netjes, logisch en volgens afspraak.' },
                { title: 'Geen gedoe', desc: 'Alles wordt getest en gedocumenteerd. Als het niet werkt, horen we het graag.' },
                { title: 'MSP-proof', desc: 'Kabels zijn gelabeld, gedocumenteerd en klaar voor configuratie door jouw IT-partner.' },
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

      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0E243A] to-[#1a3a5a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar voor bekabeling?
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
                Vraag offerte
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
