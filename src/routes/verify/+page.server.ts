import type {  PageServerLoad } from "./$types";
import { fetchResourcesByType, verifyResource } from "$lib/server/db/funcs";
import type { Resource, ResourceType } from "$lib/types";

export const load: PageServerLoad = async function ({ url }) {
  const category = url.searchParams.get("category");
  if (!category) return;
  if (
    category !== "course" &&
    category !== "research paper" &&
    category !== "textbooks" &&
    category !== "video"
  )
    return;

  const resources = (await fetchResourcesByType(
    category as ResourceType,
  )) as Resource[];

  console.log(resources);
  return { resources };
};


