export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: '5 redenen waarom Cat6A beter is dan Cat5e',
    excerpt: 'Overweegt u nieuwe bekabeling voor uw kantoor of woning? Cat6A lijkt misschien duurder, maar biedt aanzienlijke voordelen op de lange termijn. In dit artikel leggen we uit waarom Cat6A vaak de slimme keuze is.',
    date: '15 maart 2025',
    category: 'Netwerk',
    slug: 'cat6a-vs-cat5e',
    content: `
      <p>Overweegt u nieuwe bekabeling voor uw kantoor of woning? De keuze tussen Cat5e, Cat6 en Cat6A kan overweldigend zijn. Cat6A lijkt misschien duurder, maar biedt aanzienlijke voordelen op de lange termijn. In dit artikel leggen we uit waarom Cat6A vaak de slimme keuze is.</p>

      <h2>Wat is Cat6A?</h2>
      <p>Cat6A is de meest geavanceerde vorm van twisted pair netwerkkabels en staat voor "Category 6 Augmented". Deze kabels zijn ontworpen voor snelheden tot 10 Gigabit per seconde over afstanden tot 100 meter.</p>

      <h2>Reden 1: Toekomstbestendig voor 10 Gigabit netwerken</h2>
      <p>Terwijl Cat5e beperkt is tot 1 Gigabit en Cat6 slechts 10 Gigabit ondersteunt over korte afstanden, biedt Cat6A volledige 10 Gigabit ondersteuning over de volledige 100 meter. Dit betekent dat uw netwerk klaar is voor de toekomst zonder dat u over een paar jaar opnieuw hoeft te bekabelen.</p>

      <h2>Reden 2: Betere afscherming tegen interferentie</h2>
      <p>Cat6A kabels hebben verbeterde afscherming die interferentie van andere kabels en elektromagnetische bronnen vermindert. Dit resulteert in stabielere verbindingen en minder pakketverlies, vooral in omgevingen met veel kabels.</p>

      <h2>Reden 3: Hoger PoE-vermogen</h2>
      <p>Power over Ethernet (PoE) wordt steeds populairder voor het voeden van access points, camera's en andere apparaten. Cat6A ondersteunt PoE++ (tot 100W) zonder problemen, terwijl Cat5e beperkt is tot lagere vermogens.</p>

      <h2>Reden 4: Beperkt prijsverschil bij professionele installatie</h2>
      <p>Het materiaalverschil tussen Cat6A en Cat5e is beperkt, en bij professionele installatie vormt dit slechts een fractie van de totale kosten. De meerwaarde die u krijgt is het kleine verschil ruimschoots waard.</p>

      <h2>Reden 5: Langere levensduur en ROI</h2>
      <p>Een bekabeling gaat gemakkelijk 15-20 jaar mee. Door nu te kiezen voor Cat6A, investeert u in een infrastructuur die meegroeit met technologische ontwikkelingen. U hoeft niet opnieuw te bekabelen wanneer uw netwerkeisen stijgen.</p>

      <h2>Conclusie</h2>
      <p>Voor nieuwe installaties raden wij Cat6A aan, tenzij het budget echt een probleem is. De voordelen op gebied van snelheid, stabiliteit en toekomstbestendigheid wegen ruimschoots op tegen de kleine meerprijs.</p>

      <p>Heeft u vragen over bekabeling voor uw situatie? <a href="/contact">Neem gerust contact op</a> voor advies op maat.</p>
    `,
  },
  {
    title: 'Wifi voor thuiswerkers: wat heb je echt nodig?',
    excerpt: 'Sinds de opkomst van thuiswerken zijn de eisen aan thuisnetwerken enorm gestegen. Videobellingen, grote bestanden uploaden en stabiele verbindingen zijn essentieel. Wij leggen uit welke oplossingen écht werken.',
    date: '8 maart 2025',
    category: 'Wifi',
    slug: 'wifi-thuiswerkers',
    content: `
      <p>Sinds de opkomst van thuiswerken zijn de eisen aan thuisnetwerken enorm gestegen. Een simpel consumenten wifi-routertje is vaak niet meer voldoende. In dit artikel leggen we uit wat je echt nodig hebt voor een stabiele thuiswerkplek.</p>

      <h2>Het probleem met consumentenrouters</h2>
      <p>De meeste consumentenrouters zijn ontworpen voor licht gebruik: wat surfen, een Netflix stream. Maar een thuiswerkplek vereist meer: videocalls, VPN-verbindingen, grote bestanden uploaden, en vaak meerdere apparaten tegelijk.</p>

      <h2>Wat heb je nodig voor stabiel thuiswerken?</h2>
      <p>Voor een goede thuiswerkplek adviseren wij minimaal:</p>
      <ul>
        <li>Een professionele wifi access point (zoals Ubiquiti of TP-Link Omada)</li>
        <li>Bekabeling naar je werkplek voor de meest stabiele verbinding</li>
        <li>Een gescheiden netwerk voor zakelijk en privé gebruik</li>
        <li>QoS (Quality of Service) instellingen die videocalls prioriteit geven</li>
      </ul>

      <h2>Bekabeld vs. Wifi</h2>
      <p>Voor kritieke toepassingen zoals videocalls blijft een bekabelde verbinding de gouden standaard. Wifi is handig voor mobiliteit, maar een kabel garandeert lage latency en stabiele snelheden zonder interferentie.</p>

      <h2>Investering die zich terugbetaalt</h2>
      <p>Een professionele thuiswerkplek kost tussen de €500-1500, afhankelijk van de grootte van je woning en je eisen. Dit lijkt misschien veel, maar hoeveel tijd verlies je nu door verbindingsproblemen tijdens belangrijke meetings?</p>

      <p>Wil je advies op maat? <a href="/contact">Neem contact op</a> voor een vrijblijvende intake.</p>
    `,
  },
  {
    title: 'Gastennetwerk: waarom het essentieel is voor elk bedrijf',
    excerpt: 'Een apart gastennetwerk lijkt misschien een luxe, maar het is eigenlijk een basisvoorziening voor elk modern bedrijf. Bescherm uw bedrijfsnetwerk door bezoekers een apart netwerk te geven.',
    date: '1 maart 2025',
    category: 'Beveiliging',
    slug: 'gastennetwerk-essentieel',
    content: `
      <p>Een gastennetwerk is een apart wifi-netwerk specifiek voor bezoekers. Het lijkt misschien een luxe, maar voor zakelijk gebruik is het eigenlijk een basisvoorziening. Laten we uitleggen waarom.</p>

      <h2>Wat is een gastennetwerk?</h2>
      <p>Een gastennetwerk is een VLAN (Virtual Local Area Network) dat volledig gescheiden is van uw bedrijfsnetwerk. Gasten krijgen internettoegang, maar kunnen niet bij uw servers, printers, NAS of andere bedrijfskritieke systemen.</p>

      <h2>Waarom is dit belangrijk?</h2>
      <p>Stel je voor: een bezoeker met een geïnfecteerd apparaat verbindt met uw netwerk. Zonder gastennetwerk heeft die malware potentieel toegang tot al uw systemen. Met een gastennetwerk blijft de schade beperkt.</p>

      <h2>Extra voordelen</h2>
      <ul>
        <li>Bescherming van bedrijfsdata en systemen</li>
        <li>Voorkomen dat gasten per ongeluk bestanden delen</li>
        <li>Betere controle over wie toegang heeft tot wat</li>
        <li>Mogelijkheid om gastentoegang te beperken qua snelheid</li>
        <li>Professionele indruk bij klanten en bezoekers</li>
      </ul>

      <h2>Hoe richt je een gastennetwerk in?</h2>
      <p>Een gastennetwerk vereist VLAN-ondersteuning in je netwerkapparatuur. Professionele access points zoals Ubiquiti, TP-Link Omada of Aruba ondersteunen dit standaard. De configuratie is eenvoudig via de controller-software.</p>

      <h2>Kosten en installatie</h2>
      <p>Het toevoegen van een gastennetwerk aan een bestaande professionele wifi-installatie kost meestal slechts een paar uur configuratiewerk. Voor nieuwe installaties is het gewoon onderdeel van de standaard setup.</p>

      <p>Wil je een gastennetwerk laten installeren? <a href="/contact">Neem contact op</a> voor meer informatie.</p>
    `,
  },
  {
    title: 'VLAN-segmentatie uitgelegd: wat is het en waarom heb je het nodig?',
    excerpt: 'VLAN-segmentatie klinkt technisch, maar het principe is simpel: verdeel uw netwerk in aparte zones voor betere beveiliging en prestaties. Ontdek hoe VLAN\'s werken en waarom ze belangrijk zijn.',
    date: '22 februari 2025',
    category: 'Netwerk',
    slug: 'vlan-segmentatie-uitgelegd',
    content: `
      <p>VLAN-segmentatie is één van de belangrijkste beveiligingsmaatregelen voor moderne netwerken. Maar wat is het precies, en waarom zou je het gebruiken?</p>

      <h2>Wat is een VLAN?</h2>
      <p>VLAN staat voor Virtual Local Area Network. Het stelt je in staat om één fysiek netwerk op te delen in meerdere virtuele netwerken. Elk VLAN is volledig gescheiden van andere VLAN's.</p>

      <h2>Waarom VLAN's gebruiken?</h2>
      <p>De belangrijkste redenen om VLAN's te gebruiken zijn:</p>
      <ul>
        <li><strong>Beveiliging:</strong> Houd verschillende soorten apparaten gescheiden (bijv. IoT-apparaten van werkstations)</li>
        <li><strong>Prestaties:</strong> Verminder broadcast-verkeer door segmentatie</li>
        <li><strong>Organisatie:</strong> Logische indeling van je netwerk (bijv. per afdeling)</li>
        <li><strong>Flexibiliteit:</strong> Eenvoudig apparaten toewijzen aan netwerken, ongeacht fysieke locatie</li>
      </ul>

      <h2>Praktijkvoorbeeld: IoT-apparaten</h2>
      <p>Slimme thermostaten, camera's en printers hebben vaak zwakke beveiliging. Door ze in een apart VLAN te plaatsen, kunnen ze niet bij je werkstations of servers, zelfs als ze gecompromitteerd worden.</p>

      <h2>Typische VLAN-opzet voor bedrijven</h2>
      <ul>
        <li>VLAN 10: Management (toegang tot switches en access points)</li>
        <li>VLAN 20: Werkstations en computers</li>
        <li>VLAN 30: Servers en NAS</li>
        <li>VLAN 40: IoT-apparaten (camera's, sensoren)</li>
        <li>VLAN 50: Gasten</li>
        <li>VLAN 60: VoIP telefonie</li>
      </ul>

      <h2>Wat heb je nodig?</h2>
      <p>Voor VLAN-segmentatie heb je managed switches en professionele access points nodig. Consumentenapparatuur ondersteunt VLAN's vaak niet of slechts beperkt.</p>

      <p>Wil je VLAN-segmentatie laten implementeren? <a href="/contact">Neem contact op</a> voor advies op maat.</p>
    `,
  },
  {
    title: 'Mesh wifi vs professionele access points: wat is beter?',
    excerpt: 'Mesh-systemen zijn populair voor thuisgebruik, maar zijn ze ook geschikt voor zakelijk gebruik? We vergelijken mesh wifi met professionele access points en leggen uit wanneer je welke oplossing nodig hebt.',
    date: '15 februari 2025',
    category: 'Wifi',
    slug: 'mesh-vs-access-points',
    content: `
      <p>Mesh wifi-systemen zoals Google Wifi, Eero of Deco zijn enorm populair geworden. Maar hoe verhouden ze zich tot professionele access points? En wat is de beste keuze voor jouw situatie?</p>

      <h2>Wat is mesh wifi?</h2>
      <p>Mesh wifi bestaat uit meerdere nodes die draadloos met elkaar communiceren. Je plaatst ze door je huis/kantoor en ze vormen samen één netwerk. Het voordeel: geen bekabeling nodig tussen de nodes.</p>

      <h2>Wat zijn professionele access points?</h2>
      <p>Professionele access points (zoals Ubiquiti, TP-Link Omada, Aruba) worden bekabeld aangesloten op je netwerk en centraal beheerd via een controller. Ze bieden meer functies, betere prestaties en grotere betrouwbaarheid.</p>

      <h2>Mesh wifi: voor- en nadelen</h2>
      <p><strong>Voordelen:</strong></p>
      <ul>
        <li>Eenvoudige installatie zonder bekabeling</li>
        <li>Gebruiksvriendelijke app</li>
        <li>Plug-and-play oplossing</li>
        <li>Geschikt voor woningen zonder mogelijkheid tot bekabeling</li>
      </ul>
      <p><strong>Nadelen:</strong></p>
      <ul>
        <li>Lagere prestaties door draadloze backhaul</li>
        <li>Beperkte schaalbaarhei</li>
        <li>Minder geavanceerde functies (geen VLAN's, beperkte QoS)</li>
        <li>Hogere latency door hops tussen nodes</li>
      </ul>

      <h2>Professionele access points: voor- en nadelen</h2>
      <p><strong>Voordelen:</strong></p>
      <ul>
        <li>Maximale prestaties door bekabelde backhaul</li>
        <li>Geavanceerde functies (VLAN's, gastennnetwerken, QoS)</li>
        <li>Uitstekende schaalbaarheid</li>
        <li>Centraal beheer en monitoring</li>
        <li>Betrouwbaarder voor zakelijk gebruik</li>
      </ul>
      <p><strong>Nadelen:</strong></p>
      <ul>
        <li>Vereist bekabeling naar elke access point</li>
        <li>Complexere configuratie</li>
        <li>Hogere initiële investering</li>
      </ul>

      <h2>Wat is de beste keuze?</h2>
      <p><strong>Kies voor mesh wifi als:</strong> Je een woning hebt zonder mogelijkheid tot bekabeling, je een beperkt budget hebt, en je geen geavanceerde functies nodig hebt.</p>
      <p><strong>Kies voor professionele access points als:</strong> Je een bedrijf hebt, bekabeling mogelijk is, je VLAN's en gastnetwerken nodig hebt, of wanneer betrouwbaarheid en prestaties cruciaal zijn.</p>

      <h2>De middenweg: bekabelde mesh</h2>
      <p>Sommige mesh-systemen (zoals Deco of Eero) ondersteunen een bekabelde backhaul. Dit combineert het gemak van mesh met betere prestaties. Het is een goede middenweg voor particulieren die het beste van beide werelden willen.</p>

      <p>Twijfel je welke oplossing bij jou past? <a href="/contact">Neem contact op</a> voor persoonlijk advies.</p>
    `,
  },
  {
    title: 'De voordelen van PoE: stroom en data over één kabel',
    excerpt: 'Power over Ethernet (PoE) maakt het mogelijk om apparaten van stroom te voorzien via de netwerkkabel. Handig, maar wat zijn de mogelijkheden en beperkingen? We leggen het uit.',
    date: '8 februari 2025',
    category: 'Techniek',
    slug: 'voordelen-poe',
    content: `
      <p>Power over Ethernet (PoE) is een technologie die data én elektriciteit over één ethernetkabel verstuurt. Dit maakt installaties eenvoudiger en flexibeler. Maar hoe werkt het precies, en wat zijn de mogelijkheden?</p>

      <h2>Wat is PoE?</h2>
      <p>PoE gebruikt ongebruikte aders in een netwerkkabel om naast data ook stroom te leveren. Dit betekent dat apparaten zoals wifi access points, camera's en telefoons geen aparte voeding meer nodig hebben.</p>

      <h2>Verschillende PoE-standaarden</h2>
      <ul>
        <li><strong>PoE (802.3af):</strong> Tot 15.4W per poort - geschikt voor IP-camera's en eenvoudige access points</li>
        <li><strong>PoE+ (802.3at):</strong> Tot 30W per poort - geschikt voor krachtigere access points en PTZ-camera's</li>
        <li><strong>PoE++ (802.3bt Type 3):</strong> Tot 60W per poort - geschikt voor high-end access points</li>
        <li><strong>PoE++ (802.3bt Type 4):</strong> Tot 100W per poort - geschikt voor PoE-verlichting en zware apparatuur</li>
      </ul>

      <h2>Voordelen van PoE</h2>
      <ul>
        <li>Geen aparte stroomkabels nodig</li>
        <li>Flexibele plaatsing van apparaten (niet gebonden aan stopcontacten)</li>
        <li>Centraal beheer van voeding via UPS op de switch</li>
        <li>Kostenbesparend bij installatie</li>
        <li>Veiliger dan traditionele voeding</li>
      </ul>

      <h2>Typische toepassingen</h2>
      <ul>
        <li>Wifi access points</li>
        <li>IP-camera's en beveiligingssystemen</li>
        <li>VoIP telefoons</li>
        <li>Digital signage en displays</li>
        <li>Toegangscontrolesystemen</li>
        <li>IoT-sensors en apparaten</li>
      </ul>

      <h2>Waarop letten bij PoE?</h2>
      <p><strong>Budget:</strong> Bereken het totale wattage dat je nodig hebt en zorg dat je switch voldoende PoE-budget heeft.</p>
      <p><strong>Kabelkwaliteit:</strong> Voor PoE++ wordt Cat6A aanbevolen vanwege lagere weerstand en betere warmteafvoer.</p>
      <p><strong>Kabellengte:</strong> PoE werkt tot 100 meter. Voor langere afstanden zijn PoE extenders nodig.</p>

      <h2>Kosten</h2>
      <p>Een PoE-switch is duurder dan een gewone switch, maar bespaart installatie- en onderhoudskosten. Een 8-poort PoE+ switch kost tussen €100-300, afhankelijk van het merk en PoE-budget.</p>

      <p>Wil je een PoE-installatie laten aanleggen? <a href="/contact">Neem contact op</a> voor advies en een offerte.</p>
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
