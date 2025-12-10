/**
 * Get the full URL for a given path in a specific locale
 *
 * @param path - The path (e.g., '/diensten/netwerkbekabeling')
 * @param locale - The locale code (e.g., 'nl-NL', 'nl-BE', 'en')
 * @returns The full URL with locale prefix
 */
export function getLocaleUrl(path: string, locale: string): string {
  const baseUrl = 'https://signaalmakers.nl';

  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // nl-NL is the default locale (no prefix)
  if (locale === 'nl-NL') {
    return `${baseUrl}/${cleanPath}`;
  }

  // nl-BE uses /nl-be/ prefix
  if (locale === 'nl-BE') {
    return `${baseUrl}/nl-be/${cleanPath}`;
  }

  // en uses /en/ prefix
  if (locale === 'en') {
    return `${baseUrl}/en/${cleanPath}`;
  }

  // Fallback to nl-NL
  return `${baseUrl}/${cleanPath}`;
}

/**
 * Get all locale variants for a given path
 * Returns an array of { locale, url } objects for all supported locales
 *
 * @param path - The path (e.g., '/diensten/netwerkbekabeling')
 * @returns Array of locale variants
 */
export function getAllLocaleUrls(path: string): Array<{ locale: string; url: string }> {
  const locales = ['nl-NL', 'nl-BE', 'en'];

  return locales.map(locale => ({
    locale,
    url: getLocaleUrl(path, locale),
  }));
}

/**
 * Get the canonical URL for the current locale
 * This should always point to the current page in the current locale
 *
 * @param path - The path (e.g., '/diensten/netwerkbekabeling')
 * @param locale - The current locale
 * @returns The canonical URL
 */
export function getCanonicalUrl(path: string, locale: string): string {
  return getLocaleUrl(path, locale);
}
