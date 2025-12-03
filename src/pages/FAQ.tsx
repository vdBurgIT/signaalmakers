import { useState } from 'react';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackgroundOverlay from '../components/BackgroundOverlay';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = {
    algemeen: [
      {
        question: 'Doen jullie ook inregeling en apparatuur?',
        answer: 'Nee. Wij doen bekabeling en voorwerk: kabels trekken, afmonteren, labelen en certificeren. MSP/IT-partners doen de inregeling en het beheer van apparatuur. Zo is er een duidelijke scheiding tussen het voorwerk (wij) en de inregeling (MSP/IT).',
      },
      {
        question: 'Zijn jullie landelijk actief?',
        answer: 'Ja, wij werken door heel Nederland. Van serverruimtes en kantoren tot retail, magazijnen, onderwijs en zorg. Bekabeling voor infrastructuur: netwerk (Cat6/Cat6A), audio en camera.',
      },
      {
        question: 'Cat6 of Cat6A - wat is het verschil?',
        answer: 'Cat6A: 10 Gbps tot 100 meter (~500 MHz). Cat6: 10 Gbps tot ~55 meter (~250 MHz). Cat6A is toekomstbestendiger en beter beschermd tegen EMI/crosstalk. Voor professionele installaties adviseren we meestal Cat6A.',
      },
      {
        question: 'Hoe leveren jullie op?',
        answer: 'Gecertificeerd met meetrapporten, labels en schema\'s. Alles gedocumenteerd en traceerbaar - klaar voor beheer door jouw MSP/IT-partner. Een volledig opleverdossier met alle specificaties en metingen.',
      },
    ],
  };

  const allFaqs = [
    ...faqs.algemeen.map(f => ({ ...f, category: 'Bekabeling voor infrastructuur' })),
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
        title="FAQ – alles over bekabeling & oplevering | SIGNAALMAKERS"
        description="Antwoorden op Cat6/Cat6A, certificeren, rollen MSP/IT, landelijk actief."
        keywords="Cat6 Cat6A verschil, bekabeling certificeren, MSP IT rollen, landelijk bekabeling, infrastructuur bekabeling FAQ"
        url="https://signaalmakers.nl/faq"
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
                Veelgestelde vragen
              </h1>
              <p className="text-lg text-gray-300">
                SIGNAALMAKERS – Bekabeling voor infrastructuur door heel Nederland
              </p>
            </div>
          </div>
        </section>

        {/* Intro blok */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 leading-relaxed">
                Heb je vragen over bekabeling voor infrastructuur? Op deze pagina vind je antwoorden op de meest gestelde vragen
                over netwerk (Cat6/Cat6A), audiokabels, camera-bekabeling, patchkasten en certificeren. SIGNAALMAKERS werkt door
                heel Nederland als bekabelingspartner voor MSP's, IT-bedrijven en organisaties. Wij doen het voorwerk - MSP/IT doet
                inregeling en beheer.
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
                <h2 className="text-2xl font-bold mb-4">Staat je vraag er niet bij?</h2>
                <p className="text-gray-300 mb-6">
                  Neem gerust contact met ons op. We beantwoorden graag al je vragen.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-[#FF6A00] text-white px-8 py-3 rounded-lg hover:bg-[#E55F00] transition-colors font-semibold"
                >
                  Neem contact op
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
