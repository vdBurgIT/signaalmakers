import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  breadcrumbs?: BreadcrumbItem[];
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

const SEO = ({
  title = 'Signaalmakers - Netwerkbekabeling door heel Nederland | Jouw projecten, onze zekerheid',
  description = 'Professionele netwerkbekabeling en databekabeling door heel Nederland. Cat6, Cat6A en Cat7 UTP-bekabeling, patchkasten, signaallijnen. Jouw projecten, onze zekerheid.',
  keywords = 'netwerkbekabeling, databekabeling, UTP-bekabeling, Cat6 bekabeling, Cat6A bekabeling, Cat7 bekabeling, patchkast bekabeling, structured cabling, datapunten aanleggen, kabelmanagement, bekabeld netwerk Nederland',
  image = 'https://signaalmakers.nl/Transparent-03.png',
  url = 'https://signaalmakers.nl/',
  type = 'website',
  breadcrumbs,
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
                slogan: 'Jouw projecten, onze zekerheid',
                description: description,
                url: url,
                logo: 'https://signaalmakers.nl/logo.png',
                image: image,
                telephone: '+31645251333',
                email: 'info@signaalmakers.nl',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Vezelstraat 14',
                  postalCode: '3295 VP',
                  addressLocality: '\'s-Gravendeel',
                  addressRegion: 'Zuid-Holland',
                  addressCountry: 'NL',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: '51.7786',
                  longitude: '4.6189',
                },
                areaServed: [
                  '\'s-Gravendeel',
                  'Hoeksche Waard',
                  'Zuid-Holland',
                  'Rotterdam',
                  'Dordrecht',
                  'Nederland',
                ],
                sameAs: [
                  'https://www.linkedin.com/company/signaalmakers',
                  'https://www.instagram.com/signaalmakers/',
                ],
              }),
        })}
      </script>

      {/* Breadcrumb JSON-LD */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbs.map((crumb, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: crumb.name,
              item: crumb.item,
            })),
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
