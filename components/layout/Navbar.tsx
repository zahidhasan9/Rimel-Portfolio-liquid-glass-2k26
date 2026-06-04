"use client";

import { memo, useCallback, useMemo, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { Button, LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { microSpring } from "@/components/motion/variants";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const initials = useMemo(
    () =>
      profile.name
        .split(" ")
        .map((item) => item[0])
        .slice(0, 2)
        .join(""),
    []
  );

  const closeMenu = useCallback(() => setOpen(false), []);
  const toggleMenu = useCallback(() => setOpen((value) => !value), []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-5">
      <m.nav
        initial={{ opacity: 0, y: -22, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 130, damping: 22 }}
        className="glass-surface mx-auto flex max-w-7xl items-center justify-between rounded-full px-3 py-3 sm:px-4"
        aria-label="Main navigation"
      >
        <m.a
          href="/"
          onClick={closeMenu}
          className="relative z-10 flex items-center gap-3 rounded-full pr-3 outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={microSpring}
          aria-label={`${profile.name} home`}
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-black text-zinc-950 shadow-glow">
            {initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-[-0.02em] text-white sm:block">
            {profile.name}
          </span>
        </m.a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <m.a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-sky-300",
                  active ? "text-zinc-950" : "text-white/[0.72]"
                )}
                whileHover={{ y: -1, color: active ? "#09090b" : "#ffffff" }}
                whileTap={{ scale: 0.97 }}
                transition={microSpring}
              >
                {active ? (
                  <m.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white shadow-glow"
                    transition={microSpring}
                  />
                ) : null}
                {link.label}
              </m.a>
            );
          })}
        </div>

        <div className="relative z-10 hidden md:block">
          <LinkButton href="/contact" size="sm" aria-label="Hire me through contact page">
            Hire Me
          </LinkButton>
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="relative z-10 md:hidden"
          onClick={toggleMenu}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </Button>
      </m.nav>

      <AnimatePresence>
        {open ? (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={microSpring}
            className="glass-surface mx-auto mt-3 grid max-w-7xl gap-2 rounded-[2rem] p-3 md:hidden"
          >
            {links.map((link) => (
              <m.a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-sky-300",
                  pathname === link.href ? "bg-white text-zinc-950" : "text-white/[0.76]"
                )}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                transition={microSpring}
              >
                {link.label}
              </m.a>
            ))}
          </m.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default memo(Navbar);
