import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type?: 'LocalBusiness' | 'WebSite' | 'FAQPage' | 'HowTo' | 'Article';
  data?: Record<string, unknown>;
}

export default function StructuredData({ type = 'LocalBusiness', data }: StructuredDataProps) {
  const getStructuredData = () => {
    if (type === 'LocalBusiness') {
      return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://signaalmakers.nl/#organization',
        name: 'SIGNAALMAKERS',
        description: 'Specialist in databekabeling en netwerkbekabeling (Cat6/Cat6A), audiokabels, camera-bekabeling, patchkasten en certificering voor bedrijven in heel Nederland.',
        url: 'https://signaalmakers.nl',
        logo: 'https://signaalmakers.nl/images/logo/logo_signaalmakers_fc.png',
        image: 'https://signaalmakers.nl/images/logo/logo_signaalmakers_fc.png',
        telephone: '+31 6 45251333',
        email: 'info@signaalmakers.nl',
        vatID: '82907196',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Bredaseweg 108A',
          postalCode: '4902 NS',
          addressLocality: "Oosterhout",
          addressCountry: 'NL'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '51.64011591833564',
          longitude: '4.8473775344267365',
        },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Zuid-Holland', '@id': 'https://nl.wikipedia.org/wiki/Zuid-Holland' },
          { '@type': 'AdministrativeArea', name: 'Noord-Holland', '@id': 'https://nl.wikipedia.org/wiki/Noord-Holland' },
          { '@type': 'AdministrativeArea', name: 'Utrecht', '@id': 'https://nl.wikipedia.org/wiki/Utrecht_(provincie)' },
          { '@type': 'AdministrativeArea', name: 'Noord-Brabant', '@id': 'https://nl.wikipedia.org/wiki/Noord-Brabant' },
          { '@type': 'AdministrativeArea', name: 'Gelderland', '@id': 'https://nl.wikipedia.org/wiki/Gelderland' },
          { '@type': 'AdministrativeArea', name: 'Overijssel', '@id': 'https://nl.wikipedia.org/wiki/Overijssel' },
          { '@type': 'AdministrativeArea', name: 'Limburg', '@id': 'https://nl.wikipedia.org/wiki/Limburg_(Nederland)' },
          { '@type': 'AdministrativeArea', name: 'Friesland', '@id': 'https://nl.wikipedia.org/wiki/Friesland' },
          { '@type': 'AdministrativeArea', name: 'Groningen', '@id': 'https://nl.wikipedia.org/wiki/Groningen_(provincie)' },
          { '@type': 'AdministrativeArea', name: 'Drenthe', '@id': 'https://nl.wikipedia.org/wiki/Drenthe' },
          { '@type': 'AdministrativeArea', name: 'Flevoland', '@id': 'https://nl.wikipedia.org/wiki/Flevoland' },
          { '@type': 'AdministrativeArea', name: 'Zeeland', '@id': 'https://nl.wikipedia.org/wiki/Zeeland' },
          { '@type': 'City', name: 'Amsterdam', '@id': 'https://nl.wikipedia.org/wiki/Amsterdam' },
          { '@type': 'City', name: 'Rotterdam', '@id': 'https://nl.wikipedia.org/wiki/Rotterdam' },
          { '@type': 'City', name: 'Den Haag', '@id': 'https://nl.wikipedia.org/wiki/Den_Haag' },
          { '@type': 'City', name: 'Utrecht', '@id': 'https://nl.wikipedia.org/wiki/Utrecht_(stad)' },
          { '@type': 'City', name: 'Eindhoven', '@id': 'https://nl.wikipedia.org/wiki/Eindhoven' },
          { '@type': 'City', name: 'Tilburg', '@id': 'https://nl.wikipedia.org/wiki/Tilburg' },
          { '@type': 'City', name: 'Groningen', '@id': 'https://nl.wikipedia.org/wiki/Groningen_(stad)' },
          { '@type': 'City', name: 'Almere', '@id': 'https://nl.wikipedia.org/wiki/Almere' },
          { '@type': 'City', name: 'Breda', '@id': 'https://nl.wikipedia.org/wiki/Breda' },
          { '@type': 'City', name: 'Nijmegen', '@id': 'https://nl.wikipedia.org/wiki/Nijmegen' },
          { '@type': 'City', name: 'Arnhem', '@id': 'https://nl.wikipedia.org/wiki/Arnhem' },
          { '@type': 'City', name: 'Haarlem', '@id': 'https://nl.wikipedia.org/wiki/Haarlem' },
          { '@type': 'City', name: 'Enschede', '@id': 'https://nl.wikipedia.org/wiki/Enschede' },
          { '@type': 'City', name: 'Apeldoorn', '@id': 'https://nl.wikipedia.org/wiki/Apeldoorn' }
        ],
        serviceType: [
          'Databekabeling',
          'Netwerkbekabeling',
          'Cat6 bekabeling',
          'Cat6A bekabeling',
          'Patchkast installatie',
          'Audiokabels installatie',
          'Camera-bekabeling',
          'Netwerk certificering'
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Bekabeling diensten',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Netwerkbekabeling (Databekabeling)',
                description: 'Cat6/Cat6A bekabeling voor 1-10 Gbps. Professionele installatie met certificering en documentatie.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Audiokabels',
                description: 'Gebalanceerde audiokabels voor vaste installaties. Storingsvrij en netjes afgewerkt.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Camera-bekabeling',
                description: 'PoE-trajecten voor IP-camera\u2019s. Professionele installatie met documentatie.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Patchkasten',
                description: 'Strak ingerichte patchkasten met kabelmanagement en labeling.'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Meten & Certificeren',
                description: 'Professionele certificering conform kabelnormen met meetrapporten.'
              }
            }
          ]
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday', 'Sunday'],
            opens: '00:00',
            closes: '00:00',
            description: 'Op afspraak'
          }
        ],
        sameAs: [
          'https://www.instagram.com/signaalmakers/',
          'https://www.linkedin.com/company/signaalmakers'
        ],
        priceRange: '€€',
        ...data
      };
    }

    if (type === 'WebSite') {
      return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://signaalmakers.nl/#website',
        url: 'https://signaalmakers.nl',
        name: 'SIGNAALMAKERS',
        description: 'Specialist in databekabeling en netwerkbekabeling door heel Nederland',
        publisher: {
          '@id': 'https://signaalmakers.nl/#organization'
        },
        inLanguage: 'nl-NL',
        ...data
      };
    }

    if (type === 'FAQPage' && data) {
      return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        ...data
      };
    }

    if (type === 'HowTo' && data) {
      return {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        ...data
      };
    }

    if (type === 'Article' && data) {
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://signaalmakers.nl/#organization',
          name: 'SIGNAALMAKERS',
          logo: {
            '@type': 'ImageObject',
            url: 'https://signaalmakers.nl/images/logo/logo_signaalmakers_fc.png'
          }
        },
        author: {
          '@type': 'Organization',
          '@id': 'https://signaalmakers.nl/#organization',
          name: 'SIGNAALMAKERS'
        },
        ...data
      };
    }

    return data;
  };

  const structuredData = getStructuredData();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
