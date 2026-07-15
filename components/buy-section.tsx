"use client"

import { useState } from "react"
import Image from "next/image"
import { BookOpen, Check, Mail } from "lucide-react"

export function BuySection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section id="buy" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="grid items-center gap-12 rounded-3xl border border-border bg-card p-8 md:grid-cols-2 md:p-12">
        <div className="flex justify-center">
          <Image
            src="/book-cover.jpg"
            alt="Book cover of The Whistler's Daughter"
            width={400}
            height={615}
            className="w-52 rounded-lg shadow-xl ring-1 ring-black/5 md:w-60"
          />
        </div>

        <div>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Get your copy of The Whistler&apos;s Daughter
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Available soon in print and eBook. Order the book, or join the list
            to be the first to know when it&apos;s released.
          </p>

          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-transform hover:scale-105"
          >
            <BookOpen className="size-4" />
            Order Now
          </a>

          <div className="mt-8 border-t border-border pt-8">
            <h3 className="flex items-center gap-2 font-semibold text-foreground">
              <Mail className="size-4 text-primary" />
              Join the mailing list
            </h3>
            {submitted ? (
              <p className="mt-3 flex items-center gap-2 text-sm font-medium text-primary">
                <Check className="size-4" />
                Thank you &mdash; you&apos;re on the list!
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-3 flex flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 rounded-full border border-input bg-background px-5 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <button
                  type="submit"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
