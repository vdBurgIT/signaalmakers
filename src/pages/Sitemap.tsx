import { LocaleLink } from '../components/LocaleLink';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import { useTranslation } from '../i18n';

export default function Sitemap() {
  const t = useTranslation();

  return (
    <>
      <SEO
        title={`${t.sitemap.title} - ${t.common.brandName}`}
        description={t.sitemap.description}
        keywords="sitemap, overzicht, diensten, netwerkbekabeling, sectoren"
        url="https://signaalmakers.nl/sitemap"
        breadcrumbs={[
          { name: t.nav.home, item: 'https://signaalmakers.nl/' },
          { name: t.sitemap.title, item: 'https://signaalmakers.nl/sitemap' }
        ]}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-[#0E243A] text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.sitemap.title}</h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t.sitemap.description}
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
                  <h2 className="text-2xl font-bold text-[#0E243A] mb-4">{t.sitemap.mainPages}</h2>
                  <ul className="space-y-2">
                    <li>
                      <LocaleLink to="/" className="text-[#FF6A00] hover:underline font-medium">
                        {t.nav.home}
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/over-ons" className="text-[#FF6A00] hover:underline font-medium">
                        {t.nav.about}
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/abonnementen" className="text-[#FF6A00] hover:underline font-medium">
                        {t.nav.subscriptions}
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/faq" className="text-[#FF6A00] hover:underline font-medium">
                        {t.nav.faq}
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/offerte" className="text-[#FF6A00] hover:underline font-medium">
                        {t.nav.quote}
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/contact" className="text-[#FF6A00] hover:underline font-medium">
                        {t.nav.contact}
                      </LocaleLink>
                    </li>
                  </ul>
                </div>

                {/* Diensten */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-[#0E243A] mb-4">{t.footer.services}</h2>
                  <ul className="space-y-2">
                    <li>
                      <LocaleLink to="/diensten" className="text-[#FF6A00] hover:underline font-medium">
                        {t.sitemap.allServices}
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/diensten/netwerkbekabeling" className="text-[#FF6A00] hover:underline">
                        {t.services.network.shortTitle}
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/diensten/patchkasten" className="text-[#FF6A00] hover:underline">
                        {t.services.patchCabinets.title}
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/diensten/audiokabels" className="text-[#FF6A00] hover:underline">
                        {t.services.audio.title}
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/diensten/camera-bekabeling" className="text-[#FF6A00] hover:underline">
                        {t.services.camera.title}
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/diensten/certificeren" className="text-[#FF6A00] hover:underline">
                        {t.services.certification.shortTitle}
                      </LocaleLink>
                    </li>
                  </ul>
                </div>

                {/* Sectoren */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-[#0E243A] mb-4">{t.footer.sectors}</h2>
                  <ul className="space-y-2">
                    <li>
                      <LocaleLink to="/sectoren" className="text-[#FF6A00] hover:underline font-medium">
                        {t.sitemap.allSectors}
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/sectoren/kantoren" className="text-[#FF6A00] hover:underline">
                        {t.sectors.offices.title}
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/sectoren/retail" className="text-[#FF6A00] hover:underline">
                        {t.sectors.retail.title}
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/sectoren/magazijn" className="text-[#FF6A00] hover:underline">
                        {t.sectors.warehouse.title}
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/sectoren/onderwijs" className="text-[#FF6A00] hover:underline">
                        {t.sectors.education.title}
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink to="/sectoren/serverruimtes" className="text-[#FF6A00] hover:underline">
                        {t.sectors.serverRooms.title}
                      </LocaleLink>
                    </li>
                  </ul>
                </div>

                {/* Blog */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-[#0E243A] mb-4">{t.nav.blog}</h2>
                  <ul className="space-y-2">
                    <li>
                      <LocaleLink to="/blog" className="text-[#FF6A00] hover:underline font-medium">
                        {t.sitemap.allBlogPosts}
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
                <h3 className="text-xl font-bold text-[#0E243A] mb-2">{t.sitemap.helpTitle}</h3>
                <p className="text-gray-700 mb-4">
                  {t.sitemap.helpDescription.split('contact met ons op')[0]}
                  <LocaleLink to="/contact" className="text-[#FF6A00] hover:underline font-semibold">{t.nav.contact}</LocaleLink>
                  {t.sitemap.helpDescription.includes('.') ? '.' : ''}
                </p>
                <p className="text-gray-700">
                  {t.sitemap.helpContact} <a href="tel:+31645251333" className="text-[#FF6A00] hover:underline font-semibold">+31 6 45251333</a> {t.sitemap.helpEmail} <a href="mailto:info@signaalmakers.nl" className="text-[#FF6A00] hover:underline font-semibold">info@signaalmakers.nl</a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
