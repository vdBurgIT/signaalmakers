import Hero from '../../components/Hero';
import { Volume2, CheckCircle2 } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export default function Audio() {
  return (
    <div>
      <Hero
        title="Professionele audio-installaties"
        subtitle="Audio-installaties voor bedrijven en particulieren. Van achtergrondmuziek in winkel tot multiroom-systemen thuis."
        primaryButtonText="Plan een audio-advies"
        primaryButtonLink="/contact"
      />

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="audio" density="medium" color="blue" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-6 mb-12">
              <Volume2 className="w-12 h-12 text-[#FF6A00] flex-shrink-0" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
                  Audio-installaties zakelijk en particulier
                </h2>
                <p className="text-lg text-gray-600">
                  Of het nu gaat om achtergrondmuziek in een winkel, audio in vergaderruimten of multiroom geluid thuis, wij installeren professionele audio-installaties met plafondluidsprekers die gewoon werken.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Zakelijke audio-installaties</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Achtergrondmuziek winkel en horeca</strong>
                      <p className="text-sm text-gray-500">Plafondluidsprekers in winkel, restaurant of kantoor met streaming vanaf Spotify, radio of eigen muziekbibliotheek.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Audio vergaderruimte</strong>
                      <p className="text-sm text-gray-500">Plafondluidsprekers en microfoons voor hybride vergaderingen, gekoppeld aan Microsoft Teams of Zoom.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Multi-zone audio-installaties</strong>
                      <p className="text-sm text-gray-500">Verschillende zones in winkel of horeca met eigen muziek of volume, centraal beheerd.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Omroepinstallatie magazijn</strong>
                      <p className="text-sm text-gray-500">Audio-installatie voor magazijnen of grote ruimtes waar mededelingen of oproepen gedaan moeten worden.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Particuliere audio-installaties</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Audio-installatie woonkamer</strong>
                      <p className="text-sm text-gray-500">Inbouw of plafondluidsprekers voor een strakke uitstraling zonder zichtbare boxen in uw woonkamer.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Audio-installatie tuin</strong>
                      <p className="text-sm text-gray-500">Weerbestendige tuinspeakers in tuin of op terras, bedienbaar vanaf uw smartphone of tablet.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Multiroom audio-installatie</strong>
                      <p className="text-sm text-gray-500">Muziek door het hele huis, synchroniseer of speel verschillende muziek per kamer.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Audio tuinkantoor en overkapping</strong>
                      <p className="text-sm text-gray-500">Audio-installatie in uw tuinkantoor, schuur of overkapping, gekoppeld aan uw thuisnetwerk.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#0E243A] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Hoe werkt een audio-installatie technisch?</h3>
              <p className="text-gray-300 mb-6">
                We gebruiken professionele netwerk-audio systemen of smart speakers afhankelijk van uw wensen en budget. Alle audio loopt via bekabeling of wifi-netwerk, bedienbaar vanaf smartphone, tablet of wandpaneel.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Bekabelde audio-installatie</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Centrale versterker met bekabeling naar plafondluidsprekers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Hoogste geluidskwaliteit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Geen wifi-vertraging</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Wifi en netwerk audio-installatie</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Luidsprekers met eigen versterker via wifi-netwerk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Flexibeler in gebruik en uitbreiding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Minder bekabeling nodig</span>
                    </li>
                  </ul>
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
              Populaire audio-installaties
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Achtergrondmuziek retail</h3>
                <p className="text-gray-600 mb-4">
                  Creëer de juiste sfeer in uw winkel met professionele achtergrondmuziek via plafondluidsprekers. Streaming vanaf Spotify Business of eigen muziekbibliotheek.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Discrete plafondluidsprekers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Gelijkmatige verdeling door hele winkel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Volume-aanpassing per zone</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Audio-installatie horeca</h3>
                <p className="text-gray-600 mb-4">
                  Professionele audio-installaties voor restaurants, cafés en hotels. Binnen en buiten op het terras.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Binnen en outdoor luidsprekers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Verschillende zones met eigen muziek</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Bediening vanaf tablet of smartphone</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Thuisbioscoop audio-installatie</h3>
                <p className="text-gray-600 mb-4">
                  Complete audio-installatie met inbouw of plafondluidsprekers voor uw woonkamer of bioscoopruimte.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Surround sound systemen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Inbouw of plafondluidsprekers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Optimale akoestiek en kalibratie</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Audio-installatie tuin en terras</h3>
                <p className="text-gray-600 mb-4">
                  Geniet van muziek in uw tuin met weerbestendige outdoor luidsprekers.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Weerbestendige tuinspeakers IP65+</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Discrete plaatsing in groen of gevel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Gekoppeld aan indoor systeem</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-12 text-center">
              Veel gestelde vragen
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#0E243A] mb-2">
                  Wat is het verschil tussen consument en professionele audio?
                </h3>
                <p className="text-gray-600">
                  Professionele audio is gebouwd voor langdurig gebruik, eenvoudig beheer en betere geluidskwaliteit over grotere afstanden. Consument audio (zoals losse Bluetooth speakers) is prima voor thuis, maar niet geschikt voor commerciële toepassingen.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#0E243A] mb-2">
                  Kan ik mijn eigen muziek afspelen?
                </h3>
                <p className="text-gray-600">
                  Ja, u kunt streamen vanaf Spotify, Apple Music, radio-apps of uw eigen muziekbibliotheek. Alle systemen die wij installeren ondersteunen meerdere muziekbronnen.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#0E243A] mb-2">
                  Hoeveel speakers heb ik nodig?
                </h3>
                <p className="text-gray-600">
                  Dat hangt af van de ruimte, gewenste geluidskwaliteit en akoestiek. Als vuistregel: voor achtergrondmuziek één speaker per 25-40m². Voor optimaal geluid doen we altijd eerst een inventarisatie.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#0E243A] mb-2">
                  Werkt het ook met mijn bestaande apparatuur?
                </h3>
                <p className="text-gray-600">
                  In veel gevallen kunnen we bestaande versterkers of speakers integreren in een nieuw systeem. We bekijken altijd eerst wat u al heeft en adviseren of dit geschikt is.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
