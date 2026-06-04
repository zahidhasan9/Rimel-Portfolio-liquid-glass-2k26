import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-[2rem] border border-white/70 bg-white/70 text-card-foreground shadow-soft backdrop-blur-2xl",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 p-6", className)} {...props} />
);
const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-xl font-semibold tracking-tight", className)} {...props} />
);
const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm leading-6 text-zinc-500", className)} {...props} />
);
const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
);
const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
