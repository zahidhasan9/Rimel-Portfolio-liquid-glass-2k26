import DashboardShell from "@/components/dashboard/DashboardShell";

const userNavItems = [
  { label: "Overview", href: "/dashboard", icon: "dashboard" },
  { label: "Profile", href: "/dashboard/profile", icon: "profile" },
  { label: "Purchases", href: "/dashboard/purchases", icon: "purchases" },
  { label: "Orders", href: "/dashboard/orders", icon: "orders" },
  { label: "Wishlist", href: "/dashboard/wishlist", icon: "wishlist" },
  { label: "Messages", href: "/dashboard/messages", icon: "messages" },
  { label: "Tickets", href: "/dashboard/tickets", icon: "tickets" }
] as const;

export default function UserDashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardShell title="User Dashboard" navItems={[...userNavItems]}>
      {children}
    </DashboardShell>
  );
}