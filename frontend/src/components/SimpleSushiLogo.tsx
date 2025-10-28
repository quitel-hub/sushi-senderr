import React from 'react';
import logoUrl from "../assets/sushi-icon-logo.svg";

interface SimpleSushiLogoProps {
  className?: string;
}

export function SimpleSushiLogo({ className = '' }: SimpleSushiLogoProps) {
  return (
    <div className={`simple-sushi-logo ${className}`}>
      <img
        src={logoUrl}
        alt="Sushi Icon"
        className="sushi-logo-image"
      />
    </div>
  );
}
