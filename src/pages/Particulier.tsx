import Hero from '../components/Hero';
import SEO from '../components/SEO';
import { Home, Wifi, Volume2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackgroundOverlay from '../components/BackgroundOverlay';

export default function Particulier() {
  return (
    <>
      <SEO
        title="Particuliere ICT Diensten - WiFi Thuis"
        description="ICT-diensten voor particulieren. WiFi-installatie in uw woning, tuinkantoor en schuur. Professionele audio-installaties voor thuis."
        keywords="particulier wifi, wifi thuis, tuinkantoor netwerk, audio installatie thuis, wifi woning"
        url="https://signaalmakers.nl/particulier"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Particulier', item: 'https://signaalmakers.nl/particulier' }
        ]}
      />
      <div>
      <Hero
        title="Wifi-installatie voor particulieren"
        subtitle="Professionele wifi en audio-installaties voor thuis. Van wifi in uw hele woning tot internet in tuinkantoor en schuur."
        primaryButtonText="Vraag een thuisnetwerk-check"
        primaryButtonLink="/contact"
      />

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="wifi" density="medium" color="blue" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
              Professionele wifi-installatie thuis
            </h2>
            <p className="text-lg text-gray-600">
              Als u thuiswerkt of gewoon overal in huis stabiel internet wilt, verdient u professionele kwaliteit. Geen dode hoeken meer, geen bufferende video's. Gewoon <a href="/diensten/wifi-netwerk">wifi</a> die overal werkt.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-lg p-8">
              <Home className="w-12 h-12 text-[#FF6A00] mb-4" />
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Wifi in hele woning</h3>
              <p className="text-gray-600 mb-4">
                Stabiel <a href="/diensten/wifi-netwerk">internet</a> in elke kamer, van kelder tot zolder en van voor tot achter. Geen wegvallende verbindingen of dode hoeken meer.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Professionele wifi access points</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Databekabeling waar mogelijk</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Thuiswerken zonder zorgen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Smart home-integratie</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <Wifi className="w-12 h-12 text-[#FF6A00] mb-4" />
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Wifi tuinkantoor en overkapping</h3>
              <p className="text-gray-600 mb-4">
                Werkt u vanuit uw tuinkantoor of schuur? Wij zorgen voor stabiel internet tot in uw tuin.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Wifi tot in de tuin</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Outdoor wifi access points</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Netwerkbekabeling naar schuur of kantoor</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Volledig geïntegreerd</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <Volume2 className="w-12 h-12 text-[#FF6A00] mb-4" />
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Audio-installatie huis en tuin</h3>
              <p className="text-gray-600 mb-4">
                Muziek door het hele huis en in de tuin. Bedienbaar vanaf uw smartphone of tablet. <a href="/diensten/audio">Meer over audio-installaties</a>.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Inbouw en plafondluidsprekers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Weerbestendige tuinspeakers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Multiroom: per kamer anders</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Spotify, radio of eigen muziek</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0E243A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Herkenbare wifi-problemen thuis
            </h2>
            <p className="text-lg text-gray-300 mb-12 text-center">
              Herkent u een van deze wifi-problemen? Signaalmakers lost het op met een professionele <a href="/diensten/wifi-netwerk">wifi-installatie</a>. <a href="/contact">Neem contact op</a> voor advies.
            </p>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Wifi bereikt niet de hele woning</h3>
                <p className="text-gray-300">
                  Veel voorkomend probleem: de router staat beneden en boven is nauwelijks wifi-bereik. Wij plaatsen professionele wifi access points op strategische plekken, zodat u overal in huis snel internet heeft.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Thuiswerken lastig door slechte wifi</h3>
                <p className="text-gray-300">
                  Videobellingen hangen, bestanden uploaden duurt eindeloos. Wij analyseren uw thuisnetwerk, installeren professionele wifi access points en zorgen voor stabiel internet op uw werkplek.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Geen internet in tuinkantoor of schuur</h3>
                <p className="text-gray-300">
                  De wifi reikt niet tot in de tuin en werken vanaf uw mobiele hotspot is geen goede oplossing. Wij leggen netwerkbekabeling of plaatsen outdoor wifi access points, zodat u overal kunt werken.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Muziek door heel het huis</h3>
                <p className="text-gray-300">
                  U wilt muziek in meerdere kamers en in de tuin. Wij installeren een professionele audio-installatie met plafondluidsprekers door het hele huis. Bedienbaar vanaf smartphone of tablet.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Smart home apparaten vallen vaak uit</h3>
                <p className="text-gray-300">
                  Slimme lampen, thermostaten en camera's die offline gaan. Vaak ligt dat aan een overbelast wifi-netwerk of zwak signaal. Wij installeren professionele wifi met voldoende dekking en maken indien nodig een apart netwerk voor smart home apparaten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <BackgroundOverlay variant="data" density="light" color="grey" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              Werkwijze wifi-installatie thuis
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Ook bij particuliere wifi-installaties werken we grondig en professioneel. Zo weet u precies wat u kunt verwachten.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#0E243A] mb-2">Kennismaking en wifi-meting</h3>
                  <p className="text-gray-600">
                    We komen langs om uw woning te bekijken, uw wensen voor de wifi-installatie te bespreken en de wifi-situatie in kaart te brengen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#0E243A] mb-2">Advies en offerte</h3>
                  <p className="text-gray-600">
                    U ontvangt een helder advies voor uw wifi-installatie met verschillende opties en een transparante offerte zonder verborgen kosten.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#0E243A] mb-2">Planning wifi-installatie</h3>
                  <p className="text-gray-600">
                    We plannen de wifi-installatie op een voor u geschikt moment. De meeste particuliere installaties duren één werkdag.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#0E243A] mb-2">Installatie en uitleg</h3>
                  <p className="text-gray-600">
                    Professionele wifi-installatie met access points en databekabeling, alles netjes afgewerkt. We leggen uit hoe het netwerk werkt en hoe u het kunt beheren.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-lg p-8 shadow">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Wat u kunt verwachten van uw wifi-monteur</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Nette werkwijze met respect voor uw woning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Databekabeling wordt netjes weggewerkt waar mogelijk</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Professionele wifi access points die jarenlang meegaan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Uitleg hoe uw thuisnetwerk werkt en hoe u het beheert</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>Complete documentatie van wifi-instellingen en wachtwoorden</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="audio" density="medium" color="blue" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              Onze diensten voor particulieren
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/diensten/wifi-netwerk"
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Wifi & Netwerk</h3>
                <p className="text-gray-600">Professionele wifi in uw hele woning, inclusief tuin en bijgebouwen.</p>
              </Link>

              <Link
                to="/diensten/databekabeling"
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Databekabeling</h3>
                <p className="text-gray-600">Bekabeling naar werkplekken en entertainment-centra.</p>
              </Link>

              <Link
                to="/diensten/internet-telefonie"
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Internet</h3>
                <p className="text-gray-600">Snelle internetverbinding via onze partner.</p>
              </Link>

              <Link
                to="/diensten/audio"
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Audio-installaties</h3>
                <p className="text-gray-600">Multiroom audio voor binnen en buiten.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
