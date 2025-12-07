import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Cable, Zap, CheckCircle2, Building2, Users } from 'lucide-react';
import BackgroundOverlay from '../components/BackgroundOverlay';
import { useTranslation } from '../i18n';

export default function OverOns() {
  const t = useTranslation();

  return (
    <>
      <SEO
        title={t.seo.about.title}
        description={t.seo.about.description}
        keywords={t.seo.about.keywords}
        url="https://signaalmakers.nl/over-ons"
        hreflangPath="/over-ons"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: t.nav.about, item: 'https://signaalmakers.nl/over-ons' }
        ]}
      />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#FF6A00] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t.about.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {t.about.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="mixed" density="light" color="mixed" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              {t.about.whoWeAre.title}
            </h2>

            <div className="text-lg text-gray-700 space-y-6 mb-16 leading-relaxed">
              <p>{t.about.whoWeAre.paragraph1}</p>
              <p>{t.about.whoWeAre.paragraph2}</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-gray-50 border-l-4 border-[#FF6A00] rounded-xl p-10 mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0E243A] mb-6">{t.about.whatWeDeliver.title}</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed"><strong><Link to="/diensten/netwerkbekabeling" style={{ fontWeight: 600 }}>{t.about.whatWeDeliver.network.split(' —')[0]}</Link></strong> — {t.about.whatWeDeliver.network.split(' —')[1]}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed"><strong><Link to="/diensten/audiokabels" style={{ fontWeight: 600 }}>{t.about.whatWeDeliver.audio.split(' —')[0]}</Link></strong> — {t.about.whatWeDeliver.audio.split(' —')[1]}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed"><strong><Link to="/diensten/camera-bekabeling" style={{ fontWeight: 600 }}>{t.about.whatWeDeliver.camera.split(' —')[0]}</Link></strong> — {t.about.whatWeDeliver.camera.split(' —')[1]}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed"><strong><Link to="/diensten/patchkasten" style={{ fontWeight: 600 }}>{t.about.whatWeDeliver.patchCabinets.split(' —')[0]}</Link></strong> — {t.about.whatWeDeliver.patchCabinets.split(' —')[1]}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed"><strong><Link to="/diensten/certificeren" style={{ fontWeight: 600 }}>{t.about.whatWeDeliver.certification.split(' —')[0]}</Link></strong> — {t.about.whatWeDeliver.certification.split(' —')[1]}</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-10 mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0E243A] mb-6">{t.about.whatWeDoNot.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t.about.whatWeDoNot.paragraph}
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">✗</span>
                  <span className="leading-relaxed">{t.about.whatWeDoNot.item1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">✗</span>
                  <span className="leading-relaxed">{t.about.whatWeDoNot.item2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">✗</span>
                  <span className="leading-relaxed">{t.about.whatWeDoNot.item3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">✗</span>
                  <span className="leading-relaxed">{t.about.whatWeDoNot.item4}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-12 text-center">
              {t.about.standsFor.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Cable,
                  title: t.about.standsFor.professional.title,
                  desc: t.about.standsFor.professional.desc,
                },
                {
                  icon: CheckCircle2,
                  title: t.about.standsFor.clear.title,
                  desc: t.about.standsFor.clear.desc,
                },
                {
                  icon: Users,
                  title: t.about.standsFor.nationwide.title,
                  desc: t.about.standsFor.nationwide.desc,
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0E243A] mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              {t.about.mspPartner.title}
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
              {t.about.mspPartner.subtitle}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">{t.about.mspPartner.weEnsure.title}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>{t.about.mspPartner.weEnsure.item1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>{t.about.mspPartner.weEnsure.item2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>{t.about.mspPartner.weEnsure.item3}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>{t.about.mspPartner.weEnsure.item4}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-gray-50 rounded-2xl p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">{t.about.mspPartner.result.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t.about.mspPartner.result.paragraph}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0E243A] to-[#1a3a5a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.about.cta.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {t.about.cta.subtitle}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              {t.about.cta.button}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
