import { useEffect, useRef, useState } from 'react';

interface NetherlandsMapProps {
  hoveredProvince: string | null;
  onProvinceHover: (province: string | null) => void;
}

const provinceNames: Record<string, string> = {
  'NL-GR': 'Groningen',
  'NL-FR': 'Friesland',
  'NL-DR': 'Drenthe',
  'NL-OV': 'Overijssel',
  'NL-FL': 'Flevoland',
  'NL-GE': 'Gelderland',
  'NL-UT': 'Utrecht',
  'NL-NH': 'Noord-Holland',
  'NL-ZH': 'Zuid-Holland',
  'NL-ZE': 'Zeeland',
  'NL-NB': 'Noord-Brabant',
  'NL-LI': 'Limburg',
};

export default function NetherlandsMap({ hoveredProvince, onProvinceHover }: NetherlandsMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    // Correct pad naar het SVG bestand in public folder
    fetch('/images/backgrounds/netherlands.svg')
      .then((response) => response.text())
      .then((svgText) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgText, 'image/svg+xml');
        const svg = doc.querySelector('svg');

        if (!svg) return;

        // Voeg viewBox toe voor correcte schaling
        const width = svg.getAttribute('width') || '612.54211';
        const height = svg.getAttribute('height') || '723.61865';
        svg.setAttribute('viewBox', `0 0 ${parseFloat(width)} ${parseFloat(height)}`);
        svg.removeAttribute('width');
        svg.removeAttribute('height');

        svg.setAttribute('class', 'w-full h-auto');
        svg.setAttribute('role', 'img');
        svg.setAttribute('aria-label', 'Interactieve kaart van Nederland met alle 12 provincies');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

        const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
        style.textContent = `
          .provincie {
            fill: #ffffff;
            stroke: #0E243A;
            stroke-width: 1;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .provincie:hover,
          .provincie.active {
            fill: #FF6A00;
            stroke: #E55F00;
            stroke-width: 1.5;
          }
        `;
        svg.insertBefore(style, svg.firstChild);

        const paths = svg.querySelectorAll('path[id^="NL-"]');
        paths.forEach((path) => {
          const id = path.getAttribute('id') || '';
          const provinceName = provinceNames[id] || '';

          path.classList.add('provincie');
          path.setAttribute('data-name', provinceName);
          path.setAttribute('aria-label', provinceName);

          const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
          title.textContent = provinceName;
          path.appendChild(title);
        });

        setSvgContent(new XMLSerializer().serializeToString(svg));
      })
      .catch((error) => {
        // Log errors in development
        if (process.env.NODE_ENV === 'development') {
          console.error('Failed to load Netherlands SVG:', error);
        }
        // Silently fail in production - map is decorative
      });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseEnter = (e: Event) => {
      const target = e.target as SVGElement;
      const name = target.getAttribute('data-name');
      if (name) {
        onProvinceHover(name);
      }
    };

    const handleMouseLeave = () => {
      onProvinceHover(null);
    };

    const paths = container.querySelectorAll<SVGPathElement>('.provincie');

    paths.forEach((path) => {
      path.addEventListener('mouseenter', handleMouseEnter);
      path.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      paths.forEach((path) => {
        path.removeEventListener('mouseenter', handleMouseEnter);
        path.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [svgContent, onProvinceHover]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const paths = container.querySelectorAll<SVGPathElement>('.provincie');
    paths.forEach((path) => {
      const name = path.getAttribute('data-name');
      if (name === hoveredProvince) {
        path.classList.add('active');
      } else {
        path.classList.remove('active');
      }
    });
  }, [hoveredProvince]);

  return (
    <div className="flex flex-col items-center w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] mx-auto">
      <div
        ref={containerRef}
        className="w-full"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  );
}
