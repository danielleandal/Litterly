import React from 'react';

interface IconProps {
  className?: string;
}

// Growth Stage Icons
export const SeedIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="65" rx="20" ry="12" fill="#8B4513"/>
  </svg>
);

export const SproutIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 80 Q50 60 55 50" stroke="#22c55e" strokeWidth="5" fill="none" strokeLinecap="round"/>
    <path d="M55 50 Q60 55 60 50" stroke="#22c55e" strokeWidth="5" fill="none" strokeLinecap="round"/>
  </svg>
);

export const SaplingIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 90 V 40" stroke="#8B4513" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <circle cx="50" cy="30" r="15" fill="#22c55e"/>
    <circle cx="40" cy="40" r="12" fill="#84cc16"/>
    <circle cx="60" cy="40" r="12" fill="#84cc16"/>
  </svg>
);

export const YoungTreeIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 90 V 30" stroke="#8B4513" strokeWidth="6" fill="none" strokeLinecap="round"/>
    <path d="M50 60 L 30 50" stroke="#8B4513" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <path d="M50 50 L 70 40" stroke="#8B4513" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <circle cx="50" cy="25" r="20" fill="#22c55e"/>
    <circle cx="30" cy="40" r="15" fill="#84cc16"/>
    <circle cx="70" cy="30" r="15" fill="#84cc16"/>
  </svg>
);

// --- Mature Tree Icons ---

// Common
export const OakIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="44" y="50" width="12" height="40" rx="3" fill="#8B4513"/>
    <circle cx="50" cy="35" r="30" fill="#22c55e"/>
    <circle cx="30" cy="45" r="20" fill="#16a34a"/>
    <circle cx="70" cy="45" r="20" fill="#16a34a"/>
  </svg>
);

export const PineIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="45" y="70" width="10" height="20" fill="#8B4513"/>
      <polygon points="50,10 20,40 80,40" fill="#166534"/>
      <polygon points="50,30 25,60 75,60" fill="#15803d"/>
      <polygon points="50,50 30,80 70,80" fill="#22c55e"/>
    </svg>
);

export const BirchIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M52 90 V 20" stroke="#f3f4f6" strokeWidth="10" strokeLinecap="round"/>
        <path d="M49 60 h 2 l -1 10 z" fill="#1f2937"/>
        <path d="M53 40 h 1 l -0.5 8 z" fill="#1f2937"/>
        <circle cx="50" cy="25" r="20" fill="#84cc16"/>
        <circle cx="65" cy="30" r="15" fill="#a3e635"/>
    </svg>
);

export const SpruceIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="46" y="80" width="8" height="10" fill="#6b462f"/>
      <polygon points="50,15 30,45 70,45" fill="#059669"/>
      <polygon points="50,35 35,65 65,65" fill="#10b981"/>
      <polygon points="50,55 40,85 60,85" fill="#34d399"/>
    </svg>
);

export const PalmIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 90 C 60 70, 60 50, 55 30" stroke="#d2b48c" strokeWidth="8" fill="none" strokeLinecap="round"/>
    <path d="M55 35 C 40 20, 20 20, 10 30" stroke="#22c55e" strokeWidth="6" fill="none" strokeLinecap="round"/>
    <path d="M55 35 C 70 20, 90 20, 95 35" stroke="#22c55e" strokeWidth="6" fill="none" strokeLinecap="round"/>
    <path d="M55 32 C 55 15, 70 15, 70 25" stroke="#84cc16" strokeWidth="6" fill="none" strokeLinecap="round"/>
  </svg>
);

export const BaobabIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M30 90 C 30 70, 40 60, 50 60 C 60 60, 70 70, 70 90 Z" fill="#b9936c"/>
      <path d="M50 60 L 40 40" stroke="#b9936c" strokeWidth="6" strokeLinecap="round"/>
      <path d="M50 60 L 60 45" stroke="#b9936c" strokeWidth="6" strokeLinecap="round"/>
      <circle cx="40" cy="35" r="10" fill="#22c55e"/>
      <circle cx="60" cy="40" r="8" fill="#84cc16"/>
    </svg>
);

// Uncommon
export const MapleIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="44" y="55" width="12" height="35" rx="3" fill="#8B4513"/>
    <circle cx="50" cy="40" r="35" fill="#d97706"/>
    <circle cx="35" cy="30" r="20" fill="#f97316" opacity="0.8"/>
    <circle cx="65" cy="30" r="20" fill="#f97316" opacity="0.8"/>
  </svg>
);

export const WillowIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 85 V 50" stroke="#a16207" strokeWidth="10" strokeLinecap="round"/>
    <path d="M50 55 C 20 55, 30 10, 25 10" stroke="#a3e635" strokeWidth="5" fill="none" strokeLinecap="round"/>
    <path d="M50 55 C 80 55, 70 10, 75 10" stroke="#a3e635" strokeWidth="5" fill="none" strokeLinecap="round"/>
    <path d="M45 52 C 30 70, 30 20, 35 20" stroke="#84cc16" strokeWidth="5" fill="none" strokeLinecap="round"/>
    <path d="M55 52 C 70 70, 70 20, 65 20" stroke="#84cc16" strokeWidth="5" fill="none" strokeLinecap="round"/>
  </svg>
);

export const RedwoodIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="42" y="10" width="16" height="80" rx="4" fill="#a16207"/>
      <circle cx="50" cy="15" r="20" fill="#166534"/>
      <circle cx="50" cy="35" r="25" fill="#15803d"/>
      <circle cx="50" cy="55" r="20" fill="#166534"/>
    </svg>
);

export const JoshuaTreeIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M50 90 V 50 L 30 30" stroke="#856c5c" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M50 60 L 70 40" stroke="#856c5c" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <circle cx="30" cy="25" r="10" fill="#556b2f"/>
      <circle cx="70" cy="35" r="12" fill="#6b8e23"/>
    </svg>
);

export const BanyanIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="40" width="20" height="50" fill="#a16207"/>
      <path d="M30 90 V 60" stroke="#a16207" strokeWidth="6" strokeLinecap="round"/>
      <path d="M70 90 V 50" stroke="#a16207" strokeWidth="6" strokeLinecap="round"/>
      <circle cx="50" cy="30" r="30" fill="#22c55e"/>
      <circle cx="25" cy="40" r="20" fill="#16a34a"/>
      <circle cx="75" cy="35" r="25" fill="#16a34a"/>
    </svg>
);

export const GinkgoIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M50 90 V 30" stroke="#78350f" strokeWidth="6" strokeLinecap="round"/>
      <path d="M50 30 C 20 30, 20 0, 40 10" fill="#eab308"/>
      <path d="M50 30 C 80 30, 80 0, 60 10" fill="#eab308"/>
      <path d="M50 30 L 50 20 L 70 5" fill="#facc15" />
    </svg>
);

// Rare
export const CherryBlossomIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 90 V 40" stroke="#78350f" strokeWidth="6" strokeLinecap="round"/>
    <path d="M50 60 L 30 50" stroke="#78350f" strokeWidth="4" strokeLinecap="round"/>
    <path d="M50 50 L 75 40" stroke="#78350f" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="50" cy="30" r="15" fill="#fce7f3"/>
    <circle cx="35" cy="45" r="12" fill="#fbcfe8"/>
    <circle cx="70" cy="35" r="18" fill="#f9a8d4"/>
    <circle cx="55" cy="45" r="10" fill="#fce7f3"/>
  </svg>
);

export const JacarandaIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M50 90 V 40" stroke="#8B4513" strokeWidth="6" strokeLinecap="round"/>
      <circle cx="50" cy="35" r="30" fill="#a78bfa"/>
      <circle cx="30" cy="45" r="20" fill="#c4b5fd"/>
      <circle cx="70" cy="45" r="20" fill="#c4b5fd"/>
    </svg>
);

export const WisteriaIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M50 90 V 40" stroke="#78350f" strokeWidth="8" strokeLinecap="round"/>
      <path d="M50 40 C 20 40, 20 20, 30 20" stroke="#78350f" strokeWidth="6" strokeLinecap="round"/>
      <circle cx="30" cy="30" r="8" fill="#c084fc"/>
      <circle cx="25" cy="45" r="8" fill="#d8b4fe"/>
      <circle cx="40" cy="55" r="8" fill="#c084fc"/>
      <circle cx="60" cy="30" r="8" fill="#d8b4fe"/>
      <circle cx="70" cy="45" r="8" fill="#c084fc"/>
    </svg>
);

export const MagnoliaIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="44" y="50" width="12" height="40" rx="3" fill="#8B4513"/>
      <circle cx="50" cy="35" r="30" fill="#16a34a"/>
      <circle cx="35" cy="40" r="8" fill="#fce7f3"/>
      <circle cx="65" cy="40" r="8" fill="#fce7f3"/>
      <circle cx="50" cy="25" r="8" fill="#fbcfe8"/>
    </svg>
);

export const DragonBloodIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M50 90 V 40" stroke="#991b1b" strokeWidth="8" strokeLinecap="round"/>
      <path d="M20 40 H 80 A 30 30 0 0 0 20 40" fill="#15803d"/>
    </svg>
);

// Epic
export const RainbowTreeIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="rainbowGrad">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="20%" stopColor="#f97316" />
        <stop offset="40%" stopColor="#eab308" />
        <stop offset="60%" stopColor="#22c55e" />
        <stop offset="80%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </radialGradient>
    </defs>
    <rect x="44" y="50" width="12" height="40" rx="3" fill="#e2e8f0"/>
    <circle cx="50" cy="35" r="30" fill="url(#rainbowGrad)"/>
  </svg>
);

export const CrystalTreeIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M50 90 L 45 50 L 55 50 Z" fill="#a5b4fc"/>
      <polygon points="50,10 30,50 70,50" fill="#c7d2fe"/>
      <polygon points="50,10 40,40 60,40" fill="#e0e7ff"/>
    </svg>
);

export const StarlightTreeIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="46" y="50" width="8" height="40" fill="#4338ca"/>
      <circle cx="50" cy="35" r="30" fill="#1e1b4b"/>
      <circle cx="50" cy="35" r="2" fill="#fde047" />
      <circle cx="40" cy="25" r="1.5" fill="#fef08a" />
      <circle cx="60" cy="25" r="1.5" fill="#fef08a" />
      <circle cx="35" cy="45" r="1" fill="white" />
      <circle cx="65" cy="45" r="1" fill="white" />
    </svg>
);
