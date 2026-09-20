"use client";

import { zodiacSigns } from "@/lib/data";

export default function ZodiacWheel({ size = 620 }: { size?: number }) {
  const radius = size / 2;
  const symbolRadius = radius - 46;

  return (
    <div
      className="pointer-events-none select-none"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div className="relative h-full w-full animate-spin-slow">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          width={size}
          height={size}
          className="drop-shadow-[0_0_35px_rgba(212,175,55,0.25)]"
        >
          <circle
            cx={radius}
            cy={radius}
            r={radius - 4}
            fill="none"
            stroke="url(#goldRing)"
            strokeWidth="1.5"
            opacity="0.55"
          />
          <circle
            cx={radius}
            cy={radius}
            r={radius - 30}
            fill="none"
            stroke="url(#goldRing)"
            strokeWidth="1"
            opacity="0.35"
          />
          <defs>
            <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4E5C3" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#9C7A22" />
            </linearGradient>
          </defs>
          {zodiacSigns.map((sign, i) => {
            const angle = (i / 12) * 2 * Math.PI - Math.PI / 2;
            const x = radius + symbolRadius * Math.cos(angle);
            const y = radius + symbolRadius * Math.sin(angle);
            const tickX1 = radius + (radius - 4) * Math.cos(angle);
            const tickY1 = radius + (radius - 4) * Math.sin(angle);
            const tickX2 = radius + (radius - 16) * Math.cos(angle);
            const tickY2 = radius + (radius - 16) * Math.sin(angle);
            return (
              <g key={sign.en}>
                <line
                  x1={tickX1}
                  y1={tickY1}
                  x2={tickX2}
                  y2={tickY2}
                  stroke="#D4AF37"
                  strokeWidth="1"
                  opacity="0.4"
                />
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize="22"
                  fill="#F4E5C3"
                  style={{ filter: "drop-shadow(0 0 6px rgba(212,175,55,0.6))" }}
                >
                  {sign.symbol}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
