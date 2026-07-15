const sports = [
  "Rock Climbing",
  "Scuba Diving",
  "Kite Surfing",
  "Trapeze",
  "Aerial Arts",
  "Mountain Biking",
]

export function Adventures() {
  return (
    <section id="adventures" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          The Adventures
        </span>
        <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
          More than forty sports, one new beginning at a time
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          On mountains, oceans, rivers, cliffs, and in the air &mdash; learning
          to be a beginner again and again.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {sports.map((sport) => (
            <span
              key={sport}
              className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground"
            >
              {sport}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
