"use client";

import { useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Send,
  MapPin,
  CheckCircle,
  Play,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { PERSONAL } from "@/data";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    desc: "Direct line for project inquiries",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/pijushmanna",
    href: PERSONAL.github,
    desc: "Code, open source, project history",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/pijushmanna",
    href: PERSONAL.linkedin,
    desc: "Professional background & recommendations",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@bong_pijush",
    href: PERSONAL.twitter,
    desc: "Android dev thoughts & updates",
  },
  {
    icon: Play,
    label: "Play Store",
    value: "My Apps",
    href: PERSONAL.playstore,
    desc: "Published Android applications",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const subject = `[Android Consulting] ${form.type || "Inquiry"} from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nType: ${form.type}\n\n${form.message}`;
    window.location.href = `mailto:${PERSONAL.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let&apos;s build something{" "}
            <span className="gradient-text">great together</span>
          </h1>
          <p className="text-muted max-w-xl text-lg leading-relaxed">
            Available for Android consulting, contract development, and
            architecture engagements. Tell me about your project and I&apos;ll
            get back to you within 24 hours.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">
              Available for new projects
            </span>
            <span className="text-muted text-sm">·</span>
            <span className="flex items-center gap-1 text-muted text-sm">
              <MapPin className="w-3.5 h-3.5" />
              {PERSONAL.location}
            </span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection delay={0.1}>
            {submitted ? (
              <div className="p-8 rounded-2xl border border-green-500/20 bg-green-500/5 text-center h-full flex flex-col items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
                <h2 className="text-xl font-bold text-white mb-2">
                  Message sent!
                </h2>
                <p className="text-muted text-sm">
                  Your email client should have opened. I&apos;ll reply within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Alex Johnson"
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-white placeholder:text-muted text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-white placeholder:text-muted text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                    Company / Startup
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Acme Inc."
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-white placeholder:text-muted text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                    Project Type
                  </label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-white text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors appearance-none"
                  >
                    <option value="" className="bg-surface">Select a service</option>
                    <option value="Android App Development" className="bg-surface">Android App Development</option>
                    <option value="MVP Development" className="bg-surface">MVP Development</option>
                    <option value="Jetpack Compose Migration" className="bg-surface">Jetpack Compose Migration</option>
                    <option value="Performance Optimization" className="bg-surface">Performance Optimization</option>
                    <option value="Architecture Consulting" className="bg-surface">Architecture Consulting</option>
                    <option value="Code Review" className="bg-surface">Code Review</option>
                    <option value="Other" className="bg-surface">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                    Tell me about your project *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your Android project, challenges you're facing, timeline, and budget range..."
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-white placeholder:text-muted text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary-hover transition-colors shadow-glow"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>

                <p className="text-muted text-xs text-center">
                  This opens your email client. I reply within 24 hours.
                </p>
              </form>
            )}
          </AnimatedSection>

          {/* Contact Links */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-3">
              <h2 className="text-white font-semibold mb-6">Find me on</h2>
              {CONTACT_LINKS.map(({ icon: Icon, label, value, href, desc }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-border-hover hover:bg-surface-2 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-2 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium">{label}</p>
                    <p className="text-muted text-xs truncate">{value}</p>
                    <p className="text-muted text-xs hidden sm:block">{desc}</p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted flex-shrink-0" />
                </a>
              ))}

              {/* Availability note */}
              <div className="p-4 rounded-xl border border-border bg-surface mt-6">
                <h3 className="text-white text-sm font-semibold mb-2">
                  Availability
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Currently available for new consulting engagements. I take on
                  a limited number of clients to ensure quality delivery.
                  Reach out early to secure your spot.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
