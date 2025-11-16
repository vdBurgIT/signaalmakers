interface BackgroundOverlayProps {
  variant?: 'wifi' | 'network' | 'audio' | 'data' | 'mixed';
  density?: 'light' | 'medium' | 'dense';
  color?: 'blue' | 'grey' | 'mixed';
}

export default function BackgroundOverlay({
  variant = 'wifi',
  density = 'medium',
  color = 'blue',
}: BackgroundOverlayProps) {
  const baseOpacity = density === 'light' ? 0.04 : density === 'medium' ? 0.06 : 0.08;
  const primaryColor = color === 'blue' ? '#4A90E2' : color === 'grey' ? '#0E243A' : '#4A90E2';
  const secondaryColor = color === 'mixed' ? '#0E243A' : primaryColor;

  const renderWifiPattern = () => (
    <>
      <defs>
        <pattern id={`wifi-${variant}`} x="0" y="0" width="250" height="250" patternUnits="userSpaceOnUse">
          <g transform="translate(125, 125)">
            <circle cx="0" cy="0" r="5" fill={primaryColor} opacity="0.5" />
            <path d="M -35 0 A 35 35 0 0 1 35 0" stroke={primaryColor} strokeWidth="3" fill="none" opacity="0.4" />
            <path d="M -55 0 A 55 55 0 0 1 55 0" stroke={primaryColor} strokeWidth="2.5" fill="none" opacity="0.3" />
            <path d="M -75 0 A 75 75 0 0 1 75 0" stroke={primaryColor} strokeWidth="2" fill="none" opacity="0.2" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#wifi-${variant})`} />
    </>
  );

  const renderNetworkPattern = () => (
    <>
      <defs>
        <pattern id={`network-${variant}`} x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
          <circle cx="25" cy="25" r="4" fill={primaryColor} opacity="0.4" />
          <circle cx="125" cy="25" r="4" fill={secondaryColor} opacity="0.4" />
          <circle cx="75" cy="75" r="4" fill={primaryColor} opacity="0.4" />
          <circle cx="25" cy="125" r="4" fill={secondaryColor} opacity="0.4" />
          <circle cx="125" cy="125" r="4" fill={primaryColor} opacity="0.4" />
          <line x1="25" y1="25" x2="125" y2="25" stroke={primaryColor} strokeWidth="1.5" opacity="0.2" strokeDasharray="4,6" />
          <line x1="25" y1="25" x2="75" y2="75" stroke={secondaryColor} strokeWidth="1.5" opacity="0.2" strokeDasharray="4,6" />
          <line x1="125" y1="25" x2="75" y2="75" stroke={primaryColor} strokeWidth="1.5" opacity="0.2" strokeDasharray="4,6" />
          <line x1="75" y1="75" x2="25" y2="125" stroke={secondaryColor} strokeWidth="1.5" opacity="0.2" strokeDasharray="4,6" />
          <line x1="75" y1="75" x2="125" y2="125" stroke={primaryColor} strokeWidth="1.5" opacity="0.2" strokeDasharray="4,6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#network-${variant})`} />
    </>
  );

  const renderAudioPattern = () => (
    <>
      <defs>
        <pattern id={`audio-${variant}`} x="0" y="0" width="200" height="150" patternUnits="userSpaceOnUse">
          <g transform="translate(40, 75)">
            <circle cx="0" cy="0" r="6" fill={primaryColor} opacity="0.4" />
            <path d="M 15 -20 Q 25 -15, 25 0 Q 25 15, 15 20" stroke={primaryColor} strokeWidth="2.5" fill="none" opacity="0.3" />
            <path d="M 30 -30 Q 45 -20, 45 0 Q 45 20, 30 30" stroke={primaryColor} strokeWidth="2" fill="none" opacity="0.2" />
            <path d="M 45 -40 Q 65 -25, 65 0 Q 65 25, 45 40" stroke={primaryColor} strokeWidth="1.5" fill="none" opacity="0.15" />
          </g>
          <g transform="translate(160, 75)">
            <rect x="-4" y="-8" width="8" height="16" fill={secondaryColor} opacity="0.3" rx="2" />
            <path d="M 4 -12 L 12 -20 L 12 20 L 4 12 Z" fill={secondaryColor} opacity="0.3" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#audio-${variant})`} />
    </>
  );

  const renderDataPattern = () => (
    <>
      <defs>
        <pattern id={`data-${variant}`} x="0" y="0" width="180" height="120" patternUnits="userSpaceOnUse">
          <rect x="20" y="40" width="30" height="40" rx="3" fill="none" stroke={primaryColor} strokeWidth="2" opacity="0.3" />
          <line x1="25" y1="50" x2="45" y2="50" stroke={primaryColor} strokeWidth="1.5" opacity="0.3" />
          <line x1="25" y1="58" x2="45" y2="58" stroke={primaryColor} strokeWidth="1.5" opacity="0.3" />
          <line x1="25" y1="66" x2="45" y2="66" stroke={primaryColor} strokeWidth="1.5" opacity="0.3" />

          <path d="M 50 60 L 80 60" stroke={secondaryColor} strokeWidth="2" opacity="0.25" />
          <circle cx="80" cy="60" r="3" fill={secondaryColor} opacity="0.3" />

          <rect x="90" y="50" width="20" height="20" rx="2" fill="none" stroke={primaryColor} strokeWidth="2" opacity="0.3" />
          <circle cx="100" cy="60" r="2" fill={primaryColor} opacity="0.4" />

          <path d="M 110 60 C 130 60, 130 60, 150 60" stroke={secondaryColor} strokeWidth="2" strokeDasharray="3,3" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#data-${variant})`} />
    </>
  );

  const renderMixedPattern = () => (
    <>
      <defs>
        <pattern id={`mixed-${variant}`} x="0" y="0" width="300" height="250" patternUnits="userSpaceOnUse">
          <g transform="translate(80, 125)">
            <circle cx="0" cy="0" r="4" fill="#4A90E2" opacity="0.5" />
            <path d="M -30 0 A 30 30 0 0 1 30 0" stroke="#4A90E2" strokeWidth="2.5" fill="none" opacity="0.35" />
            <path d="M -50 0 A 50 50 0 0 1 50 0" stroke="#4A90E2" strokeWidth="2" fill="none" opacity="0.25" />
          </g>

          <circle cx="200" cy="80" r="3" fill="#0E243A" opacity="0.4" />
          <circle cx="250" cy="120" r="3" fill="#0E243A" opacity="0.4" />
          <line x1="200" y1="80" x2="250" y2="120" stroke="#0E243A" strokeWidth="1.5" opacity="0.2" strokeDasharray="4,5" />

          <g transform="translate(220, 180)">
            <circle cx="0" cy="0" r="5" fill="#4A90E2" opacity="0.35" />
            <path d="M 10 -15 Q 18 -10, 18 0 Q 18 10, 10 15" stroke="#4A90E2" strokeWidth="2" fill="none" opacity="0.25" />
            <path d="M 22 -22 Q 32 -13, 32 0 Q 32 13, 22 22" stroke="#4A90E2" strokeWidth="1.5" fill="none" opacity="0.18" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#mixed-${variant})`} />
    </>
  );

  const renderPattern = () => {
    switch (variant) {
      case 'wifi':
        return renderWifiPattern();
      case 'network':
        return renderNetworkPattern();
      case 'audio':
        return renderAudioPattern();
      case 'data':
        return renderDataPattern();
      case 'mixed':
        return renderMixedPattern();
      default:
        return renderWifiPattern();
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: baseOpacity }}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {renderPattern()}
      </svg>
    </div>
  );
}
