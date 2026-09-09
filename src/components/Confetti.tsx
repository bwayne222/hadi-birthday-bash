import { useMemo } from "react";

const COLORS = ["var(--gold)", "var(--pink)", "var(--cyan)", "oklch(0.8 0.18 140)"];

export function Confetti({ count = 90 }: { count?: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 4 + Math.random() * 5,
        drift: `${(Math.random() - 0.5) * 260}px`,
        color: COLORS[i % COLORS.length] as string,
        size: 6 + Math.random() * 8,
        round: Math.random() > 0.6,
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="animate-confetti absolute top-0 block"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * (p.round ? 1 : 1.8),
            backgroundColor: p.color,
            borderRadius: p.round ? "9999px" : "2px",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            animationIterationCount: "infinite",
            ["--drift" as string]: p.drift,
          }}
        />
      ))}
    </div>
  );
}

export function Balloons() {
  const balloons = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: Math.random() * 95,
        delay: Math.random() * 14,
        duration: 14 + Math.random() * 12,
        color: COLORS[i % COLORS.length] as string,
        scale: 0.6 + Math.random() * 0.7,
      })),
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {balloons.map((b) => (
        <span
          key={b.id}
          className="animate-balloon absolute bottom-0 block h-16 w-12 opacity-60"
          style={{
            left: `${b.left}%`,
            backgroundColor: b.color,
            borderRadius: "50% 50% 48% 48% / 60% 60% 40% 40%",
            transform: `scale(${b.scale})`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
