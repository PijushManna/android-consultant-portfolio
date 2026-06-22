import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Badge from "@/components/ui/Badge";
import { CASE_STUDIES } from "@/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real Android consulting case studies: multi-tenant delivery systems, inventory management modernization, app performance optimization, and analytics SDK development.",
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">
            Case Studies
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Real problems,{" "}
            <span className="gradient-text">production solutions</span>
          </h1>
          <p className="text-muted max-w-2xl text-lg leading-relaxed">
            Each case study documents the challenge, the technical decisions made,
            the architecture chosen, and the measurable result delivered.
          </p>
        </AnimatedSection>

        {/* Case Studies */}
        <div className="space-y-16">
          {CASE_STUDIES.map((cs, i) => (
            <AnimatedSection key={cs.id} delay={i * 0.1} id={cs.id}>
              <article className="relative">
                {/* Number */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-black text-border/60 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary">{cs.role}</Badge>
                    <Badge variant="outline">
                      <Clock className="w-3 h-3 mr-1" />
                      {cs.duration}
                    </Badge>
                    <Badge variant="outline">
                      <User className="w-3 h-3 mr-1" />
                      {cs.client}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface">
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {cs.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {cs.summary}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Challenge */}
                    <div>
                      <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                        The Challenge
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">{cs.challenge}</p>
                    </div>

                    {/* Approach */}
                    <div>
                      <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                        The Approach
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">{cs.approach}</p>
                    </div>
                  </div>

                  {/* Technical Decisions */}
                  <div className="mb-6">
                    <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                      Key Technical Decisions
                    </h3>
                    <ul className="space-y-2">
                      {cs.technicalDecisions.map((td) => (
                        <li key={td} className="flex items-start gap-2 text-sm text-muted">
                          <ArrowRight className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                          {td}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {/* Architecture */}
                    <div className="p-4 rounded-xl bg-surface-2 border border-border">
                      <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                        Architecture
                      </h3>
                      <p className="text-white text-sm font-medium">{cs.architecture}</p>
                    </div>

                    {/* Stack */}
                    <div className="p-4 rounded-xl bg-surface-2 border border-border">
                      <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                        Stack
                      </h3>
                      <div className="flex flex-wrap gap-1">
                        {cs.stack.map((t) => (
                          <Badge key={t} variant="default">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20 mb-4">
                    <h3 className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">
                      Result
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{cs.result}</p>
                  </div>

                  {/* Lessons */}
                  <div>
                    <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                      Lessons Learned
                    </h3>
                    <p className="text-muted text-sm leading-relaxed italic">
                      &ldquo;{cs.lessons}&rdquo;
                    </p>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-20" delay={0.3}>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Have a similar challenge?
            </h2>
            <p className="text-muted mb-6">
              Let&apos;s discuss how I can help solve your Android engineering problem.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors"
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
