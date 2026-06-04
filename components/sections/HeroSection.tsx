"use client";

import { useMemo } from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import Container from "@/components/common/Container";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { microSpring } from "@/components/motion/variants";

const heroStats = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.55 } }
};

const statItem = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: microSpring }
};

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const floatingCards = useMemo(
    () => [
      { label: "UX", value: "Glass UI", className: "left-2 top-5 sm:left-8" },
      { label: "Build", value: "Next.js", className: "bottom-6 right-2 sm:right-8" },
      { label: "Speed", value: "Optimized", className: "bottom-24 left-6 hidden sm:block" }
    ],
    []
  );

  return (
    <section className="relative min-h-screen overflow-hidden pb-16 pt-32 sm:pt-40" id="home">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <m.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
            >
              <Badge variant="rainbow" className="gap-2 normal-case tracking-[0.08em]">
                <Sparkles size={14} aria-hidden="true" />
                {profile.availability}
              </Badge>
            </m.div>

            <m.h1
              className="mt-7 max-w-5xl text-balance text-5xl font-semibold tracking-[-0.075em] text-white sm:text-7xl lg:text-8xl"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 22, delay: 0.1 }}
            >
              Premium web experiences, engineered with liquid precision.
            </m.h1>

            <m.p
              className="mt-7 max-w-2xl text-lg leading-8 text-white/[0.64] sm:text-xl"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 110, damping: 22, delay: 0.2 }}
            >
              {profile.headline}
            </m.p>

            <m.div
              className="mt-9 flex flex-col gap-3 sm:flex-row"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 22, delay: 0.3 }}
            >
              <LinkButton href="/projects" size="lg">
                Explore Work <ArrowRight size={18} aria-hidden="true" />
              </LinkButton>
              <LinkButton href="/contact" variant="secondary" size="lg">
                Start a Project
              </LinkButton>
              <LinkButton href="/about" variant="outline" size="lg">
                <Download size={18} aria-hidden="true" /> Resume
              </LinkButton>
            </m.div>

            <m.div
              className="mt-10 grid grid-cols-3 gap-3 sm:max-w-xl"
              variants={heroStats}
              initial="hidden"
              animate="visible"
            >
              {profile.stats.map((stat) => (
                <m.div key={stat.label} variants={statItem} className="glass-surface rounded-3xl p-4">
                  <p className="relative z-10 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="relative z-10 mt-1 text-xs font-medium uppercase tracking-[0.18em] text-white/[0.45]">
                    {stat.label}
                  </p>
                </m.div>
              ))}
            </m.div>
          </div>

          <m.div
            className="relative mx-auto h-[520px] w-full max-w-[520px]"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 20, delay: 0.25 }}
            aria-label="Developer visual profile card"
          >
            <m.div
              className="absolute inset-0 rounded-[3rem] bg-glass-rainbow opacity-60 blur-2xl"
              animate={reduceMotion ? undefined : { scale: [1, 1.04, 1], rotate: [0, 2, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="glass-surface absolute inset-6 rounded-[3rem] p-6">
              <div className="relative z-10 flex h-full flex-col justify-between rounded-[2.25rem] border border-white/[0.12] bg-black/[0.20] p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Developer Card</Badge>
                  <span className="rounded-full bg-emerald-300/[0.90] px-3 py-1 text-xs font-bold text-emerald-950">
                    Online
                  </span>
                </div>

                <div>
                  <div className="mb-6 grid h-24 w-24 place-items-center rounded-[2rem] bg-white text-3xl font-black tracking-[-0.06em] text-zinc-950 shadow-glow">
                    {profile.name
                      .split(" ")
                      .map((item) => item[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <h2 className="text-4xl font-semibold tracking-[-0.06em] text-white">{profile.name}</h2>
                  <p className="mt-3 text-sm leading-7 text-white/[0.62]">{profile.summary}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {profile.tools.slice(0, 4).map((tool) => (
                    <div key={tool} className="rounded-2xl border border-white/[0.10] bg-white/[0.055] px-4 py-3 text-sm font-medium text-white/[0.74]">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {floatingCards.map((card, index) => (
              <m.div
                key={card.label}
                className={`glass-edge absolute z-20 rounded-3xl bg-white/[0.08] px-5 py-4 backdrop-blur-2xl ${card.className}`}
                animate={reduceMotion ? undefined : { y: [0, index % 2 === 0 ? -10 : 10, 0] }}
                transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xs uppercase tracking-[0.18em] text-white/[0.42]">{card.label}</p>
                <p className="mt-1 text-sm font-semibold text-white">{card.value}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </Container>
    </section>
  );
}
