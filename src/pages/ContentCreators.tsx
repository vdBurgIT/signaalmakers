import Hero from '../components/Hero';
import SEO from '../components/SEO';
import { Wifi, Upload, Video, CheckCircle2 } from 'lucide-react';
import BackgroundOverlay from '../components/BackgroundOverlay';

export default function ContentCreators() {
  return (
    <>
      <SEO
        title="Content Creators - Netwerk voor Streaming"
        description="Stabiel netwerk en wifi voor content creators en livestreamers. Professionele bekabeling en studio-netwerk voor uploads en gaming."
        keywords="content creator netwerk, streaming wifi, studio netwerk, gaming internet, livestream verbinding"
        url="https://signaalmakers.nl/content-creators"
      />
      <div>
      <Hero
        title="Netwerk en wifi voor content creators"
        subtitle="Stabiel internet, bekabeld netwerk en wifi voor streamen en uploaden in heel Nederland."
        primaryButtonText="Neem contact op"
        primaryButtonLink="/contact"
      />

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="network" density="medium" color="blue" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Als content creator wil je maar één ding: dat je stream of upload altijd doorgaat. Geen haperende livestream, geen dropframes, geen upload die op 99% blijft hangen. Signaalmakers richt jouw netwerk en wifi zo in dat je betrouwbaar kunt streamen, opnemen en uploaden. We denken mee over bekabeling, wifi, apparatuur aan de netwerk-kant en praktische instellingen, zodat jij je kunt focussen op je content.
            </p>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Of je nu live uitzendt, regelmatig video's publiceert op social media of met een kleine studio werkt voor klanten: wij zorgen voor een stabiele verbinding die past bij jouw manier van werken.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Voor wie is deze dienst?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Deze dienst is speciaal ontwikkeld voor:
            </p>
            <ul className="space-y-3 text-gray-600 mb-12">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Livestreamers (bijvoorbeeld gaming, talkshows, IRL-content, events)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Videomakers die regelmatig nieuwe content uploaden</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Podcasters met video en online shows</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Contentbureaus en kleine productiebedrijven met een eigen studio</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Solo-creators die vanuit huis, zolderkamer of kantoorstudio werken</span>
              </li>
            </ul>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Jouw kanaal en jouw workflow zijn het vertrekpunt. Wij vertalen dat naar een netwerk- en wifi-oplossing die past bij je plannen nu én bij je groei in de toekomst.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-6 mb-8">
              <Upload className="w-12 h-12 text-[#FF6A00] flex-shrink-0" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
                  Uploadsnelheid en stabiliteit – de basis van je stream
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Voor content creators is uploadsnelheid minstens zo belangrijk als downloadsnelheid. Een stabiele, constante upload is nodig voor:
                </p>
              </div>
            </div>

            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Livestreams in goede kwaliteit</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Het uploaden van grote videobestanden</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Gelijktijdig gebruik van communicatietools en online opslag</span>
              </li>
            </ul>

            <p className="text-lg text-gray-600 mb-6">
              Signaalmakers kijkt met je mee naar:
            </p>

            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>De inhoud van je internetabonnement en de daadwerkelijke uploadsnelheid</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>De kwaliteit waarin je wilt streamen of uploaden</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Het aantal apparaten en gebruikers dat jouw verbinding deelt</span>
              </li>
            </ul>

            <p className="text-lg text-gray-600 leading-relaxed">
              Op basis daarvan adviseren we over een passend internetpakket bij je provider en richten we je interne netwerk zo in dat die uploads en streams ook in de praktijk stabiel blijven. Geen gokwerk, maar een plan op basis van metingen en ervaring.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="wifi" density="light" color="grey" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-6 mb-8">
              <Wifi className="w-12 h-12 text-[#FF6A00] flex-shrink-0" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
                  Bekabeld waar het moet, wifi waar het kan
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Voor serieuze streaming en uploaden is een vaste, bekabelde verbinding naar je streaming-pc of werkstation de beste basis. Wifi blijft handig voor mobiele apparaten, maar bekabeld internet blijft het meest stabiel.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-6">
              Wij verzorgen onder andere:
            </p>

            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Een vaste UTP-verbinding (bijvoorbeeld Cat6 of Cat6A) naar je studio of werkkamer</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Extra netwerkaansluitingen voor tweede pc, NAS, werkstation of upload-pc</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Professionele access points voor goede wifi in je studio, kantoor en woning</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Een logische scheiding tussen "studio-netwerk" en het algemene thuis- of kantoornetwerk</span>
              </li>
            </ul>

            <p className="text-lg text-gray-600 leading-relaxed">
              Zo voorkom je dat een update, download of stream van iemand anders in huis jouw uitzending of upload onderbreekt.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-6 mb-8">
              <Video className="w-12 h-12 text-[#FF6A00] flex-shrink-0" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
                  Studio-netwerk op orde – router, switch en patchkast
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Veel content creators bouwen hun setup stap voor stap uit: eerst één pc, later een game-pc plus streaming-pc, extra schermen, een aparte opnamehoek, netwerkopslag en slimme apparatuur. Als het netwerk niet meegroeit, wordt het al snel onoverzichtelijk.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-6">
              Signaalmakers helpt je studio-netwerk op orde te krijgen:
            </p>

            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Keuze en basisconfiguratie van router en switch die passen bij jouw gebruik</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Aanleg, labelen en bundelen van UTP-bekabeling naar alle belangrijke punten</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Overzichtelijke meterkast of patchkast in plaats van een wirwar aan kabels</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Duidelijke structuur tussen apparaten voor gaming, streaming, upload en opslag</span>
              </li>
            </ul>

            <p className="text-lg text-gray-600 leading-relaxed">
              Het resultaat: een strak en overzichtelijk netwerk dat je begrijpt, zonder dat je zelf netwerkbeheerder hoeft te worden.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="data" density="light" color="blue" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Apparatuur en advies voor content creators
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Wij leveren en installeren netwerkapparatuur zoals routers, switches en access points en kijken of jouw huidige set-up deze goed kan benutten. Daarnaast geven we praktisch advies over:
            </p>

            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Nodige capaciteit voor montage-pc's, laptops en werkstations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Basiskeuzes voor camera's, opnamesetups en netwerkopslag (NAS)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Slim omgaan met back-ups, online opslag en samenwerken met andere makers</span>
              </li>
            </ul>

            <p className="text-lg text-gray-600 leading-relaxed">
              De kern blijft altijd je verbinding en je netwerk: dat is wat Signaalmakers voor je ontwerpt, installeert en optimaliseert. Apparatuuradvies sluit daar logisch op aan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Instellingen en praktijkadvies voor streaming en uploaden
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Een goed netwerk is stap één; de juiste instellingen zorgen ervoor dat je het maximale eruit haalt. We kijken samen met jou naar:
            </p>

            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Instellingen voor je streaming- en opname-software (zoals bitrate en resolutie) die passen bij jouw uploadsnelheid</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Praktische tips om je netwerk schoon te houden tijdens een stream of upload</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Grote downloads en back-ups buiten je stream- of uploadtijden</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Belangrijke apparaten (zoals streaming-pc en NAS) bekabeld aansluiten</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Andere gebruikers in huis of op kantoor informeren over piekmomenten</span>
              </li>
            </ul>

            <p className="text-lg text-gray-600 leading-relaxed">
              Zo krijg je niet alleen betere techniek, maar ook duidelijke afspraken en gewoontes waarmee je je kanaal professioneel kunt runnen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0E243A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Privacy en anonimiteit voor content creators
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Veel content creators werken liever op de achtergrond of willen niet dat hun locatie, naam of de inhoud van hun werk overal bekend wordt. Dat begrijpen wij volledig. Bij Signaalmakers gaan we zorgvuldig om met iedere klant en iedere studio, groot of klein.
            </p>

            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>We behandelen alle klanten gelijk, ongeacht het bereik of de grootte van het kanaal</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>We delen geen informatie over jouw werklocatie, setup of werkzaamheden met derden</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>We komen alleen op afspraak en communiceren rustig en discreet</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>We gebruiken nooit foto's of voorbeelden van projecten zonder jouw expliciete toestemming</span>
              </li>
            </ul>

            <p className="text-lg text-gray-300 leading-relaxed">
              Jouw privacy en anonimiteit blijven gewaarborgd. Wij zorgen voor een stabiele verbinding en een goed netwerk, terwijl jij de regie houdt over wat je wel en niet deelt.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Werkwijze – van speedtest tot stabiele setup
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Iedere situatie is anders. Daarom werken we met een vaste, duidelijke aanpak:
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#0E243A] mb-2">Intake en speedtest</h3>
                  <p className="text-gray-600">
                    We bespreken jouw content, stream- of uploaddoelen, huidige problemen en apparatuur. Daarna doen we een meting en speedtest om te zien wat je verbinding nu aankan.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#0E243A] mb-2">Plan en voorstel</h3>
                  <p className="text-gray-600">
                    Op basis van de metingen en jouw wensen maken we een concreet voorstel voor bekabeling, wifi, apparatuur aan de netwerk-kant en eventuele aanpassingen in je studio of werkruimte.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#0E243A] mb-2">Installatie en optimalisatie</h3>
                  <p className="text-gray-600">
                    We leggen kabels aan, plaatsen access points, richten router en switch in en maken je patchkast of meterkast overzichtelijk. We testen samen met jou of streams en uploads stabiel lopen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#0E243A] mb-2">Uitleg en nazorg</h3>
                  <p className="text-gray-600">
                    Je krijgt een korte uitleg over de nieuwe situatie, belangrijke wachtwoorden en een overzicht van de inrichting. Heb je later vragen of wil je uitbreiden, dan kun je opnieuw op ons rekenen.
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
              Werkgebied – voor content creators in heel Nederland
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Signaalmakers helpt content creators in heel Nederland. Of je nu vanuit een rijtjeshuis streamt, een kleine studio in de stad hebt of een kantoorruimte buitenaf gebruikt: wij denken met je mee over de beste oplossing voor jouw netwerk en wifi.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Waar je ook in Nederland zit, we kijken samen naar wat nodig is om je verbinding op orde te brengen, zodat jouw content zonder technische stress de wereld in kan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0E243A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar voor een stabiel netwerk voor jouw content?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Wil je zonder zorgen livestreamen, video's uploaden zonder opnieuw te hoeven beginnen en zeker zijn van een stabiele verbinding? Neem contact op met Signaalmakers voor een netwerk- en wifi-oplossing die speciaal is ingericht op content creators en andere makers die professioneel met online content bezig zijn.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Je kunt ons benaderen voor een vrijblijvende intake, een plan op maat en een complete uitvoering, zodat jouw techniek met je meegroeit terwijl jij aan je kanaal en je community bouwt.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              Neem contact op
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
