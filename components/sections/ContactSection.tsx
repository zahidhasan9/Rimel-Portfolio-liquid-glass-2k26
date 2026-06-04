"use client";

import { useCallback, useMemo, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { m } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/profile";
import { itemVariants, listVariants } from "@/components/motion/variants";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const contactItems = useMemo(
    () => [
      { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
      { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: Phone },
      { label: "Location", value: profile.location, href: "#", icon: MapPin }
    ],
    []
  );

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = (await response.json()) as { message?: string };
      setStatus(response.ok ? "success" : "error");
      setMessage(data.message ?? (response.ok ? "Message submitted successfully." : "Something went wrong."));

      if (response.ok) form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }, []);

  return (
    <section className="py-16 sm:py-24" id="contact">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Ready to build a polished product interface?"
          description="Send a concise project brief. The form is API-ready and can be connected to MongoDB, Nodemailer, Resend, or your own backend later."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Card className="h-full p-6 sm:p-8">
              <div className="relative z-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/[0.40]">Reach me</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.055em] text-white sm:text-4xl">
                  {profile.availability}
                </h3>
                <p className="mt-5 text-base leading-8 text-white/[0.62]">
                  I usually work on portfolio websites, ecommerce stores, dashboards, and full-stack products where design quality and speed both matter.
                </p>

                <m.div
                  className="mt-8 grid gap-3"
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <>
                        <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/[0.12] bg-white/[0.07] text-white">
                          <Icon size={18} aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-xs uppercase tracking-[0.18em] text-white/[0.36]">{item.label}</span>
                          <span className="mt-1 block text-sm font-medium text-white">{item.value}</span>
                        </span>
                      </>
                    );

                    return item.href === "#" ? (
                      <m.div key={item.label} variants={itemVariants} className="flex items-center gap-4 rounded-[1.5rem] border border-white/[0.10] bg-white/[0.045] p-4">
                        {content}
                      </m.div>
                    ) : (
                      <m.a
                        key={item.label}
                        variants={itemVariants}
                        href={item.href}
                        className="flex items-center gap-4 rounded-[1.5rem] border border-white/[0.10] bg-white/[0.045] p-4 outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                        whileHover={{ x: 4, scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        {content}
                      </m.a>
                    );
                  })}
                </m.div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="p-6 sm:p-8">
              <form className="relative z-10 grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/[0.70]">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" required autoComplete="name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/[0.70]">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" />
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="mb-2 block text-sm font-medium text-white/[0.70]">
                    Budget / Scope
                  </label>
                  <Input id="budget" name="budget" placeholder="Portfolio, ecommerce, dashboard, or custom product" />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/[0.70]">
                    Project Message
                  </label>
                  <Textarea id="message" name="message" placeholder="Tell me what you want to build..." required />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button type="submit" size="lg" disabled={status === "loading"}>
                    {status === "loading" ? "Sending..." : "Send Message"}
                    <Send size={18} aria-hidden="true" />
                  </Button>
                  {message ? (
                    <p
                      role="status"
                      className={status === "success" ? "text-sm text-emerald-200" : "text-sm text-rose-200"}
                    >
                      {message}
                    </p>
                  ) : null}
                </div>
              </form>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
