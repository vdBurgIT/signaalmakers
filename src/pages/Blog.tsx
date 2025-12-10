import { LocaleLink } from '../components/LocaleLink';
import SEO from '../components/SEO';
import BackgroundOverlay from '../components/BackgroundOverlay';
import { getBlogPostsByLocale } from '../data/blogPosts';
import { useI18n } from '../i18n';

export default function Blog() {
  const { t, locale } = useI18n();
  const posts = getBlogPostsByLocale(locale);

  return (
    <>
      <SEO
        title={t.seo.blog.title}
        description={t.seo.blog.description}
        keywords={t.seo.blog.keywords}
        url="https://signaalmakers.nl/blog"
        hreflangPath="/blog"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: t.nav.blog, item: 'https://signaalmakers.nl/blog' }
        ]}
      />
      <div>
      <section className="bg-[#0E243A] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <BackgroundOverlay variant="data" density="light" color="blue" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.blog.hero.title}
            </h1>
            <p className="text-lg text-gray-300">
              {t.blog.hero.subtitle}
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
                    <LocaleLink
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-[#FF6A00] font-semibold hover:text-[#E55F00] transition-colors"
                    >
                      {t.blog.readMore}
                      <span className="ml-2">→</span>
                    </LocaleLink>
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
