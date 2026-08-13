import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { ensureCommentsTable, makeModerationToken } from "@/lib/comments"
import { pool } from "@/lib/db"
import { getBlogPost } from "@/lib/blog-posts"

const NOTIFY_TO = "christine.hoene@lifesafeservices.com"
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug")?.trim()
  if (!slug || !getBlogPost(slug)) {
    return NextResponse.json({ comments: [] }, { status: 400 })
  }

  await ensureCommentsTable()
  const result = await pool.query(
    `SELECT id, name, body, created_at
     FROM blog_comments
     WHERE post_slug = $1 AND approved = TRUE
     ORDER BY created_at ASC`,
    [slug],
  )

  return NextResponse.json({
    comments: result.rows.map((comment) => ({
      id: comment.id,
      name: comment.name,
      body: comment.body,
      createdAt: comment.created_at,
    })),
  })
}

export async function POST(request: NextRequest) {
  const data = await request.json().catch(() => null)
  const slug = String(data?.slug ?? "").trim()
  const name = String(data?.name ?? "").trim()
  const email = String(data?.email ?? "").trim().toLowerCase()
  const body = String(data?.body ?? "").trim()
  const website = String(data?.website ?? "").trim()
  const post = getBlogPost(slug)

  if (website) return NextResponse.json({ ok: true })
  if (!post || name.length < 2 || name.length > 80) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 })
  }
  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
  }
  if (body.length < 3 || body.length > 2000) {
    return NextResponse.json(
      { error: "Please enter a comment between 3 and 2,000 characters." },
      { status: 400 },
    )
  }

  await ensureCommentsTable()
  const token = makeModerationToken()
  await pool.query(
    `INSERT INTO blog_comments (post_slug, name, email, body, moderation_token)
     VALUES ($1, $2, $3, $4, $5)`,
    [slug, name, email || null, body, token],
  )

  const apiKey = process.env.RESEND_API_KEY
  if (apiKey) {
    const reviewUrl = `${request.nextUrl.origin}/comments/moderate/${token}`
    const resend = new Resend(apiKey)
    await resend.emails.send({
      from: "The Whistler's Daughter <christine.hoene@lifesafeservices.com>",
      to: NOTIFY_TO,
      replyTo: email || undefined,
      subject: `New blog comment from ${name}`,
      text: `A reader commented on “${post.title}.”\n\nName: ${name}\nEmail: ${email || "Not provided"}\n\n${body}\n\nReview it here: ${reviewUrl}`,
    }).catch((error) => console.error("Comment notification failed:", error))
  }

  return NextResponse.json({ ok: true })
}
