// import type { Metadata } from "next";
// import dynamic from "next/dynamic";

// import SectionSkeleton from "@/components/common/SectionSkeleton";
// import { profile } from "@/data/profile";

// const ResumePageSection = dynamic(
//   () => import("@/components/sections/ResumePageSection"),
//   {
//     loading: () => <SectionSkeleton />
//   }
// );

// export const metadata: Metadata = {
//   title: `Resume | ${profile.name}`,
//   description: `${profile.name}'s professional resume, experience, education, skills, and career highlights.`
// };

// export default function ResumePage() {
//   return (
//     <>
//       <div className="h-24" aria-hidden="true" />
//       <ResumePageSection />
//     </>
//   );
// }







import type { Metadata } from "next";
import dynamic from "next/dynamic";

import SectionSkeleton from "@/components/common/SectionSkeleton";
import { resumePage } from "@/data/resume";

const ResumePageSection = dynamic(
  () => import("@/components/sections/ResumePageSection"),
  {
    loading: () => <SectionSkeleton />
  }
);

export const metadata: Metadata = {
  title: `Resume | ${resumePage.name}`,
  description: `${resumePage.name}'s professional resume, experience, projects, skills, education, and contact information.`
};

export default function ResumePage() {
  return (
    <>
      <div className="h-24" aria-hidden="true" />
      <ResumePageSection />
    </>
  );
}