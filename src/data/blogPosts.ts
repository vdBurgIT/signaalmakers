export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  content: string;
  keywords?: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Waarom MSP-bedrijven baat hebben bij een vaste bekabelingspartner',
    excerpt: 'Voor MSP-bedrijven is een betrouwbare bekabelingspartner goud waard. Lees hoe SIGNAALMAKERS als specialist in netwerkbekabeling en wifi-bekabeling de fysieke laag verzorgt voor MSP\'s in heel Nederland.',
    date: '28 november 2025',
    category: 'MSP-partner',
    slug: 'msp-bekabelingspartner',
    keywords: 'MSP-partner, bekabelingspartner, netwerkbekabeling MSP, wifi-bekabeling specialist, databekabeling MSP, Layer 1 specialist',
    content: `
      <p>Als MSP-bedrijf heb je genoeg aan je hoofd: klantbeheer, configuratie, monitoring, security, helpdesk, projecten. Het laatste waar je op zit te wachten is gedoe met bekabeling. Toch is de fysieke netwerklaag (Layer 1) de basis van alles wat je doet. Wifi-access points, switches, servers, telefonie — het draait allemaal op <a href="/diensten/netwerkbekabeling" style="color: #FF6A00; font-weight: 600;">goede netwerkbekabeling</a>.</p>

      <p>Daarom kiezen steeds meer MSP's voor een vaste bekabelingspartner. Iemand die alleen bekabeling doet, geen configuratie, geen concurrentie, gewoon: kabels trekken, patchkasten opbouwen, testen, documenteren. Klaar.</p>

      <h2>Waarom bekabeling uitbesteden aan een specialist?</h2>

      <h3>1. Layer 1 is geen core business voor MSP's</h3>
      <p>Jullie zijn goed in routers configureren, VLAN's opzetten, firewalls beheren en klanten helpen met IT-vragen. Kabels trekken en <a href="/diensten/patchkasten" style="color: #FF6A00; font-weight: 600;">patchkasten opbouwen</a>? Dat is fysiek werk, vereist ander gereedschap, andere kennis en kost veel tijd. Tijd die je beter kunt besteden aan jullie core business.</p>

      <h3>2. Bekabeling is specialistisch werk</h3>
      <p>Goede bekabeling vraagt kennis van:</p>
      <ul>
        <li>Structured cabling normen (zoals EN 50173, ISO/IEC 11801)</li>
        <li>Cat6, Cat6A, Cat7 specificaties en toepassingen</li>
        <li>Correct afmonteren van RJ45-connectoren en patchpanelen</li>
        <li>Kabelroutes, doorvoeringen en brandcompartimenten</li>
        <li>Professioneel testen en opmeten (Fluke, Softing-meters)</li>
        <li>Kabelmanagement en documentatie volgens best practices</li>
      </ul>
      <p>Dit is een vak apart. Net zoals jullie niet willen dat een kabelaar jullie switches gaat configureren, zo willen wij ook niet dat een IT'er zonder bekabelingskennis kabels gaat trekken.</p>

      <h3>3. Bespaar tijd en frustratie</h3>
      <p>Hoeveel uur kost het om zelf bekabeling te doen? En hoeveel frustratie levert het op als het niet soepel loopt? Door bekabeling uit te besteden, kunnen jullie focussen op wat jullie goed kunnen. Wij trekken de kabels, jullie sluiten de apparatuur aan. Geen overlap, geen gedoe.</p>

      <h3>4. Geen concurrentie, wel samenwerking</h3>
      <p>Wij doen geen configuratie, geen IT-beheer, geen hardware-installatie. Wij installeren geen access points, switches of firewalls. Wij zorgen alleen dat de kabels kloppen. Dat maakt ons geen concurrent, maar een verlengstuk van jullie team. Jullie blijven de primaire contactpersoon voor de klant, wij werken op de achtergrond.</p>

      <h2>Wat doen wij precies?</h2>
      <p>Wij verzorgen de volledige fysieke netwerklaag:</p>
      <ul>
        <li><strong>Datapunten aanleggen:</strong> UTP-kabels van werkplek naar <a href="/diensten/patchkasten" style="color: #FF6A00; font-weight: 600;">patchkast</a>, netjes via plafond of vloer</li>
        <li><strong>Patchkasten opbouwen:</strong> Professioneel kabelmanagement, labeling, patchpanelen monteren</li>
        <li><strong>Wifi-bekabeling:</strong> Kabels naar access point-locaties (jullie hangen de AP's op en configureren ze)</li>
        <li><strong>Signaallijnen en AV-bekabeling:</strong> Voor vergaderruimtes, presentatieschermen, audiosystemen</li>
        <li><strong>Testen en documenteren:</strong> Elke kabel meten, kabelplan maken, opleverrapport</li>
      </ul>
      <p>Wij leveren op: geteste, gelabelde, gedocumenteerde bekabeling. Jullie sluiten de apparatuur aan, configureren het netwerk en de klant is blij.</p>

      <h2>Praktijkvoorbeeld: nieuw kantoor voor jullie klant</h2>
      <p>Jullie klant gaat verhuizen naar een <a href="/sectoren/kantoren" style="color: #FF6A00; font-weight: 600;">nieuw kantoor</a>. Jullie regelen de IT-infrastructuur: routers, switches, wifi, telefonie, servers. Wij regelen de bekabeling:</p>
      <ul>
        <li>40 datapunten voor werkplekken (Cat6A)</li>
        <li>6 kabels naar access point-locaties (Cat6A, PoE++)</li>
        <li>2 kabels naar serverruimte (Cat7 voor 10 Gigabit)</li>
        <li>4 kabels naar printers en multifunctionals</li>
        <li>Patchkast opbouwen met 48-poorts patchpaneel, kabelmanagement, labeling</li>
        <li>Alles testen, meten en documenteren met kabelplan en testrapport</li>
      </ul>
      <p>Jullie krijgen een kant-en-klare bekabeling. Jullie hangen de switches en access points op, configureren alles en de klant kan aan de slag. Geen gedoe, geen verrassingen.</p>

      <h2>Voordelen van een vaste bekabelingspartner</h2>
      <h3>1. Voorspelbare planning</h3>
      <p>Wij kennen jullie werkwijze, jullie kennen onze levertijden. Dat maakt projectplanning eenvoudiger. Geen verrassing-vertraging, geen onverwachte problemen.</p>

      <h3>2. Consistente kwaliteit</h3>
      <p>Bij elk project dezelfde aanpak: structured cabling, professioneel kabelmanagement, gedegen testrapport. Jullie weten wat je krijgt.</p>

      <h3>3. Snelle communicatie</h3>
      <p>Direct contact, geen gedoe. Vraag over een project? WhatsApp, bellen, binnen een uur antwoord. Wijziging tijdens het project? Regelen we direct.</p>

      <h3>4. Meedenken bij offertes</h3>
      <p>Jullie maken een offerte voor een klant en willen weten wat bekabeling kost? Wij denken mee: hoeveel datapunten zijn reëel? Waar moeten access points komen? Wat is de beste kabelroute? Zo kunnen jullie accurate offertes maken zonder verrassingen achteraf.</p>

      <h2>Hoe werkt de samenwerking?</h2>
      <p>Simpel en helder:</p>
      <ol>
        <li><strong>Jullie nemen contact op:</strong> "We hebben een project, klant verhuist naar nieuw kantoor, 30 werkplekken."</li>
        <li><strong>Wij maken een inschatting:</strong> "30 werkplekken = 60 datapunten + 4 access points + 1 patchkast = €X,- en Y werkdagen."</li>
        <li><strong>Jullie verwerken dit in jullie offerte:</strong> Bekabeling = vaste post, jullie blijven eigenaar van de klantrelatie.</li>
        <li><strong>Opdracht binnen? Wij plannen in:</strong> Afspraak met klant, bekabeling aanleggen, opleveren met testrapport.</li>
        <li><strong>Jullie nemen het over:</strong> Switches ophangen, access points configureren, klant live.</li>
      </ol>
      <p>Geen overlap, geen onduidelijkheid. Wij doen Layer 1, jullie doen Layer 2 en hoger.</p>

      <h2>Voor welke projecten?</h2>
      <p>Wij werken voor MSP's bij projecten zoals:</p>
      <ul>
        <li><strong>Kantoorverhuizingen:</strong> Nieuw pand, volledige bekabeling nodig</li>
        <li><strong>Kantoorrenovaties:</strong> Bekabeling moderniseren van Cat5 naar Cat6A</li>
        <li><strong>Uitbreidingen:</strong> Extra werkplekken, nieuwe afdeling, meer access points</li>
        <li><strong>Wifi-netwerk installaties:</strong> Kabels naar access point-locaties</li>
        <li><strong>Patchkast-opruimacties:</strong> Bestaande patchkast herbouwen met kabelmanagement</li>
        <li><strong>Server-/datacenterbekabeling:</strong> 10 Gigabit bekabeling (Cat6A/Cat7) voor <a href="/sectoren/serverruimtes" style="color: #FF6A00; font-weight: 600;">serverruimtes en datacenters</a></li>
      </ul>

      <h2>Werkgebied en beschikbaarheid</h2>
      <p>Wij werken door heel Nederland. Projecten plannen we in overleg, meestal binnen 1-3 weken (afhankelijk van grootte). Spoedprojecten? Bel ons, dan kijken we wat mogelijk is.</p>

      <h2>Tarieven en afspraken</h2>
      <p>Wij werken met vaste <a href="/abonnementen" style="color: #FF6A00; font-weight: 600;">abonnementen voor MSP's</a> of per-project-tarieven. Bij vaste afspraken krijg je voorrang bij planning en scherpe tarieven. Interesse? Neem <a href="/contact" style="color: #FF6A00; font-weight: 600;">contact</a> op voor een vrijblijvend gesprek.</p>

      <h2>Waarom SIGNAALMAKERS?</h2>
      <ul>
        <li><strong>Alleen bekabeling:</strong> Geen concurrentie, geen overlap met jullie diensten</li>
        <li><strong>Professioneel en gedocumenteerd:</strong> Kabelplannen, testrapport, labeling</li>
        <li><strong>Door heel Nederland:</strong> Van Breda tot Groningen</li>
        <li><strong>Snel schakelen:</strong> Direct contact, flexibele planning</li>
        <li><strong>MSP-vriendelijk:</strong> Wij snappen jullie werkwijze en verwachtingen</li>
      </ul>

      <h2>Conclusie</h2>
      <p>Als MSP kun je bekabeling zelf doen, maar waarom zou je? Het kost tijd, vereist specialistische kennis en leidt af van jullie core business. Door met een vaste bekabelingspartner te werken, kunnen jullie focussen op wat jullie goed kunnen: IT-beheer, configuratie en klantcontact.</p>

      <p>Wij zorgen dat Layer 1 klopt. Jullie doen de rest. Geen overlap, geen gedoe, gewoon goed werk.</p>

      <p>Interesse in een vaste samenwerking of een eenmalig project? <a href="/contact" style="color: #FF6A00; font-weight: 600;">Neem contact op</a> voor een vrijblijvend gesprek. We denken graag met je mee.</p>
    `,
  },
  {
    title: 'Waarom netwerkbekabeling de belangrijkste laag van je IT-omgeving is',
    excerpt: 'Veel bedrijven investeren in dure routers, switches en wifi-apparatuur, maar vergeten de basis: de netwerkbekabeling. Toch is dit de fysieke laag waarop alles draait. In dit artikel leggen we uit waarom goede bekabeling essentieel is voor een stabiel datanetwerk.',
    date: '28 november 2025',
    category: 'Netwerkbekabeling',
    slug: 'netwerkbekabeling-belangrijkste-laag',
    keywords: 'netwerkbekabeling, datanetwerk, UTP-bekabeling, patchkast-bekabeling, datapunten aanleggen',
    content: `
      <p>Veel bedrijven investeren in dure routers, switches en wifi-apparatuur, maar vergeten de basis: de netwerkbekabeling. Toch is dit de fysieke laag (Layer 1 in het OSI-model) waarop alles draait. In dit artikel leggen we uit waarom goede bekabeling essentieel is voor een stabiel datanetwerk.</p>

      <h2>Wat is de fysieke netwerklaag precies?</h2>
      <p>De fysieke netwerklaag omvat alle UTP-kabels, datapunten, patchkasten en aansluitingen. Het is de infrastructuur die alle apparaten met elkaar verbindt. Denk aan het wegennet van Nederland: je kunt de mooiste auto's hebben, maar zonder goede wegen kom je nergens.</p>

      <h2>Waarom is goede netwerkbekabeling zo belangrijk?</h2>
      <ul>
        <li><strong>Snelheid en stabiliteit:</strong> Cat6A en Cat7 bekabeling ondersteunen 10 Gigabit snelheden. Dat maakt het verschil tussen een stabiele verbinding en constante vertragingen.</li>
        <li><strong>Schaalbaarheid:</strong> Professionele bekabeling groeit mee. Wifi-access points, camera's, telefonie — alles heeft datakabels nodig.</li>
        <li><strong>Betrouwbaarheid:</strong> Een goede kabel geeft jarenlang 100% uptime. Een slechte kabel zorgt voor onverklaarbare storingen waar je MSP dagenlang naar kan zoeken.</li>
        <li><strong>Kostenbesparing:</strong> Achteraf bekabeling vervangen is 5x duurder dan het meteen goed doen. Plus: hoeveel downtime-kosten maak je door slecht bekabelde netwerken?</li>
      </ul>

      <h2>Wat gebeurt er als bekabeling niet klopt?</h2>
      <p>Veel IT-problemen die als "netwerkproblemen" worden gezien, komen door slechte bekabeling:</p>
      <ul>
        <li>Wifi-access points die regelmatig uitvallen</li>
        <li>Trage bestandsoverdrachten naar de server of NAS</li>
        <li>Videobellingen die constant hangen of uitvallen</li>
        <li>Onverklaarbare packet loss en time-outs</li>
        <li>IP-telefonie met slechte geluidskwaliteit</li>
      </ul>
      <p>Het probleem? Vaak wordt er naar de router, switch of wifi gekeken, terwijl het echte probleem in de bekabeling zit: een te lange kabel, een verkeerd afgemonteerd datapunt of Cat5-bekabeling die niet geschikt is voor moderne snelheden.</p>

      <h2>De rol van bekabeling in moderne IT-omgevingen</h2>
      <p>Steeds meer bedrijfsprocessen in <a href="/sectoren/kantoren" style="color: #FF6A00; font-weight: 600;">moderne kantoren</a> draaien op netwerkverkeer. Denk aan:</p>
      <ul>
        <li>Clouddiensten en SaaS-applicaties</li>
        <li>VoIP-telefonie en MS Teams</li>
        <li>Beveiligingscamera's en toegangssystemen</li>
        <li>Draadloze netwerken (die wél bekabelde access points gebruiken)</li>
        <li>IoT-apparaten en slimme gebouwautomatisering</li>
      </ul>
      <p>Al dit verkeer gaat over de netwerkbekabeling. Als die basis niet deugt, deugt niets.</p>

      <h2>MSP's en netwerkbeheerders weten dit</h2>
      <p>MSP-bedrijven en netwerkbeheerders weten: configuratie, switches en wifi zijn hun domein. Maar de bekabeling? Daar willen ze op kunnen vertrouwen. Geen halve kabels, geen Cat5-troep uit 2005, geen slecht afgemonteerde datapunten. Ze willen een professioneel bekabeld netwerk waar ze hun apparatuur op kunnen aansluiten zonder zorgen.</p>

      <h2>Waarom SIGNAALMAKERS?</h2>
      <p>Wij doen alleen netwerkbekabeling. Geen IT-beheer, geen configuratie, geen hardware-installatie. Alleen datakabels trekken, patchkasten opbouwen en aansluitpunten afmaken. Dat maakt ons geen concurrent, maar een vaste partner voor MSP's en IT-bedrijven.</p>
      <p>Wij zorgen dat de fysieke laag klopt. Jullie doen de rest.</p>

      <h2>Conclusie</h2>
      <p>Een goed datanetwerk begint bij de basis: de bekabeling. Investeer in Cat6A of Cat7, zorg voor strak kabelmanagement, label alles en documenteer het goed. Want als de bekabeling klopt, klopt de rest vanzelf.</p>

      <p>Wil je weten of jouw netwerkbekabeling nog klopt? Of ben je van plan een nieuw kantoor te bekabelen? <a href="/contact">Neem contact op</a> voor een vrijblijvend advies.</p>
    `,
  },
  {
    title: 'Wat is wifi-bekabeling en waarom heb je datakabels nodig voor goede wifi?',
    excerpt: 'Draadloos internet werkt toch zonder kabels? Ja, tussen jouw laptop en de access point wel. Maar voor een professioneel wifi-netwerk heb je juist bekabeling nodig. In dit artikel leggen we uit hoe wifi-bekabeling werkt en waarom het cruciaal is.',
    date: '21 november 2025',
    category: 'Wifi-bekabeling',
    slug: 'wifi-bekabeling-uitgelegd',
    keywords: 'wifi-bekabeling, access point bekabeling, UTP-bekabeling, draadloos netwerk, wifi-infrastructuur',
    content: `
      <p>Veel mensen denken: "Wifi is draadloos, dus ik heb geen kabels nodig." Maar dat klopt niet helemaal. Voor een professioneel wifi-netwerk heb je juist goede netwerkbekabeling nodig. In dit artikel leggen we uit hoe wifi-bekabeling werkt en waarom het essentieel is.</p>

      <h2>Wat is wifi-bekabeling?</h2>
      <p>Wifi-bekabeling is het netwerk van UTP-kabels dat wifi-access points met de patchkast verbindt. Elk access point heeft een bekabelde verbinding nodig voor:</p>
      <ul>
        <li><strong>Dataverkeer:</strong> Al het wifi-verkeer gaat via de kabel naar de router/switch</li>
        <li><strong>Stroomvoorziening (PoE):</strong> Access points krijgen stroom via Power over Ethernet</li>
        <li><strong>Beheer:</strong> Configuratie en monitoring gaat via de bekabelde verbinding</li>
      </ul>

      <h2>Waarom kun je niet gewoon overal wifi-versterkers neerzetten?</h2>
      <p>Wifi-versterkers (repeaters) lijken goedkoop en makkelijk, maar ze hebben grote nadelen:</p>
      <ul>
        <li>Elke "hop" halveert de snelheid</li>
        <li>Geen centrale beheer of monitoring mogelijk</li>
        <li>Geen VLAN-ondersteuning voor gastennetwerken</li>
        <li>Veel hogere latency, slecht voor videobellen</li>
        <li>Minder stabiel, vooral bij veel gebruikers</li>
      </ul>
      <p>Professionele wifi-netwerken gebruiken daarom bekabelde access points. Elke access point heeft een directe, snelle verbinding met de centrale switch. Geen vertragingen, volledige snelheid, en alle access points werken samen als één netwerk.</p>

      <h2>Hoe ziet een professioneel wifi-netwerk eruit?</h2>
      <p>Een typische wifi-installatie bestaat uit:</p>
      <ul>
        <li><strong>Patchkast met PoE-switch:</strong> Centrale bekabeling en stroomvoorziening</li>
        <li><strong>UTP-kabels naar access point-locaties:</strong> Cat6A voor 10 Gigabit + PoE++</li>
        <li><strong>Access points op strategische plekken:</strong> Plafondmontage voor optimale dekking</li>
        <li><strong>Controller-software:</strong> Centraal beheer van alle access points</li>
      </ul>

      <h2>Voordelen van bekabelde access points</h2>
      <ul>
        <li><strong>Maximale snelheid:</strong> Volledige bandbreedte, geen vertraging door "hops"</li>
        <li><strong>Schaalbaarheid:</strong> Voeg eenvoudig access points toe zonder configuratie-gedoe</li>
        <li><strong>Eén netwerk:</strong> Apparaten schakelen naadloos over tussen access points (roaming)</li>
        <li><strong>VLAN-ondersteuning:</strong> Aparte netwerken voor gasten, personeel, IoT, etc.</li>
        <li><strong>Centrale monitoring:</strong> Direct zien waar problemen zitten</li>
        <li><strong>PoE-voeding:</strong> Geen stopcontacten nodig op moeilijke plekken (plafond, buiten)</li>
      </ul>

      <h2>Waarom Cat6A of Cat7 voor wifi-bekabeling?</h2>
      <p>Wifi-access points ondersteunen steeds hogere snelheden (Wifi 6E, Wifi 7). Om die snelheden ook daadwerkelijk te kunnen leveren, heb je een kabel nodig die dit aankan:</p>
      <ul>
        <li><strong>Cat5e:</strong> Max 1 Gigabit — te langzaam voor moderne access points</li>
        <li><strong>Cat6:</strong> 10 Gigabit tot 55 meter — alleen geschikt voor korte afstanden</li>
        <li><strong>Cat6A:</strong> 10 Gigabit tot 100 meter — standaard voor professionele installaties</li>
        <li><strong>Cat7:</strong> 10 Gigabit tot 100 meter met extra afscherming — premium keuze</li>
      </ul>
      <p>Daarnaast hebben moderne access points vaak PoE+ of PoE++ nodig (30W tot 60W). Cat6A is ontworpen om deze vermogens veilig te verwerken zonder oververhitting.</p>

      <h2>Praktijkvoorbeeld: kantoorpand met 3 verdiepingen</h2>
      <p>Stel: een <a href="/sectoren/kantoren" style="color: #FF6A00; font-weight: 600;">kantoor</a> van 3 verdiepingen, elk 200m². Voor goede wifi-dekking plaatsen we:</p>
      <ul>
        <li>6 access points (2 per verdieping, strategisch geplaatst)</li>
        <li>6 UTP-kabels van patchkast naar access point-locaties</li>
        <li>1 PoE-switch met minimaal 8 poorten (voor toekomstige uitbreiding)</li>
        <li>Controller-software voor centraal beheer</li>
      </ul>
      <p>Resultaat: volledige wifi-dekking, snelle roaming tussen access points, aparte gastnetwerken, en alles centraal beheerd vanuit één systeem.</p>

      <h2>SIGNAALMAKERS doet alleen de bekabeling</h2>
      <p>Let op: SIGNAALMAKERS legt alleen de netwerkbekabeling aan. We trekken UTP-kabels van de patchkast naar de access point-locaties, monteren netjes af, labelen alles en testen de verbindingen.</p>
      <p>We installeren GEEN access points, doen GEEN wifi-configuratie en GEEN site surveys. Dat laten we over aan jouw MSP of IT-partner. Wij zorgen alleen dat de kabels kloppen, zodat zij hun access points probleemloos kunnen aansluiten.</p>

      <h2>Conclusie</h2>
      <p>Goede wifi begint met goede bekabeling. Professionele wifi-netwerken draaien op bekabelde access points, niet op wifi-versterkers. Investeer in Cat6A bekabeling, plaats access points op de juiste plekken, en je hebt een wifi-netwerk dat echt werkt.</p>

      <p>Wil je bekabeling aanleggen voor wifi-access points? <a href="/contact">Neem contact op</a> voor een vrijblijvend gesprek.</p>
    `,
  },
  {
    title: 'Wanneer is het tijd om je netwerkbekabeling te vervangen en te moderniseren?',
    excerpt: 'Netwerkbekabeling gaat lang mee, maar niet eeuwig. Cat5-bekabeling uit 2005 remt moderne netwerken af. In dit artikel leggen we uit wanneer het tijd is om je bekabeling te vervangen en te moderniseren naar Cat6A of Cat7.',
    date: '14 november 2025',
    category: 'Netwerkbekabeling',
    slug: 'bekabeling-moderniseren',
    keywords: 'bekabeling moderniseren, CAT6 bekabeling, netwerk vervangen, oude bekabeling, netwerkinfrastructuur vernieuwen',
    content: `
      <p>Netwerkbekabeling is ontworpen om lang mee te gaan — vaak 15 tot 20 jaar. Maar technologie staat niet stil. Cat5-bekabeling die in 2005 perfect was, is nu een bottleneck. In dit artikel leggen we uit wanneer het tijd is om je bekabeling te vervangen en te moderniseren.</p>

      <h2>Signalen dat je bekabeling aan vervanging toe is</h2>
      <ul>
        <li><strong>Je hebt Cat5 of Cat5e bekabeling:</strong> Cat5 is verouderd en ondersteunt maximaal 100 Mbps. Cat5e kan 1 Gigabit aan, maar dat is tegenwoordig het minimum. Voor moderne toepassingen heb je 10 Gigabit nodig (Cat6A of Cat7).</li>
        <li><strong>Trage bestandsoverdrachten:</strong> Kopieer je een bestand naar de server en duurt het eindeloos? Grote kans dat de bekabeling de bottleneck is.</li>
        <li><strong>Wifi-access points vallen uit:</strong> Access points hebben PoE+ of PoE++ nodig. Oude Cat5-bekabeling kan dat vermogen niet stabiel leveren, waardoor access points uitvallen of herstarten.</li>
        <li><strong>Onverklaarbare netwerkproblemen:</strong> Packet loss, hoge latency, apparaten die "zomaar" offline gaan — vaak veroorzaakt door verouderde of beschadigde bekabeling.</li>
        <li><strong>Geen documentatie of labeling:</strong> Als niemand weet welke kabel waar naartoe gaat, is het tijd voor vernieuwing én documentatie.</li>
        <li><strong>Je gaat verhuizen of verbouwen:</strong> Perfect moment om de bekabeling meteen goed aan te leggen.</li>
      </ul>

      <h2>Waarom Cat5 niet meer voldoet</h2>
      <p>Cat5 was ontworpen voor 100 Mbps netwerken. Dat was in 2000 meer dan genoeg. Maar moderne bedrijfsnetwerken vragen meer:</p>
      <ul>
        <li>Clouddiensten en SaaS-applicaties draaien op snelle verbindingen</li>
        <li>Videoconferencing (Teams, Zoom) vereist lage latency en bandbreedte</li>
        <li>NAS en servers werken met 10 Gigabit voor snelle backups</li>
        <li>Wifi 6E access points leveren 2+ Gigabit — Cat5 is dan de bottleneck</li>
        <li>IP-camera's (4K) en VoIP-telefonie vragen stabiele verbindingen</li>
      </ul>
      <p>Cat5 kan dit niet aan. Cat5e komt tot 1 Gigabit, maar voor de toekomst is dat te weinig.</p>

      <h2>Wat is het verschil tussen Cat5e, Cat6, Cat6A en Cat7?</h2>
      <table>
        <tr>
          <th>Type</th>
          <th>Max snelheid</th>
          <th>Max afstand (10 Gbit)</th>
          <th>PoE++</th>
          <th>Geschikt voor</th>
        </tr>
        <tr>
          <td>Cat5</td>
          <td>100 Mbps</td>
          <td>N/A</td>
          <td>Nee</td>
          <td>Verouderd, niet meer gebruiken</td>
        </tr>
        <tr>
          <td>Cat5e</td>
          <td>1 Gigabit</td>
          <td>N/A</td>
          <td>Beperkt</td>
          <td>Alleen voor budget-oplossingen</td>
        </tr>
        <tr>
          <td>Cat6</td>
          <td>10 Gigabit</td>
          <td>55 meter</td>
          <td>Ja</td>
          <td>Korte afstanden, tijdelijke oplossingen</td>
        </tr>
        <tr>
          <td>Cat6A</td>
          <td>10 Gigabit</td>
          <td>100 meter</td>
          <td>Ja</td>
          <td>Standaard voor professionele installaties</td>
        </tr>
        <tr>
          <td>Cat7</td>
          <td>10 Gigabit</td>
          <td>100 meter</td>
          <td>Ja</td>
          <td>Premium, extra afscherming</td>
        </tr>
      </table>

      <h2>De kosten van vervanging vs. de kosten van niets doen</h2>
      <p>Netwerkbekabeling vervangen kost geld. Maar wat kost het om het NIET te doen?</p>
      <ul>
        <li>Downtime door netwerkproblemen</li>
        <li>Trage verbindingen die de productiviteit remmen</li>
        <li>MSP-uren voor troubleshooting van problemen die door slechte bekabeling komen</li>
        <li>Apparatuur (access points, switches) die niet optimaal werkt door trage bekabeling</li>
      </ul>
      <p>Daarnaast: bekabeling achteraf vervangen is 3-5x duurder dan bij een verbouwing of nieuwbouw meteen goed doen.</p>

      <h2>Wanneer is het slimme moment om te moderniseren?</h2>
      <ul>
        <li><strong>Bij een verhuizing:</strong> Nieuw pand = nieuwe bekabeling, meteen goed (zie <a href="/sectoren/kantoren" style="color: #FF6A00; font-weight: 600;">kantoorbekabeling</a>)</li>
        <li><strong>Bij een verbouwing:</strong> Plafonds en wanden zijn toch open, ideaal moment</li>
        <li><strong>Bij uitbreiding:</strong> Meer werkplekken = meer datapunten, combineer met vernieuwing</li>
        <li><strong>Bij grote IT-investeringen:</strong> Nieuwe servers, switches of wifi? Zorg dat de bekabeling niet de bottleneck is</li>
        <li><strong>Bij verkoop van het pand:</strong> Moderne bekabeling verhoogt de waarde</li>
      </ul>

      <h2>Wat doet SIGNAALMAKERS bij modernisering?</h2>
      <p>Wij vervangen oude bekabeling door professionele Cat6A of Cat7 bekabeling:</p>
      <ul>
        <li>Inventarisatie van bestaande situatie</li>
        <li>Kabelplan opstellen met nieuwe datapunten</li>
        <li>Oude bekabeling verwijderen (indien gewenst)</li>
        <li>Nieuwe UTP-kabels trekken volgens structured cabling normen</li>
        <li>Datapunten afmaken en professioneel afmonteren</li>
        <li>Patchkast opnieuw opbouwen met kabelmanagement</li>
        <li>Alles labelen en documenteren</li>
        <li>Testen en opmeten van elke verbinding</li>
        <li>Opleverrapport met kabelplan en testresultaten</li>
      </ul>
      <p>Wij installeren GEEN switches, routers of access points. Dat laten we aan jouw MSP of IT-partner. Wij zorgen alleen dat de bekabeling klopt.</p>

      <h2>Conclusie</h2>
      <p>Als je bekabeling ouder is dan 10 jaar, Cat5 of Cat5e is, of als je regelmatig netwerkproblemen hebt: het is tijd voor modernisering. Investeer in Cat6A of Cat7 en je bent de komende 15-20 jaar klaar.</p>

      <p>Wil je weten of jouw bekabeling aan vervanging toe is? <a href="/contact">Neem contact op</a> voor een vrijblijvende analyse.</p>
    `,
  },
  {
    title: 'Waarom een goed kabelplan onmisbaar is voor een professioneel datanetwerk',
    excerpt: 'Een kabelplan lijkt misschien overbodig, maar het is de basis van elk professioneel datanetwerk. Zonder plan wordt bekabeling rommelig, ondocumenteerbaar en onbeheerbaar. In dit artikel leggen we uit waarom een kabelplan essentieel is.',
    date: '7 november 2025',
    category: 'Kabelplan',
    slug: 'kabelplan-essentieel',
    keywords: 'kabelplan, bekabelingsplan, datapunten aanleggen, netwerkdocumentatie, structured cabling plan',
    content: `
      <p>Een kabelplan is een technische tekening die laat zien waar alle datapunten komen, hoe kabels lopen en hoe de patchkast is georganiseerd. Het lijkt misschien overbodig, maar het is de basis van elk professioneel datanetwerk. In dit artikel leggen we uit waarom.</p>

      <h2>Wat is een kabelplan?</h2>
      <p>Een kabelplan (ook wel bekabelingsplan of structured cabling plan genoemd) bevat:</p>
      <ul>
        <li><strong>Plattegrond met datapunten:</strong> Waar komen de netwerkaansluitingen?</li>
        <li><strong>Kabelroutes:</strong> Hoe lopen de kabels van datapunt naar patchkast?</li>
        <li><strong>Nummering en labeling:</strong> Welke kabel hoort bij welk datapunt?</li>
        <li><strong>Kabeltype en -lengte:</strong> Cat6A, Cat7, lengte per kabel</li>
        <li><strong>Patchkast-indeling:</strong> Hoe is de patchkast georganiseerd?</li>
        <li><strong>Legenda en notities:</strong> Bijvoorbeeld: "DP-01 t/m DP-10 = verdieping 1"</li>
      </ul>

      <h2>Waarom is een kabelplan belangrijk?</h2>
      <h3>1. Overzicht en beheerbaarheid</h3>
      <p>Zonder kabelplan weet niemand welke kabel waar naartoe gaat. Gevolg: troubleshooting duurt uren, uitbreidingen zijn giswerk en niemand durft iets aan te passen. Met een kabelplan zie je in één oogopslag hoe het netwerk in elkaar zit.</p>

      <h3>2. Snellere troubleshooting</h3>
      <p>Probleem op werkplek 12? Check het kabelplan: datapunt DP-12 zit op poort 12 van patchpaneel A. Volg de kabel, test de verbinding, klaar. Zonder kabelplan? Beginnen met raden en kabels volgen door plafonds en vloeren.</p>

      <h3>3. Uitbreidingen zonder gedoe</h3>
      <p>Nieuwe afdeling erbij? Met een kabelplan zie je direct waar spare-punten zitten, waar je nieuwe kabels kunt aansluiten en hoe je de nummering voortzet. Zonder plan? Improviseren en hopen dat het goed gaat.</p>

      <h3>4. Professionele overdracht bij wisseling MSP</h3>
      <p>MSP wisselen of IT-beheerder weg? Met een kabelplan kan een nieuwe partij direct aan de slag. Zonder plan? Weken reverse-engineering om te snappen hoe het netwerk in elkaar zit.</p>

      <h3>5. Hogere vastgoedwaarde</h3>
      <p>Een pand met gedocumenteerde, professionele bekabeling is meer waard. Kopers weten direct wat ze krijgen en hoeven niet alles opnieuw te doen.</p>

      <h2>Wat gebeurt er zonder kabelplan?</h2>
      <p>We zien het regelmatig: bedrijven zonder kabelplan hebben:</p>
      <ul>
        <li><strong>Ongedocumenteerde bekabeling:</strong> Niemand weet welke kabel waar naartoe gaat</li>
        <li><strong>Rommelige patchkasten:</strong> Kabels kruisen elkaar, geen logica, geen labels</li>
        <li><strong>Troubleshooting-drama:</strong> Elk netwerkprobleem kost uren zoekwerk</li>
        <li><strong>Uitbreidingen op basis van giswerk:</strong> "Volgens mij loopt er een kabel daar..."</li>
        <li><strong>Onbruikbare documentatie:</strong> Verouderde tekeningen, geen match met werkelijkheid</li>
      </ul>
      <p>Gevolg: frustratie, downtime en onnodige kosten.</p>

      <h2>Hoe maak je een goed kabelplan?</h2>
      <h3>Stap 1: Inventarisatie</h3>
      <p>Begin met het in kaart brengen van de situatie:</p>
      <ul>
        <li>Hoeveel werkplekken zijn er?</li>
        <li>Waar komen wifi-access points, camera's, printers?</li>
        <li>Waar zit de patchkast (of: waar moet deze komen)?</li>
        <li>Zijn er meerdere verdiepingen of gebouwen?</li>
      </ul>

      <h3>Stap 2: Datapunten positioneren</h3>
      <p>Bepaal waar datapunten moeten komen. Vuistregel:</p>
      <ul>
        <li>Minimaal 2 datapunten per werkplek (1 voor PC, 1 voor telefoon/reserve)</li>
        <li>1 datapunt per wifi-access point-locatie</li>
        <li>1 datapunt per printer, server, NAS, camera, etc.</li>
        <li>Extra spare-punten voor toekomstige uitbreidingen (10-20% reserve)</li>
      </ul>

      <h3>Stap 3: Kabelroutes uitwerken</h3>
      <p>Bepaal hoe kabels lopen: via plafond, vloer, kabelgoot? Let op:</p>
      <ul>
        <li>Maximale kabellengte UTP = 100 meter</li>
        <li>Vermijd scherpe bochten (minimaal 4x kabeldiameter)</li>
        <li>Houd rekening met brandcompartimenten en doorvoeringen</li>
      </ul>

      <h3>Stap 4: Nummering en labeling</h3>
      <p>Kies een logische nummeringsstructuur, bijvoorbeeld:</p>
      <ul>
        <li>DP-101 t/m DP-150 = verdieping 1</li>
        <li>DP-201 t/m DP-250 = verdieping 2</li>
        <li>DP-AP-01 t/m DP-AP-10 = wifi-access points</li>
      </ul>
      <p>Zorg dat elk datapunt EN de bijbehorende patchpaneel-poort hetzelfde nummer krijgen.</p>

      <h3>Stap 5: Patchkast indelen</h3>
      <p>Verdeel de <a href="/diensten/patchkasten" style="color: #FF6A00; font-weight: 600;">patchkast</a> logisch (dit is extra belangrijk in <a href="/sectoren/serverruimtes" style="color: #FF6A00; font-weight: 600;">serverruimtes</a> waar overzicht cruciaal is):</p>
      <ul>
        <li>Patchpaneel A = verdieping 1</li>
        <li>Patchpaneel B = verdieping 2</li>
        <li>Patchpaneel C = wifi-access points en specials</li>
      </ul>

      <h3>Stap 6: Documenteren en tekenen</h3>
      <p>Maak een plattegrond met:</p>
      <ul>
        <li>Datapunten (met nummers)</li>
        <li>Kabelroutes (indicatief)</li>
        <li>Patchkast-locatie</li>
        <li>Legenda met nummering en kabeltype</li>
      </ul>
      <p>Dit kan in AutoCAD, Visio of zelfs een nette handtekening. Belangrijk is dat het klopt en leesbaar is.</p>

      <h2>Wat doet SIGNAALMAKERS met kabelplannen?</h2>
      <p>Bij elk bekabelingsproject maken wij een kabelplan:</p>
      <ul>
        <li>Vooraf: plan ter goedkeuring (waar komen datapunten, hoe is de nummering?)</li>
        <li>Tijdens: aanpassingen en as-built updates</li>
        <li>Bij oplevering: definitief kabelplan met werkelijke situatie</li>
      </ul>
      <p>Daarnaast labelen we alles: elk datapunt, elke kabel in de patchkast, elke poort op het patchpaneel. Zodat jouw MSP of IT-partner direct kan zien wat wat is.</p>

      <h2>Conclusie</h2>
      <p>Een kabelplan is geen overbodige luxe, maar een basisvoorwaarde voor professionele netwerkbekabeling. Het bespaart tijd, frustratie en geld. Investeer in een goed plan en goede documentatie — je netwerk (en je MSP) zal je dankbaar zijn.</p>

      <p>Wil je een nieuw netwerk laten aanleggen of een bestaand netwerk documenteren? <a href="/contact">Neem contact op</a> voor een vrijblijvend gesprek.</p>
    `,
  },
  {
    title: 'Kabelmanagement en documentatie: de stille helden achter efficiënt netwerkbeheer',
    excerpt: 'Patchkasten vol spaghetti-kabels en geen enkele label. We zien het te vaak. Goed kabelmanagement en documentatie lijken saai, maar maken het verschil tussen een professioneel netwerk en een onbeheersbare puinhoop.',
    date: '31 oktober 2025',
    category: 'Patchkast',
    slug: 'kabelmanagement-documentatie',
    keywords: 'kabelmanagement, patchkast-bekabeling, documentatie, structured cabling, netwerk infrastructuur',
    content: `
      <p>Patchkasten vol spaghetti-kabels, geen labels, niemand die weet welke kabel waar naartoe gaat. We zien het regelmatig bij bedrijven die hun bekabeling "zelf geregeld" hebben. Goed kabelmanagement en documentatie lijken saai, maar ze maken het verschil tussen een professioneel netwerk en een onbeheersbare puinhoop.</p>

      <h2>Wat is kabelmanagement?</h2>
      <p>Kabelmanagement is de manier waarop kabels in de patchkast georganiseerd zijn. Het omvat:</p>
      <ul>
        <li><strong>Kabelbundeling:</strong> Kabels netjes bundelen met klittenband</li>
        <li><strong>Kabelgeleiding:</strong> Kabels via kabelgoten en managers leiden</li>
        <li><strong>Afstand en ordening:</strong> Korte kabels direct, lange kabels via goten</li>
        <li><strong>Scheiding:</strong> Netwerkkabels gescheiden van stroomkabels</li>
        <li><strong>Kleurcodering:</strong> Bijvoorbeeld: blauwe kabels = werkplekken, gele kabels = access points</li>
      </ul>

      <h2>Waarom is kabelmanagement belangrijk?</h2>
      <h3>1. Troubleshooting wordt 10x sneller</h3>
      <p>Probleem met datapunt 23? In een nette patchkast volg je de kabel van poort 23 direct naar de switch. In een spaghetti-kast? Veel geluk, je bent een uur bezig.</p>

      <h3>2. Voorkomen van ongelukken</h3>
      <p>Losse kabels kunnen per ongeluk uitgetrokken worden. Een verkeerd geplaatste elleboog en ineens valt een hele afdeling uit. Goed kabelmanagement voorkomt dit.</p>

      <h3>3. Betere luchtstroom en koeling</h3>
      <p>Switches en servers produceren warmte. Te veel kabels blokkeren de luchtstroom, waardoor apparatuur oververhit raakt. Nette bundeling houdt de luchtstroom vrij.</p>

      <h3>4. Professionele uitstraling</h3>
      <p>Klanten, auditors of nieuwe MSP's kijken in je patchkast. Een nette kast straalt professionaliteit uit. Een rommelige kast roept vragen op over de kwaliteit van je IT-beheer.</p>

      <h3>5. Makkelijker uitbreiden en aanpassen</h3>
      <p>Nieuwe switch erbij? Extra datapunten? In een nette kast zie je direct waar ruimte is en hoe je kabels moet leiden. In een rommelige kast? Eerst opruimen voordat je iets kunt doen.</p>

      <h2>De elementen van goed kabelmanagement</h2>
      <h3>Patchpanelen</h3>
      <p>Alle UTP-kabels lopen naar patchpanelen. Van daaruit ga je met korte patchkabels naar de switch. Voordeel: kabels van datapunten blijven altijd zitten, alleen patchkabels verwissel je.</p>

      <h3>Kabelmanagers</h3>
      <p>Verticale en horizontale kabelmanagers (ook wel kabelgoten) leiden kabels netjes langs patchpanelen en switches. Hierdoor kruisen kabels elkaar niet en blijft alles overzichtelijk.</p>

      <h3>Klittenband (geen tie-wraps!)</h3>
      <p>Gebruik altijd klittenband om kabels te bundelen. Tie-wraps kunnen kabels beschadigen door te strak aan te trekken (knikt de kabel) en zijn lastig te verwijderen bij aanpassingen.</p>

      <h3>Labeling</h3>
      <p>Elk uiteinde van elke kabel moet gelabeld zijn:</p>
      <ul>
        <li>Aan het datapunt: "DP-23"</li>
        <li>In de patchkast aan de kabel: "DP-23"</li>
        <li>Op het patchpaneel: "DP-23"</li>
      </ul>
      <p>Gebruik professionele labelprinters (bijvoorbeeld Brother P-touch) voor duidelijke, blijvende labels.</p>

      <h3>Kleurcodering (optioneel maar handig)</h3>
      <p>Gebruik verschillende kleuren patchkabels voor verschillende functies:</p>
      <ul>
        <li>Blauw = werkplekken</li>
        <li>Geel = wifi-access points</li>
        <li>Rood = servers en kritieke systemen</li>
        <li>Groen = printers en randapparatuur</li>
        <li>Grijs = backup/reserve</li>
      </ul>

      <h2>Documentatie: waarom en hoe?</h2>
      <p>Kabelmanagement is fysiek, documentatie is digitaal. Beide zijn even belangrijk.</p>

      <h3>Wat documenteer je?</h3>
      <ul>
        <li><strong>Kabelplan:</strong> Plattegrond met datapunten en nummering</li>
        <li><strong>Patchkast-indeling:</strong> Welk patchpaneel is welke verdieping/afdeling?</li>
        <li><strong>Nummering:</strong> Welk datapunt zit op welke poort?</li>
        <li><strong>Kabeltype en -lengte:</strong> Cat6A, Cat7, lengtes per kabel</li>
        <li><strong>Testresultaten:</strong> Meetrapporten van elke kabel</li>
        <li><strong>Wijzigingslog:</strong> Wanneer is er iets aangepast?</li>
      </ul>

      <h3>Waarom is documentatie belangrijk?</h3>
      <ul>
        <li>Nieuwe medewerkers of MSP's kunnen direct aan de slag</li>
        <li>Troubleshooting gaat sneller (weet waar je moet zoeken)</li>
        <li>Audits en compliance-checks zijn eenvoudiger</li>
        <li>Uitbreidingen kunnen gepland worden zonder reverse-engineering</li>
      </ul>

      <h2>Wat doet SIGNAALMAKERS met kabelmanagement?</h2>
      <p>Bij elk bekabelingsproject zorgen wij voor professioneel kabelmanagement:</p>
      <ul>
        <li>Kabels netjes bundelen met klittenband (geen tie-wraps)</li>
        <li>Gebruik van kabelmanagers en kabelgoten in de patchkast</li>
        <li>Alle kabels labelen (datapunt + patchkast)</li>
        <li>Logische indeling patchpanelen (per verdieping/afdeling)</li>
        <li>Kleurcodering patchkabels (indien gewenst)</li>
        <li>Complete documentatie: kabelplan, nummeringsschema, testresultaten</li>
      </ul>
      <p>Het resultaat: een patchkast waar je MSP of IT-partner blij van wordt.</p>

      <h2>De relatie met MSP's en IT-beheerders</h2>
      <p>MSP's en netwerkbeheerders die werken in <a href="/sectoren/serverruimtes" style="color: #FF6A00; font-weight: 600;">serverruimtes</a> en datacenters waarderen goed kabelmanagement enorm. Waarom?</p>
      <ul>
        <li>Ze kunnen snel schakelen bij problemen (geen uren zoeken)</li>
        <li>Uitbreidingen en aanpassingen gaan soepel</li>
        <li>Hun klanten zien een professionele installatie</li>
        <li>Ze hoeven geen tijd te verspillen aan reverse-engineering</li>
      </ul>
      <p>Daarom werken veel MSP's met vaste bekabelingspartners zoals SIGNAALMAKERS. Wij zorgen voor de kabels, zij voor de configuratie en het beheer. Geen overlap, geen gedoe.</p>

      <h2>Bestaande patchkast opruimen?</h2>
      <p>Heb je een bestaande patchkast vol spaghetti-kabels? Dat kunnen we opruimen en herbouwen:</p>
      <ul>
        <li>Inventarisatie: welke kabels gaan waar naartoe?</li>
        <li>Patchkast volledig herbouwen met kabelmanagement</li>
        <li>Alles labelen en documenteren</li>
        <li>Testrapport van alle verbindingen</li>
        <li>Oplevering met kabelplan en documentatie</li>
      </ul>
      <p>Kosten: afhankelijk van de grootte van de kast, maar vaak binnen 1-2 dagen te realiseren.</p>

      <h2>Conclusie</h2>
      <p>Goed kabelmanagement en documentatie zijn geen overbodige luxe. Ze maken het verschil tussen een professioneel, beheersbaar netwerk en een oncontroleerbare puinhoop. Investeer in nette bekabeling, labels en documentatie. Je MSP, je collega's en je toekomstige zelf zullen je dankbaar zijn.</p>

      <p>Wil je een nieuwe patchkast laten opbouwen of een bestaande opruimen? <a href="/contact">Neem contact op</a> voor een vrijblijvend gesprek.</p>
    `,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit: number = 2): BlogPost[] {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost) return [];

  // Find posts with same category, excluding current post
  const relatedByCategory = blogPosts.filter(
    post => post.category === currentPost.category && post.slug !== currentSlug
  );

  // If we have enough posts in same category, return those
  if (relatedByCategory.length >= limit) {
    return relatedByCategory.slice(0, limit);
  }

  // Otherwise, add posts from other categories
  const otherPosts = blogPosts.filter(
    post => post.category !== currentPost.category && post.slug !== currentSlug
  );

  return [...relatedByCategory, ...otherPosts].slice(0, limit);
}
