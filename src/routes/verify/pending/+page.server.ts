import type { PageServerLoad, Actions } from "./$types";
import { fetchAllPendingResources, verifyResource, rejectResource } from "$lib/server/db/funcs";
import type { Resource } from "$lib/types";

export const load: PageServerLoad = async function () {
  const resources = (await fetchAllPendingResources()) as Resource[];
  return { resources };
};

export const actions: Actions = {
  verify: async function ({ request }) {
    const form = await request.formData();
    const resourceId = form.get("resourceId") as string;
    const result = await verifyResource(parseInt(resourceId));
    console.log(result);
    return result;
  },

  reject: async function ({ request }) {
    const form = await request.formData();
    const resourceId = form.get("resourceId") as string;
    const result = await rejectResource(parseInt(resourceId));
    console.log(result);
    return result;
  }
};
