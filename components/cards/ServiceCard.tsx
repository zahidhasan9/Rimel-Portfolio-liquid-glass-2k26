"use client";

import { memo } from "react";
import type { LucideIcon } from "lucide-react";
import { m } from "framer-motion";
import { itemVariants, microSpring } from "@/components/motion/variants";

function ServiceCard({
  title,
  description,
  icon: Icon
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <m.article
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.012 }}
      whileTap={{ scale: 0.99 }}
      transition={microSpring}
      className="glass-surface group rounded-[2rem] p-6"
    >
      <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border border-white/[0.16] bg-white/[0.07] text-white shadow-glow backdrop-blur-2xl">
        <Icon size={24} aria-hidden="true" />
      </div>
      <h3 className="relative z-10 mt-7 text-xl font-semibold tracking-[-0.035em] text-white">
        {title}
      </h3>
      <p className="relative z-10 mt-3 text-sm leading-7 text-white/[0.62]">{description}</p>
    </m.article>
  );
}

export default memo(ServiceCard);
