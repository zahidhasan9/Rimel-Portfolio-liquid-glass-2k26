"use client";

import { useMemo } from "react";
import { m } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ProjectCard from "@/components/cards/ProjectCard";
import { LinkButton } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { listVariants } from "@/components/motion/variants";

export default function ProjectsSection({ limit }: { limit?: number }) {
  const items = useMemo(
    () => (typeof limit === "number" ? projects.slice(0, limit) : projects),
    [limit]
  );

  return (
    <section className="py-16 sm:py-24" id="projects">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects with polished UI, clean architecture, and business intent."
          description="Each card is built as a reusable animated unit with staggered reveal, GPU-friendly transform motion, and glass layering."
        />

        <m.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {items.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </m.div>

        {limit ? (
          <div className="mt-10 flex justify-center">
            <LinkButton href="/projects" variant="secondary" size="lg">
              View All Projects
            </LinkButton>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
