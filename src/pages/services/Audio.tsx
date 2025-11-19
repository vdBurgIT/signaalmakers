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
        <BackgroundOverlay variant="audio" density="medium" color="mixed" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-6 mb-8">
              <Volume2 className="w-12 h-12 text-[#FF6A00] flex-shrink-0" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
                  Audio-installaties voor elke situatie
                </h2>
                <p className="text-lg text-gray-600">
                  Signaalmakers ontwerpt, levert en installeert vaste geluidsinstallaties in heel Nederland, voor zowel zakelijke als particuliere klanten. Van achtergrondmuziek tot sportveld-audio.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Zakelijke audio-installaties</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Achtergrondmuziek winkel en horeca</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Audio vergaderruimte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Multi-zone audio-installaties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Omroepinstallatie magazijn en bedrijfshal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Particuliere audio-installaties</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Audio-installatie woonkamer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Audio-installatie tuin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Multiroom audio-installatie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Audio tuinkantoor en overkapping</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#0E243A] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Audio voor sportvelden en sportclubs</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Weerbestendige luidsprekers</h4>
                    <p className="text-gray-300">
                      Professionele outdoor speakers speciaal ontworpen voor buitengebruik. Bestand tegen regen, wind en temperatuurschommelingen.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Tribune-geluid</h4>
                    <p className="text-gray-300">
                      Muziek en omroep richting publiek voor een professionele wedstrijdervaring. Duidelijk verstaanbaar voor alle toeschouwers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Omroepinstallatie veld</h4>
                    <p className="text-gray-300">
                      Rondom het veld voor aankondigingen en informatie. Verschillende zones (veld, tribune, kantine) met aparte volumeregeling.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Audio kantine en kleedkamers</h4>
                    <p className="text-gray-300">
                      Geluidsinstallaties voor binnen en buiten aangesloten op één centraal systeem. Eenvoudig te bedienen vanuit één punt.
                    </p>
                  </div>
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
              Hoe werkt een audio-installatie?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Bekabelde audio-installatie</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Centrale versterker met bekabeling naar speakers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Hoogste betrouwbaarheid en geluidskwaliteit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Geen vertraging of haperingen</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Wifi en netwerk audio</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Speakers via netwerk aangestuurd</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Flexibel uitbreidbaar met extra zones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Minder zichtbare bekabeling</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow text-center">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Achtergrondmuziek retail</h3>
                <p className="text-gray-600">
                  Creëer de juiste sfeer in uw winkel met professionele achtergrondmuziek via plafond- of wandluidsprekers.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow text-center">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Audio-installatie horeca</h3>
                <p className="text-gray-600">
                  Voor restaurants, cafés en hotels. Binnen en buiten met aparte zones voor bar, lounge, eethoek en terras.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow text-center">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Audio tuin en terras</h3>
                <p className="text-gray-600">
                  Weerbestendige buitenluidsprekers geplaatst voor optimale geluidsrichting, gekoppeld aan binneninstallatie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              Werkwijze van Signaalmakers
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Elke audio-installatie begint met een goede inventarisatie. We luisteren naar uw wensen en bespreken het gewenste gebruik.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#0E243A] mb-2">Inventarisatie</h3>
                  <p className="text-gray-600">
                    We bespreken toepassing, ruimtes, gewenste geluidsniveau's en bediening. Indien nodig komen we op locatie kijken en meten.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#0E243A] mb-2">Ontwerp en plan</h3>
                  <p className="text-gray-600">
                    We maken een voorstel voor de geluidsinstallatie: type luidsprekers, plaatsing, zones, bekabeling en bediening. U krijgt een duidelijk plan met uitleg.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#0E243A] mb-2">Installatie en bekabeling</h3>
                  <p className="text-gray-600">
                    We plaatsen de luidsprekers, leggen bekabeling netjes aan, monteren versterkers en eventueel patchkast-aansluitingen. We werken netjes en laten de ruimte opgeruimd achter.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#0E243A] mb-2">Afstelling en uitleg</h3>
                  <p className="text-gray-600">
                    We stellen de installatie af op verstaanbaarheid en beleving, testen alle zones en geven een korte, duidelijke uitleg over de bediening.
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Veelgestelde vragen over audio-installaties
            </h2>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#0E243A] mb-2">
                  Wat is het verschil tussen een consumentenset en een professionele geluidsinstallatie?
                </h3>
                <p className="text-gray-600">
                  Een professionele geluidsinstallatie is ontworpen voor langdurig gebruik, betere dekking en eenvoudige bediening in grotere ruimtes of meerdere zones. Consumentenproducten zijn vaak bedoeld voor één kamer en minder geschikt voor winkels, kantoren, horeca of sportvelden.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#0E243A] mb-2">
                  Doen jullie ook audio op sportvelden en tribunes?
                </h3>
                <p className="text-gray-600">
                  Ja, we installeren vaste audio-installaties voor sportvelden, tribunes en sportkantines. We gebruiken weerbestendige luidsprekers en delen het terrein op in zones, zodat u per deel (veld, tribune, kantine) het volume kunt regelen en omroepen duidelijk verstaanbaar zijn.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#0E243A] mb-2">
                  Kan ik mijn eigen muziekbronnen blijven gebruiken?
                </h3>
                <p className="text-gray-600">
                  In de meeste gevallen wel. U kunt vaak blijven streamen vanaf diensten zoals Spotify, radio-apps of uw eigen muziekbibliotheek. We bespreken vooraf welke bronnen u wilt gebruiken en stemmen de installatie daarop af.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#0E243A] mb-2">
                  Hoe weet ik hoeveel luidsprekers ik nodig heb?
                </h3>
                <p className="text-gray-600">
                  Dat hangt af van de grootte van de ruimte, de akoestiek en het gewenste geluidsniveau. Als vuistregel geldt voor achtergrondmuziek ongeveer één luidspreker per 25–40 m², maar we maken altijd een voorstel op maat na een inventarisatie.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
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
