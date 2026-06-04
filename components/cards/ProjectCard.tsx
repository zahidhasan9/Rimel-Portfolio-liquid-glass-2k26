"use client";

import { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import { m } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { itemVariants, microSpring } from "@/components/motion/variants";

export type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  href: string;
  accent: string;
};

function ProjectCard({ title, category, description, stack, href, accent }: ProjectCardProps) {
  return (
    <m.a
      href={href}
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      transition={microSpring}
      className="group glass-surface block rounded-[2rem] p-1 outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
      aria-label={`View ${title} project`}
    >
      <article className="relative z-10 flex h-full min-h-[410px] flex-col overflow-hidden rounded-[1.75rem] p-6">
        <div className={cn("absolute inset-x-0 top-0 h-44 bg-gradient-to-br opacity-70 blur-2xl", accent)} />
        <div className="absolute right-6 top-6 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/[0.16] bg-white/[0.08] text-white backdrop-blur-2xl">
          <ArrowUpRight size={18} aria-hidden="true" />
        </div>
        <div className="relative z-10 mb-7 h-44 overflow-hidden rounded-[1.5rem] border border-white/[0.12] bg-black/[0.30] p-4 shadow-inner">
          <div className="h-full rounded-[1.15rem] border border-white/[0.12] bg-white/[0.055] p-4 backdrop-blur-2xl">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-white/[0.35]" />
              <span className="h-3 w-3 rounded-full bg-white/[0.20]" />
              <span className="h-3 w-3 rounded-full bg-white/[0.12]" />
            </div>
            <div className="mt-8 space-y-3">
              <div className="h-4 w-2/3 rounded-full bg-white/[0.24]" />
              <div className="h-3 w-11/12 rounded-full bg-white/[0.12]" />
              <div className="h-3 w-8/12 rounded-full bg-white/[0.10]" />
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="h-12 rounded-2xl bg-white/[0.10]" />
              <div className="h-12 rounded-2xl bg-white/[0.14]" />
              <div className="h-12 rounded-2xl bg-white/[0.08]" />
            </div>
          </div>
        </div>

        <Badge variant="outline" className="relative z-10 w-fit">
          {category}
        </Badge>
        <h3 className="relative z-10 mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
          {title}
        </h3>
        <p className="relative z-10 mt-4 flex-1 text-sm leading-7 text-white/[0.62]">{description}</p>

        <div className="relative z-10 mt-6 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/[0.10] bg-white/[0.055] px-3 py-1.5 text-xs font-medium text-white/[0.68]"
            >
              {item}
            </span>
          ))}
        </div>
      </article>
    </m.a>
  );
}

export default memo(ProjectCard);
