/**
 * Hreflang component for SEO
 * Generates hreflang tags for all locale variants of a page
 */

import { Helmet } from 'react-helmet-async';
import { locales, localePathPrefixes, removeLocalePrefix } from './config';
import { useI18n } from './I18nContext';

interface HreflangProps {
  /**
   * Current page path without locale prefix
   * Example: "/diensten/netwerkbekabeling"
   */
  path?: string;
}

/**
 * Hreflang component
 *
 * Usage:
 * <Hreflang path="/diensten/netwerkbekabeling" />
 *
 * Generates:
 * <link rel="alternate" hreflang="nl-NL" href="https://signaalmakers.nl/diensten/netwerkbekabeling" />
 * <link rel="alternate" hreflang="nl-BE" href="https://signaalmakers.nl/nl-be/diensten/netwerkbekabeling" />
 * <link rel="alternate" hreflang="en" href="https://signaalmakers.nl/en/services/network-cabling" />
 * <link rel="alternate" hreflang="x-default" href="https://signaalmakers.nl/diensten/netwerkbekabeling" />
 */
export function Hreflang({ path }: HreflangProps) {
  const { locale } = useI18n();

  // Get current path without locale prefix
  const currentPath = path || (typeof window !== 'undefined' ? removeLocalePrefix(window.location.pathname) : '/');

  // Base domain
  const baseUrl = 'https://signaalmakers.nl';

  // Generate hreflang links for all locales
  const hreflangLinks = locales.map((loc) => {
    const prefix = localePathPrefixes[loc];
    const href = `${baseUrl}${prefix}${currentPath}`;
    const hreflang = loc === 'nl-NL' ? 'nl-NL' : loc === 'nl-BE' ? 'nl-BE' : 'en';

    return (
      <link
        key={loc}
        rel="alternate"
        hrefLang={hreflang}
        href={href}
      />
    );
  });

  // x-default (fallback) - use nl-NL as default
  const defaultUrl = `${baseUrl}${currentPath}`;

  return (
    <Helmet>
      {hreflangLinks}
      <link rel="alternate" hrefLang="x-default" href={defaultUrl} />
    </Helmet>
  );
}

/**
 * Generate hreflang URLs for a given path
 * Useful for manual SEO meta tags or sitemaps
 */
export function generateHreflangUrls(path: string): Record<string, string> {
  const baseUrl = 'https://signaalmakers.nl';
  const urls: Record<string, string> = {};

  locales.forEach((locale) => {
    const prefix = localePathPrefixes[locale];
    urls[locale] = `${baseUrl}${prefix}${path}`;
  });

  urls['x-default'] = `${baseUrl}${path}`;

  return urls;
}
