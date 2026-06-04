import dynamic from "next/dynamic";
import SectionSkeleton from "@/components/common/SectionSkeleton";

const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"), {
  loading: () => <SectionSkeleton />
});

export default function ServicesPage() {
  return (
    <>
      <div className="h-24" aria-hidden="true" />
      <ServicesSection />
    </>
  );
}
