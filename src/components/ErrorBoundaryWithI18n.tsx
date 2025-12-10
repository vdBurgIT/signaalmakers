import { useTranslation } from '../i18n';
import ErrorBoundary from './ErrorBoundary';

export default function ErrorBoundaryWithI18n({ children }: { children: React.ReactNode }) {
  const t = useTranslation();

  return (
    <ErrorBoundary translations={t.error}>
      {children}
    </ErrorBoundary>
  );
}
