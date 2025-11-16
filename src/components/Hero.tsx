import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  icon?: LucideIcon;
  children?: ReactNode;
}

export default function Hero({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  icon: Icon,
  children,
}: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-[#0E243A] via-[#1a3a5a] to-[#0E243A] text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#FF6A00] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {Icon && (
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FF6A00] to-[#E55F00] rounded-2xl mb-6 shadow-2xl">
              <Icon className="w-10 h-10 text-white" />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
          {(primaryButtonText || secondaryButtonText) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryButtonText && primaryButtonLink && (
                <Link
                  to={primaryButtonLink}
                  className="bg-[#FF6A00] text-white px-8 py-4 rounded-lg hover:bg-[#E55F00] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
                >
                  {primaryButtonText}
                </Link>
              )}
              {secondaryButtonText && secondaryButtonLink && (
                <Link
                  to={secondaryButtonLink}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0E243A] transition-all duration-300 font-semibold text-lg"
                >
                  {secondaryButtonText}
                </Link>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
