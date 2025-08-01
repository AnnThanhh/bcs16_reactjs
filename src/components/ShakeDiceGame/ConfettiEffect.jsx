import React, { useEffect, useState } from 'react';

const ConfettiEffect = ({ show, onComplete }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (show) {
      // Tạo 50 hạt confetti
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -10,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3 + 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        color: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'][Math.floor(Math.random() * 6)],
        size: Math.random() * 8 + 4,
        life: 1
      }));
      
      setParticles(newParticles);

      // Animation loop
      const animate = () => {
        setParticles(prevParticles => {
          const updatedParticles = prevParticles.map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vy: particle.vy + 0.1, // gravity
            rotation: particle.rotation + particle.rotationSpeed,
            life: particle.life - 0.01
          })).filter(particle => particle.life > 0 && particle.y < window.innerHeight + 50);

          if (updatedParticles.length === 0) {
            onComplete && onComplete();
            return [];
          }

          return updatedParticles;
        });
      };

      const intervalId = setInterval(animate, 16); // ~60fps

      return () => clearInterval(intervalId);
    }
  }, [show, onComplete]);

  if (!show || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            transform: `rotate(${particle.rotation}deg)`,
            opacity: particle.life,
            boxShadow: `0 0 6px ${particle.color}`,
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiEffect;
