import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

type DashboardCardProps = {
  title: string;
  value: string;
  description?: string;
  icon: LucideIcon;
};

export default function DashboardCard({
  title,
  value,
  description,
  icon: Icon
}: DashboardCardProps) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-white/[0.52]">{title}</p>
          <h3 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white">
            {value}
          </h3>
          {description ? (
            <p className="mt-2 text-sm text-white/[0.46]">{description}</p>
          ) : null}
        </div>

        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/[0.12] bg-white/[0.07] text-sky-100">
          <Icon size={20} />
        </div>
      </div>
    </Card>
  );
}