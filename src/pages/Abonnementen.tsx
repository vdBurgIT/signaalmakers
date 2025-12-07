import { Link } from 'react-router-dom';
import { CheckCircle2, Zap, Clock, TrendingUp } from 'lucide-react';
import BackgroundOverlay from '../components/BackgroundOverlay';
import SEO from '../components/SEO';
import { useTranslation } from '../i18n';

export default function Abonnementen() {
  const t = useTranslation();

  return (
    <>
      <SEO
        title={t.seo.subscriptions.title}
        description={t.seo.subscriptions.description}
        keywords={t.seo.subscriptions.keywords}
        url="https://signaalmakers.nl/abonnementen"
        hreflangPath="/abonnementen"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: t.nav.subscriptions, item: 'https://signaalmakers.nl/abonnementen' }
        ]}
      />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.subscriptions.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {t.subscriptions.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
        <BackgroundOverlay variant="network" density="medium" color="blue" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              {t.subscriptions.benefits.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
            {[
              { icon: Clock, title: t.subscriptions.benefits.alwaysSpace.title, desc: t.subscriptions.benefits.alwaysSpace.desc },
              { icon: Zap, title: t.subscriptions.benefits.priority.title, desc: t.subscriptions.benefits.priority.desc },
              { icon: TrendingUp, title: t.subscriptions.benefits.discounts.title, desc: t.subscriptions.benefits.discounts.desc },
              { icon: CheckCircle2, title: t.subscriptions.benefits.flexibility.title, desc: t.subscriptions.benefits.flexibility.desc },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
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

      <section className="py-20 md:py-28 bg-white" id="pakketten">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] text-center mb-16">
            {t.subscriptions.packages.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Essential */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300" id="essential">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-2">{t.subscriptions.packages.essential.name}</h3>
              <div className="text-4xl font-bold text-[#0E243A] mb-6">
                {t.subscriptions.packages.essential.price}<span className="text-lg text-gray-600">{t.subscriptions.packages.perMonth}</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#0E243A]">{t.subscriptions.packages.essential.guaranteedDays}</span>
                    <p className="text-sm text-gray-600">{t.subscriptions.packages.essential.guaranteedDaysDesc}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#0E243A]">{t.subscriptions.packages.essential.leadTime}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0E243A]">{t.subscriptions.packages.essential.hourDiscount}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0E243A]">{t.subscriptions.packages.essential.materialDiscount}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0E243A]">{t.subscriptions.packages.essential.travelCosts}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0E243A]">{t.subscriptions.packages.essential.urgentFee}</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block text-center bg-[#FF6A00] text-white px-8 py-3 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold"
              >
                {t.subscriptions.packages.signUp}
              </Link>
            </div>

            {/* Priority */}
            <div className="bg-gradient-to-br from-[#0E243A] to-[#1a3a5a] text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform scale-105 border-2 border-[#FF6A00] relative" id="priority">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FF6A00] text-white px-4 py-1 rounded-full text-sm font-semibold">
                {t.subscriptions.packages.popular}
              </div>
              <h3 className="text-2xl font-bold mb-2">{t.subscriptions.packages.priority.name}</h3>
              <div className="text-4xl font-bold mb-6">
                {t.subscriptions.packages.priority.price}<span className="text-lg text-gray-300">{t.subscriptions.packages.perMonth}</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">{t.subscriptions.packages.priority.guaranteedDays}</span>
                    <p className="text-sm text-gray-300">{t.subscriptions.packages.priority.guaranteedDaysDesc}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">{t.subscriptions.packages.priority.leadTime}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>{t.subscriptions.packages.priority.hourDiscount}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>{t.subscriptions.packages.priority.materialDiscount}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>{t.subscriptions.packages.priority.travelDiscount}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span>{t.subscriptions.packages.priority.urgentFee}</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block text-center bg-[#FF6A00] text-white px-8 py-3 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold"
              >
                {t.subscriptions.packages.signUp}
              </Link>
            </div>

            {/* Express */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300" id="express">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-2">{t.subscriptions.packages.express.name}</h3>
              <div className="text-4xl font-bold text-[#0E243A] mb-6">
                {t.subscriptions.packages.express.price}<span className="text-lg text-gray-600">{t.subscriptions.packages.perMonth}</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#0E243A]">{t.subscriptions.packages.express.guaranteedDays}</span>
                    <p className="text-sm text-gray-600">{t.subscriptions.packages.express.guaranteedDaysDesc}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#0E243A]">{t.subscriptions.packages.express.leadTime}</span>
                    <p className="text-sm text-gray-600">{t.subscriptions.packages.express.leadTimeDesc}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0E243A]">{t.subscriptions.packages.express.hourDiscount}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0E243A]">{t.subscriptions.packages.express.materialDiscount}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0E243A]">{t.subscriptions.packages.express.travelDiscount}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0E243A]">{t.subscriptions.packages.express.urgentFee}</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block text-center bg-[#FF6A00] text-white px-8 py-3 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold"
              >
                {t.subscriptions.packages.signUp}
              </Link>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-blue-50 rounded-2xl p-8 border-l-4 border-[#FF6A00]">
            <h3 className="text-xl font-bold text-[#0E243A] mb-4">{t.subscriptions.packages.extraDays.title}</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {t.subscriptions.packages.extraDays.description}
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span><strong>{t.subscriptions.packages.essential.name}:</strong> {t.subscriptions.packages.extraDays.essentialFee}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span><strong>{t.subscriptions.packages.priority.name}:</strong> {t.subscriptions.packages.extraDays.priorityFee}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                <span><strong>{t.subscriptions.packages.express.name}:</strong> {t.subscriptions.packages.extraDays.expressFee}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0E243A] to-[#1a3a5a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.subscriptions.targetAudience.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {t.subscriptions.targetAudience.description}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              {t.subscriptions.targetAudience.button}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] text-center mb-16">
              {t.subscriptions.faq.title}
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: t.subscriptions.faq.q1,
                  a: t.subscriptions.faq.a1
                },
                {
                  q: t.subscriptions.faq.q2,
                  a: t.subscriptions.faq.a2
                },
                {
                  q: t.subscriptions.faq.q3,
                  a: t.subscriptions.faq.a3
                },
                {
                  q: t.subscriptions.faq.q4,
                  a: t.subscriptions.faq.a4
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-[#0E243A] mb-3">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
