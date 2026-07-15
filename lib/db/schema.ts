import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
})
