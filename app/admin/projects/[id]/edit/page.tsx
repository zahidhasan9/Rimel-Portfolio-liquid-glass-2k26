import DashboardPage from "@/components/dashboard/DashboardPage";

type EditProjectPageProps = {
  params: {
    id: string;
  };
};

export default function EditProjectPage({ params }: EditProjectPageProps) {
  return (
    <DashboardPage
      title={`Edit Project #${params.id}`}
      description="Update project information. Backend data will be loaded later."
    />
  );
}