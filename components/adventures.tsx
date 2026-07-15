import Image from "next/image"

const gallery = [
  {
    src: "/adventure-climbing.png",
    title: "Rock Climbing",
    caption: "Finding footholds where none seemed possible.",
  },
  {
    src: "/adventure-diving.png",
    title: "Scuba Diving",
    caption: "Weightless, curious, and wide awake beneath the surface.",
  },
  {
    src: "/adventure-kitesurf.png",
    title: "Kite Surfing",
    caption: "Letting the wind carry what muscles no longer could.",
  },
]

const sports = [
  "Rock Climbing",
  "Scuba Diving",
  "Kite Surfing",
  "Trapeze",
  "Aerial Arts",
  "Mountain Biking",
  "Wing Walking",
  "Whitewater Rafting",
  "& 30+ more",
]

export function Adventures() {
  return (
    <section id="adventures" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            The Adventures
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            More than forty sports, one new beginning at a time
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            On mountains, oceans, rivers, cliffs, and in the air &mdash; often
            alongside her three sons and her partner, Marc, who kept saying yes
            before fully understanding what was involved.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {gallery.map((item) => (
            <figure
              key={item.title}
              className="group overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <figcaption className="p-5">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

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
