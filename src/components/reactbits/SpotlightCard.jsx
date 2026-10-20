import { useRef, useState } from 'react';

/**
 * SpotlightCard component from React Bits (reactbits.dev)
 * Creates an interactive card with a glowing spotlight that follows the cursor.
 */
export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(255, 255, 255, 0.06)',
  borderColor = 'rgba(255, 255, 255, 0.15)',
  size = 400,
  ...props
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#0e0f12] p-6 sm:p-7 transition-all duration-300 hover:border-zinc-700 ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
        aria-hidden="true"
      />

      {/* Subtle border highlight following cursor */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity,
          maskImage: `radial-gradient(${size * 0.7}px circle at ${position.x}px ${position.y}px, black 30%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(${size * 0.7}px circle at ${position.x}px ${position.y}px, black 30%, transparent 80%)`,
          border: `1px solid ${borderColor}`,
        }}
        aria-hidden="true"
      />

      {/* Content wrapper */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
