import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "soft" | "rainbow";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
        variant === "default" && "bg-white text-zinc-950",
        variant === "outline" && "border border-white/[0.16] bg-white/[0.03] text-white/[0.76] backdrop-blur-xl",
        variant === "soft" && "bg-white/[0.08] text-white/[0.72] ring-1 ring-white/[0.12]",
        variant === "rainbow" && "bg-glass-rainbow text-white ring-1 ring-white/[0.18] backdrop-blur-xl",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
