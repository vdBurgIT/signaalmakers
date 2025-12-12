import SEO from '../../components/SEO';
import BackgroundOverlay from '../../components/BackgroundOverlay';
import { LocaleLink } from '../../components/LocaleLink';
import { useTranslation } from '../../i18n';
import { CheckCircle2, XCircle, Network, FileText, Users2, TrendingUp, Shield } from 'lucide-react';

export default function MSP() {
  const t = useTranslation();
  const sector = t.sectors.msp;
  const baseUrl = 'https://signaalmakers.nl';

  return (
    <>
      <SEO
        title={sector.seo.title}
        description={sector.seo.description}
        keywords={sector.seo.keywords}
        url={`${baseUrl}/sectoren/msp`}
        hreflangPath="/sectoren/msp"
        breadcrumbs={[
          { name: 'Home', item: `${baseUrl}/` },
          { name: 'Sectoren', item: `${baseUrl}/sectoren` },
          { name: 'MSP', item: `${baseUrl}/sectoren/msp` }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32 relative overflow-hidden">
        <BackgroundOverlay variant="dots" density="medium" color="white" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-[#FF6A00] rounded-full text-sm font-semibold">
              {sector.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {sector.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {sector.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <LocaleLink
                to="/offerte"
                className="bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-colors font-semibold inline-flex items-center gap-2"
              >
                {sector.hero.cta}
              </LocaleLink>
              <LocaleLink
                to="/contact"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors font-semibold"
              >
                {sector.hero.ctaSecondary}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="mixed" density="light" color="mixed" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              {sector.intro.paragraphs.map((paragraph, index) => (
                <p key={index} className={index === 2 ? "font-semibold text-[#0E243A]" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
        <BackgroundOverlay variant="grid" density="light" color="dark" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-12 text-center">
              {sector.problem.title}
            </h2>

            <div className="bg-white rounded-xl p-8 md:p-10 shadow-lg">
              <ul className="space-y-4">
                {sector.problem.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="dots" density="light" color="dark" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
                {sector.whatWeDo.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                {sector.whatWeDo.intro}
              </p>
            </div>

            <div className="space-y-8">
              {sector.whatWeDo.sections.map((section, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-[#0E243A] mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do NOT Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 relative overflow-hidden">
        <BackgroundOverlay variant="grid" density="light" color="dark" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <XCircle className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A]">
                  {sector.whatWeDoNot.title}
                </h2>
              </div>
              <p className="text-lg text-gray-700 font-semibold">
                {sector.whatWeDoNot.intro}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 md:p-10 shadow-lg mb-8">
              <ul className="space-y-4">
                {sector.whatWeDoNot.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#0E243A] to-[#1a3a5a] rounded-xl p-8 md:p-10 text-white shadow-xl">
              <p className="text-lg leading-relaxed text-center">
                {sector.whatWeDoNot.conclusion}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="mixed" density="light" color="mixed" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
                {sector.benefits.title}
              </h2>
              <p className="text-xl text-gray-700 font-semibold">
                {sector.benefits.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {sector.benefits.items.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-lg flex items-center justify-center flex-shrink-0">
                      {index === 0 && <Shield className="w-6 h-6 text-white" />}
                      {index === 1 && <Users2 className="w-6 h-6 text-white" />}
                      {index === 2 && <TrendingUp className="w-6 h-6 text-white" />}
                      {index === 3 && <Network className="w-6 h-6 text-white" />}
                      {index === 4 && <FileText className="w-6 h-6 text-white" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0E243A] mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* White Label Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white relative overflow-hidden">
        <BackgroundOverlay variant="dots" density="medium" color="white" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Users2 className="w-16 h-16 text-[#FF6A00] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {sector.whiteLabel.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {sector.whiteLabel.description}
            </p>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
        <BackgroundOverlay variant="mixed" density="light" color="mixed" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-12 text-center">
              {sector.summary.title}
            </h2>

            <div className="bg-white rounded-xl p-8 md:p-10 shadow-lg mb-12">
              <ul className="space-y-4">
                {sector.summary.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#0E243A] to-[#1a3a5a] rounded-xl p-10 md:p-12 text-white text-center shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                {sector.summary.cta.title}
              </h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                {sector.summary.cta.description}
              </p>
              <LocaleLink
                to="/offerte"
                className="inline-block bg-[#FF6A00] text-white px-10 py-4 rounded-lg hover:bg-[#E55F00] transition-colors font-semibold text-lg"
              >
                {sector.summary.cta.button}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
