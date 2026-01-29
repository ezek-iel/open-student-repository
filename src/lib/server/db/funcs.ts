import { Resource } from "./schema";
import { db } from ".";
import { eq, like } from "drizzle-orm";
import type {
  ResourceType,
  Operation,
  Resource as ResourceParam,
} from "$lib/types";

export async function fetchAllResources() {
  return await db.select().from(Resource);
}

export async function fetchResourceByID(id: number) {
  return await db.select().from(Resource).where(eq(Resource.id, id));
}

export async function fetchResourceBySearchQuery(query: string) {
  if (query.length != 0)
    return await db
      .select()
      .from(Resource)
      .where(like(Resource.name, `%${query}%`));
  else return await fetchAllResources();
}

export async function updateAllResourceInfo(
  id: number,
  data: Omit<ResourceParam, "price" | "date" | "id">,
) {
  return await db
    .update(Resource)
    .set({ ...data })
    .where(eq(Resource.id, id));
}

export async function fetchAllRejectedResources() {
  return await db
    .select()
    .from(Resource)
    .where(eq(Resource.verified, "rejected"));
}

export async function fetchAllPendingResources() {
  return await db
    .select()
    .from(Resource)
    .where(eq(Resource.verified, "pending"));
}

export async function fetchAllVerifiedResources() {
  return await db
    .select()
    .from(Resource)
    .where(eq(Resource.verified, "verified"));
}

export async function fetchResourcesByType(type: ResourceType) {
  return await db.select().from(Resource).where(eq(Resource.type, type));
}

export async function verifyResource(id: number): Promise<Operation> {
  try {
    await db
      .update(Resource)
      .set({ verified: "verified" })
      .where(eq(Resource.id, id));
  } catch (ex: unknown) {
    return { type: "Failure", message: ex as string };
  }

  return { type: "Success", message: "Verification Successful" };
}

export async function rejectResource(id: number): Promise<Operation> {
  try {
    await db
      .update(Resource)
      .set({ verified: "rejected" })
      .where(eq(Resource.id, id));
  } catch (ex: unknown) {
    return { type: "Failure", message: ex as string };
  }

  return { type: "Success", message: "Rejection Successful" };
}
