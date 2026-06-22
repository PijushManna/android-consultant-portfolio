import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Play } from "lucide-react";
import { PERSONAL } from "@/data";

const LINKS = {
  pages: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/apps", label: "Apps" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#android-app-development", label: "App Development" },
    { href: "/services#mvp-development", label: "MVP Development" },
    { href: "/services#jetpack-compose-migration", label: "Compose Migration" },
    { href: "/services#performance-optimization", label: "Performance Audit" },
    { href: "/services#architecture-consulting", label: "Architecture Consulting" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      {/* CTA Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="relative rounded-2xl border border-border bg-surface overflow-hidden p-8 sm:p-12 text-center">
          <div className="absolute inset-0 bg-hero-gradient opacity-50" />
          <div className="relative z-10">
            <p className="text-xs font-medium text-primary uppercase tracking-widest mb-4">
              Open to new projects
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to build something great?
            </h2>
            <p className="text-muted max-w-lg mx-auto mb-8">
              Let&apos;s discuss your Android project. I&apos;m available for consulting,
              contract work, and long-term engagements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-white">
                pijush<span className="text-primary">.</span>dev
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs mb-6">
              Senior Android Consultant specializing in Kotlin, Jetpack Compose,
              and scalable mobile architecture for startups and enterprises.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: PERSONAL.github, icon: Github, label: "GitHub" },
                { href: PERSONAL.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: PERSONAL.twitter, icon: Twitter, label: "Twitter" },
                { href: `mailto:${PERSONAL.email}`, icon: Mail, label: "Email" },
                { href: PERSONAL.playstore, icon: Play, label: "Play Store" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-white hover:border-border-hover transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              {LINKS.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            © {year} {PERSONAL.name}. All rights reserved.
          </p>
          <p className="text-muted text-sm">
            Built with Next.js · Deployed on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
}
