import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  href: string;
  accent: string;
};

export default function ProjectCard({ title, category, description, stack, href, accent }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden p-4 transition duration-300 hover:-translate-y-2 hover:shadow-glow">
      <div className={`relative h-48 rounded-[1.5rem] bg-gradient-to-br ${accent} p-6 text-white`}>
        <div className="absolute inset-0 bg-hero-grid bg-[size:28px_28px] opacity-30" />
        <div className="relative flex h-full flex-col justify-between">
          <Badge className="w-fit bg-white/20 text-white backdrop-blur-xl">{category}</Badge>
          <div>
            <p className="text-sm text-white/70">Featured Project</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">{title}</h3>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm leading-6 text-zinc-500">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((item) => <Badge key={item} variant="soft">{item}</Badge>)}
        </div>
        <Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-950">
          View case study <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </Card>
  );
}
