import type { Metadata } from "next";
import { Github, ExternalLink, Layers } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Badge from "@/components/ui/Badge";
import { PROJECTS, PERSONAL } from "@/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Open-source Android projects by Pijush Manna: Expense Tracker, Onboarding SDK, Analytics SDK, KMP Media Player, and more.",
};

const TYPE_COLORS: Record<string, string> = {
  "Android App": "text-green-400 bg-green-400/10 border-green-400/20",
  "Android SDK": "text-blue-400 bg-blue-400/10 border-blue-400/20",
  "KMP Library": "text-purple-400 bg-purple-400/10 border-purple-400/20",
  "Demo Project": "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">
            Projects
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Open source &{" "}
            <span className="gradient-text">side projects</span>
          </h1>
          <p className="text-muted max-w-2xl text-lg leading-relaxed">
            A selection of Android repositories showcasing architecture patterns,
            SDK design, Kotlin Multiplatform, and more.
          </p>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-sm text-primary hover:text-primary-light transition-colors"
          >
            <Github className="w-4 h-4" />
            View all on GitHub
          </a>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.08}>
              <div className="p-6 rounded-2xl border border-border bg-surface card-hover h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-2 border border-border flex items-center justify-center">
                    <Layers className="w-5 h-5 text-muted" />
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full border ${
                      TYPE_COLORS[project.type] || "text-muted bg-surface-2 border-border"
                    }`}
                  >
                    {project.type}
                  </span>
                </div>

                <h2 className="text-white font-bold text-lg mb-2">{project.name}</h2>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((h) => (
                    <span key={h} className="text-xs text-muted-foreground bg-surface-2 px-2 py-0.5 rounded-md border border-border">
                      {h}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="default">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-muted hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    View on GitHub
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* GitHub CTA */}
        <AnimatedSection className="mt-16" delay={0.3}>
          <div className="rounded-2xl border border-border bg-surface p-8 text-center">
            <Github className="w-8 h-8 text-muted mx-auto mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">More on GitHub</h2>
            <p className="text-muted text-sm mb-6">
              These are just the public highlights. Check my GitHub for the full picture.
            </p>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-white hover:bg-surface-2 transition-colors"
            >
              View GitHub Profile
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
