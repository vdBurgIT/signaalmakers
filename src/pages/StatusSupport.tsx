import { ExternalLink, Info } from 'lucide-react';
import SEO from '../components/SEO';
import BackgroundOverlay from '../components/BackgroundOverlay';

export default function StatusSupport() {
  return (
    <>
      <SEO
        title="Status & Support - Contact voor bekabelingsvragen | Signaalmakers"
        description="Vragen over uw bekabeling? Neem contact op voor support bij databekabeling, patchkasten of signaallijnen."
        keywords="support bekabeling, contact databekabeling, hulp patchkast, bekabeling support"
        url="https://signaalmakers.nl/status-support"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Status & Support', item: 'https://signaalmakers.nl/status-support' }
        ]}
      />
      <div>
      <section className="bg-[#0E243A] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <BackgroundOverlay variant="mixed" density="light" color="blue" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Status & Support
            </h1>
            <p className="text-lg text-gray-300">
              Contact en ondersteuning voor bekabelingsprojecten
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="network" density="light" color="mixed" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12">
              <div className="flex gap-3">
                <Info className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Wij doen alleen bekabeling</h3>
                  <p className="text-blue-800">
                    Signaalmakers legt alleen kabels. Voor IT-beheer, configuratie en netwerkapparatuur moet u bij uw MSP of IT-partner zijn. Wij kunnen wel helpen met vragen over de door ons geïnstalleerde bekabeling.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#0E243A] mb-6">Contact voor bekabeling</h2>
              <p className="text-gray-600 mb-4">
                Voor vragen of problemen met de door Signaalmakers geïnstalleerde bekabeling (databekabeling, patchkasten, signaallijnen) kunt u direct contact met ons opnemen:
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-[#0E243A]">Telefonisch</p>
                    <p className="text-gray-600">Bel ons op +31 6 12345678</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-[#0E243A]">Via e-mail</p>
                    <p className="text-gray-600">Stuur een mail naar support@signaalmakers.nl</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-[#0E243A]">Via WhatsApp</p>
                    <p className="text-gray-600">App ons voor snelle vragen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
