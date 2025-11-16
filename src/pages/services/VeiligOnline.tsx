import Hero from '../../components/Hero';
import SEO from '../../components/SEO';
import { Shield, CheckCircle2 } from 'lucide-react';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export default function VeiligOnline() {
  return (
    <>
      <SEO
        title="Veilig Online - Cybersecurity Oplossingen"
        description="Cybersecurity oplossingen voor bedrijven. Firewalls, VPN, antivirus, backup en beveiligingsadvies voor veilig online werken."
        keywords="cybersecurity, firewall, vpn, antivirus, beveiliging, online veiligheid"
        url="https://signaalmakers.nl/diensten/veilig-online"
      />
      <div>
      <Hero
        title="Veilig Online & IT-beheer"
        subtitle="Bescherm uw netwerk met professionele beveiligingsoplossingen via onze IT-partner. Signaalmakers verzorgt de implementatie op locatie."
        primaryButtonText="Plan een beveiligingscheck"
        primaryButtonLink="/contact"
      />

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundOverlay variant="network" density="medium" color="grey" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#FF6A00] bg-opacity-10 rounded-lg p-6 mb-12 border-l-4 border-[#FF6A00]">
              <p className="text-gray-700 text-lg">
                <strong>Belangrijk:</strong> Beveiligingssoftware, monitoring en IT-beheer worden geleverd via onze vaste IT-partner. Signaalmakers verzorgt de netwerkbeveiliging, segmentatie en configuratie op locatie.
              </p>
            </div>

            <div className="flex gap-6 mb-8">
              <Shield className="w-12 h-12 text-[#FF6A00] flex-shrink-0" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-4">
                  Veiligheid begint bij het netwerk
                </h2>
                <p className="text-lg text-gray-600">
                  Een goed beveiligd netwerk is de basis voor veilig werken. Door slimme segmentatie en configuratie houden we ongewenst verkeer buiten de deur.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Via onze IT-partner</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Antivirus en anti-malware oplossingen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>E-mail beveiliging en spam filtering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>24/7 monitoring en alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Automatische back-ups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Patch management en updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Security awareness training</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0E243A] mb-4">Door Signaalmakers op locatie</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>VLAN-segmentatie voor netwerken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Apart gastennetwerk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Firewall configuratie op routers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Access control en MAC-filtering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Veilige wifi met WPA3 encryptie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span>Netwerkdocumentatie en schema's</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0E243A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Wat wij op locatie doen
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Signaalmakers richt de netwerkbeveiliging in en zorgt voor een veilige basis:
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">VLAN-segmentatie</h3>
                  <p className="text-gray-300">
                    We verdelen uw netwerk in aparte VLAN's: bedrijfsnetwerk, gastennetwerk, IoT-apparaten en eventueel speciale zones zoals kassasystemen of productie. Zo kan verkeer tussen netwerken niet zomaar communiceren.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Gastennetwerk</h3>
                  <p className="text-gray-300">
                    Een apart gastennetwerk zorgt dat bezoekers wel internet hebben, maar geen toegang tot uw bedrijfsnetwerk. Dit voorkomt dat onbekende apparaten toegang krijgen tot gevoelige data.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Firewall en toegangscontrole</h3>
                  <p className="text-gray-300">
                    Firewallregels op routers en switches blokkeren ongewenst verkeer. We configureren alleen de poorten en protocollen die écht nodig zijn. Access control lists (ACL's) bepalen wie waar toegang toe heeft.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Veilige wifi-configuratie</h3>
                  <p className="text-gray-300">
                    WPA3-encryptie waar mogelijk, sterke wachtwoorden en regelmatige wachtwoordrotatie. SSID's kunnen verborgen worden en MAC-filtering voorkomt ongeautoriseerde toegang.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#FF6A00] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Netwerkdocumentatie</h3>
                  <p className="text-gray-300">
                    Complete documentatie van de netwerkconfiguratie: VLAN-schema's, firewallregels, toegangsrechten en wachtwoorden. Alles netjes vastgelegd voor toekomstig beheer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E243A] mb-6 text-center">
              Waarom netwerkbeveiliging belangrijk is
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Bescherm klantgegevens</h3>
                <p className="text-gray-600">
                  Uw klanten vertrouwen erop dat hun gegevens veilig zijn. Een datalek kan grote gevolgen hebben voor uw reputatie en portemonnee.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Voorkom downtime</h3>
                <p className="text-gray-600">
                  Een ransomware-aanval kan uw bedrijf dagen of weken stilleggen. Voorkomen is veel goedkoper dan genezen.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-[#0E243A] mb-3">Voldoe aan wetgeving</h3>
                <p className="text-gray-600">
                  De AVG (GDPR) verplicht u om passende beveiligingsmaatregelen te nemen. Goed netwerkbeheer is daar een belangrijk onderdeel van.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
