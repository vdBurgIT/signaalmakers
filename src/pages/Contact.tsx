import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import BackgroundOverlay from '../components/BackgroundOverlay';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    customerType: 'zakelijk',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Formulier verzonden! In een echte applicatie zou dit naar een server worden gestuurd.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <section className="bg-[#0E243A] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <BackgroundOverlay variant="network" density="light" color="blue" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact
            </h1>
            <p className="text-lg text-gray-300">
              Neem contact met ons op voor advies, een offerte of andere vragen
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
                  <h2 className="text-2xl font-bold text-[#0E243A] mb-6">Stuur ons een bericht</h2>

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
                        Adres/Plaats
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
                        Type klant *
                      </label>
                      <select
                        id="customerType"
                        name="customerType"
                        required
                        value={formData.customerType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent"
                      >
                        <option value="zakelijk">Zakelijk</option>
                        <option value="particulier">Particulier</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Onderwerp *
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
                        Bericht *
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

                    <button
                      type="submit"
                      className="w-full bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-colors font-semibold text-lg"
                    >
                      Verstuur bericht
                    </button>
                  </form>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#0E243A] mb-4">Contactgegevens</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Adres</p>
                        <p className="text-gray-600">Voorbeeldstraat 123</p>
                        <p className="text-gray-600">1234 AB Utrecht</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Telefoon</p>
                        <a href="tel:+31612345678" className="text-gray-600 hover:text-[#FF6A00]">
                          +31 6 12345678
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">E-mail</p>
                        <a href="mailto:info@signaalmakers.nl" className="text-gray-600 hover:text-[#FF6A00]">
                          info@signaalmakers.nl
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0E243A] text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Direct contact</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+31612345678"
                      className="block bg-[#FF6A00] text-white px-6 py-3 rounded-lg hover:bg-[#E55F00] transition-colors font-semibold text-center"
                    >
                      <Phone className="w-5 h-5 inline mr-2" />
                      Bel nu
                    </a>
                    <a
                      href="https://wa.me/31612345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-center"
                    >
                      <MessageCircle className="w-5 h-5 inline mr-2" />
                      WhatsApp nu
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#0E243A] mb-4">Openingstijden</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Maandag - Vrijdag</span>
                      <span className="font-semibold">09:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Zaterdag</span>
                      <span className="font-semibold">Op afspraak</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Zondag</span>
                      <span className="font-semibold">Gesloten</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
