/**
 * Helper function to create locale-aware links
 * Prepends the appropriate locale prefix to internal links
 */

/**
 * Gets the current locale from the URL path
 */
export function getCurrentLocale(): string {
  const path = window.location.pathname;

  if (path.startsWith('/nl-be')) {
    return 'nl-BE';
  }
  if (path.startsWith('/en')) {
    return 'en';
  }

  // Default to nl-NL (no prefix)
  return 'nl-NL';
}

/**
 * Creates a locale-aware link
 * @param path - The base path (e.g., "/diensten" or "/contact")
 * @param locale - Optional locale override. If not provided, uses current locale
 * @returns The full path with locale prefix if needed
 */
export function localeLink(path: string, locale?: string): string {
  const currentLocale = locale || getCurrentLocale();

  // Remove leading slash if present for consistency
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // nl-NL is the default and has no prefix
  if (currentLocale === 'nl-NL') {
    return cleanPath;
  }

  // For nl-BE and en, add the locale prefix
  if (currentLocale === 'nl-BE') {
    return `/nl-be${cleanPath}`;
  }

  if (currentLocale === 'en') {
    return `/en${cleanPath}`;
  }

  return cleanPath;
}
