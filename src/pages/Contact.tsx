import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import BackgroundOverlay from '../components/BackgroundOverlay';
import SEO from '../components/SEO';
import { useTranslation } from '../i18n';

export default function Contact() {
  const t = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    customerType: 'msp',
    subject: '',
    message: '',
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
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.ok) {
        setSubmitStatus({
          type: 'success',
          message: t.contact.form.successMessage,
        });
        // Reset form
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          address: '',
          customerType: 'msp',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || t.contact.form.errorMessage,
        });
      }
    } catch (error: unknown) {
      console.error('Contact form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: t.contact.form.errorMessageDetail,
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
        title={t.seo.contact.title}
        description={t.seo.contact.description}
        keywords={t.seo.contact.keywords}
        url="https://signaalmakers.nl/contact"
        hreflangPath="/contact"
        breadcrumbs={[
          { name: 'Home', item: 'https://signaalmakers.nl/' },
          { name: t.nav.contact, item: 'https://signaalmakers.nl/contact' }
        ]}
      />
      <div>
      <section className="bg-[#0E243A] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <BackgroundOverlay variant="network" density="light" color="blue" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.contact.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t.contact.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="mixed" density="light" color="mixed" />
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-gray-50 rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-[#0E243A] mb-6">{t.contact.form.title}</h2>

                  <form
                    onSubmit={handleSubmit}
                    name="contact"
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          {t.contact.form.nameRequired}
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
                          {t.contact.form.company}
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
                          {t.contact.form.emailRequired}
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
                          {t.contact.form.phone}
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
                        {t.contact.form.address}
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="customerType" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t.contact.form.customerType}
                      </label>
                      <select
                        id="customerType"
                        name="customerType"
                        required
                        value={formData.customerType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent"
                      >
                        <option value="msp">{t.contact.form.customerTypeMsp}</option>
                        <option value="zakelijk">{t.contact.form.customerTypeBusiness}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t.contact.form.subject}
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t.contact.form.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
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
                      {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
                    </button>
                  </form>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#0E243A] mb-4">{t.contact.details.title}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">{t.contact.details.address}</p>
                        <p className="text-gray-600">{t.contact.details.addressLine1}</p>
                        <p className="text-gray-600">{t.contact.details.addressLine2}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">{t.contact.details.phone}</p>
                        <a
                          href="tel:+31645251333"
                          onClick={(e) => {
                            if (window.innerWidth > 768) {
                              e.preventDefault();
                              navigator.clipboard.writeText('+31 6 45251333').then(() => {
                                alert(t.contact.details.phoneCopied);
                              }).catch(() => {
                                alert(t.contact.details.phoneAlert);
                              });
                            }
                          }}
                          className="text-gray-600 hover:text-[#FF6A00] cursor-pointer"
                        >
                          {t.contact.details.phoneNumber}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">{t.contact.details.email}</p>
                        <a href="mailto:info@signaalmakers.nl" className="text-gray-600 hover:text-[#FF6A00]">
                          {t.contact.details.emailAddress}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0E243A] text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">{t.contact.directContact.title}</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+31645251333"
                      onClick={(e) => {
                        // Op desktop: kopieer nummer naar clipboard
                        if (window.innerWidth > 768) {
                          e.preventDefault();
                          navigator.clipboard.writeText('+31 6 45251333').then(() => {
                            alert(t.contact.details.phoneCopiedDesktop);
                          }).catch(() => {
                            alert(t.contact.details.phoneAlert);
                          });
                        }
                        // Op mobiel: gewoon bellen (default gedrag)
                      }}
                      className="block bg-[#FF6A00] text-white px-6 py-3 rounded-lg hover:bg-[#E55F00] transition-colors font-semibold text-center cursor-pointer"
                    >
                      <Phone className="w-5 h-5 inline mr-2" />
                      {t.contact.directContact.callNow}
                    </a>
                    <a
                      href="https://wa.me/31645251333"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-center"
                    >
                      <MessageCircle className="w-5 h-5 inline mr-2" />
                      {t.contact.directContact.whatsappNow}
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#0E243A] mb-4">{t.contact.openingHours.title}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>{t.contact.openingHours.weekdays}</span>
                      <span className="font-semibold">{t.contact.openingHours.weekdaysTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t.contact.openingHours.saturday}</span>
                      <span className="font-semibold">{t.contact.openingHours.saturdayTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t.contact.openingHours.sunday}</span>
                      <span className="font-semibold">{t.contact.openingHours.sundayTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MSP/IT Disclaimer */}
            <div className="mt-12 bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-[#FF6A00] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#0E243A] mb-4">{t.contact.disclaimer.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.contact.disclaimer.paragraph1}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t.contact.disclaimer.paragraph2}
              </p>
            </div>

            {/* Google Maps Embed voor lokale SEO */}
            <div className="mt-12">
              <div className="bg-gray-50 rounded-lg p-2 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.100568048937!2d4.842009489723982!3d51.639683299244844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c699333cb7b2c3%3A0xb2c98ccc5b4f2d7!2sBredaseweg%20108A%2C%204902%20NS%20Oosterhout!5e0!3m2!1snl!2snl!4v1764708672074!5m2!1snl!2snl"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t.contact.map.title}
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="text-center text-gray-600 mt-4">
                <strong>{t.contact.map.serviceArea}</strong> {t.contact.map.serviceAreaName}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
