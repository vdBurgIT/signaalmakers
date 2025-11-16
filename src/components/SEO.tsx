import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

const SEO = ({
  title = 'Signaalmakers - ICT & Netwerk Oplossingen voor Bedrijven en Particulieren',
  description = 'Professionele ICT-diensten: WiFi-netwerken, databekabeling, internet & telefonie, hosting, moderne werkplek oplossingen en cybersecurity. Voor zakelijk en particulier.',
  keywords = 'ICT diensten, WiFi netwerk, databekabeling, internet telefonie, hosting, domein, moderne werkplek, cybersecurity, veilig online',
  image = 'https://signaalmakers.nl/og-image.jpg',
  url = 'https://signaalmakers.nl/',
  type = 'website',
  article,
}: SEOProps) => {
  const fullTitle = title.includes('Signaalmakers') ? title : `${title} | Signaalmakers`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="nl_NL" />
      <meta property="og:site_name" content="Signaalmakers" />

      {/* Article specific tags */}
      {article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags?.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': type === 'article' ? 'Article' : 'Organization',
          ...(type === 'article'
            ? {
                headline: fullTitle,
                description: description,
                image: image,
                datePublished: article?.publishedTime,
                dateModified: article?.modifiedTime,
                author: {
                  '@type': 'Organization',
                  name: article?.author || 'Signaalmakers',
                },
              }
            : {
                name: 'Signaalmakers',
                description: description,
                url: url,
                logo: 'https://signaalmakers.nl/logo.png',
                image: image,
                telephone: '+31-XX-XXXXXXX',
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'NL',
                },
                sameAs: [],
              }),
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
