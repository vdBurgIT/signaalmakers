import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  linkText?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  link,
  linkText = 'Meer informatie',
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 bg-[#FF6A00] rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-[#0E243A] mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-[#FF6A00] font-semibold hover:text-[#E55F00] transition-colors"
      >
        {linkText}
        <span className="ml-2">→</span>
      </Link>
    </div>
  );
}
