"use client";

import { memo } from "react";
import { m } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/motion/Reveal";

function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <Badge variant="rainbow">{eyebrow}</Badge>
      <m.h2
        className="mt-5 text-balance text-3xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ type: "spring", stiffness: 120, damping: 22 }}
      >
        {title}
      </m.h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/[0.62] sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export default memo(SectionHeading);
