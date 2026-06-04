import dynamic from "next/dynamic";
import SectionSkeleton from "@/components/common/SectionSkeleton";

const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection"), {
  loading: () => <SectionSkeleton />
});

export default function ProjectsPage() {
  return (
    <>
      <div className="h-24" aria-hidden="true" />
      <ProjectsSection />
    </>
  );
}
