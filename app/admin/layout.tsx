import DashboardShell from "@/components/dashboard/DashboardShell";

const adminNavItems = [
  { label: "Overview", href: "/admin", icon: "dashboard" },
  { label: "Projects", href: "/admin/projects", icon: "projects" },
  { label: "Users", href: "/admin/users", icon: "users" },
  { label: "Orders", href: "/admin/orders", icon: "orders" },
  { label: "Messages", href: "/admin/messages", icon: "messages" },
  { label: "Tickets", href: "/admin/tickets", icon: "tickets" },
  { label: "Blog", href: "/admin/blog", icon: "blog" },
  { label: "Coupons", href: "/admin/coupons", icon: "coupons" }
] as const;

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell title="Admin Panel" navItems={[...adminNavItems]}>
      {children}
    </DashboardShell>
  );
}