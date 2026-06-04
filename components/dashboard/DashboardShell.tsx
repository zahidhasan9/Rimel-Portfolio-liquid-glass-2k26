"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FileText,
  Heart,
  LayoutDashboard,
  MessageSquare,
  PackageCheck,
  Percent,
  ShoppingBag,
  Ticket,
  UserRound,
  UsersRound,
  Workflow
} from "lucide-react";

import Container from "@/components/common/Container";
import { cn } from "@/lib/utils";

type IconName =
  | "dashboard"
  | "profile"
  | "purchases"
  | "orders"
  | "wishlist"
  | "messages"
  | "tickets"
  | "projects"
  | "users"
  | "blog"
  | "coupons";

type NavItem = {
  label: string;
  href: string;
  icon: IconName;
};

type DashboardShellProps = {
  title: string;
  navItems: NavItem[];
  children: React.ReactNode;
};

const icons = {
  dashboard: LayoutDashboard,
  profile: UserRound,
  purchases: ShoppingBag,
  orders: PackageCheck,
  wishlist: Heart,
  messages: MessageSquare,
  tickets: Ticket,
  projects: Workflow,
  users: UsersRound,
  blog: FileText,
  coupons: Percent
};

export default function DashboardShell({
  title,
  navItems,
  children
}: DashboardShellProps) {
  const pathname = usePathname();

  return (
    <section className="min-h-screen py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-[2rem] border border-white/[0.12] bg-white/[0.055] p-4 backdrop-blur-2xl">
            <h2 className="mb-5 px-3 text-xl font-black tracking-[-0.04em] text-white">
              {title}
            </h2>

            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = icons[item.icon];
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition",
                      active
                        ? "bg-sky-300/15 text-sky-100"
                        : "text-white/[0.58] hover:bg-white/[0.07] hover:text-white"
                    )}
                  >
                    <Icon size={18} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </aside>

          <main className="min-w-0">{children}</main>
        </div>
      </Container>
    </section>
  );
}