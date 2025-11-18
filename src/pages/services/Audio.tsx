import Hero from '../../components/Hero';
import SEO from '../../components/SEO';
import { Volume2, CheckCircle2 } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export default function Audio() {
  return (
    <>
      <SEO
        title="Audio Installaties - Professioneel Geluid voor Bedrijven, Particulieren en Sportclubs"
        description="Professionele audio-installaties en geluidsinstallaties in heel Nederland. Van achtergrondmuziek winkel tot sportveld audio, vergaderruimtes en multiroom systemen thuis."
        keywords="audio installatie, geluidsinstallatie, achtergrondmuziek, plafondluidsprekers, multiroom audio, geluidssysteem, audio sportveld, omroepinstallatie, tribune geluid, sportclub audio"
        url="https://signaalmakers.nl/diensten/audio"
      />
      <div>
      <Hero
        title="Audio-installaties zakelijk en particulier"
        subtitle="Of het nu gaat om achtergrondmuziek in een winkel, heldere spraak in vergaderruimtes, multiroom geluid thuis of een omroepinstallatie op het sportveld: wij installeren professionele audio-installaties en geluidsinstallaties die gewoon werken."
        primaryButtonText="Plan een audio-advies"
        primaryButtonLink="/contact"
      />

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="audio" density="medium" color="blue" />
        <div className="container mx-auto px-4">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex gap-6 mb-12">
              <Volume2 className="w-12 h-12 text-[#FF6A00] flex-shrink-0" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
                  Audio-installaties zakelijk en particulier
                </h2>
                <p className="text-lg text-gray-600">
                  Of het nu gaat om achtergrondmuziek in een winkel, heldere spraak in vergaderruimtes, multiroom geluid thuis of een omroepinstallatie op het sportveld: wij installeren professionele audio-installaties en geluidsinstallaties die gewoon werken. Signaalmakers ontwerpt, levert en installeert vaste geluidsinstallaties in heel Nederland, voor zowel zakelijke als particuliere klanten.
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
                      <p className="text-sm text-gray-500">Met een goede audio-installatie bepaalt u de sfeer in uw winkel, restaurant of café. Wij plaatsen discrete plafondluidsprekers of wandluidsprekers, aangesloten op een centrale versterker. U kunt muziek streamen via diensten als Spotify, radio-apps of uw eigen muziekbibliotheek, met per zone het juiste volume.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Audio vergaderruimte</strong>
                      <p className="text-sm text-gray-500">In vergaderruimtes en overlegkamers zorgen we voor heldere spraak en gelijkmatige dekking. Denk aan plafondluidsprekers, eventueel aangevuld met microfoons en een centrale versterker. Zo zijn hybride vergaderingen goed te volgen en kunt u eenvoudig schakelen tussen presentatie, videovergadering en achtergrondgeluid.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Multi-zone audio-installaties</strong>
                      <p className="text-sm text-gray-500">In grotere panden is vaak behoefte aan verschillende audiobronnen of volumes per ruimte. Met een multi-zone geluidsinstallatie kunt u per zone (bijvoorbeeld winkelvloer, entree, balie, kantoor, magazijn) het volume en de muziekbron eenvoudig regelen, centraal of per ruimte.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Omroepinstallatie magazijn en bedrijfshal</strong>
                      <p className="text-sm text-gray-500">In magazijnen, werkplaatsen en bedrijfshallen is verstaanbare omroep van groot belang. Wij plaatsen luidsprekers op de juiste posities en zorgen voor een omroepsysteem waarmee u medewerkers duidelijk kunt informeren of oproepen, ook op grotere afstanden en in rumoerige omgevingen.</p>
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
                      <p className="text-sm text-gray-500">Voor de woonkamer realiseren we een nette, vaste audio-installatie met inbouw- of plafondluidsprekers. Zo geniet u van goed geluid zonder losse boxen in het zicht, aangesloten op uw tv, streamer of hifi-apparatuur.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Audio-installatie tuin</strong>
                      <p className="text-sm text-gray-500">Met weerbestendige tuinspeakers geniet u ook buiten van muziek. Wij plaatsen speakers in de tuin, op het terras of onder de overkapping en koppelen deze aan uw bestaande installatie. Bediening kan gewoon via uw smartphone, tablet of vaste bediening binnen.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Multiroom audio-installatie</strong>
                      <p className="text-sm text-gray-500">Met een multiroom audio-installatie heeft u muziek door het hele huis. In elke ruimte dezelfde muziek of juist per kamer iets anders: u bepaalt het zelf. Wij zorgen voor de bekabeling, de luidsprekers en de centrale aansturing.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Audio tuinkantoor en overkapping</strong>
                      <p className="text-sm text-gray-500">Heeft u een tuinkantoor, schuur of overkapping waar u werkt of ontspant? Wij leggen een vaste audio-installatie aan die gekoppeld kan worden aan uw thuisnetwerk en bestaande apparatuur. Zo sluit audio-installatie en wifi-netwerk mooi op elkaar aan.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FF6A00] to-[#FF8533] text-white rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Audio voor sportvelden en sportclubs</h3>
              <p className="text-white/90 mb-6">
                Naast kantoren, winkels en horeca verzorgen we ook vaste geluidsinstallaties voor sportlocaties in heel Nederland. Denk aan:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span>Sportvelden en voetbalclubs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span>Tribunes met geluid voor publiek</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span>Sportkantines en clubhuizen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span>Omroepsystemen rond het veld</span>
                  </li>
                </ul>
              </div>
              <p className="text-white/90 mb-4">
                Wij ontwerpen en installeren vaste geluidsinstallaties met:
              </p>
              <ul className="space-y-2 text-white/90 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span>Weerbestendige luidsprekers / speakers voor buitengebruik</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span>Tribune-geluid voor muziek en omroep richting publiek</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span>Omroepinstallatie rondom het veld voor aankondigingen en informatie</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span>Audio in kantine, entree en kleedkamers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span>Verschillende zones (veld, tribune, kantine) met aparte volumeregeling</span>
                </li>
              </ul>
              <p className="text-white/90 text-sm">
                Daarbij letten we op verstaanbaarheid, dekking en geluidsdruk, zodat iedereen op het terrein de boodschap goed hoort, zonder dat de omgeving onnodig last heeft van overmatig geluid.
              </p>
            </div>

            <div className="bg-[#0E243A] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Hoe werkt een audio-installatie technisch?</h3>
              <p className="text-gray-300 mb-6">
                Afhankelijk van uw situatie en wensen gebruiken we professionele netwerk-audiosystemen of slimme speakers, altijd met een vaste basis in bekabeling en centrale aansturing. Belangrijk is dat de audio-installatie betrouwbaar is, eenvoudig te bedienen en goed past bij de ruimte.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Bekabelde audio-installatie</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Centrale versterker met bekabeling naar plafondluidsprekers of wandluidsprekers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Hoogste betrouwbaarheid en geluidskwaliteit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Geen vertraging of haperingen door een druk wifi-netwerk</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Wifi en netwerk audio-installatie</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Luidsprekers met eigen versterker die via het netwerk aangestuurd worden</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Flexibel uit te breiden met extra ruimtes of zones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>Minder zichtbare bekabeling nodig</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-300 text-sm mt-6">
                In veel gevallen combineren we bekabelde audio en netwerk-audio, zodat u per ruimte de beste oplossing heeft.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-12 text-center">
            Populaire audio-installaties
          </h2>

          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Achtergrondmuziek retail</h3>
                <p className="text-gray-600 mb-4">
                  Creëer de juiste sfeer in uw winkel met professionele achtergrondmuziek via plafond- of wandluidsprekers. U kunt muziek streamen vanaf uw favoriete dienst of eigen muziekbibliotheek, met gelijkmatige dekking door de hele winkel en volumeregeling per zone.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Discrete plafond- of wandluidsprekers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Gelijkmatige dekking door hele winkel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Volumeregeling per zone</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Audio-installatie horeca</h3>
                <p className="text-gray-600 mb-4">
                  Voor restaurants, cafés en hotels verzorgen we audio-installaties voor binnen en buiten. Denk aan discrete plafondluidsprekers in het restaurant, speakers op het terras en aparte zones voor bar, lounge en eethoek. Bediening kan centraal, via een tablet of via een eenvoudig wandpaneel.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Binnen en outdoor luidsprekers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Aparte zones (bar, lounge, eethoek, terras)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Centrale bediening via tablet of wandpaneel</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Audio-installatie tuin en terras</h3>
                <p className="text-gray-600 mb-4">
                  Met weerbestendige buitenluidsprekers geniet u van muziek op het terras, in de tuin of onder de veranda. De speakers worden zo geplaatst dat ze goed hoorbaar zijn op de gewenste plek, maar zo min mogelijk richting buren stralen. Vaak koppelen we de buitenzone aan uw bestaande binneninstallatie.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Weerbestendige buitenluidsprekers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Optimale plaatsing voor geluidsrichting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Gekoppeld aan binneninstallatie</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-8 text-center">
              Werkwijze van Signaalmakers
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              Elke audio-installatie begint met een goede inventarisatie. We luisteren naar uw wensen, bekijken de ruimte(s) en bespreken het gewenste gebruik: achtergrondmuziek, omroepsysteem, sportveld-audio, vergaderruimte of thuisoplossing.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#0E243A] mb-3">1. Inventarisatie</h3>
                <p className="text-gray-600 text-sm">
                  We bespreken toepassing, ruimtes, gewenste geluidsniveau's en bediening. Indien nodig komen we op locatie kijken en meten.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#0E243A] mb-3">2. Ontwerp en plan</h3>
                <p className="text-gray-600 text-sm">
                  We maken een voorstel voor de geluidsinstallatie: type luidsprekers, plaatsing, zones, bekabeling en bediening. U krijgt een duidelijk plan met uitleg.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#0E243A] mb-3">3. Installatie en bekabeling</h3>
                <p className="text-gray-600 text-sm">
                  We plaatsen de luidsprekers, leggen bekabeling netjes aan, monteren versterkers en eventueel patchkast-aansluitingen. We werken netjes en laten de ruimte opgeruimd achter.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#0E243A] mb-3">4. Afstelling en uitleg</h3>
                <p className="text-gray-600 text-sm">
                  We stellen de installatie af op verstaanbaarheid en beleving, testen alle zones en geven een korte, duidelijke uitleg over de bediening.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0E243A] to-[#1a3a5a] text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Werkgebied – audio-installaties in heel Nederland</h3>
              <p className="text-white/90 mb-4">
                Signaalmakers verzorgt audio-installaties en geluidsinstallaties door heel Nederland. Of het nu gaat om een winkel, kantoor, horecalocatie, magazijn, sportvereniging of particulier project: wij denken met u mee over een passende, betrouwbare oplossing.
              </p>
              <p className="text-white/90">
                Waar u ook in Nederland zit, we kijken samen naar wat nodig is om de juiste geluidsinstallatie te realiseren: van advies tot en met volledige montage en oplevering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-12 text-center">
              Veelgestelde vragen over audio-installaties
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-lg font-bold text-[#0E243A] mb-2">
                  Wat is het verschil tussen een consumentenset en een professionele geluidsinstallatie?
                </h3>
                <p className="text-gray-600">
                  Een professionele geluidsinstallatie is ontworpen voor langdurig gebruik, betere dekking en eenvoudige bediening in grotere ruimtes of meerdere zones. Consumentenproducten zijn vaak bedoeld voor één kamer en minder geschikt voor winkels, kantoren, horeca of sportvelden.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-lg font-bold text-[#0E243A] mb-2">
                  Doen jullie ook audio op sportvelden en tribunes?
                </h3>
                <p className="text-gray-600">
                  Ja, we installeren vaste audio-installaties voor sportvelden, tribunes en sportkantines. We gebruiken weerbestendige luidsprekers en delen het terrein op in zones, zodat u per deel (veld, tribune, kantine) het volume kunt regelen en omroepen duidelijk verstaanbaar zijn.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-lg font-bold text-[#0E243A] mb-2">
                  Kan ik mijn eigen muziekbronnen blijven gebruiken?
                </h3>
                <p className="text-gray-600">
                  In de meeste gevallen wel. U kunt vaak blijven streamen vanaf diensten zoals Spotify, radio-apps of uw eigen muziekbibliotheek. We bespreken vooraf welke bronnen u wilt gebruiken en stemmen de installatie daarop af.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-lg font-bold text-[#0E243A] mb-2">
                  Hoe weet ik hoeveel luidsprekers ik nodig heb?
                </h3>
                <p className="text-gray-600">
                  Dat hangt af van de grootte van de ruimte, de akoestiek en het gewenste geluidsniveau. Als vuistregel geldt voor achtergrondmuziek ongeveer één luidspreker per 25–40 m², maar we maken altijd een voorstel op maat na een inventarisatie.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-lg font-bold text-[#0E243A] mb-2">
                  Werkt het ook met mijn bestaande apparatuur?
                </h3>
                <p className="text-gray-600">
                  In veel situaties kunnen we bestaande versterkers of luidsprekers hergebruiken binnen een nieuwe installatie. We bekijken wat u al heeft, beoordelen de kwaliteit en geven eerlijk advies of hergebruik verstandig is.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
