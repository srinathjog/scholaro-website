
import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false, size = 32 }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* The Brand Icon */}
      <div 
        className="relative flex-shrink-0"
        style={{ width: size, height: size }}
      >
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          {/* Main "S" Shape / Book Icon */}
          <path 
            d="M25 30C25 18.9543 33.9543 10 45 10H75V40C75 51.0457 66.0457 60 55 60H25V30Z" 
            fill="url(#logo-gradient)" 
          />
          <path 
            d="M75 70C75 81.0457 66.0457 90 55 90H25V60C25 48.9543 33.9543 40 45 40H75V70Z" 
            fill="url(#logo-gradient)" 
            fillOpacity="0.8"
          />
          {/* Small Dot Accent */}
          <circle cx="50" cy="50" r="10" fill="white" />
        </svg>
      </div>

      {!iconOnly && (
        <span className="text-2xl font-extrabold tracking-tight text-slate-900 flex items-center">
          Schol<span className="text-blue-600">aro</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
