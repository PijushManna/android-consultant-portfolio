import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Calendar, Briefcase, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Badge from "@/components/ui/Badge";
import { PERSONAL, SKILLS, EXPERIENCE } from "@/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Pijush Manna – Senior Android Consultant with 7+ years building production Android apps for companies like PocketFM, BigBasket, and ADP.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">
            About
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Building Android apps that{" "}
            <span className="gradient-text">actually scale</span>
          </h1>
        </AnimatedSection>

        {/* Intro */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            <div className="lg:col-span-2 space-y-4 text-muted leading-relaxed">
              <p className="text-lg text-muted-foreground">
                I&apos;m Pijush Manna, a Senior Android Consultant based in Bengaluru with{" "}
                <strong className="text-white">{PERSONAL.experience} years</strong> of experience
                building production-quality Android applications.
              </p>
              <p>
                My work spans the full Android delivery lifecycle — from greenfield
                architecture decisions to performance audits on apps with 130M+ users. I&apos;ve
                helped PocketFM, BigBasket, and ADP ship reliable, scalable mobile experiences
                that their users love.
              </p>
              <p>
                I care deeply about clean architecture, Kotlin idioms, and building systems
                that are maintainable long after the first release. When I take on a consulting
                engagement, I don&apos;t just write code — I think about your product, your
                team&apos;s ability to maintain it, and your users&apos; experience.
              </p>
              <p>
                Outside of client work, I build indie Android apps, contribute to open-source,
                and write about Android development. I&apos;ve published 10+ apps to the Play
                Store, collectively reaching thousands of users.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-border bg-surface">
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Quick Facts
                </h3>
                <ul className="space-y-3">
                  {[
                    { icon: MapPin, label: "Location", value: PERSONAL.location },
                    { icon: Calendar, label: "Experience", value: `${PERSONAL.experience} Years` },
                    { icon: Briefcase, label: "Users Impacted", value: PERSONAL.usersImpacted },
                  ].map(({ icon: Icon, label, value }) => (
                    <li key={label} className="flex items-center gap-3 text-sm">
                      <Icon className="w-4 h-4 text-muted flex-shrink-0" />
                      <span className="text-muted">{label}:</span>
                      <span className="text-white font-medium">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-border bg-surface">
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Companies
                </h3>
                <ul className="space-y-2">
                  {PERSONAL.companies.map((company) => (
                    <li key={company} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{company}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Experience Timeline */}
        <AnimatedSection delay={0.2}>
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8">Experience</h2>
            <div className="relative space-y-0">
              {EXPERIENCE.map((exp, i) => (
                <div key={exp.company} className="relative flex gap-6 pb-10 last:pb-0">
                  {/* Timeline line */}
                  {i < EXPERIENCE.length - 1 && (
                    <div className="absolute left-4 top-8 bottom-0 w-px bg-border" />
                  )}
                  {/* Dot */}
                  <div className="relative flex-shrink-0 w-8 h-8 rounded-full border border-border bg-surface flex items-center justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-white font-semibold">{exp.role}</h3>
                        <p className="text-primary text-sm font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                    <p className="text-muted text-sm mb-3">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="w-3 h-3 text-primary flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection delay={0.3}>
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg border border-border bg-surface text-sm text-muted-foreground hover:border-primary/40 hover:text-white hover:bg-primary/5 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* What makes me different */}
        <AnimatedSection delay={0.4}>
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8">
              Why work with me?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Product thinking",
                  desc: "I think beyond tickets. I understand your business goals and make architectural decisions that support them.",
                },
                {
                  title: "Performance obsessed",
                  desc: "I profile before I optimize, and I measure after. Every improvement is backed by data from Android Profiler and Systrace.",
                },
                {
                  title: "Architecture first",
                  desc: "I establish clean, maintainable patterns from day one. Your next developer will thank you for it.",
                },
                {
                  title: "Full-cycle delivery",
                  desc: "From architecture to Play Store submission — I handle the whole delivery cycle, not just code.",
                },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="p-5 rounded-xl border border-border bg-surface"
                >
                  <h3 className="text-white font-semibold mb-2 text-sm">{title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.5}>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Let&apos;s build something great
            </h2>
            <p className="text-muted mb-6">
              Available for consulting, contract work, and long-term engagements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-white hover:bg-surface transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
