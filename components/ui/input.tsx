"use client";

import * as React from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { microSpring } from "@/components/motion/variants";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <m.input
      ref={ref}
      type={type}
      whileFocus={{ scale: 1.01 }}
      transition={microSpring}
      className={cn(
        "h-12 w-full rounded-2xl border border-white/[0.12] bg-white/[0.055] px-4 text-sm text-white shadow-inner outline-none backdrop-blur-2xl placeholder:text-white/[0.36] focus:border-sky-200/[0.55] focus:ring-2 focus:ring-sky-300/[0.22] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
