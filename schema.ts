import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  // stay | table | concierge | info
  kind: text("kind").notNull().default("info"),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  checkIn: text("check_in"),
  checkOut: text("check_out"),
  guests: integer("guests"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
