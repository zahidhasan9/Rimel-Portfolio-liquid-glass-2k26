import type { Metadata } from "next";

import SignInSection from "@/components/sections/SignInSection";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to access your account."
};

export default function SignInPage() {
  return (
    <>
      <div className="h-24" aria-hidden="true" />
      <SignInSection />
    </>
  );
}