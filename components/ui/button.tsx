"use client";

import * as React from "react";
import { m } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { microSpring } from "@/components/motion/variants";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-[-0.01em] outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03040a] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "glass-edge bg-white text-zinc-950 shadow-iridescent hover:shadow-glow",
        secondary:
          "glass-surface text-white hover:border-white/[0.30]",
        outline:
          "border border-white/[0.18] bg-white/[0.04] text-white backdrop-blur-2xl hover:bg-white/[0.08]",
        ghost:
          "text-white/[0.78] hover:bg-white/[0.08] hover:text-white"
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-[3.25rem] min-h-[3.25rem] px-8 text-base",
        icon: "h-11 w-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <m.button
        ref={ref}
        {...(props as any)}
        className={cn(buttonVariants({ variant, size }), className)}
        whileHover={{ y: -2, scale: 1.015 }}
        whileTap={{ y: 0, scale: 0.98 }}
        transition={microSpring}
        {...props}
      >
        {children}
      </m.button>
    );
  }
);
Button.displayName = "Button";

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & {
    href: string;
  };

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <m.a
        ref={ref}
        {...(props as any)}
        className={cn(buttonVariants({ variant, size }), className)}
        whileHover={{ y: -2, scale: 1.015 }}
        whileTap={{ y: 0, scale: 0.98 }}
        transition={microSpring}
        {...props}
      >
        {children}
      </m.a>
    );
  }
);
LinkButton.displayName = "LinkButton";

export { Button, LinkButton, buttonVariants };
