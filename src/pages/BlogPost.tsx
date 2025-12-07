import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { ArrowLeft } from 'lucide-react';
import BackgroundOverlay from '../components/BackgroundOverlay';
import { getBlogPostBySlug, getRelatedPosts } from '../data/blogPosts';
import { useI18n } from '../i18n';

export default function BlogPost() {
  const { t, locale } = useI18n();
  const { slug } = useParams();

  const post = slug ? getBlogPostBySlug(slug, locale) : undefined;
  const relatedPosts = slug ? getRelatedPosts(slug, 2, locale) : [];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Convert Dutch date to ISO format
  const convertToISO = (dutchDate: string): string => {
    const months: Record<string, string> = {
      'januari': '01', 'februari': '02', 'maart': '03', 'april': '04',
      'mei': '05', 'juni': '06', 'juli': '07', 'augustus': '08',
      'september': '09', 'oktober': '10', 'november': '11', 'december': '12'
    };
    const parts = dutchDate.split(' ');
    const day = parts[0].padStart(2, '0');
    const month = months[parts[1]];
    const year = parts[2];
    return `${year}-${month}-${day}`;
  };

  const articleSchema = {
    headline: post.title,
    description: post.excerpt,
    datePublished: convertToISO(post.date),
    dateModified: convertToISO(post.date),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://signaalmakers.nl/blog/${post.slug}`
    },
    keywords: post.keywords || `${post.category.toLowerCase()}, blog, ict, technologie`
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category.toLowerCase()}, blog, ict, technologie`}
        url={`https://signaalmakers.nl/blog/${post.slug}`}
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Blog', item: 'https://signaalmakers.nl/blog' },
          { name: post.title, item: `https://signaalmakers.nl/blog/${post.slug}` }
        ]}
      />
      <StructuredData type="Article" data={articleSchema} />
      <div>
      <section className="bg-[#0E243A] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <BackgroundOverlay variant="data" density="light" color="blue" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6">
              <ArrowLeft className="w-4 h-4" />
              {t.blog.backToBlog}
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
                <h3 className="text-2xl font-bold text-[#0E243A] mb-6">{t.blog.relatedArticles}</h3>
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
