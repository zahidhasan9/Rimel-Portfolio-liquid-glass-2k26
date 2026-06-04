import { Heart, MessageSquare, PackageCheck, ShoppingBag } from "lucide-react";
import DashboardPage from "@/components/dashboard/DashboardPage";

export default function DashboardPageRoute() {
  return (
    <DashboardPage
      title="Dashboard Overview"
      description="Track your orders, purchases, wishlist, messages, and support tickets."
      stats={[
        { title: "Orders", value: "12", description: "Total orders", icon: PackageCheck },
        { title: "Purchases", value: "08", description: "Completed purchases", icon: ShoppingBag },
        { title: "Wishlist", value: "05", description: "Saved items", icon: Heart },
        { title: "Messages", value: "03", description: "Unread messages", icon: MessageSquare }
      ]}
    />
  );
}