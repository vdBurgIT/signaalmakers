import { LocaleLink } from '../components/LocaleLink';
import SEO from '../components/SEO';
import { Home, Search, ArrowRight } from 'lucide-react';
import { useTranslation } from '../i18n';

export default function NotFound() {
  const t = useTranslation();

  return (
    <>
      <SEO
        title={`${t.notFound.title} - 404 | ${t.common.brandName}`}
        description={t.notFound.description}
        url="https://signaalmakers.nl/404"
        hreflangPath="/404"
      />
      <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#0E243A] to-[#1a3a5a] text-white">
        <div className="text-center px-4 max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-[#FF6A00] mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.notFound.title}</h2>
            <p className="text-xl text-gray-300 mb-8">
              {t.notFound.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <LocaleLink to="/"
              className="bg-[#FF6A00] text-white px-6 py-4 rounded-lg hover:bg-[#e55e00] transition-colors flex flex-col items-center gap-2 group"
            >
              <Home className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">{t.notFound.backHome}</span>
            </LocaleLink>

            <LocaleLink to="/diensten"
              className="bg-white/10 backdrop-blur text-white px-6 py-4 rounded-lg hover:bg-white/20 transition-colors flex flex-col items-center gap-2 group"
            >
              <Search className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">{t.notFound.ourServices}</span>
            </LocaleLink>

            <LocaleLink to="/contact"
              className="bg-white/10 backdrop-blur text-white px-6 py-4 rounded-lg hover:bg-white/20 transition-colors flex flex-col items-center gap-2 group"
            >
              <ArrowRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">{t.notFound.contactUs}</span>
            </LocaleLink>
          </div>

          <div className="text-gray-400">
            <p>{t.notFound.menuHelp}</p>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#0E243A] mb-6 text-center">{t.notFound.popularPages}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <LocaleLink to="/diensten/netwerkbekabeling" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-[#0E243A] mb-2">{t.notFound.networkCabling.title}</h4>
                <p className="text-gray-600 text-sm">{t.notFound.networkCabling.description}</p>
              </LocaleLink>
              <LocaleLink to="/sectoren" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-[#0E243A] mb-2">{t.notFound.sectors.title}</h4>
                <p className="text-gray-600 text-sm">{t.notFound.sectors.description}</p>
              </LocaleLink>
              <LocaleLink to="/contact" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-[#0E243A] mb-2">{t.notFound.contact.title}</h4>
                <p className="text-gray-600 text-sm">{t.notFound.contact.description}</p>
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
