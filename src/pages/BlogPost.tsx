import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BackgroundOverlay from '../components/BackgroundOverlay';

export default function BlogPost() {
  const { slug } = useParams();

  const post = {
    title: '5 redenen waarom Cat6A beter is dan Cat5e',
    date: '15 maart 2025',
    category: 'Netwerk',
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
  };

  return (
    <div>
      <section className="bg-[#0E243A] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <BackgroundOverlay variant="data" density="light" color="blue" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6">
              <ArrowLeft className="w-4 h-4" />
              Terug naar blog
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-semibold text-[#FF6A00]">{post.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="network" density="light" color="grey" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                color: '#4B5563',
                lineHeight: '1.75',
              }}
            />

            <div className="mt-12 pt-12 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-6">Gerelateerde artikelen</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/blog/vlan-segmentatie-uitgelegd" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-xl font-bold text-[#0E243A] mb-2">VLAN-segmentatie uitgelegd</h4>
                  <p className="text-gray-600">Wat is VLAN en waarom heb je het nodig voor een veilig netwerk?</p>
                </Link>
                <Link to="/blog/voordelen-poe" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-xl font-bold text-[#0E243A] mb-2">De voordelen van PoE</h4>
                  <p className="text-gray-600">Stroom en data over één kabel: hoe werkt het?</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
