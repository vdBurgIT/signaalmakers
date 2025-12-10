import { LocaleLink } from '../components/LocaleLink';
import SEO from '../components/SEO';
import { Building2, ShoppingBag, PackageSearch, GraduationCap, Server } from 'lucide-react';
import BackgroundOverlay from '../components/BackgroundOverlay';
import { useTranslation } from '../i18n';

export default function Sectoren() {
  const t = useTranslation();

  const sectoren = [
    {
      icon: Server,
      title: t.sectoren.items.serverRooms.title,
      description: t.sectoren.items.serverRooms.description,
      link: '/sectoren/serverruimtes',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Building2,
      title: t.sectoren.items.offices.title,
      description: t.sectoren.items.offices.description,
      link: '/sectoren/kantoren',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: ShoppingBag,
      title: t.sectoren.items.retail.title,
      description: t.sectoren.items.retail.description,
      link: '/sectoren/retail',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: PackageSearch,
      title: t.sectoren.items.warehouse.title,
      description: t.sectoren.items.warehouse.description,
      link: '/sectoren/magazijn',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: GraduationCap,
      title: t.sectoren.items.education.title,
      description: t.sectoren.items.education.description,
      link: '/sectoren/onderwijs',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <>
      <SEO
        title={t.seo.sectoren.title}
        description={t.seo.sectoren.description}
        keywords={t.seo.sectoren.keywords}
        url="https://signaalmakers.nl/sectoren"
        hreflangPath="/sectoren"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: t.nav.sectors, item: 'https://signaalmakers.nl/sectoren' }
        ]}
      />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.sectoren.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {t.sectoren.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="mixed" density="light" color="mixed" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              {t.sectoren.sectionTitle}
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
              {t.sectoren.sectionSubtitle}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sectoren.map((sector, index) => (
                <LocaleLink
                  key={index}
                  to={sector.link}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${sector.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <sector.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0E243A] mb-3 group-hover:text-[#FF6A00] transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {sector.description}
                  </p>
                  <div className="mt-4 text-[#FF6A00] font-semibold flex items-center gap-2">
                    {t.sectoren.moreInfo}
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </LocaleLink>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-[#FF6A00] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">{t.sectoren.infoBoxTitle}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.sectoren.infoBoxText}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0E243A] to-[#1a3a5a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.sectoren.ctaTitle}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {t.sectoren.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LocaleLink
                to="/offerte"
                className="bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t.sectoren.ctaButton1}
              </LocaleLink>
              <LocaleLink
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0E243A] transition-all duration-300 font-semibold text-lg"
              >
                {t.sectoren.ctaButton2}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
