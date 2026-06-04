"use client";

import { memo, useRef } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  as?: "div" | "section" | "article";
};

const transition = { type: "spring", stiffness: 110, damping: 22, mass: 0.7 } as const;

function Reveal({ children, className, delay = 0, amount = 0.18, as = "div" }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount, margin: "-70px" });
  const reduceMotion = useReducedMotion();
  const MotionComponent = as === "section" ? m.section : as === "article" ? m.article : m.div;

  return (
    <MotionComponent
      ref={ref}
      className={cn("will-change-transform-active", className)}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 28, scale: 0.985 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : undefined}
      transition={{ ...transition, delay }}
    >
      {children}
    </MotionComponent>
  );
}

export default memo(Reveal);
