import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const Resource = sqliteTable("resource", {
  id: integer().primaryKey(),
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
