import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const Resource = pgTable("resource", {
  id: integer().primaryKey().generatedByDefaultAsIdentity(),
  verified: text("verified").notNull().default("false"),
  name: text("name").notNull(),
  link: text("link").notNull(),
  details: text("details").notNull(),
  category: text("category").notNull(), // By department, not by STEM or arts or anything.
  price: integer("price").notNull(),
  level: text("level").notNull(),
  type: text("type").notNull(),
  source: text("source").notNull(),
  date: text("date")
    .notNull()
    .$defaultFn(() => new Date().toString()),
});
