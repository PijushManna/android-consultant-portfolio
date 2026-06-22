import type { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone,
  Zap,
  RefreshCw,
  Layers,
  Database,
  TrendingUp,
  GitBranch,
  Code2,
  Upload,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { SERVICES } from "@/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Android consulting services: app development, MVP, Jetpack Compose migration, Firebase integration, performance optimization, architecture review, and Play Store publishing.",
};

const ICON_MAP: Record<string, React.ElementType> = {
  Smartphone,
  Zap,
  RefreshCw,
  Layers,
  Database,
  TrendingUp,
  GitBranch,
  Code2,
  Upload,
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="mb-16 text-center">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">
            Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Expert Android consulting,{" "}
            <span className="gradient-text">end to end</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            From greenfield app development to complex performance audits —
            every engagement is hands-on, production-focused, and outcome-driven.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="space-y-6">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] || Smartphone;
            return (
              <AnimatedSection key={service.id} delay={i * 0.05}>
                <div id={service.id} className="p-6 sm:p-8 rounded-2xl border border-border bg-surface hover:border-border-hover transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left: Main info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-white mb-1">
                            {service.title}
                          </h2>
                          <p className="text-muted leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div className="mt-6">
                        <h3 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">
                          Deliverables
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-sm text-muted">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right: Benefits + CTA */}
                    <div className="flex flex-col justify-between">
                      <div className="p-4 rounded-xl bg-surface-2 border border-border mb-4">
                        <h3 className="text-white text-xs font-semibold mb-3 uppercase tracking-wider">
                          Benefits
                        </h3>
                        <ul className="space-y-2">
                          {service.benefits.map((b) => (
                            <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <ArrowRight className="w-3 h-3 text-primary flex-shrink-0 mt-1" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                      >
                        Discuss this service
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="mt-16" delay={0.3}>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Not sure which service you need?
            </h2>
            <p className="text-muted max-w-lg mx-auto mb-8">
              Let&apos;s have a 30-minute call to discuss your Android project and figure
              out the best approach together. No commitment required.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary-hover transition-colors shadow-glow"
            >
              Schedule a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
