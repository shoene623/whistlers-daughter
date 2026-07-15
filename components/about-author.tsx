const facts = [
  { label: "Sports Learned", value: "40+" },
  { label: "Years Leading LifeSafe", value: "30+" },
  { label: "Sons", value: "3" },
]

export function AboutAuthor() {
  return (
    <section id="author" className="mx-auto max-w-5xl px-4 py-20 md:px-6 md:py-28">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            About the Author
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Christine
            <br />
            &ldquo;Kippy&rdquo; Hoene
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Entrepreneur, author, adventurer, and lifelong believer in the
            courage of being a beginner.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-4">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl border border-border bg-card p-4 text-center"
              >
                <dt className="sr-only">{fact.label}</dt>
                <dd className="font-serif text-2xl font-bold text-primary">
                  {fact.value}
                </dd>
                <dd className="mt-1 text-xs leading-tight text-muted-foreground">
                  {fact.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
          <p>
            Over the years, Kippy has learned more than forty sports &mdash;
            rock climbing, scuba diving, kite surfing, trapeze, aerial arts,
            mountain biking &mdash; on mountains, oceans, rivers, cliffs, and in
            the air. She has never considered herself naturally athletic,
            fearless, or graceful. What she has is curiosity, persistence, and a
            willingness to be a beginner again and again.
          </p>
          <p>
            For more than thirty years, she has also led{" "}
            <span className="font-medium text-foreground">LifeSafe Services</span>,
            a national company focused on emergency preparedness and safety
            training &mdash; building a business while raising a family and
            navigating a progressive medical condition.
          </p>
          <p>
            At the center of her life are her three sons, two daughters-in-law,
            and her partner, Marc &mdash; many of whom have joined her on the
            adventures woven throughout her story, sharing remote trails,
            ambitious plans, and the inevitable mishaps of saying yes before
            fully understanding what&apos;s involved.
          </p>
          <p>
            Kippy wrote this book to share the humor, heartbreak, chaos, and
            surprising beauty of a life shaped by uncertainty and adventure
            &mdash; and to encourage readers to question the limits they&apos;ve
            accepted and stay curious about what&apos;s still possible.
          </p>
        </div>
      </div>
    </section>
  )
}
