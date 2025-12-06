/**
 * i18n Context for SIGNAALMAKERS
 * Provides translation functionality throughout the app
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, defaultLocale, getLocaleFromPath } from './config';
import { translations, TranslationKeys } from './locales';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
  initialLocale?: Locale;
}

export function I18nProvider({ children, initialLocale }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (initialLocale) return initialLocale;

    // Get locale from URL path
    if (typeof window !== 'undefined') {
      return getLocaleFromPath(window.location.pathname);
    }

    return defaultLocale;
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    // Store in localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-locale', newLocale);
    }
  };

  // Update locale when URL changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleLocationChange = () => {
      const newLocale = getLocaleFromPath(window.location.pathname);
      if (newLocale !== locale) {
        setLocaleState(newLocale);
      }
    };

    // Listen for navigation events
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, [locale]);

  const t = translations[locale];

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

/**
 * Hook to use translations in components
 * @returns { locale, setLocale, t }
 *
 * Usage:
 * const { t, locale } = useI18n();
 * <h1>{t.home.hero.title}</h1>
 */
export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}

/**
 * Hook to get translation function only
 * @returns Translation object
 *
 * Usage:
 * const t = useTranslation();
 * <h1>{t.home.hero.title}</h1>
 */
export function useTranslation() {
  const { t } = useI18n();
  return t;
}
