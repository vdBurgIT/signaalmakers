import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Pagina niet gevonden - 404"
        description="De pagina die u zoekt bestaat niet of is verplaatst."
        url="https://signaalmakers.nl/404"
      />
      <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#0E243A] to-[#1a3a5a] text-white">
        <div className="text-center px-4 max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-[#FF6A00] mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pagina niet gevonden</h2>
            <p className="text-xl text-gray-300 mb-8">
              De pagina die u zoekt bestaat niet of is verplaatst. Misschien kunnen deze links u helpen:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Link
              to="/"
              className="bg-[#FF6A00] text-white px-6 py-4 rounded-lg hover:bg-[#e55e00] transition-colors flex flex-col items-center gap-2 group"
            >
              <Home className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Terug naar home</span>
            </Link>

            <Link
              to="/diensten"
              className="bg-white/10 backdrop-blur text-white px-6 py-4 rounded-lg hover:bg-white/20 transition-colors flex flex-col items-center gap-2 group"
            >
              <Search className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Onze diensten</span>
            </Link>

            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur text-white px-6 py-4 rounded-lg hover:bg-white/20 transition-colors flex flex-col items-center gap-2 group"
            >
              <ArrowLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Contact opnemen</span>
            </Link>
          </div>

          <div className="text-gray-400">
            <p>Of gebruik het menu bovenaan om te navigeren naar de gewenste pagina.</p>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#0E243A] mb-6 text-center">Populaire pagina's</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/diensten/netwerkbekabeling" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-[#0E243A] mb-2">Netwerkbekabeling</h4>
                <p className="text-gray-600 text-sm">Cat6/Cat6A bekabeling voor infrastructuur</p>
              </Link>
              <Link to="/sectoren" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-[#0E243A] mb-2">Sectoren</h4>
                <p className="text-gray-600 text-sm">Bekabeling per sector</p>
              </Link>
              <Link to="/contact" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-[#0E243A] mb-2">Contact</h4>
                <p className="text-gray-600 text-sm">Neem contact met ons op</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
