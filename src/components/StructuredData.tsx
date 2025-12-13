import { Helmet } from 'react-helmet-async';
import { BUSINESS_INFO, getPostalAddress, getGeoCoordinates } from '../config/business';

interface StructuredDataProps {
  type?: 'LocalBusiness' | 'WebSite' | 'FAQPage' | 'HowTo' | 'Article' | 'Blog';
  data?: Record<string, unknown>;
}

export default function StructuredData({ type = 'LocalBusiness', data }: StructuredDataProps) {
  const getStructuredData = () => {
    if (type === 'LocalBusiness') {
      return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${BUSINESS_INFO.contact.url}/#organization`,
        name: BUSINESS_INFO.name,
        legalName: BUSINESS_INFO.legalName,
        alternateName: BUSINESS_INFO.alternateName, // BELANGRIJK: Merkvarianten voor Google brand recognition
        slogan: 'Jouw projecten, onze zekerheid', // Merkslogan (consistent door hele site)
        description: BUSINESS_INFO.description.nl,
        url: BUSINESS_INFO.contact.url,
        logo: `${BUSINESS_INFO.contact.url}/images/logo/logo_signaalmakers_fc.png`,
        image: `${BUSINESS_INFO.contact.url}/images/logo/logo_signaalmakers_fc.png`,
        telephone: BUSINESS_INFO.contact.telephone,
        email: BUSINESS_INFO.contact.email,
        vatID: BUSINESS_INFO.registration.kvk,
        address: getPostalAddress(), // Centrale source: alleen Bredaseweg 108A
        geo: getGeoCoordinates(),
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
        '@id': `${BUSINESS_INFO.contact.url}/#website`,
        url: BUSINESS_INFO.contact.url,
        name: BUSINESS_INFO.name,
        alternateName: BUSINESS_INFO.alternateName, // BELANGRIJK: Merkvarianten voor Google brand recognition
        description: BUSINESS_INFO.description.nl,
        publisher: {
          '@id': `${BUSINESS_INFO.contact.url}/#organization`
        },
        inLanguage: ['nl-NL', 'nl-BE', 'en-US'], // Meertalig support
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
          '@id': `${BUSINESS_INFO.contact.url}/#organization`,
          name: BUSINESS_INFO.name,
          logo: {
            '@type': 'ImageObject',
            url: `${BUSINESS_INFO.contact.url}/images/logo/logo_signaalmakers_fc.png`
          }
        },
        author: {
          '@type': 'Organization',
          '@id': `${BUSINESS_INFO.contact.url}/#organization`,
          name: BUSINESS_INFO.name
        },
        ...data
      };
    }

    if (type === 'Blog' && data) {
      return {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        publisher: {
          '@type': 'Organization',
          '@id': `${BUSINESS_INFO.contact.url}/#organization`,
          name: BUSINESS_INFO.name
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
