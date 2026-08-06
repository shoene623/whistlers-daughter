import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { blogPosts } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: "Blog | The Whistler's Daughter",
  description:
    "Stories about adventure, resilience, curiosity, and the courage to be a beginner by Christine “Kippy” Hoene.",
}

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-4xl px-4 py-20 text-center md:px-6 md:py-28">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              From Kippy
            </span>
            <h1 className="mt-4 text-balance font-serif text-4xl font-bold text-foreground md:text-6xl">
              Notes from a perpetual beginner
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Stories about adventure, resilience, curiosity, and choosing an
              expanding life—even when the path is uncertain.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg md:p-10"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="font-semibold uppercase tracking-[0.15em] text-accent">
                    {post.category}
                  </span>
                  <span aria-hidden="true">•</span>
                  <time>{post.date}</time>
                  <span aria-hidden="true">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-4 font-serif text-3xl font-bold text-foreground">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-primary"
                >
                  Read the story
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
