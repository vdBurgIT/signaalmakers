import { Helmet } from 'react-helmet-async';
import { Hreflang, getCanonicalUrl } from '../i18n';
import { useI18n } from '../i18n';
import { BUSINESS_INFO } from '../config/business';

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
  includehreflang?: boolean;
  hreflangPath?: string;
}

const SEO = ({
  title = 'SIGNAALMAKERS - Netwerkbekabeling door heel Nederland | Jouw projecten, onze zekerheid',
  description = 'Professionele netwerkbekabeling en databekabeling door heel Nederland. Cat6, Cat6A en Cat7 UTP-bekabeling, patchkasten, signaallijnen. Jouw projecten, onze zekerheid. Gewoon geregeld.',
  keywords = 'netwerkbekabeling, databekabeling, UTP-bekabeling, Cat6 bekabeling, Cat6A bekabeling, Cat7 bekabeling, patchkast bekabeling, structured cabling, datapunten aanleggen, kabelmanagement, bekabeld netwerk Nederland',
  image = 'https://signaalmakers.nl/images/logo/logo_signaalmakers_fc.png',
  url = 'https://signaalmakers.nl/',
  type = 'website',
  breadcrumbs,
  article,
  includehreflang = true,
  hreflangPath,
}: SEOProps) => {
  const { locale } = useI18n();
  const fullTitle = title.includes('SIGNAALMAKERS') ? title : `${title} | SIGNAALMAKERS`;

  // Determine og:locale based on current locale
  const ogLocale = locale === 'nl-NL' ? 'nl_NL' : locale === 'nl-BE' ? 'nl_BE' : 'en_US';

  // Generate locale-aware canonical URL
  // If hreflangPath is provided, use it to generate the canonical URL
  // Otherwise, use the provided url
  const canonicalUrl = hreflangPath
    ? getCanonicalUrl(hreflangPath, locale)
    : url;

  return (
    <>
      {includehreflang && <Hreflang path={hreflangPath} />}
      <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:site_name" content={BUSINESS_INFO.seo.siteName} />
      <meta name="application-name" content={BUSINESS_INFO.seo.siteName} />

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
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL - Now locale-aware! */}
      <link rel="canonical" href={canonicalUrl} />

      {/* JSON-LD Structured Data - Only for Articles (site-wide WebSite+LocalBusiness in App.tsx) */}
      {type === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: fullTitle,
            description: description,
            image: image,
            datePublished: article?.publishedTime,
            dateModified: article?.modifiedTime,
            author: {
              '@type': 'Organization',
              '@id': `${BUSINESS_INFO.contact.url}/#organization`,
              name: BUSINESS_INFO.name,
            },
            publisher: {
              '@type': 'Organization',
              '@id': `${BUSINESS_INFO.contact.url}/#organization`,
              name: BUSINESS_INFO.name,
              logo: {
                '@type': 'ImageObject',
                url: `${BUSINESS_INFO.contact.url}/images/logo/logo_signaalmakers_fc.png`,
              },
            },
          })}
        </script>
      )}

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
    </>
  );
};

export default SEO;
