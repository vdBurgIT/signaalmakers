/**
 * Centrale bedrijfsinformatie voor SIGNAALMAKERS
 * Single source of truth voor NAP (Name, Address, Phone) data
 * Gebruikt voor: structured data, meta tags, footer, contact pagina's
 */

export const BUSINESS_INFO = {
  // Merknaam (aan elkaar, consistent)
  name: 'Signaalmakers',
  legalName: 'Signaalmakers',
  alternateName: ['Signaal Makers', 'SignaalMakers'],

  // Primair adres (NL)
  address: {
    streetAddress: 'Bredaseweg 108A',
    postalCode: '4902 NS',
    addressLocality: 'Oosterhout',
    addressRegion: 'Noord-Brabant',
    addressCountry: 'NL',
  },

  // Contact
  contact: {
    telephone: '+31645251333',
    email: 'info@signaalmakers.nl',
    url: 'https://signaalmakers.nl',
  },

  // Bedrijfsgegevens
  registration: {
    kvk: '82907196',
    // BTW nummer indien beschikbaar
    // vat: 'NL...',
  },

  // Openingstijden (optioneel, voor structured data)
  openingHours: [
    'Mo-Fr 08:00-18:00',
  ],

  // Locatie
  geo: {
    latitude: 51.6449, // Oosterhout centrum, exact adres kan nauwkeuriger
    longitude: 4.8597,
  },

  // Bedrijfsbeschrijving
  description: {
    nl: 'SIGNAALMAKERS is specialist in databekabeling, netwerkbekabeling en infrastructuur. Wij verzorgen professionele kabelinfrastructuur voor kantoren, datacenters, serverruimtes en bedrijfspanden in Nederland en België.',
    en: 'SIGNAALMAKERS specializes in data cabling, network cabling and infrastructure. We provide professional cable infrastructure for offices, data centers, server rooms and commercial buildings in the Netherlands and Belgium.',
  },

  // Diensten (voor LocalBusiness schema)
  services: [
    'Databekabeling',
    'Netwerkbekabeling',
    'Glasvezel installatie',
    'Infrastructuur',
    'Camera bekabeling',
    'Audio bekabeling',
    'Patchkasten',
    'Certificering',
  ],

  // Bedieningsgebied
  areaServed: ['NL', 'BE'],

  // Social media / externe profielen
  sameAs: [
    // Voeg hier echte, actieve profielen toe:
    // 'https://www.linkedin.com/company/signaalmakers',
    // 'https://www.facebook.com/signaalmakers',
  ],

  // SEO
  seo: {
    siteName: 'Signaalmakers',
    defaultTitle: 'SIGNAALMAKERS – Databekabeling & Netwerkbekabeling Specialist',
    titleTemplate: '%s | Signaalmakers',
  },
} as const;

/**
 * Helper functie: volledig adres als string
 */
export function getFullAddress(locale: 'nl' | 'en' = 'nl'): string {
  const { streetAddress, postalCode, addressLocality } = BUSINESS_INFO.address;
  return `${streetAddress}, ${postalCode} ${addressLocality}`;
}

/**
 * Helper functie: geo coordinates voor structured data
 */
export function getGeoCoordinates() {
  return {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS_INFO.geo.latitude,
    longitude: BUSINESS_INFO.geo.longitude,
  };
}

/**
 * Helper functie: PostalAddress voor structured data
 */
export function getPostalAddress() {
  return {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS_INFO.address.streetAddress,
    postalCode: BUSINESS_INFO.address.postalCode,
    addressLocality: BUSINESS_INFO.address.addressLocality,
    addressRegion: BUSINESS_INFO.address.addressRegion,
    addressCountry: BUSINESS_INFO.address.addressCountry,
  };
}
