import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))"
      },
      boxShadow: {
        glass: "0 24px 90px rgba(0,0,0,0.35)",
        glow: "0 0 110px rgba(255,255,255,0.16)",
        iridescent: "0 0 80px rgba(125, 92, 255, 0.24), 0 0 120px rgba(45, 212, 191, 0.10)"
      },
      backgroundImage: {
        "liquid-grid":
          "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
        "glass-rainbow":
          "linear-gradient(135deg, rgba(255,255,255,0.42), rgba(255,255,255,0.06) 35%, rgba(56,189,248,0.14) 52%, rgba(168,85,247,0.16) 76%, rgba(255,255,255,0.12))"
      }
    }
  },
  plugins: []
};

export default config;
