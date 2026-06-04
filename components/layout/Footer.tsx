import Link from "next/link";
import Container from "@/components/common/Container";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white/60 py-10 backdrop-blur-xl">
      <Container className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm font-semibold text-zinc-950">{profile.name}</p>
          <p className="mt-1 text-sm text-zinc-500">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex gap-4 text-sm text-zinc-500">
          {profile.socials.map((social) => (
            <Link key={social.label} href={social.href} className="transition hover:text-zinc-950">
              {social.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
