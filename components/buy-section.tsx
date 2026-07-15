"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import Image from "next/image"
import { Check, Mail, AlertCircle } from "lucide-react"
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist"

const initialState: WaitlistState = { status: "idle", message: "" }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Joining..." : "Notify Me"}
    </button>
  )
}

export function BuySection() {
  const [state, formAction] = useActionState(joinWaitlist, initialState)

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
            Be the first to read The Whistler&apos;s Daughter
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Join the list to be the first to know when the book is available.
          </p>

          <div className="mt-6">
            <h3 className="flex items-center gap-2 font-semibold text-foreground">
              <Mail className="size-4 text-primary" />
              Join the mailing list
            </h3>

            {state.status === "success" ? (
              <p className="mt-3 flex items-center gap-2 text-sm font-medium text-primary">
                <Check className="size-4 shrink-0" />
                {state.message}
              </p>
            ) : (
              <form action={formAction} className="mt-3 flex flex-col gap-3">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <label htmlFor="name" className="sr-only">
                    Your name (optional)
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name (optional)"
                    className="flex-1 rounded-full border border-input bg-background px-5 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="flex-1 rounded-full border border-input bg-background px-5 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  <SubmitButton />
                </div>
                {state.status === "error" && (
                  <p className="flex items-center gap-2 text-sm font-medium text-accent">
                    <AlertCircle className="size-4 shrink-0" />
                    {state.message}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
