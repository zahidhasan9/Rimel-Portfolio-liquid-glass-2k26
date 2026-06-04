import dynamic from "next/dynamic";
import SectionSkeleton from "@/components/common/SectionSkeleton";

const AboutSection = dynamic(() => import("@/components/sections/AboutSection"), {
  loading: () => <SectionSkeleton />
});
const ResumeSection = dynamic(() => import("@/components/sections/ResumeSection"), {
  loading: () => <SectionSkeleton />
});

export default function AboutPage() {
  return (
    <>
      <div className="h-24" aria-hidden="true" />
      <AboutSection />
      <ResumeSection />
    </>
  );
}
