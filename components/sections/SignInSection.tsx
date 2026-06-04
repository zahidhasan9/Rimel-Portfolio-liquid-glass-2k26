"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";

import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SignInSection() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    setMessage("Sign in form is ready. Connect backend API later.");
  }

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-md">
          <Card className="relative overflow-hidden p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-8 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-white/[0.12] bg-white/[0.07] text-sky-100 shadow-glow">
                  <LockKeyhole size={24} aria-hidden="true" />
                </div>

                <h1 className="mt-5 text-3xl font-black tracking-[-0.05em] text-white">
                  Sign In
                </h1>

                <p className="mt-2 text-sm leading-6 text-white/[0.58]">
                  Welcome back. Sign in to continue.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-white/[0.72]"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/[0.36]" />

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-12"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-semibold text-white/[0.72]"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/[0.36]" />

                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-12 pr-12"
                      autoComplete="current-password"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((current) => !current)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/[0.46] transition hover:text-white"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <label className="flex items-center gap-2 text-sm text-white/[0.58]">
                    <input
                      type="checkbox"
                      name="remember"
                      className="h-4 w-4 rounded border-white/[0.18] bg-white/[0.08]"
                    />
                    Remember me
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-sm font-semibold text-sky-100 transition hover:text-white"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Sign In
                </Button>

                {message ? (
                  <p className="text-sm leading-6 text-rose-200">{message}</p>
                ) : null}
              </form>

              <p className="mt-8 text-center text-sm text-white/[0.58]">
                Do not have an account?{" "}
                <Link
                  href="/sign-up"
                  className="font-bold text-sky-100 transition hover:text-white"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}