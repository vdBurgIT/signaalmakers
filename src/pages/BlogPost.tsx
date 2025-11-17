import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowLeft } from 'lucide-react';
import BackgroundOverlay from '../components/BackgroundOverlay';
import { getBlogPostBySlug, getRelatedPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams();

  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const relatedPosts = slug ? getRelatedPosts(slug, 2) : [];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category.toLowerCase()}, blog, ict, technologie`}
        url={`https://signaalmakers.nl/blog/${post.slug}`}
      />
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

            {relatedPosts.length > 0 && (
              <div className="mt-12 pt-12 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-[#0E243A] mb-6">Gerelateerde artikelen</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      to={`/blog/${relatedPost.slug}`}
                      className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-[#FF6A00]">{relatedPost.category}</span>
                      </div>
                      <h4 className="text-xl font-bold text-[#0E243A] mb-2">{relatedPost.title}</h4>
                      <p className="text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
