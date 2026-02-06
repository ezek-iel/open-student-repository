import type { PageServerLoad } from "./$types";
import {
  fetchAllResources,
  fetchResourcesUsingPostgres,
} from "$lib/server/db/funcs";
import type { Resource } from "$lib/types";

export const load: PageServerLoad = async function ({ url }) {
  const searchTerm = url.searchParams.get("q");

  /**
   * e.g. beginner-advanced advanced-intermediate
   */
  const levelsString = url.searchParams.get("level");

  let resources: Resource[];
  if (!searchTerm) resources = await fetchAllResources();
  else
    resources = (await fetchResourcesUsingPostgres(
      searchTerm,
    )) as unknown as Resource[];

  if (!levelsString) return { resources };
  const levels = levelsString.split("-");
  resources = resources.filter((resource) => levels.includes(resource.level));

  return { resources };
};
