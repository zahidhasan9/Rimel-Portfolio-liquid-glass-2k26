import { Badge } from "@/components/ui/badge";

export default function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <Badge variant="outline" className="mb-5">{eyebrow}</Badge>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-zinc-500 sm:text-lg">{description}</p> : null}
    </div>
  );
}
