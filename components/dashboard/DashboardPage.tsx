import { LucideIcon } from "lucide-react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import { Card } from "@/components/ui/card";

type StatItem = {
  title: string;
  value: string;
  description?: string;
  icon: LucideIcon;
};

type DashboardPageProps = {
  title: string;
  description: string;
  stats?: StatItem[];
  children?: React.ReactNode;
};

export default function DashboardPage({
  title,
  description,
  stats = [],
  children
}: DashboardPageProps) {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/[0.56]">
          {description}
        </p>
      </div>

      {stats.length ? (
        <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <DashboardCard key={item.title} {...item} />
          ))}
        </div>
      ) : null}

      <Card className="p-6">
        {children ?? (
          <p className="text-sm leading-7 text-white/[0.56]">
            Content will be connected with backend API later.
          </p>
        )}
      </Card>
    </div>
  );
}