import type { Metadata } from "next";

import SignUpSection from "@/components/sections/SignUpSection";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new account."
};

export default function SignUpPage() {
  return (
    <>
      <div className="h-24" aria-hidden="true" />
      <SignUpSection />
    </>
  );
}