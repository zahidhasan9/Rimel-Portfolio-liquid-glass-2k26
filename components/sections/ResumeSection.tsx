"use client";

import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { m } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { Card } from "@/components/ui/card";
import { education, experience } from "@/data/resume";
import { itemVariants, listVariants } from "@/components/motion/variants";

export type EducationItem = {
  degree: string;
  institute: string;
  period: string;
};


export default function ResumeSection() {
  return (
    <section className="py-16 sm:py-24" id="resume">
      <Container>
        <SectionHeading
          eyebrow="Resume"
          title="Experience organized for fast scanning."
          description="The resume section uses timeline cards, compact metadata, and accessible headings that work across all device sizes."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="p-6 sm:p-8">
              <div className="relative z-10 mb-7 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/[0.12] bg-white/[0.07]">
                  <BriefcaseBusiness size={21} aria-hidden="true" />
                </span>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">Experience</h3>
              </div>
              <m.div
                className="relative z-10 space-y-4"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {experience.map((item) => (
                  <m.article key={`${item.role}-${item.period}`} variants={itemVariants} className="rounded-[1.6rem] border border-white/[0.10] bg-white/[0.045] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.38]">{item.period}</p>
                    <h4 className="mt-3 text-lg font-semibold text-white">{item.role}</h4>
                    <p className="mt-1 text-sm text-sky-100/[0.70]">{item.company}</p>
                    <p className="mt-3 text-sm leading-7 text-white/[0.58]">{item.description}</p>
                  </m.article>
                ))}
              </m.div>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="p-6 sm:p-8">
              <div className="relative z-10 mb-7 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/[0.12] bg-white/[0.07]">
                  <GraduationCap size={22} aria-hidden="true" />
                </span>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">Education</h3>
              </div>
              <m.div
                className="relative z-10 space-y-4"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {(education as EducationItem[]).map((item) => (
                  <m.article key={`${item.degree}-${item.period}`} variants={itemVariants} className="rounded-[1.6rem] border border-white/[0.10] bg-white/[0.045] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.38]">{item.period}</p>
                    <h4 className="mt-3 text-lg font-semibold text-white">{item.degree}</h4>
                    <p className="mt-1 text-sm text-white/[0.58]">{item.institute}</p>
                  </m.article>
                ))}
              </m.div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
