const quotes = [
  {
    text: "Sometimes strength means starting over, asking for help, or simply refusing to surrender the parts of yourself that still feel alive.",
    source: "From the book",
  },
  {
    text: "A story that will make you laugh, break your heart, and quietly dare you to try the thing you've been afraid of.",
    source: "Early reader",
  },
  {
    text: "It encourages you to question the limits you've accepted and stay curious about what's still possible.",
    source: "From the author",
  },
]

export function Praise() {
  return (
    <section id="praise" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
            Praise
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-bold md:text-4xl">
            Words for the journey
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((quote) => (
            <figure
              key={quote.source}
              className="flex flex-col rounded-2xl bg-primary-foreground/10 p-7 backdrop-blur-sm"
            >
              <blockquote className="flex-1 text-pretty font-serif text-lg italic leading-relaxed">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
                {quote.source}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
