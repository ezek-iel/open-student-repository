import type { PageServerLoad } from "./$types";
import {
  fetchAllResources,
  fetchResourceBySearchQuery,
} from "$lib/server/db/funcs";

export const load: PageServerLoad = async function ({ url }) {
  const searchTerm = url.searchParams.get("q");
  if (!searchTerm) return { resources: await fetchAllResources() };
  return { resources: await fetchResourceBySearchQuery(searchTerm) };
};
