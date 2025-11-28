import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import BackgroundOverlay from '../components/BackgroundOverlay';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  const posts = blogPosts;

  return (
    <>
      <SEO
        title="Blog - Praktische tips over bekabeling | Signaalmakers"
        description="Lees praktische tips over databekabeling, patchkasten, signaallijnen en bekabelingsprojecten. Advies van de bekabelingsspecialist."
        keywords="blog bekabeling, databekabeling tips, patchkast advies, bekabeling uitleg"
        url="https://signaalmakers.nl/blog"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Blog', item: 'https://signaalmakers.nl/blog' }
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
              Blog
            </h1>
            <p className="text-lg text-gray-300">
              Tips, uitleg en achtergronden over bekabeling en installaties
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
