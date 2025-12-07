import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../../components/SEO';
import StructuredData from '../../components/StructuredData';
import { Cable, CheckCircle2, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';
import { useI18n } from '../../i18n/I18nContext';

export default function Netwerkbekabeling() {
  const { t, locale } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = t('services.network.faqs.items');

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

  const baseUrl = locale === 'nl-NL' ? 'https://signaalmakers.nl' : locale === 'nl-BE' ? 'https://signaalmakers.nl/nl-be' : 'https://signaalmakers.nl/en';

  return (
    <>
      <SEO
        title={t('services.network.seo.title')}
        description={t('services.network.seo.description')}
        keywords={t('services.network.seo.keywords')}
        url={`${baseUrl}/diensten/netwerkbekabeling`}
        breadcrumbs={[
          { name: t('nav.home'), item: `${baseUrl}/` },
          { name: t('nav.services'), item: `${baseUrl}/diensten` },
          { name: t('services.network.shortTitle'), item: `${baseUrl}/diensten/netwerkbekabeling` }
        ]}
      />
      <StructuredData type="LocalBusiness" />
      <StructuredData type="FAQPage" data={faqSchema} />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('services.network.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {t('services.network.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="data" density="medium" color="grey" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              {t('services.network.whatWeDo.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              {t('services.network.whatWeDo.intro')} <Link to="/diensten/patchkasten" style={{ fontWeight: 600 }}>{t('services.patchCabinets.title').toLowerCase()}</Link>. <Link to="/diensten/certificeren" style={{ fontWeight: 600 }}>{t('services.certification.heroTitle')}</Link>.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 rounded-xl p-8">
                <Cable className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">{t('services.network.whatWeDo.deliverables.title')}</h3>
                <ul className="space-y-3 text-gray-700">
                  {t('services.network.whatWeDo.deliverables.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <FileText className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">{t('services.network.whatWeDo.forWho.title')}</h3>
                <ul className="space-y-3 text-gray-700">
                  {t('services.network.whatWeDo.forWho.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>{index === 0 ? <><Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP's</Link> die monteurs en betrouwbare bekabeling nodig hebben</> : item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#FF6A00] rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">{t('services.network.whatWeDo.cat6Info.title')}</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t('services.network.whatWeDo.cat6Info.intro')}
              </p>
              <ul className="space-y-2 text-gray-700">
                {t('services.network.whatWeDo.cat6Info.items').map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              {t('services.network.whyUs.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
              {t('services.network.whyUs.subtitle')} <Link to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP</Link>.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {t('services.network.whyUs.items').map((item: { title: string; description: string }, index: number) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-[#0E243A] mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-12 text-center">
              {t('services.network.faqs.title')}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq: { question: string; answer: string }, index: number) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
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

      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0E243A] to-[#1a3a5a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('services.network.cta.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {t('services.network.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/abonnementen"
                className="bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t('services.network.cta.button1')}
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0E243A] transition-all duration-300 font-semibold text-lg"
              >
                {t('services.network.cta.button2')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
