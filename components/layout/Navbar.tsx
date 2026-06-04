import Link from "next/link";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 apple-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-zinc-950 text-sm font-semibold text-white shadow-soft">
            {profile.name.split(" ").map((item) => item[0]).slice(0, 2).join("")}
          </span>
          <span className="hidden text-sm font-semibold text-zinc-950 sm:block">{profile.name}</span>
        </Link>
        <div className="hidden items-center gap-1 rounded-full border border-zinc-200 bg-white/60 p-1 backdrop-blur-xl md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-950 hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
        <Button asChild size="sm">
          <Link href="/contact">Hire Me</Link>
        </Button>
      </nav>
    </header>
  );
}
