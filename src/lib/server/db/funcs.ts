import { Resource } from "./schema";
import { db } from ".";
import { eq } from "drizzle-orm";

export async function fetchAllResources() {
  return await db.select().from(Resource);
}

export async function fetchResourceByID(id: number) {
  return db.select().from(Resource).where(eq(Resource.id, id) )
}
