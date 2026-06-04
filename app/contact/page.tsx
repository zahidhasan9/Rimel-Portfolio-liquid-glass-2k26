import dynamic from "next/dynamic";
import SectionSkeleton from "@/components/common/SectionSkeleton";

const ContactSection = dynamic(() => import("@/components/sections/ContactSection"), {
  loading: () => <SectionSkeleton />
});

export default function ContactPage() {
  return (
    <>
      <div className="h-24" aria-hidden="true" />
      <ContactSection />
    </>
  );
}
