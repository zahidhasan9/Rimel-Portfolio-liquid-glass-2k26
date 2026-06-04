import Link from "next/link";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

export default function ProjectsSection({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? projects.slice(0, limit) : projects;
  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow="Selected Work" title="Projects that feel polished from first click." description="Modern UI, clean architecture, and scalable frontend/backend foundations." />
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((project) => <ProjectCard key={project.title} {...project} />)}
        </div>
        {limit ? (
          <div className="mt-10 text-center">
            <Button asChild variant="outline"><Link href="/projects">View All Projects</Link></Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
