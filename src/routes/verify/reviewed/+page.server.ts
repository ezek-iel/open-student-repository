import { fetchAllVerifiedResources } from "$lib/server/db/funcs";
import type { Resource } from "$lib/types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function () {
  const resources = (await fetchAllVerifiedResources()) as Resource[]
  return {resources}
}