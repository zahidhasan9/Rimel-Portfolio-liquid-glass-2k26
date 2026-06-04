"use client";

import * as React from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { microSpring } from "@/components/motion/variants";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <m.textarea
      ref={ref}
      whileFocus={{ scale: 1.01 }}
      transition={microSpring}
      className={cn(
        "min-h-36 w-full resize-y rounded-2xl border border-white/[0.12] bg-white/[0.055] px-4 py-3 text-sm text-white shadow-inner outline-none backdrop-blur-2xl placeholder:text-white/[0.36] focus:border-sky-200/[0.55] focus:ring-2 focus:ring-sky-300/[0.22] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
