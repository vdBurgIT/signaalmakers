import { LocaleLink } from '../../components/LocaleLink';
import { useState } from 'react';
import SEO from '../../components/SEO';
import StructuredData from '../../components/StructuredData';
import { FileCheck, CheckCircle2, ClipboardList, BarChart3, ChevronDown, ChevronUp } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';
import { useI18n } from '../../i18n/I18nContext';

export default function Certificeren() {
  const { t, locale } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = t.services.certification.faqs.items;
  const baseUrl = locale === 'nl-NL' ? 'https://signaalmakers.nl' : locale === 'nl-BE' ? 'https://signaalmakers.nl/nl-be' : 'https://signaalmakers.nl/en';

  const faqSchema = {
    mainEntity: faqs.map((faq: { question: string; answer: string }) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <SEO
        title={t.services.certification.seo.title}
        description={t.services.certification.seo.description}
        keywords={t.services.certification.seo.keywords}
        url={`${baseUrl}/diensten/certificeren`}
        hreflangPath="/diensten/certificeren"
        breadcrumbs={[
          { name: t.nav.home, item: `${baseUrl}/` },
          { name: t.nav.services, item: `${baseUrl}/diensten` },
          { name: t.services.certification.shortTitle, item: `${baseUrl}/diensten/certificeren` }
        ]}
      />
      <StructuredData type="LocalBusiness" />
      <StructuredData type="FAQPage" data={faqSchema} />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.services.certification.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {t.services.certification.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="data" density="medium" color="grey" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              {t.services.certification.whatYouGet.title}
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              {t.services.certification.whatYouGet.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 rounded-xl p-8">
                <BarChart3 className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">{t.services.certification.whatYouGet.testing.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {t.services.certification.whatYouGet.testing.description}
                </p>
                <ul className="space-y-2 text-gray-700">
                  {(t.services.certification.whatYouGet.testing.items as string[]).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <ClipboardList className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">{t.services.certification.whatYouGet.labeling.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {t.services.certification.whatYouGet.labeling.description}
                </p>
                <ul className="space-y-2 text-gray-700">
                  {(t.services.certification.whatYouGet.labeling.items as string[]).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 md:col-span-2">
                <FileCheck className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">{t.services.certification.whatYouGet.deliverables.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {t.services.certification.whatYouGet.deliverables.description}
                </p>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  {(t.services.certification.whatYouGet.deliverables.items as string[]).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              {t.services.certification.why.title}
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
              {t.services.certification.why.description}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {(t.services.certification.why.benefits as Array<{ title: string; desc: string }>).map((item: { title: string; desc: string }, index: number) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-[#0E243A] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-[#FF6A00] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">{t.services.certification.standard.title}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.services.certification.standard.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-12 text-center">
              {t.services.certification.faqs.title}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq: { question: string; answer: string }, index: number) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-[#0E243A] pr-8">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#FF6A00] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#FF6A00] flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Relevante sectoren - SEO internal linking */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              {t.services.certification.sectors.title}
            </h2>
            <p className="text-gray-600 text-center mb-12 leading-relaxed">
              {t.services.certification.sectors.description}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <LocaleLink
                to="/sectoren/kantoren"
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="w-6 h-6 text-[#FF6A00]" />
                  <h3 className="text-xl font-bold text-[#0E243A] group-hover:text-[#FF6A00] transition-colors">
                    Kantoren
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Cat6/Cat6A bekabeling voor moderne kantooromgevingen
                </p>
              </LocaleLink>

              <LocaleLink
                to="/sectoren/retail"
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <ShoppingBag className="w-6 h-6 text-[#FF6A00]" />
                  <h3 className="text-xl font-bold text-[#0E243A] group-hover:text-[#FF6A00] transition-colors">
                    Retail & Horeca
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Bekabeling voor kassasystemen, wifi en camera's
                </p>
              </LocaleLink>

              <LocaleLink
                to="/sectoren/serverruimtes"
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Server className="w-6 h-6 text-[#FF6A00]" />
                  <h3 className="text-xl font-bold text-[#0E243A] group-hover:text-[#FF6A00] transition-colors">
                    Serverruimtes
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Structured cabling voor datacenters en serverruimtes
                </p>
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0E243A] to-[#1a3a5a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.services.certification.cta.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {t.services.certification.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LocaleLink
                to="/abonnementen"
                className="bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t.services.certification.cta.button1}
              </LocaleLink>
              <LocaleLink
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0E243A] transition-all duration-300 font-semibold text-lg"
              >
                {t.services.certification.cta.button2}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
