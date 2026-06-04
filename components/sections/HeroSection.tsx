import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { profile } from "@/data/profile";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,1),rgba(229,231,235,0.92),transparent_72%)]" />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <Badge variant="outline" className="mb-6 gap-2">
              <Sparkles className="h-3.5 w-3.5" /> {profile.availability}
            </Badge>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.07em] text-zinc-950 sm:text-7xl lg:text-8xl">
              Premium web experiences, engineered with precision.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-500 sm:text-xl">
              {profile.headline}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/projects">Explore Work <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Start a Project</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-white via-zinc-200 to-zinc-400 opacity-70 blur-3xl" />
            <Card className="relative overflow-hidden p-5">
              <div className="dark-surface rounded-[2rem] p-6 text-white shadow-glow">
                <div className="mb-10 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/50">Developer Card</p>
                    <h2 className="mt-1 text-2xl font-semibold">{profile.name}</h2>
                  </div>
                  <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-xl" />
                </div>
                <p className="max-w-sm text-sm leading-6 text-white/65">{profile.summary}</p>
                <div className="mt-10 grid grid-cols-3 gap-3">
                  {profile.stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                      <p className="text-2xl font-semibold">{stat.value}</p>
                      <p className="mt-1 text-xs text-white/50">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
