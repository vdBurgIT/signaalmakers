import { useState } from 'react';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LocaleLink } from '../components/LocaleLink';
import BackgroundOverlay from '../components/BackgroundOverlay';
import { useTranslation } from '../i18n';

export default function FAQ() {
  const t = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = {
    algemeen: [
      {
        question: t.faq.common.doYouDoConfiguration.question,
        answer: t.faq.common.doYouDoConfiguration.answer,
      },
      {
        question: t.faq.common.nationwide.question,
        answer: t.faq.common.nationwide.answer,
      },
      {
        question: t.faq.common.cat6Difference.question,
        answer: t.faq.common.cat6Difference.answer,
      },
      {
        question: t.faq.common.delivery.question,
        answer: t.faq.common.delivery.answer,
      },
    ],
  };

  const allFaqs = [
    ...faqs.algemeen.map(f => ({ ...f, category: t.faq.categoryLabel })),
  ];

  // JSON-LD Schema voor FAQ en Service
  const faqSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": allFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "Service",
        "name": "Netwerkbekabeling en Databekabeling",
        "provider": {
          "@type": "Organization",
          "name": "SIGNAALMAKERS",
          "url": "https://signaalmakers.nl",
          "areaServed": [
            {
              "@type": "Country",
              "name": "Nederland"
            },
            {
              "@type": "State",
              "name": "Zuid-Holland"
            },
            {
              "@type": "State",
              "name": "Noord-Brabant"
            },
            {
              "@type": "State",
              "name": "Utrecht"
            },
            {
              "@type": "State",
              "name": "Gelderland"
            },
            {
              "@type": "City",
              "name": "Rotterdam"
            },
            {
              "@type": "City",
              "name": "Den Haag"
            },
            {
              "@type": "City",
              "name": "Utrecht"
            },
            {
              "@type": "City",
              "name": "Eindhoven"
            },
            {
              "@type": "City",
              "name": "Arnhem"
            },
            {
              "@type": "City",
              "name": "Nijmegen"
            }
          ]
        },
        "description": "Professionele netwerkbekabeling en databekabeling voor woningen, kantoren en bedrijven in heel Nederland. Wij leggen UTP-bekabeling, ethernetbekabeling en bekabelde netwerken aan en werken als bekabelingspartner voor MSP-, IT- en ICT-bedrijven.",
        "serviceType": [
          "Netwerkbekabeling",
          "Databekabeling",
          "UTP-bekabeling",
          "Ethernet-bekabeling",
          "Bekabeld netwerk installatie",
          "Patchkast installatie",
          "Serverkast bekabeling"
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title={t.seo.faq.title}
        description={t.seo.faq.description}
        keywords={t.seo.faq.keywords}
        url="https://signaalmakers.nl/faq"
        hreflangPath="/faq"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'FAQ', item: 'https://signaalmakers.nl/faq' }
        ]}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <div>
        <section className="bg-[#0E243A] text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
            <BackgroundOverlay variant="mixed" density="light" color="blue" />
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t.faq.title}
              </h1>
              <p className="text-lg text-gray-300">
                {t.faq.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Intro blok */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 leading-relaxed">
                {t.faq.intro}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white relative overflow-hidden">
          <BackgroundOverlay variant="network" density="light" color="grey" />
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {allFaqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-1 pr-4">
                        <div className="text-sm font-semibold text-[#FF6A00] mb-1">{faq.category}</div>
                        <div className="font-semibold text-lg text-[#0E243A]">{faq.question}</div>
                      </div>
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 flex-shrink-0 text-[#FF6A00]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 flex-shrink-0 text-[#FF6A00]" />
                      )}
                    </button>
                    {openIndex === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-[#0E243A] text-white rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">{t.faq.ctaTitle}</h2>
                <p className="text-gray-300 mb-6">
                  {t.faq.ctaText}
                </p>
                <LocaleLink
                  to="/contact"
                  className="inline-block bg-[#FF6A00] text-white px-8 py-3 rounded-lg hover:bg-[#E55F00] transition-colors font-semibold"
                >
                  {t.faq.ctaButton}
                </LocaleLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
