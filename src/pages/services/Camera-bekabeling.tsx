import { LocaleLink } from '../../components/LocaleLink';
import { useState } from 'react';
import SEO from '../../components/SEO';
import StructuredData from '../../components/StructuredData';
import { Camera, Cable, Zap, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';
import { useI18n } from '../../i18n/I18nContext';

export default function CameraBekaeling() {
  const { t, locale } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = t.services.camera.faqs.items;
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
        title={t.services.camera.seo.title}
        description={t.services.camera.seo.description}
        keywords={t.services.camera.seo.keywords}
        url={`${baseUrl}/diensten/camera-bekabeling`}
        hreflangPath="/diensten/camera-bekabeling"
        breadcrumbs={[
          { name: t.nav.home, item: `${baseUrl}/` },
          { name: t.nav.services, item: `${baseUrl}/diensten` },
          { name: t.services.camera.shortTitle, item: `${baseUrl}/diensten/camera-bekabeling` }
        ]}
      />
      <StructuredData type="LocalBusiness" />
      <StructuredData type="FAQPage" data={faqSchema} />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.services.camera.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {t.services.camera.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="data" density="medium" color="grey" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6">
              {t.services.camera.whatWeDo.title}
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              {t.services.camera.whatWeDo.intro} <LocaleLink to="/diensten/patchkasten" style={{ fontWeight: 600 }}>{t.services.patchCabinets.title.toLowerCase()}</LocaleLink>. <LocaleLink to="/diensten/certificeren" style={{ fontWeight: 600 }}>{t.services.certification.heroTitle}</LocaleLink>.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 rounded-xl p-8">
                <Camera className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">{t.services.camera.whatWeDo.deliverables.title}</h3>
                <ul className="space-y-3 text-gray-700">
                  {(t.services.camera.whatWeDo.deliverables.items as string[]).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <Cable className="w-12 h-12 text-[#FF6A00] mb-6" />
                <h3 className="text-2xl font-bold text-[#0E243A] mb-4">{t.services.camera.whatWeDo.forWho.title}</h3>
                <ul className="space-y-3 text-gray-700">
                  {(t.services.camera.whatWeDo.forWho.items as string[]).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>{index === 0 && locale === 'nl-NL' ? <><LocaleLink to="/blog/msp-bekabelingspartner" style={{ fontWeight: 600 }}>MSP's</LocaleLink> en IT-bedrijven voor camera-installaties</> : item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#FF6A00] rounded-xl p-8 mb-16">
              <div className="flex gap-4 items-start">
                <Zap className="w-8 h-8 text-[#FF6A00] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#0E243A] mb-2">{t.services.camera.poeInfo.title}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t.services.camera.poeInfo.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              {t.services.camera.whyUs.title}
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
              {t.services.camera.whyUs.subtitle}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {(t.services.camera.whyUs.benefits as Array<{ title: string; desc: string }>).map((item: { title: string; desc: string }, index: number) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              {t.services.camera.partnership.title}
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
              {t.services.camera.partnership.subtitle}
            </p>

            <div className="bg-blue-50 border-l-4 border-[#FF6A00] rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#0E243A] mb-4">{t.services.camera.partnership.disclaimer.title}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.services.camera.partnership.disclaimer.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-12 text-center">
              {t.services.camera.faqs.title}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq: { question: string; answer: string }, index: number) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
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
              {t.services.camera.cta.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {t.services.camera.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LocaleLink
                to="/abonnementen"
                className="bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t.services.camera.cta.button1}
              </LocaleLink>
              <LocaleLink
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0E243A] transition-all duration-300 font-semibold text-lg"
              >
                {t.services.camera.cta.button2}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
