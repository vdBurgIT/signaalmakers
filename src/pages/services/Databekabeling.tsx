import Hero from '../../components/Hero';
import { Cable, Server, CheckCircle2 } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export default function Databekabeling() {
  return (
    <div>
      <Hero
        title="Professionele databekabeling en patchkasten"
        subtitle="Netwerkbekabeling Cat6 en Cat6A, nette patchkasten en serverkasten voor een toekomstbestendig bedrijfsnetwerk."
        primaryButtonText="Vraag een bekabelingsofferte"
        primaryButtonLink="/contact"
      />

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="data" density="medium" color="grey" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Professionele netwerkbekabeling
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Een goed bedrijfsnetwerk begint met kwalitatieve databekabeling. Wij installeren Cat6 en Cat6A netwerkbekabeling volgens de nieuwste normen en standaarden.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <div className="flex gap-4 mb-6">
                <Cable className="w-8 h-8 text-[#FF6A00] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Wat wij leveren</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Cat6 en Cat6A netwerkbekabeling voor snelheden tot 10 Gbit/s</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Nette databekabeling via plafond, vloer of kabelgoot</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Professionele RJ45-connectoren en patchpanels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Duidelijke labeling van alle kabels en netwerkaansluitingen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Testrapport met certificering per netwerkkabel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Complete as-built documentatie</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Cat6 of Cat6A netwerkbekabeling?</h3>
                <p className="text-gray-600 mb-4">
                  Cat6 databekabeling is geschikt voor de meeste toepassingen en ondersteunt snelheden tot 1 Gbit/s over 100 meter. Voor toekomstbestendigheid en 10 Gbit/s netwerken adviseren wij Cat6A.
                </p>
                <p className="text-gray-600">
                  Cat6A netwerkbekabeling heeft minder last van interferentie, ondersteunt PoE++ (tot 100W) voor wifi access points en is geschikt voor langere afstanden bij hoge snelheden. Het prijsverschil is beperkt, maar de voordelen zijn groot.
                </p>
              </div>

              <div className="bg-[#FF6A00] bg-opacity-10 rounded-lg p-6 border-2 border-[#FF6A00]">
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Waarom Cat6A netwerkbekabeling vaak slimmer is</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Netwerksnelheden tot 10 Gbit/s</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Betere afscherming tegen interferentie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Hoger PoE-vermogen voor wifi access points</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Toekomstbestendig voor 15+ jaar</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-6 mb-8">
              <Server className="w-12 h-12 text-[#FF6A00] flex-shrink-0" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
                  Patchkasten en serverkasten
                </h2>
                <p className="text-lg text-gray-600">
                  Een nette patchkast is het hart van uw bedrijfsnetwerk. Wij zorgen voor een overzichtelijke en professionele opstelling met duidelijke labeling.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Voor onze opruiming</h3>
                <p className="text-gray-600 mb-4">
                  Vaak treffen we patchkasten aan met losse kabels, onduidelijke netwerkaansluitingen en geen documentatie. Dit maakt onderhoud lastig en vergroot de kans op netwerkfouten.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Losse netwerkkabels en slechte routing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Geen labeling of netwerkdocumentatie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Moeilijk om fouten te traceren</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Na onze patchkast-installatie</h3>
                <p className="text-gray-600 mb-4">
                  Wij leveren een professionele patchkast met nette kabelmanagement, duidelijke labeling en complete netwerkdocumentatie.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Nette netwerkkabels en routing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Alle netwerkkabels gelabeld</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Patchpanels en netwerkswitches netjes gemonteerd</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Complete documentatie en schema's</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-[#0E243A] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Wat leveren we bij een professionele patchkast?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>19-inch wandkast of staande rack</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Patchpanels met RJ45-poorten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Kabelmanagement panelen</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Professionele patchkabels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Labeling van alle aansluitingen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Stroomvoorziening en aarding</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
