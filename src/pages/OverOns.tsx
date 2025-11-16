import Hero from '../components/Hero';
import { User, Target, Ear, Ruler, Wrench, CheckCircle } from 'lucide-react';
import BackgroundOverlay from '../components/BackgroundOverlay';

export default function OverOns() {
  return (
    <div>
      <Hero
        title="Over Signaalmakers"
        subtitle="Vakmanschap en eerlijkheid in netwerk- en IT-installaties. Zo simpel is het."
        primaryButtonText="Neem contact op"
        primaryButtonLink="/contact"
      />

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="mixed" density="light" color="mixed" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-6 mb-12">
              <User className="w-12 h-12 text-[#FF6A00] flex-shrink-0" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
                  Ons verhaal
                </h2>
                <div className="text-lg text-gray-600 space-y-4">
                  <p>
                    Signaalmakers is opgericht door Kevin Froger, een ervaren netwerk- en IT-specialist die na jaren in de sector te hebben gewerkt besloot zijn eigen weg te gaan. De reden? Te vaak zag hij haastwerk, halve oplossingen en gebrek aan echte aandacht voor de klant.
                  </p>
                  <p>
                    Wij geloven in een andere aanpak: zorgvuldig luisteren naar wat u écht nodig heeft, professionele metingen uitvoeren en installaties afleveren waar u de komende 10-15 jaar geen omkijken naar heeft. Geen grote beloftes, geen verborgen kosten, gewoon eerlijk vakmanschap.
                  </p>
                  <p>
                    We werken samen met een vaste IT-partner voor diensten als internet, telefonie en Microsoft 365. Zo kunt u voor alles bij één aanspreekpunt terecht, terwijl wij ons focussen op wat we het beste kunnen: installaties op locatie.
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
            <div className="flex gap-6 mb-12">
              <Target className="w-12 h-12 text-[#FF6A00] flex-shrink-0" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
                  Onze werkwijze
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We werken volgens een bewezen stappenplan dat garandeert dat u krijgt wat u nodig heeft.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow">
                <Ear className="w-10 h-10 text-[#FF6A00] mb-4" />
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">1. Luisteren</h3>
                <p className="text-gray-600">
                  We beginnen altijd met goed luisteren. Wat is uw situatie? Wat zijn uw wensen en eisen? Welke problemen wilt u oplossen? Pas als we dat goed begrijpen, gaan we verder.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <Ruler className="w-10 h-10 text-[#FF6A00] mb-4" />
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">2. Meten</h3>
                <p className="text-gray-600">
                  Bij wifi-projecten voeren we altijd professionele metingen uit. Geen gokwerk, maar feitelijke data over signaalsterkte, interferentie en optimale plaatsing van access points.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <Target className="w-10 h-10 text-[#FF6A00] mb-4" />
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">3. Plannen</h3>
                <p className="text-gray-600">
                  Op basis van metingen en uw eisen maken we een gedetailleerd plan. U ontvangt plattegronden met access point-locaties, bekabelingsroutes en een heldere offerte.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <Wrench className="w-10 h-10 text-[#FF6A00] mb-4" />
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">4. Installeren</h3>
                <p className="text-gray-600">
                  Professionele installatie volgens het plan. Kabels netjes weggewerkt, apparatuur correct gemonteerd, alles getest en gedocumenteerd. U krijgt een installatie waar u trots op kunt zijn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0E243A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Waar we voor staan
            </h2>
            <p className="text-lg text-gray-300 mb-12 text-center">
              Onze kernwaarden zijn simpel maar belangrijk
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF6A00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Vakmanschap</h3>
                <p className="text-gray-300">
                  We doen ons werk met trots en aandacht voor detail. Nette installaties zijn ons visitekaartje.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF6A00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Eerlijkheid</h3>
                <p className="text-gray-300">
                  Heldere communicatie en transparante prijzen. Geen verborgen kosten of valse beloftes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF6A00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Klantgericht</h3>
                <p className="text-gray-300">
                  Uw probleem oplossen is ons doel. We leveren wat u nodig heeft, niet wat het meest oplevert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="mixed" density="light" color="mixed" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
              Waarom kiezen voor Signaalmakers?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Simpel: omdat we doen wat we beloven en leveren wat u nodig heeft.
            </p>

            <div className="bg-gray-50 rounded-lg p-8">
              <ul className="space-y-4 text-left max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Professionele wifi-metingen standaard bij elk project</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Nette installaties met aandacht voor detail</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Heldere offertes zonder verborgen kosten</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Complete documentatie en testrapportages</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Persoonlijk contact, geen calcenters</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Samenwerking met vaste IT-partner voor complete service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
