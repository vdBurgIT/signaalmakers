import { LocaleLink } from '../components/LocaleLink';
import { useState } from 'react';
import SEO from '../components/SEO';
import { CheckCircle2, FileText, Clock, MapPin } from 'lucide-react';
import BackgroundOverlay from '../components/BackgroundOverlay';
import { useTranslation } from '../i18n';

export default function Offerte() {
  const t = useTranslation();

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

    // Map project type to readable format using translations
    const projectTypeMap: Record<string, string> = {
      netwerk: t.offerte.form.projectTypes.network,
      audio: t.offerte.form.projectTypes.audio,
      camera: t.offerte.form.projectTypes.camera,
      patchkast: t.offerte.form.projectTypes.patchCabinet,
      certificeren: t.offerte.form.projectTypes.certification,
    };

    try {
      const endpoint = new URL(
        'api/contact.php',
        window.location.origin + import.meta.env.BASE_URL
      ).toString();

      const response = await fetch(endpoint, {
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
          customerType: t.offerte.form.submission.customerType,
          subject: t.offerte.form.submission.subject,
          message: `${t.offerte.form.submission.messageTemplate.projectType}: ${projectTypeMap[formData.projectType] || formData.projectType}\n${t.offerte.form.submission.messageTemplate.numLocations}: ${formData.numLocations || t.offerte.form.submission.messageTemplate.notSpecified}\n\n${t.offerte.form.submission.messageTemplate.description}:\n${formData.description}`,
        }),
      });

      const result = await response.json();

      if (result.ok) {
        setSubmitStatus({
          type: 'success',
          message: t.offerte.form.messages.success,
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
          message: result.error || t.offerte.form.messages.errorGeneric,
        });
      }
    } catch (error: unknown) {

      setSubmitStatus({
        type: 'error',
        message: t.offerte.form.messages.errorNetwork,
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
        title={t.offerte.seo.title}
        description={t.offerte.seo.description}
        keywords={t.offerte.seo.keywords}
        url="https://signaalmakers.nl/offerte"
        hreflangPath="/offerte"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: 'Offerte', item: 'https://signaalmakers.nl/offerte' }
        ]}
      />

      <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.offerte.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {t.offerte.hero.subtitle}
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
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">{t.offerte.benefits.fast.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.offerte.benefits.fast.description}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">{t.offerte.benefits.clear.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.offerte.benefits.clear.description}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">{t.offerte.benefits.nationwide.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.offerte.benefits.nationwide.description}
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-gray-50 rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-[#0E243A] mb-6">{t.offerte.form.title}</h2>

                  <form
                    onSubmit={handleSubmit}
                    name="offerte"
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          {t.offerte.form.labels.name}
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
                          {t.offerte.form.labels.company}
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
                          {t.offerte.form.labels.email}
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
                          {t.offerte.form.labels.phone}
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
                        {t.offerte.form.labels.address}
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
                        {t.offerte.form.labels.projectType}
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent"
                      >
                        <option value="netwerk">{t.offerte.form.projectTypes.network}</option>
                        <option value="audio">{t.offerte.form.projectTypes.audio}</option>
                        <option value="camera">{t.offerte.form.projectTypes.camera}</option>
                        <option value="patchkast">{t.offerte.form.projectTypes.patchCabinet}</option>
                        <option value="certificeren">{t.offerte.form.projectTypes.certification}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="numLocations" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t.offerte.form.labels.numLocations}
                      </label>
                      <input
                        type="text"
                        id="numLocations"
                        name="numLocations"
                        value={formData.numLocations}
                        onChange={handleChange}
                        placeholder={t.offerte.form.placeholders.numLocations}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t.offerte.form.labels.description}
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        required
                        rows={6}
                        value={formData.description}
                        onChange={handleChange}
                        placeholder={t.offerte.form.placeholders.description}
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
                      {isSubmitting ? t.offerte.form.button.submitting : t.offerte.form.button.submit}
                    </button>
                  </form>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#0E243A] text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">{t.offerte.sidebar.whatToExpect.title}</h3>
                  <ul className="space-y-3">
                    {t.offerte.sidebar.whatToExpect.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-[#FF6A00] rounded-lg p-6">
                  <h3 className="text-lg font-bold text-[#0E243A] mb-3">{t.offerte.sidebar.infrastructure.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {t.offerte.sidebar.infrastructure.description.split(t.offerte.sidebar.infrastructure.linkText)[0]}
                    <LocaleLink to="/blog/msp-bekabelingspartner" className="font-semibold text-[#FF6A00] hover:underline">{t.offerte.sidebar.infrastructure.linkText}</LocaleLink>
                    {t.offerte.sidebar.infrastructure.description.split(t.offerte.sidebar.infrastructure.linkText)[1]}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-[#0E243A] mb-3">{t.offerte.sidebar.directContact.title}</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>{t.offerte.sidebar.directContact.phone}:</strong> <a href="tel:+31645251333" className="text-[#FF6A00] hover:underline">+31 6 45251333</a></p>
                    <p><strong>{t.offerte.sidebar.directContact.email}:</strong> <a href="mailto:info@signaalmakers.nl" className="text-[#FF6A00] hover:underline">info@signaalmakers.nl</a></p>
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
