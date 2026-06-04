import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.headline,
  keywords: ["Portfolio", "Next.js", "MERN Developer", "Full Stack Developer", "React Developer"],
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.headline,
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
