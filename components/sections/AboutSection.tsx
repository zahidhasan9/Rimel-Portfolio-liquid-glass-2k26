"use client";

import { useMemo } from "react";
import { m } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { itemVariants, listVariants } from "@/components/motion/variants";

export default function AboutSection() {
  const skillGroups = useMemo(
    () => [
      { title: "Frontend", items: skills.slice(0, 7) },
      { title: "Backend", items: skills.slice(7, 12) },
      { title: "Delivery", items: skills.slice(12) }
    ],
    []
  );

  return (
    <section className="py-16 sm:py-24" id="about">
      <Container>
        <SectionHeading
          eyebrow="Profile"
          title="A design-led full-stack developer with production discipline."
          description="The redesign keeps the portfolio content editable from data files while upgrading the visual system, motion language, and responsive hierarchy."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Card className="h-full p-6 sm:p-8">
              <div className="relative z-10">
                <Badge variant="outline">{profile.role}</Badge>
                <h3 className="mt-6 text-3xl font-semibold tracking-[-0.055em] text-white sm:text-4xl">
                  {profile.name}
                </h3>
                <p className="mt-5 text-base leading-8 text-white/[0.64]">{profile.summary}</p>

                <div className="mt-8 grid gap-3">
                  <div className="rounded-3xl border border-white/[0.10] bg-white/[0.045] p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/[0.38]">Location</p>
                    <p className="mt-1 font-medium text-white">{profile.location}</p>
                  </div>
                  <div className="rounded-3xl border border-white/[0.10] bg-white/[0.045] p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/[0.38]">Email</p>
                    <m.a
                      className="mt-1 block font-medium text-white underline decoration-white/[0.20] outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                      href={`mailto:${profile.email}`}
                      whileHover={{ x: 3, textDecorationColor: "rgba(255,255,255,0.72)" }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {profile.email}
                    </m.a>
                  </div>
                  <div className="rounded-3xl border border-white/[0.10] bg-white/[0.045] p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/[0.38]">Phone</p>
                    <m.a
                      className="mt-1 block font-medium text-white underline decoration-white/[0.20] outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                      href={`tel:${profile.phone.replace(/\s/g, "")}`}
                      whileHover={{ x: 3, textDecorationColor: "rgba(255,255,255,0.72)" }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {profile.phone}
                    </m.a>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="p-6 sm:p-8">
              <div className="relative z-10">
                <Badge variant="rainbow">Core Stack</Badge>
                <div className="mt-7 grid gap-5 md:grid-cols-3">
                  {skillGroups.map((group) => (
                    <div key={group.title} className="rounded-[1.7rem] border border-white/[0.10] bg-black/[0.20] p-4">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/[0.48]">
                        {group.title}
                      </h4>
                      <m.div
                        className="mt-4 flex flex-wrap gap-2"
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        {group.items.map((skill) => (
                          <m.span
                            key={skill}
                            variants={itemVariants}
                            className="rounded-full border border-white/[0.10] bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white/[0.70]"
                          >
                            {skill}
                          </m.span>
                        ))}
                      </m.div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {profile.stats.map((stat) => (
                    <div key={stat.label} className="rounded-[1.7rem] border border-white/[0.10] bg-white/[0.045] p-5">
                      <p className="text-3xl font-semibold tracking-[-0.05em] text-white">{stat.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/[0.42]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
