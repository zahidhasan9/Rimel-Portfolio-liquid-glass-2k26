import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/data/profile";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import SiteBackground from "@/components/layout/SiteBackground";
import MotionProvider from "@/components/motion/MotionProvider";
import PageTransition from "@/components/motion/PageTransition";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.headline,
  keywords: [
    "Portfolio",
    "Next.js",
    "MERN Developer",
    "Full Stack Developer",
    "React Developer",
    "Apple Liquid Glass UI"
  ],
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.headline,
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#03040a"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <MotionProvider>
          <SiteBackground />
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
