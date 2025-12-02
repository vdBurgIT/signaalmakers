import { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log errors in development, terser will remove console.error in production
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
    // In production, you could send to an error tracking service here
    // e.g., Sentry.captureException(error, { contexts: { react: errorInfo } });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-[#0E243A] mb-2">
                Er is iets misgegaan
              </h1>
              <p className="text-gray-600 mb-6">
                Onze excuses voor het ongemak. Er is een onverwachte fout opgetreden.
              </p>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-gray-100 rounded-lg text-left">
                <p className="font-mono text-sm text-red-600 break-all">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                onClick={() => this.setState({ hasError: false, error: null })}
                className="bg-[#FF6A00] text-white px-8 py-3 rounded-lg hover:bg-[#E55F00] transition-colors font-semibold"
              >
                Terug naar home
              </Link>
              <button
                onClick={() => window.location.reload()}
                className="border-2 border-[#0E243A] text-[#0E243A] px-8 py-3 rounded-lg hover:bg-[#0E243A] hover:text-white transition-colors font-semibold"
              >
                Pagina herladen
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                Blijft het probleem zich voordoen?{' '}
                <Link to="/contact" className="text-[#FF6A00] hover:text-[#E55F00] font-semibold">
                  Neem contact met ons op
                </Link>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
