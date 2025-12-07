import { Link } from 'react-router-dom';
import { Cable, Server, Volume2, CheckCircle2, Building2, Camera } from 'lucide-react';
import BackgroundOverlay from '../components/BackgroundOverlay';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { useTranslation } from '../i18n';

export default function Diensten() {
  const t = useTranslation();

  const services = [
    {
      icon: Cable,
      title: t.diensten.services.network.title,
      description: t.diensten.services.network.description,
      link: '/diensten/netwerkbekabeling',
      features: t.diensten.services.network.features,
    },
    {
      icon: Volume2,
      title: t.diensten.services.audio.title,
      description: t.diensten.services.audio.description,
      link: '/diensten/audiokabels',
      features: t.diensten.services.audio.features,
    },
    {
      icon: Camera,
      title: t.diensten.services.camera.title,
      description: t.diensten.services.camera.description,
      link: '/diensten/camera-bekabeling',
      features: t.diensten.services.camera.features,
    },
    {
      icon: Server,
      title: t.diensten.services.patchCabinets.title,
      description: t.diensten.services.patchCabinets.description,
      link: '/diensten/patchkasten',
      features: t.diensten.services.patchCabinets.features,
    },
    {
      icon: CheckCircle2,
      title: t.diensten.services.certification.title,
      description: t.diensten.services.certification.description,
      link: '/diensten/certificeren',
      features: t.diensten.services.certification.features,
    },
  ];

  return (
    <>
      <SEO
        title={t.seo.diensten.title}
        description={t.seo.diensten.description}
        keywords={t.seo.diensten.keywords}
        url="https://signaalmakers.nl/diensten"
        hreflangPath="/diensten"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: t.nav.services, item: 'https://signaalmakers.nl/diensten' }
        ]}
      />
      <StructuredData type="LocalBusiness" />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#FF6A00] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t.diensten.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {t.diensten.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
        <BackgroundOverlay variant="mixed" density="medium" color="mixed" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
              {t.diensten.sectionTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.diensten.sectionSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0E243A] mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-[#FF6A00] text-lg font-semibold hover:text-[#E55F00] transition-colors group hover:gap-3 gap-2"
                >
                  {t.common.readMore}
                  <span className="transition-all duration-300">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="network" density="light" color="blue" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
              {t.diensten.usps.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.diensten.usps.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Cable,
                title: t.diensten.usps.infraFirst.title,
                desc: t.diensten.usps.infraFirst.desc,
              },
              {
                icon: CheckCircle2,
                title: t.diensten.usps.practicalDelivery.title,
                desc: t.diensten.usps.practicalDelivery.desc,
              },
              {
                icon: Building2,
                title: t.diensten.usps.nationwide.title,
                desc: t.diensten.usps.nationwide.desc,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              {t.diensten.ctaTitle}
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              {t.diensten.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/offerte"
                className="inline-block bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t.diensten.ctaButton1}
              </Link>
              <Link
                to="/contact"
                className="inline-block border-2 border-[#0E243A] text-[#0E243A] px-8 py-4 rounded-lg hover:bg-[#0E243A] hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                {t.diensten.ctaButton2}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
