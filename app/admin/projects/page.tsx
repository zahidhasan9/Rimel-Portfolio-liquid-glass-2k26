import Link from "next/link";
import DashboardPage from "@/components/dashboard/DashboardPage";

export default function AdminProjectsPage() {
  return (
    <DashboardPage
      title="Projects"
      description="Manage all portfolio, marketplace, or ecommerce project items."
    >
      <Link
        href="/admin/projects/new"
        className="inline-flex rounded-full border border-sky-300/30 bg-sky-300/15 px-5 py-3 text-sm font-bold text-sky-50 transition hover:bg-sky-300/20"
      >
        Add New Project
      </Link>
    </DashboardPage>
  );
}