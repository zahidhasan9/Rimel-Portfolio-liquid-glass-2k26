import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "soft";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        variant === "default" && "bg-zinc-950 text-white",
        variant === "outline" && "border border-zinc-300 bg-white/50 text-zinc-700 backdrop-blur-xl",
        variant === "soft" && "bg-zinc-100 text-zinc-700",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
