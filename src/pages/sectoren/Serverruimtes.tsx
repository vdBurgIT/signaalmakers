import { LocaleLink } from '../../components/LocaleLink';
import SEO from '../../components/SEO';
import { Server, CheckCircle2, Cable, Zap } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';
import { useTranslation } from '../../i18n';

export default function Serverruimtes() {
  const t = useTranslation();
  const sector = t.sectors.serverRooms;

  return (
    <>
      <SEO
        title={sector.seo.title}
        description={sector.seo.description}
        keywords={sector.seo.keywords}
        url="https://signaalmakers.nl/sectoren/serverruimtes"
        hreflangPath="/sectoren/serverruimtes"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: t.nav.sectors, item: 'https://signaalmakers.nl/sectoren' },
          { name: sector.shortTitle, item: 'https://signaalmakers.nl/sectoren/serverruimtes' }
        ]}
      />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 mx-auto shadow-2xl">
              <Server className="w-10 h-10" />
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
        <BackgroundOverlay variant="network" density="light" color="blue" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              {sector.mainSection.title}
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
              {sector.mainSection.subtitle.split(/(<LocaleLink[^>]*>.*?<\/LocaleLink>)/g).map((part, i) => {
                if (part.includes('LocaleLink')) return null;
                return part;
              })}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {sector.features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center text-white mb-6">
                    {index === 0 ? <Cable className="w-8 h-8" /> : <Server className="w-8 h-8" />}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0E243A] mb-4">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-[#FF6A00] rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">{sector.infoBox.title}</h3>
              <p className="text-gray-700 leading-relaxed">
                {sector.infoBox.text}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-6">{sector.deliverables.title}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-[#0E243A] mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#FF6A00]" />
                    {sector.deliverables.network.title}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {sector.deliverables.network.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#0E243A] mb-3 flex items-center gap-2">
                    <Cable className="w-5 h-5 text-[#FF6A00]" />
                    {sector.deliverables.patchCabinets.title}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {sector.deliverables.patchCabinets.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
