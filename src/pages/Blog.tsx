import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import BackgroundOverlay from '../components/BackgroundOverlay';

export default function Blog() {
  const posts = [
    {
      title: '5 redenen waarom Cat6A beter is dan Cat5e',
      excerpt: 'Overweegt u nieuwe bekabeling voor uw kantoor of woning? Cat6A lijkt misschien duurder, maar biedt aanzienlijke voordelen op de lange termijn. In dit artikel leggen we uit waarom Cat6A vaak de slimme keuze is.',
      date: '15 maart 2025',
      category: 'Netwerk',
      slug: 'cat6a-vs-cat5e',
    },
    {
      title: 'Wifi voor thuiswerkers: wat heb je echt nodig?',
      excerpt: 'Sinds de opkomst van thuiswerken zijn de eisen aan thuisnetwerken enorm gestegen. Videobellingen, grote bestanden uploaden en stabiele verbindingen zijn essentieel. Wij leggen uit welke oplossingen écht werken.',
      date: '8 maart 2025',
      category: 'Wifi',
      slug: 'wifi-thuiswerkers',
    },
    {
      title: 'Gastennetwerk: waarom het essentieel is voor elk bedrijf',
      excerpt: 'Een apart gastennetwerk lijkt misschien een luxe, maar het is eigenlijk een basisvoorziening voor elk modern bedrijf. Bescherm uw bedrijfsnetwerk door bezoekers een apart netwerk te geven.',
      date: '1 maart 2025',
      category: 'Beveiliging',
      slug: 'gastennetwerk-essentieel',
    },
    {
      title: 'VLAN-segmentatie uitgelegd: wat is het en waarom heb je het nodig?',
      excerpt: 'VLAN-segmentatie klinkt technisch, maar het principe is simpel: verdeel uw netwerk in aparte zones voor betere beveiliging en prestaties. Ontdek hoe VLAN\'s werken en waarom ze belangrijk zijn.',
      date: '22 februari 2025',
      category: 'Netwerk',
      slug: 'vlan-segmentatie-uitgelegd',
    },
    {
      title: 'Mesh wifi vs professionele access points: wat is beter?',
      excerpt: 'Mesh-systemen zijn populair voor thuisgebruik, maar zijn ze ook geschikt voor zakelijk gebruik? We vergelijken mesh wifi met professionele access points en leggen uit wanneer je welke oplossing nodig hebt.',
      date: '15 februari 2025',
      category: 'Wifi',
      slug: 'mesh-vs-access-points',
    },
    {
      title: 'De voordelen van PoE: stroom en data over één kabel',
      excerpt: 'Power over Ethernet (PoE) maakt het mogelijk om apparaten van stroom te voorzien via de netwerkkabel. Handig, maar wat zijn de mogelijkheden en beperkingen? We leggen het uit.',
      date: '8 februari 2025',
      category: 'Techniek',
      slug: 'voordelen-poe',
    },
  ];

  return (
    <>
      <SEO
        title="Blog - ICT Tips en Nieuws"
        description="Lees onze blog voor tips over wifi-netwerken, databekabeling, cybersecurity en ICT-oplossingen. Praktische adviezen van onze specialisten."
        keywords="blog, ict tips, wifi advies, netwerk tips"
        url="https://signaalmakers.nl/blog"
      />
      <div>
      <section className="bg-[#0E243A] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <BackgroundOverlay variant="data" density="light" color="blue" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-300">
              Tips, uitleg en achtergronden over netwerken, wifi en IT-installaties
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="wifi" density="light" color="grey" />
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-[#0E243A] to-[#1a3a5a]"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-semibold text-[#FF6A00]">{post.category}</span>
                    </div>
                    <h2 className="text-xl font-bold text-[#0E243A] mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-[#FF6A00] font-semibold hover:text-[#E55F00] transition-colors"
                    >
                      Lees meer
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
