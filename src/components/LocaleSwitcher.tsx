/**
 * Locale Switcher Component
 * Allows users to switch between nl-NL, nl-BE and en
 */

import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe, X } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { Locale, locales, getPathForLocale } from '../i18n/config';

export function LocaleSwitcher() {
  const { locale, setLocale } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Simple locale labels
  const localeLabels: Record<Locale, string> = {
    'nl-NL': 'Nederlands',
    'nl-BE': 'België',
    'en': 'Engels',
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    // Update locale in context
    setLocale(newLocale);

    // Navigate to the same page in the new locale
    const newPath = getPathForLocale(location.pathname, newLocale);
    navigate(newPath);

    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Current locale button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-white"
        aria-label="Switch language/region"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {localeLabels[locale]}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
          <div className="py-1">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center justify-between ${
                  loc === locale ? 'bg-gray-100' : ''
                }`}
              >
                <span className="text-sm font-medium text-gray-900">
                  {localeLabels[loc]}
                </span>
                {loc === locale && (
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Compact mobile locale switcher for header - icon button with modal
 */
export function CompactMobileLocaleSwitcher() {
  const { locale, setLocale } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const localeLabels: Record<Locale, string> = {
    'nl-NL': 'NL',
    'nl-BE': 'BE',
    'en': 'EN',
  };

  const localeFullNames: Record<Locale, string> = {
    'nl-NL': 'Nederlands',
    'nl-BE': 'België',
    'en': 'English',
  };

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    setLocale(newLocale);
    const newPath = getPathForLocale(location.pathname, newLocale);
    navigate(newPath);
    setIsOpen(false);
  };

  return (
    <>
      {/* Compact button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        aria-label="Switch language"
      >
        <Globe className="w-5 h-5" />
        <span className="text-xs font-bold">{localeLabels[locale]}</span>
      </button>

      {/* Full screen modal */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[100]"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal content */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-[#0E243A] rounded-lg shadow-2xl z-[101] p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-white">
                <Globe className="w-5 h-5" />
                <span className="font-semibold">Kies taal / Choose language</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-2">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLocaleChange(loc)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
                    loc === locale
                      ? 'bg-[#FF6A00] text-white'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  <span className="font-medium">
                    {localeFullNames[loc]}
                  </span>
                  {loc === locale && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
