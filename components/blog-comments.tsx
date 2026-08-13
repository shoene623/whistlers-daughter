"use client"

import { FormEvent, useCallback, useEffect, useState } from "react"
import type { PublicComment } from "@/lib/comments"

export function BlogComments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<PublicComment[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const loadComments = useCallback(async () => {
    try {
      const response = await fetch(`/api/comments?slug=${encodeURIComponent(slug)}`)
      const data = await response.json()
      setComments(data.comments ?? [])
    } finally {
      setLoading(false)
    }
  }, [slug])

  useEffect(() => {
    loadComments()
  }, [loadComments])

  async function submitComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setMessage("")
    const form = event.currentTarget
    const formData = new FormData(form)

    const response = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        slug,
        name: formData.get("name"),
        email: formData.get("email"),
        body: formData.get("body"),
        website: formData.get("website"),
      }),
    })
    const data = await response.json()
    setSubmitting(false)

    if (!response.ok) {
      setMessage(data.error ?? "Something went wrong. Please try again.")
      return
    }

    form.reset()
    setMessage("Thank you! Your comment will appear after Kippy reviews it.")
  }

  return (
    <section className="mt-16 border-t border-border pt-12" aria-labelledby="comments-heading">
      <h2 id="comments-heading" className="font-serif text-3xl font-bold md:text-4xl">
        Join the conversation
      </h2>
      <p className="mt-3 text-lg text-muted-foreground">
        Have a question or a thought about this story? I’d love to hear it.
      </p>

      <form onSubmit={submitComment} className="mt-8 space-y-5 rounded-2xl bg-secondary/40 p-6 md:p-8">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="font-semibold">
            Name
            <input
              required
              maxLength={80}
              name="name"
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 font-normal"
            />
          </label>
          <label className="font-semibold">
            Email <span className="font-normal text-muted-foreground">(optional and never shown)</span>
            <input
              type="email"
              name="email"
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 font-normal"
            />
          </label>
        </div>
        <label className="block font-semibold">
          Comment or question
          <textarea
            required
            minLength={3}
            maxLength={2000}
            rows={5}
            name="body"
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 font-normal"
          />
        </label>
        <label className="absolute -left-[10000px]" aria-hidden="true">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <button
          disabled={submitting}
          className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Post a comment"}
        </button>
        {message && <p className="font-medium" role="status">{message}</p>}
        <p className="text-sm text-muted-foreground">Comments are reviewed before they appear publicly.</p>
      </form>

      <div className="mt-10 space-y-5">
        {loading ? (
          <p className="text-muted-foreground">Loading comments…</p>
        ) : comments.length === 0 ? (
          <p className="text-muted-foreground">Be the first to leave a comment or question.</p>
        ) : (
          comments.map((comment) => (
            <article key={comment.id} className="rounded-xl border border-border bg-card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-semibold">{comment.name}</p>
                <time className="text-sm text-muted-foreground">
                  {new Date(comment.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              <p className="mt-4 whitespace-pre-wrap leading-7 text-foreground/85">{comment.body}</p>
            </article>
          ))
        )}
      </div>
    </section>
  )
}
