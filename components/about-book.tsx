import { Quote } from "lucide-react"

export function AboutBook() {
  return (
    <section id="book" className="mx-auto max-w-4xl px-4 py-20 md:px-6 md:py-28">
      <div className="text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          About the Book
        </span>
        <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
          A story about strength that doesn&apos;t always look dramatic
        </h2>
      </div>

      <div className="mt-10 space-y-6 text-pretty text-lg leading-relaxed text-muted-foreground">
        <p>
          After being diagnosed with facioscapulohumeral muscular dystrophy,
          Kippy faced doctors&apos; warnings that her physical abilities would
          become increasingly limited. Rather than let that prediction define
          her, she became more determined to discover what she could still do.
        </p>
        <p>
          This is not a simple story of overcoming adversity. It includes
          spectacular wins, awkward failures, painful losses, and unexpected
          friendships. Strength, Kippy learned, sometimes means starting over,
          asking for help, or simply refusing to surrender the parts of yourself
          that still feel alive.
        </p>
      </div>

      <figure className="mt-12 rounded-2xl border border-border bg-card p-8 md:p-10">
        <Quote className="size-8 text-accent" aria-hidden="true" />
        <blockquote className="mt-4 text-pretty font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
          &ldquo;What she has is curiosity, persistence, and a willingness to be
          a beginner again and again.&rdquo;
        </blockquote>
      </figure>
    </section>
  )
}
