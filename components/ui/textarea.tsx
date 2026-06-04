import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "flex min-h-[150px] w-full rounded-2xl border border-zinc-200 bg-white/70 px-4 py-3 text-sm outline-none backdrop-blur-xl transition focus:border-zinc-400 focus:ring-4 focus:ring-zinc-200 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
export { Textarea };
