import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Github, Star, Download } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Badge from "@/components/ui/Badge";
import { APPS, PERSONAL } from "@/data";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Android apps published by Pijush Manna on the Google Play Store: CodeBox, One Minute Math, Code Master, Ball Flow, QR Scanner, and more.",
};

const CATEGORY_COLORS: Record<string, string> = {
  "Developer Tools": "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Education: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  Tools: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  Games: "text-purple-400 bg-purple-400/10 border-purple-400/20",
};

export default function AppsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">
            Apps
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Published on{" "}
            <span className="gradient-text">Google Play</span>
          </h1>
          <p className="text-muted max-w-2xl text-lg leading-relaxed">
            Android apps I&apos;ve built and shipped independently — from developer
            tools to educational games.
          </p>
          <div className="mt-6">
            <a
              href={PERSONAL.playstore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors"
            >
              View all on Play Store <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </AnimatedSection>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {APPS.map((app, i) => (
            <AnimatedSection key={app.id} delay={i * 0.08}>
              <div className="p-6 rounded-2xl border border-border bg-surface card-hover h-full flex flex-col">
                {/* App Icon placeholder */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center text-2xl font-black text-primary flex-shrink-0">
                    {app.name.charAt(0)}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full border ${
                        CATEGORY_COLORS[app.category] || "text-muted bg-surface-2 border-border"
                      }`}
                    >
                      {app.category}
                    </span>
                    {app.rating && (
                      <div className="flex items-center gap-1 text-xs text-yellow-400">
                        <Star className="w-3 h-3 fill-current" />
                        {app.rating}
                      </div>
                    )}
                  </div>
                </div>

                <h2 className="text-white font-bold text-lg mb-2">{app.name}</h2>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                  {app.description}
                </p>

                {/* Downloads */}
                {app.downloads && (
                  <div className="flex items-center gap-1 text-xs text-muted mb-4">
                    <Download className="w-3 h-3" />
                    {app.downloads} downloads
                  </div>
                )}

                {/* Features */}
                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                    Features
                  </h3>
                  <ul className="space-y-1">
                    {app.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {app.stack.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <a
                    href={app.playstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-medium hover:bg-primary/20 transition-colors"
                  >
                    Play Store <ExternalLink className="w-3 h-3" />
                  </a>
                  {app.github && (
                    <a
                      href={app.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-border text-muted text-xs hover:text-white hover:border-border-hover transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Play Store CTA */}
        <AnimatedSection className="mt-16" delay={0.3}>
          <div className="rounded-2xl border border-border bg-surface p-8 text-center">
            <p className="text-muted mb-4">Want to see more apps?</p>
            <a
              href={PERSONAL.playstore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-white hover:bg-surface-2 transition-colors"
            >
              View all apps on Play Store
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
