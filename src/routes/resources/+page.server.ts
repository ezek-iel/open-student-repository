import type { PageServerLoad } from "./$types";
import { fetchAllResources } from "$lib/server/db/funcs";

export const load: PageServerLoad = async function () {
  return { resources: await fetchAllResources() };
};
