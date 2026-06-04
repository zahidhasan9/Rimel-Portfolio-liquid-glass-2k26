import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { Card } from "@/components/ui/card";
import { education, experience } from "@/data/resume";

export default function ResumeSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow="Resume" title="Experience shaped by practical builds." />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">Experience</h3>
            <div className="mt-8 space-y-8">
              {experience.map((item) => (
                <div key={item.role} className="border-l border-zinc-200 pl-6">
                  <p className="text-sm text-zinc-400">{item.period}</p>
                  <h4 className="mt-2 text-lg font-semibold text-zinc-950">{item.role}</h4>
                  <p className="text-sm text-zinc-500">{item.company}</p>
                  <p className="mt-3 text-sm leading-6 text-zinc-500">{item.description}</p>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">Education</h3>
            <div className="mt-8 space-y-8">
              {education.map((item) => (
                <div key={item.degree} className="border-l border-zinc-200 pl-6">
                  <p className="text-sm text-zinc-400">{item.period}</p>
                  <h4 className="mt-2 text-lg font-semibold text-zinc-950">{item.degree}</h4>
                  <p className="text-sm text-zinc-500">{item.institute}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
