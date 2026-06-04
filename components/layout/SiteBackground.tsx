"use client";

import { m, useReducedMotion } from "framer-motion";

const blobs = [
  "left-[4%] top-[9%] h-72 w-72 bg-cyan-400/[0.18]",
  "right-[6%] top-[18%] h-96 w-96 bg-fuchsia-400/[0.14]",
  "left-[28%] bottom-[6%] h-80 w-80 bg-indigo-400/[0.14]"
];

export default function SiteBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-liquid-grid bg-[length:76px_76px] opacity-[0.18]" />
      <div className="noise-mask absolute inset-0 opacity-80" />
      {blobs.map((className, index) => (
        <m.div
          key={className}
          className={`absolute rounded-full blur-3xl ${className}`}
          initial={{ opacity: 0.55, scale: 1 }}
          animate={
            reduceMotion
              ? { opacity: 0.45 }
              : {
                  x: [0, index % 2 === 0 ? 24 : -28, 0],
                  y: [0, index % 2 === 0 ? -18 : 26, 0],
                  scale: [1, 1.06, 1]
                }
          }
          transition={{ duration: 18 + index * 4, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
