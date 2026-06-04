"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export default function ContactSection() {
  const [status, setStatus] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    setStatus(response.ok ? "Message submitted successfully." : "Something went wrong.");
    event.currentTarget.reset();
  }

  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow="Contact" title="Let’s build something polished." description="Use the form or update the email in data/profile.ts for your real contact details." />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="dark-surface p-8 text-white">
            <p className="text-sm uppercase tracking-[0.28em] text-white/40">Reach me</p>
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">{profile.email}</h3>
            <p className="mt-5 text-sm leading-7 text-white/55">{profile.availability}. I usually work on portfolio websites, ecommerce stores, dashboards, and full-stack products.</p>
            <div className="mt-8 space-y-3 text-sm text-white/60">
              <p>Location: {profile.location}</p>
              <p>Phone: {profile.phone}</p>
            </div>
          </Card>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input name="name" placeholder="Your name" required />
                <Input name="email" type="email" placeholder="Email address" required />
              </div>
              <Input name="subject" placeholder="Project subject" required />
              <Textarea name="message" placeholder="Tell me about your project" required />
              <Button type="submit" size="lg">Send Message</Button>
              {status ? <p className="text-sm text-zinc-500">{status}</p> : null}
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
