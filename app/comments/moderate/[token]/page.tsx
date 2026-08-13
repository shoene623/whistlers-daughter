import Link from "next/link"
import { notFound } from "next/navigation"
import { ensureCommentsTable } from "@/lib/comments"
import { pool } from "@/lib/db"

type ModerationPageProps = {
  params: Promise<{ token: string }>
  searchParams: Promise<{ status?: string }>
}

export default async function ModerationPage({ params, searchParams }: ModerationPageProps) {
  const { token } = await params
  const { status } = await searchParams
  if (!/^[a-f0-9]{48}$/.test(token)) notFound()

  await ensureCommentsTable()
  const result = await pool.query(
    `SELECT post_slug, name, email, body, approved, created_at
     FROM blog_comments WHERE moderation_token = $1 LIMIT 1`,
    [token],
  )
  const comment = result.rows[0]

  if (!comment) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-20">
        <h1 className="font-serif text-4xl font-bold">Comment reviewed</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          This comment is no longer awaiting review.
        </p>
        <Link className="mt-8 inline-block font-semibold text-primary" href="/blog">
          Return to the blog
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-20">
      <h1 className="font-serif text-4xl font-bold">Review blog comment</h1>
      {status === "approved" && (
        <p className="mt-5 rounded-lg bg-green-50 p-4 text-green-800">The comment is now public.</p>
      )}
      <div className="mt-8 rounded-2xl border border-border bg-card p-7 shadow-sm">
        <p className="font-semibold">{comment.name}</p>
        {comment.email && <p className="mt-1 text-sm text-muted-foreground">{comment.email}</p>}
        <p className="mt-5 whitespace-pre-wrap text-lg leading-8">{comment.body}</p>
        <p className="mt-5 text-sm text-muted-foreground">Post: {comment.post_slug}</p>
      </div>
      <form action="/api/comments/moderate" method="post" className="mt-7 flex flex-wrap gap-3">
        <input type="hidden" name="token" value={token} />
        <button
          type="submit"
          name="choice"
          value="approve"
          className="rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground"
        >
          {comment.approved ? "Keep approved" : "Approve comment"}
        </button>
        <button
          type="submit"
          name="choice"
          value="delete"
          className="rounded-lg border border-border px-5 py-3 font-semibold text-foreground"
        >
          Delete comment
        </button>
      </form>
    </main>
  )
}
