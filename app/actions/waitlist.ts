"use server"

import { db } from "@/lib/db"
import { waitlist } from "@/lib/db/schema"
import { eq } from "drizzle-orm"

export type WaitlistState = {
  status: "idle" | "success" | "error"
  message: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function joinWaitlist(
  _prevState: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase()
  const name = String(formData.get("name") ?? "").trim()

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email address." }
  }

  try {
    const existing = await db
      .select({ id: waitlist.id })
      .from(waitlist)
      .where(eq(waitlist.email, email))
      .limit(1)

    if (existing.length > 0) {
      return {
        status: "success",
        message: "You're already on the list. We'll be in touch soon!",
      }
    }

    await db.insert(waitlist).values({ email, name: name || null })

    return {
      status: "success",
      message: "You're on the list! We'll email you when the book is available.",
    }
  } catch (error) {
    console.error("[v0] waitlist insert failed:", error)
    return {
      status: "error",
      message: "Something went wrong. Please try again in a moment.",
    }
  }
}
