/**
 * Locale exports
 */

import { nlNL } from './nl-NL';
import { nlBE } from './nl-BE';
import { en } from './en';
import type { Locale } from '../config';

export const translations = {
  'nl-NL': nlNL,
  'nl-BE': nlBE,
  'en': en,
} as const;

export function getTranslation(locale: Locale) {
  return translations[locale];
}

export * from './nl-NL';
export * from './nl-BE';
export * from './en';
