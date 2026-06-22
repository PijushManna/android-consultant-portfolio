import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight, Rss } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Badge from "@/components/ui/Badge";
import { BLOG_POSTS } from "@/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Android development articles by Pijush Manna: Jetpack Compose best practices, performance optimization, MVVM vs MVI, Firebase architecture, and Kotlin Coroutines.",
};

export default function BlogPage() {
  const featured = BLOG_POSTS.filter((p) => p.featured);
  const rest = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">
                Blog
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Writing on{" "}
                <span className="gradient-text">Android engineering</span>
              </h1>
              <p className="text-muted max-w-xl text-lg">
                Practical guides, architecture deep dives, and lessons learned from
                building production Android apps.
              </p>
            </div>
            <Rss className="w-8 h-8 text-muted hidden sm:block" />
          </div>
        </AnimatedSection>

        {/* Featured Posts */}
        <AnimatedSection delay={0.1}>
          <h2 className="text-xs font-semibold text-muted uppercase tracking-wider mb-6">
            Featured
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {featured.map((post, i) => (
            <AnimatedSection key={post.id} delay={i * 0.1}>
              <article className="p-6 rounded-2xl border border-primary/20 bg-primary/5 card-hover h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="primary">Featured</Badge>
                  <span className="flex items-center gap-1 text-xs text-muted">
                    <Clock className="w-3 h-3" />
                    {post.readTime} read
                  </span>
                </div>
                <h2 className="text-white font-bold text-xl mb-3 leading-snug">
                  {post.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed flex-1 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="default">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-primary text-sm font-medium mt-auto">
                  Read article <ArrowRight className="w-4 h-4" />
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* Rest of Posts */}
        <AnimatedSection delay={0.2}>
          <h2 className="text-xs font-semibold text-muted uppercase tracking-wider mb-6">
            All Articles
          </h2>
        </AnimatedSection>
        <div className="space-y-4">
          {BLOG_POSTS.map((post, i) => (
            <AnimatedSection key={post.id} delay={i * 0.05}>
              <article className="p-5 rounded-xl border border-border bg-surface card-hover">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-white font-semibold mb-1.5 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="default">
                          {tag}
                        </Badge>
                      ))}
                      <span className="flex items-center gap-1 text-xs text-muted ml-auto">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted flex-shrink-0 mt-1" />
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* Coming soon */}
        <AnimatedSection className="mt-16" delay={0.3}>
          <div className="rounded-2xl border border-border bg-surface p-8 text-center">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
              <Rss className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              More articles coming soon
            </h2>
            <p className="text-muted text-sm">
              Subscribe to get notified when new articles are published.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg border border-border text-white text-sm hover:bg-surface-2 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
