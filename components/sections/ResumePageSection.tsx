"use client";

import Link from "next/link";
import {
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Sparkles,
  UserRound
} from "lucide-react";
import { m, type Variants } from "framer-motion";

import Container from "@/components/common/Container";
import Reveal from "@/components/motion/Reveal";
import { Card } from "@/components/ui/card";
import { resumePage } from "@/data/resume";

const listVariants: Variants = {
  hidden: {
    opacity: 1
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.985
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 22,
      mass: 0.7
    }
  }
};

const contactIcons = {
  Phone,
  Email: Mail,
  LinkedIn: Linkedin,
  Location: MapPin
};

function SectionTitle({
  icon: Icon,
  title
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/[0.12] bg-white/[0.07] text-sky-100">
        <Icon size={20} aria-hidden="true" />
      </span>

      <h2 className="text-xl font-black uppercase tracking-[0.16em] text-white">
        {title}
      </h2>
    </div>
  );
}

function SmallPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/[0.10] bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white/[0.72]">
      {children}
    </span>
  );
}

export default function ResumePageSection() {
  return (
    <main className="relative overflow-hidden pb-24">
      <section className="py-10 sm:py-14 lg:py-20">
        <Container>
          <Reveal>
            <div className="mb-8 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-sky-100">
                <Sparkles size={14} />
                Online Resume
              </span>

              <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
                Complete Professional Resume
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/[0.58] sm:text-base">
                A full resume page with objective, experience, projects, skills,
                education, languages, and professional links.
              </p>

              <a
                href={resumePage.downloadCv}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-sky-300/30 bg-sky-300/15 px-6 py-3 text-sm font-bold text-sky-50 shadow-glow transition hover:bg-sky-300/20"
              >
                <Download size={17} />
                Download CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <article className="mx-auto max-w-6xl rounded-[2.3rem] border border-white/[0.12] bg-white/[0.055] p-5 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-8 lg:p-10">
              <header className="grid gap-6 border-b border-white/[0.10] pb-8 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  
                  
                  <div className="grid h-28 w-28 shrink-0 place-items-center rounded-[2rem] border border-white/[0.14] bg-gradient-to-br from-sky-300/25 via-white/[0.08] to-fuchsia-400/20 text-4xl font-black text-white shadow-glow">
                    JH
                  </div>

                  {/* <img
                    src="/images/rimel.jpg"
                    alt="Jahid Hasan Rimel"
                    className="h-28 w-28 shrink-0 rounded-[2rem] border border-white/[0.14] object-cover shadow-glow"
                  /> */}

                  <div>
                    <p className="mb-3 inline-flex rounded-full border border-white/[0.10] bg-white/[0.06] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white/[0.54]">
                      MERN Developer
                    </p>

                    <h2 className="text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                      {resumePage.name}
                    </h2>

                    <p className="mt-3 text-lg font-semibold text-sky-100/[0.78]">
                      {resumePage.role}
                    </p>
                  </div>
                </div>

                <div className="grid gap-3">
                  {resumePage.contacts.map((item) => {
                    const Icon =
                      contactIcons[item.label as keyof typeof contactIcons] ??
                      UserRound;

                    const content = (
                      <span className="flex items-start gap-3 rounded-2xl border border-white/[0.10] bg-black/20 p-3 text-sm text-white/[0.70] transition hover:bg-white/[0.06]">
                        <Icon
                          className="mt-0.5 shrink-0 text-sky-100"
                          size={17}
                          aria-hidden="true"
                        />
                        <span>
                          <span className="block text-xs uppercase tracking-[0.16em] text-white/[0.36]">
                            {item.label}
                          </span>
                          <span className="mt-0.5 block break-all">
                            {item.value}
                          </span>
                        </span>
                      </span>
                    );

                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    );
                  })}
                </div>
              </header>

              <section className="border-b border-white/[0.10] py-8">
                <SectionTitle icon={UserRound} title="Objective" />

                <p className="text-base leading-8 text-white/[0.66]">
                  {resumePage.objective}
                </p>
              </section>

              <div className="grid gap-8 pt-8 lg:grid-cols-[1.55fr_0.85fr]">
                <div className="space-y-10">
                  <section>
                    <SectionTitle
                      icon={BriefcaseBusiness}
                      title="Work Experiences"
                    />

                    <m.div
                      variants={listVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.18 }}
                      className="space-y-5"
                    >
                      {resumePage.workExperiences.map((item) => (
                        <m.article
                          key={`${item.title}-${item.period}`}
                          variants={itemVariants}
                          className="rounded-[1.7rem] border border-white/[0.10] bg-white/[0.045] p-5"
                        >
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <h3 className="text-lg font-black tracking-[-0.03em] text-white">
                                {item.title}
                              </h3>

                              <p className="mt-1 text-sm font-semibold text-sky-100/[0.70]">
                                {item.organization}
                              </p>
                            </div>

                            <span className="rounded-full border border-white/[0.10] bg-white/[0.055] px-3 py-1.5 text-xs font-bold text-white/[0.46]">
                              {item.period}
                            </span>
                          </div>

                          {item.description ? (
                            <p className="mt-4 text-sm leading-7 text-white/[0.58]">
                              {item.description}
                            </p>
                          ) : null}

                          {item.points?.length ? (
                            <ul className="mt-4 space-y-2.5">
                              {item.points.map((point) => (
                                <li
                                  key={point}
                                  className="flex gap-3 text-sm leading-6 text-white/[0.64]"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-200" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </m.article>
                      ))}
                    </m.div>
                  </section>

                  <section>
                    <SectionTitle icon={Rocket} title="Projects" />

                    <m.div
                      variants={listVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.18 }}
                      className="space-y-5"
                    >
                      {resumePage.projects.map((project) => (
                        <m.article
                          key={project.title}
                          variants={itemVariants}
                          className="rounded-[1.7rem] border border-white/[0.10] bg-white/[0.045] p-5"
                        >
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <h3 className="text-lg font-black tracking-[-0.03em] text-white">
                              {project.title}
                            </h3>

                            <SmallPill>{project.type}</SmallPill>
                          </div>

                          <p className="mt-4 text-sm leading-7 text-white/[0.58]">
                            {project.description}
                          </p>

                          <ul className="mt-4 space-y-2.5">
                            {project.points.map((point) => (
                              <li
                                key={point}
                                className="flex gap-3 text-sm leading-6 text-white/[0.64]"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-200" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </m.article>
                      ))}
                    </m.div>
                  </section>
                </div>

                <aside className="space-y-8">
                  <Card className="p-6">
                    <SectionTitle icon={Sparkles} title="Skills" />

                    <div className="space-y-6">
                      {resumePage.skillGroups.map((group) => (
                        <div key={group.title}>
                          <h3 className="mb-3 text-base font-black tracking-[-0.03em] text-white">
                            {group.title}
                          </h3>

                          <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                              <SmallPill key={skill}>{skill}</SmallPill>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-6">
                    <SectionTitle icon={GraduationCap} title="Education" />

                    <div className="space-y-4">
                      {resumePage.education.map((item) => (
                        <div
                          key={`${item.degree}-${item.period}`}
                          className="rounded-[1.5rem] border border-white/[0.10] bg-white/[0.045] p-4"
                        >
                          <h3 className="text-base font-black text-white">
                            {item.degree}
                          </h3>

                          <p className="mt-2 text-sm text-white/[0.58]">
                            {item.institute}
                          </p>

                          {item.result ? (
                            <p className="mt-2 text-sm font-semibold text-sky-100/[0.72]">
                              {item.result}
                            </p>
                          ) : null}

                          <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-white/[0.38]">
                            {item.period}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-6">
                    <SectionTitle icon={Languages} title="Languages" />

                    <div className="flex flex-wrap gap-2">
                      {resumePage.languages.map((language) => (
                        <SmallPill key={language}>{language}</SmallPill>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-6">
                    <SectionTitle icon={ExternalLink} title="Social Links" />

                    <div className="space-y-3">
                      {resumePage.socials.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-between rounded-2xl border border-white/[0.10] bg-white/[0.045] px-4 py-3 text-sm font-semibold text-white/[0.70] transition hover:bg-white/[0.08] hover:text-white"
                        >
                          <span className="flex items-center gap-2">
                            {item.label === "GitHub" ? (
                              <Github size={17} />
                            ) : item.label === "LinkedIn" ? (
                              <Linkedin size={17} />
                            ) : (
                              <ExternalLink size={17} />
                            )}
                            {item.label}
                          </span>

                          <ExternalLink size={15} />
                        </Link>
                      ))}
                    </div>
                  </Card>
                </aside>
              </div>
            </article>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}