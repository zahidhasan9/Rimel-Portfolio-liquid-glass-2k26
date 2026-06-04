import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";

export default function AboutSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow="About" title="Clean design. Strong engineering. Business-ready delivery." description="A portfolio built around clarity, polish, and maintainable architecture." />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-zinc-400">Profile</p>
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-zinc-950">{profile.role}</h3>
            <p className="mt-5 text-base leading-8 text-zinc-500">{profile.summary}</p>
            <div className="mt-8 grid gap-4 text-sm text-zinc-600 sm:grid-cols-2">
              <div><span className="text-zinc-400">Location</span><br />{profile.location}</div>
              <div><span className="text-zinc-400">Email</span><br />{profile.email}</div>
            </div>
          </Card>
          <Card className="p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-zinc-400">Core Stack</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => <Badge key={skill} variant="outline" className="px-4 py-2 text-sm">{skill}</Badge>)}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
