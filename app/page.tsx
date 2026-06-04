import dynamic from "next/dynamic";
import SectionSkeleton from "@/components/common/SectionSkeleton";
import HeroSection from "@/components/sections/HeroSection";

const AboutSection = dynamic(() => import("@/components/sections/AboutSection"), {
  loading: () => <SectionSkeleton />
});
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection"), {
  loading: () => <SectionSkeleton />
});
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"), {
  loading: () => <SectionSkeleton />
});
const ResumeSection = dynamic(() => import("@/components/sections/ResumeSection"), {
  loading: () => <SectionSkeleton />
});
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"), {
  loading: () => <SectionSkeleton />
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection limit={3} />
      <ServicesSection />
      <ResumeSection />
      <ContactSection />
    </>
  );
}
