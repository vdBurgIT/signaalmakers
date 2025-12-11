import { LocaleLink } from '../../components/LocaleLink';
import SEO from '../../components/SEO';
import { Building2, Cable, Camera, CheckCircle2, Volume2, Wifi } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';
import { useTranslation } from '../../i18n';

export default function Kantoren() {
  const t = useTranslation();
  const sector = t.sectors.offices;

  return (
    <>
      <SEO
        title={sector.seo.title}
        description={sector.seo.description}
        keywords={sector.seo.keywords}
        url="https://signaalmakers.nl/sectoren/kantoren"
        hreflangPath="/sectoren/kantoren"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: t.nav.sectors, item: 'https://signaalmakers.nl/sectoren' },
          { name: t.sectoren.items.offices.title, item: 'https://signaalmakers.nl/sectoren/kantoren' }
        ]}
      />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-8 mx-auto shadow-2xl">
              <Building2 className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {sector.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {sector.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="mixed" density="light" color="mixed" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              {sector.mainSection.title}
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
              {sector.mainSection.subtitle}
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {sector.features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center text-white mb-6">
                    {index === 0 && <Cable className="w-8 h-8" />}
                    {index === 1 && <Wifi className="w-8 h-8" />}
                    {index === 2 && <CheckCircle2 className="w-8 h-8" />}
                  </div>
                  <h3 className="text-xl font-bold text-[#0E243A] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 shadow-lg mb-16">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-6">{sector.deliverables.title}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-[#0E243A] mb-4">{sector.deliverables.network.title}</h4>
                  <ul className="space-y-3 text-gray-700">
                    {sector.deliverables.network.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#0E243A] mb-4">{sector.deliverables.audioCamera.title}</h4>
                  <ul className="space-y-3 text-gray-700">
                    {sector.deliverables.audioCamera.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-[#FF6A00] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">{sector.infoBox.title}</h3>
              <p className="text-gray-700 leading-relaxed">
                {sector.infoBox.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Relevante diensten - SEO internal linking */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              {sector.services.title}
            </h2>
            <p className="text-gray-600 text-center mb-12 leading-relaxed">
              {sector.services.description}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <LocaleLink
                to="/diensten/netwerkbekabeling"
                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Cable className="w-6 h-6 text-[#FF6A00]" />
                  <h3 className="text-xl font-bold text-[#0E243A] group-hover:text-[#FF6A00] transition-colors">
                    Netwerkbekabeling
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Cat6/Cat6A bekabeling voor werkplekken en infrastructuur
                </p>
              </LocaleLink>

              <LocaleLink
                to="/diensten/camera-bekabeling"
                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Camera className="w-6 h-6 text-[#FF6A00]" />
                  <h3 className="text-xl font-bold text-[#0E243A] group-hover:text-[#FF6A00] transition-colors">
                    Camera-bekabeling
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  PoE bekabeling voor IP-camera's en beveiliging
                </p>
              </LocaleLink>

              <LocaleLink
                to="/diensten/audiokabels"
                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Volume2 className="w-6 h-6 text-[#FF6A00]" />
                  <h3 className="text-xl font-bold text-[#0E243A] group-hover:text-[#FF6A00] transition-colors">
                    Audiokabels
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Gebalanceerde lijnen voor vaste audio-installaties
                </p>
              </LocaleLink>

            </div>
          </div>
        </div>
      </section>


      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              {sector.cta.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {sector.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LocaleLink
                to="/offerte"
                className="bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                {sector.cta.button1}
              </LocaleLink>
              <LocaleLink
                to="/contact"
                className="border-2 border-[#0E243A] text-[#0E243A] px-8 py-4 rounded-lg hover:bg-[#0E243A] hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                {sector.cta.button2}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
