import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import { Video, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import BackgroundOverlay from '../components/BackgroundOverlay';

export default function ContentCreators() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showSubsInfo, setShowSubsInfo] = useState(false);

  const faqs = [
    {
      question: 'Doet Signaalmakers ook overlays, emotes en kanaaldesign voor Twitch, TikTok of YouTube?',
      answer: 'Nee. Wij richten ons op de technische kant: verbinding, netwerk, bekabeling, hardware en de basis van je streaming-setup met OBS. Grafisch design, branding en kanaalopmaak laat je het beste doen door een designer of marketingbureau. Wel kunnen we je technisch helpen met de koppeling van overlays en alerts.',
    },
    {
      question: 'Helpen jullie met Twitch subs, Bits en "goedkope subjes"?',
      answer: 'We verkopen geen subs of Bits en maken Twitch subjes niet goedkoper. De prijzen liggen bij Twitch zelf. Wat we wel doen: we zorgen dat je verbinding en setup goed zijn en leggen uit hoe subs, Bits en donaties technisch werken, zodat je zelf je kanaal logisch kunt inrichten zonder dat de techniek je tegenwerkt.',
    },
    {
      question: 'Wat doen jullie concreet als jullie langskomen in mijn studio of thuis?',
      answer: 'We beginnen bij de basis: de internetverbinding en het netwerk. We kijken naar je modem, router, wifi en eventuele bekabeling. Daarna bekijken we je streaming-pc of laptop, camera, microfoon en de koppeling met OBS. We maken de nodige aanpassingen, richten een stabiele streaming-setup in en testen samen een stream. Je ziet precies wat we doen en krijgt uitleg onderweg.',
    },
    {
      question: 'Helpen jullie ook met 18+ fanplatformen?',
      answer: 'Ja, technisch gezien werkt dat vergelijkbaar met andere streaming- en contentplatformen. We richten je verbinding, netwerk en technische setup zo in dat je veilig en stabiel kunt streamen of opnemen. We bemoeien ons niet met de inhoud van je content; onze rol is puur technisch en discreet.',
    },
  ];

  return (
    <>
      <SEO
        title="Streaming voor content creators - stabiele verbinding en technische setup"
        description="Professionele streaming-setup voor Twitch, TikTok LIVE, YouTube en 18+ platforms. Stabiel netwerk, OBS installatie en technische ondersteuning voor content creators."
        keywords="streaming setup, Twitch setup, OBS installatie, content creator netwerk, TikTok LIVE setup, YouTube streaming, streaming internet, goedkope subjes, Twitch subs, Bits, StreamElements"
        url="https://signaalmakers.nl/content-creators"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Content Creators', item: 'https://signaalmakers.nl/content-creators' }
        ]}
      />
      <div>
      <Hero
        title="Netwerk & wifi voor streamers en content creators"
        subtitle="Stabiele verbinding en technische setup. Geen haperend beeld, geen wegvallend geluid. Gewoon een stream die werkt."
        primaryButtonText="Neem contact op"
        primaryButtonLink="/contact"
      />

      {/* Intro */}
      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="network" density="medium" color="blue" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Of je nu streamt op Twitch, TikTok LIVE, YouTube of een 18+ fanplatform: je bent volledig afhankelijk van een goede internetverbinding en een betrouwbare setup.
            </p>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Signaalmakers zorgt voor een stabiel netwerk, de juiste bekabeling en een technische streaming-setup die klopt. Geen onnodige poespas, maar een verbinding en setup die doet wat jij nodig hebt, zodat jij je kunt focussen op je content. We werken net zo graag voor een thuisstudio in een slaapkamer als voor een kleine professionele studio of bedrijfslocatie.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Voor wie is dit bedoeld?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Deze pagina is voor creators en streamers die:
            </p>
            <ul className="space-y-3 text-gray-600 mb-12">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Regelmatig live gaan op Twitch, TikTok LIVE of YouTube</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Met OBS werken en bijvoorbeeld StreamElements gebruiken</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Content maken voor een 18+ fanplatform of besloten community</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Problemen hebben met haperende streams, lage kwaliteit of instabiel internet</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>Een serieuze maar nuchtere technische partner zoeken voor verbinding en setup</span>
              </li>
            </ul>
            <p className="text-lg text-gray-600 leading-relaxed">
              Net als op de rest van de website geldt: we werken voor zowel bedrijven (MKB, kantoren, studio's) als particulieren (thuisnetwerk, zolderkamer, studio aan huis). We plannen zorgvuldig, kijken naar de hele situatie en komen met een oplossing die past bij jouw ruimte, apparatuur en budget.
            </p>
          </div>
        </div>
      </section>

      {/* Wat wij wel/niet doen */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Wat wij wél doen voor streamers en creators
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Signaalmakers richt zich op de technische kant van jouw stream. Alles wat met verbinding en netwerk te maken heeft, pakken wij netjes op. We zorgen dat je setup technisch weer 100% in orde is.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">✓ Dit doen we wél</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Internet en netwerk optimaliseren voor streaming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Databekabeling naar studio en werkplekken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Streaming-setup technisch inrichten (pc, camera, microfoon)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>OBS Studio installeren en basisprofiel instellen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Setup voor meerdere platformen tegelijk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Heldere uitleg in begrijpelijke taal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow border-2 border-gray-200">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">✗ Dit doen we niet</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 flex-shrink-0 mt-0.5">•</span>
                    <span>Emotes, overlays, alerts of logo's ontwerpen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 flex-shrink-0 mt-0.5">•</span>
                    <span>Kanaalbranding en social media marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 flex-shrink-0 mt-0.5">•</span>
                    <span>Verkoop van subs, Bits of volgers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 flex-shrink-0 mt-0.5">•</span>
                    <span>Beheer van accounts of kanalen</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-4 italic">
                  We hebben de kennis van streaming, OBS en de platformen, maar blijven bij onze kern: verbinding, wifi, netwerk en technische setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Streaming platformen */}
      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="wifi" density="light" color="grey" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-6 mb-8">
              <Video className="w-12 h-12 text-[#FF6A00] flex-shrink-0" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
                  Streamingplatformen en tools waarmee we rekening houden
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Op deze pagina gaat het specifiek om creators en streamers. De techniek daarachter is deels hetzelfde als bij andere projecten op de website, maar hier stemmen we alles af op live video.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <img
                  src="/images/icons/twitch-signaalmakers.png"
                  alt="Twitch"
                  className="h-10 w-auto mb-3"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Twitch</h3>
                <p className="text-gray-600">
                  Stabiele uplink, geschikte bitrate, basis OBS-profiel, scenes en audio. We zorgen dat je verbinding en setup een Twitch-stream aankunnen zonder constante drops.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <img
                  src="/images/icons/tiktok-signaalmakers.png"
                  alt="TikTok LIVE"
                  className="h-10 w-auto mb-3"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">TikTok LIVE</h3>
                <p className="text-gray-600">
                  Verticale streaming vanaf telefoon of pc, verbinding die korte pieken aankan en een wifi- of bekabelde setup die niet instort zodra er extra kijkers komen.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <img
                  src="/images/icons/youtube-signaalmakers.png"
                  alt="YouTube"
                  className="h-10 w-auto mb-3"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">YouTube (Live & premieres)</h3>
                <p className="text-gray-600">
                  Encoder-instellingen, constante upload en een netwerk dat langdurige streams aankan, bijvoorbeeld voor talkshows, podcasts of lange sessies.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <img
                  src="/images/icons/18+-signaalmakers.png"
                  alt="18+ fanplatformen"
                  className="h-10 w-auto mb-3"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">18+ fanplatformen</h3>
                <p className="text-gray-600">
                  Discrete en betrouwbare verbinding en setup in een afgesloten ruimte. We richten alleen de techniek in, inhoud blijft jouw verantwoordelijkheid.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <img
                  src="/images/icons/obs-signaalmakers.png"
                  alt="OBS Studio"
                  className="h-10 w-auto mb-3"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">OBS Studio</h3>
                <p className="text-gray-600">
                  Installatie en basisconfiguratie van scenes, bronnen, audio-routing en koppeling met je platformen. Een stabiele basis waar je op verder kunt bouwen.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <img
                  src="/images/icons/streamelements-signaalmakers.svg"
                  alt="StreamElements"
                  className="h-10 w-auto mb-3"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">StreamElements</h3>
                <p className="text-gray-600">
                  Technische koppeling van overlays en alerts via OBS (bijvoorbeeld via browser source). De vormgeving laat je bij een designer; wij zorgen dat de verbinding klopt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subs & Bits SEO sectie */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Subs, Bits en "goedkope subjes" – wat we wél en niet doen
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Veel kijkers zoeken online naar termen als "goedkope subjes", "goedkopere Twitch subs", "voordelige Twitch sub" of "Bits gebruiken om streamers te steunen". In de praktijk gaat het daarbij bijna altijd om beter of slimmer steunen van een streamer.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Op Twitch kun je kijkers laten abonneren op je kanaal via "subs". Dat zijn betaalde, terugkerende maandelijkse abonnementen. In ruil krijgen kijkers extra voordelen, zoals emotes, badges, minder advertenties en soms toegang tot subscriber-only content. Daarnaast heb je Bits – virtuele "muntjes" die kijkers kunnen gebruiken om te cheeren in de chat.
            </p>

            <div className="bg-white rounded-lg p-6 shadow mb-6 border-l-4 border-[#FF6A00]">
              <h3 className="text-xl font-bold text-[#0E243A] mb-3">Belangrijk om eerlijk te zijn:</h3>
              <p className="text-gray-600 mb-4">
                Signaalmakers verkoopt <strong>géén subs, géén Bits</strong> en wij maken Twitch subjes <strong>niet goedkoper</strong>. De prijzen van subs en Bits worden volledig door Twitch zelf bepaald. Wij doen niets met kunstmatig "goedkope subjes" of trucjes om regels te omzeilen.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-[#0E243A] mb-4">Wat wij wél doen:</h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>We zorgen dat je verbinding stabiel is, zodat je stream niet wegvalt als er veel subs of Bits binnenkomen</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>We richten je streaming-setup zo in dat je in een passende kwaliteit kunt streamen</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span>We leggen uit hoe subs, Bits en donaties technisch werken, zodat jij zelf je kanaal en beloningen slim kunt inrichten</span>
              </li>
            </ul>

            {/* Extra SEO info uitklapbaar */}
            <button
              onClick={() => setShowSubsInfo(!showSubsInfo)}
              className="flex items-center gap-2 text-[#FF6A00] font-semibold hover:text-[#E55F00] transition-colors mb-4"
            >
              {showSubsInfo ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              {showSubsInfo ? 'Minder lezen' : 'Meer lezen over Twitch subs en Bits'}
            </button>

            {showSubsInfo && (
              <div className="bg-white rounded-lg p-6 shadow">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Als je zoekt op <em>goedkope subjes</em>, <em>goedkopere Twitch subs</em>, <em>voordelige Twitch sub</em> of <em>Bits gebruiken om streamers te steunen</em>, dan ben je waarschijnlijk aan het uitzoeken hoe je zo slim mogelijk met je geld omgaat op Twitch – als kijker of als streamer.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Een sub op Twitch is een betaald maandelijks abonnement op één kanaal. Je steunt de streamer en krijgt er voordelen voor terug: speciale emotes, unieke chat-badges, minder advertenties en soms toegang tot extra content of een besloten community. Gifted subs geven je de mogelijkheid om andere kijkers te verrassen en samen hype-trains te starten.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Bits zijn de virtuele valuta van Twitch. Je koopt Bits via Twitch zelf en gebruikt ze om te cheeren in de chat. Daarmee valt je bericht op en weet de streamer precies wie hem of haar ondersteunt. Voor veel creators zijn Bits en subs een belangrijke bron van inkomsten naast donaties en sponsordeals.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Signaalmakers verkoopt geen goedkope subjes</strong>, doet niets met het doorverkopen van subs of Bits, en bemoeit zich niet met je inkomsten. Wij focussen op wat we goed kunnen: internet, wifi, netwerk en technische streaming-setup. We zorgen ervoor dat jouw verbinding, bekabeling en apparatuur in orde zijn, zodat jij en je community zonder technische problemen gebruik kunnen maken van subs, Bits en andere manieren om een kanaal te steunen.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              Hoe we werken
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Onze werkwijze voor content creators sluit aan op hoe we op de rest van de website werken. We werken met heldere afspraken, eerlijke tarieven en oplossingen die passen bij jouw situatie.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#0E243A] mb-2">Inventarisatie</h3>
                  <p className="text-gray-600">
                    We bespreken jouw situatie: waar je streamt, welke apparatuur je hebt, welke platformen je gebruikt en welke problemen je nu ervaart (bijvoorbeeld lag, haperend beeld, slechte wifi, ruis in audio).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#0E243A] mb-2">Plan en advies</h3>
                  <p className="text-gray-600">
                    We bekijken welke aanpassingen nodig zijn aan je netwerk, bekabeling en setup. Zo mogelijk hergebruiken we bestaande apparatuur; we adviseren alleen extra hardware als dat echt nodig is.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#0E243A] mb-2">Uitvoering</h3>
                  <p className="text-gray-600">
                    We leggen bekabeling aan, richten wifi en netwerk in, sluiten apparatuur netjes aan en zetten de basis van je streaming-setup goed. Alles zo strak mogelijk afgewerkt.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#0E243A] mb-2">Uitleg en oplevering</h3>
                  <p className="text-gray-600">
                    Je krijgt uitleg in normaal Nederlands over wat we hebben gedaan en hoe je zelf dingen kunt aanpassen of uitbreiden. Geen complexe handleidingen, maar gewoon duidelijkheid.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#0E243A] mb-2">Nazorg</h3>
                  <p className="text-gray-600">
                    Als er later vragen zijn, kun je bij ons terugkomen. Net als bij de andere diensten van Signaalmakers vinden we het belangrijk dat oplossingen in de praktijk blijven werken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              Veelgestelde vragen
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Antwoorden op de meest gestelde vragen over streaming-setup en technische ondersteuning
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors rounded-lg"
                  >
                    <span className="font-semibold text-[#0E243A] pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#FF6A00] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#FF6A00] flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0E243A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar met haperende streams?
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Een goede stream begint met een goede verbinding. Of je nu net start als streamer of al een vaste community hebt: haperend beeld, slechte wifi en instabiel internet kosten je kijkers en energie.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Wil je een streaming-setup die technisch klopt en een netwerk dat je streams aankan? Neem dan contact op met Signaalmakers. We kijken naar jouw situatie, maken een plan en zorgen dat je verbinding, wifi, netwerk en setup er klaar voor zijn – zodat jij gewoon live kunt gaan.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
