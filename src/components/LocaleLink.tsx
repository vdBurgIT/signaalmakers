/**
 * LocaleLink component
 * Automatically adds locale prefix to internal links
 */

import { Link, LinkProps } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';

interface LocaleLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
}

export function LocaleLink({ to, children, ...props }: LocaleLinkProps) {
  const { locale } = useI18n();

  // Create locale-aware path
  const getLocalePath = (path: string): string => {
    // Remove leading slash for consistency
    const cleanPath = path.startsWith('/') ? path : `/${path}`;

    // nl-NL is the default and has no prefix
    if (locale === 'nl-NL') {
      return cleanPath;
    }

    // For nl-BE and en, add the locale prefix
    if (locale === 'nl-BE') {
      return `/nl-be${cleanPath}`;
    }

    if (locale === 'en') {
      return `/en${cleanPath}`;
    }

    return cleanPath;
  };

  const localePath = getLocalePath(to);

  return (
    <Link to={localePath} {...props}>
      {children}
    </Link>
  );
}
