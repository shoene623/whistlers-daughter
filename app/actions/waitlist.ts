"use server"

import { db } from "@/lib/db"
import { waitlist } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { Resend } from "resend"

const NOTIFY_TO = "christine.hoene@lifesafeservices.com"

async function notifyAuthor(email: string, name: string) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("[v0] RESEND_API_KEY not set; skipping notification email")
    return
  }

  try {
    const resend = new Resend(apiKey)
    await resend.emails.send({
      from: "The Whistler's Daughter <onboarding@resend.dev>",
      to: NOTIFY_TO,
      replyTo: email,
      subject: "New waitlist signup",
      text: `A new reader joined the waitlist for The Whistler's Daughter.\n\nName: ${
        name || "(not provided)"
      }\nEmail: ${email}`,
    })
  } catch (error) {
    console.error("[v0] waitlist notification email failed:", error)
  }
}

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

    await notifyAuthor(email, name)

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
