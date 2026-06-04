import { MessageSquare, PackageCheck, Ticket, UsersRound } from "lucide-react";
import DashboardPage from "@/components/dashboard/DashboardPage";

export default function AdminPage() {
  return (
    <DashboardPage
      title="Admin Overview"
      description="Monitor users, projects, orders, messages, tickets, and platform activity."
      stats={[
        { title: "Users", value: "248", description: "Registered users", icon: UsersRound },
        { title: "Orders", value: "92", description: "Total orders", icon: PackageCheck },
        { title: "Messages", value: "17", description: "Unread messages", icon: MessageSquare },
        { title: "Tickets", value: "06", description: "Open tickets", icon: Ticket }
      ]}
    />
  );
}