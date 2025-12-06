/**
 * Locale Switcher Component
 * Allows users to switch between nl-NL, nl-BE and en
 */

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { Locale, locales, localeNames, localeFlags, getPathForLocale } from '../i18n/config';

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
 * Compact locale switcher for mobile/header
 */
export function CompactLocaleSwitcher() {
  const { locale } = useI18n();

  return (
    <div className="flex items-center gap-1">
      <Globe className="w-4 h-4 text-gray-400" />
      <span className="text-sm text-gray-600">
        {localeFlags[locale]}
      </span>
    </div>
  );
}
