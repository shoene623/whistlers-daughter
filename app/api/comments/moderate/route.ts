import { NextRequest, NextResponse } from "next/server"
import { ensureCommentsTable } from "@/lib/comments"
import { pool } from "@/lib/db"

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const token = String(formData.get("token") ?? "")
  const choice = String(formData.get("choice") ?? "")
  const returnUrl = new URL(`/comments/moderate/${token}`, request.nextUrl.origin)

  if (!/^[a-f0-9]{48}$/.test(token)) {
    returnUrl.searchParams.set("status", "invalid")
    return NextResponse.redirect(returnUrl, 303)
  }

  await ensureCommentsTable()
  if (choice === "approve") {
    await pool.query(
      "UPDATE blog_comments SET approved = TRUE WHERE moderation_token = $1",
      [token],
    )
    returnUrl.searchParams.set("status", "approved")
  } else if (choice === "delete") {
    await pool.query("DELETE FROM blog_comments WHERE moderation_token = $1", [token])
    returnUrl.searchParams.set("status", "deleted")
  } else {
    returnUrl.searchParams.set("status", "invalid")
  }

  return NextResponse.redirect(returnUrl, 303)
}
