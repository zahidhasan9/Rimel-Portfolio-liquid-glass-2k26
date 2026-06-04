import { Card } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

export default function ServiceCard({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) {
  return (
    <Card className="p-7 transition duration-300 hover:-translate-y-2 hover:shadow-glow">
      <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white shadow-soft">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-zinc-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-500">{description}</p>
    </Card>
  );
}
