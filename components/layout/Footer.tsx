"use client";

import { m } from "framer-motion";
import Container from "@/components/common/Container";
import { microSpring } from "@/components/motion/variants";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="relative py-10 sm:py-14">
      <Container>
        <div className="glass-surface flex flex-col gap-5 rounded-[2rem] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative z-10">
            <p className="text-sm font-semibold text-white">{profile.name}</p>
            <p className="mt-1 text-sm text-white/[0.52]">
              © {new Date().getFullYear()} Liquid Glass portfolio. All rights reserved.
            </p>
          </div>
          <div className="relative z-10 flex flex-wrap gap-3">
            {profile.socials.map((social) => (
              <m.a
                key={social.label}
                href={social.href}
                className="rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-sm text-white/[0.70] outline-none backdrop-blur-xl focus-visible:ring-2 focus-visible:ring-sky-300"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2, color: "#ffffff", borderColor: "rgba(255,255,255,0.28)" }}
                whileTap={{ scale: 0.98 }}
                transition={microSpring}
              >
                {social.label}
              </m.a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
