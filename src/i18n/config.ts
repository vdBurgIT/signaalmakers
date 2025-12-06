/**
 * i18n Configuration for SIGNAALMAKERS
 * Supports nl-NL (Netherlands), nl-BE (Belgium), and en (English)
 */

export type Locale = 'nl-NL' | 'nl-BE' | 'en';

export const defaultLocale: Locale = 'nl-NL';

export const locales: Locale[] = ['nl-NL', 'nl-BE', 'en'];

export const localeNames: Record<Locale, string> = {
  'nl-NL': 'Nederlands (NL)',
  'nl-BE': 'Nederlands (BE)',
  'en': 'English',
};

export const localeFlags: Record<Locale, string> = {
  'nl-NL': '🇳🇱',
  'nl-BE': '🇧🇪',
  'en': '🇬🇧',
};

// URL path prefixes for each locale
export const localePathPrefixes: Record<Locale, string> = {
  'nl-NL': '', // Default locale has no prefix
  'nl-BE': '/nl-be',
  'en': '/en',
};

// Reverse mapping: path prefix to locale
export const pathPrefixToLocale: Record<string, Locale> = {
  '': 'nl-NL',
  '/nl-be': 'nl-BE',
  '/en': 'en',
};

/**
 * Get locale from URL path
 */
export function getLocaleFromPath(path: string): Locale {
  for (const [prefix, locale] of Object.entries(pathPrefixToLocale)) {
    if (prefix === '' && !path.startsWith('/nl-be') && !path.startsWith('/en')) {
      return locale;
    }
    if (prefix !== '' && path.startsWith(prefix)) {
      return locale;
    }
  }
  return defaultLocale;
}

/**
 * Get path for a given locale
 */
export function getPathForLocale(currentPath: string, targetLocale: Locale): string {
  // Remove current locale prefix
  let basePath = currentPath;
  for (const prefix of Object.keys(pathPrefixToLocale)) {
    if (prefix !== '' && basePath.startsWith(prefix)) {
      basePath = basePath.substring(prefix.length);
      break;
    }
  }

  // Add target locale prefix
  const targetPrefix = localePathPrefixes[targetLocale];
  return targetPrefix + basePath;
}

/**
 * Remove locale prefix from path
 */
export function removeLocalePrefix(path: string): string {
  for (const prefix of Object.keys(pathPrefixToLocale)) {
    if (prefix !== '' && path.startsWith(prefix)) {
      return path.substring(prefix.length);
    }
  }
  return path;
}
