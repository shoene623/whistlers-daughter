import { randomBytes } from "crypto"
import { pool } from "@/lib/db"

export type PublicComment = {
  id: number
  name: string
  body: string
  createdAt: string
}

export async function ensureCommentsTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS blog_comments (
      id SERIAL PRIMARY KEY,
      post_slug TEXT NOT NULL,
      name TEXT NOT NULL,
      email TEXT,
      body TEXT NOT NULL,
      approved BOOLEAN NOT NULL DEFAULT FALSE,
      moderation_token TEXT NOT NULL UNIQUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `)
  await pool.query(`
    CREATE INDEX IF NOT EXISTS blog_comments_post_slug_idx
    ON blog_comments (post_slug, approved, created_at)
  `)
}

export function makeModerationToken() {
  return randomBytes(24).toString("hex")
}
