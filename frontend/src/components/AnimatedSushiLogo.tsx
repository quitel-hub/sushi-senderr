import React from 'react';
import logoUrl from '../assets/sushi-icon-logo.svg';

interface AnimatedSushiLogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export function AnimatedSushiLogo({ className = '', size = 'large' }: AnimatedSushiLogoProps) {
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16', 
    large: 'w-20 h-20 sm:w-24 sm:h-24'
  };

  return (
    <div className={`logo-container ${className}`}>
      <img 
        src={logoUrl} 
        alt="Sushi Logo" 
        className={`logo logo--${size} logo--animated ${sizeClasses[size]}`}
      />
    </div>
  );
}
