import React from 'react';
import { ParticleTextEffect } from './ParticleTextEffect';

interface SushiIconPanelProps {
  className?: string;
  showParticles?: boolean;
}

export function SushiIconPanel({ 
  className = '', 
  showParticles = true
}: SushiIconPanelProps) {
  return (
    <div className={`sushi-icon-panel ${className}`}>
      {showParticles && (
        <ParticleTextEffect 
          words={["SUSHI ICON"]}
          className="sushi-particles"
        />
      )}
    </div>
  );
}
