import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../components/SEO';
import { CheckCircle2, FileText, Clock, MapPin } from 'lucide-react';
import BackgroundOverlay from '../components/BackgroundOverlay';

export default function Offerte() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    projectType: 'netwerk',
    numLocations: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Map project type to readable format
    const projectTypeMap: Record<string, string> = {
      netwerk: 'Netwerkbekabeling',
      audio: 'Audiokabels',
      camera: 'Camera-bekabeling',
      patchkast: 'Patchkasten',
      certificeren: 'Meten & Certificeren',
    };

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          customerType: 'offerte',
          subject: 'Offerte-aanvraag',
          message: `Type project: ${projectTypeMap[formData.projectType] || formData.projectType}\nAantal locaties/datapunten: ${formData.numLocations || 'Niet opgegeven'}\n\nProjectomschrijving:\n${formData.description}`,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Bedankt voor uw offerte-aanvraag! We nemen zo snel mogelijk contact met u op.',
        });
        // Reset form
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          address: '',
          projectType: 'netwerk',
          numLocations: '',
          description: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Er is een fout opgetreden. Probeer het later opnieuw.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Er is een fout opgetreden bij het verzenden van uw aanvraag. Neem direct contact met ons op via info@signaalmakers.nl',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SEO
        title="Offerte aanvragen – Bekabeling voor infrastructuur | Signaalmakers"
        description="Vraag een offerte aan voor netwerk, audio of camera-bekabeling. Cat6/Cat6A, PoE, gebalanceerde lijnen—gecertificeerd opgeleverd. Landelijk werkzaam."
        keywords="offerte bekabeling, offerte infrastructuur, Cat6A offerte, netwerkbekabeling prijs, MSP bekabeling offerte"
        url="https://signaalmakers.nl/offerte"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Offerte', item: 'https://signaalmakers.nl/offerte' }
        ]}
      />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Vraag een offerte aan
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Netwerk, audio of camera-bekabeling nodig? Vul het formulier in en wij nemen binnen 24 uur contact op voor een vrijblijvende offerte.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="mixed" density="light" color="mixed" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Snelle reactie</h3>
                <p className="text-gray-600 leading-relaxed">
                  Binnen 24 uur nemen we contact op voor een vrijblijvende offerte
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Duidelijke offerte</h3>
                <p className="text-gray-600 leading-relaxed">
                  Transparante prijzen per traject, inclusief meten en certificeren
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Landelijk werkzaam</h3>
                <p className="text-gray-600 leading-relaxed">
                  Door heel Nederland – van Rotterdam tot Groningen
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-gray-50 rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-[#0E243A] mb-6">Offerte-aanvraag</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Naam *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                          Bedrijf
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Telefoon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                        Adres/Locatie project *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                        Type project *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent"
                      >
                        <option value="netwerk">Netwerkbekabeling (Cat6/Cat6A)</option>
                        <option value="audio">Audiokabels (gebalanceerde lijnen)</option>
                        <option value="camera">Camera-bekabeling (PoE)</option>
                        <option value="patchkast">Patchkasten</option>
                        <option value="certificeren">Meten & Certificeren</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="numLocations" className="block text-sm font-semibold text-gray-700 mb-2">
                        Aantal locaties/datapunten (indicatie)
                      </label>
                      <input
                        type="text"
                        id="numLocations"
                        name="numLocations"
                        value={formData.numLocations}
                        onChange={handleChange}
                        placeholder="Bijv. 20 datapunten, 5 camera-locaties"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                        Projectomschrijving *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        required
                        rows={6}
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Beschrijf het project: wat moet er gebeuren, welke ruimtes, eventuele specifieke eisen..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent resize-none"
                      />
                    </div>

                    {submitStatus.type && (
                      <div
                        className={`p-4 rounded-lg ${
                          submitStatus.type === 'success'
                            ? 'bg-green-50 text-green-800 border border-green-200'
                            : 'bg-red-50 text-red-800 border border-red-200'
                        }`}
                      >
                        {submitStatus.message}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Bezig met verzenden...' : 'Verstuur offerte-aanvraag'}
                    </button>
                  </form>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#0E243A] text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Wat te verwachten</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Reactie binnen 24 uur</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Vrijblijvende offerte op maat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Transparante prijzen per traject</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Meten & certificeren inbegrepen</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-[#FF6A00] rounded-lg p-6">
                  <h3 className="text-lg font-bold text-[#0E243A] mb-3">Wij doen alleen voorwerk</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Wij leggen bekabeling en leveren gecertificeerd op. <Link to="/blog/msp-bekabelingspartner" className="font-semibold text-[#FF6A00] hover:underline">MSP/IT-partners</Link> doen inregeling en beheer. Duidelijke scheiding, professioneel resultaat.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-[#0E243A] mb-3">Direct contact</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Telefoon:</strong> <a href="tel:+31645251333" className="text-[#FF6A00] hover:underline">+31 6 45251333</a></p>
                    <p><strong>E-mail:</strong> <a href="mailto:info@signaalmakers.nl" className="text-[#FF6A00] hover:underline">info@signaalmakers.nl</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
