import Image from "next/image"
import { BookOpen, Star } from "lucide-react"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:gap-12 md:px-6 md:py-24">
        <div className="order-2 md:order-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary-foreground">
            <Star className="size-3.5 fill-accent text-accent" />
            A New Memoir
          </span>

          <p className="mt-4 inline-flex rounded-full border border-primary/20 bg-background/80 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
            This website is now editable via ChatGPT.
          </p>

          <h1 className="mt-6 text-balance font-serif text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
            The Whistler&apos;s Daughter
          </h1>

          <p className="mt-4 text-pretty font-serif text-xl italic text-primary md:text-2xl">
            Defying My Prognosis One New Sport at a Time
          </p>

          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            When doctors told Kippy Hoene her body would only do less, she went
            looking for what it could still do &mdash; learning more than forty
            sports on mountains, oceans, rivers, cliffs, and in the open air.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#buy"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-transform hover:scale-105"
            >
              <BookOpen className="size-4" />
              Join the List
            </a>
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              About the Book
            </a>
          </div>

          <p className="mt-6 text-sm font-medium text-muted-foreground">
            by Christine &ldquo;Kippy&rdquo; Hoene
          </p>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-2xl bg-primary/15 blur-2xl"
              aria-hidden="true"
            />
            <Image
              src="/book-cover.jpg"
              alt="Book cover of The Whistler's Daughter showing a woman wing-walking on a red biplane against a blue sky"
              width={520}
              height={800}
              priority
              className="relative w-64 rounded-lg shadow-2xl ring-1 ring-black/5 md:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
