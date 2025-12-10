import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';

export default function Sitemap() {
  return (
    <>
      <SEO
        title="Sitemap - Alle pagina's van SIGNAALMAKERS"
        description="Overzicht van alle pagina's van SIGNAALMAKERS: diensten, sectoren, blog en contactinformatie. Professionele netwerkbekabeling door heel Nederland."
        keywords="sitemap, overzicht, diensten, netwerkbekabeling, sectoren"
        url="https://signaalmakers.nl/sitemap"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Sitemap', item: 'https://signaalmakers.nl/sitemap' }
        ]}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-[#0E243A] text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Sitemap</h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Welkom op de sitemap van SIGNAALMAKERS. Hier vindt u een compleet overzicht van alle pagina's op onze website. 
                Deze sitemap helpt u om snel de informatie te vinden die u zoekt over netwerkbekabeling, onze diensten, sectoren en meer.
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Hoofdpagina's */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-[#0E243A] mb-4">Hoofdpagina's</h2>
                  <ul className="space-y-2">
                    <li>
                      <LocaleLink to="/" className="text-[#FF6A00] hover:underline font-medium">
                        Home
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/over-ons" className="text-[#FF6A00] hover:underline font-medium">
                        Over ons
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/abonnementen" className="text-[#FF6A00] hover:underline font-medium">
                        Abonnementen
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/faq" className="text-[#FF6A00] hover:underline font-medium">
                        Veelgestelde vragen (FAQ)
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/offerte" className="text-[#FF6A00] hover:underline font-medium">
                        Offerte aanvragen
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/contact" className="text-[#FF6A00] hover:underline font-medium">
                        Contact
                      </LocaleLink>
                    </li>
                  </ul>
                </div>

                {/* Diensten */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-[#0E243A] mb-4">Diensten</h2>
                  <ul className="space-y-2">
                    <li>
                      <LocaleLink to="/diensten" className="text-[#FF6A00] hover:underline font-medium">
                        Alle diensten
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/diensten/netwerkbekabeling" className="text-[#FF6A00] hover:underline">
                        Netwerkbekabeling
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/diensten/patchkasten" className="text-[#FF6A00] hover:underline">
                        Patchkasten
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/diensten/audiokabels" className="text-[#FF6A00] hover:underline">
                        Audiokabels
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/diensten/camera-bekabeling" className="text-[#FF6A00] hover:underline">
                        Camera-bekabeling
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/diensten/certificeren" className="text-[#FF6A00] hover:underline">
                        Meten & Certificeren
                      </LocaleLink>
                    </li>
                  </ul>
                </div>

                {/* Sectoren */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-[#0E243A] mb-4">Sectoren</h2>
                  <ul className="space-y-2">
                    <li>
                      <LocaleLink to="/sectoren" className="text-[#FF6A00] hover:underline font-medium">
                        Alle sectoren
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/sectoren/kantoren" className="text-[#FF6A00] hover:underline">
                        Kantoren
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/sectoren/retail" className="text-[#FF6A00] hover:underline">
                        Retail & Horeca
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/sectoren/magazijn" className="text-[#FF6A00] hover:underline">
                        Magazijn & Logistiek
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/sectoren/onderwijs" className="text-[#FF6A00] hover:underline">
                        Onderwijs & Zorg
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/sectoren/serverruimtes" className="text-[#FF6A00] hover:underline">
                        Serverruimtes & Datacenters
                      </LocaleLink>
                    </li>
                  </ul>
                </div>

                {/* Blog */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-[#0E243A] mb-4">Blog</h2>
                  <ul className="space-y-2">
                    <li>
                      <LocaleLink to="/blog" className="text-[#FF6A00] hover:underline font-medium">
                        Alle blogartikelen
                      </LocaleLink>
                    </li>
                    {blogPosts.map((post) => (
                      <li key={post.slug}>
                        <LocaleLink to={`/blog/${post.slug}`} className="text-[#FF6A00] hover:underline">
                          {post.title}
                        </LocaleLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Extra Info */}
              <div className="mt-8 bg-gradient-to-br from-blue-50 to-orange-50 border-l-4 border-[#FF6A00] rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0E243A] mb-2">Hulp nodig?</h3>
                <p className="text-gray-700 mb-4">
                  Kunt u niet vinden wat u zoekt? Neem gerust <LocaleLink to="/contact" className="text-[#FF6A00] hover:underline font-semibold">contact met ons op</LocaleLink>. 
                  Wij helpen u graag verder met al uw vragen over netwerkbekabeling, databekabeling en infrastructuur.
                </p>
                <p className="text-gray-700">
                  Voor directe vragen kunt u ons ook bellen op <a href="tel:+31645251333" className="text-[#FF6A00] hover:underline font-semibold">+31 6 45251333</a> of 
                  mailen naar <a href="mailto:info@signaalmakers.nl" className="text-[#FF6A00] hover:underline font-semibold">info@signaalmakers.nl</a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
