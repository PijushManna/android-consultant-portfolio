import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Github,
  Linkedin,
  Play,
  Smartphone,
  Zap,
  TrendingUp,
  Code2,
  Star,
  Users,
  Package,
  ChevronRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Badge from "@/components/ui/Badge";
import { PERSONAL, SKILLS, SERVICES, CASE_STUDIES } from "@/data";

export const metadata: Metadata = {
  title: "Senior Android Consultant – Kotlin, Jetpack Compose, Firebase",
  description:
    "Pijush Manna – Senior Android Consultant with 7+ years building apps for 130M+ users. Specializing in Kotlin, Jetpack Compose, Firebase, and Clean Architecture.",
};

const STATS = [
  { value: PERSONAL.experience, label: "Years Experience", icon: Star },
  { value: PERSONAL.usersImpacted, label: "Users Impacted", icon: Users },
  { value: PERSONAL.appsShipped, label: "Apps Shipped", icon: Package },
  { value: "95+", label: "Lighthouse Score", icon: Zap },
];

const FEATURE_SKILLS = [
  "Kotlin",
  "Jetpack Compose",
  "Firebase",
  "MVVM / MVI",
  "Clean Architecture",
  "Performance Optimization",
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Status badge */}
          <AnimatedSection delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for new projects
            </div>
          </AnimatedSection>

          {/* Headline */}
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Senior Android{" "}
              <span className="gradient-text">Consultant</span>
            </h1>
          </AnimatedSection>

          {/* Subheadline */}
          <AnimatedSection delay={0.2}>
            <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              Building scalable Android applications with{" "}
              <span className="text-white font-medium">Kotlin</span>,{" "}
              <span className="text-white font-medium">Jetpack Compose</span>,{" "}
              <span className="text-white font-medium">Firebase</span>, and
              modern architecture. {PERSONAL.experience} years · {PERSONAL.usersImpacted} users impacted.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-hover transition-colors shadow-glow"
              >
                View Case Studies
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-white font-semibold hover:bg-surface hover:border-border-hover transition-colors"
              >
                Hire Me
              </Link>
            </div>
          </AnimatedSection>

          {/* Skill Pills */}
          <AnimatedSection delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {FEATURE_SKILLS.map((skill) => (
                <Badge key={skill} variant="default">
                  {skill}
                </Badge>
              ))}
            </div>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection delay={0.5}>
            <div className="flex items-center justify-center gap-4">
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted hover:text-white text-sm transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <span className="text-border">·</span>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted hover:text-white text-sm transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <span className="text-border">·</span>
              <a
                href={PERSONAL.playstore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted hover:text-white text-sm transition-colors"
              >
                <Play className="w-4 h-4" />
                Play Store
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-xs animate-bounce">
          <span>Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
            {STATS.map(({ value, label, icon: Icon }, i) => (
              <AnimatedSection key={label} delay={i * 0.1}>
                <div className="bg-surface p-8 text-center hover:bg-surface-2 transition-colors">
                  <Icon className="w-5 h-5 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{value}</div>
                  <div className="text-muted text-sm">{label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <p className="text-muted text-sm font-medium uppercase tracking-widest mb-8">
              Worked at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {PERSONAL.companies.map((company) => (
                <span
                  key={company}
                  className="text-xl font-bold text-muted-foreground hover:text-white transition-colors"
                >
                  {company}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="mb-12">
              <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
                What I Do
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                End-to-end Android expertise
              </h2>
              <p className="text-muted max-w-xl">
                From greenfield MVPs to performance audits on 130M-user apps —
                I deliver production-quality Android solutions.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: Smartphone,
                title: "App Development",
                desc: "Full-stack Android apps with Kotlin + Compose, architected for scale from day one.",
              },
              {
                icon: TrendingUp,
                title: "Performance Optimization",
                desc: "Diagnose ANRs, memory leaks, and janky scrolling. Deliver measurable improvements.",
              },
              {
                icon: Code2,
                title: "Architecture & Code Review",
                desc: "Clean Architecture, MVVM/MVI, modularization, and DI setup that teams love working with.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="p-6 rounded-xl border border-border bg-surface card-hover h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
                  Services
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  How I can help
                </h2>
              </div>
              <Link
                href="/services"
                className="hidden sm:flex items-center gap-1 text-sm text-muted hover:text-white transition-colors"
              >
                All Services <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.slice(0, 6).map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.05}>
                <Link
                  href={`/services#${service.id}`}
                  className="block p-5 rounded-xl border border-border bg-surface card-hover h-full group"
                >
                  <h3 className="text-white font-medium mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1 mt-4 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-8 text-center sm:hidden">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
            >
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 border-t border-border bg-surface/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
                  Case Studies
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Real problems, real solutions
                </h2>
              </div>
              <Link
                href="/case-studies"
                className="hidden sm:flex items-center gap-1 text-sm text-muted hover:text-white transition-colors"
              >
                All Case Studies <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASE_STUDIES.slice(0, 2).map((cs, i) => (
              <AnimatedSection key={cs.id} delay={i * 0.1}>
                <Link
                  href={`/case-studies#${cs.id}`}
                  className="block p-6 rounded-xl border border-border bg-surface card-hover h-full group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="primary">{cs.role}</Badge>
                    <span className="text-muted text-xs">{cs.duration}</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {cs.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.tags.map((tag) => (
                      <Badge key={tag} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="mb-12">
              <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
                Tech Stack
              </p>
              <h2 className="text-3xl font-bold text-white">Skills & Technologies</h2>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill, i) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg border border-border bg-surface text-sm text-muted-foreground hover:border-primary/40 hover:text-white hover:bg-primary/5 transition-all cursor-default"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
