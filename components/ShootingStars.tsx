"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
}

export default function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      top: Math.random() * 60,
      left: Math.random() * 80,
      delay: Math.random() * 12,
      duration: 1.6 + Math.random() * 1.2,
    }));
    setStars(generated);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute h-[2px] w-[2px] rounded-full bg-gold-glow"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            boxShadow: "0 0 6px 1px rgba(255,223,140,0.9)",
            animation: `shooting-star ${s.duration}s linear ${s.delay}s infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes shooting-star {
          0% {
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          5% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(280px, 180px) scale(0.2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
